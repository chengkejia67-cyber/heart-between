import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve, basename, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const siteURL = new URL(process.env.SITE_URL || pkg.homepage);
if (!['https:', 'http:'].includes(siteURL.protocol)) throw new Error('SITE_URL must use HTTP(S)');
const safeURL = siteURL.href.replaceAll('&', '&amp;').replaceAll('\"', '&quot;');
const hash = text => createHash('sha256').update(text).digest('hex').slice(0, 12);
await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, 'assets'), { recursive: true });
const emitted = new Map();
const inProgress = new Set();
async function emitModule(name) {
  if (emitted.has(name)) return emitted.get(name);
  if (!/^[\w-]+\.js$/.test(name) || inProgress.has(name)) throw new Error(`Invalid or circular module: ${name}`);
  inProgress.add(name);
  let source = await readFile(resolve(root, name), 'utf8');
  const imports = [...source.matchAll(/(?:from\s*|import\s*\(\s*)['"]\.\/([\w-]+\.js)['"]/g)].map(match => match[1]);
  for (const dependency of new Set(imports)) {
    const filename = await emitModule(dependency);
    source = source.replaceAll(`'./${dependency}'`, `'./${filename}'`).replaceAll(`"./${dependency}"`, `"./${filename}"`);
  }
  const filename = `${basename(name, '.js')}.${hash(source)}.js`;
  await writeFile(resolve(output, 'assets', filename), source);
  inProgress.delete(name);
  emitted.set(name, filename);
  return filename;
}
const entry = await emitModule('bootstrap.js');
const css = await readFile(resolve(root, 'styles.css'), 'utf8');
const cssName = `styles.${hash(css)}.css`;
await writeFile(resolve(output, 'assets', cssName), css);
let html = await readFile(resolve(root, 'index.html'), 'utf8');
html = html.replace('src="bootstrap.js"', `src="./assets/${entry}"`).replace('href="styles.css"', `href="./assets/${cssName}"`);
html = html.replace('</head>', `<link rel="canonical" href="${safeURL}"><meta property="og:url" content="${safeURL}"></head>`);
await writeFile(resolve(output, 'index.html'), html);
await writeFile(resolve(output, '.nojekyll'), '');
await writeFile(resolve(output, '404.html'), `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>页面未找到 · 心间</title><body style="margin:0;background:#f8f6f0;color:#303c36;font:16px/1.8 system-ui;text-align:center;padding:20vh 24px"><h1>这个页面暂时不存在</h1><p>可以返回心间首页，继续你的探索。</p><a href="${safeURL}">返回首页 →</a></body></html>`);
await writeFile(resolve(output, 'build-info.json'), JSON.stringify({ product: 'heart-between', version: pkg.version, modules: Object.fromEntries(emitted), css: cssName }, null, 2));
console.log(`Built ${emitted.size} modules + CSS with content hashes. Output: dist/`);
