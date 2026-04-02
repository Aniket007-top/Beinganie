import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "border-subtle": "#e2e8f0",
        "background-primary": "#ffffff",
        "surface-secondary": "#f8fafc",
        "text-primary": "#0f172a",
        "text-secondary": "#475569",
        "google-blue": {
          DEFAULT: "#4285F4",
          700: "#1a73e8",
        },
        "google-green": {
          DEFAULT: "#34A853",
          700: "#188038",
        },
        "google-yellow": {
          DEFAULT: "#FBBC04",
          700: "#f9ab00",
        },
        card: "rgb(var(--card) / <alpha-value>)",
        ai: {
          DEFAULT: "#4F46E5",
          soft: "#E0E7FF"
        },
        iot: {
          DEFAULT: "#059669",
          soft: "#D1FAE5"
        },
        robotics: {
          DEFAULT: "#D97706",
          soft: "#FEF3C7"
        },
        slate: {
          25: "#fcfcfd"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "monospace"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 24px 100px rgba(79, 70, 229, 0.24)",
        neon: "0 0 0 1px rgba(129,140,248,0.18), 0 0 40px rgba(79,70,229,0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(79,70,229,0.16), transparent 28%), radial-gradient(circle at top right, rgba(5,150,105,0.14), transparent 24%), linear-gradient(180deg, rgba(240,244,255,1) 0%, rgba(248,250,252,1) 100%)",
        "cyber-grid":
          "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
