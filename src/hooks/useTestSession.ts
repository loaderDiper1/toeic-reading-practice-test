import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  QuestionOption,
  PartNumber,
  TestMode,
  Question,
} from '../types/toeic';
import {
  ALL_QUESTIONS,
  QUESTIONS_BY_ID,
  getQuestionsForPart,
} from '../data/allQuestions';

const STORAGE_KEY = 'toeic_practice_test_6_session_v1';

export interface TestSessionData {
  mode: TestMode;
  currentQuestionId: number;
  userAnswers: Record<number, QuestionOption>;
  checkedQuestions: Record<number, boolean>;
  isCompleted: boolean;
}

const DEFAULT_STATE: TestSessionData = {
  mode: 'full',
  currentQuestionId: 101,
  userAnswers: {},
  checkedQuestions: {},
  isCompleted: false,
};

export function useTestSession() {
  const [session, setSession] = useState<TestSessionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_STATE,
          ...parsed,
        };
      }
    } catch (e) {
      console.error('Failed to load TOEIC session from localStorage', e);
    }
    return DEFAULT_STATE;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to persist TOEIC session', e);
    }
  }, [session]);

  // Questions applicable to current mode
  const currentQuestions: Question[] = useMemo(() => {
    switch (session.mode) {
      case 'part5':
        return getQuestionsForPart(5);
      case 'part6':
        return getQuestionsForPart(6);
      case 'part7':
        return getQuestionsForPart(7);
      case 'review_incorrect':
        return ALL_QUESTIONS.filter((q) => {
          const checked = session.checkedQuestions[q.id];
          const ans = session.userAnswers[q.id];
          return checked && ans !== q.correctAnswer;
        });
      case 'review_all':
      case 'full':
      default:
        return ALL_QUESTIONS;
    }
  }, [session.mode, session.checkedQuestions, session.userAnswers]);

  // Current question object
  const currentQuestion: Question = useMemo(() => {
    const q = QUESTIONS_BY_ID[session.currentQuestionId];
    if (q && currentQuestions.some((item) => item.id === q.id)) {
      return q;
    }
    return currentQuestions[0] || ALL_QUESTIONS[0];
  }, [session.currentQuestionId, currentQuestions]);

  // Current index in active question list
  const currentIndex = useMemo(() => {
    const idx = currentQuestions.findIndex((q) => q.id === currentQuestion.id);
    return idx >= 0 ? idx : 0;
  }, [currentQuestions, currentQuestion.id]);

  // Total questions in current mode
  const totalCount = currentQuestions.length;

  // Selected answer for current question
  const currentSelectedAnswer = session.userAnswers[currentQuestion?.id];
  const isCurrentChecked = !!session.checkedQuestions[currentQuestion?.id];
  const isCurrentCorrect =
    isCurrentChecked && currentSelectedAnswer === currentQuestion?.correctAnswer;

  // Global score statistics
  const stats = useMemo(() => {
    let checkedCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    const partStats: Record<PartNumber, { total: number; correct: number; incorrect: number; checked: number }> = {
      5: { total: 40, correct: 0, incorrect: 0, checked: 0 },
      6: { total: 12, correct: 0, incorrect: 0, checked: 0 },
      7: { total: 48, correct: 0, incorrect: 0, checked: 0 },
    };

    ALL_QUESTIONS.forEach((q) => {
      const isChecked = !!session.checkedQuestions[q.id];
      const ans = session.userAnswers[q.id];
      if (isChecked) {
        checkedCount++;
        partStats[q.part].checked++;
        if (ans === q.correctAnswer) {
          correctCount++;
          partStats[q.part].correct++;
        } else {
          incorrectCount++;
          partStats[q.part].incorrect++;
        }
      }
    });

    const accuracy = checkedCount > 0 ? Math.round((correctCount / checkedCount) * 100) : 0;

    return {
      checkedCount,
      correctCount,
      incorrectCount,
      accuracy,
      partStats,
    };
  }, [session.checkedQuestions, session.userAnswers]);

  // Handlers
  const selectAnswer = useCallback((ans: QuestionOption) => {
    if (!currentQuestion) return;
    setSession((prev) => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [currentQuestion.id]: ans,
      },
    }));
  }, [currentQuestion]);

  const checkAnswer = useCallback(() => {
    if (!currentQuestion) return;
    const ans = session.userAnswers[currentQuestion.id];
    if (!ans) return false;

    setSession((prev) => ({
      ...prev,
      checkedQuestions: {
        ...prev.checkedQuestions,
        [currentQuestion.id]: true,
      },
    }));
    return true;
  }, [currentQuestion, session.userAnswers]);

  const allowRetry = useCallback(() => {
    if (!currentQuestion) return;
    setSession((prev) => {
      const newChecked = { ...prev.checkedQuestions };
      delete newChecked[currentQuestion.id];
      return {
        ...prev,
        checkedQuestions: newChecked,
      };
    });
  }, [currentQuestion]);

  const goToQuestionId = useCallback((id: number) => {
    if (QUESTIONS_BY_ID[id]) {
      setSession((prev) => ({
        ...prev,
        currentQuestionId: id,
        isCompleted: false,
      }));
    }
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < currentQuestions.length - 1) {
      const nextQ = currentQuestions[currentIndex + 1];
      setSession((prev) => ({
        ...prev,
        currentQuestionId: nextQ.id,
      }));
    } else {
      // Reached the end of the question set
      setSession((prev) => ({
        ...prev,
        isCompleted: true,
      }));
    }
  }, [currentIndex, currentQuestions]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      const prevQ = currentQuestions[currentIndex - 1];
      setSession((prev) => ({
        ...prev,
        currentQuestionId: prevQ.id,
      }));
    }
  }, [currentIndex, currentQuestions]);

  const startMode = useCallback((mode: TestMode) => {
    let startId = 101;
    if (mode === 'part5') startId = 101;
    else if (mode === 'part6') startId = 141;
    else if (mode === 'part7') startId = 153;

    setSession((prev) => ({
      ...prev,
      mode,
      currentQuestionId: startId,
      isCompleted: false,
    }));
  }, []);

  const finishTest = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      isCompleted: true,
    }));
  }, []);

  const resumeTest = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      isCompleted: false,
    }));
  }, []);

  const startReviewIncorrect = useCallback(() => {
    const incorrectQs = ALL_QUESTIONS.filter((q) => {
      const checked = session.checkedQuestions[q.id];
      const ans = session.userAnswers[q.id];
      return checked && ans !== q.correctAnswer;
    });

    if (incorrectQs.length > 0) {
      setSession((prev) => ({
        ...prev,
        mode: 'review_incorrect',
        currentQuestionId: incorrectQs[0].id,
        isCompleted: false,
      }));
    }
  }, [session.checkedQuestions, session.userAnswers]);

  const retakeTest = useCallback(() => {
    setSession({
      mode: 'full',
      currentQuestionId: 101,
      userAnswers: {},
      checkedQuestions: {},
      isCompleted: false,
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    const fresh: TestSessionData = {
      mode: 'full',
      currentQuestionId: 101,
      userAnswers: {},
      checkedQuestions: {},
      isCompleted: false,
    };
    setSession(fresh);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    session,
    currentQuestion,
    currentQuestions,
    currentIndex,
    totalCount,
    currentSelectedAnswer,
    isCurrentChecked,
    isCurrentCorrect,
    stats,
    selectAnswer,
    checkAnswer,
    allowRetry,
    goToQuestionId,
    goToNext,
    goToPrevious,
    startMode,
    finishTest,
    resumeTest,
    startReviewIncorrect,
    retakeTest,
    resetAllProgress,
  };
}
