"use client";

import Link from "next/link";
import { LayoutDashboard, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 mx-auto mb-8 w-full max-w-7xl rounded-3xl border border-indigo-200/60 bg-white/70 px-4 py-4 shadow-neon backdrop-blur-xl dark:border-indigo-500/20 dark:bg-slate-950/70 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ai via-indigo-500 to-cyan-400 text-sm font-bold text-white shadow-neon">
              B
            </span>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-ai">
                Open Knowledge Platform
              </p>
              <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                Beinganie
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/#tracks" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            Tracks
          </Link>
          <Link href="/ai" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            AI
          </Link>
          <Link href="/iot" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            IoT
          </Link>
          <Link href="/robotics" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            Robotics
          </Link>
          <Link href="/#resource-hub" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            Resources
          </Link>
          <Link href="/#arcade-lab" className="rounded-full px-3 py-2 hover:bg-ai/10 hover:text-ai">
            Arcade Lab
          </Link>
          <Link
            href="/#dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 hover:border-ai hover:text-ai dark:border-indigo-500/20 dark:bg-slate-900/70"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <label className="flex min-w-[220px] items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2.5 text-sm text-slate-500 shadow-sm dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-400">
            <Search className="h-4 w-4" />
            <input
              type="search"
              placeholder="Search topics"
              className="w-full bg-transparent outline-none placeholder:text-slate-400"
            />
          </label>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
