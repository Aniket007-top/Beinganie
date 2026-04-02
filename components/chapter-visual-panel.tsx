"use client";

import Image from "next/image";

import type { Accent } from "@/lib/learning-paths";

type VisualAsset = {
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  source: string;
};

const visualAssets: Record<Accent, VisualAsset[]> = {
  ai: [
    {
      title: "Neural network view",
      caption: "A useful way to explain how layers transform inputs into predictions.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial%20neural%20network.svg",
      imageAlt: "Artificial neural network diagram",
      source: "https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg"
    },
    {
      title: "Machine learning workflow",
      caption: "Students can see that model quality depends on data, training, and evaluation together.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/ML_process_diagram.svg",
      imageAlt: "Machine learning process diagram",
      source: "https://commons.wikimedia.org/wiki/File:ML_process_diagram.svg"
    },
    {
      title: "AI system framing",
      caption: "This helps connect inputs, hidden processing, and final prediction behavior.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial_intelligence.svg",
      imageAlt: "Artificial intelligence concept diagram",
      source: "https://commons.wikimedia.org/wiki/File:Artificial_intelligence.svg"
    }
  ],
  iot: [
    {
      title: "IoT ecosystem map",
      caption: "Shows how devices, networks, cloud services, and users form one full system.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet%20of%20Things.svg",
      imageAlt: "Internet of Things ecosystem diagram",
      source: "https://commons.wikimedia.org/wiki/File:Internet_of_Things.svg"
    },
    {
      title: "Connected device structure",
      caption: "A clear visual for explaining sensors, data flow, and networked control.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet_of_Things_Illustration.svg",
      imageAlt: "Connected device illustration",
      source: "https://commons.wikimedia.org/wiki/File:Internet_of_Things_Illustration.svg"
    },
    {
      title: "Smart systems overview",
      caption: "Useful when teaching how sensing becomes automation and dashboards become decisions.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Internet_of_Things_%E2%80%94_Smart_Connected_World.svg",
      imageAlt: "Smart connected world IoT diagram",
      source:
        "https://commons.wikimedia.org/wiki/File:Internet_of_Things_%E2%80%94_Smart_Connected_World.svg"
    }
  ],
  robotics: [
    {
      title: "Robotic arm in action",
      caption: "A good image for discussing precision, control, and industrial task design.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Controlling%20robotic%20arm%20ESA15746126.jpeg",
      imageAlt: "Robotic arm photograph",
      source:
        "https://commons.wikimedia.org/wiki/File:Controlling_robotic_arm_ESA15746126.jpeg"
    },
    {
      title: "Mobile robotics example",
      caption: "Helpful for teaching navigation, localization, and real-world autonomy.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Autonomous_mobile_robot.jpg",
      imageAlt: "Autonomous mobile robot",
      source: "https://commons.wikimedia.org/wiki/File:Autonomous_mobile_robot.jpg"
    },
    {
      title: "Robot system perspective",
      caption: "Lets students connect perception, planning, and actuation to physical results.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Industrial_robot_6_axis.jpg",
      imageAlt: "Industrial robot system image",
      source: "https://commons.wikimedia.org/wiki/File:Industrial_robot_6_axis.jpg"
    }
  ]
};

export function ChapterVisualPanel({
  accent,
  sectionTitle,
  index
}: {
  accent: Accent;
  sectionTitle: string;
  index: number;
}) {
  const asset = visualAssets[accent][index % visualAssets[accent].length];

  return (
    <div className="mt-5 rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-4 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="overflow-hidden rounded-[1.25rem] border border-border-subtle dark:border-slate-800">
        <Image
          src={asset.image}
          alt={asset.imageAlt}
          width={1200}
          height={720}
          className="h-48 w-full object-cover"
          unoptimized
        />
      </div>

      <div className="mt-4">
        <p className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${accentTextMap[accent]}`}>
          Chapter visual
        </p>
        <h4 className="mt-2 font-display text-xl font-semibold tracking-tight text-text-primary dark:text-white">
          {asset.title}
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {sectionTitle}: {asset.caption}
        </p>
      </div>

      <div className="mt-4">
        {accent === "ai" ? <AiVisualGraph index={index} /> : null}
        {accent === "iot" ? <IotVisualGraph index={index} /> : null}
        {accent === "robotics" ? <RoboticsVisualGraph index={index} /> : null}
      </div>

      <a
        href={asset.source}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.15em] text-slate-500 hover:text-google-blue dark:text-slate-400 dark:hover:text-google-blue/80"
      >
        Source: Wikimedia Commons
      </a>
    </div>
  );
}

const accentTextMap: Record<Accent, string> = {
  ai: "text-google-blue",
  iot: "text-google-green",
  robotics: "text-google-yellow"
};

function AiVisualGraph({ index }: { index: number }) {
  const sets = [
    [
      { label: "Data", width: "w-[92%]" },
      { label: "Features", width: "w-[74%]" },
      { label: "Model", width: "w-[66%]" }
    ],
    [
      { label: "Train", width: "w-[84%]" },
      { label: "Validate", width: "w-[62%]" },
      { label: "Test", width: "w-[56%]" }
    ],
    [
      { label: "Input", width: "w-[88%]" },
      { label: "Layers", width: "w-[70%]" },
      { label: "Output", width: "w-[60%]" }
    ]
  ][index % 3];

  return (
    <div className="rounded-[1.25rem] border border-border-subtle bg-surface-secondary p-4 dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-blue">
        AI graph
      </p>
      <div className="mt-4 space-y-3">
        {sets.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              <span>{item.label}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-200/80 dark:bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r from-google-blue to-cyan-400 ${item.width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IotVisualGraph({ index }: { index: number }) {
  const flows = [
    ["Sensor", "Edge", "Cloud", "Alert"],
    ["Device", "Gateway", "Broker", "Dashboard"],
    ["Input", "Rule", "Action", "Feedback"]
  ][index % 3];

  return (
    <div className="rounded-[1.25rem] border border-border-subtle bg-surface-secondary p-4 dark:border-slate-800 dark:bg-slate-900/70">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-google-green">
        IoT flow
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {flows.map((step, stepIndex) => (
          <div key={step} className="flex items-center gap-2">
            <div className="rounded-full border border-google-green/20 bg-google-green/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-google-green">
              {step}
            </div>
            {stepIndex < flows.length - 1 ? (
              <div className="h-px w-6 bg-gradient-to-r from-iot to-emerald-300" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoboticsVisualGraph({ index }: { index: number }) {
  const grids = [
    ["Sense", "Plan", "Move", "Correct"],
    ["Map", "Pose", "Path", "Drive"],
    ["Target", "Arm", "Grip", "Release"]
  ][index % 3];

  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-white/70 p-4 dark:border-indigo-500/20 dark:bg-slate-900/70">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-robotics">
        Robotics loop
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {grids.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-robotics/20 bg-robotics-soft px-4 py-4 text-center font-mono text-xs uppercase tracking-[0.16em] text-robotics"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
