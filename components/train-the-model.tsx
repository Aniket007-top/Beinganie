"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, RefreshCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Label = "fruit" | "vehicle";
type Sample = {
  id: number;
  name: string;
  hint: string;
  answer: Label;
};

const STORAGE_KEY = "beinganie-ai-lab";

const samples: Sample[] = [
  { id: 1, name: "Apple", hint: "Grows on trees and is edible.", answer: "fruit" },
  { id: 2, name: "Car", hint: "Used for road transportation.", answer: "vehicle" },
  { id: 3, name: "Banana", hint: "Yellow curved snack.", answer: "fruit" },
  { id: 4, name: "Bus", hint: "Carries many passengers.", answer: "vehicle" },
  { id: 5, name: "Mango", hint: "Sweet tropical produce.", answer: "fruit" },
  { id: 6, name: "Bicycle", hint: "Two wheels and pedals.", answer: "vehicle" }
];

export function TrainTheModel() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState(
    "Label the samples correctly to simulate training data quality."
  );

  const current = samples[index];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "completed") {
      setComplete(true);
      setScore(samples.length);
      setIndex(samples.length);
      setMessage("AI Lab already completed. Replay it to practice better labeling.");
    }
  }, []);

  const progress = useMemo(
    () => Math.min(100, Math.round((Math.min(index, samples.length) / samples.length) * 100)),
    [index]
  );

  function handleLabel(label: Label) {
    if (!current || complete) return;

    const isCorrect = label === current.answer;
    const nextScore = isCorrect ? score + 1 : score;
    const nextIndex = index + 1;

    setScore(nextScore);
    setIndex(nextIndex);
    setMessage(
      isCorrect
        ? "Correct label. Clean labeled data helps models learn patterns faster."
        : `Not quite. ${current.name} belongs to the ${current.answer} class.`
    );

    if (nextIndex >= samples.length) {
      const passed = nextScore >= samples.length - 1;
      setComplete(true);
      localStorage.setItem(STORAGE_KEY, passed ? "completed" : "attempted");
      setMessage(
        passed
          ? "Training complete. Your labels were strong enough to build a reliable starter dataset."
          : "Training ended, but the dataset needs cleaner labels. Reset and try again."
      );
    }
  }

  function resetLab() {
    setIndex(0);
    setScore(0);
    setComplete(false);
    setMessage("Lab reset. Start labeling from the first sample again.");
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-background-primary p-6 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,133,244,0.1),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(66,133,244,0.1),transparent_32%)]" />
      <div className="relative grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-google-blue/20 bg-background-primary/80 px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-google-blue shadow-none dark:bg-slate-950/70">
            <BrainCircuit className="h-4 w-4" />
            Arcade Lab - AI
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white sm:text-4xl">
              Train the Model
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              This mini game teaches one of the most important AI ideas: good models need
              good labeled data. Sort each sample into the correct class and watch how your
              training quality improves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Mission
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Build a clean dataset
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Accurate labels help a model detect patterns instead of noise.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Concept
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Supervised learning
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Each example gets a correct answer so the system can learn from it.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Training score
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Correct labels: {score} / {samples.length}
                </p>
              </div>
              {complete ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Complete
                </span>
              ) : null}
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
              <div // Progress bar uses Google Blue
                className="h-full rounded-full bg-gradient-to-r from-google-blue to-cyan-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <span>Dataset progress</span>
              <span>{progress}% synced</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <motion.div
            key={current?.id ?? "done"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-6 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
          >
            {current && !complete ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    Sample {index + 1}
                  </p>
                  <span className="rounded-full border border-google-blue/20 bg-google-blue/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-google-blue">
                    Live labeling
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold text-slate-950 dark:text-white">
                  {current.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Hint: {current.hint}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => handleLabel("fruit")}
                    className="group rounded-[1.5rem] border border-border-subtle bg-background-primary/80 px-5 py-5 text-left shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue dark:bg-slate-950/80"
                  >
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-google-blue">
                      Label A
                    </p>
                    <p className="mt-3 font-display text-lg font-semibold text-text-primary transition group-hover:text-google-blue dark:text-white">
                      Fruit
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Natural edible plant item
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLabel("vehicle")}
                    className="group rounded-[1.5rem] border border-border-subtle bg-background-primary/80 px-5 py-5 text-left shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue dark:bg-slate-950/80"
                  >
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-google-blue">
                      Label B
                    </p>
                    <p className="mt-3 font-display text-lg font-semibold text-text-primary transition group-hover:text-google-blue dark:text-white">
                      Vehicle
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Machine used for transport
                    </p>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    Session finished
                  </p>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-100 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    Review ready
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  Dataset review complete
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  High-quality labels are one of the simplest ways to improve ML
                  performance. Reset the lab to simulate another training round.
                </p>
              </>
            )}
          </motion.div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetLab}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-primary/80 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-text-secondary shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <RefreshCcw className="h-4 w-4" />
              Reset AI Lab
            </button>
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                Lab feedback
              </p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Neural coach
              </span>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
