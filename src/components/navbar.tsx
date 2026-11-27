"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 rounded-full apple-glass shadow-lg shadow-black/5 dark:shadow-black/40 max-w-4xl w-full transition-all duration-300">
        {/* Brand / Name */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold tracking-tighter">
            M
          </span>
          <span className="font-medium text-xs md:text-sm">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline-block text-xs text-zinc-500 dark:text-zinc-400 font-normal">
            / {PORTFOLIO_DATA.personal.role}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-300">
          <a
            href="#projects"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Competencies
          </a>
          <a
            href="#philosophy"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Actions & Theme */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto p-4 rounded-3xl apple-glass shadow-2xl flex flex-col gap-3 md:hidden">
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          >
            Selected Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          >
            Technical Competencies
          </a>
          <a
            href="#philosophy"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          >
            Engineering Philosophy
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          >
            Get in Touch
          </a>
          <div className="pt-2 border-t border-zinc-200/40 dark:border-zinc-800/60 flex items-center justify-between">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>github.com/matt65dos</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
