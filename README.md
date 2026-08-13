# 🎓 OfficeLearn - Interactive Microsoft Office Learning Platform

<p align="center">
  <img src="./app/icon.svg" width="96" height="96" alt="OfficeLearn Icon" />
</p>

<p align="center">
  <b>Master Microsoft Office (Word, Excel, PowerPoint, Outlook, Access, OneNote, Teams) through interactive ribbon simulators, quizzes, keyboard shortcut trainer, and workplace practice challenges.</b>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react" alt="React"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS"></a>
  <img src="https://img.shields.io/badge/Languages-🇰🇭%20Khmer%20%7C%20🇺🇸%20English-emerald?style=flat-square" alt="Bilingual Support">
</p>

---

## 🌟 Key Features

### 🇰🇭 1. Full Khmer & English Bilingual Support ("Khmer All")
- **Instant Language Switching**: Unified React `LanguageProvider` allows switching between **Khmer (🇰🇭 ភាសាខ្មែរ)** and **English (🇺🇸)** seamlessly across all pages.
- **Khmer OS Battambang Typography**: Automatically applies Google Font `Battambang` / `Khmer OS Battambang` with tuned line-heights and spacing for clear rendering.
- **100% Khmer Translations**: Every module title, objective, lesson step, quiz question, explanation banner, shortcut name, practice challenge checklist, badge title, and AI Tutor prompt is localized in Khmer.

### 🖥️ 2. Interactive Microsoft Office Simulators
- **Word Simulator**: Interactive document canvas with Live Ribbon controls for Bold, Italic, Underline, Bullet Lists, and Headings.
- **Excel Simulator**: Spreadsheet grid with live formula parsing (e.g., `=SUM(A1:A3)`), auto-sum calculation, and interactive bar chart generation modal.
- **PowerPoint Simulator**: Slide deck editor supporting multiple slides, design themes (*Sapphire*, *Emerald*, *Sunset*, *Midnight*), and transition previews.
- **Outlook, Access, OneNote & Teams Simulators**: Dedicated interactive playgrounds for email sorting, relational DB tables, section tabs, and team channels.

### ⚡ 3. Keyboard Shortcut Trainer & Arcade
- Practice essential MS Office keyboard shortcuts (e.g., `Ctrl + C`, `Ctrl + V`, `Ctrl + Z`, `Ctrl + B`, `Ctrl + K`, `F4`).
- Interactive Arcade quiz with timer, combo multiplier, high score records, and reference cheat sheets.

### 🏆 4. Gamification System (XP, Streaks & Badges)
- **XP Points & Daily Streak Counter**: Earn XP as you complete lessons, quizzes, and practice challenges.
- **Badge Wall**: Unlock achievement badges (*Office Novice*, *Excel Wizard*, *Shortcut Ninja*, *Word Smith*, *PowerPoint Picasso*, *Streak Master*).
- **Celebration Modal**: Animated confetti unlock celebration modal upon earning new badges.

### 🤖 5. AI Office Tutor (Clippy AI)
- Drawer assistant offering instant help, formula syntax explanations, ribbon guidance, and Khmer practice prompts.

### 🌙 6. Dark & Light Theme System
- Fluent / Glassmorphic UI design system with one-click Light and Dark mode toggle.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Vanilla CSS (Glassmorphism), KaTeX (LaTeX math) |
| **Icons** | Lucide React |
| **Animations** | Canvas Confetti, Framer Motion |
| **State & Local Storage** | React Context (`LanguageProvider`), Custom Hooks (`useProgress`, `useTheme`, `useSoundEffects`) |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HornVanhong/OfficeLearn.git
   cd OfficeLearn
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Or run on a specific port:
   ```bash
   npx next dev -p 3006
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or [http://localhost:3006](http://localhost:3006)).

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 📂 Project Structure

```text
OfficeLearn/
├── app/                        # Next.js App Router Pages
│   ├── achievements/           # Badges Wall & Achievements page
│   ├── challenges/             # Workplace Practice Tasks page
│   ├── dashboard/              # User Progress Dashboard
│   ├── modules/                # Office Modules Catalog & Lesson Player
│   ├── shortcuts/              # Keyboard Shortcut Trainer & Cheat Sheets
│   ├── simulators/             # Office Ribbon & Canvas Simulators
│   ├── globals.css             # Design Tokens & Khmer Typography Rules
│   ├── icon.svg                # Custom App Favicon
│   └── layout.tsx              # Root Layout with LanguageProvider & Header
├── components/
│   ├── gamification/           # XP, Streak, AI Tutor Drawer, Badge Modal
│   ├── layout/                 # Header & Footer Navigation
│   ├── lesson/                 # QuizCard, StepCard, LessonHeader, CompletionScreen
│   ├── simulators/             # Word, Excel, PowerPoint, Outlook, Access, OneNote, Teams
│   └── ui/                     # Reusable Button, Card, ProgressBar, BadgeCard
├── data/                       # Base JSON datasets for modules, lessons, shortcuts, badges
├── hooks/                      # Custom hooks (useLanguage, useProgress, useTheme)
├── lib/                        # Office data getters, Khmer translations, Excel engine
└── public/                     # Static assets
```

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
