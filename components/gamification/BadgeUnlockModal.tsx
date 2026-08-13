"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { getAllBadges } from "@/lib/office-data";
import { Button } from "../ui/Button";
import { Trophy, Sparkles, X } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLanguage } from "@/hooks/useLanguage";

interface BadgeUnlockModalProps {
  badgeId: string | null;
  onClose: () => void;
}

export function BadgeUnlockModal({ badgeId, onClose }: BadgeUnlockModalProps) {
  const { playBadgeUnlock } = useSoundEffects();
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (badgeId) {
      playBadgeUnlock();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [badgeId, playBadgeUnlock]);

  if (!badgeId) return null;

  const badges = getAllBadges(lang);
  const badge = badges.find((b) => b.id === badgeId) || {
    id: badgeId,
    title: lang === "km" ? "បើកមេដាយជ័យលាភី!" : "Achievement Unlocked!",
    description: lang === "km" ? "វឌ្ឍនភាពដ៏ល្អលើ OfficeLearn!" : "Great progress on OfficeLearn!",
    icon: "Trophy",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          className="relative w-full max-w-sm p-6 bg-white dark:bg-gray-900 border border-amber-300 dark:border-amber-700/60 rounded-3xl shadow-2xl text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 font-extrabold text-xs uppercase tracking-wider rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t.badgeUnlocked}
          </div>

          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-amber-500/30 animate-pulse">
            <Trophy className="w-10 h-10" />
          </div>

          <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
            {badge.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{badge.description}</p>

          <Button variant="primary" className="w-full py-3" onClick={onClose}>
            {t.awesomeContinue}
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
