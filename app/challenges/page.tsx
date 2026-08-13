"use client";

import React, { useState } from "react";
import { getAllChallenges } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WordSimulator } from "@/components/simulators/WordSimulator";
import { ExcelSimulator } from "@/components/simulators/ExcelSimulator";
import { PowerPointSimulator } from "@/components/simulators/PowerPointSimulator";
import { OutlookSimulator } from "@/components/simulators/OutlookSimulator";
import { Award, Sparkles, ArrowRight, ChevronLeft } from "lucide-react";

export default function PracticeChallengesPage() {
  const { lang, t } = useLanguage();
  const challenges = getAllChallenges(lang);
  const { addXP } = useProgress();
  const { playSuccess } = useSoundEffects();

  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const activeChallenge = challenges.find((c) => c.id === activeChallengeId);

  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(updated);

    if (activeChallenge) {
      const allDone = activeChallenge.checklist.every((item) => updated[item.id]);
      if (allDone) {
        playSuccess();
        addXP(activeChallenge.xpReward);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5" />
          {t.workplaceTasks}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {t.workplaceTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t.workplaceSubtitle}
        </p>
      </div>

      {!activeChallengeId ? (
        /* Challenges Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((ch) => (
            <Card key={ch.id} hoverable className="flex flex-col justify-between space-y-4 p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-fluent-blue font-extrabold text-xs uppercase">
                    {ch.app}
                  </span>
                  <span className="text-amber-500 font-extrabold text-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> +{ch.xpReward} XP
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">{ch.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{ch.description}</p>

                <div className="border-t pt-3 border-gray-100 dark:border-gray-800 space-y-1">
                  <span className="text-[11px] font-bold text-gray-400 uppercase">{t.taskCriteria}</span>
                  {ch.checklist.map((item) => (
                    <div key={item.id} className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="office"
                officeApp={ch.app}
                size="md"
                className="w-full justify-between mt-4"
                onClick={() => {
                  setActiveChallengeId(ch.id);
                  setCompletedTasks({});
                }}
              >
                <span>{t.startTask}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        /* Active Task Workspace */
        <div className="space-y-6">
          <button
            onClick={() => setActiveChallengeId(null)}
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-blue-600"
          >
            <ChevronLeft className="w-4 h-4" /> {t.backToChallenges}
          </button>

          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">{activeChallenge?.title}</h2>
              <span className="text-amber-500 font-extrabold text-sm flex items-center gap-1">
                <Sparkles className="w-4 h-4 fill-current" /> +{activeChallenge?.xpReward} {t.xpRewardLabel}
              </span>
            </div>

            {/* Checklist */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border space-y-2">
              <div className="font-bold text-xs text-gray-700 dark:text-gray-300 uppercase">{t.requirementsChecklist}</div>
              {activeChallenge?.checklist.map((item) => {
                const isChecked = completedTasks[item.id] || false;
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleTask(item.id)}
                    className="flex items-center gap-2 cursor-pointer text-xs p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <input type="checkbox" checked={isChecked} onChange={() => {}} className="rounded text-blue-600" />
                    <span className={isChecked ? "line-through text-gray-400 font-semibold" : "text-gray-800 dark:text-gray-200"}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Simulator Embed for Task */}
            <div className="pt-4">
              {activeChallenge?.app === "word" && <WordSimulator />}
              {activeChallenge?.app === "excel" && <ExcelSimulator />}
              {activeChallenge?.app === "powerpoint" && <PowerPointSimulator />}
              {activeChallenge?.app === "outlook" && <OutlookSimulator />}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
