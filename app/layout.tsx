import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  title: "OfficeLearn | Interactive Microsoft Office Learning Platform",
  description:
    "Master Microsoft Word, Excel, PowerPoint, Outlook, Access, OneNote, and Teams through interactive simulations, quizzes, keyboard shortcut trainer, and workplace practice challenges.",
  keywords: [
    "Microsoft Office",
    "Excel interactive tutorial",
    "Word formatting simulator",
    "PowerPoint pitch deck",
    "Duolingo style Office learn",
    "Office 365 lessons",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
