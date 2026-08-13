"use client";

import React, { useState } from "react";
import { LessonStep, OfficeAppId } from "@/lib/types";
import { WordSimulator } from "../simulators/WordSimulator";
import { ExcelSimulator } from "../simulators/ExcelSimulator";
import { PowerPointSimulator } from "../simulators/PowerPointSimulator";
import { OutlookSimulator } from "../simulators/OutlookSimulator";
import { AccessSimulator } from "../simulators/AccessSimulator";
import { OneNoteSimulator } from "../simulators/OneNoteSimulator";
import { TeamsSimulator } from "../simulators/TeamsSimulator";
import { Button } from "../ui/Button";
import { Sparkles, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";

interface StepCardProps {
  step: LessonStep;
  moduleId: OfficeAppId;
  onStepCompleted: () => void;
}

export function StepCard({ step, moduleId, onStepCompleted }: StepCardProps) {
  const [showHint, setShowHint] = useState(false);
  const [challengeDone, setChallengeDone] = useState(step.type !== "sim-challenge");
  const { playSuccess } = useSoundEffects();
  const { t } = useLanguage();

  const handleChallengeSuccess = (actionName: string) => {
    if (step.challengeTarget && step.challengeTarget.action === actionName) {
      playSuccess();
      setChallengeDone(true);
    } else {
      // Default auto-complete any simulator action in practice mode
      playSuccess();
      setChallengeDone(true);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Instruction Card */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-fluent-blue dark:text-blue-400 font-extrabold text-xs flex items-center justify-center">
            {step.stepNumber}
          </span>
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">{step.title}</h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{step.content}</p>

        {step.hint && (
          <div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <HelpCircle className="w-4 h-4" />
              {showHint ? t.hideHint : t.needHint}
            </button>
            {showHint && (
              <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/50 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{step.hint}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Simulator Embed for Challenges */}
      {step.type === "sim-challenge" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
            <span>{t.interactiveTask}</span>
            {challengeDone ? (
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> {t.goalAchieved}
              </span>
            ) : (
              <span className="text-amber-600 animate-pulse">{t.completeTaskToUnlock}</span>
            )}
          </div>

          {moduleId === "word" && (
            <WordSimulator
              onChallengeCompleted={handleChallengeSuccess}
              targetHighlightButton={step.challengeTarget?.action === "bold" ? "bold-btn" : undefined}
            />
          )}
          {moduleId === "excel" && <ExcelSimulator onChallengeCompleted={handleChallengeSuccess} />}
          {moduleId === "powerpoint" && <PowerPointSimulator onChallengeCompleted={handleChallengeSuccess} />}
          {moduleId === "outlook" && <OutlookSimulator />}
          {moduleId === "access" && <AccessSimulator />}
          {moduleId === "onenote" && <OneNoteSimulator />}
          {moduleId === "teams" && <TeamsSimulator />}
          {moduleId === "office-basics" && <WordSimulator onChallengeCompleted={handleChallengeSuccess} />}
        </div>
      )}

      {/* Action Footer */}
      <div className="flex justify-end pt-4">
        <Button
          size="lg"
          variant="primary"
          disabled={!challengeDone}
          onClick={onStepCompleted}
          className="px-8 shadow-glow"
        >
          <span>{t.continueBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
