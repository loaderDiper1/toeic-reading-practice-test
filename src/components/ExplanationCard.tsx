import React, { useState } from 'react';
import { Question, QuestionOption } from '../types/toeic';
import { CheckCircle2, Lightbulb, ChevronDown, ChevronUp, BookOpen, Sparkles } from 'lucide-react';

interface ExplanationCardProps {
  question: Question;
  userAnswer?: QuestionOption;
  isCorrect: boolean;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  question,
  userAnswer,
  isCorrect,
}) => {
  const [showIncorrectOptions, setShowIncorrectOptions] = useState(true);
  const optionsList: QuestionOption[] = ['A', 'B', 'C', 'D'];
  const incorrectOptions = optionsList.filter((opt) => opt !== question.correctAnswer);

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-xs mt-6 transition-all">
      {/* Top Banner */}
      <div
        className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
          isCorrect
            ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
            : 'bg-rose-50/70 border-rose-200 text-rose-950'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="font-bold text-base tracking-tight">
            Correct Answer: {question.correctAnswer}
          </span>
          {userAnswer && (
            <span className="text-xs font-medium text-slate-600 bg-white/80 px-2 py-0.5 rounded border border-slate-200 ml-1">
              Your answer: {userAnswer}
            </span>
          )}
        </div>

        {/* Focus Tag (Grammar Focus or Reading Skill) */}
        {(question.grammarFocus || question.readingSkill) && (
          <div className="text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md">
            {question.grammarFocus ? `Grammar Focus: ${question.grammarFocus}` : `Reading Skill: ${question.readingSkill}`}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Why is [correct] correct? */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Why is {question.correctAnswer} correct?
          </h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
            <p className="text-sm text-slate-800 leading-relaxed font-sans">
              {question.explanation.correct}
            </p>

            <div className="border-t border-slate-200 pt-3">
              <h4 className="text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                中文解释
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {question.explanation.chinese}
              </p>
            </div>
          </div>
        </section>

        {/* Why are the other answers wrong? */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              Why are the other answers wrong?
            </h3>
            <button
              onClick={() => setShowIncorrectOptions((prev) => !prev)}
              className="text-xs text-sky-700 hover:text-sky-900 font-medium flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-100 transition-colors"
              aria-label="Toggle incorrect choices explanations"
            >
              {showIncorrectOptions ? (
                <>
                  <span>Collapse</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Expand details</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {showIncorrectOptions && (
            <div className="space-y-3">
              {incorrectOptions.map((opt) => {
                const optText = question.options[opt];
                const exp = question.explanation.incorrect[opt];
                const wasSelectedByStudent = userAnswer === opt;

                return (
                  <div
                    key={opt}
                    className={`border rounded-lg p-4 space-y-2 text-sm ${
                      wasSelectedByStudent
                        ? 'border-rose-300 bg-rose-50/30'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-slate-900">
                        {opt}. {optText}
                      </span>
                      {wasSelectedByStudent && (
                        <span className="text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                          You chose this
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {exp.en}
                    </p>
                    {exp.zh && exp.zh !== '正确答案。' && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                        <span className="font-semibold text-slate-500 mr-1.5">中文:</span>
                        {exp.zh}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Optional Learning Tip */}
        {question.explanation.learningTip && (
          <section className="bg-amber-50/60 border border-amber-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Learning Tip
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              {question.explanation.learningTip.en}
            </p>
            <div className="border-t border-amber-200/80 pt-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-amber-900 mr-1">中文提示：</span>
                {question.explanation.learningTip.zh}
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
