interface ResourceItemProps {
  title: string;
  description: string;
  href: string;
}

export function ResourceItem({ title, description, href }: ResourceItemProps) {
  const isExternal = href.startsWith("http");
  
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block rounded-2xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-ai hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-900/70"
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
