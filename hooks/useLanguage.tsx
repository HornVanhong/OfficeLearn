"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/lib/translations";

const LANG_KEY = "office_learn_language";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) as Language | null;
    if (saved === "km" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      if (lang === "km") {
        document.documentElement.classList.add("lang-km");
      } else {
        document.documentElement.classList.remove("lang-km");
      }
    }
  }, [lang]);

  const switchLanguage = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(LANG_KEY, newLang);
  };

  const t: Translations = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if used outside provider
    const [lang, setLang] = useState<Language>("en");
    return { lang, setLang: (l: Language) => setLang(l), t: translations[lang] };
  }
  return context;
}
