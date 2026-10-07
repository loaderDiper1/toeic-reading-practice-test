import { Question } from '../types/toeic';

export const PART_6_QUESTIONS: Question[] = [
  {
    id: 141,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_141_143',
    question: 'Please take a moment to ______ these guidelines regarding the use of the conference room.',
    options: {
      A: 'revise',
      B: 'review',
      C: 'revert',
      D: 'reveal',
    },
    correctAnswer: 'B',
    grammarFocus: 'Vocabulary in Context',
    explanation: {
      correct:
        '"Review" is correct because it means to examine, read through, or consider guidelines carefully. The office manager is asking staff members to read and become familiar with the policy.',
      chinese:
        '“review”（温习、查看、审阅）是正确答案。办公室经理提醒全体员工花时间阅读并了解会议室使用准则，“review guidelines”是常见商业搭配。',
      incorrect: {
        A: {
          en: '"Revise" means to amend, edit, or alter guidelines, which is the role of management, not regular staff reading a memo.',
          zh: '“revise”意思是修改、修订，普通员工并非去修订规定，而是去阅读了解。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Revert" means to return to a previous state or reply ("revert to"), which does not make sense here.',
          zh: '“revert”意为恢复原状或回复，不接guidelines作宾语。',
        },
        D: {
          en: '"Reveal" means to disclose a secret or unveil something hidden, which is inappropriate for reading published guidelines.',
          zh: '“reveal”意为揭露、泄露，在此语境不合。',
        },
      },
    },
  },

  {
    id: 142,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_141_143',
    question: 'To ensure that you get the time slot you want, we suggest doing this at least one week ______.',
    options: {
      A: 'succeeding',
      B: 'subsequent',
      C: 'in advance',
      D: 'in the agenda',
    },
    correctAnswer: 'C',
    grammarFocus: 'Idiomatic Phrase of Time',
    explanation: {
      correct:
        '"In advance" is an adverbial idiom meaning beforehand or ahead of time. "At least one week in advance" is the standard business English expression for booking early.',
      chinese:
        '“in advance”（提前）是正确答案。“at least one week in advance”表示“至少提前一周”，是预约场地或会议的常用地道表达。',
      incorrect: {
        A: {
          en: '"Succeeding" is an adjective meaning subsequent or coming after, which cannot function as an adverb of advance notice.',
          zh: '“succeeding”是形容词，意为随后的，不能作提前的时间副词短语。',
        },
        B: {
          en: '"Subsequent" is an adjective meaning happening after something else, rather than beforehand.',
          zh: '“subsequent”意为随后的/后来的，含义相反。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"In the agenda" refers to items listed on a meeting schedule, not booking prior to an event.',
          zh: '“in the agenda”指在议程中，与提前预订时间无关。',
        },
      },
      learningTip: {
        en: '"In advance" (= ahead of time, beforehand) frequently appears in TOEIC scheduling, reservation, and booking contexts.',
        zh: '“in advance”表示“提前、预先”，在TOEIC日程安排、预定酒店及会议室等考题中极高频出现。',
      },
    },
  },

  {
    id: 143,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_141_143',
    question: 'Please be considerate of others and straighten ______ the room when you have finished using it.',
    options: {
      A: 'off',
      B: 'in',
      C: 'up',
      D: 'back',
    },
    correctAnswer: 'C',
    grammarFocus: 'Phrasal Verb',
    explanation: {
      correct:
        '"Straighten up" is a phrasal verb meaning to tidy up, organize, or clean up an area, perfectly supported by the following sentence instructing users to place chairs around the table and wipe the whiteboard clean.',
      chinese:
        '“straighten up”（收拾整齐、整理）是正确答案。与后文整理椅子、擦干净白板等清理要求相契合。',
      incorrect: {
        A: {
          en: '"Straighten off" is not a standard English phrasal verb.',
          zh: '“straighten off”不是英语中的固定短语。',
        },
        B: {
          en: '"Straighten in" does not exist as an idiom for cleaning up.',
          zh: '“straighten in”不是表示整理的短语。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Straighten back" implies physically leaning backward, not cleaning a room.',
          zh: '“straighten back”指身体向后挺直，与打扫房间无关。',
        },
      },
    },
  },

  {
    id: 144,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_144_146',
    question: 'Please call the Fountainhead Restaurant and make reservations for three. ______ a table near the fountain.',
    options: {
      A: 'Require',
      B: 'Request',
      C: 'Requisite',
      D: 'Requisition',
    },
    correctAnswer: 'B',
    grammarFocus: 'Imperative Verb / Vocabulary',
    explanation: {
      correct:
        '"Request" is a polite imperative verb meaning to politely ask for something ("Request a table near the fountain"). It fits the tone of instructions given to an assistant making a restaurant reservation.',
      chinese:
        '“Request”（请求、要求）是正确答案。作为祈使句动词原形，礼貌地要求预订喷泉旁边的桌位，完全符合职场中交代下属订座的用语。',
      incorrect: {
        A: {
          en: '"Require" means to demand as a strict necessity or mandatory condition, which sounds overly demanding for a restaurant preference.',
          zh: '“Require”意为强制要求/命令，用于餐厅订座偏好语气过于生硬。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Requisite" is an adjective or noun meaning indispensable or a prerequisite, not a verb.',
          zh: '“Requisite”是形容词或名词（必需品），不能作祈使句谓语动词。',
        },
        D: {
          en: '"Requisition" is a formal noun or verb typically used for official supply demands in organizations, not casual table reservations.',
          zh: '“Requisition”通常指正式的物资征用或请购，不用于订餐桌。',
        },
      },
    },
  },

  {
    id: 145,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_144_146',
    question: '______ you have made the arrangements, please call Ms. Yu and Mr. Bao and let them know the time and place.',
    options: {
      A: 'During',
      B: 'Prior to',
      C: 'As soon as',
      D: 'Meantime',
    },
    correctAnswer: 'C',
    grammarFocus: 'Subordinating Conjunction of Time',
    explanation: {
      correct:
        '"As soon as" is a subordinating conjunction meaning immediately after. It introduces the clause "you have made the arrangements" before the imperative main clause.',
      chinese:
        '“As soon as”（一……就……）是从属连词，引导时间状语从句。表示“你一旦安排好了，就请立刻致电于女士和鲍先生告知时间和地点”。',
      incorrect: {
        A: {
          en: '"During" is a preposition and must be followed by a noun phrase, not a complete clause with subject and verb.',
          zh: '“During”是介词，后接名词短语，不能引导带有主谓结构的从句。',
        },
        B: {
          en: '"Prior to" is a preposition meaning before, which takes a noun or gerund, not a finite clause; furthermore, the logic requires calling them after booking, not before.',
          zh: '“Prior to”是介词（在……之前），接名词短语且与必须先订好座再通知客户的逻辑相违背。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Meantime" is an adverb or noun, not a conjunction capable of linking clauses.',
          zh: '“Meantime”是副词或名词（在此期间），不能充当从属连词引导从句。',
        },
      },
      learningTip: {
        en: 'Distinguish prepositions from conjunctions: "During", "Prior to", "Despite" take noun phrases; "While", "Before" (as conj.), "As soon as", "Although" take clauses.',
        zh: '牢记介词与连词的区别：During、Prior to后接名词；As soon as、While引导完整从句。',
      },
    },
  },

  {
    id: 146,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_144_146',
    question: "My supervisor would like to see them before next week's board meeting, so I want to hand them ______ before the end of the week.",
    options: {
      A: 'in',
      B: 'on',
      C: 'to',
      D: 'out',
    },
    correctAnswer: 'A',
    grammarFocus: 'Phrasal Verb',
    explanation: {
      correct:
        '"Hand in" is a phrasal verb meaning to submit or turn in a document or assignment to a person in authority (e.g. a supervisor).',
      chinese:
        '“hand in”（提交、呈交）是固定短语。因为主管要在下周董事会前看这份差旅纪要，所以写信人希望在本周结束前提交（hand them in）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Hand on" means to pass something along to a subsequent recipient, not formal submission to a boss.',
          zh: '“hand on”指传递下去，不表示向上级提交报告。',
        },
        C: {
          en: '"Hand to" is incomplete without an object of the preposition (e.g., "hand them to my supervisor").',
          zh: '“hand to”缺少介词宾语（应为hand them to sb），在此结构不完整。',
        },
        D: {
          en: '"Hand out" means to distribute copies to multiple people, whereas here the writer is submitting notes to one supervisor.',
          zh: '“hand out”意为分发，而此处是指将材料向上级呈交。',
        },
      },
    },
  },

  {
    id: 147,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_147_149',
    question: 'Please make sure that the receipt is included and check that the price tags are still attached. Items may ______ for cash or store credit.',
    options: {
      A: 'return',
      B: 'returning',
      C: 'be returned',
      D: 'be returning',
    },
    correctAnswer: 'C',
    grammarFocus: 'Passive Voice (Modal Auxiliary)',
    explanation: {
      correct:
        '"Be returned" is the passive infinitive following modal "may" ("may be + past participle"). The subject "Items" is inanimate and receives the action of being returned.',
      chinese:
        '“be returned”是正确答案。在情态动词“may”之后需要动词原形，而主语“Items”（商品）是动作承受者，必须使用被动语态“may be returned”（商品可以被退换以换取现金或商店积分）。',
      incorrect: {
        A: {
          en: '"Return" is active base form, incorrectly implying that items perform the returning action themselves.',
          zh: '“return”是主动语态原形，商品不能自己执行退货动作。',
        },
        B: {
          en: '"Returning" cannot directly follow modal "may".',
          zh: '“returning”不能直接跟在情态动词may后面。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Be returning" is active continuous, which does not convey the passive transaction.',
          zh: '“be returning”是主动态进行时，语态错误。',
        },
      },
    },
  },

  {
    id: 148,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_147_149',
    question: 'If the customer ______ the receipt but the price tags are still attached and the item is in good condition, you may offer the customer store credit only.',
    options: {
      A: 'had lost',
      B: 'has lost',
      C: 'will lose',
      D: 'is losing',
    },
    correctAnswer: 'B',
    grammarFocus: 'Verb Tense (Present Perfect in Condition)',
    explanation: {
      correct:
        '"Has lost" is the present perfect tense used in a conditional clause to describe a completed past event that has current relevance (the receipt is missing right now when they arrive at the store).',
      chinese:
        '“has lost”是正确答案。在以现在时态（are still attached, is in good condition, may offer）为基准的条件句中，用现在完成时表示顾客已经弄丢了发票并造成当下的影响。',
      incorrect: {
        A: {
          en: '"Had lost" is past perfect, which would imply a past unreal condition or a past time framework, inconsistent with present main clause "you may offer".',
          zh: '“had lost”是过去完成时，与主句一般现在时/情态动词may冲突。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Will lose" cannot be used in a conditional if-clause to describe future events (if-clauses use present tenses).',
          zh: '在条件从句中通常不用将来时will。',
        },
        D: {
          en: '"Is losing" denotes an action in progress right at this second, which does not make sense for a misplaced receipt.',
          zh: '“is losing”是正在进行时，发票丢失是一个已完成的状态而非正在发生的过程。',
        },
      },
    },
  },

  {
    id: 149,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_147_149',
    question: 'If you have any questions ______ this policy or if you need help processing a return, please contact your supervisor.',
    options: {
      A: 'regarding',
      B: 'answering',
      C: 'disagreeing',
      D: 'following',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition / Vocabulary',
    explanation: {
      correct:
        '"Regarding" is a preposition meaning "about" or "concerning". "Questions regarding this policy" is the standard professional phrasing for inquiries about a policy.',
      chinese:
        '“regarding”（关于）是正确答案。它等同于about或concerning，“questions regarding this policy”（关于本项规定的疑问）是商务英语中的标准搭配。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Answering" implies providing answers to the policy, not having questions about it.',
          zh: '“answering”表示回答，无法搭配“questions answering the policy”。',
        },
        C: {
          en: '"Disagreeing" requires preposition "with" (disagreeing with this policy) and does not mean inquiries about policy details.',
          zh: '“disagreeing”通常接with，且与后文“联系主管寻求协助”的语境不符。',
        },
        D: {
          en: '"Following" means after or complying with, which is grammatically awkward following "questions".',
          zh: '“following”意为在……之后或跟随，修饰questions意思不通。',
        },
      },
    },
  },

  {
    id: 150,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_150_152',
    question: 'Dr. I. M. Lee, world-renowned ______ on international economics, will be reading from his newest book...',
    options: {
      A: 'expert',
      B: 'experiment',
      C: 'experience',
      D: 'expeller',
    },
    correctAnswer: 'A',
    grammarFocus: 'Vocabulary (Noun Choice)',
    explanation: {
      correct:
        '"Expert" is a noun referring to a person with comprehensive knowledge or skill in a particular area. An "expert on international economics" perfectly describes Dr. Lee.',
      chinese:
        '“expert”（专家）是正确答案。作为同位语修饰李博士，“expert on international economics”（国际经济学领域的专家）在含义和词性上完全契合。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Experiment" is a scientific trial or test, not a person.',
          zh: '“experiment”是实验，不是指人的名词。',
        },
        C: {
          en: '"Experience" refers to knowledge or practical contact, not an individual author.',
          zh: '“experience”是经验或经历，不能指人。',
        },
        D: {
          en: '"Expeller" is an agent or device that expels or drives out, completely irrelevant here.',
          zh: '“expeller”指驱逐者或压榨机，与经济学家毫不相干。',
        },
      },
    },
  },

  {
    id: 151,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_150_152',
    question: 'Dr. Lee has recently returned from a tour of Asia, ______ he met with leading regional economic experts.',
    options: {
      A: 'who',
      B: 'whom',
      C: 'which',
      D: 'where',
    },
    correctAnswer: 'D',
    grammarFocus: 'Relative Adverb',
    explanation: {
      correct:
        '"Where" is the relative adverb used to refer to a geographical place or tour destination ("Asia") in which events took place ("in which / where he met with leading regional economic experts").',
      chinese:
        '“where”是正确答案。先行词是地点“Asia”，在非限制性定语从句中作地点状语（相当于in Asia），故使用关系副词“where”。',
      incorrect: {
        A: {
          en: '"Who" refers to human beings, not a continent or region like Asia.',
          zh: '“who”指代人，不能指代地点Asia。',
        },
        B: {
          en: '"Whom" is an objective relative pronoun for people.',
          zh: '“whom”是指人的宾格代词。',
        },
        C: {
          en: '"Which" would require a preposition (such as "on which" or "in which") to function as an adverbial in this clause.',
          zh: '“which”在从句中需作主语或宾语，若表地点状语需加介词（如in which），单独使用which语法不完整。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 152,
    part: 6,
    type: 'text_completion',
    passageId: 'part6_150_152',
    question: '______ to this event is free, but early arrival is recommended in order to secure a seat.',
    options: {
      A: 'Admit',
      B: 'Admitted',
      C: 'Admission',
      D: 'Admissible',
    },
    correctAnswer: 'C',
    grammarFocus: 'Part of Speech (Subject Noun)',
    explanation: {
      correct:
        '"Admission" is a noun meaning the fee or permission to enter an event or venue. It serves as the grammatical subject of the sentence with the predicate "is free".',
      chinese:
        '“Admission”（入场许可/入场费）是名词，作整句的主语，谓语是“is free”（本活动免费入场），词性及语法搭配完全正确。',
      incorrect: {
        A: {
          en: '"Admit" is a verb and cannot serve as the subject of the clause.',
          zh: '“Admit”是动词原形，不能作句子主语。',
        },
        B: {
          en: '"Admitted" is a past participle or past tense verb, not a noun subject.',
          zh: '“Admitted”是过去式或分词，不能作名词主语。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Admissible" is an adjective meaning allowable (e.g., admissible evidence in court), not a subject noun.',
          zh: '“Admissible”是形容词（可容许的），不能单独作主语。',
        },
      },
    },
  },
];
