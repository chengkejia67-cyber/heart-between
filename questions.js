// Questionnaire v2: wording approved in the 64-item review. Options keep review order.
// Equal scores are intentional; nominal attitude choices never enter the main scale.
export const VERSION = '2.0.0';
export const DIMENSIONS = [
  {
    "id": "possession",
    "name": "占有欲",
    "short": "排他敏感",
    "low": "较少介意",
    "high": "明显在意",
    "intro": "你对关系中的特殊位置和排他性的在意程度。吃醋的感受与干涉的行为分别呈现。"
  },
  {
    "id": "boundary",
    "name": "边界感",
    "short": "界限与尊重",
    "low": "容易模糊",
    "high": "较为清晰",
    "intro": "你如何表达自己的界限，以及如何回应对方的界限。两个子项会分别展示。"
  },
  {
    "id": "certainty",
    "name": "确定感需求",
    "short": "回应与安心",
    "low": "容纳不确定",
    "high": "需要明确回应",
    "intro": "你对及时回应、关系身份与约定的需要程度。"
  },
  {
    "id": "intimacy",
    "name": "亲密需求",
    "short": "陪伴与连接",
    "low": "低频也自在",
    "high": "喜欢紧密陪伴",
    "intro": "你希望分享多少时间、日常和彼此的生活。"
  },
  {
    "id": "autonomy",
    "name": "情感独立性",
    "short": "自己的重心",
    "low": "关系牵动较多",
    "high": "保有个人重心",
    "intro": "你能否在亲密关系中保留个人生活与自我调节的空间。"
  },
  {
    "id": "expression",
    "name": "情感表达",
    "short": "让心意可见",
    "low": "倾向藏在心里",
    "high": "主动让人知道",
    "intro": "你让对方知道喜欢、委屈与期待的主动程度。表达方式另行标注。"
  },
  {
    "id": "repair",
    "name": "冲突修复",
    "short": "分歧后靠近",
    "low": "较少主动重启",
    "high": "愿意共同修复",
    "intro": "有分歧后，你是否愿意回到问题、协商并实践约定。"
  },
  {
    "id": "commitment",
    "name": "长期承诺",
    "short": "共同的以后",
    "low": "更关注当下",
    "high": "重视长期方向",
    "intro": "你对持续关系与共同未来的意愿，不以婚姻作为唯一标准。"
  }
];

export const SCORING_POLICY = {
  "possession": {
    "minimum": 3,
    "total": 4
  },
  "boundary": {
    "minimum": 6,
    "total": 8
  },
  "certainty": {
    "minimum": 4,
    "total": 6
  },
  "intimacy": {
    "minimum": 5,
    "total": 8
  },
  "autonomy": {
    "minimum": 5,
    "total": 8
  },
  "expression": {
    "minimum": 4,
    "total": 6
  },
  "repair": {
    "minimum": 4,
    "total": 5
  },
  "commitment": {
    "minimum": 4,
    "total": 5
  }
};

export const QUESTIONS = [
  {
    "id": "possession-1",
    "dim": "possession",
    "context": "内心反应 · 双方没有违反约定",
    "prompt": "对方和一位朋友频繁聊天，你的第一反应更接近？",
    "sub": "main",
    "options": [
      {
        "text": "没什么特别的感觉，照常相处。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会有点吃醋，但通常不会一直想着。",
        "score": 1,
        "tag": null
      },
      {
        "text": "明显吃醋，会反复想他们到底有多亲近。",
        "score": 2,
        "tag": null
      },
      {
        "text": "会很生气，觉得这样的亲近已经让我接受不了。",
        "score": 3,
        "tag": null,
        "signals": [
          "anger"
        ]
      }
    ]
  },
  {
    "id": "boundary-1",
    "dim": "boundary",
    "context": "实际行动 · 临时邀约",
    "prompt": "你很累，伴侣却希望你陪着参加聚会。你会？",
    "sub": "self",
    "options": [
      {
        "text": "会去，但心里有点不高兴，觉得对方没顾及我的状态。",
        "score": 0,
        "tag": null,
        "signals": [
          "reluctant-agreement"
        ]
      },
      {
        "text": "可以露个面，不过会提前说好早点走。",
        "score": 2,
        "tag": null
      },
      {
        "text": "直接拒绝，今天确实不想再应付聚会。",
        "score": 3,
        "tag": null
      },
      {
        "text": "不太好意思直接拒绝，会找个理由推掉。",
        "score": 2,
        "tag": null
      }
    ]
  },
  {
    "id": "certainty-1",
    "dim": "certainty",
    "context": "内心反应 · 非紧急、也没有失约",
    "prompt": "对方比平时晚几个小时回复，你更接近？",
    "sub": "main",
    "options": [
      {
        "text": "先忙自己的，看到回复再说。",
        "score": 0,
        "tag": null
      },
      {
        "text": "补一条消息或打一次电话，想知道在忙什么。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会生气，觉得回复我一下不至于这么难。",
        "score": 2,
        "tag": null,
        "signals": [
          "anger"
        ]
      },
      {
        "text": "会反复看手机，担心对方是不是不想理我了。",
        "score": 3,
        "tag": null,
        "signals": [
          "repeated-checking-feeling"
        ]
      }
    ]
  },
  {
    "id": "intimacy-1",
    "dim": "intimacy",
    "context": "日常相处 · 没有预先安排的周末",
    "prompt": "你们都有空，你最希望怎么度过？",
    "sub": "main",
    "options": [
      {
        "text": "留一天约会，另一天各自安排。",
        "score": 2,
        "tag": null
      },
      {
        "text": "各自安排为主，有空一起吃顿饭。",
        "score": 1,
        "tag": null
      },
      {
        "text": "这次各自充实地过，另约共同时间。",
        "score": 0,
        "tag": null
      },
      {
        "text": "大部分时间一起，做什么都可以。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-1",
    "dim": "autonomy",
    "context": "实际行动 · 约会临时取消",
    "prompt": "对方有合理原因取消约会，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "会失落一阵，但能把时间拿来做别的事。",
        "score": 2,
        "tag": null
      },
      {
        "text": "会生气或埋怨，哪怕知道有原因，当天也没什么心情安排别的。",
        "score": 1,
        "tag": null,
        "signals": [
          "anger"
        ]
      },
      {
        "text": "一整天都被这件事影响，很难投入自己的事。",
        "score": 0,
        "tag": null
      },
      {
        "text": "没太大影响，马上另找活动或约朋友。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "expression-1",
    "dim": "expression",
    "context": "实际行动 · 喜欢的瞬间",
    "prompt": "你突然觉得对方特别可爱，会怎么做？",
    "sub": "main",
    "options": [
      {
        "text": "直接夸一句，或者说我很喜欢这一刻。",
        "score": 3,
        "tag": null,
        "signals": [
          "verbal-expression"
        ]
      },
      {
        "text": "会主动靠近、牵手，或用对方能接受的小动作表达。",
        "score": 3,
        "tag": null,
        "signals": [
          "action-expression"
        ]
      },
      {
        "text": "会笑或看着对方，但不太说得出口。",
        "score": 1,
        "tag": null,
        "signals": [
          "shy-expression"
        ]
      },
      {
        "text": "心里觉得喜欢，不过通常不表现出来。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "repair-1",
    "dim": "repair",
    "context": "实际行动 · 情绪平复之后",
    "prompt": "一次争执过去，你们还没有解决问题，你通常？",
    "sub": "main",
    "options": [
      {
        "text": "会主动再谈，想把这次问题解决掉。",
        "score": 3,
        "tag": null
      },
      {
        "text": "还在生气，希望对方先来找我；对方来谈时我愿意接着说。",
        "score": 2,
        "tag": null,
        "signals": [
          "wait-for-repair"
        ]
      },
      {
        "text": "不想再吵，恢复日常就算过去了。",
        "score": 1,
        "tag": null
      },
      {
        "text": "表面翻篇，但会记在心里，之后少投入一些。",
        "score": 0,
        "tag": null,
        "signals": [
          "withdraw-investment"
        ]
      }
    ]
  },
  {
    "id": "commitment-1",
    "dim": "commitment",
    "context": "取舍 · 判断关系是否继续",
    "prompt": "判断一段关系是否值得继续，你更看重什么？",
    "sub": "main",
    "options": [
      {
        "text": "眼下相处开心就愿意继续，未来暂时不急着想。",
        "score": 0,
        "tag": null
      },
      {
        "text": "整体相处不错就继续了解，慢慢看能不能长期走下去。",
        "score": 1,
        "tag": null
      },
      {
        "text": "要看未来方向是否合得来，光有好感不够。",
        "score": 3,
        "tag": null
      },
      {
        "text": "如果重要的未来安排明显冲突，再喜欢也会考虑停下来。",
        "score": 3,
        "tag": null,
        "signals": [
          "future-compatibility-limit"
        ]
      }
    ]
  },
  {
    "id": "possession-2",
    "dim": "possession",
    "context": "内心反应 · 一次朋友聚会",
    "prompt": "对方很欣赏地夸奖另一个人，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "大多没什么感觉，觉得夸别人很平常。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会有点酸，忍不住拿自己和那个人比较。",
        "score": 1,
        "tag": null,
        "signals": [
          "comparison"
        ]
      },
      {
        "text": "会明显不高兴，尤其不喜欢在我面前反复夸。",
        "score": 2,
        "tag": null,
        "signals": [
          "anger"
        ]
      },
      {
        "text": "当下装得没事，之后却会反复想那几句话。",
        "score": 3,
        "tag": null,
        "signals": [
          "quiet-rumination"
        ]
      }
    ]
  },
  {
    "id": "boundary-2",
    "dim": "boundary",
    "context": "实际行动 · 不舒服的玩笑",
    "prompt": "对方在朋友面前开的玩笑让你不舒服，你更可能？",
    "sub": "self",
    "options": [
      {
        "text": "当场说我不喜欢这个玩笑，不想等到事后。",
        "score": 3,
        "tag": null
      },
      {
        "text": "先给对方面子，私下再把不舒服说出来。",
        "score": 3,
        "tag": null
      },
      {
        "text": "表面跟着笑，心里记着，但通常不会再提。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会直接怼回去，或者当场走开。",
        "score": 3,
        "tag": null,
        "signals": [
          "angry-boundary"
        ]
      }
    ]
  },
  {
    "id": "certainty-2",
    "dim": "certainty",
    "context": "内心反应 · 关系尚未定义",
    "prompt": "你们相处愉快，但还没说清是什么关系，你会？",
    "sub": "main",
    "options": [
      {
        "text": "暂时不想定义，先看看相处下去是什么感觉。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会直接问对方怎么看我们的关系。",
        "score": 2,
        "tag": null
      },
      {
        "text": "希望对方先说；对方一直不说，我会反复猜。",
        "score": 3,
        "tag": null,
        "signals": [
          "waiting-for-certainty"
        ]
      },
      {
        "text": "关系没说清之前，我不会继续更亲密或投入更多。",
        "score": 2,
        "tag": null,
        "signals": [
          "identity-before-investment"
        ]
      }
    ]
  },
  {
    "id": "intimacy-2",
    "dim": "intimacy",
    "context": "日常相处 · 分享小事",
    "prompt": "你看到一件有趣但不重要的小事，通常想？",
    "sub": "main",
    "options": [
      {
        "text": "见面时想起来就说。",
        "score": 1,
        "tag": null
      },
      {
        "text": "自己享受这个瞬间即可。",
        "score": 0,
        "tag": null
      },
      {
        "text": "几乎立刻分享给对方。",
        "score": 3,
        "tag": null
      },
      {
        "text": "攒几件事，晚些时候聊聊。",
        "score": 2,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-2",
    "dim": "autonomy",
    "context": "日常相处 · 进入恋爱之后",
    "prompt": "你的兴趣、朋友和个人计划通常会？",
    "sub": "main",
    "options": [
      {
        "text": "常常先等对方安排，自己的兴趣和朋友就慢慢排到后面。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会主动减少一部分个人活动，想把更多时间留给恋爱。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会调整一些时间，但重要的朋友和爱好照常保留。",
        "score": 3,
        "tag": null
      },
      {
        "text": "个人生活基本按原来节奏走，恋爱需要另外找时间安排。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "expression-2",
    "dim": "expression",
    "context": "实际行动 · 想要陪伴",
    "prompt": "你希望今天多一点陪伴，通常会？",
    "sub": "main",
    "options": [
      {
        "text": "直接说想见面或想多聊一会儿。",
        "score": 3,
        "tag": null
      },
      {
        "text": "撒娇、黏一会儿，看看对方会不会留下来陪我。",
        "score": 2,
        "tag": null,
        "signals": [
          "playful-request"
        ]
      },
      {
        "text": "会埋怨“你都不陪我”，希望对方听出我的需要。",
        "score": 2,
        "tag": null,
        "signals": [
          "protest-expression"
        ]
      },
      {
        "text": "不提，怕显得太需要对方，但会有点失落。",
        "score": 0,
        "tag": null,
        "signals": [
          "suppressed-needs"
        ]
      }
    ]
  },
  {
    "id": "repair-2",
    "dim": "repair",
    "context": "实际行动 · 需要冷静",
    "prompt": "争执时你需要暂停，更可能？",
    "sub": "main",
    "options": [
      {
        "text": "说清楚现在聊不下去，等缓过来会主动接着谈。",
        "score": 3,
        "tag": null
      },
      {
        "text": "先挂电话或离开，消气之后通常会再联系。",
        "score": 3,
        "tag": null,
        "signals": [
          "repair-after-pause"
        ]
      },
      {
        "text": "等对方先来找我，我才愿意继续聊。",
        "score": 2,
        "tag": null,
        "signals": [
          "wait-for-repair"
        ]
      },
      {
        "text": "说改天再谈，但多数时候我就不想再提了。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "commitment-2",
    "dim": "commitment",
    "context": "日常相处 · 开始认真交往",
    "prompt": "对于聊未来期待，你更倾向？",
    "sub": "main",
    "options": [
      {
        "text": "会主动问清彼此大致想要怎样的未来。",
        "score": 3,
        "tag": null
      },
      {
        "text": "想了解，但怕问得太早显得着急，会等对方先提。",
        "score": 3,
        "tag": null,
        "signals": [
          "future-intent-unspoken"
        ]
      },
      {
        "text": "目前更想相处看看，未来话题等有现实需要再聊。",
        "score": 1,
        "tag": null
      },
      {
        "text": "不太想谈太远，聊到这些会有压力，容易绕开。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "possession-3",
    "dim": "possession",
    "context": "态度选择 · 前任相关照片",
    "prompt": "发现伴侣还留着与前任有关的旧照片（没有亲密内容），你的接受程度更接近哪种？",
    "sub": "main",
    "options": [
      {
        "text": "不太介意，我更在意现在还有没有联系。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会介意，但如果只是存档、不再翻看，我可以接受。",
        "score": 1,
        "tag": null,
        "signals": [
          "conditional-photo-acceptance"
        ]
      },
      {
        "text": "明显介意，希望对方把与前任有关的照片删掉。",
        "score": 2,
        "tag": null,
        "signals": [
          "photo-delete-request"
        ]
      },
      {
        "text": "很难接受。如果对方坚持保留，我会重新考虑这段关系。",
        "score": 3,
        "tag": null,
        "signals": [
          "photo-relationship-limit"
        ]
      }
    ]
  },
  {
    "id": "boundary-3",
    "dim": "boundary",
    "context": "取舍 · 自己的节奏",
    "prompt": "对方希望关系推进得比你准备好的更快，你会？",
    "sub": "self",
    "options": [
      {
        "text": "怕对方失望，可能会勉强自己跟上。",
        "score": 0,
        "tag": null
      },
      {
        "text": "不直接说不愿意，先拖着或找理由避开。",
        "score": 1,
        "tag": null
      },
      {
        "text": "直接说现在不愿意，是否继续推进要等我准备好。",
        "score": 3,
        "tag": null
      },
      {
        "text": "如果对方反复催我，我会拉开距离，甚至不想继续。",
        "score": 3,
        "tag": null,
        "signals": [
          "relationship-boundary"
        ]
      }
    ]
  },
  {
    "id": "certainty-3",
    "dim": "certainty",
    "context": "日常相处 · 一句简单的回复",
    "prompt": "你分享了一件重要的事，对方只回复“嗯嗯”，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "先不多想，等对方有空再聊这件事。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会追问一句，想得到认真一点的回应。",
        "score": 2,
        "tag": null
      },
      {
        "text": "会生气，直接说这样回复让我觉得被敷衍。",
        "score": 2,
        "tag": null,
        "signals": [
          "protest-expression"
        ]
      },
      {
        "text": "一下子不想分享了，会结束话题，之后也少说一些。",
        "score": 2,
        "tag": null,
        "signals": [
          "withdraw-sharing"
        ]
      }
    ]
  },
  {
    "id": "intimacy-3",
    "dim": "intimacy",
    "context": "取舍 · 理想的联系频率",
    "prompt": "假设彼此都不忙，你更喜欢？",
    "sub": "main",
    "options": [
      {
        "text": "需要分享或安排时再联系。",
        "score": 0,
        "tag": null
      },
      {
        "text": "一天里自然地有很多次互动。",
        "score": 3,
        "tag": null
      },
      {
        "text": "每天有一段比较完整的交流。",
        "score": 2,
        "tag": null
      },
      {
        "text": "不必天天聊，几天一次也舒服。",
        "score": 1,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-3",
    "dim": "autonomy",
    "context": "内心反应 · 遭遇普通挫折",
    "prompt": "你遇到一件不顺心的事，对方暂时没空陪你，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "先找朋友聊聊或自己缓一缓，之后再告诉对方。",
        "score": 3,
        "tag": null
      },
      {
        "text": "明确说现在很需要支持，希望对方先抽几分钟陪我。",
        "score": 3,
        "tag": null,
        "signals": [
          "request-for-support"
        ]
      },
      {
        "text": "会觉得失望，没什么心情做别的，只想等对方有空。",
        "score": 0,
        "tag": null
      },
      {
        "text": "不想再麻烦对方，会自己处理，但心里可能有点疏远。",
        "score": 3,
        "tag": null,
        "signals": [
          "withdraw-connection"
        ]
      }
    ]
  },
  {
    "id": "expression-3",
    "dim": "expression",
    "context": "实际行动 · 被照顾之后",
    "prompt": "对方做了一件让你感动的事，你会？",
    "sub": "main",
    "options": [
      {
        "text": "会直接说我很感动，认真感谢对方。",
        "score": 3,
        "tag": null,
        "signals": [
          "verbal-expression"
        ]
      },
      {
        "text": "嘴上不太会说，会主动靠近或抱抱对方（双方都愿意时）。",
        "score": 3,
        "tag": null,
        "signals": [
          "action-expression"
        ]
      },
      {
        "text": "当时只简单回应，之后找机会用行动回馈。",
        "score": 3,
        "tag": null,
        "signals": [
          "action-expression"
        ]
      },
      {
        "text": "心里记得很深，但当时和之后都不太表现。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "repair-3",
    "dim": "repair",
    "context": "实际行动 · 自己确实说重了",
    "prompt": "你发现刚才的话伤到了对方，你会？",
    "sub": "main",
    "options": [
      {
        "text": "会直接承认那句话伤人，向对方道歉。",
        "score": 3,
        "tag": null
      },
      {
        "text": "知道自己说重了，但也觉得有委屈，会一边道歉一边解释。",
        "score": 3,
        "tag": null,
        "signals": [
          "repair-with-explanation"
        ]
      },
      {
        "text": "不太说得出道歉，会主动示好，希望把关系缓回来。",
        "score": 3,
        "tag": null,
        "signals": [
          "repair-by-action"
        ]
      },
      {
        "text": "当下拉不下面子，明知道伤到了对方也不愿先低头。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "commitment-3",
    "dim": "commitment",
    "context": "取舍 · 未来可能生活在不同城市",
    "prompt": "你很喜欢一个人，但已知道未来可能长期生活在不同城市，你更倾向？",
    "sub": "attitude",
    "options": [
      {
        "text": "先继续相处，真到需要选城市的时候再说。",
        "score": null,
        "tag": "先相处，之后再决定",
        "description": "面对可能的长期异地，你选择先继续相处，等现实选择临近时再决定。"
      },
      {
        "text": "愿意尝试异地，再看相处能不能维持。",
        "score": null,
        "tag": "愿意尝试异地",
        "description": "你愿意先试着维持异地关系，再根据实际相处决定是否继续。"
      },
      {
        "text": "希望尽早商量谁能调整；如果谁都不愿调整，就重新考虑关系。",
        "score": null,
        "tag": "先讨论谁能调整",
        "description": "你希望尽早确认双方能否调整安排；没有可行方案时会重新考虑关系。"
      },
      {
        "text": "我不太能接受长期异地，也不愿为关系搬家，可能会停止推进。",
        "score": null,
        "tag": "不接受长期异地或迁居",
        "description": "在这个情境中，你不愿接受长期异地，也不想为关系搬家。这是现实条件的取舍，不直接说明你不想长期相处。"
      }
    ],
    "topic": "异地与现实选择"
  },
  {
    "id": "possession-4",
    "dim": "possession",
    "context": "取舍 · 你期待的特别感",
    "prompt": "在一段双方都认可的关系里，你希望自己是？",
    "sub": "main",
    "options": [
      {
        "text": "不要求凡事先想到我，只要相处本身让我舒服。",
        "score": 0,
        "tag": null
      },
      {
        "text": "日常可以各忙各的，但遇到重要的事希望先找我。",
        "score": 1,
        "tag": null
      },
      {
        "text": "日常分享和多数安排都希望优先想到我。",
        "score": 2,
        "tag": null
      },
      {
        "text": "只要我的需要和别人冲突，通常希望对方先选我。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "boundary-4",
    "dim": "boundary",
    "context": "实际行动 · 时间被占用",
    "prompt": "连续几周，对方都把你的休息时间安排进共同活动。你会？",
    "sub": "self",
    "options": [
      {
        "text": "通常还是配合，宁愿自己累一点也不想扫兴。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会找理由推掉几次，但不太直接谈这件事。",
        "score": 2,
        "tag": null
      },
      {
        "text": "直接说有些时间我要自己安排，不再全部参加。",
        "score": 3,
        "tag": null
      },
      {
        "text": "积累到受不了时会发火，要求别再替我决定。",
        "score": 3,
        "tag": null,
        "signals": [
          "angry-boundary"
        ]
      }
    ]
  },
  {
    "id": "certainty-4",
    "dim": "certainty",
    "context": "日常相处 · 忙碌的一周",
    "prompt": "对方预告接下来一周会很忙，什么安排最让你舒服？",
    "sub": "main",
    "options": [
      {
        "text": "知道这周忙就行，联系少一些我能接受。",
        "score": 0,
        "tag": null
      },
      {
        "text": "不需要聊很久，但希望每天至少有一句消息。",
        "score": 1,
        "tag": null
      },
      {
        "text": "希望留一个相对固定的聊天时间，不然我会不安或不满。",
        "score": 2,
        "tag": null
      },
      {
        "text": "再忙也希望保留平时的大部分联系，减少太多我接受不了。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "intimacy-4",
    "dim": "intimacy",
    "context": "日常相处 · 新的兴趣",
    "prompt": "发现一个新爱好，你更期待？",
    "sub": "main",
    "options": [
      {
        "text": "最好一起开始，一起探索。",
        "score": 3,
        "tag": null
      },
      {
        "text": "邀请对方参与其中一部分。",
        "score": 2,
        "tag": null
      },
      {
        "text": "主要自己发展，偶尔分享成果。",
        "score": 1,
        "tag": null
      },
      {
        "text": "保留为自己的个人活动。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-4",
    "dim": "autonomy",
    "context": "取舍 · 个人目标",
    "prompt": "一个对你很重要的计划与部分约会时间冲突，你会？",
    "sub": "main",
    "options": [
      {
        "text": "多数时候会让个人计划给约会让路。",
        "score": 0,
        "tag": null
      },
      {
        "text": "两边都不想放，常常勉强挤时间，最后自己很累。",
        "score": 1,
        "tag": null
      },
      {
        "text": "尽量保留计划，约会换个时间；实在撞上时各自安排。",
        "score": 3,
        "tag": null
      },
      {
        "text": "这个目标对我更重要，我会优先推进，即使对方暂时不高兴。",
        "score": 3,
        "tag": null,
        "signals": [
          "personal-goal-priority"
        ]
      }
    ]
  },
  {
    "id": "expression-4",
    "dim": "expression",
    "context": "实际行动 · 轻微委屈",
    "prompt": "你因一件小事有些委屈，又觉得对方可能没意识到，你会？",
    "sub": "main",
    "options": [
      {
        "text": "直接说我有点委屈，希望对方知道。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会带点埋怨或反话，让对方知道我不高兴了。",
        "score": 2,
        "tag": null,
        "signals": [
          "protest-expression"
        ]
      },
      {
        "text": "会变冷淡、少说话，等对方来问。",
        "score": 1,
        "tag": null,
        "signals": [
          "withdraw-expression"
        ]
      },
      {
        "text": "通常压下去，觉得说出来麻烦，或者怕显得计较。",
        "score": 0,
        "tag": null,
        "signals": [
          "suppressed-needs"
        ]
      }
    ]
  },
  {
    "id": "repair-4",
    "dim": "repair",
    "context": "取舍 · 对同一件事看法不同",
    "prompt": "双方都没有明显对错，你更倾向？",
    "sub": "attitude",
    "options": [
      {
        "text": "会继续讲自己的理由，希望对方接受我的看法。",
        "score": null,
        "tag": "先争取自己的观点",
        "description": "你倾向于继续说明理由，希望对方理解或接受自己的看法。坚持观点本身不能说明你不愿修复。"
      },
      {
        "text": "为了不再吵会先让步，但心里未必服气。",
        "score": null,
        "tag": "先让步，心里未必服气",
        "description": "你可能先结束争执，但内心还保留不同意见。口头同意与真正达成共识并不总是一回事。"
      },
      {
        "text": "会一起找一个各退一点、都能接受的做法。",
        "score": null,
        "tag": "寻找双方能接受的做法",
        "description": "在没有明显对错的分歧里，你倾向于寻找各退一点的安排。"
      },
      {
        "text": "认为这件事谁也说服不了谁，各自保留看法。",
        "score": null,
        "tag": "保留不同看法",
        "description": "你可以接受双方不完全同意。是否需要进一步协商，还取决于这件事会不会影响共同生活。"
      }
    ],
    "topic": "分歧中的取向"
  },
  {
    "id": "commitment-4",
    "dim": "commitment",
    "context": "内心反应 · 你期待的关系",
    "prompt": "在当前阶段，什么最接近你的期待？",
    "sub": "main",
    "options": [
      {
        "text": "珍惜一段相处，不预设持续多久。",
        "score": 0,
        "tag": null
      },
      {
        "text": "希望自然持续，但不急着规划。",
        "score": 1,
        "tag": null
      },
      {
        "text": "希望建立较稳定、可持续的关系。",
        "score": 2,
        "tag": null
      },
      {
        "text": "明确期待长期经营，并愿意为此协调生活。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "possession-5",
    "dim": "possession",
    "context": "实际行动 · 没有违背双方约定",
    "prompt": "你对对方与某位朋友的往来感到吃醋，接下来会？",
    "sub": "intervention",
    "options": [
      {
        "text": "先不说，自己难受一阵，等情绪过去再看。",
        "score": 0,
        "tag": null
      },
      {
        "text": "直接说我介意，希望对方减少这种往来。",
        "score": 0,
        "tag": null,
        "signals": [
          "single-boundary-request"
        ]
      },
      {
        "text": "反复要求停止，直到对方答应我才愿意翻篇。",
        "score": 3,
        "tag": null,
        "signals": [
          "persistent-pressure"
        ]
      },
      {
        "text": "会减少联系和亲近，不想继续像之前那样投入。",
        "score": 0,
        "tag": null,
        "signals": [
          "withdraw-investment"
        ]
      }
    ]
  },
  {
    "id": "boundary-5",
    "dim": "boundary",
    "context": "实际行动 · 对方说不",
    "prompt": "对方明确表示今晚需要独处，你更可能？",
    "sub": "respect",
    "options": [
      {
        "text": "接受，自己安排今晚，不需要再确认。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会失落，想多问一句是不是和我有关；对方坚持独处就先不打扰。",
        "score": 3,
        "tag": null,
        "signals": [
          "ask-reason"
        ]
      },
      {
        "text": "会觉得被推开，自己也冷下来，暂时不想再主动联系。",
        "score": 3,
        "tag": null,
        "signals": [
          "withdraw-connection"
        ]
      },
      {
        "text": "还是希望马上见面或通话，会继续要求对方陪我。",
        "score": 0,
        "tag": null,
        "signals": [
          "persistent-contact"
        ]
      }
    ]
  },
  {
    "id": "certainty-5",
    "dim": "certainty",
    "context": "内心反应 · 没有异常的普通一天",
    "prompt": "即使关系稳定，你希望听到明确的喜欢或在意吗？",
    "sub": "main",
    "options": [
      {
        "text": "比较需要，长时间不说会有些不安。",
        "score": 2,
        "tag": null
      },
      {
        "text": "非常需要，缺少明确表达就容易怀疑。",
        "score": 3,
        "tag": null
      },
      {
        "text": "不需要经常说，知道彼此的态度就好。",
        "score": 0,
        "tag": null
      },
      {
        "text": "偶尔听到会开心，不太影响安心程度。",
        "score": 1,
        "tag": null
      }
    ]
  },
  {
    "id": "intimacy-5",
    "dim": "intimacy",
    "context": "日常相处 · 彼此的朋友圈",
    "prompt": "你期待怎样的社交关系？",
    "sub": "main",
    "options": [
      {
        "text": "有部分共同圈子，也各自交往。",
        "score": 2,
        "tag": null
      },
      {
        "text": "偶尔认识彼此朋友，活动仍以各自为主。",
        "score": 1,
        "tag": null
      },
      {
        "text": "大多保持各自圈子也很自在。",
        "score": 0,
        "tag": null
      },
      {
        "text": "很多共同朋友，经常一起参加活动。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-5",
    "dim": "autonomy",
    "context": "内心反应 · 不同的评价",
    "prompt": "对方不太喜欢你很满意的一项个人成果，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "会明显动摇，怀疑这项成果是不是真的没什么价值。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会难受，需要找其他人聊聊或获得一些肯定。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会生气，觉得对方在泼冷水，但我仍然认可自己的成果。",
        "score": 3,
        "tag": null,
        "signals": [
          "anger-with-self-worth"
        ]
      },
      {
        "text": "会听听理由，不过最后仍按自己的判断评价这件事。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "expression-5",
    "dim": "expression",
    "context": "日常相处 · 关系已经稳定",
    "prompt": "你还会主动表达在意吗？",
    "sub": "main",
    "options": [
      {
        "text": "经常表达，也会留意对方是否接收到了。",
        "score": 3,
        "tag": null
      },
      {
        "text": "很少，觉得彼此知道就好。",
        "score": 0,
        "tag": null
      },
      {
        "text": "主要在特殊日子表达。",
        "score": 1,
        "tag": null
      },
      {
        "text": "平时也会主动表达。",
        "score": 2,
        "tag": null
      }
    ]
  },
  {
    "id": "repair-5",
    "dim": "repair",
    "context": "实际行动 · 对方提出不满",
    "prompt": "对方说你某个习惯让人不舒服，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "会先听清楚具体哪里让人不舒服，再讨论能改什么。",
        "score": 3,
        "tag": null
      },
      {
        "text": "第一反应会反驳、解释自己，冷静后通常还能接着谈。",
        "score": 3,
        "tag": null,
        "signals": [
          "repair-after-defensiveness"
        ]
      },
      {
        "text": "先答应让争执停下来，但未必真的愿意改变。",
        "score": 1,
        "tag": null,
        "signals": [
          "verbal-agreement-only"
        ]
      },
      {
        "text": "会觉得对方太挑剔，不想再讨论这个习惯。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "commitment-5",
    "dim": "commitment",
    "context": "取舍 · 投入更多之前",
    "prompt": "关系要占用更多时间、精力之前，你最在意哪件事？",
    "sub": "attitude",
    "options": [
      {
        "text": "先看我自己是不是想投入更多，目前愿意就够了。",
        "score": null,
        "tag": "先看自己的意愿",
        "description": "你首先考虑自己当下是否想投入更多，不一定需要其他条件都明确后才行动。"
      },
      {
        "text": "想确认对方也愿意投入，不能总是我在腾时间。",
        "score": null,
        "tag": "在意投入是否对等",
        "description": "增加时间和精力之前，你希望对方也有相应投入，不愿总由自己腾出空间。"
      },
      {
        "text": "想确认这段关系有继续发展的可能，再增加投入。",
        "score": null,
        "tag": "先看发展可能",
        "description": "你希望先确认关系有继续发展的可能，再投入更多时间和精力。"
      },
      {
        "text": "更在意会不会挤掉自己的生活；即使关系不错，也未必想增加时间。",
        "score": null,
        "tag": "保留自己的生活",
        "description": "即使关系不错，你也不一定想增加相处时间。个人空间的需要不直接等于长期意愿低。"
      }
    ],
    "topic": "投入前的考虑"
  },
  {
    "id": "possession-6",
    "dim": "possession",
    "context": "实际行动 · 对方的私人设备",
    "prompt": "对方暂时不愿共享手机密码，你更可能？",
    "sub": "intervention",
    "options": [
      {
        "text": "不交换也可以，我也希望保留自己的隐私。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会追问为什么不愿意，想听到能让我理解的理由。",
        "score": 0,
        "tag": null,
        "signals": [
          "ask-reason"
        ]
      },
      {
        "text": "觉得伴侣之间就该互相透明，会继续要求交换密码。",
        "score": 2,
        "tag": null,
        "signals": [
          "persistent-pressure"
        ]
      },
      {
        "text": "表面不再争，但可能找机会自行查看。",
        "score": 3,
        "tag": null,
        "signals": [
          "covert-access"
        ]
      }
    ]
  },
  {
    "id": "boundary-6",
    "dim": "boundary",
    "context": "实际行动 · 不愿展开的话题",
    "prompt": "对方说有段往事目前不想细讲，你更可能？",
    "sub": "respect",
    "options": [
      {
        "text": "对方现在不想说，我就不继续问。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会问为什么不能说，希望至少知道大致原因。",
        "score": 3,
        "tag": null,
        "signals": [
          "ask-reason"
        ]
      },
      {
        "text": "不会再追问，但心里会起疑，先放慢自己的投入。",
        "score": 3,
        "tag": null,
        "signals": [
          "slow-investment"
        ]
      },
      {
        "text": "会绕过对方，找共同朋友打听那段往事。",
        "score": 0,
        "tag": null,
        "signals": [
          "indirect-private-inquiry"
        ]
      }
    ]
  },
  {
    "id": "certainty-6",
    "dim": "certainty",
    "context": "取舍 · 临时变动",
    "prompt": "对方临时想调整已经约好的见面计划，什么更接近你的态度？",
    "sub": "attitude",
    "options": [
      {
        "text": "有合理原因就能接受，之后说明一下即可。",
        "score": null,
        "tag": "能接受有原因的变动",
        "description": "面对临时改动，你更看重原因是否合理，之后说明也可以。"
      },
      {
        "text": "可以调整，但希望确定有变化时就告诉我。",
        "score": null,
        "tag": "希望及时告知",
        "description": "计划可以调整，但你希望一确定变化就被告知，以便安排自己的时间。"
      },
      {
        "text": "希望先和我商量；直接改掉约定会让我不高兴。",
        "score": null,
        "tag": "希望先共同商量",
        "description": "你在意已经约好的计划是否经过双方商量。对单方面更改不满，不直接等于缺乏安全感。"
      },
      {
        "text": "如果临时改动让我白等或打乱安排，我可能会取消这次约会。",
        "score": null,
        "tag": "保护自己的时间安排",
        "description": "如果临时改动让你白等或打乱安排，你可能取消这次约会。这是在表达对时间和约定的要求。"
      }
    ],
    "topic": "约定与计划变化"
  },
  {
    "id": "intimacy-6",
    "dim": "intimacy",
    "context": "内心反应 · 几天没有见面",
    "prompt": "连续几天因为各自的安排没见面，你更接近？",
    "sub": "main",
    "options": [
      {
        "text": "已经明显觉得陪伴不够，会主动要求安排见面。",
        "score": 3,
        "tag": null
      },
      {
        "text": "挺想见对方，但更希望对方主动约我。",
        "score": 3,
        "tag": null,
        "signals": [
          "wait-for-invitation"
        ]
      },
      {
        "text": "有些想念，不过按原来的节奏见面就行。",
        "score": 1,
        "tag": null
      },
      {
        "text": "自己过得挺充实，暂时没有增加见面的需要。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-6",
    "dim": "autonomy",
    "context": "日常相处 · 一段独处时间",
    "prompt": "当对方正常安排自己的活动时，你通常？",
    "sub": "main",
    "options": [
      {
        "text": "很难投入自己的事，总想着对方什么时候回来或联系我。",
        "score": 0,
        "tag": null
      },
      {
        "text": "能做些自己的事，但常常停下来查看对方有没有消息。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会认真投入自己的安排，之后再和对方联系。",
        "score": 3,
        "tag": null
      },
      {
        "text": "挺享受完全不被打扰，有时甚至希望这段时间再长一点。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "expression-6",
    "dim": "expression",
    "context": "实际行动 · 一次误会",
    "prompt": "对方误解了你没有表达出来的本意，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "会把当时的意思讲清楚，也听听对方为什么误解。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会急着反复解释，可能越说越激动，很想让对方相信我。",
        "score": 3,
        "tag": null,
        "signals": [
          "urgent-expression"
        ]
      },
      {
        "text": "会觉得解释也没用，冷下来，不太想继续说。",
        "score": 0,
        "tag": null,
        "signals": [
          "withdraw-expression"
        ]
      },
      {
        "text": "通常不主动解释，等对方来问再说。",
        "score": 1,
        "tag": null
      }
    ]
  },
  {
    "id": "repair-6",
    "dim": "repair",
    "context": "实际行动 · 老问题再次出现",
    "prompt": "之前讨论过的问题又发生了，你会？",
    "sub": "attitude",
    "options": [
      {
        "text": "还愿意再谈一次，但这次想说清具体要怎么做。",
        "score": null,
        "tag": "继续谈具体做法",
        "description": "同一个问题再次出现时，你仍愿意谈，但更希望明确接下来怎么做。"
      },
      {
        "text": "会很生气，翻出之前说过的话，要求对方给个交代。",
        "score": null,
        "tag": "强烈抗议，要求交代",
        "description": "反复发生的问题容易引起你的愤怒，你希望对方认真回应之前的约定。"
      },
      {
        "text": "会降低期待，不再怎么争，但也会减少投入。",
        "score": null,
        "tag": "降低期待与投入",
        "description": "你可能不再反复争论，但会逐渐减少期待和投入。看起来平静不一定意味着问题已经解决。"
      },
      {
        "text": "会说明自己的限度：如果继续这样，我不愿再维持原来的相处方式。",
        "score": null,
        "tag": "说明继续相处的限度",
        "description": "你会说明反复问题带来的限度，并考虑改变相处方式。设定底线不等于缺乏修复能力。"
      }
    ],
    "topic": "重复问题的处理"
  },
  {
    "id": "commitment-6",
    "dim": "commitment",
    "context": "实际行动 · 共同计划",
    "prompt": "假设双方条件允许，你对几个月后的共同安排会？",
    "sub": "main",
    "options": [
      {
        "text": "会做可调整的初步计划。",
        "score": 2,
        "tag": null
      },
      {
        "text": "愿意共同规划，并为落实安排时间与资源。",
        "score": 3,
        "tag": null
      },
      {
        "text": "更喜欢临近时再决定。",
        "score": 0,
        "tag": null
      },
      {
        "text": "愿意大致说说，暂不落实。",
        "score": 1,
        "tag": null
      }
    ]
  },
  {
    "id": "possession-7",
    "dim": "possession",
    "context": "实际行动 · 对方已有安排",
    "prompt": "对方要与朋友出游，你不太喜欢其中一位同行者，但没有具体越界行为。你会？",
    "sub": "intervention",
    "options": [
      {
        "text": "虽然不喜欢那个人，但通常不会干涉这次出游。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会问清楚和谁去、怎么安排，了解后再决定自己能不能接受。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会直接说不希望对方去，或者希望避开与那个人单独相处。",
        "score": 0,
        "tag": null,
        "signals": [
          "single-boundary-request"
        ]
      },
      {
        "text": "如果对方仍然去了，会反复联系、索要位置，确认正在和谁一起。",
        "score": 3,
        "tag": null,
        "signals": [
          "intrusive-checking"
        ]
      }
    ]
  },
  {
    "id": "boundary-7",
    "dim": "boundary",
    "context": "实际行动 · 共同活动中的拒绝",
    "prompt": "你很期待一项活动，但对方明确不喜欢。你会？",
    "sub": "respect",
    "options": [
      {
        "text": "可以自己或找朋友去，不一定非要一起。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会明显失望，可能抱怨几句，但不会强拉对方去。",
        "score": 3,
        "tag": null,
        "signals": [
          "disappointed-but-respects-no"
        ]
      },
      {
        "text": "会多劝几次，希望对方为了我尝试一下；仍拒绝就算了。",
        "score": 3,
        "tag": null,
        "signals": [
          "limited-persuasion"
        ]
      },
      {
        "text": "觉得这点事都不愿陪我不应该，会一直要求对方参加。",
        "score": 0,
        "tag": null,
        "signals": [
          "persistent-pressure"
        ]
      }
    ]
  },
  {
    "id": "certainty-7",
    "dim": "certainty",
    "context": "内心反应 · 情绪变化",
    "prompt": "对方今天话少一些，却说只是累了。你会？",
    "sub": "main",
    "options": [
      {
        "text": "先按“累了”理解，让对方安静一会儿。",
        "score": 0,
        "tag": null
      },
      {
        "text": "还是担心是不是和我有关，会再确认一次。",
        "score": 2,
        "tag": null
      },
      {
        "text": "会觉得自己受了冷落，直接问为什么对我这么冷。",
        "score": 2,
        "tag": null,
        "signals": [
          "protest-expression"
        ]
      },
      {
        "text": "不想追问，对方冷淡我也少说，先拉开一点距离。",
        "score": 2,
        "tag": null,
        "signals": [
          "withdraw-connection"
        ]
      }
    ]
  },
  {
    "id": "intimacy-7",
    "dim": "intimacy",
    "context": "取舍 · 共同生活",
    "prompt": "如果住在一起，你更喜欢？",
    "sub": "main",
    "options": [
      {
        "text": "大部分时间独立，有需要再协调。",
        "score": 0,
        "tag": null
      },
      {
        "text": "多数日常都共同安排。",
        "score": 3,
        "tag": null
      },
      {
        "text": "有几个固定的共同习惯。",
        "score": 2,
        "tag": null
      },
      {
        "text": "日常各自安排，专门留出约会时间。",
        "score": 1,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-7",
    "dim": "autonomy",
    "context": "实际行动 · 一项个人决定",
    "prompt": "面对主要影响你自己的非重大决定，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "很在意对方的意见，对方不认可我就难做决定。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会反复征求意见，最后常常按对方的想法选。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会商量，但最后由自己决定，即使意见不同。",
        "score": 3,
        "tag": null
      },
      {
        "text": "通常自己决定，不一定会提前商量或告知。",
        "score": 3,
        "tag": null,
        "signals": [
          "independent-without-sharing"
        ]
      }
    ]
  },
  {
    "id": "expression-7",
    "dim": "expression",
    "context": "表达方式 · 没有高低之分",
    "prompt": "想让对方知道“你对我很重要”，最自然的方式是？",
    "sub": "style",
    "options": [
      {
        "text": "用持续的照顾和实际行动表达。",
        "score": null,
        "tag": "行动表达"
      },
      {
        "text": "语言与行动都会，自然结合。",
        "score": null,
        "tag": "语言与行动结合"
      },
      {
        "text": "会观察对方更能接收到哪种方式。",
        "score": null,
        "tag": "随对方需要调整"
      },
      {
        "text": "直接说出来或认真写下来。",
        "score": null,
        "tag": "语言表达"
      }
    ]
  },
  {
    "id": "repair-7",
    "dim": "repair",
    "context": "日常相处 · 冲突之后的靠近",
    "prompt": "问题谈完后，你通常会？",
    "sub": "attitude",
    "options": [
      {
        "text": "事情说清就能慢慢恢复，愿意主动靠近。",
        "score": null,
        "tag": "谈清后愿意靠近",
        "description": "问题说清以后，你通常愿意逐步恢复日常交流与亲近。"
      },
      {
        "text": "道理明白了，但情绪还没过去，需要一段时间再亲近。",
        "score": null,
        "tag": "情绪需要多一点时间",
        "description": "事情说清后，你的情绪可能还没跟上。恢复得慢不等于故意惩罚对方。"
      },
      {
        "text": "希望对方先哄一哄或主动示好，我才比较容易缓过来。",
        "score": null,
        "tag": "需要对方先示好",
        "description": "你更容易在对方主动安慰或靠近后缓下来，这反映了你希望得到怎样的回应。"
      },
      {
        "text": "嘴上说过去了，心里还记着，之后遇到相似情况容易再提。",
        "score": null,
        "tag": "不满仍可能被触发",
        "description": "即使当时说过去了，遇到相似情况仍可能想起旧的不舒服。可以进一步分清哪里还没有真正说清。"
      }
    ],
    "topic": "冲突后的恢复节奏"
  },
  {
    "id": "commitment-7",
    "dim": "commitment",
    "context": "取舍 · 需要协调生活习惯",
    "prompt": "为了让关系持续，双方需要做一些合理调整，你更倾向？",
    "sub": "attitude",
    "options": [
      {
        "text": "愿意调整，只要不碰到自己很重要的需要。",
        "score": null,
        "tag": "重要需要之外愿意调整",
        "description": "你愿意为相处改变一部分习惯，同时保留对自己重要的需要。"
      },
      {
        "text": "可以改，但希望双方都改，不能只让我迁就。",
        "score": null,
        "tag": "希望双方一起调整",
        "description": "你可以改变，但不愿总是单方面迁就。要求对等不等于不愿长期经营。"
      },
      {
        "text": "只有小事愿意动，重要的生活习惯不想为了恋爱改变。",
        "score": null,
        "tag": "保留重要生活习惯",
        "description": "小事可以调整，重要习惯更希望保留。相处中需要说清哪些差异能够接受。"
      },
      {
        "text": "更希望找本来就合拍的人；需要改变太多时会考虑关系是否合适。",
        "score": null,
        "tag": "更看重原本的合拍程度",
        "description": "当需要改变的地方太多，你会重新考虑是否合适。这是选择关系的原则，不是承诺的高低排名。"
      }
    ],
    "topic": "生活调整的原则"
  },
  {
    "id": "possession-8",
    "dim": "possession",
    "context": "实际行动 · 穿着偏好不同",
    "prompt": "对方准备穿自己喜欢、你却不喜欢的衣服出门，你更可能？",
    "sub": "intervention",
    "options": [
      {
        "text": "对方穿什么由对方决定，我一般不发表意见。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会说我不喜欢，也会问能不能换；对方不换就不再劝。",
        "score": 0,
        "tag": null,
        "signals": [
          "single-boundary-request"
        ]
      },
      {
        "text": "会反复劝换掉，很难就这样算了。",
        "score": 3,
        "tag": null,
        "signals": [
          "persistent-pressure"
        ]
      },
      {
        "text": "不会替对方决定，但自己可能不想一起出门，会另作安排。",
        "score": 0,
        "tag": null,
        "signals": [
          "withdraw-own-plan"
        ]
      }
    ]
  },
  {
    "id": "boundary-8",
    "dim": "boundary",
    "context": "实际行动 · 分享合照",
    "prompt": "你想发布合照，但对方希望这张照片不要公开。你会？",
    "sub": "respect",
    "options": [
      {
        "text": "不发这张，是否公开可以以后再说。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会问清楚是照片不满意，还是不想公开我们的关系，再商量。",
        "score": 3,
        "tag": null,
        "signals": [
          "ask-reason"
        ]
      },
      {
        "text": "会明显不舒服，怀疑对方不想承认关系；先不发，但想把这件事说清楚。",
        "score": 3,
        "tag": null,
        "signals": [
          "public-relationship-concern"
        ]
      },
      {
        "text": "觉得只是张合照，不需要这么在意，可能还是会发。",
        "score": 0,
        "tag": null,
        "signals": [
          "publishes-without-consent"
        ]
      }
    ]
  },
  {
    "id": "certainty-8",
    "dim": "certainty",
    "context": "取舍 · 你需要的回应",
    "prompt": "当关系中的一件事让你不安时，哪种回应最能让你缓下来？",
    "sub": "attitude",
    "options": [
      {
        "text": "把原因说清楚，一次解释通常就能让我放下。",
        "score": null,
        "tag": "一次清楚的解释",
        "description": "事情的原因被讲清楚，通常就能帮助你放下不安。"
      },
      {
        "text": "比起解释，我更希望被陪一会儿、被关心或安慰。",
        "score": null,
        "tag": "陪伴与情感支持",
        "description": "你更容易通过被陪伴、关心或安慰缓下来，不一定需要更多解释。"
      },
      {
        "text": "光说不太够，后续真的做到约定我才会安心。",
        "score": null,
        "tag": "后续兑现约定",
        "description": "你更看重之后是否真的做到约定。希望看到行动，不直接意味着比别人更不安。"
      },
      {
        "text": "即使解释和行动都有，我也常需要过一阵再确认一次。",
        "score": null,
        "tag": "持续的再次确认",
        "description": "即使已有解释和行动，你有时仍希望再次确认。这条记录只描述你的回应偏好，不单独改动确定感主分。"
      }
    ],
    "topic": "让你安心的回应"
  },
  {
    "id": "intimacy-8",
    "dim": "intimacy",
    "context": "日常相处 · 无事可做的一晚",
    "prompt": "对方提议什么也不做，只是在同一个空间各忙各的，你觉得？",
    "sub": "main",
    "options": [
      {
        "text": "这也是很喜欢的陪伴方式，常常这样很好。",
        "score": 3,
        "tag": null
      },
      {
        "text": "偶尔这样很舒服。",
        "score": 2,
        "tag": null
      },
      {
        "text": "有明确共同活动时待在一起更适合我。",
        "score": 1,
        "tag": null
      },
      {
        "text": "通常更愿意回到各自空间。",
        "score": 0,
        "tag": null
      }
    ]
  },
  {
    "id": "autonomy-8",
    "dim": "autonomy",
    "context": "内心反应 · 一次普通分歧",
    "prompt": "关系中出现小分歧时，你对自己的感觉通常？",
    "sub": "main",
    "options": [
      {
        "text": "容易先怀疑是不是自己不好、不值得被喜欢。",
        "score": 0,
        "tag": null
      },
      {
        "text": "会担心对方是不是没那么喜欢我了，想得到确认。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会生气，觉得是对方不理解我，不太会因此否定自己。",
        "score": 3,
        "tag": null,
        "signals": [
          "anger-with-self-worth"
        ]
      },
      {
        "text": "觉得只是看法不同，不太影响我对自己的评价。",
        "score": 3,
        "tag": null
      }
    ]
  },
  {
    "id": "expression-8",
    "dim": "expression",
    "context": "表达方式 · 没有高低之分",
    "prompt": "在一个值得纪念的日子，你最愿意？",
    "sub": "ritual",
    "options": [
      {
        "text": "会主动准备礼物、活动或一段专门的相处时间。",
        "score": null,
        "tag": "主动准备特别安排",
        "description": "你愿意主动准备活动、礼物或一段专门的相处时间。"
      },
      {
        "text": "会说句特别的话或发条消息，但不太做额外安排。",
        "score": null,
        "tag": "用一句话表达纪念",
        "description": "你会用特别的话或消息表示在意，不一定额外安排活动。"
      },
      {
        "text": "主要看对方重不重视；对方提出，我会配合。",
        "score": null,
        "tag": "看对方是否重视再配合",
        "description": "你会参考对方的重视程度，对方提出时愿意一起参与。"
      },
      {
        "text": "我通常不过这些日子，更在意平时怎样相处。",
        "score": null,
        "tag": "更在意平时的相处",
        "description": "你不太过纪念日，更关注日常相处。这不代表爱意或情感表达更少。"
      }
    ],
    "topic": "纪念日与仪式偏好"
  },
  {
    "id": "repair-8",
    "dim": "repair",
    "context": "实际行动 · 对方暂时没准备好谈",
    "prompt": "你想解决分歧，但对方需要时间，你会？",
    "sub": "main",
    "options": [
      {
        "text": "可以先停，约个大致时间再谈。",
        "score": 3,
        "tag": null
      },
      {
        "text": "很难带着没解决的事等着，会不断追问，希望当下说清。",
        "score": 2,
        "tag": null,
        "signals": [
          "urgent-resolution"
        ]
      },
      {
        "text": "先不打扰，但这次等对方来找我，不想总是自己主动。",
        "score": 2,
        "tag": null,
        "signals": [
          "wait-for-repair"
        ]
      },
      {
        "text": "如果对方一直不给重谈时间，我会先减少接触，考虑还要不要继续处理。",
        "score": 2,
        "tag": null,
        "signals": [
          "limit-after-nonresponse"
        ]
      }
    ]
  },
  {
    "id": "commitment-8",
    "dim": "commitment",
    "context": "情境选择 · 关系的平淡期",
    "prompt": "关系进入平淡期，没有新的严重冲突，但心动比以前少了，你更可能？",
    "sub": "main",
    "options": [
      {
        "text": "觉得关系有平淡期很正常，只要相处稳定就愿意继续。",
        "score": 3,
        "tag": null
      },
      {
        "text": "还想继续，会主动尝试一些新安排，看看能不能重新靠近。",
        "score": 3,
        "tag": null
      },
      {
        "text": "会慢慢减少投入，看看自己还想不想继续。",
        "score": 1,
        "tag": null
      },
      {
        "text": "会考虑结束；如果长期没有心动，我不想只为了维持而维持。",
        "score": 0,
        "tag": null,
        "signals": [
          "needs-lasting-attraction"
        ]
      }
    ]
  }
];
