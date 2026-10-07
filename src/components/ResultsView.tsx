import React from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Eye, AlertCircle } from 'lucide-react';
import { PartNumber } from '../types/toeic';

interface ResultsViewProps {
  stats: {
    checkedCount: number;
    correctCount: number;
    incorrectCount: number;
    accuracy: number;
    partStats: Record<PartNumber, { total: number; correct: number; incorrect: number; checked: number }>;
  };
  onReviewIncorrect: () => void;
  onReviewAll: () => void;
  onRetake: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  stats,
  onReviewIncorrect,
  onReviewAll,
  onRetake,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Test Complete Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 text-sky-700 mx-auto">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            TEST COMPLETE
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Practice Test 6 Summary Performance
          </p>
        </div>

        {/* Big Score Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold">Score</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums">
              {stats.correctCount} / {stats.checkedCount || 100}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold">Accuracy</div>
            <div className="text-2xl sm:text-3xl font-bold text-sky-700 font-mono tabular-nums">
              {stats.accuracy}%
            </div>
          </div>
          <div>
            <div className="text-xs text-emerald-600 uppercase font-semibold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-mono tabular-nums">
              {stats.correctCount}
            </div>
          </div>
          <div>
            <div className="text-xs text-rose-600 uppercase font-semibold flex items-center justify-center gap-1">
              <XCircle className="w-3.5 h-3.5" /> Incorrect
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-rose-600 font-mono tabular-nums">
              {stats.incorrectCount}
            </div>
          </div>
        </div>

        {/* Part by Part Performance */}
        <div className="space-y-3 pt-2 text-left max-w-xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Performance By Section
          </h3>

          <div className="space-y-2">
            {/* Part 5 */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-slate-900">Part 5</span>
                <span className="text-xs text-slate-500 ml-2">Incomplete Sentences (101–140)</span>
              </div>
              <div className="font-mono tabular-nums font-bold text-slate-900">
                {stats.partStats[5].correct} / {stats.partStats[5].total}
                <span className="text-xs font-normal text-slate-500 ml-2">
                  ({Math.round((stats.partStats[5].correct / stats.partStats[5].total) * 100)}%)
                </span>
              </div>
            </div>

            {/* Part 6 */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-slate-900">Part 6</span>
                <span className="text-xs text-slate-500 ml-2">Text Completion (141–152)</span>
              </div>
              <div className="font-mono tabular-nums font-bold text-slate-900">
                {stats.partStats[6].correct} / {stats.partStats[6].total}
                <span className="text-xs font-normal text-slate-500 ml-2">
                  ({Math.round((stats.partStats[6].correct / stats.partStats[6].total) * 100)}%)
                </span>
              </div>
            </div>

            {/* Part 7 */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-slate-900">Part 7</span>
                <span className="text-xs text-slate-500 ml-2">Reading Comprehension (153–200)</span>
              </div>
              <div className="font-mono tabular-nums font-bold text-slate-900">
                {stats.partStats[7].correct} / {stats.partStats[7].total}
                <span className="text-xs font-normal text-slate-500 ml-2">
                  ({Math.round((stats.partStats[7].correct / stats.partStats[7].total) * 100)}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          {stats.incorrectCount > 0 && (
            <button
              onClick={onReviewIncorrect}
              className="w-full sm:flex-1 py-3 px-5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <AlertCircle className="w-4 h-4" />
              Review Incorrect ({stats.incorrectCount})
            </button>
          )}

          <button
            onClick={onReviewAll}
            className="w-full sm:flex-1 py-3 px-5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            Review All Questions
          </button>

          <button
            onClick={onRetake}
            className="w-full sm:flex-1 py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};
