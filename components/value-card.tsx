interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="font-display text-lg font-semibold tracking-tight text-text-primary dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
