"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllModules, moduleStylesMap } from "@/lib/office-data";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Sparkles,
  MonitorPlay,
  Keyboard,
  Flame,
  ArrowRight,
  CheckCircle2,
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

export default function LandingPage() {
  const { lang, t } = useLanguage();
  const modules = getAllModules(lang);

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-blue-50/60 via-white to-gray-50 dark:from-blue-950/30 dark:via-gray-950 dark:to-gray-950">
        {/* Glow backdrop blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-teal-500/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-fluent-blue dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t.heroTag}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-gray-100 tracking-tight max-w-4xl mx-auto leading-snug sm:leading-snug">
            {t.heroTitle1}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-teal-400">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" variant="primary" className="w-full sm:w-auto px-8 py-4 text-base shadow-glow font-extrabold">
                <span>{t.startLearning}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link href="/simulators">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base font-bold">
                <MonitorPlay className="w-5 h-5 text-fluent-blue" />
                <span>{t.trySimulators}</span>
              </Button>
            </Link>
          </div>

          {/* Micro stats banner */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs font-bold text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{lang === "km" ? "100% រក្សាទុកទិន្នន័យក្នុងម៉ាស៊ីន local" : "100% Frontend & Local Storage"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 shrink-0" />
              <span>{lang === "km" ? "ពិន្ទុ XP និងថ្ងៃបន្តបន្ទាប់" : "Daily Streak & XP Gamification"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <Keyboard className="w-4 h-4 text-blue-500 shrink-0" />
              <span>{lang === "km" ? "ផ្លូវកាត់ក្តារចុច និងលំហាត់អនុវត្ត" : "Shortcuts & Workplace Tasks"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Office Apps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-gray-100">
            {lang === "km" ? "កម្មវិធី Microsoft Office ទាំងអស់" : "Complete Microsoft Office Suite"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto font-medium">
            {lang === "km" ? "ចុចលើមេរៀនខាងក្រោមដើម្បីចូលរៀន" : "Click any module below to explore step-by-step interactive lessons and simulations."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = iconMap[mod.iconName] || FileText;
            const styleConfig = moduleStylesMap[mod.id] || {
              iconBg: "bg-blue-600",
              textColor: "text-blue-600",
              badgeStyle: "bg-blue-50 text-blue-700",
              borderHover: "hover:border-blue-500",
            };

            return (
              <Link key={mod.id} href={`/modules/${mod.id}`}>
                <Card hoverable className={`h-full flex flex-col justify-between group p-6 ${styleConfig.borderHover} transition-all duration-300`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl ${styleConfig.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md border ${styleConfig.badgeStyle}`}>
                        {mod.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2 font-normal leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400 font-bold mt-6">
                    <span>{mod.totalLessons} {lang === "km" ? "មេរៀន" : "Lessons"}</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {lang === "km" ? "ចូលរៀន" : "Start"} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
