import { Question, PartNumber, Passage } from '../types/toeic';
import { PART_5_QUESTIONS } from './part5';
import { PART_6_QUESTIONS } from './part6';
import { PART_7_QUESTIONS } from './part7';
import { PASSAGES } from './passages';

export const ALL_QUESTIONS: Question[] = [
  ...PART_5_QUESTIONS,
  ...PART_6_QUESTIONS,
  ...PART_7_QUESTIONS,
];

export const QUESTIONS_BY_ID: Record<number, Question> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q])
);

export function getQuestionsForPart(part: PartNumber): Question[] {
  return ALL_QUESTIONS.filter((q) => q.part === part);
}

export function getPassageForQuestion(questionId: number): Passage | undefined {
  const question = QUESTIONS_BY_ID[questionId];
  if (!question || !question.passageId) return undefined;
  return PASSAGES[question.passageId];
}

// Validation function ensuring integrity
export function validateQuestionDatabase(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (ALL_QUESTIONS.length !== 100) {
    errors.push(`Expected 100 questions, but found ${ALL_QUESTIONS.length}`);
  }

  for (let id = 101; id <= 200; id++) {
    const q = QUESTIONS_BY_ID[id];
    if (!q) {
      errors.push(`Missing question ID ${id}`);
      continue;
    }
    if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) {
      errors.push(`Question ${id} is missing one or more options`);
    }
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      errors.push(`Question ${id} has invalid correct answer: ${q.correctAnswer}`);
    }
    if (!q.explanation.correct || !q.explanation.chinese) {
      errors.push(`Question ${id} is missing explanation text`);
    }
    if (q.part > 5 && (!q.passageId || !PASSAGES[q.passageId])) {
      errors.push(`Question ${id} is missing passage reference`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
