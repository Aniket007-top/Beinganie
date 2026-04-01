import { SiteHeader } from "@/components/site-header";
import { SubjectPage } from "@/components/subject-page";
import { getLearningPath } from "@/lib/learning-paths";

export default function AIPage() {
  const path = getLearningPath("ai");

  if (!path) return null;

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-4 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-6">
      <SiteHeader />
      <SubjectPage path={path} />
    </main>
  );
}
