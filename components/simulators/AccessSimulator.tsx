"use client";

import React, { useState } from "react";
import { Database, Table, Search, Plus, Key } from "lucide-react";
import { Button } from "../ui/Button";

export function AccessSimulator() {
  const [records, setRecords] = useState([
    { id: 1, studentName: "Alex Morgan", course: "Computer Science", gpa: "3.8" },
    { id: 2, studentName: "Jessica Lee", course: "Data Analytics", gpa: "3.9" },
    { id: 3, studentName: "David Miller", course: "Information Systems", gpa: "3.6" },
  ]);
  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("");

  const handleAddRecord = () => {
    if (!newName) return;
    setRecords([
      ...records,
      { id: records.length + 1, studentName: newName, course: newCourse || "General Studies", gpa: "3.7" },
    ]);
    setNewName("");
    setNewCourse("");
  };

  return (
    <div className="w-full shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs">
      <div className="bg-[#A4373A] text-white p-3 flex items-center justify-between font-bold">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4" />
          <span>Microsoft Access Database - Students_DB.accdb</span>
        </div>
        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Relational Tables</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Table Controls */}
        <div className="flex flex-wrap gap-2 items-center justify-between bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/50">
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-[#A4373A]" />
            <span className="font-bold text-gray-800 dark:text-gray-200">Table: Students</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Student Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="px-2 py-1 bg-white dark:bg-gray-800 border rounded text-xs text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Course"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="px-2 py-1 bg-white dark:bg-gray-800 border rounded text-xs text-gray-900 dark:text-gray-100"
            />
            <Button size="sm" variant="office" officeApp="access" onClick={handleAddRecord}>
              <Plus className="w-3.5 h-3.5" /> Record
            </Button>
          </div>
        </div>

        {/* Database Grid */}
        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold border-b">
                <th className="p-2.5 flex items-center gap-1">
                  <Key className="w-3 h-3 text-amber-500" /> ID (PK)
                </th>
                <th className="p-2.5">Student Name</th>
                <th className="p-2.5">Enrolled Course</th>
                <th className="p-2.5">GPA Score</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-2.5 font-mono text-amber-600 dark:text-amber-400 font-bold">{r.id}</td>
                  <td className="p-2.5 font-medium">{r.studentName}</td>
                  <td className="p-2.5 text-gray-600 dark:text-gray-400">{r.course}</td>
                  <td className="p-2.5 font-mono font-bold text-rose-700 dark:text-rose-400">{r.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
