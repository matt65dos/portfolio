import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-zinc-200/50 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <p className="font-medium text-zinc-800 dark:text-zinc-200">
            {PORTFOLIO_DATA.personal.name} • {PORTFOLIO_DATA.personal.role}
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            Engineered with Next.js 16, TypeScript, Tailwind CSS &amp; Apple Design Language.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
