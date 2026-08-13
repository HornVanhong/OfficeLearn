"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Button } from "../ui/Button";
import { Trophy, Sparkles, CheckCircle2, ArrowRight, Home } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";

interface CompletionScreenProps {
  lessonTitle: string;
  xpEarned: number;
  accuracyScore: number; // 0 to 100
  moduleId: string;
  nextLessonId?: string;
}

export function CompletionScreen({
  lessonTitle,
  xpEarned,
  accuracyScore,
  moduleId,
  nextLessonId,
}: CompletionScreenProps) {
  const { playBadgeUnlock } = useSoundEffects();
  const { t } = useLanguage();

  useEffect(() => {
    playBadgeUnlock();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });
  }, [playBadgeUnlock]);

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-2xl text-center space-y-6">
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-amber-500/30 animate-bounce">
        <Trophy className="w-12 h-12" />
      </div>

      <div className="space-y-2">
        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          {t.lessonCompleted}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {lessonTitle}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t.outstandingJob}
        </p>
      </div>

      {/* Stats Breakdown Grid */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="space-y-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">{t.xpEarned}</div>
          <div className="text-2xl font-extrabold text-amber-500 flex items-center justify-center gap-1">
            <Sparkles className="w-5 h-5 fill-current" />
            <span>+{xpEarned} XP</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">{t.quizScore}</div>
          <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-5 h-5" />
            <span>{accuracyScore}%</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <Link href={`/modules/${moduleId}`} className="flex-1">
          <Button variant="outline" className="w-full py-3">
            <Home className="w-4 h-4" />
            {t.moduleOverview}
          </Button>
        </Link>
        {nextLessonId ? (
          <Link href={`/modules/${moduleId}/${nextLessonId}`} className="flex-1">
            <Button variant="primary" className="w-full py-3">
              <span>{t.nextLesson}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard" className="flex-1">
            <Button variant="primary" className="w-full py-3">
              {t.returnToDashboard}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
