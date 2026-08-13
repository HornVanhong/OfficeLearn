"use client";

import React from "react";
import { WordSimulator } from "@/components/simulators/WordSimulator";
import Link from "next/link";
import { ChevronLeft, FileText } from "lucide-react";

export default function WordSimulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <Link href="/simulators" className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-blue-600">
        <ChevronLeft className="w-4 h-4" /> Back to All Simulators
      </Link>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#185ABD] text-white flex items-center justify-center font-bold">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Microsoft Word Simulator</h1>
          <p className="text-xs text-gray-500">Practice text formatting, headings, lists, and ribbon layout controls.</p>
        </div>
      </div>
      <WordSimulator />
    </div>
  );
}
