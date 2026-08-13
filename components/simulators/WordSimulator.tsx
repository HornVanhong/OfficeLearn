"use client";

import React, { useState } from "react";
import { OfficeRibbon } from "./OfficeRibbon";
import { clsx } from "clsx";
import { useLanguage } from "@/hooks/useLanguage";

interface WordSimulatorProps {
  onChallengeCompleted?: (action: string) => void;
  targetHighlightButton?: string;
}

export function WordSimulator({ onChallengeCompleted, targetHighlightButton }: WordSimulatorProps) {
  const { lang } = useLanguage();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("left");
  const [isHeading, setIsHeading] = useState(false);
  const [hasBullets, setHasBullets] = useState(false);
  const [docText, setDocText] = useState(
    lang === "km"
      ? "សេចក្តីសង្ខេបប្រតិបត្តិ & ទិដ្ឋភាពទូទៅនៃគម្រោង\nការធ្វើត្រាប់តាមឯកសារអន្តរកម្ម Microsoft OfficeLearn។"
      : "Executive Summary & Project Overview\nMicrosoft OfficeLearn interactive document simulation."
  );

  const handleRibbonAction = (action: string) => {
    if (action === "bold") {
      setIsBold((prev) => !prev);
      if (onChallengeCompleted) onChallengeCompleted("bold");
    } else if (action === "italic") {
      setIsItalic((prev) => !prev);
      if (onChallengeCompleted) onChallengeCompleted("italic");
    } else if (action === "underline") {
      setIsUnderline((prev) => !prev);
      if (onChallengeCompleted) onChallengeCompleted("underline");
    } else if (action === "align_left") {
      setAlignment("left");
      if (onChallengeCompleted) onChallengeCompleted("align_left");
    } else if (action === "align_center") {
      setAlignment("center");
      if (onChallengeCompleted) onChallengeCompleted("align_center");
    } else if (action === "align_right") {
      setAlignment("right");
      if (onChallengeCompleted) onChallengeCompleted("align_right");
    } else if (action === "heading_1") {
      setIsHeading((prev) => !prev);
      if (onChallengeCompleted) onChallengeCompleted("heading_1");
    } else if (action === "bullet_list") {
      setHasBullets((prev) => !prev);
      if (onChallengeCompleted) onChallengeCompleted("bullet_list");
    }
  };

  return (
    <div className="w-full flex flex-col items-center shadow-lg rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 p-2 sm:p-4">
      {/* Ribbon */}
      <OfficeRibbon
        app="word"
        activeState={{
          bold: isBold,
          italic: isItalic,
          underline: isUnderline,
          alignment,
        }}
        onAction={handleRibbonAction}
        targetHighlightButton={targetHighlightButton}
      />

      {/* Word Page Canvas */}
      <div className="w-full max-w-2xl min-h-[340px] my-4 p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-lg font-sans transition-all">
        {/* Document Header Bar */}
        <div className="text-[11px] font-bold text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6 flex justify-between">
          <span>{lang === "km" ? "ឯកសារ - ទំព័រ ១ នៃ ១" : "DOCUMENT - PAGE 1 OF 1"}</span>
          <span>100% ZOOM</span>
        </div>

        {/* Live Canvas Text */}
        <div
          className={clsx(
            "transition-all duration-200 focus:outline-none min-h-[220px]",
            isBold && "font-bold text-gray-900 dark:text-white",
            isItalic && "italic",
            isUnderline && "underline",
            isHeading ? "text-2xl font-extrabold text-blue-700 dark:text-blue-400 mb-4" : "text-base text-gray-800 dark:text-gray-200",
            alignment === "left" && "text-left",
            alignment === "center" && "text-center",
            alignment === "right" && "text-right"
          )}
        >
          {hasBullets && <span className="inline-block mr-2 font-bold text-blue-600">•</span>}
          <textarea
            value={docText}
            onChange={(e) => setDocText(e.target.value)}
            className="w-full h-44 bg-transparent resize-none focus:outline-none"
          />
        </div>

        {/* Page Footer */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-4 flex items-center justify-between text-[11px] font-bold text-gray-400">
          <span>{lang === "km" ? "ចំនួនពាក្យ៖" : "Words:"} {docText.split(/\s+/).filter(Boolean).length}</span>
          <span>{lang === "km" ? "ភាសា៖ ខ្មែរ (KM)" : "Language: English (US)"}</span>
        </div>
      </div>
    </div>
  );
}
