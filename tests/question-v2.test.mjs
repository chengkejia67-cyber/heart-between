import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { VERSION, QUESTIONS } from '../questions.js';
import { analyze, buildNarrative, isPrimaryQuestion, sampleAnswers } from '../model.js';
import { decodeProgress } from '../progress.js';
const fixture=JSON.parse(readFileSync(new URL('./approved-v2.json',import.meta.url)));
const q=n=>QUESTIONS[n-1];
test('exact approved wording: 52 revisions and 12 retained items',()=>{
 assert.equal(VERSION,'2.0.0');assert.equal(fixture.filter(q=>q.status==='modify').length,52);
 assert.deepEqual(fixture.filter(q=>q.status!=='modify').map(q=>q.number),[4,12,20,28,32,35,36,38,48,52,54,60]);
 for(const f of fixture){const actual=q(f.number);assert.equal(actual.id,f.id);assert.equal(actual.prompt,f.prompt);assert.equal(actual.context,f.context);assert.deepEqual(actual.options.map(o=>o.text),f.options);}
 assert.equal(QUESTIONS.filter(isPrimaryQuestion).length,50);
 for(const [sub,n] of [['intervention',4],['attitude',8],['style',1],['ritual',1]])assert.equal(QUESTIONS.filter(q=>q.sub===sub).length,n);
});
test('nominal attitude and ritual choices never alter scores or type',()=>{
 const answers=sampleAnswers(),baseline=analyze(answers),title=buildNarrative(baseline).title;
 for(const item of QUESTIONS.filter(q=>['attitude','ritual'].includes(q.sub)))for(let i=0;i<4;i++){
  const a=analyze({...answers,[item.id]:i});assert.deepEqual(a.scores,baseline.scores);assert.equal(buildNarrative(a).title,title);assert.equal(a.style,baseline.style);
 }
 assert.equal(baseline.attitudes.length,9);
});
test('certainty requires four of six and repair/commitment four of five',()=>{
 for(const dim of ['certainty','repair','commitment']){
  const answers=sampleAnswers(),items=QUESTIONS.filter(q=>q.dim===dim&&isPrimaryQuestion(q));
  items.slice(4).forEach(q=>answers[q.id]='skip');assert.notEqual(analyze(answers).scores[dim],null);
  answers[items[3].id]='skip';assert.equal(analyze(answers).scores[dim],null);
 }
});
test('discomfort, refusal and requests are separate from intrusion',()=>{
 const answers=sampleAnswers();const baseline=analyze(answers).control;
 for(const i of [2,3])assert.deepEqual(analyze({...answers,[q(17).id]:i}).control,baseline);
 for(const n of [33,41,49,57])assert.equal(q(n).options[0].score,0);
 assert.equal(q(33).options[3].score,0);assert.equal(q(33).options[2].score,3);
 assert.equal(q(41).options[3].score,3);
 for(const n of [37,61])for(const o of q(n).options.filter(o=>o.signals?.includes('anger-with-self-worth')))assert.equal(o.score,3);
 for(const n of [6,21,23])assert.ok(q(n).options.filter(o=>o.score===3).length>=2);
 assert.equal(q(46).options[0].score,q(46).options[1].score);
});
test('old questionnaire progress cannot be interpreted using new options',()=>{
 assert.equal(decodeProgress(JSON.stringify({version:'1.0.0',answers:sampleAnswers()})).status,'version-mismatch');
 assert.equal(decodeProgress(JSON.stringify({version:VERSION,answers:sampleAnswers()})).status,'restored');
});
