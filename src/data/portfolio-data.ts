export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  deployment: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  accentColor: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Matt",
    handle: "@matt65dos",
    role: "Senior Frontend Developer",
    location: "Available Globally / Remote",
    status: "Open to new opportunities",
    email: "klimorowski@gmail.com",
    github: "https://github.com/matt65dos",
    linkedin: "https://www.linkedin.com/in/mateusz-klimorowski-frontend-developer",
    resumeUrl: "#resume",
    bio: "Senior Frontend Developer specializing in engineering high-concurrency web applications, AI-integrated product interfaces, and resilient client-side state architectures with Next.js, React, and TypeScript.",
    quickPitch:
      "Crafting production-grade, Apple-grade user experiences with a focus on web performance, zero-layout-shift UI, clean design systems, and robust full-stack integrations.",
  },

  projects: [
    {
      id: "dentwise",
      title: "DentWise",
      tagline: "AI-Powered Voice Assistant for Appointment Scheduling",
      category: "Voice AI & HealthTech",
      badge: "Realtime Voice AI",
      description:
        "An intelligent, real-time voice assistant designed to automate dental clinic front-desk call routing, patient appointment scheduling, and automated reminders without human intervention.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma ORM",
        "Clerk Auth",
        "Tailwind CSS",
        "Vercel",
      ],
      deployment: "Vercel",
      githubUrl: "https://github.com/matt65dos/dentwise",
      liveUrl: "https://github.com/matt65dos/dentwise",
      highlights: [
        "Engineered ultra-low latency voice conversational flow with real-time speech synthesis and intent detection.",
        "Designed resilient Prisma ORM schemas with PostgreSQL to prevent double-bookings across multi-chair clinic calendars.",
        "Built administrative clinic dashboard with role-based access control and session management via Clerk.",
      ],
      stats: [
        { label: "Voice Latency", value: "< 450ms" },
        { label: "Booking Speed", value: "2.4x faster" },
        { label: "Deployment", value: "Vercel Edge" },
      ],
      accentColor: "from-sky-500/20 via-blue-500/10 to-transparent",
    },
    {
      id: "luma-studio",
      title: "Luma Studio",
      tagline: "AI Image Generation & Style Presets SaaS",
      category: "Generative AI & SaaS",
      badge: "Full SaaS with OpenAI",
      description:
        "Full-featured creative image generation SaaS application powered by OpenAI, offering prompt enhancement, custom curated style presets, canvas generation history, and credit subscription tiers.",
      technologies: [
        "Next.js",
        "OpenAI API",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Strapi CMS",
        "Vercel",
      ],
      deployment: "Vercel",
      githubUrl: "https://github.com/matt65dos/lumastudio-nextjs",
      liveUrl: "https://github.com/matt65dos/lumastudio-nextjs",
      highlights: [
        "Developed infinite-scroll generation gallery with responsive masonry layout, client-side caching, and optimistic previews.",
        "Architected performant relational schemas via Drizzle ORM for user token consumption, credit tiers, and billing webhooks.",
        "Integrated headless Strapi CMS to dynamically curate art styles, prompt templates, and community inspiration showcases.",
      ],
      stats: [
        { label: "Generation Engine", value: "OpenAI API" },
        { label: "ORM", value: "Drizzle / PG" },
        { label: "CMS", value: "Headless Strapi" },
      ],
      accentColor: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    },
    {
      id: "northwind",
      title: "Northwind",
      tagline: "High-Concurrency PERN E-Commerce Platform",
      category: "Full-Stack Commerce",
      badge: "Production PERN Stack",
      description:
        "Enterprise-ready modern e-commerce application built on the PERN stack with TanStack Query caching, resilient payment checkouts via Polar, full-text product search, and full Sentry telemetry.",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Drizzle ORM",
        "Clerk",
        "Polar",
        "Sentry",
        "Tailwind CSS",
        "Railway",
      ],
      deployment: "Railway",
      githubUrl: "https://github.com/matt65dos/northwind",
      liveUrl: "https://github.com/matt65dos/northwind",
      highlights: [
        "Architected client state using TanStack Query: optimistic cart modifications, automated background refetching, and zero layout shift.",
        "Integrated Polar merchant payment checkout workflows with idempotent webhook handlers and real-time order state machine.",
        "Configured full-stack Sentry telemetry for distributed error tracing, API latency profiling, and real-time regression alerts.",
      ],
      stats: [
        { label: "Client Architecture", value: "TanStack Query" },
        { label: "Payments & Auth", value: "Polar + Clerk" },
        { label: "Telemetry", value: "Sentry Monitored" },
      ],
      accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
  ] as Project[],

  skills: [
    {
      title: "Frontend Architecture & Core",
      description: "Building resilient, accessible, and fast web experiences",
      skills: [
        { name: "React 19 / 18", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "TypeScript (Strict)", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML5 / Semantic Web", highlight: false },
        { name: "CSS Architecture / Modern CSS", highlight: false },
        { name: "Design Systems & Tokens", highlight: true },
        { name: "Responsive & Adaptive Layouts", highlight: false },
      ],
    },
    {
      title: "State Management & Data Layer",
      description: "Client cache synchronization, server components, and performance",
      skills: [
        { name: "TanStack Query (React Query)", highlight: true },
        { name: "React Server Components (RSC)", highlight: true },
        { name: "Zustand & Redux Toolkit", highlight: false },
        { name: "Optimistic UI Mutations", highlight: true },
        { name: "Client-side Caching & Hydration", highlight: false },
        { name: "WebSockets & Streaming", highlight: false },
      ],
    },
    {
      title: "Backend, APIs & Databases",
      description: "Full-stack capabilities powering frontend clients",
      skills: [
        { name: "Node.js & Express", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "Prisma ORM", highlight: false },
        { name: "Drizzle ORM", highlight: true },
        { name: "RESTful API Design", highlight: false },
        { name: "Clerk Authentication", highlight: true },
        { name: "Strapi Headless CMS", highlight: false },
        { name: "Polar Payment Gateway", highlight: false },
      ],
    },
    {
      title: "DevOps, Telemetry & Quality",
      description: "Production-ready testing, deployment, and monitoring pipelines",
      skills: [
        { name: "Vercel Platform", highlight: true },
        { name: "Railway Cloud", highlight: true },
        { name: "Sentry Monitoring & Tracing", highlight: true },
        { name: "Git & Trunk-based Workflow", highlight: false },
        { name: "Turbopack / Vite", highlight: false },
        { name: "Playwright / E2E Testing", highlight: true },
        { name: "Core Web Vitals Optimization", highlight: true },
        { name: "CI / CD Pipelines", highlight: false },
      ],
    },
  ] as SkillCategory[],

  principles: [
    {
      number: "01",
      title: "Performance First by Default",
      description:
        "Sub-second load times, instant interaction response (INP < 100ms), and 0 cumulative layout shift. Fast software communicates respect for the user's time.",
    },
    {
      number: "02",
      title: "Cupertino-Grade Design Fidelity",
      description:
        "Obsession with typography, spacing hierarchy, optical alignment, and micro-interactions. A polished UI builds immediate credibility and user trust.",
    },
    {
      number: "03",
      title: "Maintainable Codebase Architecture",
      description:
        "Clear module seams, strict typing, decoupling presentation from business logic, and predictable state transitions that let engineering teams ship continuously.",
    },
  ],
};
