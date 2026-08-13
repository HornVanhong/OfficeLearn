"use client";

import { useState, useEffect, useCallback } from "react";
import { UserProgress } from "@/lib/types";

const LOCAL_STORAGE_KEY = "office_learn_user_progress_v1";

const defaultProgress: UserProgress = {
  totalXP: 0,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split("T")[0],
  completedLessons: [],
  quizScores: {},
  unlockedBadges: ["welcome-explorer"], // Default welcome badge
  shortcutHighScore: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<string | null>(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed: UserProgress = JSON.parse(stored);
        
        // Calculate streak logic based on dates
        const today = new Date().toISOString().split("T")[0];
        const lastDate = new Date(parsed.lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let updatedStreak = parsed.streakDays;
        if (parsed.lastActiveDate !== today) {
          if (diffDays === 1) {
            updatedStreak += 1;
          } else if (diffDays > 1) {
            updatedStreak = 1; // reset streak if missed a day
          }
        }

        const updatedProgress: UserProgress = {
          ...parsed,
          streakDays: updatedStreak,
          lastActiveDate: today,
        };

        setProgress(updatedProgress);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProgress));
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultProgress));
      }
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage helper
  const saveProgress = useCallback((newProgress: UserProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.error("Failed to save progress to localStorage", e);
    }
  }, []);

  // Add XP
  const addXP = useCallback(
    (amount: number) => {
      setProgress((prev) => {
        const newXP = prev.totalXP + amount;
        const newProgress = { ...prev, totalXP: newXP };

        // Check badge unlocks based on XP milestones
        const badgesToUnlock: string[] = [];
        if (newXP >= 100 && !prev.unlockedBadges.includes("xp-100")) {
          badgesToUnlock.push("xp-100");
        }
        if (newXP >= 500 && !prev.unlockedBadges.includes("xp-500")) {
          badgesToUnlock.push("xp-500");
        }
        if (newXP >= 1000 && !prev.unlockedBadges.includes("office-expert")) {
          badgesToUnlock.push("office-expert");
        }

        if (badgesToUnlock.length > 0) {
          newProgress.unlockedBadges = [...prev.unlockedBadges, ...badgesToUnlock];
          setNewlyUnlockedBadge(badgesToUnlock[0]);
        }

        saveProgress(newProgress);
        return newProgress;
      });
    },
    [saveProgress]
  );

  // Complete lesson
  const completeLesson = useCallback(
    (lessonId: string, xp: number, quizScorePercent: number = 100) => {
      setProgress((prev) => {
        const isAlreadyCompleted = prev.completedLessons.includes(lessonId);
        const newCompleted = isAlreadyCompleted
          ? prev.completedLessons
          : [...prev.completedLessons, lessonId];
        
        const newXP = isAlreadyCompleted ? prev.totalXP : prev.totalXP + xp;
        const newScores = { ...prev.quizScores, [lessonId]: quizScorePercent };

        // Check badges
        const badgesToCheck: string[] = [];
        if (lessonId.startsWith("word-") && !prev.unlockedBadges.includes("word-beginner")) {
          badgesToCheck.push("word-beginner");
        }
        if (lessonId.startsWith("excel-") && !prev.unlockedBadges.includes("excel-master")) {
          badgesToCheck.push("excel-master");
        }
        if (lessonId.startsWith("ppt-") && !prev.unlockedBadges.includes("ppt-designer")) {
          badgesToCheck.push("ppt-designer");
        }

        const newBadges = Array.from(new Set([...prev.unlockedBadges, ...badgesToCheck]));
        if (badgesToCheck.length > 0 && !prev.unlockedBadges.includes(badgesToCheck[0])) {
          setNewlyUnlockedBadge(badgesToCheck[0]);
        }

        const updated = {
          ...prev,
          totalXP: newXP,
          completedLessons: newCompleted,
          quizScores: newScores,
          unlockedBadges: newBadges,
        };

        saveProgress(updated);
        return updated;
      });
    },
    [saveProgress]
  );

  // Update shortcut high score
  const updateShortcutScore = useCallback(
    (score: number) => {
      setProgress((prev) => {
        if (score > prev.shortcutHighScore) {
          const updated = { ...prev, shortcutHighScore: score };
          if (score >= 5 && !prev.unlockedBadges.includes("shortcut-ninja")) {
            updated.unlockedBadges = [...prev.unlockedBadges, "shortcut-ninja"];
            setNewlyUnlockedBadge("shortcut-ninja");
          }
          saveProgress(updated);
          return updated;
        }
        return prev;
      });
    },
    [saveProgress]
  );

  // Clear modal helper
  const clearUnlockedBadgeModal = useCallback(() => {
    setNewlyUnlockedBadge(null);
  }, []);

  // Reset progress function
  const resetProgress = useCallback(() => {
    saveProgress(defaultProgress);
  }, [saveProgress]);

  return {
    progress,
    isLoaded,
    newlyUnlockedBadge,
    addXP,
    completeLesson,
    updateShortcutScore,
    clearUnlockedBadgeModal,
    resetProgress,
  };
}
