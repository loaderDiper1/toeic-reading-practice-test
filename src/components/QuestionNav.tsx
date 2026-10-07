import React from 'react';
import { Question, QuestionOption } from '../types/toeic';

interface QuestionNavProps {
  questions: Question[];
  currentQuestionId: number;
  userAnswers: Record<number, QuestionOption>;
  checkedQuestions: Record<number, boolean>;
  onSelectQuestionId: (id: number) => void;
}

export const QuestionNav: React.FC<QuestionNavProps> = ({
  questions,
  currentQuestionId,
  userAnswers,
  checkedQuestions,
  onSelectQuestionId,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Question Navigator
        </h4>
        <span className="text-xs text-slate-500 font-mono tabular-nums">
          {questions.length} questions
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 mb-4 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-blue-600" />
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-emerald-600" />
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-rose-600" />
          <span>Incorrect</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-slate-100 border border-slate-300" />
          <span>Unanswered</span>
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 max-h-80 overflow-y-auto p-0.5">
        {questions.map((q) => {
          const isCurrent = q.id === currentQuestionId;
          const isChecked = !!checkedQuestions[q.id];
          const userAns = userAnswers[q.id];
          const isCorrect = isChecked && userAns === q.correctAnswer;
          const isIncorrect = isChecked && userAns !== q.correctAnswer;
          const isAnsweredUnchecked = !isChecked && !!userAns;

          let btnClass = 'bg-slate-50 text-slate-700 hover:bg-slate-200 border-slate-200';

          if (isCurrent) {
            btnClass = 'bg-blue-600 text-white font-bold border-blue-700 ring-2 ring-blue-300 shadow-xs z-10';
          } else if (isCorrect) {
            btnClass = 'bg-emerald-600 text-white font-semibold border-emerald-700';
          } else if (isIncorrect) {
            btnClass = 'bg-rose-600 text-white font-semibold border-rose-700';
          } else if (isAnsweredUnchecked) {
            btnClass = 'bg-amber-100 text-amber-900 border-amber-300 font-medium';
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectQuestionId(q.id)}
              title={`Question ${q.id}${
                isChecked
                  ? isCorrect
                    ? ' (Correct)'
                    : ' (Incorrect)'
                  : isAnsweredUnchecked
                  ? ' (Answered - unchecked)'
                  : ' (Unanswered)'
              }`}
              className={`h-8 sm:h-9 rounded-md border text-xs flex items-center justify-center transition-all cursor-pointer font-mono tabular-nums ${btnClass}`}
            >
              {q.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};
