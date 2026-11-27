"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Sparkles, Gauge, LayoutTemplate, GitMerge } from "lucide-react";

export function PhilosophySection() {
  const getPhilosophyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Gauge className="w-5 h-5 text-blue-500" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-purple-500" />;
      default:
        return <GitMerge className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 md:py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 apple-glass">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Core Engineering Standards</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          How I Build Software.
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Senior frontend engineering isn&apos;t just writing JSX—it&apos;s managing trade-offs, defending the user experience, and building maintainable foundations.
        </p>
      </div>

      {/* Grid of Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.principles.map((principle, index) => (
          <div
            key={principle.number}
            className="rounded-3xl apple-glass p-8 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80">
                  {getPhilosophyIcon(index)}
                </div>
                <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-600">
                  {principle.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                {principle.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/60">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Non-negotiable Standard
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
