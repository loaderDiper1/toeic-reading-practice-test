import { Question } from '../types/toeic';

export const PART_5_QUESTIONS: Question[] = [
  {
    id: 101,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The price of all cruises ______ airfare and all transfers.',
    options: {
      A: 'have included',
      B: 'includes',
      C: 'are including',
      D: 'include',
    },
    correctAnswer: 'B',
    grammarFocus: 'Subject-Verb Agreement',
    explanation: {
      correct:
        '"Includes" is correct because the grammatical subject of the sentence is the singular noun phrase "The price" (not the plural modifier "of all cruises"). In the simple present tense, a singular third-person subject requires the singular verb form ending in -s ("includes").',
      chinese:
        '“includes”是正确答案。句子的真正主语是单数名词短语“The price”（而非介词短语“of all cruises”中的名词）。在一般现在时中，第三人称单数主语要求谓语动词使用加-s的单数形式“includes”。',
      incorrect: {
        A: {
          en: '"Have included" uses the plural auxiliary "have", which incorrectly agrees with "cruises" instead of the singular subject "The price".',
          zh: '“have included”使用了复数助动词“have”，误将修饰成分“cruises”当作主语，与单数主语“The price”不一致。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Are including" uses the plural auxiliary "are", failing subject-verb agreement with singular "The price".',
          zh: '“are including”使用了复数be动词“are”，与单数主语“The price”主谓不一致。',
        },
        D: {
          en: '"Include" is the base or plural verb form, which cannot agree with a singular third-person subject.',
          zh: '“include”是动词原形/复数形式，不能与第三人称单数主语搭配。',
        },
      },
      learningTip: {
        en: 'In TOEIC Part 5, always identify the true subject of the sentence before choosing a verb. Prepositional phrases between the subject and verb (like "of all cruises") never change the number of the subject.',
        zh: '在TOEIC第5部分中，选择动词前务必先找准句子的核心主语。主语和动词之间的介词短语（如“of all cruises”）不会改变主语的单复数。',
      },
    },
  },

  {
    id: 102,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Mr. Brett missed the plane ______ he was working late.',
    options: {
      A: 'before',
      B: 'until',
      C: 'because',
      D: 'so',
    },
    correctAnswer: 'C',
    grammarFocus: 'Conjunction',
    explanation: {
      correct:
        '"Because" is the subordinating conjunction used to introduce an adverbial clause of cause or reason. Working late explains the reason why Mr. Brett missed his plane.',
      chinese:
        '“because”是正确答案。它是表示原因的从属连词，用来引导原因状语从句。工作到很晚正是布雷特先生错过飞机的具体原因。',
      incorrect: {
        A: {
          en: '"Before" indicates time sequence and would create an illogical statement that he missed the plane prior to working late.',
          zh: '“before”表示时间“在……之前”，在逻辑上会导致“他在加班之前就错过了飞机”的矛盾。',
        },
        B: {
          en: '"Until" expresses duration up to a point in time, which makes no sense logically in this context.',
          zh: '“until”表示“直到……”，在此语境中逻辑不通。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"So" introduces a result or consequence, not the underlying cause ("he missed the plane" was the result, while working late was the cause).',
          zh: '“so”引导的是结果从句，而“he was working late”是原因而非结果。',
        },
      },
    },
  },

  {
    id: 103,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Many customers have requested that we ______ them advance notice of our sales by e-mail.',
    options: {
      A: 'send',
      B: 'sends',
      C: 'sent',
      D: 'sending',
    },
    correctAnswer: 'A',
    grammarFocus: 'Subjunctive Mood',
    explanation: {
      correct:
        '"Send" is correct because the verb "request" expresses a demand, request, or proposal, which requires the subjunctive mood in the following "that"-clause: (that) + subject + [should] + base verb form ("send").',
      chinese:
        '“send”是正确答案。动词“request”表示请求或要求，其后的that从句中需要使用虚拟语气结构，即“that + 主语 + (should) + 动词原形”。这里省略了should，直接使用动词原形“send”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Sends" is the third-person singular present form, which cannot be used in a subjunctive that-clause after "request".',
          zh: '“sends”为第三人称单数形式，在request引导的虚拟语气从句中不能使用第三人称单数。',
        },
        C: {
          en: '"Sent" is the past tense form, which does not match the subjunctive base-verb requirement.',
          zh: '“sent”是过去式，不符合虚拟语气要求动词原形的规则。',
        },
        D: {
          en: '"Sending" is a participle/gerund form, which cannot serve as the finite verb of the clause.',
          zh: '“sending”是现在分词/动名词形式，不能作从句的谓语动词。',
        },
      },
      learningTip: {
        en: 'Verbs of recommendation, request, demand, or urgency (request, recommend, suggest, demand, insist) take a subjunctive clause: that + subject + [bare infinitive].',
        zh: '表示建议、请求、命令、要求的动词（如request、recommend、suggest、demand）后接that从句时，谓语动词用“(should) + 动词原形”。',
      },
    },
  },

  {
    id: 104,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The workers were loading the truck when the boxes ______.',
    options: {
      A: 'have fallen',
      B: 'fall',
      C: 'fell',
      D: 'are falling',
    },
    correctAnswer: 'C',
    grammarFocus: 'Verb Tense',
    explanation: {
      correct:
        '"Fell" is correct because it provides the past simple tense to describe an interruption or point-in-time event while an ongoing action was already taking place in the past ("were loading").',
      chinese:
        '“fell”是正确答案。主句使用了过去进行时“were loading”表示过去正在进行的动作，when引导的从句用一般过去时“fell”表示在这个进行过程中突然发生的动作。',
      incorrect: {
        A: {
          en: '"Have fallen" is present perfect, which cannot be used for an event taking place alongside past continuous "were loading".',
          zh: '“have fallen”是现在完成时，不能与表示过去进行时的“were loading”时态并存。',
        },
        B: {
          en: '"Fall" is simple present, violating the past time context established by "were loading".',
          zh: '“fall”是一般现在时，与全句过去时态背景不符。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Are falling" is present continuous, which contradicts the past tense established in the main clause.',
          zh: '“are falling”是现在进行时，与主句过去进行时矛盾。',
        },
      },
    },
  },

  {
    id: 105,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The new manager, ______ was just hired, will start tomorrow.',
    options: {
      A: 'she',
      B: 'he',
      C: 'which',
      D: 'who',
    },
    correctAnswer: 'D',
    grammarFocus: 'Relative Pronoun',
    explanation: {
      correct:
        '"Who" is correct because it serves as the subjective relative pronoun referring to a person ("The new manager") in a non-defining relative clause set off by commas.',
      chinese:
        '“who”是正确答案。先行词是指人的名词“The new manager”，在逗号隔开的非限制性定语从句中担当从句主语，必须使用关系代词“who”。',
      incorrect: {
        A: {
          en: '"She" is a personal pronoun, which cannot introduce a relative clause without creating a run-on sentence.',
          zh: '“she”是人称代词，不能作为关系代词引导定语从句，否则会造成句子结构错误。',
        },
        B: {
          en: '"He" is also a personal pronoun, not a relative pronoun.',
          zh: '“he”是人称代词，无法引导定语从句。',
        },
        C: {
          en: '"Which" refers to inanimate objects or animals, not human beings.',
          zh: '“which”指代物或动物，不能指代指人的先行词“The new manager”。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 106,
    part: 5,
    type: 'incomplete_sentence',
    question: "We ______ our business if we hadn't been able to get that loan from the bank.",
    options: {
      A: 'have been losing',
      B: 'would have lost',
      C: 'will be losing',
      D: 'have lost',
    },
    correctAnswer: 'B',
    grammarFocus: 'Conditional',
    explanation: {
      correct:
        '"Would have lost" is correct because this is a third conditional sentence expressing an unreal past situation. The if-clause uses the past perfect ("if we hadn\'t been able..."), so the main clause requires "would + have + past participle" ("would have lost").',
      chinese:
        '“would have lost”是正确答案。本句为第三类条件句（与过去事实相反的虚拟语气）。if从句使用过去完成时（hadn\'t been able），主句应使用“would have + 过去分词”（would have lost）。',
      incorrect: {
        A: {
          en: '"Have been losing" is present perfect continuous, which cannot serve as the main predicate of a third conditional.',
          zh: '“have been losing”为现在完成进行时，不能用于与过去事实相反的虚拟条件句主句。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Will be losing" is future continuous, which does not match a past unreal condition.',
          zh: '“will be losing”为将来进行时，时态完全不匹配。',
        },
        D: {
          en: '"Have lost" is present perfect indicative, not a modal conditional form.',
          zh: '“have lost”是现在完成时陈述语气，不符合虚拟语气结构要求。',
        },
      },
    },
  },

  {
    id: 107,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Our ______ are trying to hire our best employees.',
    options: {
      A: 'competition',
      B: 'competitive',
      C: 'competitors',
      D: 'competitively',
    },
    correctAnswer: 'C',
    grammarFocus: 'Part of Speech / Subject-Verb Agreement',
    explanation: {
      correct:
        '"Competitors" is a countable plural noun meaning business rivals. It correctly matches the plural verb "are trying" and logically describes people/organizations attempting to hire employees.',
      chinese:
        '“competitors”（竞争对手，复数名词）是正确答案。句中谓语动词是复数“are trying”，因此需要可数的复数名词作主语，同时符合“竞争对手试图挖走员工”的句意。',
      incorrect: {
        A: {
          en: '"Competition" as an abstract mass noun is singular and would require the singular verb "is trying".',
          zh: '“competition”通常作为不可数或集合名词，作主语时谓语动词通常用单数“is”，与“are”不符。',
        },
        B: {
          en: '"Competitive" is an adjective, but the sentence requires a noun to serve as the subject.',
          zh: '“competitive”是形容词，不能单独充当句子的主语。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Competitively" is an adverb, which cannot function as a subject noun.',
          zh: '“competitively”是副词，不能作主语。',
        },
      },
    },
  },

  {
    id: 108,
    part: 5,
    type: 'incomplete_sentence',
    question: 'We expect this workshop to be well attended, so we should hold it in the ______ room available.',
    options: {
      A: 'more bigger',
      B: 'big',
      C: 'bigger',
      D: 'biggest',
    },
    correctAnswer: 'D',
    grammarFocus: 'Comparison',
    explanation: {
      correct:
        '"Biggest" is correct because the definite article "the" precedes the blank and refers to the single room of highest capacity among all available rooms (superlative degree).',
      chinese:
        '“biggest”（最大的）是正确答案。空格前有定冠词“the”，且修饰在所有可用房间（available）中挑选容量最大的一间，应使用形容词最高级“biggest”。',
      incorrect: {
        A: {
          en: '"More bigger" contains a double comparative, which is grammatically incorrect in standard English.',
          zh: '“more bigger”属于双重比较级，语法错误。',
        },
        B: {
          en: '"Big" is the base form and does not fit the superlative context preceded by "the" with "available".',
          zh: '“big”是原级，在“the ... room available”语境中无法表达“最大的一间”的最高级含义。',
        },
        C: {
          en: '"Bigger" is comparative, typically used when comparing two items (e.g. "bigger than..."), not for selecting from all available rooms.',
          zh: '“bigger”是比较级，通常用于两者之间的比较，不能与表示在所有中选其最的“the ... available”搭配。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 109,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The purser got his assistant ______ the passenger orientation.',
    options: {
      A: 'conducting',
      B: 'to conduct',
      C: 'conducted',
      D: 'conducts',
    },
    correctAnswer: 'B',
    grammarFocus: 'Causative Verb / Infinitive',
    explanation: {
      correct:
        '"To conduct" is correct because the causative verb "get" followed by an active human agent ("his assistant") takes a full infinitive: "get someone to do something".',
      chinese:
        '“to conduct”是正确答案。使役动词“get”表示“使/让某人做某事”时，后接有生命的主体并表主动时，固定句型为“get someone to do something”（接带to的不定式）。',
      incorrect: {
        A: {
          en: '"Conducting" is a present participle, which is not the standard complement structure following causative "get someone".',
          zh: '“conducting”是现在分词，不是使役动词get表达主动委托的标准补足语。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Conducted" is a past participle, used when the object receives passive action (e.g., "got the report conducted"), whereas the assistant is performing the action.',
          zh: '“conducted”是过去分词，用于宾语被动接受动作的情况，而这里assistant是主动执行者。',
        },
        D: {
          en: '"Conducts" is a finite verb form and cannot follow the object "his assistant" in this clause structure.',
          zh: '“conducts”是谓语动词形式，不能作非谓语动词宾语补足语。',
        },
      },
      learningTip: {
        en: 'Contrast causative structures: "make/have someone DO something" (bare infinitive) vs. "get someone TO DO something" (with to).',
        zh: '注意辨析使役动词搭配：make/have sb. DO sth.（不带to）；而get sb. TO DO sth.（必须带to）。',
      },
    },
  },

  {
    id: 110,
    part: 5,
    type: 'incomplete_sentence',
    question: 'All travel arrangements must be completed ______ December 5.',
    options: {
      A: 'with',
      B: 'in',
      C: 'for',
      D: 'by',
    },
    correctAnswer: 'D',
    grammarFocus: 'Preposition',
    explanation: {
      correct:
        '"By" is correct because it denotes a deadline—meaning no later than a specific date ("by December 5").',
      chinese:
        '“by”是正确答案。介词“by”后接具体日期表示“截止到某时”或“不迟于某时”，非常适合表示安排必须在12月5日前完成的最后期限。',
      incorrect: {
        A: {
          en: '"With" signifies accompaniment or instrument, not a temporal deadline.',
          zh: '“with”表示伴随或工具，不能用于表示时间截止期限。',
        },
        B: {
          en: '"In" is used with months, years, or durations (e.g., "in December"), but not with a specific date.',
          zh: '“in”接月份或年份（如in December），但不用于具体某一天。',
        },
        C: {
          en: '"For" expresses intended duration or purpose, not a completion cutoff date.',
          zh: '“for”表示持续时间或目的，不表示完成动作的截止点。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 111,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The bookcase is ______ the door.',
    options: {
      A: 'beside',
      B: 'among',
      C: 'between',
      D: 'across',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition of Place',
    explanation: {
      correct:
        '"Beside" is a preposition meaning "next to" or "at the side of", perfectly describing the spatial location of the bookcase relative to the singular reference object ("the door").',
      chinese:
        '“beside”是正确答案。介词“beside”意思是“在……旁边/紧挨着”，准确描述了书架相对于单数参考物“the door”的空间位置。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Among" is used with three or more entities (e.g., "among the trees"), not a single door.',
          zh: '“among”用于三者或三者以上之间，不能接单数名词“the door”。',
        },
        C: {
          en: '"Between" requires two distinct items or points (e.g., "between the door and the window").',
          zh: '“between”通常指在两者之间，需要两个参照对象（如between A and B）。',
        },
        D: {
          en: '"Across" usually requires "from" when indicating position opposite an object ("across from the door") or a surface to traverse ("across the room").',
          zh: '“across”表示在对面时通常需要加from（across from the door），或者指穿过表面，单独放在此处不完整。',
        },
      },
    },
  },

  {
    id: 112,
    part: 5,
    type: 'incomplete_sentence',
    question: '______ his enthusiasm, Mr. Mosley is having a hard time keeping up with the rest of the team.',
    options: {
      A: 'Because of',
      B: 'Although',
      C: 'Due to',
      D: 'Despite',
    },
    correctAnswer: 'D',
    grammarFocus: 'Preposition of Concession',
    explanation: {
      correct:
        '"Despite" is a preposition meaning "in spite of", followed by a noun phrase ("his enthusiasm") to introduce a contrast or concession between his high energy and his difficulty keeping up.',
      chinese:
        '“Despite”是正确答案。它是表示让步的介词，后接名词短语“his enthusiasm”，意思是“尽管他充满热情”，与后半句“很难跟上团队步伐”构成转折/让步关系。',
      incorrect: {
        A: {
          en: '"Because of" expresses cause and effect; high enthusiasm would not be the cause of failing to keep up.',
          zh: '“Because of”表示因果关系，“热情高涨”显然不会导致“跟不上团队”，逻辑相反。',
        },
        B: {
          en: '"Although" is a subordinating conjunction and must be followed by a full subject-verb clause, not a noun phrase.',
          zh: '“Although”是从属连词，后面必须接完整的句子（从句），不能直接接名词短语“his enthusiasm”。',
        },
        C: {
          en: '"Due to" means "caused by", which contradicts the logical contrast of the sentence.',
          zh: '“Due to”表示原因，在此句中因果逻辑颠倒。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
      learningTip: {
        en: 'Remember the contrast: "Although / Even though" + [clause (S + V)], whereas "Despite / In spite of" + [noun phrase / gerund].',
        zh: '重要考点对比：Although/Even though + 完整从句；Despite/In spite of + 名词/代词/动名词。',
      },
    },
  },

  {
    id: 113,
    part: 5,
    type: 'incomplete_sentence',
    question: 'We may have to consider ______ some of our stores unless sales improve very soon.',
    options: {
      A: 'close',
      B: 'to close',
      C: 'will close',
      D: 'closing',
    },
    correctAnswer: 'D',
    grammarFocus: 'Gerund',
    explanation: {
      correct:
        '"Closing" is correct because the verb "consider" idiomatically requires a gerund (-ing form) when followed by another verb as its direct object ("consider doing something").',
      chinese:
        '“closing”是正确答案。动词“consider”（考虑）后面接非谓语动词作宾语时，必须接动名词形式，即“consider doing sth.”。',
      incorrect: {
        A: {
          en: '"Close" is a base verb form and cannot serve as the direct object of "consider".',
          zh: '“close”是动词原形，不能直接作“consider”的宾语。',
        },
        B: {
          en: '"To close" is an infinitive, which is ungrammatical after "consider".',
          zh: '“to close”是不定式，“consider”后面不能接不定式作宾语。',
        },
        C: {
          en: '"Will close" is a finite future verb and cannot act as a direct object.',
          zh: '“will close”是谓语形式，不能充当宾语成分。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 114,
    part: 5,
    type: 'incomplete_sentence',
    question: 'I suggest leaving earlier in the afternoon because ______ 5:00, the subways and buses become very crowded.',
    options: {
      A: 'until',
      B: 'after',
      C: 'while',
      D: 'when',
    },
    correctAnswer: 'B',
    grammarFocus: 'Preposition of Time',
    explanation: {
      correct:
        '"After" functions as a preposition of time preceding the point in time "5:00", meaning subsequent to five o\'clock during evening rush hour.',
      chinese:
        '“after”是正确答案。在此作为时间介词，后接具体钟点“5:00”，表示“在5点之后”。因为五点之后正是下班高峰期，地铁和公交变得非常拥挤。',
      incorrect: {
        A: {
          en: '"Until" means continuing up to a time, which would illogically mean transit becomes crowded before 5:00 and stops being crowded at 5:00.',
          zh: '“until”表示“直到……为止”，会导致“5点前很拥挤、5点后就不挤了”的不合理逻辑。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"While" is a conjunction followed by a continuous time period or clause, not a preposition preceding a point in time like "5:00".',
          zh: '“while”是连词，后接句子或延续性时间段，不能作为介词直接接时间点“5:00”。',
        },
        D: {
          en: '"When" is a conjunction that introduces a clause with a subject and verb, not a preposition directly governing a clock time.',
          zh: '“when”是连词，后面需要接句子，不能作介词直接接“5:00”。',
        },
      },
    },
  },

  {
    id: 115,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The airport was ______ Mr. Debionne had expected.',
    options: {
      A: 'the busiest',
      B: 'busier than',
      C: 'busy as',
      D: 'as busy',
    },
    correctAnswer: 'B',
    grammarFocus: 'Comparison',
    explanation: {
      correct:
        '"Busier than" is correct because the sentence makes an unequal comparison between the actual state of the airport and what Mr. Debionne had previously expected, requiring the comparative form "busier" followed by "than".',
      chinese:
        '“busier than”是正确答案。句中将机场的实际繁忙程度与德比昂先生预期的程度进行比较，属于不等比较，需要使用比较级“busier”加上连词“than”。',
      incorrect: {
        A: {
          en: '"The busiest" is superlative and lacks a comparison clause introduced by "than".',
          zh: '“the busiest”是最高级，与从句预期对比的语境不匹配。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Busy as" is incomplete; an equal comparison requires the correlative pair "as busy as".',
          zh: '“busy as”结构残缺，同级比较必须是“as busy as”。',
        },
        D: {
          en: '"As busy" is missing the second "as" to link with the clause "Mr. Debionne had expected".',
          zh: '“as busy”缺少了第二个“as”来连接从句。',
        },
      },
    },
  },

  {
    id: 116,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The best chefs ______ recipes to suit their own cooking styles as well as the tastes of their customers.',
    options: {
      A: 'adapt',
      B: 'adoption',
      C: 'adept',
      D: 'adjourn',
    },
    correctAnswer: 'A',
    grammarFocus: 'Vocabulary / Part of Speech',
    explanation: {
      correct:
        '"Adapt" is a transitive verb meaning to modify or adjust something to suit a new purpose or situation, perfectly fitting the plural subject "The best chefs" and the object "recipes".',
      chinese:
        '“adapt”（调整、改编）是正确答案。它是及物动词，与复数主语“The best chefs”及宾语“recipes”完美搭配，表示“顶级大厨调整菜谱以适应他们自己的烹饪风格和客人的口味”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Adoption" is a noun meaning the act of adopting, which cannot serve as the finite predicate verb.',
          zh: '“adoption”是名词，不能作句子的谓语动词。',
        },
        C: {
          en: '"Adept" is an adjective meaning highly skilled or proficient, not a transitive verb.',
          zh: '“adept”是形容词（熟练的），不是及物动词。',
        },
        D: {
          en: '"Adjourn" is a verb meaning to postpone or suspend a formal meeting or trial, which makes no sense with "recipes".',
          zh: '“adjourn”意思是“休会、延期”，与菜谱完全不搭配。',
        },
      },
    },
  },

  {
    id: 117,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The personnel director screened the job applicants ______ arranging interviews.',
    options: {
      A: 'because',
      B: 'until',
      C: 'since',
      D: 'before',
    },
    correctAnswer: 'D',
    grammarFocus: 'Preposition / Conjunction with Gerund',
    explanation: {
      correct:
        '"Before" functions as a preposition followed by the gerund "arranging interviews", logically indicating that screening applicants occurs prior to scheduling their interviews.',
      chinese:
        '“before”是正确答案。在此作为介词接动名词“arranging interviews”，表示时间顺序“在安排面试之前”，人事主管先对求职者进行初步筛选。',
      incorrect: {
        A: {
          en: '"Because" is a conjunction that requires a full clause with subject and finite verb, not a preposition governing a gerund.',
          zh: '“because”是连词，后面要接完整从句，不能直接接动名词短语，且因果关系不通。',
        },
        B: {
          en: '"Until" expresses duration up to an endpoint, which is illogical for the normal sequence of hiring procedures.',
          zh: '“until”表示“直到……”，在人事招聘流程逻辑上不合理。',
        },
        C: {
          en: '"Since" indicates a starting point in past time or causality ("because"), which does not fit the forward-looking recruitment steps.',
          zh: '“since”表示“自……以来”或“既然”，不符合先后发生的时间逻辑。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 118,
    part: 5,
    type: 'incomplete_sentence',
    question: 'My boss asked me to write a ______ report of our trip without omitting any details.',
    options: {
      A: 'tough',
      B: 'though',
      C: 'thorough',
      D: 'through',
    },
    correctAnswer: 'C',
    grammarFocus: 'Vocabulary (Confusing Words)',
    explanation: {
      correct:
        '"Thorough" is an adjective meaning comprehensive, painstaking, and complete in all respects, perfectly reinforced by the subsequent phrase "without omitting any details".',
      chinese:
        '“thorough”（详尽的、彻底的）是正确答案。它是形容词，修饰“report”，与后半句“without omitting any details”（不遗漏任何细节）意思完全吻合。',
      incorrect: {
        A: {
          en: '"Tough" is an adjective meaning difficult, rough, or resilient, which does not mean complete.',
          zh: '“tough”意思是“艰难的、严厉的、坚韧的”，不表示“详尽”。',
        },
        B: {
          en: '"Though" is an adverb or conjunction meaning "although/however", not an adjective modifying a noun.',
          zh: '“though”是连词或副词（虽然、尽管），不能作形容词修饰名词。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Through" is a preposition or adverb indicating movement from one side to the other.',
          zh: '“through”是介词或副词（穿过、通过），不能修饰report。',
        },
      },
      learningTip: {
        en: 'Be vigilant with spellings of confusing "-ough" words: thorough (detailed), through (across/by means of), though (although), tough (hard), thought (past of think).',
        zh: '注意形近词拼写辨析：thorough（详尽的）、through（穿过）、though（尽管）、tough（困难的/坚韧的）、thought（想法/思考）。',
      },
    },
  },

  {
    id: 119,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Ms. Nyen was very embarrassed because the microphone ______ while she was giving her speech.',
    options: {
      A: 'is failing',
      B: 'fails',
      C: 'had failed',
      D: 'failed',
    },
    correctAnswer: 'D',
    grammarFocus: 'Verb Tense',
    explanation: {
      correct:
        '"Failed" is the simple past tense, accurately depicting a specific event that took place during the ongoing past background action ("while she was giving her speech") and caused past embarrassment ("was very embarrassed").',
      chinese:
        '“failed”是正确答案。全句叙述过去发生的事（was very embarrassed），“failed”用一般过去时表示在发言过程中（while she was giving her speech）麦克风出了故障这一突然发生的动作。',
      incorrect: {
        A: {
          en: '"Is failing" is present continuous, which clashes with past tense "was very embarrassed".',
          zh: '“is failing”是现在进行时，与主句过去时态冲突。',
        },
        B: {
          en: '"Fails" is simple present, which cannot describe a past event.',
          zh: '“fails”是一般现在时，时态不合。',
        },
        C: {
          en: '"Had failed" implies the failure happened before she gave the speech, which contradicts "while she was giving her speech".',
          zh: '“had failed”是过去完成时，表示在演讲之前就已经故障，与“while she was giving her speech”（演讲过程中）冲突。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 120,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The clerk ______ the manual from the secretary to see if she could figure out how to fix the problem herself.',
    options: {
      A: 'lent',
      B: 'loaned',
      C: 'offered',
      D: 'borrowed',
    },
    correctAnswer: 'D',
    grammarFocus: 'Vocabulary / Collocation',
    explanation: {
      correct:
        '"Borrowed" is correct because the direction of the action is taking something from someone else: "borrow something FROM someone".',
      chinese:
        '“borrowed”（借入）是正确答案。与介词“from”搭配的固定短语是“borrow something from someone”（向某人借某物）。职员向秘书借了操作手册。',
      incorrect: {
        A: {
          en: '"Lent" means gave temporarily to someone else ("lend something TO someone"), which is the reverse direction.',
          zh: '“lent”（借出）的搭配是“lend something to someone”，方向与句意相反。',
        },
        B: {
          en: '"Loaned" also means granted a loan or lent to someone ("loaned something to someone").',
          zh: '“loaned”同样表示借出，介词搭配通常是to而非from。',
        },
        C: {
          en: '"Offered" means made available or presented ("offered something to someone"), which does not collocate with "from".',
          zh: '“offered”（主动提供）的搭配是“offer sth to sb”，与句中的from不搭。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 121,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The status report ______ the financial projections were both late.',
    options: {
      A: 'or',
      B: 'and',
      C: 'but',
      D: 'nor',
    },
    correctAnswer: 'B',
    grammarFocus: 'Coordinating Conjunction',
    explanation: {
      correct:
        '"And" is the coordinating conjunction used to join two subjects together into a compound plural subject, which directly corresponds with "were both late".',
      chinese:
        '“and”是正确答案。它作为并列连词连接两个主语“The status report”和“the financial projections”，构成复数主语，与句末的“were both late”完美对应。',
      incorrect: {
        A: {
          en: '"Or" indicates alternatives; if "or" were used, the verb would agree with the second element and cannot be described as "both".',
          zh: '“or”表示选择或两者择一，不能与后面的“both”（两者都）连用。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"But" expresses contrast between two contrasting ideas, which does not link two equal entities acting together.',
          zh: '“but”表示转折，不能在此处连接两个并列主语并用“both”修饰。',
        },
        D: {
          en: '"Nor" requires a negative antecedent (e.g., "neither... nor"), which is absent here.',
          zh: '“nor”通常与neither等否定词连用，不能在此处单独连接肯定并列主语。',
        },
      },
    },
  },

  {
    id: 122,
    part: 5,
    type: 'incomplete_sentence',
    question: 'No matter how good its business plan, a firm will not ______ if its employees are unhappy.',
    options: {
      A: 'prosper',
      B: 'prosperous',
      C: 'prosperity',
      D: 'prospering',
    },
    correctAnswer: 'A',
    grammarFocus: 'Verb Form (Modal Auxiliary)',
    explanation: {
      correct:
        '"Prosper" is the base verb form required immediately following the modal auxiliary "will not" ("modal + base verb").',
      chinese:
        '“prosper”（繁荣、成功）是动词原形。在情态助动词“will not”之后，必须使用动词原形构成复合谓语。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Prosperous" is an adjective; following "will not", a predicate verb is required (e.g., "will not be prosperous").',
          zh: '“prosperous”是形容词，缺少be动词无法跟在will not之后。',
        },
        C: {
          en: '"Prosperity" is a noun and cannot serve as the main predicate verb.',
          zh: '“prosperity”是名词，不能作情态动词后的谓语。',
        },
        D: {
          en: '"Prospering" is a present participle, requiring an auxiliary form of "be" to make a continuous tense.',
          zh: '“prospering”是现在分词，不能直接跟在情态动词will not后面。',
        },
      },
    },
  },

  {
    id: 123,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The director wanted me to let her know how many people showed ______ for the workshop.',
    options: {
      A: 'in',
      B: 'up',
      C: 'to',
      D: 'off',
    },
    correctAnswer: 'B',
    grammarFocus: 'Phrasal Verb',
    explanation: {
      correct:
        '"Up" forms the common phrasal verb "show up", meaning to arrive or appear at an event or meeting.',
      chinese:
        '“up”是正确答案。与动词show构成固定短语“show up”，意思是“出席、到场”，即主管想知道有多少人出席了讲习班。',
      incorrect: {
        A: {
          en: '"Show in" means to escort someone inside (e.g., "show him in"), which does not fit attendance at a workshop.',
          zh: '“show in”意思是引某人进屋，不表示到场出席。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Show to" is not a standard phrasal verb meaning to attend.',
          zh: '“show to”不是表示出席的固定短语。',
        },
        D: {
          en: '"Show off" means to boast or display something proudly, which does not fit the context.',
          zh: '“show off”意思是炫耀、卖弄，与文意不符。',
        },
      },
    },
  },

  {
    id: 124,
    part: 5,
    type: 'incomplete_sentence',
    question: 'If there ______ some restaurants near the hotel, we would not have to spend time and money on taxis.',
    options: {
      A: 'were',
      B: 'was',
      C: 'are',
      D: 'would be',
    },
    correctAnswer: 'A',
    grammarFocus: 'Conditional (Second Conditional)',
    explanation: {
      correct:
        '"Were" is correct because this is a second conditional sentence describing a hypothetical, unreal present situation. The main clause contains "would not have to", so the if-clause takes the subjunctive/past tense form "were" (applicable for plural "some restaurants" and standard in formal conditionals).',
      chinese:
        '“were”是正确答案。本句是第二类条件句（与现在事实相反的虚拟语气）。主句谓语为“would not have to”，条件从句需使用一般过去时/虚拟形式，且主语为复数名词“some restaurants”，故用“were”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Was" is singular and cannot agree with plural "some restaurants", nor is it formal in subjunctive conditionals.',
          zh: '“was”是单数，不能与复数主语“some restaurants”搭配，在正式虚拟语气中也应优先用were。',
        },
        C: {
          en: '"Are" is simple present indicative, which does not match the hypothetical modal "would" in the main clause.',
          zh: '“are”是现在时陈述语气，不能与主句中的“would not have to”搭配。',
        },
        D: {
          en: '"Would be" incorrectly places the modal "would" inside the if-clause.',
          zh: '“would be”把情态动词would放在了if从句中，违反条件句语法规则。',
        },
      },
    },
  },

  {
    id: 125,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The Mid America Airlines flight ______ Phoenix will be arriving at Gate 9 in five minutes.',
    options: {
      A: 'from',
      B: 'in',
      C: 'by',
      D: 'on',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition of Origin',
    explanation: {
      correct:
        '"From" is the preposition of origin denoting the departure point ("flight from Phoenix") arriving at the destination airport.',
      chinese:
        '“from”是正确答案。介词“from”表示出发地或来源地，“flight from Phoenix”表示“来自菲尼克斯的航班”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"In" denotes location within, not the point of departure for an arriving flight.',
          zh: '“in”表示在某地内部，不能修饰即将抵达的航班起飞地。',
        },
        C: {
          en: '"By" indicates agency, method, or proximity, which does not define origin.',
          zh: '“by”表示通过或在……旁边，不能表示航班来源地。',
        },
        D: {
          en: '"On" denotes surface contact or schedule, which is incorrect here.',
          zh: '“on”表示在……上面，在此搭配不当。',
        },
      },
    },
  },

  {
    id: 126,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Every morning, a member of the kitchen staff turns on the ovens and ______ the coffee.',
    options: {
      A: 'brewing',
      B: 'has brewed',
      C: 'brews',
      D: 'brewed',
    },
    correctAnswer: 'C',
    grammarFocus: 'Parallel Structure / Verb Tense',
    explanation: {
      correct:
        '"Brews" is correct because the coordinating conjunction "and" connects parallel predicates governed by singular subject "a member". The first verb is simple present third-person singular "turns on", so the second verb must also be "brews".',
      chinese:
        '“brews”（煮咖啡）是正确答案。连词“and”连接并列谓语，主语是单数“a member”，第一个动词用了一般现在时第三人称单数“turns on”，因此第二个动词也必须平行使用单数形式“brews”。',
      incorrect: {
        A: {
          en: '"Brewing" is a participle and cannot serve as a parallel finite verb alongside "turns on".',
          zh: '“brewing”是现在分词，不能与谓语动词“turns on”构成平行谓语。',
        },
        B: {
          en: '"Has brewed" is present perfect, breaking the parallel simple present habit indicated by "Every morning".',
          zh: '“has brewed”是现在完成时，破坏了与“Every morning”所表示日常习惯的一般现在时平行结构。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Brewed" is simple past, which contradicts the present tense "turns on" and routine frequency "Every morning".',
          zh: '“brewed”是过去式，与前项一般现在时“turns on”时态不一致。',
        },
      },
    },
  },

  {
    id: 127,
    part: 5,
    type: 'incomplete_sentence',
    question: 'People in the audience began to fidget around and feel restless because the speech was so ______.',
    options: {
      A: 'boring',
      B: 'bored',
      C: 'bores',
      D: 'bore',
    },
    correctAnswer: 'A',
    grammarFocus: 'Participle Adjective',
    explanation: {
      correct:
        '"Boring" is the present participle functioning as an adjective to describe the characteristic of the speech (the thing causing boredom).',
      chinese:
        '“boring”（令人无聊的）是正确答案。现在分词作形容词，用来描述事物本身的特征（演讲本身令人感到乏味），故用“boring”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Bored" is the past participle used to describe how a person feels (e.g., "the audience was bored"), not the quality of an inanimate speech.',
          zh: '“bored”是过去分词，通常用于形容人感受到的心理状态（如“听众感到无聊”），不能用于形容演讲本身。',
        },
        C: {
          en: '"Bores" is a verb form (third-person singular), not an adjective following the intensifier "so".',
          zh: '“bores”是动词第三人称单数形式，不能跟在副词“so”后面作表语。',
        },
        D: {
          en: '"Bore" is a base verb or noun, not a predicative adjective.',
          zh: '“bore”是动词原形或名词，不能直接作was so后的形容词。',
        },
      },
      learningTip: {
        en: 'Participial adjectives: -ing adjectives describe the characteristic of a thing/person causing the emotion (boring, interesting, exciting), while -ed adjectives describe how someone feels (bored, interested, excited).',
        zh: '分词形容词辨析：-ing结尾通常修饰物，表示“令人……的”（如boring）；-ed结尾通常修饰人，表示“感到……的”（如bored）。',
      },
    },
  },

  {
    id: 128,
    part: 5,
    type: 'incomplete_sentence',
    question: "The committee members agreed that the next year's convention should take place ______ a larger city, such as Toronto.",
    options: {
      A: 'on',
      B: 'for',
      C: 'by',
      D: 'in',
    },
    correctAnswer: 'D',
    grammarFocus: 'Preposition of Place',
    explanation: {
      correct:
        '"In" is the standard preposition used with cities, countries, and large geographical areas ("in a larger city", "in Toronto").',
      chinese:
        '“in”是正确答案。介词“in”用于表示在城市、国家等大范围地理区域内（如“in a larger city”、“in Toronto”）。',
      incorrect: {
        A: {
          en: '"On" is used for streets, islands, or surfaces, not cities.',
          zh: '“on”用于街道、岛屿或物体表面，不能用于城市。',
        },
        B: {
          en: '"For" expresses purpose or destination duration, not location of an event.',
          zh: '“for”表示目的或持续时间，不能表示事件发生的地点。',
        },
        C: {
          en: '"By" indicates proximity ("near"), but conventions take place inside a city, not alongside it.',
          zh: '“by”表示在旁边，而会议是在城市内举行，故不合适。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 129,
    part: 5,
    type: 'incomplete_sentence',
    question: '______ we were late, we could not enter the conference hall.',
    options: {
      A: 'Although',
      B: 'Because',
      C: 'Therefore',
      D: 'However',
    },
    correctAnswer: 'B',
    grammarFocus: 'Subordinating Conjunction',
    explanation: {
      correct:
        '"Because" is the subordinating conjunction indicating reason or cause. Being late was the reason why they were barred from entering.',
      chinese:
        '“Because”是正确答案。引导原因状语从句，说明迟到是无法进入会议厅的直接原因。',
      incorrect: {
        A: {
          en: '"Although" expresses concession/contrast, which would illogically imply that despite being late, one would ordinarily expect to enter.',
          zh: '“Although”表示让步（尽管），会造成逻辑不通顺。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Therefore" is a conjunctive adverb that connects two independent clauses and cannot introduce a subordinate adverbial clause at the front of a sentence.',
          zh: '“Therefore”是连接副词（因此），通常位于两句之间并用逗号隔开，不能直接引导原因从句。',
        },
        D: {
          en: '"However" is an adverb expressing contrast and cannot grammatically introduce a subordinate clause.',
          zh: '“However”是副词，表示转折，无法引导从句。',
        },
      },
    },
  },

  {
    id: 130,
    part: 5,
    type: 'incomplete_sentence',
    question: 'If the traffic report sounds bad this afternoon, then ______ the subway instead of a cab.',
    options: {
      A: 'take',
      B: 'takes',
      C: 'taking',
      D: 'will take',
    },
    correctAnswer: 'A',
    grammarFocus: 'Imperative Sentence',
    explanation: {
      correct:
        '"Take" is the base form of the verb used in an imperative sentence to give an instruction or piece of advice in the main clause following an if-condition.',
      chinese:
        '“take”是正确答案。本句的主句为祈使句，给出建议或指令，省略了主语you，必须使用动词原形“take”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Takes" is third-person singular and cannot form an imperative sentence.',
          zh: '“takes”是第三人称单数形式，不能用于祈使句。',
        },
        C: {
          en: '"Taking" is a gerund/participle and cannot serve as the main imperative verb.',
          zh: '“taking”是非谓语动词，不能构成祈使句。',
        },
        D: {
          en: '"Will take" requires an explicit subject pronoun (such as "you will take"), which is absent in this imperative structure.',
          zh: '“will take”需要明确的主语（例如you will take），而在祈使句中不能直接以助动词will开启动词词组。',
        },
      },
    },
  },

  {
    id: 131,
    part: 5,
    type: 'incomplete_sentence',
    question: 'There is not much agriculture in this area because the ______ yearly rainfall is so low.',
    options: {
      A: 'available',
      B: 'avenging',
      C: 'avaricious',
      D: 'average',
    },
    correctAnswer: 'D',
    grammarFocus: 'Vocabulary / Collocation',
    explanation: {
      correct:
        '"Average" is an adjective meaning typical, standard, or calculated as a mean value. "Average yearly rainfall" (or average annual rainfall) is the established meteorological collocation.',
      chinese:
        '“average”（平均的）是正确答案。“average yearly rainfall”（年平均降雨量）是气象学和地理学中的固定常见搭配。',
      incorrect: {
        A: {
          en: '"Available" means accessible or ready for use, which is unnatural when modifying the statistical metric "yearly rainfall".',
          zh: '“available”意为“可获得的、现成的”，修饰“年降雨量”不符合习惯用法。',
        },
        B: {
          en: '"Avenging" means inflicting harm in return for an injury, completely unrelated to weather.',
          zh: '“avenging”意为“报仇的、复仇的”，与降雨无关。',
        },
        C: {
          en: '"Avaricious" means extremely greedy for money or wealth, which cannot describe rainfall.',
          zh: '“avaricious”意为“贪婪的”，无法修饰降雨量。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 132,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Please use the parking spaces that ______ for visitors.',
    options: {
      A: 'designates',
      B: 'designated',
      C: 'are designating',
      D: 'have been designated',
    },
    correctAnswer: 'D',
    grammarFocus: 'Passive Voice / Relative Clause',
    explanation: {
      correct:
        '"Have been designated" is correct because the antecedent "the parking spaces" is plural and receives the passive action (parking spaces are designated by someone). The present perfect passive "have been designated" indicates that the allocation was made and remains in effect.',
      chinese:
        '“have been designated”是正确答案。先行词“the parking spaces”为复数，且车位是被指定的（被动语态）。现在完成时的被动语态“have been designated”表示“已被划定为访客专用车位”。',
      incorrect: {
        A: {
          en: '"Designates" is active third-person singular, which fails both the plural agreement of "spaces" and the passive requirement.',
          zh: '“designates”为主动态单数，与复数先行词spaces主谓不一致且缺少被动。',
        },
        B: {
          en: '"Designated" alone would be a simple past active form or would require a helping verb in a finite relative clause.',
          zh: '“designated”单独在此会被视为主动态过去式，缺乏被动助动词。',
        },
        C: {
          en: '"Are designating" is active continuous, which would absurdly imply that parking spaces are actively designating something.',
          zh: '“are designating”是主动态进行时，停车位不可能主动去指定他人。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 133,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Participants ______ fly to the convention can get a group rate.',
    options: {
      A: 'they',
      B: 'who',
      C: 'which',
      D: 'whom',
    },
    correctAnswer: 'B',
    grammarFocus: 'Relative Pronoun',
    explanation: {
      correct:
        '"Who" is the subjective relative pronoun referring to persons ("Participants") that introduces the restrictive relative clause and acts as the subject of the verb "fly".',
      chinese:
        '“who”是正确答案。先行词是指人的“Participants”，在定语从句中充当主语（fly的执行者），必须使用关系代词主格“who”。',
      incorrect: {
        A: {
          en: '"They" is a personal pronoun, not a relative pronoun, creating an ungrammatical double subject.',
          zh: '“they”是人称代词，不能引导定语从句，否则会导致双重主语的语法错误。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Which" is used for animals and inanimate things, not people.',
          zh: '“which”指代物，不能指代指人的“Participants”。',
        },
        D: {
          en: '"Whom" is the objective relative pronoun, but the relative clause requires a subject for the verb "fly".',
          zh: '“whom”是宾格形式，而从句动词“fly”需要主格关系代词作主语。',
        },
      },
    },
  },

  {
    id: 134,
    part: 5,
    type: 'incomplete_sentence',
    question: 'The year-end office party is for the enjoyment of the entire staff, and no one will be ______ from the invitation.',
    options: {
      A: 'excused',
      B: 'excluded',
      C: 'extracted',
      D: 'excised',
    },
    correctAnswer: 'B',
    grammarFocus: 'Vocabulary / Collocation',
    explanation: {
      correct:
        '"Excluded" means left out or barred from participation. "Excluded from" is the appropriate collocation expressing that everyone is included in the invitation.',
      chinese:
        '“excluded”（被排除在外的）是正确答案。固定搭配为“be excluded from...”（被排除在……之外），表示年终聚会面对全体员工，没有任何人会被排除在邀请名单之外。',
      incorrect: {
        A: {
          en: '"Excused" means pardoned or released from an obligation, typically followed by "for" or "from duties", but not meaning omitted from a guest list.',
          zh: '“excused”意为“被原谅/免除责任”，不表示从名单中被排除。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Extracted" means physically pulled or removed out of a substance (e.g., extracted oil or a tooth).',
          zh: '“extracted”意为“提取、拔出”，不能用于人被排除在邀请之外。',
        },
        D: {
          en: '"Excised" means surgically cut out or expunged from a text.',
          zh: '“excised”意为“切除、删去”，用于外科手术或文字删除，不适于此处。',
        },
      },
    },
  },

  {
    id: 135,
    part: 5,
    type: 'incomplete_sentence',
    question: 'We ______ any problems with building maintenance until they hired the new building manager.',
    options: {
      A: "wouldn't have",
      B: "haven't had",
      C: "don't have",
      D: "didn't have",
    },
    correctAnswer: 'D',
    grammarFocus: 'Verb Tense',
    explanation: {
      correct:
        '"Didn\'t have" is the simple past tense, which aligns with the past time context established by the time clause "until they hired the new building manager".',
      chinese:
        '“didn\'t have”是正确答案。由until引导的时间状语从句使用了过去式“hired”，表明这是过去发生的事件，因此主句陈述过去的状况也必须使用一般过去时“didn\'t have”。',
      incorrect: {
        A: {
          en: '"Wouldn\'t have" is a conditional form, but this sentence describes an actual past fact, not a hypothetical conditional.',
          zh: '“wouldn\'t have”是虚拟/条件结构，而此句是陈述过去事实，并非假设。',
        },
        B: {
          en: '"Haven\'t had" is present perfect, which cannot be delimited by a specific past completed event introduced by "until they hired".',
          zh: '“haven\'t had”是现在完成时，不能与表示过去结束点的时间状语连用。',
        },
        C: {
          en: '"Don\'t have" is present tense, which clashes with the past tense in the time clause.',
          zh: '“don\'t have”是现在时，与从句中的过去时hired冲突。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 136,
    part: 5,
    type: 'incomplete_sentence',
    question: 'You will find all the supplies you need ______ the hallway cabinet next to the copier.',
    options: {
      A: 'in',
      B: 'on',
      C: 'down',
      D: 'between',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition of Place',
    explanation: {
      correct:
        '"In" is the preposition used for an enclosed 3D storage space such as a cabinet ("in the cabinet").',
      chinese:
        '“in”是正确答案。表示在封闭的三维储物空间内部（如柜子内），介词应使用“in”（在壁橱/柜子里）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"On" refers to a top surface, whereas office supplies are kept inside a cabinet.',
          zh: '“on”表示在表面上，办公用品通常存放在柜子内部。',
        },
        C: {
          en: '"Down" denotes direction along a path (e.g. "down the hallway"), but cannot take "the cabinet" as a direct object of location.',
          zh: '“down”表示顺着方向，不能直接搭配the cabinet作地点介词。',
        },
        D: {
          en: '"Between" requires two distinct bounding points or objects.',
          zh: '“between”需要两者之间，不能接单数名词the cabinet。',
        },
      },
    },
  },

  {
    id: 137,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Ms. Kim is a knowledgeable and ______ engineer and she has contributed a great deal to the work of this company.',
    options: {
      A: 'industrious',
      B: 'industry',
      C: 'industrial',
      D: 'industries',
    },
    correctAnswer: 'A',
    grammarFocus: 'Part of Speech / Parallel Adjectives',
    explanation: {
      correct:
        '"Industrious" is an adjective meaning diligent and hardworking. It correctly parallels the adjective "knowledgeable" to describe the engineer\'s professional character.',
      chinese:
        '“industrious”（勤奋的、刻苦的）是正确答案。它是形容词，与前面的形容词“knowledgeable”由and连接构成并列关系，共同修饰名词“engineer”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Industry" is a noun, which cannot serve as a parallel adjective describing a person.',
          zh: '“industry”是名词（工业、行业），不能与形容词knowledgeable并列修饰人。',
        },
        C: {
          en: '"Industrial" means related to manufacturing or factories (e.g., industrial design), not describing personal diligence.',
          zh: '“industrial”意思是“工业的/产业的”，不能用于形容个人的勤劳品格。',
        },
        D: {
          en: '"Industries" is a plural noun, which cannot modify "engineer".',
          zh: '“industries”是复数名词，词性错误。',
        },
      },
    },
  },

  {
    id: 138,
    part: 5,
    type: 'incomplete_sentence',
    question: 'Ms. Neil ______ the general manager of the hotel since 2004.',
    options: {
      A: 'is',
      B: 'has been',
      C: 'had been',
      D: 'had',
    },
    correctAnswer: 'B',
    grammarFocus: 'Verb Tense (Present Perfect)',
    explanation: {
      correct:
        '"Has been" is the present perfect tense, which is mandatory when describing a state that began at a past point in time and continues up to the present moment, signaled by the time preposition "since 2004".',
      chinese:
        '“has been”是正确答案。句中有明显的时间标志词“since 2004”（自2004年以来），表示从过去某时持续到现在的状态，主句必须使用现在完成时“has been”。',
      incorrect: {
        A: {
          en: '"Is" is simple present, which cannot denote duration spanning from a past year with "since".',
          zh: '“is”是一般现在时，不能与表示从过去持续至今的“since 2004”连用。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Had been" is past perfect, which would imply the tenure ended before another past event, rather than extending to now.',
          zh: '“had been”是过去完成时，表示在过去的某一时刻之前就已经结束，不符合与现在相连的含义。',
        },
        D: {
          en: '"Had" is past tense of have, which does not link with the predicate noun "the general manager".',
          zh: '“had”是have的过去式，词义和时态均不符。',
        },
      },
      learningTip: {
        en: '"Since + specific past time point" is one of the most reliable triggers for the present perfect tense (have/has + past participle) on the TOEIC.',
        zh: '“since + 过去具体时间点”是TOEIC考试中最典型的现在完成时（have/has + done）标志。',
      },
    },
  },

  {
    id: 139,
    part: 5,
    type: 'incomplete_sentence',
    question: "We read about Mr. Moriwaki's promotion ______ the company newsletter.",
    options: {
      A: 'in',
      B: 'of',
      C: 'on',
      D: 'to',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition of Medium',
    explanation: {
      correct:
        '"In" is the standard preposition used when referring to articles, news, or reports contained inside publications like newspapers, books, and newsletters ("in the newsletter").',
      chinese:
        '“in”是正确答案。在报纸、简报、杂志或书籍中刊登的内容，习惯搭配介词“in”，即“in the company newsletter”（在公司内部通讯/简报中）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Of" expresses possession or composition, not the medium in which information is printed.',
          zh: '“of”表示所属关系，不能作为表示刊载媒介的介词。',
        },
        C: {
          en: '"On" is used for electronic media (on the Internet, on TV) or pages (on page 5), but "in" is the standard preposition for printed publications (in the newsletter).',
          zh: '“on”通常用于电子媒介或某一页（on page 5），而刊物本身作为载体固定用“in the newsletter”。',
        },
        D: {
          en: '"To" indicates direction or recipient, not location in print.',
          zh: '“to”表示方向或接收对象，不符合语境。',
        },
      },
    },
  },

  {
    id: 140,
    part: 5,
    type: 'incomplete_sentence',
    question: "Mr. Ross promised to prepare the earnings and expenses charts ______ tomorrow's staff meeting.",
    options: {
      A: 'before',
      B: 'due to',
      C: 'so that',
      D: 'because',
    },
    correctAnswer: 'A',
    grammarFocus: 'Preposition of Time',
    explanation: {
      correct:
        '"Before" is a preposition of time that precedes a noun phrase ("tomorrow\'s staff meeting"), indicating that the charts will be prepared prior to the meeting taking place.',
      chinese:
        '“before”是正确答案。在此作为时间介词，后接名词短语“tomorrow\'s staff meeting”，表示在明天的员工会议召开之前准备好收支图表。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '"Due to" means "caused by", which makes no sense before a scheduled event in this sentence.',
          zh: '“due to”表示原因（由于），不能用于表示在会议之前的时间顺序。',
        },
        C: {
          en: '"So that" is a conjunction of purpose that requires a full clause with a subject and verb, not a noun phrase.',
          zh: '“so that”是目的状语连词，后需接完整从句，不能接名词短语。',
        },
        D: {
          en: '"Because" is a conjunction that must be followed by a clause, not a noun phrase.',
          zh: '“because”是连词，必须引导从句。',
        },
      },
    },
  },
];
