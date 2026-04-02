export function AiBars() {
  const items = [
    { label: "Data", value: "92%", width: "w-[92%]" },
    { label: "Model", value: "78%", width: "w-[78%]" },
    { label: "Eval", value: "64%", width: "w-[64%]" },
    { label: "Deploy", value: "52%", width: "w-[52%]" }
  ];

  return (
    <div className="rounded-[1.25rem] border border-border-subtle bg-surface-secondary p-4 dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-blue">
        Pipeline graph
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200/80 dark:bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r from-google-blue to-cyan-400 ${item.width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IotFlow() {
  const steps = ["Sensor", "Edge", "Gateway", "Cloud", "App"];

  return (
    <div className="rounded-[1.25rem] border border-border-subtle bg-surface-secondary p-4 dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-green"> {/* M3 Green */}
        System flow
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="rounded-full border border-google-green/20 bg-google-green/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-google-green"> {/* M3 Green */}
              {step}
            </div>
            {index < steps.length - 1 ? (
              <div className="h-px w-6 bg-gradient-to-r from-google-green to-emerald-300" /> {/* M3 Green */}
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoboticsLoop() {
  const loop = ["Sense", "Plan", "Control", "Move"];

  return (
    <div className="rounded-[1.25rem] border border-border-subtle bg-surface-secondary p-4 dark:border-slate-800 dark:bg-slate-900/70"> {/* M3 styling */}
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-yellow"> {/* M3 Yellow */}
        Control loop
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {loop.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border border-google-yellow/20 bg-google-yellow/10 px-4 py-5 text-center font-mono text-xs uppercase tracking-[0.16em] text-google-yellow" {/* M3 Yellow */}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}