"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, BrainCircuit, ChevronDown, CircuitBoard, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";

type Level = {
  id: string;
  label: string;
  audience: string;
  summary: string;
  highlights: string[];
  project: string;
};

type LearningModuleProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent: "ai" | "iot" | "robotics";
  levels: Level[];
};

const accentMap = {
  ai: {
    chip: "bg-ai-soft text-ai border-ai/20",
    panel: "from-ai/10 via-white to-white dark:from-ai/10 dark:via-slate-950 dark:to-slate-950",
    icon: BrainCircuit
  },
  iot: {
    chip: "bg-iot-soft text-iot border-iot/20",
    panel: "from-iot/10 via-white to-white dark:from-iot/10 dark:via-slate-950 dark:to-slate-950",
    icon: CircuitBoard
  },
  robotics: {
    chip: "bg-robotics-soft text-robotics border-robotics/20",
    panel: "from-robotics/10 via-white to-white dark:from-robotics/10 dark:via-slate-950 dark:to-slate-950",
    icon: Layers3
  }
};

export function LearningModule({
  eyebrow,
  title,
  description,
  accent,
  levels
}: LearningModuleProps) {
  const [openLevel, setOpenLevel] = useState(levels[0]?.id);
  const accentConfig = accentMap[accent];
  const AccentIcon = accentConfig.icon;

  const currentLevel = useMemo(
    () => levels.find((level) => level.id === openLevel) ?? levels[0],
    [levels, openLevel]
  );

  return (
    <section className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm font-semibold ${accentConfig.chip}`}>
            <AccentIcon className="h-4 w-4" />
            {eyebrow}
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
            <div className="mb-3 flex items-center gap-3">
              <BookOpenCheck className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                Current Focus
              </h3>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {currentLevel.label}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {currentLevel.summary}
            </p>
          </div>
        </div>

        <div className={`rounded-[1.75rem] border border-indigo-200/70 bg-gradient-to-br ${accentConfig.panel} p-4 shadow-neon dark:border-indigo-500/20`}>
          <div className="space-y-4">
            {levels.map((level) => {
              const isOpen = openLevel === level.id;

              return (
                <motion.div
                  layout
                  key={level.id}
                  className="overflow-hidden rounded-3xl border border-indigo-200/70 bg-white/85 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/75"
                >
                  <button
                    type="button"
                    onClick={() => setOpenLevel(isOpen ? "" : level.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-ai/5"
                  >
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        {level.audience}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-slate-950 dark:text-white">
                        {level.label}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="border-t border-indigo-200/70 px-5 pb-5 pt-4 dark:border-indigo-500/20"
                    >
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {level.summary}
                      </p>

                      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            Key learning highlights
                          </p>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {level.highlights.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl border border-indigo-200/70 bg-white/80 p-4 backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
                          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                            Learn by doing
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
                            {level.project}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { Level };
