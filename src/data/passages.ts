import { Passage } from '../types/toeic';

export const PASSAGES: Record<string, Passage> = {
  part6_141_143: {
    id: 'part6_141_143',
    part: 6,
    title: 'Questions 141–143 refer to the following memorandum.',
    questionRange: [141, 143],
    questions: [141, 142, 143],
    documents: [
      {
        type: 'memo',
        title: 'MEMORANDUM',
        meta: {
          From: 'Melissa Wright, Office Manager',
          To: 'All Staff',
          Re: 'Conference room use',
        },
        content: [
          'Please take a moment to [141] these guidelines regarding the use of the conference room.',
          '1. Any staff member may reserve the conference room for a meeting, workshop, or other work-related event. My assistant, Joe Smith, is in charge of the conference room schedule. Please contact him to reserve a time to use the room. To ensure that you get the time slot you want, we suggest doing this at least one week [142].',
          '2. Joe can also help you with computers, projectors, and any other equipment you may need while using the conference room. Please let him know what equipment you will need at the time you reserve the room.',
          '3. The conference room is used by many groups of people throughout the week. Please be considerate of others and straighten [143] the room when you have finished using it. Make sure to place all chairs around the table, wipe the whiteboard clean, and return any equipment to the storage closet.',
        ],
      },
    ],
  },

  part6_144_146: {
    id: 'part6_144_146',
    part: 6,
    title: 'Questions 144–146 refer to the following e-mail.',
    questionRange: [144, 146],
    questions: [144, 145, 146],
    documents: [
      {
        type: 'email',
        meta: {
          From: 'Theresa Schultz [Theresa@bbsb.com]',
          To: 'Daniel Lee [Dan@bbsb.com]',
          Sent: '10 October 20--, 9:10',
          Subject: 'Lunch arrangements',
        },
        content: [
          'I will be having a business lunch with Ms. Yu and Mr. Bao tomorrow. Please call the Fountainhead Restaurant and make reservations for three. [144] a table near the fountain. Anytime between noon and two is fine.',
          '[145] you have made the arrangements, please call Ms. Yu and Mr. Bao and let them know the time and place. Also, remind them to bring their copies of the annual report, as I plan to go over it with them during lunch.',
          "I'll be back from my trip late tonight. I'd like you to type up the notes from my trip tomorrow morning, if possible. My supervisor would like to see them before next week's board meeting, so I want to hand them [146] before the end of the week.",
          'Thanks for everything.',
        ],
      },
    ],
  },

  part6_147_149: {
    id: 'part6_147_149',
    part: 6,
    title: 'Questions 147–149 refer to the following notice.',
    questionRange: [147, 149],
    questions: [147, 148, 149],
    documents: [
      {
        type: 'notice',
        title: "SHOPPERS' WORLD",
        subtitle: 'Returned Items Policy',
        content: [
          'We must receive returned items within 30 days of the date of purchase. Please make sure that the receipt is included and check that the price tags are still attached. Items may [147] for cash or store credit.',
          'If the customer [148] the receipt but the price tags are still attached and the item is in good condition, you may offer the customer store credit only. Items that are damaged or dirtied in any way or that have missing price tags cannot be returned.',
          'If you have any questions [149] this policy or if you need help processing a return, please contact your supervisor.',
        ],
      },
    ],
  },

  part6_150_152: {
    id: 'part6_150_152',
    part: 6,
    title: 'Questions 150–152 refer to the following notice.',
    questionRange: [150, 152],
    questions: [150, 151, 152],
    documents: [
      {
        type: 'notice',
        title: 'BOOK READING & SIGNING EVENT',
        content: [
          'Dr. I. M. Lee, world-renowned [150] on international economics, will be reading from his newest book, Money in the New Millennium, at the Central Bookstore on Wednesday, October 14. Dr. Lee has recently returned from a tour of Asia, [151] he met with leading regional economic experts. After his reading, he will share highlights from his trip and discuss Asia’s role in the new world economy. Money in the New Millennium and other titles by Dr. Lee will be on sale after his talk, and Dr. Lee will be available to sign the books. [152] to this event is free, but early arrival is recommended in order to secure a seat.',
        ],
      },
    ],
  },

  part7_153_154: {
    id: 'part7_153_154',
    part: 7,
    title: 'Questions 153–154 refer to the following form.',
    questionRange: [153, 154],
    questions: [153, 154],
    documents: [
      {
        type: 'form',
        title: 'MOVING?',
        customFormat: 'form_card',
        content: [
          'Fill out this card and mail it to the businesses and publications who send you mail. For best results, mail this card at least one month before your moving date.',
          'Date: April 12',
          'Your Name: John Carpenter',
          'Old Address: 268 Monroe Highway, Salem, South Carolina 29702',
          'New Address: 764 Alston Street, Columbia, South Carolina 29805',
          'New address is effective: immediately',
        ],
      },
    ],
  },

  part7_155_156: {
    id: 'part7_155_156',
    part: 7,
    title: 'Questions 155–156 refer to the following advertisement.',
    questionRange: [155, 156],
    questions: [155, 156],
    documents: [
      {
        type: 'advertisement',
        title: 'Now, When You Purchase a Wizard Foreign Language Program, We’ll Send You A FREE GIFT!',
        content: [
          "You've seen the ads on TV. Now it's time to get it for yourself. Order a full Wizard Language Program at the low, low price of $450, and we'll send you an electronic bilingual dictionary ABSOLUTELY FREE. This indispensable aid to foreign language learning contains thousands of words, yet is small enough to carry in your pocket or purse.",
          'What a great way to enjoy your new language! Order now while supplies last. (Retail value $29.95)',
          'Call 1-800-555-4980 today.',
        ],
      },
    ],
  },

  part7_157_159: {
    id: 'part7_157_159',
    part: 7,
    title: 'Questions 157–159 refer to the following announcement.',
    questionRange: [157, 159],
    questions: [157, 158, 159],
    documents: [
      {
        type: 'announcement',
        title: 'Legal Education Seminars presents . . .',
        subtitle: 'WORKERS’ COMPENSATION: ISSUES & STRATEGIES',
        meta: {
          Date: 'Thursday, February 1',
          Location: 'The Platinum Hotel, Omaha, NE',
        },
        content: [
          'Our experienced faculty will:',
          '• alert you to key changes in legislation, regulations, and case law;',
          '• take you from the basics through advanced areas of Workers’ Compensation law;',
          '• show you how to anticipate new trends in defense; and',
          '• give you many practical strategies.',
          'Visit www.les.com for complete registration information. Registration ends March 10.',
        ],
      },
    ],
  },

  part7_160_161: {
    id: 'part7_160_161',
    part: 7,
    title: 'Questions 160–161 refer to the following advertisement.',
    questionRange: [160, 161],
    questions: [160, 161],
    documents: [
      {
        type: 'advertisement',
        title: "The Office Writer's Handbook",
        content: [
          'The Office Writer’s Handbook is a complete and indispensable reference work for anyone who has to write for business purposes. The rules of English grammar are accurately and thoroughly explained along with examples of how to apply them to your writing. The chapter on punctuation provides concise explanations and illustrative examples. Also included are approved formats for business correspondence, reports, and charts. Each chapter ends with a set of practice exercises for reinforcement. A special section covers the most common writing mistakes and shows you how to avoid them. The Office Writer’s Handbook is available in most bookstores, or order yours online at www.referenceworks.com. Both print and electronic versions are available.',
        ],
      },
    ],
  },

  part7_162_164: {
    id: 'part7_162_164',
    part: 7,
    title: 'Questions 162–164 refer to the following letter.',
    questionRange: [162, 164],
    questions: [162, 163, 164],
    documents: [
      {
        type: 'letter',
        title: 'GARDENS BY HOK',
        subtitle: 'P.O. Box 687, 1103 Lisbon, Portugal',
        meta: {
          Date: 'September 8, 20--',
          Recipient: 'Guy Williams, Landscape Design Magazine, Ottho Heldringstraat 2, 1066 AZ Amsterdam, The Netherlands',
        },
        content: [
          'Dear Mr. Williams,',
          'Thank you for sending the advertising information we requested. After careful consideration, we have decided not to place an ad in the December issue. Because of the nature of our business, we generally spend more of our advertising dollars during the warmer months of the year. We will probably, however, want to advertise with you in your next issue in March in anticipation of the spring rush. We will be in touch with you closer to that time to discuss pricing, placement, etc. Thank you for your assistance.',
          'Sincerely yours,',
          'Sov Hok',
        ],
      },
    ],
  },

  part7_165_168: {
    id: 'part7_165_168',
    part: 7,
    title: 'Questions 165–168 refer to the following report.',
    questionRange: [165, 168],
    questions: [165, 166, 167, 168],
    documents: [
      {
        type: 'report',
        title: 'Agricultural Export Report',
        content: [
          'Food products account for the largest portion of our agricultural exports, although it is traditionally thought that pesticides and other agricultural chemicals are in the lead. The value of food product exports has increased in recent years, with the increased interest among consumers in more exotic food products. Our growers have responded to the demand, and we have established one million hectares as a special development region for these products. Our low nighttime temperatures, combined with the fact that we have little rain and plenty of sun during the daytime, gives us a competitive edge over growers in other regions.',
          'Our exports of native tropical fruits and root vegetables have increased from less than 2% to more than 5% of total agricultural exports in the past two years, and growth is expected to continue. But we continue to anticipate new food trends and will be ready to respond as the market changes.',
        ],
      },
    ],
  },

  part7_169_172: {
    id: 'part7_169_172',
    part: 7,
    title: 'Questions 169–172 refer to the following magazine article.',
    questionRange: [169, 172],
    questions: [169, 170, 171, 172],
    documents: [
      {
        type: 'article',
        title: 'Staying Active on the Road',
        content: [
          'Business travelers usually find that they have little time to exercise, especially when their schedules are suddenly changed by late meetings or late flights. But everyone should get some exercise. There are ways to make exercise part of your day even when you cannot make it to the hotel’s exercise room. Experts suggest stretching your neck, arms, back, and shoulders while sitting in your airplane seat. At your hotel, you can stretch your legs and abdominal muscles. Then you can run in place for a good aerobic workout.',
          'Exercise is not just for your body. It is for your mind as well. The mind-body connection has long been established by professional medical associations. People who exercise regularly perform more efficiently at work and perform more effectively than their colleagues who don’t exercise. So to get ahead of everyone else, try to exercise every day, even when traveling.',
        ],
      },
    ],
  },

  part7_173_177: {
    id: 'part7_173_177',
    part: 7,
    title: 'Questions 173–177 refer to the following fax.',
    questionRange: [173, 177],
    questions: [173, 174, 175, 176, 177],
    documents: [
      {
        type: 'fax',
        title: 'FAX TRANSMISSION',
        subtitle: 'Kleanit — Bravo Murillo, 320, Portal 4-20, 28020 Madrid, Spain',
        content: [
          'Dear fellow computer user,',
          "A word of advice: It's time to clean out your computer. If you're like me, you don't remove documents that are no longer necessary. You never know when you may need a file so you don't throw it away, right? E-mail messages pile up, too, creating a huge warehouse of obscure file names.",
          "I found that a simple software package called Kleanit gets rid of everything I don't need and keeps the things I do. I was so impressed with this package that I decided to share it with others.",
          'No longer do those bothersome extra messages and computer files waste processing time and cause my computer to perform inefficiently. Kleanit makes sure that the only files in my computer are files that relate to my current projects or routine tasks.',
          "Why don't you try it? I'll send you a trial copy and if you aren't satisfied, you can send it back. If you are as impressed as I am, and you will be, send your check for $32.50 at your earliest convenience.",
          'Have a nice day.',
          'Robert Horstma, CEO',
        ],
      },
    ],
  },

  part7_178_180: {
    id: 'part7_178_180',
    part: 7,
    title: 'Questions 178–180 refer to the following introduction.',
    questionRange: [178, 180],
    questions: [178, 179, 180],
    documents: [
      {
        type: 'introduction',
        title: 'Speaker Introduction',
        content: [
          'Darla K. Wise received her BA degree from Arizona State University in 1980 and her Doctorate of Jurisprudence from Harvard University in 1987.',
          'She represented self-insured employers in central New York for five years before joining the law firm of Corman, Hagan, Wallis and White, where she has been a principal since 1990. Her practice emphasizes the representation of corporate interests in libel suits.',
          'Ms. Wise is a member of the New York Bar Association and the New York Trial Lawyers Association.',
          'The continuing education foundation of the New York Bar Association is pleased to have Ms. Wise speak to us today.',
        ],
      },
    ],
  },

  part7_181_185: {
    id: 'part7_181_185',
    part: 7,
    title: 'Questions 181–185 refer to the following advertisement and e-mail.',
    questionRange: [181, 185],
    questions: [181, 182, 183, 184, 185],
    documents: [
      {
        type: 'advertisement',
        title: 'GENERAL HOSPITAL — UPCOMING WORKSHOPS',
        content: [
          '• October 8: Keep Your Heart Healthy',
          '• October 10: Walk for Fitness',
          '• October 12: Delicious Low-Calorie Meals*',
          'Workshops are free unless otherwise noted. All workshops are held from 10:00 A.M. until noon in Conference Room A. We welcome people ages 15 and up. Advance registration is recommended. E-mail workshops@gh.com to register. There is a $3 fee for same-day registration, which is permitted on a space-available basis.',
          'For the October 10 workshop, wear comfortable shoes. For all of the workshops, bring extra money if you would like to purchase any items. We will sell cookbooks, tapes, and DVDs.',
          '*This workshop has a $10 materials fee to cover the cost of ingredients. Participants will cook and eat a three-course meal.',
        ],
      },
      {
        type: 'email',
        title: 'Report on October Workshops',
        meta: {
          From: 'Mona Cappadona [Mona@gh.com]',
          To: 'Khalid Mahmod [Khalid@gh.com]',
          Sent: '10 November 20--, 11:25',
          Subject: 'Report on October Workshops',
        },
        content: [
          'The October workshops were very successful. All together 65 people attended. Fifteen people participated in Keep Your Heart Healthy, twice that number participated in Walk for Fitness, and 22 people showed up for Delicious Low-Calorie Meals. We collected $60 in same-day registration fees.',
          'I recommend that we offer these workshops again in January with a few minor changes. First, we need to increase the Meals workshop fee by $2. The fee we charged this last time didn’t quite cover the cost of the ingredients. Second, we should provide a telephone number in our advertisement. Some people don’t have e-mail. Third, we need to improve our scheduling. Someone scheduled our group and another group in the same room at the same time, and we had to move the October 8 workshop to Room C. Fortunately, it was available. The Meals workshop should meet in the kitchen.',
          'The October 10 workshop was very popular. I would like to offer a workshop on the same topic, but for children ages 5–14. Are you available on Friday morning to discuss this?',
        ],
      },
    ],
  },

  part7_186_190: {
    id: 'part7_186_190',
    part: 7,
    title: 'Questions 186–190 refer to the following bulletin and e-mail.',
    questionRange: [186, 190],
    questions: [186, 187, 188, 189, 190],
    documents: [
      {
        type: 'notice',
        title: 'Internship Program in Information Technology',
        content: [
          'We are starting an Internship Program in Information Technology. We will offer 10 internships for undergraduate and graduate students as well as for recent graduates who have finished their degrees within the last 12 months. All of the interns will receive an hourly salary plus a bonus at the end of the internship.',
          'The first internships will begin on June 1. They will last for a minimum of two months.',
          'Every intern will work on projects with a supervisor. These projects include Networking, Business Software, and Computer Maintenance—Crash Prevention. Applicants who speak a second language are encouraged to apply and will be assigned to our special Global Communications project.',
          'First preference will be given to employees’ children and relatives. The application deadline is April 15. Write to interns@excel.com to learn more about the internships and to request an application.',
        ],
      },
      {
        type: 'email',
        meta: {
          From: 'Jon Samuels [Jon@gomail.com]',
          To: 'Excel Company [interns@excel.com]',
          Sent: 'Friday, April 1, 20-- 1:29 P.M.',
          Subject: 'Application for Internship Program',
        },
        content: [
          'I would like to learn more about the Internship Program in Information Technology. My mother, who works as an electrical engineer at your company, told me about this opportunity.',
          'I am a junior at National University. Although my major is business administration, I am also interested in information technology and am considering studying this subject in graduate school. Can business majors apply for the internship?',
          'I will be leaving for a trip to Korea in May to visit relatives and brush up on my second language, Korean. I won’t return from my trip until four days after the first internships begin. Could I start my internship then? I can work until the beginning of September.',
          'If I qualify for the internship, please send me an application as soon as possible, as well as any other information I may need.',
          'Thank you.',
        ],
      },
    ],
  },

  part7_191_195: {
    id: 'part7_191_195',
    part: 7,
    title: 'Questions 191–195 refer to the following fax and phone message.',
    questionRange: [191, 195],
    questions: [191, 192, 193, 194, 195],
    documents: [
      {
        type: 'fax',
        title: 'FAX COVER SHEET',
        subtitle: 'Moon Computer Supplies — NO. 110-9 Zhongshan Road, Xindian City 608, Taipei, Taiwan | Tel: (886) 2-7668-9506 | Fax: (886) 2-7668-9507',
        meta: {
          To: 'Angie Shan',
          From: 'Jamie Wu, Account Representative',
          Date: 'April 12, 20--',
          Pages: '1',
          Ref: 'order confirmation',
        },
        content: [
          'Message:',
          'Angie, we shipped your items a few days ago. You should receive them by April 14. We had to divide the shipment into two boxes, but they both should arrive the same day. The items shipped are as follows:',
          '• Item 1: 2 LCD Monitors',
          '• Item 2: 1 PC Case, Black',
          '• Item 3: 5 Keyboards, Ivory',
          '• Item 4: 4 200 GB Hard Drives',
          '• Item 5: 8 Headphones',
          'Please contact us if you have any questions. I will be out on a business trip, but you can communicate with my assistant, Marcia. You know her.',
        ],
      },
      {
        type: 'phone_message',
        title: 'TELEPHONE MESSAGE PAD',
        customFormat: 'phone_memo',
        meta: {
          Date: 'April 17, 20--',
          Time: '11:07 A.M. [✓]',
          For: 'Ms. Lee',
          'Received By': 'Wei',
          Caller: 'Angie',
          'Phone Number': '2-7684-3267',
          'Call Back Requested?': 'YES [✓]',
        },
        content: [
          'MESSAGE: There is a problem with her order. She received items 1, 2, and 4, but they arrived two days after the expected date. The other items have not arrived. The PC case received is the wrong color; she ordered blue. The hard drives are also not as she ordered them. They are 100 GB less than she wanted. These problems need to be fixed immediately. Please call her today.',
        ],
      },
    ],
  },

  part7_196_200: {
    id: 'part7_196_200',
    part: 7,
    title: 'Questions 196–200 refer to the following e-mails.',
    questionRange: [196, 200],
    questions: [196, 197, 198, 199, 200],
    documents: [
      {
        type: 'email',
        meta: {
          From: 'Mark Connors [Mark@realtors.com]',
          To: 'Alana Dorrian [Alana@realtors.com]',
          Sent: '13 February 20--, 11:10',
          Subject: 'Company expenses',
        },
        content: [
          'Alana, I would like you to research ways to reduce our expenses. The real estate market is not doing well now. Also, we expect high utility bills later this year. So, we need to spend less money. Please investigate these ideas and submit a report to me within one week. Thank you.',
          '1. Rent: Can we get a better price from our landlord? We can sign a lease for a longer time period and ask for a cheaper rate. Ask him for a 10% reduction if we sign the lease for three years.',
          '2. Space: Do we need all five rooms? Can we rent one to another company?',
          '3. Utility bills: Should we add extra insulation? If it will save us at least $500 a year, I think it would be worth it. Also, our office temperature is 70 degrees. Can we lower it and still be comfortable?',
          '4. Other ideas: Can you think of another way to save money?',
        ],
      },
      {
        type: 'email',
        meta: {
          From: 'Alana Dorrian [Alana@realtors.com]',
          To: 'Mark Connors [Mark@realtors.com]',
          Sent: '14 February 20--, 9:35',
          Subject: 'Re: Company expenses',
        },
        content: [
          'Here are my findings about how to reduce our office overhead.',
          '1. I talked to Mr. Stanley. The amount of reduction is too high for him. However, he is willing to reduce the rent by half of what you request.',
          '2. We don’t need all of our rooms. Stavros and Kama have different schedules and can share a room, so we can rent one to another company. The mailing company next door is interested in renting the space.',
          '3. I called the utility company. They say that by adding extra insulation we will save twice the amount that you wanted to save. They also said that it will make a difference if we set the thermostat two degrees lower.',
          '4. Finally, to reduce our electric bills, we should encourage all staff to turn off their computers and office lights at the end of the day.',
        ],
      },
    ],
  },
};
