"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio-data";
import {
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Radio,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"highlights" | "stack" | "preview">("highlights");

  // Render mock UI preview based on project ID
  const renderInteractiveMock = () => {
    if (project.id === "dentwise") {
      return (
        <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 text-left font-sans text-xs h-full flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800/60">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>VOICE AGENT ACTIVE</span>
            </div>
            <span className="text-zinc-500 font-mono text-[10px]">Latency: 380ms</span>
          </div>

          <div className="space-y-2">
            <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300">
              <span className="text-zinc-500 text-[10px] block font-mono">PATIENT INCOMING</span>
              &ldquo;I need to reschedule my appointment for Thursday.&rdquo;
            </div>

            <div className="p-2 rounded-xl bg-sky-950/40 border border-sky-800/50 text-sky-200">
              <span className="text-sky-400 text-[10px] block font-mono">DENTWISE AI</span>
              &ldquo;Slot open Thursday at 3:15 PM with Dr. Adams. Confirm?&rdquo;
            </div>
          </div>

          <div className="pt-1.5 flex items-center justify-between text-[11px] text-zinc-400 font-mono bg-zinc-900/50 px-2.5 py-1.5 rounded-lg border border-zinc-800/50">
            <span>Prisma Lock: CHAIR_B_1515</span>
            <span className="text-emerald-400 font-semibold">NO CONFLICT</span>
          </div>
        </div>
      );
    }

    if (project.id === "luma-studio") {
      return (
        <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 text-left font-sans text-xs h-full flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPENAI DALL-E ENGINE</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800 text-[10px]">
              Credits: 120 / 150
            </span>
          </div>

          <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-2 space-y-1.5">
            <div className="text-[10px] font-mono text-zinc-500">PROMPT PRESET: PHOTOREALISTIC 8K</div>
            <div className="text-zinc-200 text-[11px] line-clamp-1">
              &ldquo;Futuristic architecture at dusk, volumetric lighting, 8k&rdquo;
            </div>
            <div className="flex gap-1.5 pt-0.5">
              {["Ultra HD", "16:9", "Drizzle", "Strapi"].map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[9px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-10 rounded-lg bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-zinc-900 border border-purple-500/20 flex items-center justify-center text-[10px] text-purple-300">
              Batch #104
            </div>
            <div className="h-10 rounded-lg bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-zinc-900 border border-fuchsia-500/20 flex items-center justify-center text-[10px] text-fuchsia-300">
              Batch #105
            </div>
            <div className="h-10 rounded-lg bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-zinc-900 border border-violet-500/20 flex items-center justify-center text-[10px] text-violet-300">
              Batch #106
            </div>
          </div>
        </div>
      );
    }

    // Northwind E-commerce
    return (
      <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 text-left font-sans text-xs h-full flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>TANSTACK QUERY CLIENT CACHE</span>
          </div>
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Sentry: 0 Errors
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">CART (OPTIMISTIC)</div>
            <div className="text-zinc-200 font-medium text-[11px]">Nordic Keyboard</div>
            <div className="text-emerald-400 font-mono text-[11px]">$189.00 • In Stock</div>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">POLAR CHECKOUT</div>
            <div className="text-zinc-200 font-medium text-[11px]">Order #NW-9821</div>
            <div className="text-zinc-400 font-mono text-[10px]">Instant Webhook</div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between text-[11px] font-mono text-emerald-300">
          <span>StaleTime: 5m | Hit: 98.4%</span>
          <span className="text-zinc-400">Railway PG</span>
        </div>
      </div>
    );
  };

  return (
    <div className="group relative rounded-3xl apple-glass p-6 md:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40">
      {/* Ambient gradient layer */}
      <div
        className={`ambient-glow -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-br ${project.accentColor}`}
      />

      {/* Top Bar: Category & Deployment */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
            {project.deployment}
          </span>
        </div>

        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
          0{index + 1}
        </span>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-2 mb-6">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/40 border border-zinc-300/30 dark:border-zinc-700/40 mb-5 text-xs font-medium">
        <button
          type="button"
          onClick={() => setActiveTab("highlights")}
          className={`flex-1 py-1.5 px-2 rounded-xl whitespace-nowrap text-center transition-all ${
            activeTab === "highlights"
              ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          Highlights
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-1.5 px-2 rounded-xl whitespace-nowrap text-center transition-all ${
            activeTab === "preview"
              ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          Preview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("stack")}
          className={`flex-1 py-1.5 px-2 rounded-xl whitespace-nowrap text-center transition-all ${
            activeTab === "stack"
              ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          Stack
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[250px] flex-1 flex flex-col justify-start mb-6 overflow-hidden">
        {activeTab === "highlights" && (
          <ul className="space-y-3 flex-1 flex flex-col justify-start">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "preview" && renderInteractiveMock()}

        {activeTab === "stack" && (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800">
              {project.stats.map((stat, sIndex) => (
                <div key={sIndex} className="p-2.5 rounded-xl bg-zinc-100/60 dark:bg-zinc-800/40">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                    {stat.label}
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTAs */}
      <div className="mt-auto pt-4 border-t border-zinc-200/50 dark:border-zinc-800/70 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View Source on GitHub</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
        >
          <span>Repository</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
