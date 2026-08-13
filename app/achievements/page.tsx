"use client";

import React, { useState } from "react";
import { getAllBadges } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useLanguage } from "@/hooks/useLanguage";
import { BadgeCard } from "@/components/ui/BadgeCard";
import { BadgeUnlockModal } from "@/components/gamification/BadgeUnlockModal";
import { Trophy, Award } from "lucide-react";

export default function AchievementsPage() {
  const { lang, t } = useLanguage();
  const badges = getAllBadges(lang);
  const { progress } = useProgress();
  const [selectedBadgeId, setSelectedBadgeId] = useState<string | null>(null);

  const unlockedCount = badges.filter((b) => progress.unlockedBadges.includes(b.id)).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5" />
          {t.gamificationGallery}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {t.badgesWallTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t.badgesWallSub}
        </p>
      </div>

      {/* Progress Counter Card */}
      <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-gray-900 dark:text-gray-100">
              {unlockedCount} {t.of} {badges.length} {t.badgesUnlockedOf}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {t.keepPracticing}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-2xl font-black text-amber-500">{progress.totalXP}</span>
          <span className="text-xs font-bold text-gray-400 block">{t.totalLifetimeXP}</span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {badges.map((badge) => {
          const isUnlocked = progress.unlockedBadges.includes(badge.id);
          return (
            <div
              key={badge.id}
              onClick={() => isUnlocked && setSelectedBadgeId(badge.id)}
              className="cursor-pointer"
            >
              <BadgeCard badge={badge} unlocked={isUnlocked} />
            </div>
          );
        })}
      </div>

      {/* Badge Preview Modal */}
      {selectedBadgeId && (
        <BadgeUnlockModal badgeId={selectedBadgeId} onClose={() => setSelectedBadgeId(null)} />
      )}
    </div>
  );
}
