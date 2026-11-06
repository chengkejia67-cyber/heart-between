import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const args = process.argv.slice(2);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', args.includes('--source') ? '.' : 'dist');
const portIndex = args.indexOf('--port');
const port = portIndex >= 0 ? Number(args[portIndex + 1]) : Number(process.env.PORT || 8766);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid port');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Invalid path'); return; }
  if (pathname.split('/').some(part => part.startsWith('.') && part !== '.nojekyll') || pathname.includes('\0')) { res.writeHead(404); res.end('Not found'); return; }
  let file = resolve(root, '.' + pathname);
  if (file !== root && !file.startsWith(root + sep)) { res.writeHead(404); res.end('Not found'); return; }
  try {
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(308, { Location: pathname + '/' }); res.end(); return; }
      file = resolve(file, 'index.html');
    }
    const data = await readFile(file);
    res.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream');
    res.setHeader('Cache-Control', /\.[a-f0-9]{12}\.(js|css)$/.test(file) ? 'public, max-age=31536000, immutable' : 'no-cache');
    res.writeHead(200);
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    try { res.end(req.method === 'HEAD' ? undefined : await readFile(resolve(root, '404.html'))); }
    catch { res.end('Not found. Run the production build first.'); }
  }
});
server.listen(port, '127.0.0.1', () => console.log(`心间: http://127.0.0.1:${port}/ (${args.includes('--source') ? 'source' : 'production build'})`));
