import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt (@matt65dos) | Senior Frontend Developer",
  description:
    "Portfolio of Matt (@matt65dos) – Senior Frontend Developer specializing in Next.js, React 19, TypeScript, Voice AI, and high-performance web applications.",
  keywords: [
    "Senior Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Voice AI",
    "PERN Stack",
    "Web Performance",
  ],
  authors: [{ name: "Matt", url: "https://github.com/matt65dos" }],
  openGraph: {
    title: "Matt | Senior Frontend Developer",
    description:
      "Crafting Apple-grade user experiences with Next.js, React, TypeScript, and modern AI architectures.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
