export function MetricBadge({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-border-subtle bg-background-primary/80 px-5 py-3 text-center shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-display text-2xl font-semibold text-text-primary dark:text-white">
        {value}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}