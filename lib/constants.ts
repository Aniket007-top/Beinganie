export const ACCENT_CLASS_MAP = {
  ai: {
    chip: "border-google-blue/20 bg-google-blue/10 text-google-blue",
    button: "bg-google-blue hover:bg-google-blue/90 text-white",
    soft: "bg-google-blue/10 text-google-blue border-google-blue/20",
    shell: "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70",
    label: "text-google-blue"
  },
  iot: {
    chip: "border-google-green/20 bg-google-green/10 text-google-green",
    button: "bg-google-green hover:bg-google-green/90 text-white",
    soft: "bg-google-green/10 text-google-green border-google-green/20",
    shell: "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70",
    label: "text-google-green"
  },
  robotics: {
    chip: "border-google-yellow/20 bg-google-yellow/10 text-google-yellow",
    button: "bg-google-yellow hover:bg-google-yellow/90 text-white",
    soft: "bg-google-yellow/10 text-google-yellow border-google-yellow/20",
    shell: "border-border-subtle bg-background-primary dark:border-slate-800 dark:bg-slate-950/70",
    label: "text-google-yellow"
  }
};

export type AccentKey = keyof typeof ACCENT_CLASS_MAP;