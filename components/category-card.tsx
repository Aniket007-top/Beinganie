import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: "ai" | "iot" | "robotics";
  image: string;
  imageAlt: string;
  imageCreditHref: string;
};

const accentStyles = {
  ai: "border-google-blue/20 bg-google-blue/10 text-google-blue",
  iot: "border-google-green/20 bg-google-green/10 text-google-green",
  robotics: "border-google-yellow/20 bg-google-yellow/10 text-google-yellow"
};

export function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
  accent,
  image,
  imageAlt,
  imageCreditHref
}: CategoryCardProps) {
  return (
    <Link // Bento Grid Card
      href={href}
      className="group rounded-[2rem] border border-border-subtle bg-background-primary p-6 shadow-none backdrop-blur transition duration-300 hover:scale-[1.02] hover:border-google-blue/40 dark:border-slate-800 dark:bg-slate-950/70"
    >
      <div className="mb-5 overflow-hidden rounded-[1.75rem] border border-border-subtle bg-surface-secondary dark:border-slate-800 dark:bg-slate-900/70">
        <Image
          src={image}
          alt={imageAlt}
          width={900}
          height={540}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
      </div>
      <div // Icon container
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border ring-1 ring-inset ring-white/40 ${accentStyles[accent]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-text-secondary transition group-hover:text-google-blue dark:group-hover:text-google-blue/80" />
        </div>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          Visual source: Wikimedia Commons
        </p>
      </div>
      <span className="sr-only">{imageCreditHref}</span>
    </Link>
  );
}
