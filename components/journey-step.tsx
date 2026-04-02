export function JourneyStep({
  index,
  title,
  description
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ai">
        {index}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}