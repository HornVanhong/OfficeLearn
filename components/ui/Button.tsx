"use client";

import React from "react";
import { clsx } from "clsx";
import { useSoundEffects } from "@/hooks/useSoundEffects";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "office";
  officeApp?: string; // e.g. "word", "excel", "powerpoint"
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", officeApp, size = "md", className, children, onClick, ...props }, ref) => {
    const { playClick } = useSoundEffects();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClick();
      if (onClick) onClick(e);
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-xs font-medium rounded-md",
      md: "px-4 py-2 text-sm font-semibold rounded-lg",
      lg: "px-6 py-3 text-base font-bold rounded-xl",
    };

    const variantClasses = {
      primary: "bg-fluent-blue hover:bg-fluent-blueHover text-white shadow-sm hover:shadow-fluent transition-all duration-200 active:scale-95",
      secondary: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all active:scale-95",
      outline: "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all active:scale-95",
      ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all active:scale-95",
      danger: "bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all active:scale-95",
      success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all active:scale-95",
      office: officeApp ? `text-white shadow-sm transition-all active:scale-95` : "bg-blue-600 text-white",
    };

    const appBgMap: Record<string, string> = {
      "office-basics": "bg-[#008272] hover:bg-[#006e60]",
      word: "bg-[#185ABD] hover:bg-[#124696]",
      excel: "bg-[#107C41] hover:bg-[#0c5d31]",
      powerpoint: "bg-[#C43E1C] hover:bg-[#9c3116]",
      outlook: "bg-[#0078D4] hover:bg-[#005a9e]",
      access: "bg-[#A4373A] hover:bg-[#7e292c]",
      onenote: "bg-[#7719AA] hover:bg-[#5a1282]",
      teams: "bg-[#464EB8] hover:bg-[#343a8c]",
    };

    const officeClass = variant === "office" && officeApp ? appBgMap[officeApp] || "bg-blue-600" : "";

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={clsx(
          "inline-flex items-center justify-center gap-2 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluent-blue disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variant !== "office" && variantClasses[variant],
          officeClass,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
