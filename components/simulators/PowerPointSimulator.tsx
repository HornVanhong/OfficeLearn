"use client";

import React, { useState } from "react";
import { OfficeRibbon } from "./OfficeRibbon";
import { clsx } from "clsx";
import { Plus, Play, Sparkles, Image as ImageIcon } from "lucide-react";
import { Button } from "../ui/Button";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
}

interface PowerPointSimulatorProps {
  onChallengeCompleted?: (action: string) => void;
}

export function PowerPointSimulator({ onChallengeCompleted }: PowerPointSimulatorProps) {
  const [slides, setSlides] = useState<Slide[]>([
    { id: 1, title: "OfficeLearn Q3 Pitch Deck", subtitle: "Interactive Microsoft Office Platform" },
    { id: 2, title: "Key Product Features", subtitle: "Simulations, Quizzes & Shortcuts" },
  ]);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [theme, setTheme] = useState<"sapphire" | "emerald" | "sunset" | "midnight">("sapphire");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentSlide = slides[activeSlideIdx] || slides[0];

  const themeStyles = {
    sapphire: "bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white",
    emerald: "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white",
    sunset: "bg-gradient-to-br from-amber-600 via-rose-700 to-purple-900 text-white",
    midnight: "bg-gray-950 text-gray-100 border border-gray-800",
  };

  const handleAddNewSlide = () => {
    const newSlide: Slide = {
      id: slides.length + 1,
      title: `New Slide ${slides.length + 1}`,
      subtitle: "Click to add slide content",
    };
    setSlides([...slides, newSlide]);
    setActiveSlideIdx(slides.length);
    if (onChallengeCompleted) onChallengeCompleted("new_slide");
  };

  const handlePreviewTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 800);
    if (onChallengeCompleted) onChallengeCompleted("preview_transition");
  };

  return (
    <div className="w-full flex flex-col items-center shadow-lg rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 p-2 sm:p-4">
      {/* Ribbon */}
      <OfficeRibbon
        app="powerpoint"
        onAction={(action) => {
          if (action === "new_slide") handleAddNewSlide();
        }}
      />

      {/* Theme Toolbar */}
      <div className="w-full my-2 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-600 dark:text-gray-400">Design Theme:</span>
          {(["sapphire", "emerald", "sunset", "midnight"] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                if (onChallengeCompleted) onChallengeCompleted("change_theme");
              }}
              className={clsx(
                "px-2.5 py-1 rounded-md font-semibold capitalize border transition-all",
                theme === t
                  ? "border-orange-500 bg-orange-50 dark:bg-orange-950/60 text-orange-600 font-bold"
                  : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <Button size="sm" variant="secondary" onClick={handlePreviewTransition}>
          <Play className="w-3.5 h-3.5 fill-current" />
          Preview Transition
        </Button>
      </div>

      {/* Workspace Container */}
      <div className="w-full flex gap-3 h-[360px]">
        {/* Left Thumbnails Pane */}
        <div className="w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto shrink-0">
          {slides.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setActiveSlideIdx(idx)}
              className={clsx(
                "p-2 rounded-md border text-[10px] cursor-pointer transition-all relative overflow-hidden h-20 flex flex-col justify-center",
                themeStyles[theme],
                activeSlideIdx === idx
                  ? "ring-2 ring-orange-500 scale-105"
                  : "opacity-75 hover:opacity-100"
              )}
            >
              <span className="font-bold line-clamp-1">{s.title}</span>
              <span className="absolute top-1 left-1 text-[9px] opacity-60">#{idx + 1}</span>
            </div>
          ))}
          <button
            onClick={handleAddNewSlide}
            className="p-2 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 hover:text-orange-600 hover:border-orange-400 text-xs flex items-center justify-center gap-1 font-semibold transition-all mt-auto"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Slide
          </button>
        </div>

        {/* Main Canvas Editor */}
        <div
          className={clsx(
            "flex-1 rounded-lg border border-gray-200 dark:border-gray-800 p-8 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden transition-transform duration-500",
            themeStyles[theme],
            isTransitioning && "scale-95 opacity-50 rotate-1"
          )}
        >
          {/* Editable Title Frame */}
          <input
            type="text"
            value={currentSlide.title}
            onChange={(e) => {
              const updated = [...slides];
              updated[activeSlideIdx].title = e.target.value;
              setSlides(updated);
            }}
            className="w-full text-2xl sm:text-3xl font-extrabold bg-transparent text-center focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg p-1"
          />

          {/* Editable Subtitle Frame */}
          <input
            type="text"
            value={currentSlide.subtitle}
            onChange={(e) => {
              const updated = [...slides];
              updated[activeSlideIdx].subtitle = e.target.value;
              setSlides(updated);
            }}
            className="w-full text-sm sm:text-base opacity-80 bg-transparent text-center focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg p-1 mt-2"
          />

          {/* Image Placeholder Frame */}
          <div className="mt-6 border-2 border-dashed border-white/30 rounded-xl p-4 flex items-center gap-2 text-xs opacity-75 hover:opacity-100 cursor-pointer">
            <ImageIcon className="w-5 h-5" />
            <span>Click to add visual graphic image placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
