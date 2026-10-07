export type QuestionOption = 'A' | 'B' | 'C' | 'D';

export type PartNumber = 5 | 6 | 7;

export type QuestionType =
  | 'incomplete_sentence'
  | 'text_completion'
  | 'reading_comprehension';

export interface ExplanationOption {
  en: string;
  zh: string;
}

export interface LearningTip {
  en: string;
  zh: string;
}

export interface QuestionExplanation {
  correct: string;
  chinese: string;
  incorrect: {
    A: ExplanationOption;
    B: ExplanationOption;
    C: ExplanationOption;
    D: ExplanationOption;
  };
  learningTip?: LearningTip;
}

export interface Question {
  id: number; // 101 to 200
  part: PartNumber;
  type: QuestionType;
  passageId?: string;
  question: string;
  options: Record<QuestionOption, string>;
  correctAnswer: QuestionOption;
  grammarFocus?: string;
  readingSkill?: string;
  explanation: QuestionExplanation;
}

export interface PassageDocument {
  type:
    | 'memo'
    | 'email'
    | 'notice'
    | 'form'
    | 'advertisement'
    | 'announcement'
    | 'letter'
    | 'report'
    | 'article'
    | 'fax'
    | 'phone_message'
    | 'introduction';
  title?: string;
  subtitle?: string;
  meta?: Record<string, string>;
  content: string[];
  footer?: string;
  customFormat?: 'standard' | 'fax' | 'phone_memo' | 'form_card' | 'email_box';
}

export interface Passage {
  id: string;
  part: 6 | 7;
  title: string;
  subtitle?: string;
  questionRange: [number, number];
  questions: number[];
  documents: PassageDocument[];
}

export type TestMode = 'full' | 'part5' | 'part6' | 'part7' | 'review_incorrect' | 'review_all';

export interface TestSessionState {
  mode: TestMode;
  currentQuestionId: number;
  userAnswers: Record<number, QuestionOption>;
  checkedQuestions: Record<number, boolean>;
  startedAt?: number;
}
