"use client";

import React from "react";
import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  glass?: boolean;
  children: React.ReactNode;
}

export function Card({ hoverable = false, glass = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 border transition-all duration-300",
        glass
          ? "fluent-glass"
          : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-none",
        hoverable && "hover:-translate-y-1 hover:shadow-fluentHover hover:border-blue-200 dark:hover:border-blue-900/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
