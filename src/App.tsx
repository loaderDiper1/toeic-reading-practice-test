import React, { useState } from 'react';
import { useTestSession } from './hooks/useTestSession';
import { getPassageForQuestion } from './data/allQuestions';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { PassageCard } from './components/PassageCard';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNav } from './components/QuestionNav';
import { ResultsView } from './components/ResultsView';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { TestMode } from './types/toeic';
import { ChevronRight, ArrowLeft, RotateCcw } from 'lucide-react';

export default function App() {
  const {
    session,
    currentQuestion,
    currentQuestions,
    currentIndex,
    totalCount,
    currentSelectedAnswer,
    isCurrentChecked,
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
  } = useTestSession();

  const [view, setView] = useState<'home' | 'test'>('home');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Active passage for Part 6 / Part 7
  const activePassage = currentQuestion ? getPassageForQuestion(currentQuestion.id) : undefined;

  // Header part title text
  const getPartTitle = () => {
    if (session.mode === 'review_incorrect') return 'Reviewing Incorrect Answers';
    if (!currentQuestion) return 'TOEIC Reading';
    if (currentQuestion.part === 5) return 'PART 5 — INCOMPLETE SENTENCES';
    if (currentQuestion.part === 6) return 'PART 6 — TEXT COMPLETION';
    return 'PART 7 — READING COMPREHENSION';
  };

  const handleStartMode = (mode: TestMode) => {
    startMode(mode);
    setView('test');
  };

  const handleResume = () => {
    resumeTest();
    setView('test');
  };

  const handleHeaderSelectMode = (mode: TestMode) => {
    startMode(mode);
    setView('test');
  };

  const handleFinishTest = () => {
    finishTest();
  };

  const handleReviewIncorrect = () => {
    startReviewIncorrect();
    setView('test');
  };

  const handleReviewAll = () => {
    startMode('full');
    setView('test');
  };

  const handleRetake = () => {
    retakeTest();
    setView('test');
  };

  // Progress percentage
  const progressPercent = totalCount > 0 ? Math.round(((currentIndex + 1) / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Header */}
      <Header
        currentMode={session.mode}
        onSelectMode={(mode) => {
          if (mode === 'full' && view === 'home') {
            handleStartMode('full');
          } else {
            handleHeaderSelectMode(mode);
          }
        }}
        onFinishTest={handleFinishTest}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        isCompleted={session.isCompleted}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
        {session.isCompleted ? (
          <ResultsView
            stats={stats}
            onReviewIncorrect={handleReviewIncorrect}
            onReviewAll={handleReviewAll}
            onRetake={handleRetake}
          />
        ) : view === 'home' && stats.checkedCount === 0 ? (
          <Home
            onStartMode={handleStartMode}
            stats={stats}
            hasProgress={stats.checkedCount > 0}
            onResume={handleResume}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 space-y-5">
            {/* Breadcrumb / Mode Bar */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <button
                  onClick={() => setView('home')}
                  className="text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-sky-700">{getPartTitle()}</span>
              </div>

              {/* Progress & Counter */}
              <div className="flex items-center gap-4 text-xs font-mono tabular-nums text-slate-600">
                <div>
                  <span className="font-bold text-slate-900">
                    Question {session.mode === 'full' ? currentQuestion?.id : `${currentIndex + 1} of ${totalCount}`}
                  </span>
                  {session.mode === 'full' && (
                    <span className="text-slate-500 ml-1">({currentIndex + 1}/100)</span>
                  )}
                </div>
                <div className="w-24 sm:w-32 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div
                    className="bg-sky-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="hidden sm:inline font-sans text-slate-500">
                  {progressPercent}%
                </div>
              </div>
            </div>

            {/* Test Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column / Passage Area (if Part 6 or Part 7) */}
              {activePassage ? (
                <>
                  <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-20">
                    <PassageCard
                      passage={activePassage}
                      highlightQuestionId={currentQuestion?.id}
                    />
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    {currentQuestion && (
                      <QuestionCard
                        question={currentQuestion}
                        selectedAnswer={currentSelectedAnswer}
                        isChecked={isCurrentChecked}
                        onSelectAnswer={selectAnswer}
                        onCheckAnswer={checkAnswer}
                        onAllowRetry={allowRetry}
                        onPrevious={goToPrevious}
                        onNext={goToNext}
                        hasPrevious={currentIndex > 0}
                        hasNext={currentIndex < totalCount - 1}
                      />
                    )}

                    {/* Question Navigator */}
                    <QuestionNav
                      questions={currentQuestions}
                      currentQuestionId={currentQuestion?.id || 101}
                      userAnswers={session.userAnswers}
                      checkedQuestions={session.checkedQuestions}
                      onSelectQuestionId={goToQuestionId}
                    />
                  </div>
                </>
              ) : (
                /* Part 5 layout (No passage needed) */
                <>
                  <div className="lg:col-span-8 space-y-6">
                    {currentQuestion && (
                      <QuestionCard
                        question={currentQuestion}
                        selectedAnswer={currentSelectedAnswer}
                        isChecked={isCurrentChecked}
                        onSelectAnswer={selectAnswer}
                        onCheckAnswer={checkAnswer}
                        onAllowRetry={allowRetry}
                        onPrevious={goToPrevious}
                        onNext={goToNext}
                        hasPrevious={currentIndex > 0}
                        hasNext={currentIndex < totalCount - 1}
                      />
                    )}
                  </div>

                  <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
                    {/* Question Navigator */}
                    <QuestionNav
                      questions={currentQuestions}
                      currentQuestionId={currentQuestion?.id || 101}
                      userAnswers={session.userAnswers}
                      checkedQuestions={session.checkedQuestions}
                      onSelectQuestionId={goToQuestionId}
                    />

                    {/* Quick Stats Mini-card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs text-xs text-slate-600 space-y-2">
                      <div className="font-bold text-slate-800 uppercase tracking-wider text-2xs">
                        Current Session Stats
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                        <span>Answered:</span>
                        <span className="font-bold text-slate-900 font-mono tabular-nums">
                          {stats.checkedCount} / 100
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Accuracy:</span>
                        <span className="font-bold text-sky-700 font-mono tabular-nums">
                          {stats.accuracy}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Correct / Incorrect:</span>
                        <span className="font-bold font-mono tabular-nums">
                          <span className="text-emerald-600">{stats.correctCount}</span>
                          {' / '}
                          <span className="text-rose-600">{stats.incorrectCount}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Reset Confirmation Modal */}
      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={() => {
          resetAllProgress();
          setView('home');
        }}
      />
    </div>
  );
}
