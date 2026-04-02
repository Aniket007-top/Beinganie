import type { ReactNode } from "react";
import Image from "next/image";

export function FigureCard({
  title,
  description,
  image,
  imageAlt,
  imageSource,
  accent,
  children
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSource: string;
  accent: "ai" | "iot" | "robotics";
  children: ReactNode;
}) {
  const accentLabel = {
    ai: "AI",
    iot: "IoT",
    robotics: "Robotics"
  }[accent];

  return (
    <article className="figure-card p-4 sm:p-5">
      <div className="overflow-hidden rounded-[1.2rem] border border-indigo-200/70 dark:border-indigo-500/20">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={720}
          className="h-52 w-full object-cover"
          unoptimized
        />
      </div>
      <div className="mt-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {accentLabel} visual
        </p>
        <h3 className="mt-2 font-display text-2xl font-normal tracking-wide text-slate-950 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <div className="mt-5">{children}</div>
      <a
        href={imageSource}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
      >
        Source: Wikimedia Commons
      </a>
    </article>
  );
}