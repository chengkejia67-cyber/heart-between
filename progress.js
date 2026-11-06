import { VERSION, QUESTIONS } from './questions.js';

// Keep the existing key so people returning from the approved prototype retain answers.
export const STORAGE_KEY = 'between-us:v1';
export const emptyProgress = () => ({ answers: {}, index: 0, feedback: null });
export const answeredCount = state => QUESTIONS.filter(q => Number.isInteger(state.answers[q.id])).length;
export const visitedCount = state => QUESTIONS.filter(q => Object.hasOwn(state.answers, q.id)).length;

export function decodeProgress(raw) {
  if (raw === null) return { state: emptyProgress(), status: 'empty' };
  let data;
  try { data = JSON.parse(raw); } catch { return { state: emptyProgress(), status: 'invalid' }; }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return { state: emptyProgress(), status: 'invalid' };
  if (data.version !== VERSION) return { state: emptyProgress(), status: 'version-mismatch' };
  if (!data.answers || typeof data.answers !== 'object' || Array.isArray(data.answers)) return { state: emptyProgress(), status: 'invalid' };
  const answers = {};
  for (const q of QUESTIONS) {
    const value = data.answers[q.id];
    if (value === 'skip' || (Number.isInteger(value) && value >= 0 && value < q.options.length)) answers[q.id] = value;
  }
  return {
    state: {
      answers,
      index: Number.isInteger(data.index) ? Math.max(0, Math.min(QUESTIONS.length - 1, data.index)) : 0,
      feedback: ['像我', '部分像', '不太像'].includes(data.feedback) ? data.feedback : null,
    },
    status: 'restored',
  };
}

export function readProgress(storage) {
  try { return decodeProgress(storage.getItem(STORAGE_KEY)); }
  catch { return { state: emptyProgress(), status: 'unavailable' }; }
}

export function writeProgress(storage, state) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify({ ...state, schemaVersion: 2, version: VERSION, updatedAt: new Date().toISOString() }));
    return true;
  } catch { return false; }
}

export function parseRoute(hash) {
  const question = /^#\/question\/(\d+)(\/review)?$/.exec(hash);
  if (question) {
    const index = Number(question[1]) - 1;
    if (Number.isInteger(index) && index >= 0 && index < QUESTIONS.length) return { page: 'quiz', index, reviewing: Boolean(question[2]), sample: false };
  }
  const routes = { '#/': 'home', '#/report': 'report', '#/example': 'report', '#/review': 'review' };
  return { page: routes[hash] || 'home', sample: hash === '#/example', reviewing: false };
}

export function routeHash(page, state, sample = false, reviewing = false) {
  if (page === 'quiz') return `#/question/${state.index + 1}${reviewing ? '/review' : ''}`;
  if (page === 'report') return sample ? '#/example' : '#/report';
  if (page === 'review') return '#/review';
  return '#/';
}
