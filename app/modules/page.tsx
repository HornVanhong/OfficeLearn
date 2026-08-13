"use client";

import React from "react";
import Link from "next/link";
import { getAllModules, getAllLessons, moduleStylesMap } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  ArrowRight,
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

export default function ModulesPage() {
  const { lang } = useLanguage();
  const modules = getAllModules(lang);
  const allLessons = getAllLessons(lang);
  const { progress } = useProgress();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3.5 py-1 bg-blue-100 dark:bg-blue-950/60 text-fluent-blue dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider rounded-full border border-blue-200 dark:border-blue-800">
          {lang === "km" ? "បញ្ជីមេរៀនទាំងអស់" : "Curriculum Catalog"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-gray-100">
          {lang === "km" ? "មេរៀន Microsoft Office" : "Microsoft Office Modules"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          {lang === "km" ? "ជ្រើសរើសកម្មវិធី Office ដើម្បីចូលរៀនមេរៀនអន្តរកម្ម" : "Select an Office application to access interactive lessons, ribbon challenges, and quizzes."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((mod) => {
          const Icon = iconMap[mod.iconName] || FileText;
          const moduleLessons = allLessons.filter((l) => l.moduleId === mod.id);
          const completedCount = moduleLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
          const progressPercent = moduleLessons.length > 0 ? (completedCount / moduleLessons.length) * 100 : 0;
          const styleConfig = moduleStylesMap[mod.id] || {
            iconBg: "bg-blue-600",
            textColor: "text-blue-600",
            badgeStyle: "bg-blue-50 text-blue-700",
            borderHover: "hover:border-blue-500",
          };

          return (
            <Link key={mod.id} href={`/modules/${mod.id}`}>
              <Card hoverable className={`h-full flex flex-col justify-between space-y-4 p-6 ${styleConfig.borderHover} transition-all duration-300`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${styleConfig.iconBg} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md border ${styleConfig.badgeStyle}`}>
                      {mod.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">{mod.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed font-normal">{mod.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <ProgressBar progress={progressPercent} size="sm" showLabel />
                  <Button variant="office" officeApp={mod.id} size="sm" className="w-full justify-between font-bold">
                    <span>{lang === "km" ? "ចូលមើលមេរៀន" : "Explore Module"} ({moduleLessons.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
