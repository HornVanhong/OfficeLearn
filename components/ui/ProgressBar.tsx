"use client";

import React from "react";
import { clsx } from "clsx";

interface ProgressBarProps {
  progress: number; // 0 to 100
  color?: string; // hex or tailwind class
  showLabel?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  progress,
  color = "bg-fluent-blue",
  showLabel = false,
  className,
  size = "md",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  const sizeMap = {
    sm: "h-1.5",
    md: "h-3",
    lg: "h-4",
  };

  return (
    <div className={clsx("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">
          <span>Progress</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className={clsx("w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden", sizeMap[size])}>
        <div
          className={clsx("h-full transition-all duration-500 ease-out rounded-full", color)}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
