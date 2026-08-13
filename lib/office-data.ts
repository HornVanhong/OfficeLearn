import { OfficeModule, Lesson, ShortcutItem, PracticeChallenge, Badge } from "./types";
import { Language } from "./translations";
import {
  khmerModulesMap,
  khmerLessonsMap,
  khmerShortcutsMap,
  khmerChallengesMap,
  khmerBadgesMap,
} from "./khmer-data";

import modulesData from "@/data/modules.json";
import wordLessons from "@/data/word.json";
import excelLessons from "@/data/excel.json";
import pptLessons from "@/data/powerpoint.json";
import basicsLessons from "@/data/office-basics.json";
import outlookLessons from "@/data/outlook.json";
import accessLessons from "@/data/access.json";
import onenoteLessons from "@/data/onenote.json";
import teamsLessons from "@/data/teams.json";

import shortcutsData from "@/data/shortcuts.json";
import challengesData from "@/data/challenges.json";
import badgesData from "@/data/badges.json";

export const moduleStylesMap: Record<
  string,
  {
    bgGradient: string;
    iconBg: string;
    textColor: string;
    badgeStyle: string;
    borderHover: string;
    btnStyle: string;
  }
> = {
  "office-basics": {
    bgGradient: "bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white",
    iconBg: "bg-teal-500",
    textColor: "text-teal-600 dark:text-teal-400",
    badgeStyle: "bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    borderHover: "hover:border-teal-500 hover:shadow-teal-500/10",
    btnStyle: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/30",
  },
  word: {
    bgGradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white",
    iconBg: "bg-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeStyle: "bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    borderHover: "hover:border-blue-500 hover:shadow-blue-500/10",
    btnStyle: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30",
  },
  excel: {
    bgGradient: "bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white",
    iconBg: "bg-emerald-600",
    textColor: "text-emerald-600 dark:text-emerald-400",
    badgeStyle: "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    borderHover: "hover:border-emerald-500 hover:shadow-emerald-500/10",
    btnStyle: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30",
  },
  powerpoint: {
    bgGradient: "bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 text-white",
    iconBg: "bg-orange-600",
    textColor: "text-orange-600 dark:text-orange-400",
    badgeStyle: "bg-orange-50 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    borderHover: "hover:border-orange-500 hover:shadow-orange-500/10",
    btnStyle: "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/30",
  },
  outlook: {
    bgGradient: "bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white",
    iconBg: "bg-sky-600",
    textColor: "text-sky-600 dark:text-sky-400",
    badgeStyle: "bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    borderHover: "hover:border-sky-500 hover:shadow-sky-500/10",
    btnStyle: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/30",
  },
  access: {
    bgGradient: "bg-gradient-to-br from-rose-700 via-rose-800 to-pink-900 text-white",
    iconBg: "bg-rose-700",
    textColor: "text-rose-600 dark:text-rose-400",
    badgeStyle: "bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    borderHover: "hover:border-rose-500 hover:shadow-rose-500/10",
    btnStyle: "bg-rose-700 hover:bg-rose-800 text-white shadow-rose-700/30",
  },
  onenote: {
    bgGradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white",
    iconBg: "bg-purple-600",
    textColor: "text-purple-600 dark:text-purple-400",
    badgeStyle: "bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    borderHover: "hover:border-purple-500 hover:shadow-purple-500/10",
    btnStyle: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/30",
  },
  teams: {
    bgGradient: "bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white",
    iconBg: "bg-indigo-600",
    textColor: "text-indigo-600 dark:text-indigo-400",
    badgeStyle: "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    borderHover: "hover:border-indigo-500 hover:shadow-indigo-500/10",
    btnStyle: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/30",
  },
};

const allLessonsMap: Record<string, Lesson[]> = {
  "office-basics": basicsLessons as Lesson[],
  word: wordLessons as Lesson[],
  excel: excelLessons as Lesson[],
  powerpoint: pptLessons as Lesson[],
  outlook: outlookLessons as Lesson[],
  access: accessLessons as Lesson[],
  onenote: onenoteLessons as Lesson[],
  teams: teamsLessons as Lesson[],
};

export function getAllModules(lang: Language = "en"): OfficeModule[] {
  const list = modulesData as OfficeModule[];
  if (lang === "km") {
    return list.map((m) => {
      const km = khmerModulesMap[m.id];
      return km ? { ...m, ...km } : m;
    });
  }
  return list;
}

export function getModuleById(id: string, lang: Language = "en"): OfficeModule | undefined {
  return getAllModules(lang).find((m) => m.id === id);
}

export function getLessonsForModule(moduleId: string, lang: Language = "en"): Lesson[] {
  const lessons = allLessonsMap[moduleId] || [];
  if (lang === "km") {
    return lessons.map((l) => {
      const km = khmerLessonsMap[l.id];
      if (!km) return l;

      const mergedSteps = l.steps.map((step, idx) => {
        const kmStep = km.steps?.[idx];
        return kmStep ? { ...step, ...kmStep } : step;
      });

      const mergedQuiz = (l.quiz || []).map((q, idx) => {
        const kmQuiz = km.quiz?.[idx];
        return kmQuiz ? { ...q, ...kmQuiz } : q;
      });

      return {
        ...l,
        ...km,
        steps: mergedSteps,
        quiz: mergedQuiz,
      };
    });
  }
  return lessons;
}

export function getLessonById(moduleId: string, lessonId: string, lang: Language = "en"): Lesson | undefined {
  const lessons = getLessonsForModule(moduleId, lang);
  return lessons.find((l) => l.id === lessonId);
}

export function getAllLessons(lang: Language = "en"): Lesson[] {
  const modules = Object.keys(allLessonsMap);
  return modules.flatMap((modId) => getLessonsForModule(modId, lang));
}

export function getAllShortcuts(lang: Language = "en"): ShortcutItem[] {
  const list = shortcutsData as ShortcutItem[];
  if (lang === "km") {
    return list.map((sc) => {
      const km = khmerShortcutsMap[sc.id];
      return km ? { ...sc, ...km } : sc;
    });
  }
  return list;
}

export function getAllChallenges(lang: Language = "en"): PracticeChallenge[] {
  const list = challengesData as PracticeChallenge[];
  if (lang === "km") {
    return list.map((ch) => {
      const km = khmerChallengesMap[ch.id];
      return km ? { ...ch, ...km } : ch;
    });
  }
  return list;
}

export function getAllBadges(lang: Language = "en"): Badge[] {
  const list = badgesData as Badge[];
  if (lang === "km") {
    return list.map((b) => {
      const km = khmerBadgesMap[b.id];
      return km ? { ...b, ...km } : b;
    });
  }
  return list;
}
