"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Tracks", href: "/#tracks" },
  { label: "AI", href: "/ai" },
  { label: "IoT", href: "/iot" },
  { label: "Robotics", href: "/robotics" },
  { label: "Resources", href: "/#resource-hub" },
  { label: "Arcade Lab", href: "/#arcade-lab" },
  { label: "Dashboard", href: "/#dashboard", icon: LayoutDashboard }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto mb-8 w-full max-w-7xl rounded-3xl border border-indigo-200/60 bg-white/70 px-4 py-4 shadow-neon backdrop-blur-xl dark:border-indigo-500/20 dark:bg-slate-950/70 sm:px-6">
      <div className="flex flex-col gap-4">
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

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-neon transition hover:-translate-y-0.5 hover:border-ai hover:text-ai dark:border-indigo-500/20 dark:bg-slate-950/80 dark:text-slate-100"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              Menu
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex min-w-[220px] items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2.5 text-sm text-slate-500 shadow-sm dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-400">
            <Search className="h-4 w-4" />
            <input
              type="search"
              placeholder="Search topics"
              className="w-full bg-transparent outline-none placeholder:text-slate-400"
            />
          </label>

          {menuOpen ? (
            <nav className="grid gap-3 rounded-[1.5rem] border border-indigo-200/70 bg-white/80 p-4 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/80 dark:text-slate-300 sm:grid-cols-2 xl:grid-cols-4">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-white/70 px-4 py-3 hover:border-ai/20 hover:bg-ai/10 hover:text-ai dark:bg-slate-950/60"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : (
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </header>
  );
}
