export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-[2rem] border border-indigo-200/70 bg-white/75 px-6 py-8 text-sm text-slate-600 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 dark:text-slate-300 sm:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-normal tracking-wide text-slate-900 dark:text-white">
            Beinganie
          </p>
          <p className="mt-1">(Knowledge is free for everyone)</p>
        </div>

        <div className="space-y-1 text-sm leading-7">
          <p>
            Copyright © {year} Beinganie. All rights reserved.
          </p>
          <p>
            Created by <span className="font-semibold text-slate-900 dark:text-white">Aniket Kumar</span>
          </p>
          <p>
            Contact:{" "}
            <a
              href="mailto:goswamianiket2016@gmail.com"
              className="font-medium text-ai hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              goswamianiket2016@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
