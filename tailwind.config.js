/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        paper: "#F6F1E8",
        paperDark: "#ECE5D8",

        forest: "#2F4F46",
        forestLight: "#527064",

        ink: "#1C1B1A",
        inkSoft: "#555555",

        brass: "#B58B42",

        stamp: "#7D5A50",

        border: "#D8CFBF",
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