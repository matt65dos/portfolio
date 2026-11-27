"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Cpu, Check, Layers, Database, ShieldCheck } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-blue-500" />;
      case 1:
        return <Cpu className="w-4 h-4 text-purple-500" />;
      case 2:
        return <Database className="w-4 h-4 text-emerald-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 apple-glass">
          <Cpu className="w-3.5 h-3.5 text-purple-500" />
          <span>Technical Stack</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Depth Across the Stack.
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Senior-level mastery in React and Next.js, backed by production experience in Node.js, relational databases, and observability.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.skills.map((category, index) => (
          <div
            key={category.title}
            className="rounded-3xl apple-glass p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80">
                  {getCategoryIcon(index)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      skill.highlight
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                        : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50"
                    }`}
                  >
                    {skill.highlight && <Check className="w-3 h-3 text-emerald-400 shrink-0" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span>Production Tested</span>
              <span>100% Active in Projects</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
