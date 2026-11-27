"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-24 h-8 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 animate-pulse" />
    );
  }

  return (
    <div className="flex items-center p-1 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 border border-zinc-300/40 dark:border-zinc-700/50 backdrop-blur-md transition-all">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-white text-zinc-900 shadow-sm"
            : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-zinc-700 text-white shadow-sm"
            : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-label="System mode"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white shadow-sm"
            : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
        }`}
      >
        <Laptop className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
