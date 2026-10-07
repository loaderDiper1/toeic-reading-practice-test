import React, { useState } from 'react';
import { Question, QuestionOption } from '../types/toeic';
import { Check, X, AlertCircle, RefreshCw, ArrowLeft, ArrowRight } from 'lucide-react';
import { ExplanationCard } from './ExplanationCard';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: QuestionOption;
  isChecked: boolean;
  onSelectAnswer: (ans: QuestionOption) => void;
  onCheckAnswer: () => boolean | undefined;
  onAllowRetry: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isChecked,
  onSelectAnswer,
  onCheckAnswer,
  onAllowRetry,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const options: QuestionOption[] = ['A', 'B', 'C', 'D'];
  const isCorrect = isChecked && selectedAnswer === question.correctAnswer;

  const handleCheckClick = () => {
    if (!selectedAnswer) {
      setErrorMessage('Please select an answer first.');
      return;
    }
    setErrorMessage(null);
    onCheckAnswer();
  };

  const handleOptionSelect = (opt: QuestionOption) => {
    if (isChecked) return; // Prevent changing answer after check without clicking try again
    setErrorMessage(null);
    onSelectAnswer(opt);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-5 sm:p-7">
      {/* Question Header & Prompt */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          <span>Question {question.id}</span>
          {question.grammarFocus && (
            <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
              {question.grammarFocus}
            </span>
          )}
          {question.readingSkill && (
            <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
              {question.readingSkill}
            </span>
          )}
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed font-sans">
          {question.id}. {question.question}
        </h3>
      </div>

      {/* Answer Choices */}
      <div className="space-y-3 mb-6" role="radiogroup" aria-label={`Question ${question.id} options`}>
        {options.map((opt) => {
          const optText = question.options[opt];
          const isSelected = selectedAnswer === opt;
          const isTheCorrectOption = question.correctAnswer === opt;

          // Determine visual styling based on check state
          let cardStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
          let radioStyle = 'border-slate-300 text-transparent';

          if (isSelected && !isChecked) {
            // Selected, not yet checked
            cardStyle = 'border-sky-500 bg-sky-50/50 text-sky-950 ring-1 ring-sky-500';
            radioStyle = 'border-sky-600 bg-sky-600 text-white';
          } else if (isChecked) {
            if (isTheCorrectOption) {
              // The correct answer (always highlighted green after check)
              cardStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium ring-1 ring-emerald-500';
              radioStyle = 'border-emerald-600 bg-emerald-600 text-white';
            } else if (isSelected && !isTheCorrectOption) {
              // Selected the wrong answer (highlighted red)
              cardStyle = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-1 ring-rose-400';
              radioStyle = 'border-rose-600 bg-rose-600 text-white';
            } else {
              // Unselected other incorrect choices
              cardStyle = 'border-slate-200 bg-slate-50/40 opacity-75 text-slate-600';
              radioStyle = 'border-slate-300 text-transparent';
            }
          }

          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isChecked}
              onClick={() => handleOptionSelect(opt)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm sm:text-base cursor-pointer disabled:cursor-default ${cardStyle}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Custom Accessible Radio Circle */}
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${radioStyle}`}
                  aria-hidden="true"
                >
                  {isChecked && isTheCorrectOption ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : isChecked && isSelected && !isTheCorrectOption ? (
                    <X className="w-3.5 h-3.5" />
                  ) : isSelected ? (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  ) : null}
                </div>

                <div className="font-sans leading-snug">
                  <span className="font-bold mr-2 text-slate-900">{opt}.</span>
                  <span>{optText}</span>
                </div>
              </div>

              {/* Status Icons on the Right */}
              {isChecked && isTheCorrectOption && (
                <span className="shrink-0 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> Correct
                </span>
              )}
              {isChecked && isSelected && !isTheCorrectOption && (
                <span className="shrink-0 text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <X className="w-3 h-3" /> Incorrect
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Validation Message */}
      {errorMessage && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs sm:text-sm text-amber-900 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Immediate Evaluation Result Banner */}
      {isChecked && (
        <div
          className={`p-4 rounded-xl border mb-6 flex flex-wrap items-center justify-between gap-3 ${
            isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${
                isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            >
              {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </div>
            <div>
              <div className="font-bold text-base">
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                Your answer:{' '}
                <span className="font-bold text-slate-900">{selectedAnswer}</span>
                {'  ·  '}
                Correct answer:{' '}
                <span className="font-bold text-emerald-700">{question.correctAnswer}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onAllowRetry}
            className="text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            Try Again / Change Answer
          </button>
        </div>
      )}

      {/* Action / Navigation Bar */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            type="button"
            onClick={onNext}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
              isChecked
                ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs'
                : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-300'
            }`}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Check Answer Button */}
        {!isChecked && (
          <button
            type="button"
            onClick={handleCheckClick}
            className="w-full sm:w-auto px-6 py-2.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Check Answer
          </button>
        )}
      </div>

      {/* Detailed Educational Explanation */}
      {isChecked && (
        <ExplanationCard
          question={question}
          userAnswer={selectedAnswer}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
};
