import {QUESTIONS,DIMENSIONS} from './questions.js';
export const answerFor=(q,answers)=>Number.isInteger(answers[q.id])?q.options[answers[q.id]]:null;
function calc(items,answers,min){const values=items.map(q=>answerFor(q,answers)?.score).filter(v=>typeof v==='number');return {score:values.length>=min?Math.round(values.reduce((a,b)=>a+b,0)/values.length/3*100):null,count:values.length,total:items.length,min};}
export function analyze(answers){
 const dims=DIMENSIONS.map(d=>{const all=QUESTIONS.filter(q=>q.dim===d.id);const items=all.filter(q=>q.sub!=='style'&&q.sub!=='intervention');const min=d.id==='possession'?3:d.id==='expression'?4:d.id==='boundary'?6:5;const item={...d,...calc(items,answers,min)};if(d.id==='boundary'){item.self=calc(all.filter(q=>q.sub==='self'),answers,3);item.respect=calc(all.filter(q=>q.sub==='respect'),answers,3);}return item;});
 const control=calc(QUESTIONS.filter(q=>q.sub==='intervention'),answers,3);
 const missing=dims.filter(d=>d.score===null||(d.id==='boundary'&&(d.self.score===null||d.respect.score===null)));
 const tags=QUESTIONS.filter(q=>q.sub==='style').map(q=>answerFor(q,answers)?.tag).filter(Boolean);
 const style=tags.length===0?'表达方式样本不足':new Set(tags).size===1?tags[0]:'表达方式随情境变化';
 const scores=Object.fromEntries(dims.map(d=>[d.id,d.score]));
 return {dims,control,missing,style,scores,complete:missing.length===0,answered:QUESTIONS.filter(q=>answerFor(q,answers)).length};
}
export const level=n=>n===null?'信息不足':n<35?'较低倾向':n>65?'较高倾向':'中间倾向';
const descriptions={
possession:['你通常能容纳对方拥有不同的社会关系，较少把他人的出现视为对自己地位的挑战。较少吃醋并不代表你不在意。','你会在意自己是否被特别对待，但这种感受会随着场景变化。可以留意：哪些具体情况让你更需要被确认？','你很在意自己在关系中的特殊位置，遇到潜在竞争时容易被牵动。这描述的是感受；是否干涉对方，要结合行为子项理解。'],
boundary:['表达界限或回应对方的界限，对你来说可能并不轻松。请结合两个子项，分清是难以拒绝，还是难以接受拒绝。','你在部分情境能守住界限，也可能为了相处而退让。提前说清可接受范围，比积累不舒服后再爆发更容易协商。','你较愿意表达和尊重界限。清晰的界限能帮助彼此知道如何靠近，但仍应结合两个子项分别理解。'],
certainty:['你对暂时不确定的状态有较多容纳空间。也可以主动告诉对方，你的从容不代表不重视这段关系。','你希望得到一些明确回应，同时通常能等待事情逐步清楚。约定联系与告知方式，会减少彼此猜测。','及时回应与明确态度对你很重要。不安时，把需要说成具体、可协商的请求，比不断寻找线索更容易得到理解。'],
intimacy:['你偏好相对宽松的相处频率，各自充实也能感到连接。可以主动说明，少一些联系并不必然意味着疏远。','你既享受共同时间，也希望保留一些空间。相处频率可能随工作、生活和关系阶段而调整。','日常参与感与较多陪伴对你很重要。你可能把分享小事视为亲密的一部分；可以与对方商量双方舒服的频率。'],
autonomy:['关系中的波动较容易牵动你的生活和自我评价。可以先保留一个稳定的个人习惯，并建立伴侣之外的支持来源。','你有自己的重心，也会在关系发生变化时受到影响。给自己保留一些稳定安排，有助于兼顾亲密与个人生活。','你通常能保留个人重心，并用自己的方式处理一部分情绪。也别忘记让对方知道，你仍然愿意被关心和支持。'],
expression:['你可能在心里感受很多，却不常主动让对方知道。试着从一句具体的喜欢或一个小请求开始，让感受更容易被接收到。','你会在合适的时机表达，也有一些需要尚未说清。可以观察：哪些感受容易分享，哪些习惯藏起来？','你较愿意让对方知道喜欢、期待和不舒服。表达之后，再确认对方怎样理解，有助于把表达变成真正的交流。'],
repair:['分歧之后，你可能不太容易主动回到问题。可以从一次约好时间的短对话开始，聚焦一件具体的事。','你有修复关系的意愿，但在情绪较强或问题重复时可能停住。将约定缩小到能执行的一步，会更容易继续。','你较愿意在分歧后重启沟通并尝试调整。共同修复也需要双方参与，不必由你一个人承担所有工作。'],
commitment:['你目前更关注当下的相处体验，不急于为关系设定长期方向。尽早说明这一点，有助于彼此了解期待是否一致。','你希望关系能够自然持续，也会随着相处逐步判断未来。可以阶段性地交换想法，让彼此知道期待有没有改变。','你较看重可持续的关系与共同方向。把长期愿望转化为双方愿意实践的小安排，会比单方面规划更有帮助。']};
export const dimensionText=d=>{if(d.id==='boundary'&&Math.abs(d.self.score-d.respect.score)>=25)return d.self.score<d.respect.score?'你较容易尊重对方的界限，但表达自己的需要相对不容易。总分不能代替两个子项；试着把一个不舒服的地方具体说出来。':'你较能维护自己的界限，但接受对方的界限相对不容易。总分不能代替两个子项；对方的拒绝也需要被尊重。';return descriptions[d.id][d.score<35?0:d.score>65?2:1];};
export function buildNarrative(a){
 const s=a.scores;const boundary=a.dims.find(d=>d.id==='boundary');
 let title='平衡探索型',subtitle='一边靠近，一边找到彼此舒服的距离。';
 if(s.intimacy>65&&s.autonomy>65){title='自在相拥型';subtitle='很享受两个人，也没有丢掉自己。';}
 else if(s.certainty>65&&s.expression<35){title='含蓄共鸣型';subtitle='心里有很多期待，正在学习让它们被听见。';}
 else if(s.commitment>65&&s.repair>65){title='温柔建设型';subtitle='把喜欢放进日常，也愿意认真走向以后。';}
 else if(s.autonomy>65&&s.intimacy<35){title='留白同行型';subtitle='各自有自己的天地，也为彼此留一个位置。';}
 else if(s.intimacy>65){title='热忱靠近型';subtitle='在分享与陪伴里，感受两个人的连接。';}
 else if(s.commitment<35){title='当下感受型';subtitle='认真感受此刻，让关系在相处中找到方向。';}
 if(a.control.score!==null&&a.control.score>65){title='连接探索型';subtitle='很在意关系，也需要为彼此留出选择的空间。';}
 const opening=s.intimacy>65?'你期待的关系里，日常分享和共同时间占有重要位置。你可能把看似平凡的小事，也当作两个人建立连接的方式。':s.intimacy<35?'你期待的关系里，两个人各有自己的生活，也能自然地相聚。对你而言，连接不一定需要靠密集的联系来证明。':'你希望亲密与个人空间之间有一个能够协商的节奏。你不必始终保持同一种距离，相处方式也可以随生活阶段变化。';
 const emotional=s.certainty>65?(s.expression<35?'你比较需要明确回应，却可能不容易主动说出这种需要。对方看到的平静，未必等于你心里没有期待。':'你比较在意回应是否明确。把“想被重视”说成一个具体请求，有助于让对方理解什么能让你安心。'):'你能够容纳一定程度的不确定，也有自己的相处节奏。适当地表达在意，可以帮助对方读懂你比较从容的态度。';
 const future=s.commitment>65?'对于未来，你更倾向于寻找能够持续经营的方向。共同计划最好来自双方真实的意愿，而不是为了让彼此安心而仓促答应。':s.commitment<35?'在当前阶段，你更重视眼下的相处体验。提前说清对未来的开放程度，会让双方有机会做出适合自己的选择。':'对于未来，你保留着继续了解和调整的空间。定期交换期待，有助于让关系的变化被彼此看见。';
 const insights=[];
 if(s.intimacy>65&&s.autonomy>65)insights.push({title:'亲密与独立，可以同时存在',text:'你享受紧密陪伴，也能保有个人生活。可以把共同时间与个人时间都当作正常需要，一起安排。'});
 if(s.possession>65&&boundary.respect.score>65&&a.control.score!==null&&a.control.score<35)insights.push({title:'会吃醋，也能尊重选择',text:'你的感受比较强烈，但行为上倾向于协商与尊重。清楚说出在意的原因，比把情绪藏起来更有助于理解。'});
 if(s.certainty>65&&s.expression<35)insights.push({title:'你需要的回应，可能还没被听见',text:'你很希望得到确认，却容易把需求放在心里。可以用“我希望……”代替让对方猜测。'});
 if(boundary.self.score<35&&boundary.respect.score>65)insights.push({title:'你顾及了对方，也需要照顾自己',text:'尊重别人的界限是你的倾向，但自己的不舒服可能没有被说出。试着明确一个小小的限度。'});
 if(s.commitment>65&&s.repair<35)insights.push({title:'想走得长远，也需要修复的方法',text:'你希望关系持续，但分歧后可能不容易重新沟通。先约定冷静后如何回来谈，比单纯要求不吵架更实际。'});
 if(a.control.score!==null&&a.control.score>35)insights.push({title:'把不安转化为请求，而非限制',text:'部分选择涉及持续施压或越过对方的选择。可以明确自己的担忧，同时接受对方有拒绝的权利；私自查看隐私不能替代信任与协商。'});
 if(!insights.length)insights.push({title:'你的答案里，有随情境变化的空间',text:'没有一个标签能完整描述你。可以从最有共鸣的一项开始，与对方聊聊什么做法能让你更舒服。'});
 const strength=s.repair>65?'你愿意在分歧后重新建立连接，这为关系留下了调整的可能。':s.autonomy>65?'你能够保留自己的生活重心，为相处带来一定的松弛与空间。':s.expression>65?'你愿意表达自己的感受，让彼此有机会理解真实的期待。':'你已经在观察自己如何进入关系。这份具体的自我觉察，是开始沟通的一个入口。';
 const practice=boundary.self.score<35?'下一次想勉强答应时，先说：“我需要想一想，晚一点给你答复。”':s.repair<35?'下一次需要暂停争执时，同时约定一个双方都能接受的重谈时间。':s.expression<35?'每天选择一件小事，具体告诉对方它让你感到开心、委屈或需要帮助。':'选一个轻松的时刻，交换各自喜欢的联系频率、独处时间和计划变更的告知方式。';
 const quote=s.certainty>65?'“我尊重你有自己的安排，也希望计划变化时能提前知道。这样我会更安心。”':s.intimacy<35?'“我很珍惜我们，也需要一点自己的时间。这两种需要可以同时存在。”':'“我喜欢和你分享日常，也想知道，怎样的相处节奏对我们都舒服？”';
 return {title,subtitle,paragraphs:[opening,emotional,future],insights,strength,practice,quote};
}
export function sampleAnswers(){const targets={possession:2,boundary:3,certainty:2,intimacy:3,autonomy:3,expression:2,repair:3,commitment:3};const answers={};QUESTIONS.forEach((q,i)=>{let target=q.sub==='intervention'?0:targets[q.dim];if(i%5===0)target=Math.max(0,target-1);const candidates=q.options.map((o,index)=>({index,delta:o.score===null?index:Math.abs(o.score-target)})).sort((a,b)=>a.delta-b.delta);answers[q.id]=candidates[0].index;});return answers;}
