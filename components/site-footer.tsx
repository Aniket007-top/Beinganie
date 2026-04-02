import Link from "next/link";
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-[2rem] border border-border-subtle bg-surface-secondary px-6 py-12 text-sm text-text-secondary shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4 lg:gap-16">
        {/* Column 1: Logo and Tagline */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-google-blue via-google-red to-google-yellow text-sm font-bold text-white shadow-none">
              B
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
                Beinganie
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">(Knowledge is free for everyone)</p>
            </div>
          </Link>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 lg:col-span-1">
          <h3 className="font-display text-base font-semibold text-text-primary dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/#tracks" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">Learning Tracks</Link></li>
            <li><Link href="/ai" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">AI Curriculum</Link></li>
            <li><Link href="/iot" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">IoT Curriculum</Link></li>
            <li><Link href="/robotics" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">Robotics Curriculum</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="space-y-4 lg:col-span-1">
          <h3 className="font-display text-base font-semibold text-text-primary dark:text-white">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/#arcade-lab" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">Arcade Labs</Link></li>
            <li><Link href="/#resource-hub" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">Resource Hub</Link></li>
            <li><a href="https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk" target="_blank" rel="noreferrer" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">AI Notes</a></li>
            <li><a href="https://drive.google.com/file/d/1za0AEI5Vb89kaoIFBaT87QVxQ-nEM6dM/view?usp=drivesdk" target="_blank" rel="noreferrer" className="hover:text-google-blue dark:hover:text-google-blue/80 transition-colors">IoT Notes</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Copyright */}
        <div className="space-y-4 lg:col-span-1">
          <h3 className="font-display text-base font-semibold text-text-primary dark:text-white">Contact</h3>
          <div className="space-y-2">
            <p>
              Created by <span className="font-semibold text-text-primary dark:text-white">Aniket Kumar</span>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:goswamianiket2016@gmail.com"
                className="font-medium text-google-blue hover:text-google-blue/80 dark:hover:text-google-blue/80"
              >
                goswamianiket2016@gmail.com
              </a>
            </p>
          </div>
          <div className="pt-4 border-t border-border-subtle dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Copyright © {year} Beinganie. All rights reserved.
            </p>
            {/* Placeholder for Language Selector */}
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Language: <select className="bg-transparent border-none outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
