import React from 'react';
import { TestMode } from '../types/toeic';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  onStartMode: (mode: TestMode) => void;
  stats: {
    checkedCount: number;
    correctCount: number;
    incorrectCount: number;
    accuracy: number;
  };
  hasProgress: boolean;
  onResume: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onStartMode,
  stats,
  hasProgress,
  onResume,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      {/* Hero / Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            TOEIC Reading
          </h1>
          <div className="text-xs sm:text-sm font-bold text-sky-700 uppercase tracking-widest">
             · Practice Test
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Parts 5–7 · 100 Questions Total · Complete Grammar & Reading Explanations with Direct Chinese Translations
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {hasProgress ? (
            <>
              <button
                onClick={onResume}
                className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Resume Test ({stats.checkedCount}/100)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onStartMode('full')}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm sm:text-base rounded-xl transition-all cursor-pointer"
              >
                Start Full Test from Q101
              </button>
            </>
          ) : (
            <button
              onClick={() => onStartMode('full')}
              className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Full Test (100 Questions)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Existing progress indicator */}
        {hasProgress && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-xs text-slate-600 flex items-center justify-around">
            <div>
              <span className="block font-bold text-slate-900 text-sm">{stats.checkedCount} / 100</span>
              <span>Answered</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="block font-bold text-emerald-600 text-sm">{stats.correctCount}</span>
              <span>Correct</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="block font-bold text-rose-600 text-sm">{stats.incorrectCount}</span>
              <span>Incorrect</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="block font-bold text-sky-700 text-sm">{stats.accuracy}%</span>
              <span>Accuracy</span>
            </div>
          </div>
        )}
      </div>

      {/* Part Selection Grid */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-center sm:text-left">
          Select Practice Section
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Part 5 Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="text-xs font-bold text-sky-700 uppercase">Part 5</div>
              <h3 className="text-base font-bold text-slate-900">
                Incomplete Sentences
              </h3>
              <p className="text-xs text-slate-600">
                Questions 101–140 · 40 Questions
              </p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Sentence completion testing grammar, vocabulary, collocations, and verb forms.
              </p>
            </div>
            <button
              onClick={() => onStartMode('part5')}
              className="mt-5 w-full py-2.5 px-4 bg-slate-50 hover:bg-sky-50 text-sky-700 hover:text-sky-800 border border-slate-200 hover:border-sky-200 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Practice Part 5</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Part 6 Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="text-xs font-bold text-sky-700 uppercase">Part 6</div>
              <h3 className="text-base font-bold text-slate-900">
                Text Completion
              </h3>
              <p className="text-xs text-slate-600">
                Questions 141–152 · 12 Questions
              </p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Fill-in-the-blank text comprehension across authentic memos, notices, and correspondence.
              </p>
            </div>
            <button
              onClick={() => onStartMode('part6')}
              className="mt-5 w-full py-2.5 px-4 bg-slate-50 hover:bg-sky-50 text-sky-700 hover:text-sky-800 border border-slate-200 hover:border-sky-200 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Practice Part 6</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Part 7 Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="text-xs font-bold text-sky-700 uppercase">Part 7</div>
              <h3 className="text-base font-bold text-slate-900">
                Reading Comprehension
              </h3>
              <p className="text-xs text-slate-600">
                Questions 153–200 · 48 Questions
              </p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Single and double passage reading comprehension including forms, faxes, reports, and emails.
              </p>
            </div>
            <button
              onClick={() => onStartMode('part7')}
              className="mt-5 w-full py-2.5 px-4 bg-slate-50 hover:bg-sky-50 text-sky-700 hover:text-sky-800 border border-slate-200 hover:border-sky-200 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Practice Part 7</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
