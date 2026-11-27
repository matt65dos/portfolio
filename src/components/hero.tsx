"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowDown, Copy, Check, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Apple-style ambient backlights */}
      <div className="ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/20" />
      <div className="ambient-glow top-48 left-1/3 w-[400px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15" />

      {/* Status Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full apple-glass text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-8 shadow-sm transition-all hover:scale-[1.02]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium tracking-tight">
          {PORTFOLIO_DATA.personal.status}
        </span>
        <span className="text-zinc-400 dark:text-zinc-600">•</span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {PORTFOLIO_DATA.personal.location}
        </span>
      </div>

      {/* Main Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
          Senior Frontend Developer.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
            Precision UX. Realtime AI.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal pt-2">
          Hi, I&apos;m <span className="font-medium text-zinc-900 dark:text-zinc-100">{PORTFOLIO_DATA.personal.name}</span>{" "}
          (<span className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">{PORTFOLIO_DATA.personal.handle}</span>).{" "}
          I engineer scalable web architectures, resilient client caching, and voice/generative AI applications with Next.js, React, and TypeScript.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-8 pb-12">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-all shadow-md hover:scale-[1.02]"
        >
          <span>Explore 3 Featured Projects</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full apple-glass text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all hover:scale-[1.02]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-zinc-500" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href={PORTFOLIO_DATA.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full apple-glass text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all hover:scale-[1.02]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
        </a>
      </div>

      {/* Cupertino Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full">
        <div className="p-4 rounded-2xl apple-glass text-left">
          <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            3 Core
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Full-Stack & AI Apps
          </div>
        </div>

        <div className="p-4 rounded-2xl apple-glass text-left">
          <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            React 19
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Next.js App Router & RSC
          </div>
        </div>

        <div className="p-4 rounded-2xl apple-glass text-left">
          <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            PERN & AI
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Voice AI, OpenAI & Polar
          </div>
        </div>

        <div className="p-4 rounded-2xl apple-glass text-left">
          <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            100%
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            TypeScript & Strict Typing
          </div>
        </div>
      </div>
    </section>
  );
}
