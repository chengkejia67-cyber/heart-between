import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VERSION, QUESTIONS } from '../questions.js';
import { decodeProgress, emptyProgress, parseRoute, routeHash, readProgress, writeProgress, STORAGE_KEY } from '../progress.js';
const valid = overrides => JSON.stringify({ version: VERSION, answers: {}, index: 0, ...overrides });
test('restores prototype answers while discarding unknown or invalid values', () => {
  const ids = QUESTIONS.slice(0, 5).map(q => q.id);
  const restored = decodeProgress(valid({ answers: { [ids[0]]: 0, [ids[1]]: 'skip', [ids[2]]: 4, [ids[3]]: '2', [ids[4]]: 3, injected: 2 }, index: 900 }));
  assert.deepEqual(restored.state.answers, { [ids[0]]: 0, [ids[1]]: 'skip', [ids[4]]: 3 });
  assert.equal(restored.state.index, 63);
});
test('corrupted, foreign-version, null and array payloads never reuse answers', () => {
  for (const raw of ['{broken', 'null', '[]', valid({ answers: [] }), valid({ version: '0.0.1', answers: { [QUESTIONS[0].id]: 3 } })]) assert.deepEqual(decodeProgress(raw).state, emptyProgress());
  assert.equal(decodeProgress(valid({ version: 'other' })).status, 'version-mismatch');
  assert.equal(decodeProgress('broken').status, 'invalid');
});
test('unavailable storage leaves the current experience usable', () => {
  const denied = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); } };
  assert.equal(readProgress(denied).status, 'unavailable');
  assert.equal(writeProgress(denied, emptyProgress()), false);
  assert.equal(readProgress(null).status, 'unavailable');
});
test('writes versioned progress using the existing storage key', () => {
  const values = new Map(); const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
  const state = { answers: { [QUESTIONS[0].id]: 2 }, index: 1, feedback: '部分像' };
  assert.equal(writeProgress(storage, state), true);
  assert.equal(JSON.parse(values.get(STORAGE_KEY)).schemaVersion, 2);
  assert.deepEqual(readProgress(storage).state, state);
});
test('page-only URLs round-trip without embedding answers', () => {
  const state = { ...emptyProgress(), index: 12 };
  assert.deepEqual(parseRoute(routeHash('quiz', state, false, true)), { page: 'quiz', index: 12, reviewing: true, sample: false });
  assert.equal(parseRoute('#/example').sample, true);
  assert.equal(parseRoute('#/report').page, 'report');
  for (const bad of ['#/question/0', '#/question/65', '#/question/1.5', '#/unknown', '#/question/Infinity']) assert.equal(parseRoute(bad).page, 'home');
});
