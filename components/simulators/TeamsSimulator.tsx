"use client";

import React, { useState } from "react";
import { Users, Video, Mic, MicOff, VideoOff, Send, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";

export function TeamsSimulator() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Sarah Jenkins", text: "Hey team! Is the Q3 presentation deck ready?", time: "10:15 AM" },
    { id: 2, user: "Alex Morgan", text: "Yes! Formatted in PowerPoint with custom themes.", time: "10:17 AM" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const handleSend = () => {
    if (!chatInput) return;
    setMessages([
      ...messages,
      { id: messages.length + 1, user: "You", text: chatInput, time: "Just now" },
    ]);
    setChatInput("");
  };

  return (
    <div className="w-full shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs">
      <div className="bg-[#464EB8] text-white p-3 flex items-center justify-between font-bold">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>Microsoft Teams - Project Workspace</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`p-1.5 rounded ${isMicOn ? "bg-white/20" : "bg-red-500"}`}
          >
            {isMicOn ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-1.5 rounded ${isVideoOn ? "bg-white/20" : "bg-red-500"}`}
          >
            {isVideoOn ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className="flex h-72">
        {/* Left Video Call Preview */}
        <div className="w-1/3 bg-gray-950 p-3 flex flex-col justify-between text-white border-r border-gray-800">
          <div className="relative flex-1 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-gray-700">
            {isVideoOn ? (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-lg">
                AM
              </div>
            ) : (
              <div className="text-gray-500 font-bold">Camera Off</div>
            )}
            <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 px-1.5 py-0.5 rounded">
              Alex Morgan
            </span>
          </div>
        </div>

        {/* Right Channel Chat */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-3 overflow-y-auto pr-2 flex-1">
            {messages.map((m) => (
              <div key={m.id} className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                <div className="flex justify-between font-bold text-gray-900 dark:text-gray-100 text-[11px]">
                  <span>{m.user}</span>
                  <span className="text-gray-400 font-normal">{m.time}</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300 mt-1">{m.text}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-3 pt-2 border-t">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a channel message..."
              className="flex-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg border text-xs text-gray-900 dark:text-gray-100"
            />
            <Button size="sm" variant="office" officeApp="teams" onClick={handleSend}>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
