"use client";

import React, { useState } from "react";
import { WordSimulator } from "@/components/simulators/WordSimulator";
import { ExcelSimulator } from "@/components/simulators/ExcelSimulator";
import { PowerPointSimulator } from "@/components/simulators/PowerPointSimulator";
import { OutlookSimulator } from "@/components/simulators/OutlookSimulator";
import { AccessSimulator } from "@/components/simulators/AccessSimulator";
import { OneNoteSimulator } from "@/components/simulators/OneNoteSimulator";
import { TeamsSimulator } from "@/components/simulators/TeamsSimulator";
import { MonitorPlay, FileText, Table, Presentation, Mail, Database, BookOpen, Users } from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "@/hooks/useLanguage";

export default function SimulatorsPage() {
  const { lang, t } = useLanguage();
  const [activeSim, setActiveSim] = useState<"word" | "excel" | "powerpoint" | "outlook" | "access" | "onenote" | "teams">("excel");

  const simTabs = [
    { id: "excel", label: lang === "km" ? "សៀវភៅបញ្ជី Excel & រូបមន្ត" : "Excel Grid & Formulas", icon: Table, color: "text-emerald-600 border-emerald-500" },
    { id: "word", label: lang === "km" ? "របារឧបករណ៍ Word & Styles" : "Word Ribbon & Styles", icon: FileText, color: "text-blue-600 border-blue-500" },
    { id: "powerpoint", label: lang === "km" ? "កម្មវិធីកែសម្រួល PowerPoint" : "PowerPoint Slide Editor", icon: Presentation, color: "text-orange-600 border-orange-500" },
    { id: "outlook", label: lang === "km" ? "Outlook អ៊ីមែល & កាលវិភាគ" : "Outlook Mail & Calendar", icon: Mail, color: "text-sky-600 border-sky-500" },
    { id: "access", label: lang === "km" ? " Access មូលដ្ឋានទិន្នន័យ" : "Access Database Tables", icon: Database, color: "text-rose-600 border-rose-500" },
    { id: "onenote", label: lang === "km" ? "OneNote សៀវភៅកត់ត្រា" : "OneNote Digital Notebook", icon: BookOpen, color: "text-purple-600 border-purple-500" },
    { id: "teams", label: lang === "km" ? "Teams ការហៅ & Channels" : "Teams Channels & Calls", icon: Users, color: "text-indigo-600 border-indigo-500" },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/60 text-fluent-blue dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
          <MonitorPlay className="w-3.5 h-3.5" />
          {t.simulatorsPlayground}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {t.simulatorsTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t.simulatorsSub}
        </p>
      </div>

      {/* Simulator App Tab Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-200 dark:border-gray-800 no-scrollbar">
        {simTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSim === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSim(tab.id as any)}
              className={clsx(
                "px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border transition-all shrink-0",
                isActive
                  ? "bg-white dark:bg-gray-900 shadow-md " + tab.color
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Simulator Display */}
      <div className="w-full">
        {activeSim === "excel" && <ExcelSimulator />}
        {activeSim === "word" && <WordSimulator />}
        {activeSim === "powerpoint" && <PowerPointSimulator />}
        {activeSim === "outlook" && <OutlookSimulator />}
        {activeSim === "access" && <AccessSimulator />}
        {activeSim === "onenote" && <OneNoteSimulator />}
        {activeSim === "teams" && <TeamsSimulator />}
      </div>
    </div>
  );
}
