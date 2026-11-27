"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ProjectCard } from "./project-card";
import { Sparkles, Code2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 apple-glass">
          <Code2 className="w-3.5 h-3.5 text-blue-500" />
          <span>Selected Works</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Engineered for Impact.
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Three production applications spanning voice AI automation, generative creative SaaS, and high-concurrency PERN commerce.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
