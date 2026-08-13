"use client";

import React from "react";
import { Flame } from "lucide-react";

interface StreakCounterProps {
  streakDays: number;
}

export function StreakCounter({ streakDays }: StreakCounterProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full text-orange-600 dark:text-orange-400 font-bold text-xs shadow-sm">
      <Flame className="w-4 h-4 fill-orange-500 text-orange-600 animate-bounce" />
      <span>{streakDays} Day Streak</span>
    </div>
  );
}
