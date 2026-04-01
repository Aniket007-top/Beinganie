interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
      <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
