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
  ai: "border-ai/20 bg-ai-soft text-ai",
  iot: "border-iot/20 bg-iot-soft text-iot",
  robotics: "border-robotics/20 bg-robotics-soft text-robotics"
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
    <Link
      href={href}
      className="group rounded-3xl border border-indigo-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ai/40 hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-950/70"
    >
      <div className="mb-5 overflow-hidden rounded-[1.4rem] border border-indigo-200/70 bg-slate-950/5 dark:border-indigo-500/20 dark:bg-slate-900/70">
        <Image
          src={image}
          alt={imageAlt}
          width={900}
          height={540}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
      </div>
      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ring-1 ring-inset ring-white/40 ${accentStyles[accent]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-700 dark:group-hover:text-slate-200" />
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
