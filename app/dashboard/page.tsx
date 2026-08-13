"use client";

import React from "react";
import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import { useLanguage } from "@/hooks/useLanguage";
import { getAllModules, getAllLessons, getAllBadges, moduleStylesMap } from "@/lib/office-data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { BadgeCard } from "@/components/ui/BadgeCard";
import {
  Trophy,
  Sparkles,
  Flame,
  BookOpen,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  FileText,
  Table,
  Presentation,
  Mail,
  Database,
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

export default function DashboardPage() {
  const { progress, resetProgress, isLoaded } = useProgress();
  const { lang, t } = useLanguage();
  const modules = getAllModules(lang);
  const allLessons = getAllLessons(lang);
  const allBadges = getAllBadges(lang);

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500 font-semibold">
        {t.loadingProfile}
      </div>
    );
  }

  // Find next incomplete lesson
  const nextIncompleteLesson = allLessons.find((l) => !progress.completedLessons.includes(l.id)) || allLessons[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="space-y-3 max-w-xl relative z-10">
          <span className="px-3 py-1 bg-white/10 rounded-full text-blue-300 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {t.dashboard}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            {t.welcomeBack}
          </h1>
          <p className="text-sm text-blue-100/80 leading-relaxed font-medium">
            {t.welcomeSubtitle}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div className="text-xs text-blue-200 font-semibold">{t.xpPoints}</div>
            <div className="text-xl font-black text-amber-400 mt-1 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 fill-current" />
              {progress.totalXP}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div className="text-xs text-blue-200 font-semibold">{t.dayStreak}</div>
            <div className="text-xl font-black text-orange-400 mt-1 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-current" />
              {progress.streakDays}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div className="text-xs text-blue-200 font-semibold">{t.completed}</div>
            <div className="text-xl font-black text-emerald-400 mt-1 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              {progress.completedLessons.length} / {allLessons.length}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div className="text-xs text-blue-200 font-semibold">{t.badges}</div>
            <div className="text-xl font-black text-purple-300 mt-1 flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4" />
              {progress.unlockedBadges.length}
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Primary Action Banner */}
      {nextIncompleteLesson && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-blue-200 dark:border-blue-900/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1">
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
              <Play className="w-3.5 h-3.5 fill-current" /> {t.continueLearning}
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100">
              {nextIncompleteLesson.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {nextIncompleteLesson.description}
            </p>
          </div>

          <Link href={`/modules/${nextIncompleteLesson.moduleId}/${nextIncompleteLesson.id}`}>
            <Button size="lg" variant="primary" className="px-6 shadow-glow shrink-0 font-bold">
              <span>{t.resumeLesson}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Card>
      )}

      {/* Office App Progress Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fluent-blue" />
            <span>{t.appsProgress}</span>
          </h2>
          <span className="text-xs text-gray-500 font-bold">8 Modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = iconMap[mod.iconName] || FileText;
            const moduleLessons = allLessons.filter((l) => l.moduleId === mod.id);
            const completedCount = moduleLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
            const progressPercent = moduleLessons.length > 0 ? (completedCount / moduleLessons.length) * 100 : 0;
            const styleConfig = moduleStylesMap[mod.id] || { iconBg: "bg-blue-600", borderHover: "hover:border-blue-500" };

            return (
              <Card key={mod.id} hoverable className={`flex flex-col justify-between space-y-4 p-6 ${styleConfig.borderHover} transition-all duration-300`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${styleConfig.iconBg} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-gray-500">
                      {completedCount}/{moduleLessons.length}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">{mod.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">{mod.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <ProgressBar progress={progressPercent} size="sm" showLabel />

                  <Link href={`/modules/${mod.id}`} className="block">
                    <Button variant="outline" size="sm" className="w-full justify-between font-bold">
                      <span>{progressPercent > 0 ? (lang === "km" ? "បន្តមេរៀន" : "Continue") : (lang === "km" ? "ចាប់ផ្តើម" : "Start")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Badges Wall Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>{t.recentBadges}</span>
          </h2>
          <Link href="/achievements" className="text-xs font-extrabold text-fluent-blue hover:underline">
            {lang === "km" ? "មើលមេដាយទាំងអស់" : "View All Badges"} ({allBadges.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {allBadges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} unlocked={progress.unlockedBadges.includes(badge.id)} />
          ))}
        </div>
      </div>

      {/* Footer Controls / Progress Reset */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-end">
        <button
          onClick={() => {
            if (confirm(lang === "km" ? "តើអ្នកប្រាកដជាចង់កំណត់ឡើងវិញនូវវឌ្ឍនភាពមេរៀនទាំងអស់មែនទេ?" : "Are you sure you want to reset your local learning progress?")) {
              resetProgress();
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.resetProgress}
        </button>
      </div>
    </div>
  );
}
