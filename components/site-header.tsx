"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background-primary/80 backdrop-blur-xl shadow-soft-elevation" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 py-1">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-google-blue via-google-red to-google-yellow text-lg font-bold text-white shadow-none">
              B
            </span>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-blue">
                Open Knowledge Platform
              </p>
              <p className="font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
                Beinganie
              </p>
            </div>
          </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-google-blue dark:text-slate-300 dark:hover:text-google-blue/80 transition-colors"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <label className="flex min-w-[180px] items-center gap-2 rounded-full border border-border-subtle bg-surface-secondary px-4 py-2 text-sm text-text-secondary shadow-none dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400">
            <Search className="h-4 w-4" />
            <input
              type="search"
              placeholder="Search topics"
              className="w-full bg-transparent outline-none placeholder:text-slate-400"
            />
          </label>
          
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-background-primary/80 text-text-secondary shadow-none backdrop-blur transition hover:scale-[1.05] dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full grid gap-3 rounded-b-[1.75rem] border border-border-subtle bg-background-primary/90 p-4 text-sm font-medium text-text-secondary shadow-soft-elevation backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 sm:grid-cols-2"
            >
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-surface-secondary/70 px-4 py-3 hover:border-google-blue/20 hover:bg-google-blue/10 hover:text-google-blue dark:bg-slate-950/60"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {item.label}
                    </Link>
                  );
                })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
