"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useProgress } from "@/hooks/useProgress";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { XPIndicator } from "../gamification/XPIndicator";
import { StreakCounter } from "../gamification/StreakCounter";
import { AITutorDrawer } from "../gamification/AITutorDrawer";
import { BadgeUnlockModal } from "../gamification/BadgeUnlockModal";
import {
  LayoutDashboard,
  BookOpen,
  MonitorPlay,
  Keyboard,
  Award,
  Trophy,
  Moon,
  Sun,
  Bot,
  Menu,
  X,
  GraduationCap,
  Globe,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { progress, newlyUnlockedBadge, clearUnlockedBadgeModal } = useProgress();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: t.dashboard, icon: LayoutDashboard },
    { href: "/modules", label: t.modules, icon: BookOpen },
    { href: "/simulators", label: t.simulators, icon: MonitorPlay },
    { href: "/shortcuts", label: t.shortcuts, icon: Keyboard },
    { href: "/challenges", label: t.challenges, icon: Award },
    { href: "/achievements", label: t.badges, icon: Trophy },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full fluent-glass border-b border-gray-200/60 dark:border-gray-800/80 transition-colors shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-teal-400">
                OfficeLearn
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 shrink-0">
                {lang === "km" ? "ខ្មែរ" : "MS Office"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all shrink-0",
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/80"
                  )}
                >
                  <Icon className={clsx("w-4 h-4 shrink-0", isActive ? "text-white" : "text-blue-600 dark:text-blue-400")} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Gamification Stats, Language Toggle & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <StreakCounter streakDays={progress.streakDays} />
              <XPIndicator xp={progress.totalXP} />
            </div>

            {/* Khmer / English Language Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "km" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-extrabold whitespace-nowrap transition-all hover:bg-blue-100 dark:hover:bg-blue-900/80 active:scale-95 shadow-sm"
              title="Switch Language / ប្តូរភាសា"
            >
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{lang === "km" ? "🇰🇭 ភាសាខ្មែរ" : "🇺🇸 English"}</span>
            </button>

            {/* AI Tutor Button */}
            <button
              onClick={() => setIsTutorOpen(true)}
              className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800 transition-transform active:scale-95 shadow-sm"
              title="Open AI Office Tutor"
            >
              <Bot className="w-4.5 h-4.5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform active:scale-95 shadow-sm"
              title="Toggle Light/Dark Theme"
            >
              {theme === "dark" ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 space-y-2 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100 dark:border-gray-800">
              <StreakCounter streakDays={progress.streakDays} />
              <XPIndicator xp={progress.totalXP} />
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <Icon className={clsx("w-4 h-4", isActive ? "text-white" : "text-blue-600 dark:text-blue-400")} />
                  <span className="whitespace-nowrap">{link.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global AI Tutor Drawer */}
      <AITutorDrawer isOpen={isTutorOpen} onClose={() => setIsTutorOpen(false)} />

      {/* Global Badge Unlock Celebration Modal */}
      <BadgeUnlockModal badgeId={newlyUnlockedBadge} onClose={clearUnlockedBadgeModal} />
    </>
  );
}
