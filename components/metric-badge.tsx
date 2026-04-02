export function MetricBadge({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}