import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#09090b",
          900: "#0f0f13",
          850: "#14141b",
          800: "#1c1c24",
          700: "#272733",
          600: "#3b3b4d",
        },
        volt: {
          300: "#fda4af", // soft rose pink
          400: "#f43f5e", // vibrant energetic rose
          500: "#e11d48", // bold athletic crimson
          glow: "#ff0055", // neon electric magenta-red
        },
        ruby: {
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
        hotpink: {
          300: "#f472b6",
          400: "#ec4899",
          500: "#db2777",
          600: "#be185d",
        },
      },
      boxShadow: {
        "volt-sm": "0 0 15px -3px rgba(244, 63, 94, 0.3)",
        "volt-md": "0 0 25px -4px rgba(244, 63, 94, 0.45)",
        "volt-lg": "0 0 35px -5px rgba(255, 0, 85, 0.55)",
        "rose-sm": "0 0 15px -3px rgba(244, 63, 94, 0.3)",
        "rose-md": "0 0 25px -4px rgba(244, 63, 94, 0.45)",
        "rose-lg": "0 0 35px -5px rgba(255, 0, 85, 0.55)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out forwards",
        slideUp: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scaleUp: "scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
