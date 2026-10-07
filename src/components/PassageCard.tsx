import React from 'react';
import { Passage, PassageDocument } from '../types/toeic';
import { FileText, Mail, Bell, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';

interface PassageCardProps {
  passage: Passage;
  highlightQuestionId?: number;
}

export const PassageCard: React.FC<PassageCardProps> = ({
  passage,
  highlightQuestionId,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Passage Header */}
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sky-600" />
          <h2 className="text-sm font-semibold text-slate-900 tracking-tight">
            {passage.title}
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-500 tabular-nums">
          Questions {passage.questionRange[0]}–{passage.questionRange[1]}
        </div>
      </div>

      {/* Documents */}
      <div className="p-5 space-y-6">
        {passage.documents.map((doc, idx) => (
          <DocumentView
            key={idx}
            doc={doc}
            highlightQuestionId={highlightQuestionId}
          />
        ))}
      </div>
    </div>
  );
};

const DocumentView: React.FC<{
  doc: PassageDocument;
  highlightQuestionId?: number;
}> = ({ doc, highlightQuestionId }) => {
  // Check custom formats
  if (doc.customFormat === 'phone_memo') {
    return (
      <div className="bg-amber-50/40 border-2 border-amber-200/70 rounded-lg p-5 font-sans shadow-xs">
        <div className="text-center border-b border-amber-300/80 pb-2 mb-4">
          <h3 className="text-sm font-bold tracking-wider text-amber-950 uppercase">
            {doc.title || 'TELEPHONE MESSAGE PAD'}
          </h3>
        </div>

        {doc.meta && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-800 border-b border-amber-200/70 pb-3 mb-3">
            {Object.entries(doc.meta).map(([key, value]) => (
              <div key={key} className="flex items-baseline gap-1">
                <span className="font-semibold text-slate-600">{key}:</span>
                <span className="font-medium text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2 text-xs sm:text-sm text-slate-900 font-serif leading-relaxed italic">
          {doc.content.map((p, i) => (
            <p key={i}>{highlightText(p, highlightQuestionId)}</p>
          ))}
        </div>
      </div>
    );
  }

  if (doc.customFormat === 'form_card') {
    return (
      <div className="bg-stone-50/50 border border-stone-300 rounded-lg p-5 shadow-xs">
        <div className="border-b border-stone-300 pb-2 mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 tracking-wide">
            {doc.title}
          </h3>
          <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
            Postal Change Form
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
          {doc.content.map((line, i) => {
            if (line.includes(':')) {
              const [label, ...val] = line.split(':');
              return (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-2 border-b border-stone-200/60 pb-1.5">
                  <span className="font-semibold text-slate-700 min-w-36">{label}:</span>
                  <span className="text-slate-900 font-medium">{val.join(':').trim()}</span>
                </div>
              );
            }
            return (
              <p key={i} className="text-slate-600 italic">
                {line}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  // Standard Document Rendering (Memo, Email, Notice, Letter, Report, Article, Fax, Ad)
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
      {/* Document Header or Title */}
      {(doc.title || doc.subtitle) && (
        <div className="border-b border-slate-100 pb-2.5">
          {doc.title && (
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              {doc.title}
            </h3>
          )}
          {doc.subtitle && (
            <p className="text-xs text-slate-500 mt-0.5">{doc.subtitle}</p>
          )}
        </div>
      )}

      {/* Meta Headers (From, To, Sent, Subject, Date, etc.) */}
      {doc.meta && (
        <div className="bg-slate-50/70 border border-slate-100 rounded-md p-3 space-y-1 text-xs text-slate-700">
          {Object.entries(doc.meta).map(([key, value]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:gap-2">
              <span className="font-semibold text-slate-600 sm:min-w-20">{key}:</span>
              <span className="text-slate-900">{value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Paragraphs with question blanks highlight */}
      <div className="space-y-3 text-sm text-slate-800 leading-relaxed pt-1">
        {doc.content.map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            {highlightText(p, highlightQuestionId)}
          </p>
        ))}
      </div>

      {doc.footer && (
        <div className="border-t border-slate-100 pt-2 text-xs text-slate-500 italic">
          {doc.footer}
        </div>
      )}
    </div>
  );
};

// Highlights [141], [142], etc. in Part 6, giving bold highlight if it matches the current question
function highlightText(text: string, activeQuestionId?: number): React.ReactNode {
  const blankRegex = /\[(\d+)\]/g;
  if (!blankRegex.test(text)) {
    return text;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = /\[(\d+)\]/g;

  while ((match = re.exec(text)) !== null) {
    const qNum = parseInt(match[1], 10);
    const before = text.substring(lastIndex, match.index);
    if (before) parts.push(before);

    const isActive = activeQuestionId === qNum;

    parts.push(
      <span
        key={`blank-${qNum}-${match.index}`}
        className={`inline-flex items-center justify-center font-mono text-xs font-semibold px-2 py-0.5 rounded border transition-colors mx-1 ${
          isActive
            ? 'bg-sky-100 text-sky-800 border-sky-400 ring-2 ring-sky-200'
            : 'bg-slate-100 text-slate-700 border-slate-300'
        }`}
      >
        ______ ({qNum})
      </span>
    );
    lastIndex = re.lastIndex;
  }

  const remainder = text.substring(lastIndex);
  if (remainder) parts.push(remainder);

  return parts;
}
