import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, LucideIcon } from "lucide-react";

import { ChapterVisualPanel } from "@/components/chapter-visual-panel";
import { SiteFooter } from "@/components/site-footer";
import { getLevelSlug, type LearningPath } from "@/lib/learning-paths";

const accentClassMap = {
  ai: {
    chip: "border-google-blue/20 bg-google-blue/10 text-google-blue",
    button: "bg-google-blue hover:bg-google-blue/90 text-white",
    soft: "bg-google-blue/10 text-google-blue border-google-blue/20",
    shell:
      "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70", // Simplified shell
    label: "text-google-blue"
  },
  iot: {
    chip: "border-google-green/20 bg-google-green/10 text-google-green",
    button: "bg-google-green hover:bg-google-green/90 text-white",
    soft: "bg-google-green/10 text-google-green border-google-green/20",
    shell:
      "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70", // Simplified shell
    label: "text-google-green"
  },
  robotics: {
    chip: "border-google-yellow/20 bg-google-yellow/10 text-google-yellow",
    button: "bg-google-yellow hover:bg-google-yellow/90 text-white",
    soft: "bg-google-yellow/10 text-google-yellow border-google-yellow/20",
    shell:
      "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70", // Simplified shell
    label: "text-google-yellow"
  }
};

export function SubjectPage({ path }: { path: LearningPath }) {
  const accent = accentClassMap[path.accent];
  const Icon: LucideIcon = path.icon;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 pb-14 px-4 sm:px-6 lg:gap-24">
      <section className={`rounded-[2rem] border p-6 shadow-none backdrop-blur sm:p-8 lg:p-10 ${accent.shell}`}>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>

            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm font-bold ${accent.chip}`}>
              <Icon className="h-4 w-4" />
              {path.title}
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {path.heroTitle}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                {path.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#levels"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] transition hover:scale-[1.02] ${accent.button}`}
              >
                Explore Levels
              </Link>
              <Link
                href="#resources"
                className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-background-primary/80 px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-text-primary shadow-none transition hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
              >
                Resource Hub
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-6 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.soft}`}>
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Mission
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {path.mission}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-6 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                Roadmap
              </h2>
              <div className="mt-4 space-y-3">
                {path.roadmap.map((step) => (
                  <div
                    key={step}
                    className="rounded-[1.25rem] border border-border-subtle bg-background-primary/80 px-4 py-3 text-sm leading-relaxed text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="levels" className="space-y-6">
        {path.levels.map((level) => (
          <article
            key={level.id}
            id={level.id}
            className={`rounded-[2rem] border p-6 shadow-none backdrop-blur sm:p-8 ${accent.shell}`}
          >
            <div className="flex flex-col gap-4 border-b border-border-subtle pb-6 dark:border-slate-800 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className={`font-mono text-sm font-bold uppercase tracking-[0.2em] ${accent.label}`}>
                  {level.style}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white">
                  {level.level}
                </h2>
              </div>
              <div className={`inline-flex rounded-full border px-4 py-2 text-sm font-bold ${accent.soft}`}>
                {path.shortTitle} Learning Layer
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              {level.summary}
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-display text-base font-semibold text-text-primary dark:text-white">
                Chapter Guide
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {level.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${level.id}-section-${index + 1}`}
                    className={`inline-flex rounded-full border border-border-subtle bg-background-primary/80 px-4 py-2 text-sm font-medium text-text-secondary transition hover:scale-[1.02] hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 ${accent.label}`}
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                {level.sections.map((section, index) => (
                  <div
                    key={section.title}
                    id={`${level.id}-section-${index + 1}`}
                    className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
                      {section.title}
                    </h3>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
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
                  </div>
                ))}
              </div>

              <aside className="space-y-5">
                <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="font-display text-base font-semibold text-text-primary dark:text-white">
                    Learn by Doing
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {level.project}
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="font-display text-base font-semibold text-text-primary dark:text-white">
                    Full Chapter Route
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Open this level as a dedicated page for focused reading and future long-form expansion.
                  </p>
                  <Link
                    href={`/${path.slug}/${getLevelSlug(level.id)}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-google-blue hover:text-google-blue/80 dark:text-white dark:hover:text-google-blue/80"
                  >
                    Open full level page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="font-display text-base font-semibold text-text-primary dark:text-white">
                    Why this level matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Each learning layer is designed to move the student from
                    recognition to reasoning to system design, which is how real
                    technical confidence is built.
                  </p>
                </div>
              </aside>
            </div>
          </article>
        ))}
      </section>

      <section
        id="resources"
        className={`rounded-[2rem] border p-6 shadow-none backdrop-blur sm:p-8 ${accent.shell}`}
      >
        <div className="mb-6">
          <p className={`font-mono text-sm font-bold uppercase tracking-[0.2em] ${accent.label}`}>
            Resource Hub
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white">
            Free tools and study directions for {path.title}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {path.resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target={resource.href.startsWith("http") ? "_blank" : undefined}
              rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-5 shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue/40 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-text-primary dark:text-white">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {resource.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-google-blue dark:text-google-blue/80">
                Explore
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
