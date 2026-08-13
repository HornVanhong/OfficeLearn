"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  BarChart3,
  PlusSquare,
  Save,
  Undo,
  Redo,
  Table as TableIcon,
} from "lucide-react";

interface OfficeRibbonProps {
  app: "word" | "excel" | "powerpoint" | "outlook" | "general";
  activeState?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    alignment?: "left" | "center" | "right";
    heading?: string;
  };
  onAction?: (action: string, payload?: any) => void;
  targetHighlightButton?: string; // e.g. "bold-btn" for quiz challenge callouts
}

export function OfficeRibbon({
  app,
  activeState = {},
  onAction,
  targetHighlightButton,
}: OfficeRibbonProps) {
  const [activeTab, setActiveTab] = useState<"Home" | "Insert" | "Layout" | "Design" | "References">("Home");
  const { playClick } = useSoundEffects();
  const { lang, t } = useLanguage();

  const handleBtnClick = (actionName: string, payload?: any) => {
    playClick();
    if (onAction) onAction(actionName, payload);
  };

  const tabs: ("Home" | "Insert" | "Layout" | "Design" | "References")[] = [
    "Home",
    "Insert",
    "Layout",
    "Design",
    "References",
  ];

  const tabLabels: Record<string, { en: string; km: string }> = {
    Home: { en: "Home", km: "ទំព័រដើម" },
    Insert: { en: "Insert", km: "បញ្ចូល" },
    Layout: { en: "Layout", km: "ប្លង់" },
    Design: { en: "Design", km: "រចនា" },
    References: { en: "References", km: "ឯកសារយោង" },
  };

  const appHeaderColors: Record<string, string> = {
    word: "bg-[#185ABD]",
    excel: "bg-[#107C41]",
    powerpoint: "bg-[#C43E1C]",
    outlook: "bg-[#0078D4]",
    general: "bg-blue-600",
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-t-2xl overflow-hidden shadow-sm">
      {/* Top Application Bar */}
      <div className={clsx("px-4 py-1.5 flex items-center justify-between text-white text-xs font-semibold", appHeaderColors[app])}>
        <div className="flex items-center gap-3">
          <span className="font-extrabold uppercase tracking-wider text-[11px] bg-white/20 px-2 py-0.5 rounded">
            {app.toUpperCase()} {lang === "km" ? "កម្មវិធីត្រាប់តាម" : "SIMULATOR"}
          </span>
          <span className="opacity-80 hidden sm:inline-block">{lang === "km" ? "ឯកសារ១ - Microsoft Office" : "Document1 - Microsoft Office"}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => handleBtnClick("undo")} className="p-1 hover:bg-white/20 rounded" title={lang === "km" ? "មិនធ្វើវិញ" : "Undo"}>
            <Undo className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleBtnClick("redo")} className="p-1 hover:bg-white/20 rounded" title={lang === "km" ? "ធ្វើវិញ" : "Redo"}>
            <Redo className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleBtnClick("save")} className="p-1 hover:bg-white/20 rounded" title={lang === "km" ? "រក្សាទុកឯកសារ" : "Save Document"}>
            <Save className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Ribbon Tabs Header */}
      <div className="flex items-center gap-1 px-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-xs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-3 py-2 font-medium border-b-2 transition-all",
              activeTab === tab
                ? "border-fluent-blue text-fluent-blue dark:text-blue-400 font-bold bg-white dark:bg-gray-900"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            )}
          >
            {tabLabels[tab]?.[lang] || tab}
          </button>
        ))}
      </div>

      {/* Ribbon Toolbar Content */}
      <div className="p-2.5 bg-white dark:bg-gray-900 flex flex-wrap items-center gap-4 text-xs">
        {activeTab === "Home" && (
          <>
            {/* Font Formatting Group */}
            <div className="flex items-center gap-1 pr-3 border-r border-gray-200 dark:border-gray-800">
              <button
                id="bold-btn"
                onClick={() => handleBtnClick("bold")}
                className={clsx(
                  "p-2 rounded-lg font-bold transition-all relative",
                  activeState.bold
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue dark:text-blue-400 ring-2 ring-blue-500/50"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
                  targetHighlightButton === "bold-btn" && "animate-pulse ring-4 ring-amber-400"
                )}
                title="Bold (Ctrl+B)"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                id="italic-btn"
                onClick={() => handleBtnClick("italic")}
                className={clsx(
                  "p-2 rounded-lg font-bold transition-all relative",
                  activeState.italic
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue dark:text-blue-400 ring-2 ring-blue-500/50"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
                  targetHighlightButton === "italic-btn" && "animate-pulse ring-4 ring-amber-400"
                )}
                title="Italic (Ctrl+I)"
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                id="underline-btn"
                onClick={() => handleBtnClick("underline")}
                className={clsx(
                  "p-2 rounded-lg font-bold transition-all relative",
                  activeState.underline
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue dark:text-blue-400 ring-2 ring-blue-500/50"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
                  targetHighlightButton === "underline-btn" && "animate-pulse ring-4 ring-amber-400"
                )}
                title="Underline (Ctrl+U)"
              >
                <Underline className="w-4 h-4" />
              </button>
            </div>

            {/* Paragraph Alignment Group */}
            <div className="flex items-center gap-1 pr-3 border-r border-gray-200 dark:border-gray-800">
              <button
                onClick={() => handleBtnClick("align_left")}
                className={clsx(
                  "p-2 rounded-lg transition-all",
                  activeState.alignment === "left"
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
                title={lang === "km" ? "តម្រឹមឆ្វេង" : "Align Left"}
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button
                id="align-center-btn"
                onClick={() => handleBtnClick("align_center")}
                className={clsx(
                  "p-2 rounded-lg transition-all",
                  activeState.alignment === "center"
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
                title={lang === "km" ? "តម្រឹមចំកណ្តាល" : "Align Center"}
              >
                <AlignCenter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleBtnClick("align_right")}
                className={clsx(
                  "p-2 rounded-lg transition-all",
                  activeState.alignment === "right"
                    ? "bg-blue-100 dark:bg-blue-900/60 text-fluent-blue"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
                title={lang === "km" ? "តម្រឹមស្ដាំ" : "Align Right"}
              >
                <AlignRight className="w-4 h-4" />
              </button>
            </div>

            {/* App Specific Extra Ribbon Tools */}
            {app === "word" && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleBtnClick("heading_1")}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-gray-800 dark:text-gray-200 rounded-lg font-bold text-xs"
                >
                  Heading 1
                </button>
                <button
                  onClick={() => handleBtnClick("bullet_list")}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"
                  title={lang === "km" ? "បញ្ជីចំណុច" : "Bulleted List"}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            )}

            {app === "excel" && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBtnClick("insert_sum")}
                  className="px-2 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold rounded-lg hover:bg-emerald-200 flex items-center gap-1"
                >
                  {t.autoSumBtn}
                </button>
              </div>
            )}

            {app === "powerpoint" && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBtnClick("new_slide")}
                  className="px-2.5 py-1 bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold rounded-lg hover:bg-orange-200 flex items-center gap-1"
                >
                  <PlusSquare className="w-4 h-4" />
                  {t.newSlideBtn}
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "Insert" && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleBtnClick("insert_table")}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium flex items-center gap-1.5 hover:bg-gray-200"
            >
              <TableIcon className="w-4 h-4" />
              {lang === "km" ? "តារាង" : "Table"}
            </button>
            <button
              onClick={() => handleBtnClick("insert_chart")}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium flex items-center gap-1.5 hover:bg-gray-200"
            >
              <BarChart3 className="w-4 h-4" />
              {t.insertChartBtn}
            </button>
          </div>
        )}

        {activeTab !== "Home" && activeTab !== "Insert" && (
          <div className="text-gray-500 dark:text-gray-400 text-xs py-1">
            {tabLabels[activeTab]?.[lang] || activeTab} {lang === "km" ? "ជម្រើសត្រូវបានអនុញ្ញាតសម្រាប់ឯកសារ" : "tab options enabled for document design & references."}
          </div>
        )}
      </div>
    </div>
  );
}
