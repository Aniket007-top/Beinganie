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
    <article className="rounded-[2rem] border border-border-subtle bg-background-primary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="overflow-hidden rounded-[1.75rem] border border-border-subtle dark:border-slate-800">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={720}
          className="h-52 w-full object-cover" // Image aspect ratio
          unoptimized
        />
      </div>
      <div className="mt-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400">
          {accentLabel} visual
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <div className="mt-5">{children}</div>
      <a
        href={imageSource}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.15em] text-slate-500 hover:text-google-blue dark:text-slate-400 dark:hover:text-google-blue/80"
      >
        Source: Wikimedia Commons
      </a>
    </article>
  );
}