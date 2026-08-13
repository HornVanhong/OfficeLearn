"use client";

import React, { useState } from "react";
import { BookOpen, CheckSquare, Plus, Tag } from "lucide-react";
import { Button } from "../ui/Button";

export function OneNoteSimulator() {
  const [sections, setSections] = useState(["Quick Notes", "Project Roadmap", "Meeting Minutes"]);
  const [activeSection, setActiveSection] = useState("Quick Notes");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review Excel formula lesson =SUM()", done: true },
    { id: 2, text: "Prepare PowerPoint pitch deck slides", done: false },
    { id: 3, text: "Schedule department sync on Teams", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="w-full shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs">
      <div className="bg-[#7719AA] text-white p-3 flex items-center justify-between font-bold">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>OneNote Notebook - My Work Notes</span>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex items-center gap-1 px-3 bg-purple-50 dark:bg-purple-950/40 border-b border-purple-200 dark:border-purple-900/50">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => setActiveSection(sec)}
            className={`px-4 py-2 font-bold transition-all border-b-2 ${
              activeSection === sec
                ? "border-[#7719AA] text-[#7719AA] dark:text-purple-300 bg-white dark:bg-gray-900"
                : "border-transparent text-gray-600 dark:text-gray-400"
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Canvas */}
      <div className="p-6 h-64 overflow-y-auto space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{activeSection}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Capture thoughts, meeting actions, and interactive checklist tags in your digital binder.
        </p>

        <div className="space-y-2 border-t pt-3">
          <div className="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-purple-600" /> Action Items Checklist:
          </div>
          {tasks.map((t) => (
            <div
              key={t.id}
              onClick={() => toggleTask(t.id)}
              className="flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <input type="checkbox" checked={t.done} onChange={() => {}} className="rounded text-purple-600" />
              <span className={t.done ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"}>
                {t.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
