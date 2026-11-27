"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Copy, Check, Mail, ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 max-w-4xl mx-auto scroll-mt-20">
      <div className="rounded-3xl apple-glass p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
        <div className="ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Currently Interviewing</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          Let&apos;s Build Together.
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
          I&apos;m looking for a full-time Senior Frontend Developer role where I can drive product architecture and implement high-performance interfaces.
        </p>

        {/* Email Box with One-Click Copy */}
        <div className="max-w-md mx-auto p-2 rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/60 border border-zinc-300/40 dark:border-zinc-700/60 flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2.5 pl-3 text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200">
            <Mail className="w-4 h-4 text-zinc-500" />
            <span>{PORTFOLIO_DATA.personal.email}</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60 transition-colors border border-zinc-200 dark:border-zinc-700/60"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60 transition-colors border border-zinc-200 dark:border-zinc-700/60"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-500" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
