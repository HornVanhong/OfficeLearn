"use client";

import React, { useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contextHint?: string;
}

export function AITutorDrawer({ isOpen, onClose, contextHint }: AITutorDrawerProps) {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Array<{ sender: "user" | "tutor"; text: string }>>([
    {
      sender: "tutor",
      text: lang === "km" 
        ? "ជម្រាបសួរ! ខ្ញុំបាទ Clippy AI ជាជំនួយការបង្រៀន Microsoft Office របស់អ្នក។ សូមសួរខ្ញុំអំពី រូបមន្ត Word, អនុមុខ Excel (=SUM, VLOOKUP), PowerPoint ឬផ្លូវកាត់ក្តារចុច!" 
        : "Hi there! I'm Clippy AI, your Microsoft Office learning assistant. Ask me anything about Word formulas, Excel functions (=SUM, VLOOKUP), PowerPoint themes, or shortcuts!",
    },
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = (userQuestion?: string) => {
    const query = userQuestion || input;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: "user" as const, text: query }];
    setMessages(newMsgs);
    if (!userQuestion) setInput("");

    setTimeout(() => {
      let reply = lang === "km" ? "សំណួរដ៏ល្អ! " : "Great question! ";
      const q = query.toLowerCase();

      if (q.includes("sum") || q.includes("formula") || q.includes("រូបមន្ត")) {
        reply += lang === "km"
          ? "ក្នុង Excel រូបមន្ត =SUM() ប្រើសម្រាប់បូកសរុបលេខក្នុងជួរក្រឡា។ ឧទាហរណ៍៖ =SUM(A1:A10)។ ចងចាំថារាល់រូបមន្តទាំងអស់ត្រូវចាប់ផ្តើមដោយសញ្ញាសមើ (=)!"
          : "In Excel, the =SUM() formula adds all numbers in a specified cell range. Example: =SUM(A1:A10). Remember that all formulas must start with the '=' sign!";
      } else if (q.includes("bold") || q.includes("format") || q.includes("ដិត")) {
        reply += lang === "km"
          ? "ដើម្បីធ្វើឱ្យអក្សរដិត ជ្រើសរើសអត្ថបទ រួចចុច Ctrl + B ឬចុចរូបតំណាង 'B' លើរបារ Ribbon!"
          : "To make text bold in Word or Excel, select your text and press Ctrl + B, or click the bold 'B' icon on the Home tab ribbon.";
      } else if (q.includes("slide") || q.includes("powerpoint") || q.includes("ស្លាយ")) {
        reply += lang === "km"
          ? "ក្នុង PowerPoint ចុច Ctrl + M ដើម្បីបន្ថែមស្លាយថ្មីបានលឿន ឬចុច F5 ដើម្បីបង្ហាញស្លាយពេញអេក្រង់!"
          : "In PowerPoint, press Ctrl + M to quickly insert a new slide, or press F5 to launch the full presentation slideshow mode!";
      } else if (q.includes("shortcut") || q.includes("ផ្លូវកាត់")) {
        reply += lang === "km"
          ? "ការចងចាំផ្លូវកាត់ជួយចំណេញពេលច្រើន! ផ្លូវកាត់សំខាន់ៗមាន៖ Ctrl+B (ដិត), Ctrl+I (ទ្រេត), Ctrl+E (តម្រឹម កណ្តាល), និង Alt+= (AutoSum)។"
          : "Mastering shortcuts saves hours! Useful ones include Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+E (Center Align), and Alt+= (Excel AutoSum). Check out our Shortcut Trainer page!";
      } else {
        reply += lang === "km"
          ? "ខ្ញុំនៅទីនេះដើម្បីជួយអ្នករៀន Microsoft Office។ សូមសាកល្បងចូលរៀនមេរៀនអន្តរកម្ម ឬការប្រកួតប្រជែងផ្សេងៗ!"
          : "I'm here to help you master Microsoft Office step-by-step. Try exploring our interactive simulators or practice challenges to test your skills!";
      }

      setMessages((prev) => [...prev, { sender: "tutor", text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col transition-all">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">{t.aiOfficeTutor}</h3>
            <p className="text-[11px] text-blue-100">Powered by OfficeLearn AI</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Context Hint Banner if provided */}
      {contextHint && (
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/50 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">{lang === "km" ? "ការណែនាំមេរៀន៖ " : "Lesson Tip: "}</span>
            {contextHint}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${m.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {m.sender === "tutor" && (
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                m.sender === "user"
                  ? "bg-fluent-blue text-white rounded-tr-none"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-200/50 dark:border-gray-700/50"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompt Suggestions */}
      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
        <button
          onClick={() => handleSend(lang === "km" ? "តើរូបមន្ត =SUM ដើរតួរយ៉ាងដូចម្តេច?" : "How does =SUM work in Excel?")}
          className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shrink-0 hover:border-blue-400 text-gray-600 dark:text-gray-300"
        >
          💡 {lang === "km" ? "តើរូបមន្ត =SUM ដើរតួរយ៉ាងដូចម្តេច?" : "How does =SUM work?"}
        </button>
        <button
          onClick={() => handleSend(lang === "km" ? "តើផ្លូវកាត់ក្តារចុច Word សំខាន់ៗមានអ្វីខ្លះ?" : "What are essential Word shortcuts?")}
          className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shrink-0 hover:border-blue-400 text-gray-600 dark:text-gray-300"
        >
          ⌨️ {lang === "km" ? "ផ្លូវកាត់ Word សំខាន់ៗ" : "Word shortcuts"}
        </button>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={t.aiTutorAskPlaceholder}
          className="flex-1 px-3 py-2 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-fluent-blue text-gray-900 dark:text-gray-100"
        />
        <Button size="sm" onClick={() => handleSend()}>
          <Send className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}
