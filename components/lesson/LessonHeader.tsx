"use client";

import React from "react";
import Link from "next/link";
import { ProgressBar } from "../ui/ProgressBar";
import { XPIndicator } from "../gamification/XPIndicator";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface LessonHeaderProps {
  lessonTitle: string;
  currentStep: number;
  totalSteps: number;
  xpReward: number;
  exitHref: string;
}

export function LessonHeader({
  lessonTitle,
  currentStep,
  totalSteps,
  xpReward,
  exitHref,
}: LessonHeaderProps) {
  const { t } = useLanguage();
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 sticky top-16 z-30 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <Link
          href={exitHref}
          className="p-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Exit Lesson"
        >
          <X className="w-5 h-5" />
        </Link>

        <div className="flex-1 max-w-md">
          <div className="flex justify-between items-center text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
            <span className="truncate pr-2">{lessonTitle}</span>
            <span>
              {t.stepOf} {currentStep} {t.of} {totalSteps}
            </span>
          </div>
          <ProgressBar progress={progressPercent} size="sm" />
        </div>

        <XPIndicator xp={xpReward} />
      </div>
    </div>
  );
}
