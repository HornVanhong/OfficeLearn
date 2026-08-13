"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface XPIndicatorProps {
  xp: number;
}

export function XPIndicator({ xp }: XPIndicatorProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-full text-amber-600 dark:text-amber-400 font-bold text-xs shadow-sm">
      <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-500 animate-pulse" />
      <span>{xp.toLocaleString()} XP</span>
    </div>
  );
}
