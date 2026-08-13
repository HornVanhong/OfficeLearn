"use client";

import React from "react";
import { ExcelSimulator } from "@/components/simulators/ExcelSimulator";
import Link from "next/link";
import { ChevronLeft, Table } from "lucide-react";

export default function ExcelSimulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <Link href="/simulators" className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-emerald-600">
        <ChevronLeft className="w-4 h-4" /> Back to All Simulators
      </Link>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#107C41] text-white flex items-center justify-center font-bold">
          <Table className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Microsoft Excel Simulator</h1>
          <p className="text-xs text-gray-500">Edit cells, evaluate formulas (=SUM, =AVERAGE), and generate column charts.</p>
        </div>
      </div>
      <ExcelSimulator />
    </div>
  );
}
