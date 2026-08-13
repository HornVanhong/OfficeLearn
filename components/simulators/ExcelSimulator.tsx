"use client";

import React, { useState } from "react";
import { OfficeRibbon } from "./OfficeRibbon";
import { evaluateFormula } from "@/lib/excel-engine";
import { clsx } from "clsx";
import { BarChart3, X } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

interface ExcelSimulatorProps {
  onChallengeCompleted?: (action: string, value?: string) => void;
}

const defaultGrid: Record<string, string> = {
  "0-0": "250", // A1
  "1-0": "450", // A2
  "2-0": "300", // A3
  "3-0": "=SUM(A1:A3)", // A4
  "0-1": "Q1 Revenue", // B1
  "1-1": "1200", // B2
  "2-1": "1500", // B3
  "3-1": "=SUM(B2:B3)", // B4
};

export function ExcelSimulator({ onChallengeCompleted }: ExcelSimulatorProps) {
  const [grid, setGrid] = useState<Record<string, string>>(defaultGrid);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number }>({ row: 3, col: 0 }); // A4
  const [formulaInputValue, setFormulaInputValue] = useState(defaultGrid["3-0"] || "");
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  const cellKey = `${selectedCell.row}-${selectedCell.col}`;
  const cellAddress = `${cols[selectedCell.col]}${selectedCell.row + 1}`;

  const handleCellSelect = (r: number, c: number) => {
    setSelectedCell({ row: r, col: c });
    const key = `${r}-${c}`;
    setFormulaInputValue(grid[key] || "");
  };

  const handleCellChange = (r: number, c: number, rawVal: string) => {
    const key = `${r}-${c}`;
    const newGrid = { ...grid, [key]: rawVal };
    setGrid(newGrid);

    // Challenge evaluation
    if (r === 0 && c === 0 && rawVal.trim() === "250") {
      if (onChallengeCompleted) onChallengeCompleted("enter_data_a1", "250");
    }
    if (rawVal.toUpperCase().includes("SUM")) {
      if (onChallengeCompleted) onChallengeCompleted("sum_formula", rawVal);
    }
  };

  const handleFormulaSubmit = (val: string) => {
    handleCellChange(selectedCell.row, selectedCell.col, val);
  };

  const handleRibbonAction = (action: string) => {
    if (action === "insert_sum") {
      const sumFormula = `=SUM(A1:A3)`;
      setFormulaInputValue(sumFormula);
      handleCellChange(selectedCell.row, selectedCell.col, sumFormula);
      if (onChallengeCompleted) onChallengeCompleted("sum_formula", sumFormula);
    } else if (action === "insert_chart") {
      setIsChartModalOpen(true);
      if (onChallengeCompleted) onChallengeCompleted("insert_chart");
    }
  };

  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col items-center shadow-lg rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 p-2 sm:p-4">
      {/* Excel Ribbon */}
      <OfficeRibbon app="excel" onAction={handleRibbonAction} />

      {/* Formula Bar */}
      <div className="w-full my-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex items-center gap-3 text-xs">
        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800 shrink-0">
          {cellAddress}
        </span>
        <span className="font-serif italic font-bold text-gray-400">fx</span>
        <input
          type="text"
          value={formulaInputValue}
          onChange={(e) => {
            setFormulaInputValue(e.target.value);
            handleFormulaSubmit(e.target.value);
          }}
          placeholder={t.formulaPlaceholder}
          className="flex-1 bg-transparent border-none focus:outline-none font-mono text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Excel Grid Container */}
      <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-inner">
        <table className="w-full border-collapse text-xs select-none min-w-[600px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 font-semibold border-b border-gray-200 dark:border-gray-700">
              <th className="w-10 p-2 border-r border-gray-200 dark:border-gray-700 text-center">#</th>
              {cols.map((col) => (
                <th key={col} className="p-2 border-r border-gray-200 dark:border-gray-700 text-center font-mono">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, rIdx) => (
              <tr key={rIdx} className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="w-10 p-1.5 bg-gray-100 dark:bg-gray-800/80 text-gray-500 font-mono text-center font-bold border-r border-gray-200 dark:border-gray-700">
                  {r}
                </td>
                {cols.map((_, cIdx) => {
                  const key = `${rIdx}-${cIdx}`;
                  const isSelected = selectedCell.row === rIdx && selectedCell.col === cIdx;
                  const rawVal = grid[key] || "";
                  const evalVal = evaluateFormula(rawVal, grid);

                  return (
                    <td
                      key={cIdx}
                      onClick={() => handleCellSelect(rIdx, cIdx)}
                      className={clsx(
                        "p-0 border-r border-gray-200 dark:border-gray-800 font-mono text-xs cursor-pointer transition-colors relative min-w-[75px] h-8",
                        isSelected
                          ? "bg-emerald-50/60 dark:bg-emerald-950/40 ring-2 ring-emerald-600 z-10 font-semibold"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800/40"
                      )}
                    >
                      <input
                        type="text"
                        value={isSelected ? rawVal : String(evalVal)}
                        onChange={(e) => handleCellChange(rIdx, cIdx, e.target.value)}
                        onFocus={() => handleCellSelect(rIdx, cIdx)}
                        className={clsx(
                          "w-full h-full px-2 bg-transparent border-none focus:outline-none excel-cell-input text-gray-900 dark:text-gray-100",
                          String(rawVal).startsWith("=") && "text-emerald-700 dark:text-emerald-400 font-bold"
                        )}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive Chart Generator Modal */}
      {isChartModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b pb-3 dark:border-gray-800">
              <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400">
                <BarChart3 className="w-5 h-5" />
                <span>Generated Excel Column Chart</span>
              </div>
              <button onClick={() => setIsChartModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Visual Bar Preview */}
            <div className="h-44 bg-gray-50 dark:bg-gray-950 rounded-xl p-4 flex items-end justify-around border">
              <div className="w-12 bg-emerald-500 rounded-t-md h-[50%] flex flex-col items-center justify-end p-1 text-[10px] text-white font-bold">250</div>
              <div className="w-12 bg-emerald-600 rounded-t-md h-[80%] flex flex-col items-center justify-end p-1 text-[10px] text-white font-bold">450</div>
              <div className="w-12 bg-emerald-400 rounded-t-md h-[65%] flex flex-col items-center justify-end p-1 text-[10px] text-white font-bold">300</div>
              <div className="w-12 bg-blue-600 rounded-t-md h-[95%] flex flex-col items-center justify-end p-1 text-[10px] text-white font-bold">1000</div>
            </div>

            <Button variant="primary" className="w-full" onClick={() => setIsChartModalOpen(false)}>
              Insert Chart into Worksheet
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
