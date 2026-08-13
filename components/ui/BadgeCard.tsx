"use client";

import React from "react";
import { Badge } from "@/lib/types";
import { Compass, Sparkles, FileText, Table, Presentation, Zap, Trophy, Lock } from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "@/hooks/useLanguage";

const iconMap: Record<string, any> = {
  Compass,
  Sparkles,
  FileText,
  Table,
  Presentation,
  Zap,
  Trophy,
};

interface BadgeCardProps {
  badge: Badge;
  unlocked: boolean;
}

export function BadgeCard({ badge, unlocked }: BadgeCardProps) {
  const IconComponent = iconMap[badge.icon] || Trophy;
  const { t } = useLanguage();

  return (
    <div
      className={clsx(
        "relative flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-300",
        unlocked
          ? "bg-white dark:bg-gray-900 border-amber-200 dark:border-amber-900/50 shadow-md hover:scale-105"
          : "bg-gray-50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 opacity-60 grayscale"
      )}
    >
      <div
        className={clsx(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300",
          unlocked
            ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/20 scale-110"
            : "bg-gray-200 dark:bg-gray-800 text-gray-400"
        )}
      >
        {unlocked ? <IconComponent className="w-7 h-7" /> : <Lock className="w-6 h-6 text-gray-400" />}
      </div>
      <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">{badge.title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{badge.description}</p>
      {unlocked && (
        <span className="mt-3 text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
          {t.unlockedLabel}
        </span>
      )}
    </div>
  );
}
