import React from "react";

interface ResourceItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  href: string;
}

export function ResourceItem({ title, description, href, className, ...props }: ResourceItemProps) {
  const isExternal = href.startsWith("http");
  
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`block rounded-[1.75rem] border border-border-subtle bg-background-primary p-5 shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-blue dark:border-slate-800 dark:bg-slate-900/70 ${className}`}
      {...props}
    >
      <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </a>
  );
}
