"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Download, Orbit, Sparkles, LucideIcon } from "lucide-react";

const heroMetrics = [
  { label: "Learning Tracks", value: "3" },
  { label: "Free Resources", value: "100%" },
  { label: "Interactive Labs", value: "Arcade" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-background-primary px-6 py-16 shadow-none dark:border-slate-800 dark:bg-slate-950 sm:px-10 lg:px-12">
      {/* Subtle background gradients for visual interest, replacing heavy grid/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,133,244,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(52,168,83,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(66,133,244,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(52,168,83,0.15),transparent_30%)]" />
      
      {/* Removed specific blur circles for a cleaner look, relying on overall gradient */}

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-google-green/20 bg-surface-secondary/80 px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-google-green shadow-none dark:bg-slate-950/85">
            <Sparkles className="h-4 w-4" />
            Professional, free, project-based deep-tech learning
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-6 shadow-none dark:border-slate-800 sm:p-8">
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary dark:text-white sm:text-6xl lg:text-7xl">
              Learn Future Technologies for Free - AI, IoT & Robotics
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Beinganie is a modern learning platform designed to teach Artificial
              Intelligence, Internet of Things, and Robotics from simple concepts
              to engineer-level systems using free tools, open-source workflows,
              and interactive labs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#tracks"
              className="inline-flex items-center justify-center rounded-full bg-google-blue px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white shadow-none transition hover:scale-[1.02] hover:bg-google-blue/90"
            >
              Start Learning
            </Link>
            <Link
              href="https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-background-primary/80 px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-text-primary shadow-none transition hover:scale-[1.02] hover:border-google-blue dark:border-slate-800 dark:bg-slate-950/85 dark:text-slate-200"
            >
              <Download className="h-4 w-4" />
              Download AI Notes
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary/80 p-4 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/75"
              >
                <p className="font-display text-3xl font-semibold text-google-blue dark:text-google-blue/80">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative z-10 grid gap-4"
        >
          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-6 text-white shadow-none dark:border-slate-800">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-google-blue/10 ring-1 ring-inset ring-google-blue/30">
              <Orbit className="h-6 w-6 text-google-blue" />
            </div>
            <h2 className="font-display text-3xl font-normal text-emerald-300">Mission Control</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Build strong foundations, develop real systems, and create
              technologies that serve humanity with ethics, clarity, and skill.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <FeatureMiniCard
              icon={BrainCircuit}
              title="AI Systems"
              description="Models, neural nets, LLMs, deployment"
              accent="ai"
            />
            <FeatureMiniCard
              icon={Cpu}
              title="IoT Devices"
              description="Sensors, microcontrollers, smart logic"
              accent="iot"
            />
            <FeatureMiniCard
              icon={Orbit}
              title="Robotics"
              description="Control, movement, autonomy"
              accent="robotics"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureMiniCard({
  icon: Icon,
  title,
  description,
  accent
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "ai" | "iot" | "robotics";
}) {
  const accents = {
    ai: "bg-google-blue/10 text-google-blue",
    iot: "bg-google-green/10 text-google-green",
    robotics: "bg-google-yellow/10 text-google-yellow",
  };

  return (
    <div className="rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-5 shadow-none backdrop-blur transition duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-950/70">
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/40 ${accents[accent]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
