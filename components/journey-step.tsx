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
    <div className="rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-5 shadow-none backdrop-blur transition hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-blue dark:text-google-blue/80">
        {index}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}