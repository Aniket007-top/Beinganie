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
    <section className="relative overflow-hidden rounded-[2rem] border border-indigo-200/70 bg-hero-grid px-6 py-16 shadow-glow dark:border-indigo-500/20 dark:bg-slate-950 sm:px-10 lg:px-12">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:36px_36px] opacity-40 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_80%)]" />
      <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-ai/20 blur-3xl" />
      <div className="absolute -right-24 top-24 h-56 w-56 rounded-full bg-iot/20 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ai/20 bg-white/70 px-4 py-2 font-mono text-sm font-semibold text-ai shadow-sm dark:bg-slate-950/60">
            <Sparkles className="h-4 w-4" />
            Professional, free, project-based deep-tech learning
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Learn Future Technologies for Free - AI, IoT & Robotics
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Beinganie is a modern learning platform designed to teach Artificial
              Intelligence, Internet of Things, and Robotics from simple concepts
              to engineer-level systems using free tools, open-source workflows,
              and interactive labs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#tracks"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              Start Learning
            </Link>
            <Link
              href="https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ai/20 bg-gradient-to-r from-ai to-indigo-500 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-neon transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-cyan-500"
            >
              <Download className="h-4 w-4" />
              Download AI Notes
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-indigo-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70"
              >
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
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
          <div className="rounded-[1.75rem] border border-indigo-500/20 bg-slate-950/95 p-6 text-white shadow-neon">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ai/20 ring-1 ring-inset ring-ai/30">
              <Orbit className="h-6 w-6 text-indigo-300" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Mission Control</h2>
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
    ai: "bg-ai-soft text-ai",
    iot: "bg-iot-soft text-iot",
    robotics: "bg-robotics-soft text-robotics",
  };

  return (
    <div className="rounded-3xl border border-indigo-200/70 bg-white/75 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-950/70">
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
