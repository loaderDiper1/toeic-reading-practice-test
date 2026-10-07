import React from 'react';
import { TestMode } from '../types/toeic';
import { RotateCcw, Award } from 'lucide-react';

interface HeaderProps {
  currentMode: TestMode;
  onSelectMode: (mode: TestMode) => void;
  onFinishTest: () => void;
  onOpenResetModal: () => void;
  isCompleted: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onFinishTest,
  onOpenResetModal,
  isCompleted,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand Title */}
        <button
          onClick={() => onSelectMode('full')}
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 shrink-0 text-left cursor-pointer hover:text-sky-700 transition-colors"
        >
          TOEIC
        </button>

        {/* Zone 2: Navigation Links (Clean text links with active state) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectMode('full')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer ${
              currentMode === 'full' && !isCompleted
                ? 'bg-sky-50 text-sky-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Full Test
          </button>
          <button
            onClick={() => onSelectMode('part5')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer ${
              currentMode === 'part5' && !isCompleted
                ? 'bg-sky-50 text-sky-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Part 5 (101–140)
          </button>
          <button
            onClick={() => onSelectMode('part6')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer ${
              currentMode === 'part6' && !isCompleted
                ? 'bg-sky-50 text-sky-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Part 6 (141–152)
          </button>
          <button
            onClick={() => onSelectMode('part7')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer ${
              currentMode === 'part7' && !isCompleted
                ? 'bg-sky-50 text-sky-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Part 7 (153–200)
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {!isCompleted ? (
            <button
              onClick={onFinishTest}
              className="px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              Finish Test
            </button>
          ) : (
            <button
              onClick={() => onSelectMode('full')}
              className="px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              Resume Test
            </button>
          )}

          <button
            onClick={onOpenResetModal}
            title="Reset practice session"
            className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Reset Progress"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
