import { Question } from '../types/toeic';

export const PART_7_QUESTIONS: Question[] = [
  {
    id: 153,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_153_154',
    question: 'What is the purpose of this form?',
    options: {
      A: 'To apply for a new address',
      B: 'To notify businesses of an address change',
      C: 'To order a publication',
      D: 'To find the location of a business',
    },
    correctAnswer: 'B',
    readingSkill: 'Main Purpose',
    explanation: {
      correct:
        'The opening instruction states: "Fill out this card and mail it to the businesses and publications who send you mail." John Carpenter is providing his Old Address and New Address so that organizations sending him mail are notified of his relocation.',
      chinese:
        '正确答案为B。表格开头的指引明确写道：“填写此卡并邮寄给向您投递邮件的企业和出版物。”约翰·卡彭特填写了原地址与新地址，目的是将地址变更通知各业务往来机构。',
      incorrect: {
        A: {
          en: 'One does not "apply" for an address; the form merely reports an existing residential change.',
          zh: '地址不是通过向企业“申请”获得的，本表格仅用于报备已变更的住址。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'The card is sent to publications that already send mail, not to place a new subscription order.',
          zh: '该卡是寄给已经向他寄信的出版物，并非用于订购新刊物。',
        },
        D: {
          en: 'The form provides the individual\'s own address, not locating a business.',
          zh: '该表格提供的是个人新旧住址，而非查询企业位置。',
        },
      },
      learningTip: {
        en: 'For "purpose" questions in Part 7 forms, look at the introductory instructions or top header immediately under the title.',
        zh: '对于Part 7表格类的“目的题”，优先查看标题正下方的填表指示或第一句说明。',
      },
    },
  },

  {
    id: 154,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_153_154',
    question: 'When is the form effective?',
    options: {
      A: 'March 12',
      B: 'April 12',
      C: 'May 12',
      D: 'In 12 days',
    },
    correctAnswer: 'B',
    readingSkill: 'Specific Information / Date',
    explanation: {
      correct:
        'The date written on the form is "April 12", and the bottom line explicitly states: "New address is effective: immediately". Since it takes effect immediately on the date written, it is effective on April 12.',
      chinese:
        '正确答案为B。表格填写的日期为“April 12”（4月12日），底部的标注明确写着“New address is effective: immediately”（新地址立即生效）。既然在填写当天立即生效，生效日期即为4月12日。',
      incorrect: {
        A: {
          en: 'March 12 was one month earlier and does not appear on the form.',
          zh: '3月12日是前一个月，表格中并未出现此日期。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'May 12 is one month after April 12; while the text advises mailing one month prior to moving, the form states the change is effective immediately.',
          zh: '5月12日是4月12日后一个月；虽然提示提到提前一个月寄出，但表格明确写明“立即生效”。',
        },
        D: {
          en: '"In 12 days" confuses the day number (12th) with a duration.',
          zh: '“12天内”混淆了日期号数（12日）与时长。',
        },
      },
    },
  },

  {
    id: 155,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_155_156',
    question: 'What is offered at no charge?',
    options: {
      A: 'A TV',
      B: 'A purse',
      C: 'A dictionary',
      D: 'A language textbook',
    },
    correctAnswer: 'C',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The advertisement states: "Order a full Wizard Language Program at the low, low price of $450, and we\'ll send you an electronic bilingual dictionary ABSOLUTELY FREE."',
      chinese:
        '正确答案为C。广告正文中明确说明：“以450美元的超低价订购完整的Wizard语言课程，我们将完全免费赠送您一本电子双语词典（an electronic bilingual dictionary ABSOLUTELY FREE）。”',
      incorrect: {
        A: {
          en: 'TV is only mentioned because the customer has "seen the ads on TV".',
          zh: '电视机仅在提到“在电视上看过广告”时出现，并非免费赠品。',
        },
        B: {
          en: 'A purse is mentioned as an example of where the small dictionary can be carried ("small enough to carry in your pocket or purse").',
          zh: '钱包/手袋仅用于说明电子词典体积小巧便于携带，不是赠品。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Textbooks are not offered free of charge; only the electronic bilingual dictionary is offered free.',
          zh: '广告未提供免费教材，免费赠品仅为电子双语词典。',
        },
      },
    },
  },

  {
    id: 156,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_155_156',
    question: 'How can you get this item?',
    options: {
      A: 'Take a class',
      B: 'Visit a store',
      C: 'Watch a TV show',
      D: 'Buy a language program',
    },
    correctAnswer: 'D',
    readingSkill: 'Specific Information',
    explanation: {
      correct:
        'The ad headline reads: "Now, When You Purchase a Wizard Foreign Language Program, We\'ll Send You A FREE GIFT!", which is reiterated with "Order a full Wizard Language Program at the low, low price of $450...".',
      chinese:
        '正确答案为D。广告大标题明确写出：“购买Wizard外语学习课程即可获赠免费礼物！”正文也写道“订购完整语言课程即可获赠”，因此必须购买语言课程才能获得。',
      incorrect: {
        A: {
          en: 'The product is a self-study program, not an in-person class.',
          zh: '产品为自学学习包，并非去上课。',
        },
        B: {
          en: 'The advertisement directs customers to call a phone number (1-800-555-4980), not visit a retail store.',
          zh: '广告引导拨打电话订购，而不是去实体店。',
        },
        C: {
          en: 'Watching commercials on TV does not grant the free gift; purchase is required.',
          zh: '仅看电视广告无法获得赠品，必须出资购买。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 157,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_157_159',
    question: 'Who would be likely to attend this seminar?',
    options: {
      A: 'Workers',
      B: 'Legislators',
      C: 'Lawyers',
      D: 'Doctors',
    },
    correctAnswer: 'C',
    readingSkill: 'Inference / Target Audience',
    explanation: {
      correct:
        'The seminar is presented by "Legal Education Seminars" and covers "key changes in legislation, regulations, and case law", "Workers\' Compensation law", and "new trends in defense"—all specialized topics aimed at practicing attorneys and legal counsel.',
      chinese:
        '正确答案为C。研讨会由“法律继续教育研讨会”（Legal Education Seminars）主办，内容涵盖法律法规及判例法（case law）更新、工伤赔偿法进阶知识以及辩护新趋势（trends in defense），受众显然是执业律师。',
      incorrect: {
        A: {
          en: 'Although the topic is "Workers\' Compensation", the content is highly technical case law and defense strategy for legal professionals, not general workers.',
          zh: '虽然涉及工伤赔偿法，但内容为专业的判例法与诉讼辩护策略，非普通工人培训。',
        },
        B: {
          en: 'Legislators draft statutes, but this seminar teaches practitioners how to interpret regulations and argue defense cases.',
          zh: '立法者负责制定法律，而此研讨会是给实务人员讲解案例法与辩护策略。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'The focus is strictly jurisprudence, regulations, and case defense, not medical treatment.',
          zh: '研讨会纯粹是法律与诉讼实务，并非医学讲座。',
        },
      },
    },
  },

  {
    id: 158,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_157_159',
    question: 'What will be taught?',
    options: {
      A: 'Information about payment to injured workers',
      B: 'How employment and hiring laws are made',
      C: 'How to strategize to keep employees healthy',
      D: 'Ways to communicate with employees',
    },
    correctAnswer: 'A',
    readingSkill: 'Main Topic / Vocabulary in Context',
    explanation: {
      correct:
        '"Workers\' Compensation" is the established legal system that provides wage replacement and medical benefits (payment) to employees injured in the course of employment. Thus, the seminar teaches the legal mechanisms governing payments to injured workers.',
      chinese:
        '正确答案为A。“Workers\' Compensation”（劳工伤残赔偿制度）是法律上专指雇主对在工作中因公受伤员工给付医疗费和薪资补偿金的制度，因此该讲座传授关于向受伤员工给付款项的法律实务。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'The seminar covers case law and defense under existing workers\' compensation statutes, not how hiring legislation is enacted.',
          zh: '研讨会讲授工伤赔偿实务，并非讲授招聘法律是如何制定的。',
        },
        C: {
          en: 'Health and wellness prevention is not workers\' compensation jurisprudence.',
          zh: '研讨会关注法律赔偿纠纷与辩护，并非员工日常健康管理。',
        },
        D: {
          en: 'Internal employee communication is an HR topic, not legal education on workers\' compensation.',
          zh: '与员工沟通属于一般人力资源范畴，非工伤法律诉讼重点。',
        },
      },
    },
  },

  {
    id: 159,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_157_159',
    question: 'What else can you learn?',
    options: {
      A: 'Arguments being used by the defense',
      B: 'How to influence the law',
      C: 'How to advance your career',
      D: 'Where to practice your new skills',
    },
    correctAnswer: 'A',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The third bullet point explicitly promises to: "show you how to anticipate new trends in defense", which directly matches learning the legal arguments being developed by the defense.',
      chinese:
        '正确答案为A。公告中的第三条要点明确说明：“向您展示如何预判辩护的新趋势（anticipate new trends in defense）”，这直接对应辩方所采用的抗辩论据。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Influencing legislation (lobbying) is not mentioned in the syllabus.',
          zh: '公告中未提及如何影响或游说立法的教学内容。',
        },
        C: {
          en: 'Career advancement is not listed as a seminar objective.',
          zh: '职业晋升不是该研讨会的教学要点。',
        },
        D: {
          en: 'Where to practice is not discussed.',
          zh: '未涉及去何处实践新技能。',
        },
      },
    },
  },

  {
    id: 160,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_160_161',
    question: 'Who would probably NOT be interested in this book?',
    options: {
      A: 'Students',
      B: 'Legal assistants',
      C: 'Hotel managers',
      D: 'Airline executives',
    },
    correctAnswer: 'A',
    readingSkill: 'Inference / Negative Fact',
    explanation: {
      correct:
        'The book is titled "The Office Writer\'s Handbook" and is described as "for anyone who has to write for business purposes," focusing on "approved formats for business correspondence, reports, and charts." Legal assistants, hotel managers, and airline executives are corporate professionals writing business correspondence, whereas general students write academic papers and would be the least interested in office correspondence formats.',
      chinese:
        '正确答案为A。该书名为《办公室写作者指南》，专为“任何需要进行商业写作的人士（write for business purposes）”设计，侧重商业信件、报告和图表格式。助理律师、酒店经理和航空公司高管均为职场商业人士，而一般在校学生不以日常商业办公为主要写作目的，最不可能对本书感兴趣。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Legal assistants write business correspondence and legal office documents daily.',
          zh: '律师助理在工作中需大量撰写商业信函与办公报告。',
        },
        C: {
          en: 'Hotel managers manage business operations and communicate with corporate partners.',
          zh: '酒店经理日常处理商业管理信件与汇报。',
        },
        D: {
          en: 'Airline executives oversee corporate business and correspondence.',
          zh: '航空公司高管属于典型商业办公决策人员。',
        },
      },
    },
  },

  {
    id: 161,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_160_161',
    question: 'What material is covered in the special section?',
    options: {
      A: 'Sample charts',
      B: 'Writing formats',
      C: 'Business letters',
      D: 'Common mistakes',
    },
    correctAnswer: 'D',
    readingSkill: 'Specific Information',
    explanation: {
      correct:
        'The text explicitly says: "A special section covers the most common writing mistakes and shows you how to avoid them."',
      chinese:
        '正确答案为D。文章倒数第二句明确写道：“特别章节涵盖最常见的写作错误并向您展示如何避免（A special section covers the most common writing mistakes）。”',
      incorrect: {
        A: {
          en: 'Charts are mentioned earlier in the general business correspondence section, not the special section.',
          zh: '图表是在前面的商业通信常规章节中提到的，不是特别章节。',
        },
        B: {
          en: 'Writing formats are part of general business formats, not the special section.',
          zh: '写作格式属于常规章节内容。',
        },
        C: {
          en: 'Business letters/correspondence are covered in the general chapters.',
          zh: '商业信函属于常规章节。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 162,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_162_164',
    question: "What is Sov Hok's business?",
    options: {
      A: 'Magazine publication',
      B: 'Garden design',
      C: 'Advertising',
      D: 'Magazine sales',
    },
    correctAnswer: 'B',
    readingSkill: 'Inference / Detail',
    explanation: {
      correct:
        'The letterhead clearly reads "GARDENS BY HOK", and the writer explains: "Because of the nature of our business, we generally spend more of our advertising dollars during the warmer months of the year... in anticipation of the spring rush," which is typical of gardening and landscape design businesses.',
      chinese:
        '正确答案为B。信头抬头为“GARDENS BY HOK”（霍克园艺），信中写道“由于我们行业的特性，我们在天气较暖的月份花费更多广告预算……迎接春季高峰”，清楚表明其经营的是园艺景观设计业务。',
      incorrect: {
        A: {
          en: 'Magazine publication is Guy Williams\' business (Landscape Design Magazine), the recipient of the letter.',
          zh: '杂志出版是收信人盖伊·威廉姆斯（Landscape Design Magazine）的业务。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Sov Hok buys advertising, but does not run an advertising agency.',
          zh: '霍克先生是购买广告的客户，而非广告代理商。',
        },
        D: {
          en: 'Sov Hok is not in magazine sales.',
          zh: '霍克先生并非从事杂志销售。',
        },
      },
    },
  },

  {
    id: 163,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_162_164',
    question: 'Why did Mr. Hok write this letter?',
    options: {
      A: 'To find out about magazine subscriptions',
      B: 'To ask for a job',
      C: 'To discuss placing an ad',
      D: 'To ask about pricing',
    },
    correctAnswer: 'C',
    readingSkill: 'Main Purpose',
    explanation: {
      correct:
        'Mr. Hok writes: "Thank you for sending the advertising information we requested. After careful consideration, we have decided not to place an ad in the December issue... We will probably, however, want to advertise with you in your next issue in March..." He is explaining his advertising decisions.',
      chinese:
        '正确答案为C。霍克先生致信感谢对方寄来广告资料，告知他们决定不在12月刊登广告，但打算在3月刊投放广告，并相约后续商讨版位与价格。整封信的核心目的是讨论投放广告的事宜。',
      incorrect: {
        A: {
          en: 'The letter is about purchasing advertising space, not subscribing to read the magazine.',
          zh: '信件涉及购买广告版面，而非读者订阅杂志。',
        },
        B: {
          en: 'Mr. Hok is the owner/manager of a company and is not applying for employment.',
          zh: '霍克先生是公司负责人，不是求职应聘。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'He already received advertising information and says he will contact them closer to March to discuss pricing, not asking for quotes in this letter.',
          zh: '他已经收到了广告资料，并表示临近3月再谈价格，此信并非专为询问价格而发。',
        },
      },
    },
  },

  {
    id: 164,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_162_164',
    question: 'How often does Landscape Design Magazine come out?',
    options: {
      A: 'Weekly',
      B: 'Monthly',
      C: 'Bi-monthly',
      D: 'Quarterly',
    },
    correctAnswer: 'D',
    readingSkill: 'Inference',
    explanation: {
      correct:
        'Mr. Hok declines to place an ad in the "December issue", but notes: "want to advertise with you in your next issue in March". The interval from December to the next issue in March is three months (December, January, February -> March), which signifies a quarterly publication schedule (4 times per year).',
      chinese:
        '正确答案为D。霍克先生表示不订“12月刊”，但希望投放“你们下一期3月刊（your next issue in March）”。从12月到下一期3月相隔整整3个月（一季度），说明该杂志是季刊（Quarterly）。',
      incorrect: {
        A: {
          en: 'A weekly magazine would have dozens of issues between December and March.',
          zh: '周刊在12月到3月之间会有十几期。',
        },
        B: {
          en: 'A monthly magazine would have January and February issues between December and March.',
          zh: '月刊在12月之后会紧接1月和2月刊，下一期不会直接是3月。',
        },
        C: {
          en: 'A bi-monthly publication comes out every two months (the next issue would be February).',
          zh: '双月刊每两个月一期，12月下一期应为2月。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
      learningTip: {
        en: 'TOEIC inference questions often test publication frequency by referencing consecutive issues: monthly (adjacent months), bi-monthly (every 2 months), quarterly (every 3 months, e.g. December to March).',
        zh: 'TOEIC常考推断题套路：通过两期杂志月份推断出版周期。如本题12月刊的“下一期”是3月刊，间隔3个月，即为季刊（quarterly）。',
      },
    },
  },

  {
    id: 165,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_165_168',
    question: 'What is exported the most?',
    options: {
      A: 'Pesticides',
      B: 'Fibers',
      C: 'Foods',
      D: 'Chemicals',
    },
    correctAnswer: 'C',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The opening sentence states: "Food products account for the largest portion of our agricultural exports, although it is traditionally thought that pesticides and other agricultural chemicals are in the lead."',
      chinese:
        '正确答案为C。报告第一句明确指出：“食品占据了我们农业出口的最大份额（Food products account for the largest portion），尽管传统上人们以为杀虫剂等农用化学品居首。”',
      incorrect: {
        A: {
          en: 'Pesticides are what people "traditionally thought" led, but food products actually account for the largest portion.',
          zh: '杀虫剂只是人们传统上误以为领先的产品，实际最大宗的是食品。',
        },
        B: {
          en: 'Fibers are not mentioned in the passage.',
          zh: '文中未提及纤维。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Agricultural chemicals are secondary to food products.',
          zh: '农用化学品仅是传统认知中的领先项，实际出口量被食品超越。',
        },
      },
    },
  },

  {
    id: 166,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_165_168',
    question: 'Why has the value of food product exports increased?',
    options: {
      A: 'Increased interest in unfamiliar foods',
      B: 'Drought in other countries',
      C: 'Higher prices',
      D: 'More affluent consumers',
    },
    correctAnswer: 'A',
    readingSkill: 'Paraphrase / Cause and Effect',
    explanation: {
      correct:
        'The text states: "The value of food product exports has increased in recent years, with the increased interest among consumers in more exotic food products." "Exotic" is directly paraphrased by "unfamiliar foods".',
      chinese:
        '正确答案为A。文中指出：“由于消费者对更多异域/外来食品（exotic food products）兴趣的增加，近年来食品出口价值显著上升。”这里的“exotic”在选项中同义替换为“unfamiliar foods”。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Drought in other countries is not mentioned.',
          zh: '文中未提及其他国家的旱灾。',
        },
        C: {
          en: 'Higher prices are not cited as the driver; increased consumer interest and expanded production are.',
          zh: '增长的原因是消费者需求增加，并非价格上涨。',
        },
        D: {
          en: 'Consumer wealth or affluence is not stated in the report.',
          zh: '报告中未提及消费者更富有。',
        },
      },
    },
  },

  {
    id: 167,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_165_168',
    question: 'What trend is expected to continue?',
    options: {
      A: 'Regulations on agricultural exports',
      B: 'High demand for exotic fruits and vegetables',
      C: 'High prices for foods',
      D: 'Desire to produce more',
    },
    correctAnswer: 'B',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'Paragraph 2 states: "Our exports of native tropical fruits and root vegetables have increased from less than 2% to more than 5% of total agricultural exports in the past two years, and growth is expected to continue."',
      chinese:
        '正确答案为B。第二段指出：“在过去的两年中，我们本地热带水果和根茎类蔬菜的出口占比从不足2%上升至超过5%，且这种增长势头预计将继续保持（growth is expected to continue）。”',
      incorrect: {
        A: {
          en: 'Export regulations are not described as a continuing trend.',
          zh: '出口监管法规未被描述为持续趋势。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Price inflation is not discussed.',
          zh: '未提及食品价格居高不下。',
        },
        D: {
          en: 'The text highlights the sustained market demand/export growth for tropical produce, not a psychological desire of growers.',
          zh: '重点在于异域果蔬的高市场需求与出口增长趋势，而非生产者的愿望。',
        },
      },
    },
  },

  {
    id: 168,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_165_168',
    question: 'The word anticipate in paragraph 2, line 4, is closest in meaning to',
    options: {
      A: 'fear.',
      B: 'enjoy.',
      C: 'expect.',
      D: 'develop.',
    },
    correctAnswer: 'C',
    readingSkill: 'Vocabulary in Context',
    explanation: {
      correct:
        'In the sentence "But we continue to anticipate new food trends and will be ready to respond as the market changes," "anticipate" means to look forward to, foresee, or expect upcoming trends.',
      chinese:
        '正确答案为C。在句中“anticipate new food trends”（预料/期望新的食品趋势），动词“anticipate”意为预估、预见，与“expect”（预期）含义最为接近。',
      incorrect: {
        A: {
          en: '"Fear" means to dread or be afraid of, which carries a negative connotation absent here.',
          zh: '“fear”是害怕，含有负面感情色彩，与句意相反。',
        },
        B: {
          en: '"Enjoy" means to take pleasure in, which does not mean to foresee market developments.',
          zh: '“enjoy”是享受，不表示对市场动向的预判。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '"Develop" means to create or grow, not to predict beforehand.',
          zh: '“develop”是开发、发展，不是预先推测。',
        },
      },
    },
  },

  {
    id: 169,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_169_172',
    question: 'Who is this article for?',
    options: {
      A: 'Overweight people',
      B: 'Frequent vacationers',
      C: 'Business travelers',
      D: 'Pilots and flight attendants',
    },
    correctAnswer: 'C',
    readingSkill: 'Target Audience',
    explanation: {
      correct:
        'The article opens with: "Business travelers usually find that they have little time to exercise..." and closes with: "try to exercise every day, even when traveling." The whole article addresses business travel challenges.',
      chinese:
        '正确答案为C。文章开篇第一句即点出目标读者：“商务差旅人士（Business travelers）通常发现自己几乎没有时间锻炼……”，并在全文为出差人员提供具体的机舱及酒店运动建议。',
      incorrect: {
        A: {
          en: 'The article is directed at busy professionals traveling for work, not specifically overweight individuals.',
          zh: '文章面向的是出差工作繁忙的职场人士，并非专门针对超重人群。',
        },
        B: {
          en: 'Vacationers have leisure time, whereas the text addresses travelers with schedules disrupted by late meetings.',
          zh: '度假者时间充裕，而文章讨论的是因会议和航班耽误日程的商务旅客。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Flight crews work on planes, but the tips are designed for passengers traveling on business trips.',
          zh: '机组人员是航班乘务人员，而文中针对的是乘坐飞机出差的商务乘客。',
        },
      },
    },
  },

  {
    id: 170,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_169_172',
    question: 'Why is it difficult for travelers to get exercise?',
    options: {
      A: 'Their schedules change unexpectedly',
      B: 'They work too hard',
      C: 'There are no places to exercise',
      D: 'They don\'t want to exercise',
    },
    correctAnswer: 'A',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The article states travelers have little time to exercise, "...especially when their schedules are suddenly changed by late meetings or late flights."',
      chinese:
        '正确答案为A。文章明确指出商务旅客难以锻炼的原因：“尤其是当他们的日程安排因会议超时或航班延误而突遭改变时（schedules are suddenly changed）。”',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Working hard is a general description, but unexpected schedule shifts is the specific reason given.',
          zh: '“工作太辛苦”只是一般性描述，文中强调的具体原因是行程突遭打乱。',
        },
        C: {
          en: 'Hotels often have exercise rooms ("hotel\'s exercise room"), so lack of facilities is not the root issue.',
          zh: '酒店通常配有健身房，并非完全没有健身场所。',
        },
        D: {
          en: 'Travelers want to exercise ("everyone should get some exercise"), but struggle for time.',
          zh: '并非他们不想运动，而是受制于日程混乱。',
        },
      },
    },
  },

  {
    id: 171,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_169_172',
    question: 'Where can travelers exercise?',
    options: {
      A: 'At meetings',
      B: 'In an airplane seat',
      C: 'In a car',
      D: 'In the hotel lobby',
    },
    correctAnswer: 'B',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The passage explicitly recommends: "Experts suggest stretching your neck, arms, back, and shoulders while sitting in your airplane seat."',
      chinese:
        '正确答案为B。文中明确建议：“专家建议坐在飞机座位上时（in your airplane seat），拉伸您的颈部、手臂、背部和肩膀。”',
      incorrect: {
        A: {
          en: 'Meetings are when they are working, not exercising.',
          zh: '开会时无法进行伸展锻炼。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Exercising in a car is not mentioned.',
          zh: '文中未提及在汽车里锻炼。',
        },
        D: {
          en: 'The text recommends stretching in the hotel room, not in the public lobby.',
          zh: '文中建议在酒店房间内拉伸跑步，不是在酒店大堂。',
        },
      },
    },
  },

  {
    id: 172,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_169_172',
    question: 'According to the article, what is a benefit of exercise?',
    options: {
      A: 'Improved work performance',
      B: 'Weight loss',
      C: 'Feeling younger',
      D: 'Better relationships with colleagues',
    },
    correctAnswer: 'A',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'Paragraph 2 explains: "People who exercise regularly perform more efficiently at work and perform more effectively than their colleagues who don\'t exercise."',
      chinese:
        '正确答案为A。第二段明确阐述：“经常锻炼的人在工作中表现得更高效（perform more efficiently at work），比不锻炼的同事更有成效。”这直接对应工作表现的提升。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Weight loss is not mentioned in the article.',
          zh: '文章未提及减轻体重。',
        },
        C: {
          en: 'Feeling younger is not cited.',
          zh: '文章未提到感觉更年轻。',
        },
        D: {
          en: 'The text says they outperform colleagues, not that their interpersonal relationships improve.',
          zh: '文章强调工作表现胜过同事，并非改善人际关系。',
        },
      },
    },
  },

  {
    id: 173,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_173_177',
    question: 'According to the fax, what prompted Mr. Horstma to sell Kleanit?',
    options: {
      A: 'His e-mail responses',
      B: 'His poor computer skills',
      C: 'His need for money',
      D: 'His satisfaction with the product',
    },
    correctAnswer: 'D',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'In paragraph 2, Mr. Horstma explains: "I found that a simple software package called Kleanit gets rid of everything I don\'t need and keeps the things I do. I was so impressed with this package that I decided to share it with others."',
      chinese:
        '正确答案为D。霍斯特马先生在第二段明确表示：“我对这个软件印象极为深刻（so impressed），以至于我决定与大家分享。”这表明是他对产品的高度满意促使他销售该软件。',
      incorrect: {
        A: {
          en: 'E-mail clutter was a problem he had, not the trigger to sell.',
          zh: '邮件堆积是他原本面临的问题，并非推销软件的原因。',
        },
        B: {
          en: 'Poor computer skills are not stated as his motivation.',
          zh: '电脑技术差不是他销售软件的起因。',
        },
        C: {
          en: 'A need for personal funds is not mentioned.',
          zh: '信中未提及其个人缺钱。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 174,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_173_177',
    question: 'What suggestion is made in his fax?',
    options: {
      A: 'To buy new computers',
      B: 'To send less mail',
      C: 'To print out documents',
      D: 'To purchase new software',
    },
    correctAnswer: 'D',
    readingSkill: 'Main Idea / Action',
    explanation: {
      correct:
        'Mr. Horstma urges recipients: "Why don\'t you try it? I\'ll send you a trial copy... send your check for $32.50 at your earliest convenience." He is inviting them to purchase the Kleanit software utility.',
      chinese:
        '正确答案为D。霍斯特马先生建议收件人试用并购买这款新软件：“你何不试试看？我给你寄一份试用版……寄送32.50美元支票。”因此他的建议是购买这款新软件。',
      incorrect: {
        A: {
          en: 'He suggests cleaning existing computers with software, not buying new hardware.',
          zh: '他建议用软件清理现有电脑，而不是买新电脑。',
        },
        B: {
          en: 'He advises deleting unnecessary old messages, not sending fewer new emails.',
          zh: '他建议清除无用邮件，并非减少发信。',
        },
        C: {
          en: 'Printing documents is not mentioned.',
          zh: '完全未提及把文件打印出来。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 175,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_173_177',
    question: 'The word obscure in paragraph 1, line 3, is closest in meaning to',
    options: {
      A: 'useful.',
      B: 'unclear.',
      C: 'unusual.',
      D: 'understood.',
    },
    correctAnswer: 'B',
    readingSkill: 'Vocabulary in Context',
    explanation: {
      correct:
        'In the sentence "...creating a huge warehouse of obscure file names," "obscure" means indistinct, vague, or not clear—names that you can no longer recognize or understand.',
      chinese:
        '正确答案为B。在第一段最后一句“creating a huge warehouse of obscure file names”（堆积出由各种晦涩难认的文件名组成的庞大仓库）中，“obscure”表示含糊不清、难以辨认的，与“unclear”同义。',
      incorrect: {
        A: {
          en: '"Useful" is the exact opposite of redundant, forgotten files.',
          zh: '“useful”（有用的）与文意相反。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Unusual" means rare or strange, not necessarily indistinct or difficult to recognize.',
          zh: '“unusual”意为不寻常的，不表达辨识不清的含义。',
        },
        D: {
          en: '"Understood" is an antonym of obscure.',
          zh: '“understood”（被理解的）是反义词。',
        },
      },
    },
  },

  {
    id: 176,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_173_177',
    question: 'According to the fax, what effect does clutter have on a computer?',
    options: {
      A: 'It operates slowly.',
      B: 'It runs out of space.',
      C: 'It stops working.',
      D: 'It erases files.',
    },
    correctAnswer: 'A',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'Paragraph 3 explains: "No longer do those bothersome extra messages and computer files waste processing time and cause my computer to perform inefficiently." Wasting processing time and performing inefficiently means the computer operates slowly.',
      chinese:
        '正确答案为A。第三段指出：“那些烦人的多余邮件和文件不再浪费处理时间，也不会再导致我的电脑运行低下（perform inefficiently）。”这说明杂乱文件会导致电脑运行缓慢。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'The fax emphasizes slow, inefficient processing rather than total disk exhaustion.',
          zh: '传真中强调的是处理速度变慢效率低下，而非硬盘空间耗尽。',
        },
        C: {
          en: 'The computer still works, but performs inefficiently.',
          zh: '电脑仍能运转，只是效率低下，并没有彻底停止工作。',
        },
        D: {
          en: 'Clutter keeps extra files, it does not erase them.',
          zh: '杂乱是将文件堆积起来，而非把文件抹除。',
        },
      },
    },
  },

  {
    id: 177,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_173_177',
    question: 'Which documents does the software leave in your computer?',
    options: {
      A: 'Duplicate files',
      B: 'Current and routine files',
      C: 'Files from last year',
      D: 'Files others have sent you',
    },
    correctAnswer: 'B',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'Paragraph 3 states: "Kleanit makes sure that the only files in my computer are files that relate to my current projects or routine tasks."',
      chinese:
        '正确答案为B。第三段最后一句明确指出：“Kleanit确保我电脑中仅保留与当前项目或日常任务相关的文件（relate to my current projects or routine tasks）。”',
      incorrect: {
        A: {
          en: 'Duplicate files are unnecessary clutter that the software removes.',
          zh: '重复文件是被清理掉的无用文件。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Outdated files from last year are eliminated if no longer active.',
          zh: '去年的陈旧文件若不再使用会被清除。',
        },
        D: {
          en: 'Sent files that are obsolete are deleted.',
          zh: '他人发送的过期邮件同样会被删除。',
        },
      },
    },
  },

  {
    id: 178,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_178_180',
    question: "What is Ms. Wise's profession?",
    options: {
      A: 'Lawyer',
      B: 'University professor',
      C: 'School principal',
      D: 'Bar and restaurant manager',
    },
    correctAnswer: 'A',
    readingSkill: 'Inference / Detail',
    explanation: {
      correct:
        'Ms. Wise holds a Doctorate of Jurisprudence, represented self-insured employers, joined the law firm of Corman, Hagan, Wallis and White, represents corporate interests in libel suits, and belongs to the New York Bar Association.',
      chinese:
        '正确答案为A。怀斯女士拥有法学博士学位（Doctorate of Jurisprudence），曾代理雇主诉讼，是律师事务所合伙人，在诽谤诉讼中代理企业利益，并且是纽约律师协会成员，显然是一名律师。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'She speaks at continuing legal education, but is a practicing partner at a law firm, not a university professor.',
          zh: '她在法律教育研讨会上发言，但本职工作是律所合伙人，而非大学教授。',
        },
        C: {
          en: 'The word "principal" in this context refers to a partner/equity director in a professional law firm, not an elementary or high school principal.',
          zh: '文中的“principal”指律师事务所的负责人/主要合伙人，并非学校校长。',
        },
        D: {
          en: '"Bar Association" is the professional association of lawyers, completely unrelated to beverage bars.',
          zh: '“Bar Association”是律师协会（Bar指法律辩护律师界），与酒吧或餐馆无关。',
        },
      },
    },
  },

  {
    id: 179,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_178_180',
    question: 'What is her highest educational degree?',
    options: {
      A: "Associate's degree",
      B: "Bachelor's degree",
      C: "Master's degree",
      D: 'Doctoral degree',
    },
    correctAnswer: 'D',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The opening sentence states she received "her BA degree from Arizona State University in 1980 and her Doctorate of Jurisprudence from Harvard University in 1987." A doctorate (J.D.) is a doctoral degree.',
      chinese:
        '正确答案为D。第一句指出她于1980年获得学士学位（BA degree），并于1987年获得哈佛大学法学博士学位（Doctorate of Jurisprudence）。博士学位（Doctoral degree）是其最高学历。',
      incorrect: {
        A: {
          en: 'An associate\'s degree is a two-year degree, lower than her bachelor\'s and doctorate.',
          zh: '副学士学位低于学士和博士。',
        },
        B: {
          en: 'She earned a BA, but later earned a doctorate, which is higher.',
          zh: '她获得了学士学位，但之后取得了更高的博士学位。',
        },
        C: {
          en: 'A master\'s degree is not mentioned; her advanced degree is a Doctorate.',
          zh: '文中未提及硕士学位，她直接获得了博士学位。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 180,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_178_180',
    question: 'What is she doing today?',
    options: {
      A: 'Taking the bar exam',
      B: 'Giving a talk',
      C: 'Buying a suit',
      D: 'Assisting at a trial',
    },
    correctAnswer: 'B',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The concluding sentence states: "The continuing education foundation of the New York Bar Association is pleased to have Ms. Wise speak to us today." "Speak to us" means giving a presentation or talk.',
      chinese:
        '正确答案为B。最后一句明确写道：“纽约律师协会继续教育基金会非常荣幸邀请怀斯女士今天向我们发表演讲（speak to us today）。”这对应作演讲/报告（Giving a talk）。',
      incorrect: {
        A: {
          en: 'She has been a practicing attorney and bar member for decades, not taking the exam.',
          zh: '她已是资深律师和律协成员，并非参加司法考试。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '"Libel suits" refers to legal lawsuits, not clothing suits.',
          zh: '文中的“libel suits”指诽谤诉讼案件，不是购买西装。',
        },
        D: {
          en: 'She is a guest speaker at an association meeting, not assisting in court.',
          zh: '她今天是在协会发表演讲，而非在法庭协助庭审。',
        },
      },
    },
  },

  {
    id: 181,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_181_185',
    question: 'How much would it cost to take the Keep Your Heart Healthy class if you registered on October 5?',
    options: {
      A: '$0',
      B: '$3',
      C: '$15',
      D: '$60',
    },
    correctAnswer: 'A',
    readingSkill: 'Cross-Document Synthesis',
    explanation: {
      correct:
        'The advertisement states: "Workshops are free unless otherwise noted." Only the October 12 Meals workshop has an asterisk indicating a $10 fee. Furthermore, the $3 fee applies strictly to "same-day registration". The class is on October 8, so registering on October 5 is advance registration and costs $0.',
      chinese:
        '正确答案为A。广告明确说明：“除另有注明外，工作坊全部免费（Workshops are free unless otherwise noted）。”仅有10月12日的烹饪班有星号标注收取10美元材料费。此外，3美元费用仅针对“活动当天报名”（same-day registration）。该讲座在10月8日举行，10月5日属于提前报名，因此费用为0美元。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '$3 is the same-day registration fee, not applicable when registering 3 days in advance.',
          zh: '3美元是活动当天现场报名费，提前3天报名无需支付。',
        },
        C: {
          en: '15 is the number of participants who attended this session, not a dollar fee.',
          zh: '15是参加该讲座的人数，并非报名费金额。',
        },
        D: {
          en: '$60 was the total sum of same-day fees collected from all attendees in the report.',
          zh: '60美元是所有活动当天收取的现场报名费总和。',
        },
      },
      learningTip: {
        en: 'In double-passage questions, always cross-reference dates: compare the date of the event in Document 1 with the registration date asked in the question.',
        zh: '双篇阅读常考日期比对：对比文档1中的活动举行日（10月8日）与题干中的报名日（10月5日），确认是否属于提前报名。',
      },
    },
  },

  {
    id: 182,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_181_185',
    question: 'What can you buy at a workshop?',
    options: {
      A: 'Exercise clothes',
      B: 'Adhesive tape',
      C: 'Recipes',
      D: 'Shoes',
    },
    correctAnswer: 'C',
    readingSkill: 'Paraphrase / Detail',
    explanation: {
      correct:
        'Paragraph 2 of the advertisement announces: "We will sell cookbooks, tapes, and DVDs." Cookbooks are collections of recipes.',
      chinese:
        '正确答案为C。广告第二段说明：“我们现场将出售烹饪书、录音带和DVD（cookbooks, tapes, and DVDs）。”烹饪书（cookbooks）即包含食谱（recipes）。',
      incorrect: {
        A: {
          en: 'The flyer asks participants to wear comfortable shoes, but doesn\'t sell clothes.',
          zh: '传单仅建议穿舒适的鞋，并未出售运动服。',
        },
        B: {
          en: 'The tapes sold are audio/video cassette tapes, not adhesive scotch tape.',
          zh: '出售的tapes是录音带/录像带，而非胶带（adhesive tape）。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Attendees are told to wear comfortable shoes, not to purchase shoes there.',
          zh: '提示提醒大家穿舒适的鞋前去，现场不出售鞋子。',
        },
      },
    },
  },

  {
    id: 183,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_181_185',
    question: 'How many people paid the same-day registration fee?',
    options: {
      A: '20',
      B: '22',
      C: '60',
      D: '65',
    },
    correctAnswer: 'A',
    readingSkill: 'Mathematical Calculation / Cross-Document',
    explanation: {
      correct:
        'Document 1 states: "There is a $3 fee for same-day registration." Document 2 states: "We collected $60 in same-day registration fees." Dividing the total collected by the per-person fee gives $60 ÷ $3 = 20 people.',
      chinese:
        '正确答案为A。文档1说明“当天现场报名费为每人3美元（$3 fee for same-day registration）”；文档2汇报“我们总共收取了60美元的当天现场报名费（collected $60 in same-day registration fees）”。60美元 ÷ 3美元/人 = 20人。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '22 was the number of participants who attended the Low-Calorie Meals workshop.',
          zh: '22是低卡美食工作坊的实际出席人数。',
        },
        C: {
          en: '60 was the dollar amount in fees collected, not the number of people.',
          zh: '60是收取的报名费总金额（美元），并非人数。',
        },
        D: {
          en: '65 was the grand total number of attendees across all three workshops.',
          zh: '65是三场工作坊出席的总人数。',
        },
      },
    },
  },

  {
    id: 184,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_181_185',
    question: 'What does Mona suggest including in the advertisement?',
    options: {
      A: 'An e-mail address',
      B: 'An ingredients list',
      C: 'A telephone number',
      D: 'A complete schedule',
    },
    correctAnswer: 'C',
    readingSkill: 'Specific Information',
    explanation: {
      correct:
        'In paragraph 2 of her email, Mona specifically recommends: "Second, we should provide a telephone number in our advertisement. Some people don\'t have e-mail."',
      chinese:
        '正确答案为C。莫娜在邮件第二段明确提出建议：“其次，我们应当在广告中提供一个电话号码（provide a telephone number in our advertisement）。有些人没有电子邮箱。”',
      incorrect: {
        A: {
          en: 'An e-mail address (workshops@gh.com) was already included in the first advertisement.',
          zh: '原广告中已经包含了电子邮箱（workshops@gh.com）。',
        },
        B: {
          en: 'She suggests raising the Meals fee to cover ingredients, not publishing an ingredients list.',
          zh: '她建议上调费用以覆盖食材成本，而非公布食材清单。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'A complete schedule was already in the flyer; she discusses room assignment coordination.',
          zh: '原广告已有时间表，她提到的是改善场地排期安排。',
        },
      },
    },
  },

  {
    id: 185,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_181_185',
    question: 'What workshop will be offered for children?',
    options: {
      A: 'Keep Your Heart Healthy',
      B: 'Walk for Fitness',
      C: 'Delicious Low-Calorie Meals',
      D: 'Delicious Meals for Children',
    },
    correctAnswer: 'B',
    readingSkill: 'Cross-Document Synthesis',
    explanation: {
      correct:
        'Mona writes: "The October 10 workshop was very popular. I would like to offer a workshop on the same topic, but for children ages 5–14." Looking back at Document 1, the workshop held on October 10 is titled "Walk for Fitness".',
      chinese:
        '正确答案为B。莫娜在邮件最后一段写道：“10月10日的工作坊非常受欢迎。我希望能针对5至14岁的儿童开设同主题工作坊。”回到文档1查看日程，10月10日举办的工作坊正是“Walk for Fitness”（健身健步走）。',
      incorrect: {
        A: {
          en: 'Keep Your Heart Healthy took place on October 8, not October 10.',
          zh: '心脏健康工作坊举办于10月8日，而非10月10日。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Delicious Low-Calorie Meals took place on October 12.',
          zh: '低卡美食工作坊举办于10月12日。',
        },
        D: {
          en: 'This is a fabricated title not found in the documents.',
          zh: '此为虚构选项，原文中并无此名称。',
        },
      },
    },
  },

  {
    id: 186,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_186_190',
    question: 'What qualification does Jon have that will give him preference over other applicants?',
    options: {
      A: 'His mother works for the company.',
      B: 'He is majoring in business administration.',
      C: 'He speaks Korean.',
      D: 'He took classes in electrical engineering.',
    },
    correctAnswer: 'A',
    readingSkill: 'Cross-Document Synthesis',
    explanation: {
      correct:
        'The bulletin explicitly establishes: "First preference will be given to employees\' children and relatives." In his email, Jon states: "My mother, who works as an electrical engineer at your company, told me about this opportunity."',
      chinese:
        '正确答案为A。公告中明确规定：“员工的子女和亲属将获得首要优先权（First preference will be given to employees\' children and relatives）。”乔恩在信中明确写道：“我的母亲在贵公司担任电气工程师，她告诉了我这个机会。”因此其母亲为公司员工赋予了他优先资格。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'His major is business administration, but the bulletin doesn\'t give preference for that major (in fact, Jon asks if business majors are even eligible).',
          zh: '商学专业并不是优先条件，乔恩甚至在信中询问商学院学生是否有资格申请。',
        },
        C: {
          en: 'Speaking Korean qualifies him for Global Communications, but the document reserves "First preference" specifically for employees\' relatives.',
          zh: '会讲韩语让他可以被分入全球交流项目，但公告中享有“优先权（preference）”的是员工亲属。',
        },
        D: {
          en: 'His mother is an electrical engineer, not Jon.',
          zh: '电气工程师是他母亲的职业，而非乔恩所上的课程。',
        },
      },
    },
  },

  {
    id: 187,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_186_190',
    question: 'How long does Jon have to complete his application?',
    options: {
      A: '2 weeks',
      B: '3 weeks',
      C: '2 months',
      D: '12 months',
    },
    correctAnswer: 'A',
    readingSkill: 'Cross-Document Date Calculation',
    explanation: {
      correct:
        'Jon sent his email on "Friday, April 1". The bulletin specifies: "The application deadline is April 15." The time remaining between April 1 and April 15 is 14 days, exactly 2 weeks.',
      chinese:
        '正确答案为A。乔恩发信的日期是4月1日星期五（Friday, April 1），而招聘简章中注明的截止日期是4月15日（April 15）。从4月1日到4月15日相隔14天，正好是2周（2 weeks）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: '3 weeks would be 21 days, extending past the April 15 cutoff.',
          zh: '3周为21天，超出了4月15日的截止日期。',
        },
        C: {
          en: '2 months is the minimum duration of the internship itself, not the application period.',
          zh: '2个月是实习期的最短持续时间，并非申请剩余时间。',
        },
        D: {
          en: '12 months refers to the degree completion timeframe for recent graduates.',
          zh: '12个月是指毕业不到一年的应届毕业生资格要求。',
        },
      },
    },
  },

  {
    id: 188,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_186_190',
    question: 'What does Jon want to study in graduate school?',
    options: {
      A: 'Business administration',
      B: 'Information technology',
      C: 'Communications',
      D: 'Korean language',
    },
    correctAnswer: 'B',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'Jon writes: "Although my major is business administration, I am also interested in information technology and am considering studying this subject in graduate school." "This subject" refers back to information technology.',
      chinese:
        '正确答案为B。乔恩在邮件第二段明确写道：“虽然我的专业是工商管理，但我对信息技术（information technology）也很感兴趣，并正在考虑在研究生院攻读这一学科（considering studying this subject in graduate school）。”',
      incorrect: {
        A: {
          en: 'Business administration is his current undergraduate major, not what he plans to switch to in graduate school.',
          zh: '工商管理是他目前的本科专业，而非计划在研究生院深造的方向。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Global Communications is a project at Excel Company, not his planned academic field.',
          zh: '全球交流是公司的实习项目名称，并非他计划攻读的学科。',
        },
        D: {
          en: 'He speaks Korean and visits relatives to practice, but does not plan a graduate degree in it.',
          zh: '他会讲韩语并探亲练习，但没有计划攻读韩语研究生。',
        },
      },
    },
  },

  {
    id: 189,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_186_190',
    question: 'What project will Jon probably be assigned to work on?',
    options: {
      A: 'Networking',
      B: 'Business Software',
      C: 'Computer Maintenance',
      D: 'Global Communications',
    },
    correctAnswer: 'D',
    readingSkill: 'Cross-Document Synthesis',
    explanation: {
      correct:
        'Document 1 states: "Applicants who speak a second language are encouraged to apply and will be assigned to our special Global Communications project." In Document 2, Jon mentions he will "brush up on my second language, Korean."',
      chinese:
        '正确答案为D。文档1说明：“掌握第二语言的申请者将获鼓励申请，并将被分配到我们特别的全球交流项目（Global Communications project）。”文档2中乔恩提到自己要去探亲并温习第二语言韩语（second language, Korean），因此他将被分配到该项目。',
      incorrect: {
        A: {
          en: 'Networking is a standard project for other interns.',
          zh: '网络是常规项目之一，但掌握外语者有专门分配。',
        },
        B: {
          en: 'Business Software is another standard project.',
          zh: '商业软件为常规项目。',
        },
        C: {
          en: 'Computer Maintenance is another standard project.',
          zh: '计算机维护为常规项目。',
        },
        D: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
      },
    },
  },

  {
    id: 190,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_186_190',
    question: 'When does Jon want to start his internship?',
    options: {
      A: 'May 1',
      B: 'June 1',
      C: 'June 5',
      D: 'September 4',
    },
    correctAnswer: 'C',
    readingSkill: 'Cross-Document Date Calculation',
    explanation: {
      correct:
        'Document 1 states: "The first internships will begin on June 1." In Document 2, Jon writes: "I won\'t return from my trip until four days after the first internships begin. Could I start my internship then?" Four days after June 1 is June 5.',
      chinese:
        '正确答案为C。文档1指出第一批实习于6月1日开始（June 1）。文档2中乔恩写道：“我直到第一批实习开始后4天才能回国。我可以在那时开始实习吗？”6月1日加上4天即为6月5日（June 5）。',
      incorrect: {
        A: {
          en: 'In May, Jon is departing on his trip to Korea.',
          zh: '5月是乔恩动身去韩国的时间。',
        },
        B: {
          en: 'June 1 is when the normal program begins, but Jon will still be traveling.',
          zh: '6月1日是常规启动日，但当时乔恩尚未返程。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Beginning of September is when Jon must finish, not when he starts.',
          zh: '9月初是他可以工作到的结束时间，不是开始时间。',
        },
      },
    },
  },

  {
    id: 191,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_191_195',
    question: "What is Ms. Lee's first name?",
    options: {
      A: 'Jamie',
      B: 'Angie',
      C: 'Marcia',
      D: 'Wei',
    },
    correctAnswer: 'C',
    readingSkill: 'Cross-Document Inference',
    explanation: {
      correct:
        'In the fax, Jamie Wu informs Angie: "I will be out on a business trip, but you can communicate with my assistant, Marcia. You know her." When Angie calls about the problem while Jamie is away, the telephone message is taken FOR "Ms. Lee". Therefore, the assistant Ms. Lee is Marcia.',
      chinese:
        '正确答案为C。传真中杰米·吴（Jamie Wu）告诉安吉：“我将出差，但您可以与我的助手玛西亚（Marcia）沟通。您认识她。”当安吉致电反映订单问题时，电话便笺上的收件人正是“李女士（Ms. Lee）”。这表明李女士的名字就是玛西亚（Marcia）。',
      incorrect: {
        A: {
          en: 'Jamie is Jamie Wu, the account representative who is away on a business trip.',
          zh: '杰米是出差在外的客户代表吴杰米（Jamie Wu）。',
        },
        B: {
          en: 'Angie is Angie Shan, the client who placed the order and phoned in the complaint.',
          zh: '安吉是下单并致电投诉的客户安吉·单（Angie Shan）。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Wei is the colleague who took down the phone message ("RECEIVED BY Wei").',
          zh: '魏是代接电话并写下便笺的同事（RECEIVED BY Wei）。',
        },
      },
    },
  },

  {
    id: 192,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_191_195',
    question: 'When did the first box arrive?',
    options: {
      A: 'April 12',
      B: 'April 14',
      C: 'April 16',
      D: 'April 17',
    },
    correctAnswer: 'C',
    readingSkill: 'Cross-Document Date Calculation',
    explanation: {
      correct:
        'Document 1 states the expected delivery date: "You should receive them by April 14." Document 2 reports: "She received items 1, 2, and 4, but they arrived two days after the expected date." Two days after April 14 is April 16.',
      chinese:
        '正确答案为C。文档1中传真预计送达日期为4月14日（April 14）。文档2的电话便笺记录：“她收到了商品1、2和4，但它们在预计日期两天后才送达（two days after the expected date）。”4月14日之后的两天即为4月16日。',
      incorrect: {
        A: {
          en: 'April 12 is the date the fax was transmitted.',
          zh: '4月12日是发出传真封面的日期。',
        },
        B: {
          en: 'April 14 was the originally promised delivery date.',
          zh: '4月14日是原本预计的送达日。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'April 17 is the date Angie placed the telephone call.',
          zh: '4月17日是安吉打电话投诉的日期。',
        },
      },
    },
  },

  {
    id: 193,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_191_195',
    question: 'Which of the following items has Ms. Shan not yet received?',
    options: {
      A: 'Headphones',
      B: 'Monitors',
      C: 'PC case',
      D: 'Hard drives',
    },
    correctAnswer: 'A',
    readingSkill: 'Cross-Document Detail',
    explanation: {
      correct:
        'The fax lists: Item 1: LCD Monitors, Item 2: PC Case, Item 3: Keyboards, Item 4: Hard Drives, Item 5: Headphones. The phone message states: "She received items 1, 2, and 4... The other items have not arrived." The items not yet arrived are 3 (Keyboards) and 5 (Headphones). Among the answer choices, Headphones is listed.',
      chinese:
        '正确答案为A。传真列出的商品为：1号显示器，2号机箱，3号键盘，4号硬盘，5号耳机。电话便笺指明：“她收到了1、2和4号商品……其余商品尚未送达。”未送达的商品是3号（键盘）和5号（耳机）。选项中对应的是耳机（Headphones）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Item 1 (Monitors) was received in the first box.',
          zh: '1号显示器已在第一个包裹中收到。',
        },
        C: {
          en: 'Item 2 (PC case) was received, though in the wrong color.',
          zh: '2号机箱已收到，只是颜色发错。',
        },
        D: {
          en: 'Item 4 (Hard drives) was received, though wrong capacity.',
          zh: '4号硬盘已收到，只是容量不对。',
        },
      },
    },
  },

  {
    id: 194,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_191_195',
    question: 'What size hard drive did Ms. Shan order?',
    options: {
      A: '100 GB',
      B: '200 GB',
      C: '300 GB',
      D: '400 GB',
    },
    correctAnswer: 'C',
    readingSkill: 'Cross-Document Math Synthesis',
    explanation: {
      correct:
        'The shipped item in Document 1 is: "Item 4: 4 200 GB Hard Drives". The phone message in Document 2 notes: "The hard drives are also not as she ordered them. They are 100 GB less than she wanted." Since the 200 GB drives sent were 100 GB less than what she requested, she wanted 200 GB + 100 GB = 300 GB.',
      chinese:
        '正确答案为C。文档1中发货清单记录为：“Item 4: 4 200 GB Hard Drives”（发出了200GB硬盘）。文档2的电话便笺记录：“硬盘容量比她要求的少了100GB（100 GB less than she wanted）。”既然发来的200GB比她要的少100GB，说明她原本订购的容量是200 + 100 = 300 GB。',
      incorrect: {
        A: {
          en: '100 GB is the discrepancy, not the total ordered size.',
          zh: '100 GB是短少的差额，并非订购容量。',
        },
        B: {
          en: '200 GB is what was mistakenly sent, not what was ordered.',
          zh: '200 GB是实际误发货的容量。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: '400 GB miscalculates the 4 hard drives mentioned as capacity.',
          zh: '400 GB误将数量4个当成了容量运算。',
        },
      },
    },
  },

  {
    id: 195,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_191_195',
    question: 'What color PC case did Ms. Shan want?',
    options: {
      A: 'Black',
      B: 'Ivory',
      C: 'Blue',
      D: 'White',
    },
    correctAnswer: 'C',
    readingSkill: 'Detail',
    explanation: {
      correct:
        'The telephone message directly records: "The PC case received is the wrong color; she ordered blue." (The fax had sent Black).',
      chinese:
        '正确答案为C。电话便笺明确记录：“收到的电脑机箱颜色错了，她订购的是蓝色（she ordered blue）。”（传真发货清单上发的是黑色Black）。',
      incorrect: {
        A: {
          en: 'Black is the incorrect color that was delivered.',
          zh: '黑色是误送达的错误颜色。',
        },
        B: {
          en: 'Ivory is the color of the keyboards listed in the fax.',
          zh: '象牙白是发货单上键盘的颜色。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'White is not mentioned for the PC case.',
          zh: '机箱未提及白色。',
        },
      },
    },
  },

  {
    id: 196,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_196_200',
    question: "What is the landlord's name?",
    options: {
      A: 'Mr. Connors',
      B: 'Mr. Stanley',
      C: 'Mr. Stavros',
      D: 'Mr. Kama',
    },
    correctAnswer: 'B',
    readingSkill: 'Cross-Document Synthesis',
    explanation: {
      correct:
        'In email 1, Mark asks: "1. Rent: Can we get a better price from our landlord?... Ask him for a 10% reduction..." In email 2, Alana responds: "1. I talked to Mr. Stanley. The amount of reduction is too high for him. However, he is willing to reduce the rent by half of what you request." This identifies Mr. Stanley as the landlord.',
      chinese:
        '正确答案为B。在第一封邮件中，马克指示：“关于租金：我们能从房东那里拿到更优惠的价格吗？向他提出如果签三年减租10%。”在第二封回复邮件中，阿兰娜回答：“1. 我和斯坦利先生（Mr. Stanley）谈过了。减租幅度对他来说太高了，但他愿意按你要求的一半予以减租。”由此可知房东的名字是Mr. Stanley。',
      incorrect: {
        A: {
          en: 'Mr. Connors (Mark Connors) is the company manager who initiated the expense review.',
          zh: '康纳斯先生（Mark Connors）是发起降本审查的公司经理。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: 'Stavros is one of the company\'s employees sharing an office room.',
          zh: '斯塔夫罗斯是公司里将合用办公室的员工之一。',
        },
        D: {
          en: 'Kama is another employee sharing an office room.',
          zh: '卡玛是另一位合用办公室的员工。',
        },
      },
    },
  },

  {
    id: 197,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_196_200',
    question: "How many rooms will Mark's company continue to use for its own business?",
    options: {
      A: 'One',
      B: 'Two',
      C: 'Four',
      D: 'Five',
    },
    correctAnswer: 'C',
    readingSkill: 'Cross-Document Math Synthesis',
    explanation: {
      correct:
        'Mark asks: "Do we need all five rooms? Can we rent one to another company?" Alana agrees: "Stavros and Kama have different schedules and can share a room, so we can rent one to another company." Subletting 1 of their 5 existing rooms leaves 5 - 1 = 4 rooms for their own business.',
      chinese:
        '正确答案为C。马克在信中询问：“我们真的需要全部五间房间吗？能不能把其中一间转租给其他公司？”阿兰娜确认：“斯塔夫罗斯和卡玛可以共用一间房间，所以我们可以把一间转租给另一家公司。”公司原本有5间房，出租掉1间后，继续供自己业务使用的房间数为 5 - 1 = 4间。',
      incorrect: {
        A: {
          en: 'One is the number of rooms being rented out to the neighboring mailing company.',
          zh: '1间是准备转租给隔壁邮寄公司的房间数。',
        },
        B: {
          en: 'Two is the number of employees (Stavros and Kama) sharing a room.',
          zh: '2是合用一个房间的员工人数。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Five is the total number of rooms they originally had before subletting one.',
          zh: '5间是公司原有的房间总数，转租一间后不再全部自用。',
        },
      },
    },
  },

  {
    id: 198,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_196_200',
    question: 'Why is it convenient for Stavros and Kama to use the same room?',
    options: {
      A: 'They need little space',
      B: 'They share equipment',
      C: 'They work at different times',
      D: 'They work with the same clients',
    },
    correctAnswer: 'C',
    readingSkill: 'Paraphrase / Detail',
    explanation: {
      correct:
        'In point 2 of her email, Alana writes: "Stavros and Kama have different schedules and can share a room". Having "different schedules" means they work at different times.',
      chinese:
        '正确答案为C。阿兰娜在邮件第二条中说明：“斯塔夫罗斯和卡玛的工作时间表不同（have different schedules），可以共用一间房间。”“different schedules”直接对应“在不同时间工作（work at different times）”。',
      incorrect: {
        A: {
          en: 'Their physical space needs are not mentioned.',
          zh: '信中未提及他们对空间大小的需求。',
        },
        B: {
          en: 'Sharing equipment is not cited.',
          zh: '未提及他们共用设备。',
        },
        C: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        D: {
          en: 'Serving identical clients is not mentioned.',
          zh: '未提及他们接待相同客户。',
        },
      },
    },
  },

  {
    id: 199,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_196_200',
    question: 'What temperature does the utility company recommend for the office?',
    options: {
      A: '66 degrees',
      B: '68 degrees',
      C: '70 degrees',
      D: '72 degrees',
    },
    correctAnswer: 'B',
    readingSkill: 'Cross-Document Math Synthesis',
    explanation: {
      correct:
        'In email 1, Mark states: "Also, our office temperature is 70 degrees. Can we lower it and still be comfortable?" In email 2, Alana reports: "They [the utility company] also said that it will make a difference if we set the thermostat two degrees lower." Setting the thermostat two degrees lower than 70 degrees yields 70 - 2 = 68 degrees.',
      chinese:
        '正确答案为B。在第一封邮件中，马克提到：“此外，我们办公室现在的温度是70度（70 degrees）。我们能否调低一些？”阿兰娜在回复中转述电力能源公司的建议：“他们说如果我们将温控器调低两度（two degrees lower），效果就会很明显。”从70度调低两度即为 70 - 2 = 68度（68 degrees）。',
      incorrect: {
        A: {
          en: '66 degrees would be 4 degrees lower.',
          zh: '66度相当于调低了4度。',
        },
        B: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        C: {
          en: '70 degrees is the current temperature before any reduction.',
          zh: '70度是办公室当前的温度。',
        },
        D: {
          en: '72 degrees is higher than current temperature, increasing utility costs.',
          zh: '72度是调高温度，会增加开支。',
        },
      },
    },
  },

  {
    id: 200,
    part: 7,
    type: 'reading_comprehension',
    passageId: 'part7_196_200',
    question: 'What cost-saving idea does Alana suggest?',
    options: {
      A: 'Turning off lights and computers',
      B: 'Giving everyone a different schedule',
      C: 'Calling the utility company',
      D: 'Renting out a room',
    },
    correctAnswer: 'A',
    readingSkill: 'Detail / Distinguishing Ideas',
    explanation: {
      correct:
        'In response to Mark\'s request for other cost-saving ideas ("4. Other ideas: Can you think of another way to save money?"), Alana contributes her own new recommendation: "4. Finally, to reduce our electric bills, we should encourage all staff to turn off their computers and office lights at the end of the day."',
      chinese:
        '正确答案为A。在回应马克征求新点子时（“能否想到其他省钱方法？”），阿兰娜在第4条提出了自己的建议：“最后，为了减少电费支出，我们应当鼓励全体员工在下班时关闭电脑和办公室灯光（turn off their computers and office lights）。”（转租房间是马克在邮件1中提出的想法）。',
      incorrect: {
        A: {
          en: 'Correct answer.',
          zh: '正确答案。',
        },
        B: {
          en: 'Stavros and Kama already had different schedules; this was an existing condition, not a newly instituted policy.',
          zh: '同事时间表不同是既成事实，并非新提出的节约成本措施。',
        },
        C: {
          en: 'Calling the utility company was an action taken to investigate insulation, not a cost-saving measure itself.',
          zh: '致电能源公司只是调查措施，并非节约开支的方案本身。',
        },
        D: {
          en: 'Renting out a room was Mark\'s idea from the first email, not Alana\'s newly proposed idea.',
          zh: '转租房间是马克在第一封邮件中率先提出的建议，并非阿兰娜提出的新想法。',
        },
      },
      learningTip: {
        en: 'Watch out for attribution in correspondence questions: differentiate between ideas proposed by the sender (Mark) vs. ideas originated by the respondent (Alana).',
        zh: '书信阅读题注意归属辨析：注意区分哪些是发信人（Mark）提出的初设想法，哪些是回信人（Alana）自己新提出的构想。',
      },
    },
  },
];
