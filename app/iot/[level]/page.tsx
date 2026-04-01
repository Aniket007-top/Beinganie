import { notFound } from "next/navigation";

import { LevelPage } from "@/components/level-page";
import { SiteHeader } from "@/components/site-header";
import { getLearningPath, getLearningPathLevel } from "@/lib/learning-paths";

const levelParams = ["beginner", "intermediate", "advanced"] as const;

export function generateStaticParams() {
  return levelParams.map((level) => ({ level }));
}

export default async function IoTLevelPage({
  params
}: {
  params: Promise<{ level: "beginner" | "intermediate" | "advanced" }>;
}) {
  const { level } = await params;
  const path = getLearningPath("iot");
  const levelData = getLearningPathLevel("iot", level);

  if (!path || !levelData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-4 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-6">
      <SiteHeader />
      <LevelPage path={path} level={levelData} />
    </main>
  );
}
