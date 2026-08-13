import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{json,js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fluent: {
          blue: "#0078D4",
          blueHover: "#106EBE",
          darkBg: "#111827",
          darkCard: "#1F2937",
        },
        office: {
          basics: "#008272",
          word: "#185ABD",
          excel: "#107C41",
          powerpoint: "#C43E1C",
          outlook: "#0078D4",
          access: "#A4373A",
          onenote: "#7719AA",
          teams: "#464EB8",
        },
      },
      fontFamily: {
        sans: ["Segoe UI", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        fluent: "0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        fluentHover: "0 12px 30px -4px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08)",
        glow: "0 0 25px -5px rgba(0, 120, 212, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
