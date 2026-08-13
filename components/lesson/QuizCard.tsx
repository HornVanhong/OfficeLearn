"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/lib/types";
import { Button } from "../ui/Button";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswerSubmitted: (isCorrect: boolean) => void;
}

export function QuizCard({ question, onAnswerSubmitted }: QuizCardProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { playSuccess, playError } = useSoundEffects();
  const { t } = useLanguage();

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIdx(idx);
  };

  const handleSubmit = () => {
    if (selectedIdx === null || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedIdx === question.correctAnswer;
    if (isCorrect) {
      playSuccess();
    } else {
      playError();
    }
  };

  const isCorrect = selectedIdx === question.correctAnswer;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-xl space-y-6">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-fluent-blue dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider rounded-full">
        <HelpCircle className="w-3.5 h-3.5" />
        {t.knowledgeCheckQuiz}
      </div>

      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
        {question.question}
      </h3>

      {/* Options List */}
      <div className="space-y-3">
        {question.options?.map((opt, idx) => {
          let btnClass = "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 hover:border-blue-300";
          
          if (selectedIdx === idx) {
            btnClass = "border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-fluent-blue font-bold ring-2 ring-blue-500/40";
          }

          if (isSubmitted) {
            if (idx === question.correctAnswer) {
              btnClass = "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold ring-2 ring-emerald-500/40";
            } else if (selectedIdx === idx) {
              btnClass = "border-rose-600 bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold ring-2 ring-rose-500/40";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full p-4 rounded-2xl border text-left text-sm transition-all duration-200 flex items-center justify-between ${btnClass}`}
            >
              <span>{opt}</span>
              {isSubmitted && idx === question.correctAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
              {isSubmitted && selectedIdx === idx && idx !== question.correctAnswer && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {isSubmitted && (
        <div className={`p-4 rounded-2xl text-xs sm:text-sm font-medium ${isCorrect ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900" : "bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-900"}`}>
          <div className="font-bold mb-1 flex items-center gap-1.5">
            {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
            {isCorrect ? t.correctAnswerLabel : t.notQuiteRightLabel}
          </div>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end pt-2">
        {!isSubmitted ? (
          <Button size="lg" variant="primary" disabled={selectedIdx === null} onClick={handleSubmit}>
            {t.checkAnswer}
          </Button>
        ) : (
          <Button size="lg" variant="primary" onClick={() => onAnswerSubmitted(isCorrect)}>
            <span>{t.continueBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
