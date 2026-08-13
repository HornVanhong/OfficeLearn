"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, ShieldCheck, Sparkles, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200/60 dark:border-gray-800/60 py-12 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-gray-100">
                OfficeLearn
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Interactive Microsoft Office learning platform designed like Duolingo combined with Microsoft Learn. 100% frontend-only with local storage.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">
              Office Apps
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              <li><Link href="/simulators/word" className="hover:text-blue-600 dark:hover:text-blue-400">Microsoft Word</Link></li>
              <li><Link href="/simulators/excel" className="hover:text-blue-600 dark:hover:text-blue-400">Microsoft Excel</Link></li>
              <li><Link href="/simulators/powerpoint" className="hover:text-blue-600 dark:hover:text-blue-400">Microsoft PowerPoint</Link></li>
              <li><Link href="/modules" className="hover:text-blue-600 dark:hover:text-blue-400">Outlook, Access, Teams</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">
              Gamified Learning
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              <li><Link href="/shortcuts" className="hover:text-blue-600 dark:hover:text-blue-400">Shortcut Trainer</Link></li>
              <li><Link href="/challenges" className="hover:text-blue-600 dark:hover:text-blue-400">Workplace Practice Tasks</Link></li>
              <li><Link href="/achievements" className="hover:text-blue-600 dark:hover:text-blue-400">Badge Gallery</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">XP & Streak Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">
              Future Ready
            </h4>
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-800 dark:text-blue-300 space-y-1">
              <div className="flex items-center gap-1 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Next Generation</span>
              </div>
              <p className="text-[11px] opacity-80">
                Architected for AI Tutor, MOS certification practice, document review AI & cloud sync.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center gap-1">
            <span>Built with Next.js 15, Tailwind CSS & Framer Motion</span>
          </div>
          <div>
            © {new Date().getFullYear()} OfficeLearn. Inspired by Microsoft Learn.
          </div>
        </div>
      </div>
    </footer>
  );
}
