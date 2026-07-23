import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-10 h-10 rounded-full border border-border text-ink hover:border-brass hover:text-brass transition ${className}`}
    >
      {theme === "dark" ? (
        <FaSun className="text-base" />
      ) : (
        <FaMoon className="text-base" />
      )}
    </button>
  );
}

export default ThemeToggle;