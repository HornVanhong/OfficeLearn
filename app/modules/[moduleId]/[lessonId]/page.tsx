"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getLessonById, getLessonsForModule } from "@/lib/office-data";
import { useProgress } from "@/hooks/useProgress";
import { useLanguage } from "@/hooks/useLanguage";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { StepCard } from "@/components/lesson/StepCard";
import { QuizCard } from "@/components/lesson/QuizCard";
import { CompletionScreen } from "@/components/lesson/CompletionScreen";

export default function LessonPlayerPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;
  const { lang } = useLanguage();

  const lesson = getLessonById(moduleId, lessonId, lang);
  const moduleLessons = getLessonsForModule(moduleId, lang);
  const { completeLesson } = useProgress();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  if (!lesson) return notFound();

  const totalSteps = lesson.steps.length;
  const totalQuizzes = lesson.quiz.length;
  const grandTotal = totalSteps + totalQuizzes;

  const isQuizPhase = currentStepIndex >= totalSteps;
  const currentQuizIndex = currentStepIndex - totalSteps;

  const handleNextStep = () => {
    if (currentStepIndex < grandTotal - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Calculate score and finish lesson
      const correctCount = quizAnswers.filter(Boolean).length;
      const scorePercent = totalQuizzes > 0 ? Math.round((correctCount / totalQuizzes) * 100) : 100;
      
      completeLesson(lesson.id, lesson.xpReward, scorePercent);
      setIsFinished(true);
    }
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    setQuizAnswers((prev) => [...prev, isCorrect]);
    handleNextStep();
  };

  // Find next lesson id if exists
  const currentIdx = moduleLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = moduleLessons[currentIdx + 1];

  if (isFinished) {
    const correctCount = quizAnswers.filter(Boolean).length;
    const scorePercent = totalQuizzes > 0 ? Math.round((correctCount / totalQuizzes) * 100) : 100;

    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-center min-h-[75vh]">
        <CompletionScreen
          lessonTitle={lesson.title}
          xpEarned={lesson.xpReward}
          accuracyScore={scorePercent}
          moduleId={moduleId}
          nextLessonId={nextLesson?.id}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 space-y-8 bg-gray-50 dark:bg-gray-950">
      <LessonHeader
        lessonTitle={lesson.title}
        currentStep={currentStepIndex + 1}
        totalSteps={grandTotal}
        xpReward={lesson.xpReward}
        exitHref={`/modules/${moduleId}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {!isQuizPhase ? (
          <StepCard
            key={currentStepIndex}
            step={lesson.steps[currentStepIndex]}
            moduleId={lesson.moduleId}
            onStepCompleted={handleNextStep}
          />
        ) : (
          <QuizCard
            key={currentStepIndex}
            question={lesson.quiz[currentQuizIndex]}
            onAnswerSubmitted={handleQuizAnswer}
          />
        )}
      </div>
    </div>
  );
}
