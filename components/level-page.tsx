import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, LucideIcon } from "lucide-react";

import { ChapterVisualPanel } from "@/components/chapter-visual-panel";
import { getLevelSlug, type LearningPath, type LevelContent } from "@/lib/learning-paths";

const accentClassMap = {
  ai: {
    chip: "border-ai/20 bg-ai-soft text-ai",
    button: "bg-ai hover:bg-indigo-700 text-white",
    soft: "bg-ai-soft text-ai border-ai/20"
  },
  iot: {
    chip: "border-iot/20 bg-iot-soft text-iot",
    button: "bg-iot hover:bg-emerald-700 text-white",
    soft: "bg-iot-soft text-iot border-iot/20"
  },
  robotics: {
    chip: "border-robotics/20 bg-robotics-soft text-robotics",
    button: "bg-robotics hover:bg-amber-700 text-white",
    soft: "bg-robotics-soft text-robotics border-robotics/20"
  }
};

export function LevelPage({
  path,
  level
}: {
  path: LearningPath;
  level: LevelContent;
}) {
  const accent = accentClassMap[path.accent];
  const Icon: LucideIcon = path.icon;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 pb-14">
      <section className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${path.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {path.title}
              </Link>
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm font-semibold ${accent.chip}`}>
                <Icon className="h-4 w-4" />
                {level.level}
              </div>
            </div>

            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {level.style}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {path.shortTitle} {level.level} Deep Dive
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                {level.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#chapters"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 ${accent.button}`}
              >
                Open Chapters
              </Link>
              <Link
                href={`/${path.slug}#resources`}
                className="inline-flex items-center justify-center rounded-full border border-indigo-200/70 bg-white/70 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:-translate-y-0.5 dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-200"
              >
                Subject Resources
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-indigo-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.soft}`}>
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Level Outcome
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                By finishing this chapter stream, the learner should be able to
                explain the main ideas, reason through design tradeoffs, and
                apply the subject at the depth expected for this level.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-indigo-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
              <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                Chapter Navigation
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {level.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#chapter-${index + 1}`}
                    className="inline-flex rounded-full border border-indigo-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-sm dark:border-indigo-500/20 dark:bg-slate-950/80 dark:text-slate-200"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="chapters"
        className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8"
      >
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Full Chapters
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-950 dark:text-white">
              {path.title} - {level.level}
            </h2>
          </div>
          <div className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${accent.soft}`}>
            Route: /{path.slug}/{getLevelSlug(level.id)}
          </div>
        </div>

        <div className="space-y-5">
          {level.sections.map((section, index) => (
            <article
              key={section.title}
              id={`chapter-${index + 1}`}
              className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${accent.soft}`}>
                  Chapter {index + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  {section.title}
                </h3>
              </div>

              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <ChapterVisualPanel
                accent={path.accent}
                sectionTitle={section.title}
                index={index}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Applied Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-950 dark:text-white">
            Learn by Doing
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {level.project}
          </p>
        </div>

        <div className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Continue Learning
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-950 dark:text-white">
            Return to the full path
          </h2>
          <div className="mt-5 space-y-3">
            <Link
              href={`/${path.slug}`}
              className="flex items-center justify-between rounded-2xl border border-indigo-200/70 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-sm dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-200"
            >
              Back to {path.title} overview
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${path.slug}#resources`}
              className="flex items-center justify-between rounded-2xl border border-indigo-200/70 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-sm dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-200"
            >
              Open {path.title} resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
