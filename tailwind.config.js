/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        paperDark: "var(--color-paper-dark)",

        card: "var(--color-card)",
        surface: "var(--color-surface)",

        forest: "var(--color-forest)",
        forestLight: "var(--color-forest-light)",

        ink: "var(--color-ink)",
        inkSoft: "var(--color-ink-soft)",

        brass: "var(--color-brass)",
        stamp: "var(--color-stamp)",
        border: "var(--color-border)",

        // Added dynamic theme-aware variables for the frozen blue ice accent system
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        accent: "var(--accent)",
        "bg-main": "var(--bg-main)",
        "card-bg": "var(--card-bg)",
        "custom-border": "var(--border-color)",
      },

      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        doodle: ["Caveat", "cursive"],
      },

      boxShadow: {
        paper: "0 10px 35px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
}