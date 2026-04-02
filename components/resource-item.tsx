import React from "react";
import { ArrowRight } from "lucide-react";

interface ResourceItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  href: string;
}

export function ResourceItem({ title, description, href, className, ...props }: ResourceItemProps) {
  const isExternal = href?.startsWith("http");
  
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group block rounded-[1.75rem] border border-border-subtle bg-background-primary p-5 shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue/40 dark:border-slate-800 dark:bg-slate-900/70 ${className || ""}`}
      {...props}
    >
      <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-google-blue dark:text-google-blue/80">
        Explore
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}
