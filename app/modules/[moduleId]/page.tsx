"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getModuleById, getLessonsForModule, moduleStylesMap } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  ChevronLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  Table,
  Presentation,
  Mail,
  Database,
  BookOpen,
  Users,
  LayoutGrid,
} from "lucide-react";

const iconMap: Record<string, any> = {
  LayoutGrid,
  FileText,
  Table,
  Presentation,
  Mail,
  Database,
  BookOpen,
  Users,
};

const inlineGradients: Record<string, string> = {
  "office-basics": "linear-gradient(135deg, #008272 0%, #00695c 50%, #004d40 100%)",
  word: "linear-gradient(135deg, #185ABD 0%, #104a9e 50%, #0d3c7d 100%)",
  excel: "linear-gradient(135deg, #107C41 0%, #0c6334 50%, #084925 100%)",
  powerpoint: "linear-gradient(135deg, #C43E1C 0%, #9e3116 50%, #7a250f 100%)",
  outlook: "linear-gradient(135deg, #0078D4 0%, #005a9e 50%, #004578 100%)",
  access: "linear-gradient(135deg, #A4373A 0%, #822b2e 50%, #612022 100%)",
  onenote: "linear-gradient(135deg, #7719AA 0%, #5c1385 50%, #430d61 100%)",
  teams: "linear-gradient(135deg, #464EB8 0%, #363d91 50%, #272c6b 100%)",
};

export default function ModuleDetailPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const { lang, t } = useLanguage();

  const module = getModuleById(moduleId, lang);
  const lessons = getLessonsForModule(moduleId, lang);
  const { progress } = useProgress();

  if (!module) return notFound();

  const Icon = iconMap[module.iconName] || FileText;
  const completedCount = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
  const progressPercent = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;
  const styleConfig = moduleStylesMap[moduleId] || {
    badgeStyle: "bg-blue-50 dark:bg-blue-950 text-fluent-blue",
    btnStyle: "bg-blue-600 hover:bg-blue-700 text-white shadow-glow",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Link */}
      <Link
        href="/modules"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-fluent-blue transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        {lang === "km" ? "ត្រឡប់ទៅកាន់មេរៀនទាំងអស់" : "Back to All Modules"}
      </Link>

      {/* Premium Vibrant Module Banner with Bulletproof Inline Linear Gradient */}
      <div
        style={{ background: inlineGradients[moduleId] || "linear-gradient(135deg, #0078D4 0%, #106EBE 100%)" }}
        className="p-8 sm:p-10 rounded-3xl text-white shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="space-y-4 max-w-xl relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-sm">{module.title}</h1>
          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">{module.description}</p>
        </div>

        <div className="p-6 bg-black/25 backdrop-blur-lg border border-white/25 rounded-2xl space-y-3 min-w-[250px] relative z-10 shadow-xl text-white">
          <div className="text-xs font-extrabold uppercase tracking-wider text-white/90">
            {lang === "km" ? "ការស្ទាត់ជំនាញ" : "Module Mastery"}
          </div>
          <ProgressBar progress={progressPercent} color="bg-white" size="md" showLabel />
          <div className="text-xs text-white/90 flex justify-between font-extrabold pt-1">
            <span>{completedCount} {t.of} {lessons.length} {lang === "km" ? "មេរៀន" : "Lessons"}</span>
            <span>{module.estimatedHours}</span>
          </div>
        </div>
      </div>

      {/* Lessons Checklist */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-fluent-blue" />
          <span>{lang === "km" ? "បញ្ជីរៀបរាប់មេរៀន" : "Lessons Curriculum"}</span>
        </h2>

        <div className="space-y-4">
          {lessons.map((lesson, idx) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);

            return (
              <Card
                key={lesson.id}
                hoverable
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-l-4 border-l-fluent-blue"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${
                      isCompleted
                        ? "bg-emerald-500 text-white shadow-emerald-500/20"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : idx + 1}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">{lesson.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${styleConfig.badgeStyle}`}>
                        {lesson.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{lesson.description}</p>

                    <div className="flex items-center gap-4 text-[11px] text-gray-500 dark:text-gray-400 font-bold pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-500" /> {lesson.durationMinutes} min
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 font-extrabold">
                        <Sparkles className="w-3.5 h-3.5 fill-current" /> +{lesson.xpReward} XP
                      </span>
                    </div>
                  </div>
                </div>

                <Link href={`/modules/${moduleId}/${lesson.id}`} className="w-full sm:w-auto shrink-0">
                  <Button variant="primary" size="md" className="w-full sm:w-auto font-extrabold shadow-md">
                    {isCompleted ? (lang === "km" ? "រំលឹកមេរៀន" : "Review Lesson") : (lang === "km" ? "ចាប់ផ្តើមរៀន" : "Start Lesson")}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
