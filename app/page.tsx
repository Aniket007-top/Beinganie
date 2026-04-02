import { BrainCircuit, Cpu, Radar, ChevronRight, Zap } from "lucide-react";
import Image from "next/image"; // Import Image component
import { ReactNode } from "react";

import { CategoryCard } from "@/components/category-card";
import { CodeTheRover } from "@/components/code-the-rover";
import { HeroSection } from "@/components/hero-section";
import { LearningModule } from "@/components/learning-module";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartHomeArchitect } from "@/components/smart-home-architect";
import { TrainTheModel } from "@/components/train-the-model";
import { ValueCard } from "@/components/value-card";
import { ResourceItem } from "@/components/resource-item";
import { FigureCard } from "@/components/figure-card"; // Added import
import { MetricBadge } from "@/components/metric-badge"; // Added import
import { JourneyStep } from "@/components/journey-step"; // Added import
import { AiBars, IotFlow, RoboticsLoop } from "@/components/visual-aids"; // Added import
import { learningPaths, getLearningPath } from "@/lib/learning-paths";

const categories = [
  {
    title: "Artificial Intelligence",
    description:
      "Start with real-world AI ideas and grow into machine learning, deep learning, LLM pipelines, MLOps, and ethical deployment.",
    href: "/ai",
    icon: BrainCircuit,
    accent: "ai" as const,
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial%20neural%20network.svg",
    imageAlt: "Artificial neural network diagram from Wikimedia Commons",
    imageCreditHref:
      "https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg"
  },
  {
    title: "Internet of Things",
    description:
      "Learn sensors, microcontrollers, connectivity, cloud dashboards, automation logic, and edge computing using free tools.",
    href: "/iot",
    icon: Cpu,
    accent: "iot" as const,
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet%20of%20Things.svg",
    imageAlt: "Internet of Things concept illustration from Wikimedia Commons",
    imageCreditHref:
      "https://commons.wikimedia.org/wiki/File:Internet_of_Things.svg"
  },
  {
    title: "Robotics",
    description:
      "Study actuators, control systems, mechatronics, autonomy, and hands-on robot logic through interactive labs.",
    href: "/robotics",
    icon: Radar,
    accent: "robotics" as const,
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Controlling%20robotic%20arm%20ESA15746126.jpeg",
    imageAlt: "Robotic arm image from Wikimedia Commons",
    imageCreditHref:
      "https://commons.wikimedia.org/wiki/File:Controlling_robotic_arm_ESA15746126.jpeg"
  }
];

const shortcuts = [
  { name: "AI", href: "#ai-curriculum" },
  { name: "IoT", href: "#iot-curriculum" },
  { name: "Robotics", href: "#robotics-curriculum" },
  { name: "Labs", href: "#arcade-lab" },
];

export default function HomePage() {
  // Fetch learning path data for each module
  const aiLearningPath = getLearningPath("ai");
  const iotLearningPath = getLearningPath("iot");
  const roboticsLearningPath = getLearningPath("robotics");
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <SiteHeader /> {/* Sticky Nav */}

      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-4 py-16 sm:px-6 lg:gap-40">
        {/* Hero Section - Centered and Clean */}
        <section className="flex flex-col items-center text-center py-16">
          <HeroSection />
        </section>

        {/* Tracks Section - Bento Grid Style */}
        <section
          id="tracks"
          className="space-y-10"
        > {/* Bento Grid */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-google-blue dark:text-google-blue/80">
              Learning Paths
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Explore structured pathways
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Move from beginner concepts to engineer-grade systems thinking with our curated modules.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <MetricBadge label="Tracks" value="3" />
            <MetricBadge label="Level Routes" value="9" />
            <MetricBadge label="Arcade Labs" value="3" />
          </div>
        </section>

        {/* Visual Classroom - Wide Layout */}
        <section className="space-y-12 rounded-[3rem] bg-slate-50 py-16 dark:bg-slate-900/50">
          <div className="px-8 text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-google-green dark:text-google-green/80">
              Visual Classroom
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-slate-950 dark:text-white">
              System-level visualization
            </h2>
          </div>

          <div className="grid gap-8 px-8 lg:grid-cols-3">
            <FigureCard title="AI learning pipeline" description="Data quality to deployment." accent="ai" image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial%20neural%20network.svg" imageAlt="Artificial neural network diagram" imageSource="https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg">
              <AiBars />
            </FigureCard>
            <FigureCard title="IoT architecture flow" description="Sensing to cloud action." accent="iot" image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet%20of%20Things.svg" imageAlt="Internet of Things architecture illustration" imageSource="https://commons.wikimedia.org/wiki/File:Internet_of_Things.svg">
              <IotFlow />
            </FigureCard>
            <FigureCard title="Robotics control loop" description="Perception and movement." accent="robotics" image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Controlling%20robotic%20arm%20ESA15746126.jpeg" imageAlt="Robotic arm photograph" imageSource="https://commons.wikimedia.org/wiki/File:Controlling_robotic_arm_ESA15746126.jpeg">
              <RoboticsLoop />
            </FigureCard>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] py-16">
          <div className="rounded-[2rem] border border-border-subtle bg-background-primary p-8 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400">
              Product Highlights
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white">
              Built like a learning product
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Each domain is designed as a three-level curriculum, from
              school-friendly explanation to engineer-grade systems thinking.
              The platform combines subject discovery, level-based reading,
              practical labs, and downloadable references in one cohesive flow.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ValueCard
                title="Guided Progression"
                description="Every topic is broken into beginner, intermediate, and advanced depth so learners know where to start and what comes next."
              />
              <ValueCard
                title="Read + Practice"
                description="The experience combines structured reading with hands-on labs, so theory and experimentation reinforce each other."
              />
              <ValueCard
                title="Focused Level Pages"
                description="Dedicated route pages reduce overwhelm and make deep reading easier than a single long scrolling page."
              />
              <ValueCard
                title="Free-First Stack"
                description="The platform is designed around free tools, open ecosystems, and deployable frontend architecture."
              />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border-subtle bg-background-primary p-8 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400">
              Learning Flow
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary dark:text-white">
              How a learner moves through Beinganie
            </h2>
            <div className="mt-6 space-y-4">
              <JourneyStep index="01" title="Pick a Track" description="Choose AI, IoT, or Robotics based on your current interest or goal." />
              <JourneyStep index="02" title="Choose a Level" description="Open beginner, intermediate, or advanced chapters based on your current ability." />
              <JourneyStep index="03" title="Practice in Labs" description="Apply concepts in the AI, IoT, and Robotics Arcade Lab experiences." />
              <JourneyStep index="04" title="Deepen with Resources" description="Use notes, tools, and subject pages to move from exploration to project building." />
            </div>
          </aside>
        </section>

        <div id="ai-curriculum" className="scroll-mt-20">
          {aiLearningPath && (
            <LearningModule
              eyebrow={aiLearningPath.shortTitle + " Curriculum"}
              title={aiLearningPath.heroTitle}
              description={aiLearningPath.heroDescription}
              accent={aiLearningPath.accent}
              levels={aiLearningPath.levels.map((l) => ({
                id: l.id,
                label: l.level,
                audience: l.style,
                summary: l.summary,
                highlights: l.sections.flatMap((s) => s.bullets),
                project: l.project,
              }))}
            />
          )}
        </div>

        <div id="iot-curriculum" className="scroll-mt-20">
          {iotLearningPath && (
            <LearningModule
              eyebrow={iotLearningPath.shortTitle + " Curriculum"}
              title={iotLearningPath.heroTitle}
              description={iotLearningPath.heroDescription}
              accent={iotLearningPath.accent}
              levels={iotLearningPath.levels.map((l) => ({
                id: l.id,
                label: l.level,
                audience: l.style,
                summary: l.summary,
                highlights: l.sections.flatMap((s) => s.bullets),
                project: l.project,
              }))}
            />
          )}
        </div>

        <div id="robotics-curriculum" className="scroll-mt-20">
          {roboticsLearningPath && (
            <LearningModule
              eyebrow={roboticsLearningPath.shortTitle + " Curriculum"}
              title={roboticsLearningPath.heroTitle}
              description={roboticsLearningPath.heroDescription}
              accent={roboticsLearningPath.accent}
              levels={roboticsLearningPath.levels.map((l) => ({
                id: l.id,
                label: l.level,
                audience: l.style,
                summary: l.summary,
                highlights: l.sections.flatMap((s) => s.bullets),
                project: l.project,
              }))}
            />
          )}
        </div>

        <section id="dashboard" className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-border-subtle bg-background-primary p-8 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400">
              Platform Direction
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white">
              Built for free learning, tooling, and hosting
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ValueCard
                title="Free Knowledge"
                description="Open-source workflows, practical roadmaps, and project-based explanations."
              />
              <ValueCard
                title="Professional UI"
                description="Tailwind-powered, minimal, responsive, and ready for Vercel or GitHub hosting."
              />
              <ValueCard
                title="Arcade Lab Ready"
                description="AI, IoT, and Robotics labs now teach data labeling, smart automation, and robot path logic."
              />
              <ValueCard
                title="Curriculum Depth"
                description="Designed to support beginner, intermediate, and advanced modules for each domain."
              />
            </div>
          </div>

          <aside
            id="resource-hub" // This ID is used in SiteHeader navItems
            className="rounded-[2rem] border border-border-subtle bg-surface-secondary p-8 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
          >
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400">
              Resource Hub
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary dark:text-white">
              Starter resources for the next build phases
            </h2>
            <div className="mt-6 space-y-4">
              <ResourceItem
                title="AI Notes"
                description="Professional notes archive linked for direct learner access."
                href="https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk"
                {...({ className: "notes-btn", "data-download": "ai" } as any)}
              />
              <ResourceItem
                title="Curriculum Components"
                description="Reusable modules now organize the three-level curriculum across all core tracks."
                href="#tracks"
              />
              <ResourceItem
                title="Arcade Lab"
                description="Play the AI trainer, IoT architect, and Robotics rover challenge."
                href="#arcade-lab"
              />
              {/* Add IoT Notes and Robotics Notes */}
              <ResourceItem
                title="IoT Notes"
                description="Professional notes archive linked for direct learner access."
                href="https://drive.google.com/file/d/1za0AEI5Vb89kaoIFBaT87QVxQ-nEM6dM/view?usp=drivesdk"
                {...({ className: "notes-btn", "data-download": "iot" } as any)}
              />
              <ResourceItem
                title="Robotics Notes"
                description="Generated notes based on curriculum content."
                href="#" // No direct download link, will generate text file
                {...({ className: "notes-btn", "data-download": "robotics" } as any)}
              />
              <ResourceItem
                title="Free Hosting"
                description="The app is structured for Next.js deployment on Vercel and can be adapted for static-friendly hosting."
                href="#dashboard"
              />
              <ResourceItem
                title="Open Learning Mission"
                description="Beinganie is designed around open knowledge, reusable components, and interactive practice."
                href="#resource-hub"
              />
            </div>
          </aside>
        </section>

        <section
          id="arcade-lab"
          className="space-y-5"
        >
          <div className="rounded-[2rem] border border-border-subtle bg-background-primary p-8 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-google-yellow dark:text-google-yellow/80">
              Arcade Lab
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white">
              Learn by doing through interactive mini systems
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              The labs are designed to make abstract concepts tactile. Instead of
              only reading about models, sensors, or robotic logic, learners can
              simulate labeling, automation, and navigation directly.
            </p>
          </div>
          <TrainTheModel />
          <SmartHomeArchitect />
          <CodeTheRover />
        </section>

        <SiteFooter />
      </div>

      {/* Google-style Shortcut Navigation Floating Bar */}
      <nav className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border-subtle bg-background-primary/80 p-2 shadow-soft-elevation backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80">
        <div className="flex items-center px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-google-blue dark:text-google-blue/80"> {/* M3 Blue */}
          <Zap className="mr-2 h-3 w-3 fill-current text-google-blue" /> {/* M3 Blue */}
          Shortcuts
        </div>
        <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
        {shortcuts.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="rounded-full px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </main>
  );
}
