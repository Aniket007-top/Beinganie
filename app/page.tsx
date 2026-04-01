import type { ReactNode } from "react";
import Image from "next/image";
import { BrainCircuit, Cpu, Radar } from "lucide-react";

import { CategoryCard } from "@/components/category-card";
import { CodeTheRover } from "@/components/code-the-rover";
import { HeroSection } from "@/components/hero-section";
import { LearningModule } from "@/components/learning-module";
import { SmartHomeArchitect } from "@/components/smart-home-architect";
import { SiteHeader } from "@/components/site-header";
import { TrainTheModel } from "@/components/train-the-model";
import { ValueCard } from "@/components/value-card";
import { ResourceItem } from "@/components/resource-item";

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-3 py-4 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-6">
      <SiteHeader />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 pb-14">
        <HeroSection />

        <section
          id="tracks"
          className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8"
        >
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-ai">
                Learning Tracks
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Explore structured pathways built for depth
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Each domain is designed as a three-level curriculum, from
                school-friendly explanation to engineer-grade systems thinking.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <MetricBadge label="Tracks" value="3" />
              <MetricBadge label="Level Routes" value="9" />
              <MetricBadge label="Arcade Labs" value="3" />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Product Highlights
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Built like a learning product, not just a landing page
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

          <aside className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Learning Flow
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
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

        <section className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-500">
                Visual Classroom
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-wide text-slate-950 dark:text-white">
                Learn with diagrams, process visuals, and system snapshots
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Strong teaching is easier when learners can see the system. These
                visual panels combine free web-hosted diagrams with simple graph-style
                summaries to show how AI pipelines, IoT architecture, and robotics
                control loops work.
              </p>
            </div>
          </div>

          <div className="figure-grid lg:grid-cols-3">
            <FigureCard
              title="AI learning pipeline"
              description="Students can see how data quality, model design, evaluation, and deployment all connect in one system."
              image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial%20neural%20network.svg"
              imageAlt="Artificial neural network diagram"
              imageSource="https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg"
              accent="ai"
            >
              <AiBars />
            </FigureCard>
            <FigureCard
              title="IoT architecture flow"
              description="This helps learners understand that IoT is not just a sensor, but a full chain from sensing to cloud insight and user action."
              image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet%20of%20Things.svg"
              imageAlt="Internet of Things architecture illustration"
              imageSource="https://commons.wikimedia.org/wiki/File:Internet_of_Things.svg"
              accent="iot"
            >
              <IotFlow />
            </FigureCard>
            <FigureCard
              title="Robotics control and motion"
              description="A robot becomes easier to understand when students can map perception, planning, control, and movement as one loop."
              image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Controlling%20robotic%20arm%20ESA15746126.jpeg"
              imageAlt="Robotic arm photograph"
              imageSource="https://commons.wikimedia.org/wiki/File:Controlling_robotic_arm_ESA15746126.jpeg"
              accent="robotics"
            >
              <RoboticsLoop />
            </FigureCard>
          </div>
        </section>

        <LearningModule
          eyebrow="AI Curriculum"
          title="Artificial Intelligence roadmap from basics to engineering systems"
          description="This reusable module structure organizes the Beinganie curriculum into layered learning experiences. The AI path starts with intuitive pattern recognition and grows toward deep learning, LLM internals, model pipelines, evaluation, and responsible deployment."
          accent="ai"
          levels={[
            {
              id: "ai-beginner",
              label: "Beginner Level",
              audience: "TGT Style",
              summary:
                "Use plain language, storytelling, and daily-life analogies to explain what AI is, how machines learn from examples, and where students already interact with AI today.",
              highlights: [
                "Difference between AI, ML, and Deep Learning",
                "Image recognition, voice assistants, recommendation systems",
                "Training data and prediction as a basic logic flow"
              ],
              project:
                "Create a simple classification activity using labeled examples like fruit images or handwritten digits."
            },
            {
              id: "ai-intermediate",
              label: "Intermediate Level",
              audience: "PGT Style",
              summary:
                "Introduce supervised and unsupervised learning, model evaluation, feature engineering, neural network intuition, and practical workflows for training and testing systems.",
              highlights: [
                "Data cleaning, train-validation-test split, model metrics",
                "Regression, classification, decision trees, CNN intuition",
                "Case studies in healthcare, agriculture, and education"
              ],
              project:
                "Build a small sentiment analysis or image classification prototype using free tools and open datasets."
            },
            {
              id: "ai-advanced",
              label: "Advanced Level",
              audience: "Engineer Style",
              summary:
                "Go deep into backpropagation, optimization, transformer architecture, LLM workflows, MLOps, model serving, observability, and industrial AI design patterns.",
              highlights: [
                "Neural network internals and transformer attention flow",
                "LLM pretraining, fine-tuning, retrieval, and inference",
                "Bias mitigation, deployment strategy, and production monitoring"
              ],
              project:
                "Design an end-to-end AI system architecture from dataset pipeline to serving and feedback monitoring."
            }
          ]}
        />

        <LearningModule
          eyebrow="IoT Curriculum"
          title="Internet of Things pathway for connected systems and edge intelligence"
          description="The same component supports IoT learning layers, moving from simple device logic toward sensor networks, message protocols, edge processing, and scalable architecture decisions."
          accent="iot"
          levels={[
            {
              id: "iot-beginner",
              label: "Beginner Level",
              audience: "TGT Style",
              summary:
                "Explain IoT as physical objects that can sense, communicate, and respond. Keep examples grounded in homes, farms, and schools.",
              highlights: [
                "What sensors, actuators, and microcontrollers do",
                "Smart bulb, smart irrigation, and weather station examples",
                "Simple if-then automation logic"
              ],
              project:
                "Map a smart classroom where sensors collect information and devices react to it."
            },
            {
              id: "iot-intermediate",
              label: "Intermediate Level",
              audience: "PGT Style",
              summary:
                "Cover controller logic, common protocols, dashboards, edge processing, and practical system flows using Arduino, ESP32, and cloud services.",
              highlights: [
                "WiFi, Bluetooth, MQTT, HTTP, and event-driven design",
                "Device to cloud data pipelines and telemetry dashboards",
                "Safety, authentication, and firmware update basics"
              ],
              project:
                "Design a motion alert or environmental monitoring system with a dashboard and alert rule."
            },
            {
              id: "iot-advanced",
              label: "Advanced Level",
              audience: "Engineer Style",
              summary:
                "Explore low-power architectures, edge AI, secure provisioning, fleet management, observability, digital twins, and industrial IoT use cases.",
              highlights: [
                "Embedded system constraints and protocol tradeoffs",
                "TinyML, edge inference, and industrial telemetry pipelines",
                "Secure boot, provisioning, and lifecycle management"
              ],
              project:
                "Architect a scalable IoT deployment for agriculture, manufacturing, or public infrastructure."
            }
          ]}
        />

        <LearningModule
          eyebrow="Robotics Curriculum"
          title="Robotics curriculum centered on movement, control, perception, and autonomy"
          description="Robotics at Beinganie combines hardware thinking with software logic. Learners progress from simple motion control to feedback systems, planning, ROS-style architectures, and real-world robot applications."
          accent="robotics"
          levels={[
            {
              id: "robotics-beginner",
              label: "Beginner Level",
              audience: "TGT Style",
              summary:
                "Teach robotics through relatable machines like vacuum bots, line followers, and delivery robots, focusing on how sensors, motors, and control units work together.",
              highlights: [
                "Robot body, sensors, motors, battery, and controller roles",
                "Difference between manual machines and autonomous robots",
                "Simple sense-think-act mental model"
              ],
              project:
                "Draw and explain a line-following robot with labeled parts and a basic control idea."
            },
            {
              id: "robotics-intermediate",
              label: "Intermediate Level",
              audience: "PGT Style",
              summary:
                "Introduce kinematics, sensor feedback, path planning, and PID-style correction while keeping the logic accessible through applied examples.",
              highlights: [
                "Motion planning, obstacle avoidance, and state feedback",
                "Localization, trajectory thinking, and task sequencing",
                "Small rover, arm, and maze-solving case studies"
              ],
              project:
                "Model a delivery rover workflow including sensing, route choice, and error correction."
            },
            {
              id: "robotics-advanced",
              label: "Advanced Level",
              audience: "Engineer Style",
              summary:
                "Move into autonomy stacks, ROS 2 concepts, SLAM, manipulation, control architecture, simulation, and human-robot interaction design.",
              highlights: [
                "Perception, localization, planning, and actuator coordination",
                "ROS nodes, messages, simulation, and systems integration",
                "Industrial robots, medical systems, logistics, and field robotics"
              ],
              project:
                "Design a modular robotics stack for an autonomous rover, warehouse robot, or inspection platform."
            }
          ]}
        />

        <section
          id="dashboard"
          className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Platform Direction
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Built for free learning, free tooling, and free hosting
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
            id="resource-hub"
            className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8"
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Resource Hub
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
              Starter resources for the next build phases
            </h2>
            <div className="mt-6 space-y-4">
              <ResourceItem
                title="AI Notes"
                description="Professional notes archive linked for direct learner access."
                href="https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk"
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
          <div className="rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-robotics">
              Arcade Lab
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
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

        <footer className="rounded-[2rem] border border-indigo-200/70 bg-white/75 px-6 py-8 text-sm text-slate-600 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 dark:text-slate-300 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display font-semibold text-slate-900 dark:text-white">
                Beinganie
              </p>
              <p className="mt-1">(Knowledge is free for everyone)</p>
            </div>
            <p>
              Resume complete: scaffold validated, reusable curriculum module
              added, and first Robotics Arcade Lab is playable.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function FigureCard({
  title,
  description,
  image,
  imageAlt,
  imageSource,
  accent,
  children
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSource: string;
  accent: "ai" | "iot" | "robotics";
  children: ReactNode;
}) {
  const accentLabel = {
    ai: "AI",
    iot: "IoT",
    robotics: "Robotics"
  }[accent];

  return (
    <article className="figure-card p-4 sm:p-5">
      <div className="overflow-hidden rounded-[1.2rem] border border-indigo-200/70 dark:border-indigo-500/20">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={720}
          className="h-52 w-full object-cover"
          unoptimized
        />
      </div>
      <div className="mt-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {accentLabel} visual
        </p>
        <h3 className="mt-2 font-display text-2xl font-normal tracking-wide text-slate-950 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <div className="mt-5">{children}</div>
      <a
        href={imageSource}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
      >
        Source: Wikimedia Commons
      </a>
    </article>
  );
}

function AiBars() {
  const items = [
    { label: "Data", value: "92%", width: "w-[92%]" },
    { label: "Model", value: "78%", width: "w-[78%]" },
    { label: "Eval", value: "64%", width: "w-[64%]" },
    { label: "Deploy", value: "52%", width: "w-[52%]" }
  ];

  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/70 p-4 dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ai">
        Pipeline graph
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-200/80 dark:bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r from-ai to-cyan-400 ${item.width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IotFlow() {
  const steps = ["Sensor", "Edge", "Gateway", "Cloud", "App"];

  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/70 p-4 dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-iot">
        System flow
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="rounded-full border border-iot/20 bg-iot-soft px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-iot">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <div className="h-px w-6 bg-gradient-to-r from-iot to-emerald-300" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoboticsLoop() {
  const loop = ["Sense", "Plan", "Control", "Move"];

  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/70 p-4 dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-robotics">
        Control loop
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {loop.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-robotics/20 bg-robotics-soft px-4 py-5 text-center font-mono text-xs uppercase tracking-[0.16em] text-robotics"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricBadge({
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

function JourneyStep({
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
