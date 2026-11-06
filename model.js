import { QUESTIONS, DIMENSIONS, SCORING_POLICY } from './questions.js';

export const answerFor = (q, answers) => Number.isInteger(answers?.[q.id]) ? q.options[answers[q.id]] ?? null : null;
export const isPrimaryQuestion = q => !['style', 'ritual', 'attitude', 'intervention'].includes(q.sub);
function calc(items, answers, min) {
  const values = items.map(q => answerFor(q, answers)?.score).filter(v => Number.isFinite(v));
  return { score: values.length >= min ? Math.round(values.reduce((a, b) => a + b, 0) / values.length / 3 * 100) : null, count: values.length, total: items.length, min };
}
const signalsFor = (items, answers) => [...new Set(items.flatMap(q => answerFor(q, answers)?.signals ?? []))];
export function analyze(answers = {}) {
  const dims = DIMENSIONS.map(d => {
    const all = QUESTIONS.filter(q => q.dim === d.id);
    const items = all.filter(isPrimaryQuestion);
    const item = { ...d, ...calc(items, answers, SCORING_POLICY[d.id].minimum), signals: signalsFor(all, answers) };
    if (d.id === 'boundary') {
      item.self = calc(all.filter(q => q.sub === 'self'), answers, 3);
      item.respect = calc(all.filter(q => q.sub === 'respect'), answers, 3);
    }
    return item;
  });
  const control = calc(QUESTIONS.filter(q => q.sub === 'intervention'), answers, 3);
  const missing = dims.filter(d => d.score === null || (d.id === 'boundary' && (d.self.score === null || d.respect.score === null)));
  const styleAnswers = QUESTIONS.filter(q => q.sub === 'style').map(q => answerFor(q, answers)?.tag).filter(Boolean);
  const style = styleAnswers.length ? styleAnswers[0] : '表达方式样本不足';
  const attitudes = QUESTIONS.flatMap((q, index) => {
    if (!['attitude', 'ritual'].includes(q.sub)) return [];
    const option = answerFor(q, answers);
    return option?.tag ? [{ id: q.id, questionNumber: index + 1, topic: q.topic, label: option.tag, description: option.description }] : [];
  });
  return { dims, control, missing, style, attitudes, signals: signalsFor(QUESTIONS, answers), scores: Object.fromEntries(dims.map(d => [d.id, d.score])), complete: missing.length === 0, answered: QUESTIONS.filter(q => answerFor(q, answers)).length };
}
export const level = n => n === null ? '信息不足' : n < 35 ? '较低倾向' : n > 65 ? '较高倾向' : '中间倾向';
const descriptions={
possession:['你通常能容纳对方拥有不同的社会关系，较少把他人的出现视为对自己地位的挑战。较少吃醋并不代表你不在意。','你会在意自己是否被特别对待，但这种感受会随着场景变化。可以留意：哪些具体情况让你更需要被确认？','你很在意自己在关系中的特殊位置，遇到潜在竞争时容易被牵动。这描述的是感受；是否干涉对方，要结合行为子项理解。'],
boundary:['表达界限或回应对方的界限，对你来说可能并不轻松。请结合两个子项，分清是难以拒绝，还是难以接受拒绝。','你在部分情境能守住界限，也可能为了相处而退让。提前说清可接受范围，比积累不舒服后再爆发更容易协商。','你较愿意表达和尊重界限。清晰的界限能帮助彼此知道如何靠近，但仍应结合两个子项分别理解。'],
certainty:['你对暂时不确定的状态有较多容纳空间。也可以主动告诉对方，你的从容不代表不重视这段关系。','你希望得到一些明确回应，同时通常能等待事情逐步清楚。约定联系与告知方式，会减少彼此猜测。','及时回应与明确态度对你很重要。不安时，把需要说成具体、可协商的请求，比不断寻找线索更容易得到理解。'],
intimacy:['你偏好相对宽松的相处频率，各自充实也能感到连接。可以主动说明，少一些联系并不必然意味着疏远。','你既享受共同时间，也希望保留一些空间。相处频率可能随工作、生活和关系阶段而调整。','日常参与感与较多陪伴对你很重要。你可能把分享小事视为亲密的一部分；可以与对方商量双方舒服的频率。'],
autonomy:['关系中的波动较容易牵动你的生活和自我评价。可以先保留一个稳定的个人习惯，并建立伴侣之外的支持来源。','你有自己的重心，也会在关系发生变化时受到影响。给自己保留一些稳定安排，有助于兼顾亲密与个人生活。','你通常能保留个人重心，并用自己的方式处理一部分情绪。也别忘记让对方知道，你仍然愿意被关心和支持。'],
expression:['你可能在心里感受很多，却不常主动让对方知道。试着从一句具体的喜欢或一个小请求开始，让感受更容易被接收到。','你会在合适的时机表达，也有一些需要尚未说清。可以观察：哪些感受容易分享，哪些习惯藏起来？','你较愿意让对方知道喜欢、期待和不舒服。表达之后，再确认对方怎样理解，有助于把表达变成真正的交流。'],
repair:['分歧之后，你可能不太容易主动回到问题。可以从一次约好时间的短对话开始，聚焦一件具体的事。','你有修复关系的意愿，但在情绪较强或问题重复时可能停住。将约定缩小到能执行的一步，会更容易继续。','你较愿意在分歧后重启沟通并尝试调整。共同修复也需要双方参与，不必由你一个人承担所有工作。'],
commitment:['你目前更关注当下的相处体验，不急于为关系设定长期方向。尽早说明这一点，有助于彼此了解期待是否一致。','你希望关系能够自然持续，也会随着相处逐步判断未来。可以阶段性地交换想法，让彼此知道期待有没有改变。','你较看重可持续的关系与共同方向。把长期愿望转化为双方愿意实践的小安排，会比单方面规划更有帮助。']};
export function dimensionText(d) {
  if (d.score === null) return '本项有效回答不足，暂不生成倾向解释。';
  if (d.id === 'boundary' && Math.abs(d.self.score - d.respect.score) >= 25) return d.self.score < d.respect.score
    ? '你较容易尊重对方的界限，但表达自己的需要相对不容易。总分不能代替两个子项；可以留意哪些不舒服还没有说出来。'
    : '你较能维护自己的界限，但接受对方的界限相对不容易。总分不能代替两个子项；自己的拒绝与对方的拒绝都需要被看见。';
  let text = descriptions[d.id][d.score < 35 ? 0 : d.score > 65 ? 2 : 1];
  if (d.id === 'autonomy' && d.signals.includes('anger-with-self-worth')) text += ' 你的回答里也有生气却仍认可自己的情况；情绪强烈不等于失去自我判断。';
  if (d.id === 'expression' && d.signals.some(t => ['urgent-expression', 'protest-expression'].includes(t))) text += ' 你也可能通过急于解释、埋怨或带情绪的话表达需要；表达的强度与对方能否准确理解需要分开看。';
  if (d.id === 'repair' && d.signals.some(t => ['repair-after-pause', 'repair-after-defensiveness', 'repair-with-explanation', 'repair-by-action'].includes(t))) text += ' 暂时离开、先解释自己的委屈或用行动示好，都可能伴随之后的修复，不要求每次都平静地说完整的话。';
  if (d.id === 'possession' && d.signals.some(t => ['photo-delete-request', 'photo-relationship-limit'].includes(t))) text += ' 希望处理前任照片、或重新考虑是否继续关系，是你在该情境下的接受条件；是否干预对方另看具体行为。';
  return text;
}

export function buildNarrative(a) {
  const s = a.scores, boundary = a.dims.find(d => d.id === 'boundary');
  const has = signal => a.signals.includes(signal);
  const attitude = id => a.attitudes.find(item => item.id === id);
  const intrusive = ['persistent-pressure', 'covert-access', 'intrusive-checking', 'persistent-contact', 'publishes-without-consent', 'indirect-private-inquiry'].some(has);
  let title = '平衡探索型', subtitle = '一边靠近，一边找到彼此舒服的距离。';
  if (s.intimacy > 65 && s.autonomy > 65) { title = '自在相拥型'; subtitle = '很享受两个人，也没有丢掉自己。'; }
  else if (s.certainty > 65 && s.expression < 35) { title = '含蓄共鸣型'; subtitle = '心里有很多期待，正在学习让它们被听见。'; }
  else if (s.commitment > 65 && s.repair > 65) { title = '温柔建设型'; subtitle = '把喜欢放进日常，也愿意认真走向以后。'; }
  else if (s.autonomy > 65 && s.intimacy < 35) { title = '留白同行型'; subtitle = '各自有自己的天地，也为彼此留一个位置。'; }
  else if (s.intimacy > 65) { title = '热忱靠近型'; subtitle = '在分享与陪伴里，感受两个人的连接。'; }
  else if (s.commitment < 35) { title = '当下感受型'; subtitle = '认真感受此刻，让关系在相处中找到方向。'; }
  if (a.control.score !== null && a.control.score > 65) { title = '连接探索型'; subtitle = '很在意关系，也需要为彼此留出选择的空间。'; }
  const opening = s.intimacy > 65
    ? '日常分享和共同时间对你比较重要。你可能希望自己经常出现在对方的安排里，也会在见面减少时感到想念或不满。'
    : s.intimacy < 35 ? '你比较能接受宽松的联系和见面频率，也需要自己的活动空间。相处得少一些时，你仍可能认真看待这段关系。'
      : '你对共同时间和个人空间都有需要。忙碌程度、当下的心情和关系阶段，都可能影响你希望靠近到什么程度。';
  let emotional = s.certainty > 65
    ? s.expression < 35 ? '明确的回应对你很重要，但有些需要可能停留在心里。你没有说出来的时候，对方未必知道你正在等待一句解释或确认。' : '你比较在意回应是否明确。你可能会追问、表达不满，或希望把关系和安排说清楚；这些反应不自动意味着你要替对方做决定。'
    : s.certainty < 35 ? '你通常能容纳一定程度的等待和不确定。不过，是否愿意等待和是否重视关系并不是同一个问题。' : '你希望在需要时得到一些回应，也能接受部分事情暂时没有答案。不同情境里的追问、不满或后退，需要结合你具体在意的事情来看。';
  if (['withdraw-expression', 'withdraw-sharing', 'withdraw-connection'].some(has)) emotional += ' 你的选择里也出现了减少说话或拉开距离；这种安静有时包含失望，不能简单理解成不在乎。';
  const future = s.commitment > 65
    ? '你比较重视关系是否有持续发展的可能。愿意长期相处，也可以同时有不能接受的安排；是否继续，需要看双方的期待和现实条件。'
    : s.commitment < 35 ? '你当前更关注相处体验与自己的意愿，不急于为了维持关系作出长期安排。可以把这个阶段的期待讲清楚，让双方都有选择的空间。'
      : '你保留着继续了解和调整未来期待的空间。你可能愿意投入，也希望看到关系是否适合持续下去。';
  const paragraphs = [opening, emotional, future];
  const contextual = attitude('commitment-3');
  if (contextual) paragraphs.push('在异地这个具体情境里，' + contextual.description.replace(/^在这个情境中，/, ''));
  const insights = [];
  if (intrusive) {
    const behaviors = [];
    if (has('persistent-pressure') || has('persistent-contact')) behaviors.push('在对方拒绝或需要空间时继续要求');
    if (has('covert-access')) behaviors.push('未经同意查看私人设备');
    if (has('intrusive-checking')) behaviors.push('反复联系并核查位置');
    if (has('publishes-without-consent')) behaviors.push('在对方不同意时仍公开照片');
    if (has('indirect-private-inquiry')) behaviors.push('绕过对方打听私人往事');
    insights.push({ title: '区分表达要求与越过对方的选择', text: '你在部分情境中选择了' + behaviors.join('、') + '。可以表达不满和自己的底线，但这些具体做法还涉及对方的隐私与拒绝权。' });
  }
  if (has('photo-relationship-limit') && !intrusive) insights.push({ title: '有些事，对你是关系中的底线', text: '在前任照片这道题里，你选择了难以接受时重新考虑关系。这表达了你自己的接受范围，不能直接等同于强迫对方改变。' });
  else if (s.possession > 65 && boundary.respect.score > 65 && a.control.score !== null && a.control.score < 35 && !intrusive) insights.push({ title: '明显介意，也可以保留彼此的选择', text: '你对关系中的特别位置很在意，同时在多数相关题目中选择了不持续施压。介意的感受与实际干预需要分开理解。' });
  if (s.intimacy > 65 && s.autonomy > 65) insights.push({ title: '亲密与独立，可以同时存在', text: '你希望有较多陪伴，也能保留个人生活。想见对方和能够过好自己的生活，可以同时出现在你身上。' });
  if (s.certainty > 65 && s.expression < 35) insights.push({ title: '你需要的回应，可能还没被听见', text: '你希望得到确认，却可能通过沉默或暗示表达。可以先说清一件最在意的小事，减少双方猜测。' });
  if (boundary.self.score < 35 && boundary.respect.score > 65) insights.push({ title: '顾及对方时，也留意自己的需要', text: '你较容易接受对方的拒绝，但自己的不舒服可能没有被说出来。试着区分自愿让步与勉强答应。' });
  if (s.commitment > 65 && s.repair < 35) insights.push({ title: '想继续，也需要找到重谈的入口', text: '你希望关系能持续，但在直接询问重启沟通的题目里，较少选择主动回来谈。等待对方先开口、对方长期不回应和自己不愿再谈，需要分别理解。' });
  const fairness = attitude('commitment-5');
  if (s.commitment > 65 && fairness?.label === '在意投入是否对等') insights.push({ title: '愿意长期投入，也希望是双向的', text: '你愿意考虑共同未来，同时希望时间和精力的投入不是只由一方承担。要求互惠不等于不愿经营关系。' });
  if (!insights.length) insights.push({ title: '你的态度，会随具体情境变化', text: '一个总分不能替代具体的选择。前面的场景标签记录了你面对异地、分歧、约定和纪念日时的不同考虑。' });
  const strength = s.autonomy > 65 ? '你较能保有自己的判断与生活。即使不高兴，也未必会因此否定自己或放弃个人安排。' : s.repair > 65 ? '在直接询问是否重启沟通的题目里，你较愿意回到问题；修复可以通过语言，也可以通过行动开始。' : s.expression > 65 ? '你较容易让对方知道自己的想法与情绪。接下来可以留意，对方接收到的意思是否与你想表达的一致。' : '你能辨认出一些平时不容易说出口的反应，这给之后表达自己的需要提供了具体线索。';
  const practice = boundary.self.score < 35 ? '下一次想勉强答应时，先给自己留一句：“我需要想一想，晚一点给你答复。”' : s.expression < 35 ? '挑一个最近的具体时刻，说清当时发生了什么、自己哪里不舒服，以及希望怎样处理。' : '选一件你们容易反复争论的小事，分别说清可以接受什么、不能接受什么，再看有没有双方都愿意的安排。';
  const quote = has('photo-relationship-limit') ? '“这件事我确实接受不了。我想知道有没有我们都能接受的处理方式；如果没有，我也需要重新考虑这段关系。”' : s.certainty > 65 ? '“我会在意回复和已经约好的安排。如果有变化，希望你能告诉我，而不是让我一直猜。”' : s.intimacy < 35 ? '“我很珍惜我们，也需要一些自己的时间。联系少一点不代表我不想继续。”' : '“我想和你说清楚，我在意的是什么，也想听听哪些安排是你能接受的。”';
  return { title, subtitle, paragraphs, insights, strength, practice, quote };
}
export function sampleAnswers() {
  const targets = { possession: 2, boundary: 3, certainty: 2, intimacy: 3, autonomy: 3, expression: 2, repair: 3, commitment: 3 };
  return Object.fromEntries(QUESTIONS.map((q, i) => {
    let target = q.sub === 'intervention' ? 0 : targets[q.dim];
    if (i % 5 === 0) target = Math.max(0, target - 1);
    const candidates = q.options.map((o, index) => ({ index, delta: o.score === null ? index : Math.abs(o.score - target) })).sort((a, b) => a.delta - b.delta);
    return [q.id, candidates[0].index];
  }));
}
