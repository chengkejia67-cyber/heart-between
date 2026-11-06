import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
test('production build contains only website files, uses relative content-hashed assets and resolves imports', () => {
  execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: root });
  const html = readFileSync(resolve(root, 'dist/index.html'), 'utf8');
  assert.match(html, /src="\.\/assets\/bootstrap\.[a-f0-9]{12}\.js"/);
  assert.match(html, /Content-Security-Policy/);
  assert.doesNotMatch(html, /prd\.html|file:\/\/|\/Users\//);
  assert.deepEqual(readdirSync(resolve(root, 'dist')).sort(), ['.nojekyll', '404.html', 'assets', 'build-info.json', 'index.html']);
  const names = readdirSync(resolve(root, 'dist/assets'));
  for (const name of names.filter(n => n.endsWith('.js'))) {
    const source = readFileSync(resolve(root, 'dist/assets', name), 'utf8');
    for (const match of source.matchAll(/(?:from\s*|import\s*\(\s*)['"]\.\/([^'"]+)['"]/g)) assert.ok(names.includes(match[1]), `${name} missing ${match[1]}`);
    assert.doesNotMatch(source, /prd\.html|\/Users\//);
  }
  const before = readFileSync(resolve(root, 'dist/build-info.json'), 'utf8');
  execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: root });
  assert.equal(readFileSync(resolve(root, 'dist/build-info.json'), 'utf8'), before);
});
