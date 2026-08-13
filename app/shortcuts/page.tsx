"use client";

import React, { useState, useEffect } from "react";
import { getAllShortcuts } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";
import { ShortcutItem } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Keyboard, Trophy } from "lucide-react";
import { clsx } from "clsx";

export default function ShortcutTrainerPage() {
  const { lang, t } = useLanguage();
  const shortcuts = getAllShortcuts(lang);
  const { progress, updateShortcutScore } = useProgress();
  const { playSuccess, playError } = useSoundEffects();

  const [activeApp, setActiveApp] = useState<string>("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const filteredShortcuts = activeApp === "all" ? shortcuts : shortcuts.filter((s) => s.app === activeApp);
  const currentShortcut = filteredShortcuts[currentIdx % filteredShortcuts.length] || shortcuts[0];

  const getOptions = (correctItem: ShortcutItem) => {
    const correctStr = correctItem.keys.join(" + ");
    const otherKeys = ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Alt + =", "F2", "Ctrl + M", "Ctrl + N", "F5"]
      .filter((k) => k !== correctStr);
    
    const wrong1 = otherKeys[0];
    const wrong2 = otherKeys[1];
    
    return [correctStr, wrong1, wrong2].sort(() => Math.random() - 0.5);
  };

  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (currentShortcut) {
      setOptions(getOptions(currentShortcut));
      setSelectedOption(null);
      setIsAnswered(false);
    }
  }, [currentIdx, activeApp, lang]);

  const handleStartGame = () => {
    setIsPlaying(true);
    setScore(0);
    setCurrentIdx(0);
  };

  const handleOptionClick = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const correctStr = currentShortcut.keys.join(" + ");
    if (opt === correctStr) {
      playSuccess();
      const newScore = score + 1;
      setScore(newScore);
      updateShortcutScore(newScore);
    } else {
      playError();
    }
  };

  const handleNext = () => {
    setCurrentIdx((prev) => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/60 text-fluent-blue dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
          <Keyboard className="w-3.5 h-3.5" />
          {t.shortcutTrainerTitle}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {t.shortcutHeaderTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t.shortcutHeaderSub}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {["all", "word", "excel", "powerpoint", "outlook"].map((app) => (
          <button
            key={app}
            onClick={() => {
              setActiveApp(app);
              setCurrentIdx(0);
            }}
            className={clsx(
              "px-4 py-2 rounded-xl font-extrabold text-xs capitalize transition-all border",
              activeApp === app
                ? "bg-fluent-blue text-white border-fluent-blue shadow-sm"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-blue-300"
            )}
          >
            {app === "all" ? t.allApps : app}
          </button>
        ))}
      </div>

      {/* High Score Banner */}
      <div className="flex justify-between items-center bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs font-bold text-amber-700 dark:text-amber-300">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span>{t.highScore}: {progress.shortcutHighScore}</span>
        </div>
        <span>{t.targetNinja}</span>
      </div>

      {/* Main Game Arena */}
      {!isPlaying ? (
        <Card className="text-center p-10 space-y-6">
          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-950 text-fluent-blue rounded-3xl flex items-center justify-center">
            <Keyboard className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">{t.shortcutArcadeTitle}</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              {t.shortcutHeaderSub}
            </p>
          </div>
          <Button size="lg" variant="primary" className="px-10 py-3 shadow-glow" onClick={handleStartGame}>
            {t.startArcade}
          </Button>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto p-8 space-y-6">
          {/* Game Stats Bar */}
          <div className="flex justify-between items-center text-xs font-bold text-gray-500 border-b pb-3 dark:border-gray-800">
            <span>{lang === "km" ? "ពិន្ទុ៖" : "Score:"} <span className="text-emerald-600 text-sm font-extrabold">{score}</span></span>
            <span className="uppercase text-[10px] bg-blue-50 dark:bg-blue-950 text-fluent-blue px-2 py-0.5 rounded font-extrabold">
              {currentShortcut.app}
            </span>
            <span>{lang === "km" ? "សំណួរទី" : "Question"} {currentIdx + 1}</span>
          </div>

          {/* Shortcut Question Prompt */}
          <div className="text-center space-y-3 py-4">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.shortcutQuestionPrompt}</div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
              "{currentShortcut.description}"
            </h2>
          </div>

          {/* Option Choices */}
          <div className="grid grid-cols-1 gap-3">
            {options.map((opt, idx) => {
              const correctStr = currentShortcut.keys.join(" + ");
              let btnClass = "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 hover:border-blue-400";

              if (selectedOption === opt) {
                btnClass = opt === correctStr
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 font-bold ring-2 ring-emerald-400"
                  : "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-700 font-bold ring-2 ring-rose-400";
              } else if (isAnswered && opt === correctStr) {
                btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 font-bold";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className={`w-full p-4 rounded-2xl border text-center font-mono font-bold text-base transition-all ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-2 flex justify-end">
              <Button size="md" variant="primary" onClick={handleNext}>
                {t.nextQuestion}
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Shortcut Reference Library List */}
      <div className="space-y-4 pt-6">
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100">
          {t.cheatSheetTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredShortcuts.map((sc) => (
            <Card key={sc.id} className="p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-gray-400">{sc.app}</span>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{sc.description}</p>
              </div>
              <div className="flex gap-1 font-mono text-xs font-extrabold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-lg border">
                {sc.keys.join(" + ")}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
