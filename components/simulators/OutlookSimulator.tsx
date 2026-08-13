"use client";

import React, { useState } from "react";
import { Mail, Calendar, Settings, Plus, Send, CheckCircle2, UserCheck } from "lucide-react";
import { Button } from "../ui/Button";

export function OutlookSimulator() {
  const [activeView, setActiveView] = useState<"inbox" | "calendar">("inbox");
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const [toInput, setToInput] = useState("team@company.com");
  const [subjectInput, setSubjectInput] = useState("Q3 Project Update Sync");

  const handleSend = () => {
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setIsComposeOpen(false);
    }, 1500);
  };

  return (
    <div className="w-full shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs">
      {/* Top Header */}
      <div className="bg-[#0078D4] text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Mail className="w-4 h-4" />
          <span>Outlook Mail & Calendar</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveView("inbox")}
            className={`px-3 py-1 rounded-md font-semibold ${activeView === "inbox" ? "bg-white/20" : "hover:bg-white/10"}`}
          >
            Mail
          </button>
          <button
            onClick={() => setActiveView("calendar")}
            className={`px-3 py-1 rounded-md font-semibold ${activeView === "calendar" ? "bg-white/20" : "hover:bg-white/10"}`}
          >
            Calendar
          </button>
        </div>
      </div>

      {activeView === "inbox" ? (
        <div className="flex h-80">
          {/* Left Email List */}
          <div className="w-1/3 border-r border-gray-200 dark:border-gray-800 p-2 space-y-2 overflow-y-auto">
            <Button size="sm" className="w-full mb-2 bg-[#0078D4]" onClick={() => setIsComposeOpen(true)}>
              <Plus className="w-3.5 h-3.5" />
              New Mail
            </Button>
            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 cursor-pointer">
              <div className="font-bold text-gray-900 dark:text-gray-100">Microsoft Office Team</div>
              <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">Welcome to OfficeLearn!</div>
              <div className="text-[10px] text-gray-500 truncate mt-1">Start interactive lessons today...</div>
            </div>
            <div className="p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 cursor-pointer">
              <div className="font-bold text-gray-900 dark:text-gray-100">Sarah Jenkins</div>
              <div className="text-[11px] text-gray-700 dark:text-gray-300">Department Sync Invite</div>
              <div className="text-[10px] text-gray-500 truncate mt-1">Hey Alex, let's schedule our sync...</div>
            </div>
          </div>

          {/* Right Preview */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Welcome to OfficeLearn Platform</h3>
              <p className="text-gray-500 text-[11px] mb-4">From: officelearn@microsoft.com • Today at 09:00 AM</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Welcome! You are now connected to the interactive Microsoft Outlook simulation workspace.</p>
                <p>Use the New Mail button to compose messages or switch to Calendar mode to practice scheduling.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Calendar View */
        <div className="p-6 h-80 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">Calendar Schedule - August 2026</h3>
            <Button size="sm" className="bg-[#0078D4]" onClick={() => setIsComposeOpen(true)}>
              <Plus className="w-3.5 h-3.5" />
              New Meeting
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-2 flex-1">
            {["Mon 17", "Tue 18", "Wed 19", "Thu 20", "Fri 21"].map((day, i) => (
              <div key={day} className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-between">
                <span className="font-bold text-gray-700 dark:text-gray-300">{day}</span>
                {i === 2 && (
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-900/60 border border-blue-300 dark:border-blue-700 rounded text-[10px] font-bold text-blue-800 dark:text-blue-200">
                    10:00 AM - Marketing Sync
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Compose Email Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl p-5 border shadow-2xl space-y-3">
            <div className="font-bold text-sm text-[#0078D4]">Compose New Message</div>
            {sentSuccess ? (
              <div className="p-6 text-center text-emerald-600 font-bold flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                Message Sent Successfully!
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={toInput}
                  onChange={(e) => setToInput(e.target.value)}
                  placeholder="To: recipient@company.com"
                  className="w-full p-2 bg-gray-100 dark:bg-gray-800 rounded border text-xs text-gray-900 dark:text-gray-100"
                />
                <input
                  type="text"
                  value={subjectInput}
                  onChange={(e) => setSubjectInput(e.target.value)}
                  placeholder="Subject"
                  className="w-full p-2 bg-gray-100 dark:bg-gray-800 rounded border text-xs text-gray-900 dark:text-gray-100"
                />
                <textarea
                  rows={4}
                  defaultValue="Hi Team, let's schedule our Q3 project sync call on Teams."
                  className="w-full p-2 bg-gray-100 dark:bg-gray-800 rounded border text-xs text-gray-900 dark:text-gray-100 resize-none"
                />
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" size="sm" onClick={() => setIsComposeOpen(false)}>Cancel</Button>
                  <Button variant="office" officeApp="outlook" size="sm" onClick={handleSend}>
                    <Send className="w-3.5 h-3.5" />
                    Send
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
