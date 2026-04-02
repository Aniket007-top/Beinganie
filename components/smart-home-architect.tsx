"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Home, RefreshCcw, Thermometer, Waves } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Room = "living" | "bedroom" | "garage";
type Sensor = "temp" | "motion";

const STORAGE_KEY = "beinganie-iot-lab";

const roomLabels: Record<Room, string> = {
  living: "Living Room",
  bedroom: "Bedroom",
  garage: "Garage"
};

export function SmartHomeArchitect() {
  const [placements, setPlacements] = useState<Record<Sensor, Room | null>>({
    temp: null,
    motion: null
  });
  const [status, setStatus] = useState(
    "Place sensors in rooms and watch the automation rules update."
  );
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Record<Sensor, Room | null>;
      setPlacements(parsed);
      const done = parsed.temp === "living" && parsed.motion === "garage";
      setCompleted(done);
      if (done) {
        setStatus("Smart home layout restored. The automation plan is valid.");
      }
    }
  }, []);

  const rules = useMemo(() => {
    const generated = [];

    if (placements.temp) {
      generated.push(`If temperature in ${roomLabels[placements.temp]} is high, turn on cooling.`);
    }

    if (placements.motion) {
      generated.push(
        `If motion is detected in ${roomLabels[placements.motion]}, turn on lights and send alert if after hours.`
      );
    }

    return generated;
  }, [placements]);

  function placeSensor(sensor: Sensor, room: Room) {
    const next = { ...placements, [sensor]: room };
    setPlacements(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

    const done = next.temp === "living" && next.motion === "garage";
    setCompleted(done);
    setStatus(
      done
        ? "Strong architecture. You placed environmental sensing in the living room and security sensing in the garage."
        : `Placed ${sensor === "temp" ? "temperature" : "motion"} sensor in ${roomLabels[room]}.`
    );
  }

  function reset() {
    const next = { temp: null, motion: null };
    setPlacements(next);
    setCompleted(false);
    setStatus("Layout reset. Start placing sensors again.");
    localStorage.removeItem(STORAGE_KEY);
  }

  const mappedPercent = Math.round((Object.values(placements).filter(Boolean).length / 2) * 100);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-background-primary p-6 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,168,83,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(52,168,83,0.1),transparent_28%)]" />
      <div className="relative grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-google-green/20 bg-background-primary/80 px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-google-green shadow-none dark:bg-slate-950/70">
            <Home className="h-4 w-4" />
            Arcade Lab - IoT
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary dark:text-white sm:text-4xl">
              Smart Home Architect
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Place sensors into rooms and see how simple if-then automation rules form.
              This shows the basic thinking behind IoT systems: sensing, context, and
              action.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                System input
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Sensors capture events
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Each placement changes what the building can observe in real time.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                System output
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Rules trigger actions
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Good architecture links the right device to the right environment.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Layout progress
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {Object.values(placements).filter(Boolean).length} / 2 sensors placed
                </p>
              </div>
              {completed ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Complete
                </span>
              ) : null}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <span>Connected rooms</span>
              <span>{mappedPercent}% mapped</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-3">
            {(Object.keys(roomLabels) as Room[]).map((room) => (
              <motion.div
                key={room}
                layout
                className="rounded-[1.75rem] border border-border-subtle bg-background-primary/80 p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-iot">
                  Zone
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-text-primary dark:text-white">
                  {roomLabels[room]}
                </h3>
                <div className="mt-4 space-y-3">
                  <button
                    type="button"
                    onClick={() => placeSensor("temp", room)}
                    className={`flex w-full items-center gap-3 rounded-[1.25rem] border px-4 py-3 text-left transition hover:scale-[1.01] ${
                      placements.temp === room
                        ? "border-google-green bg-google-green/10 text-google-green shadow-none"
                        : "border-border-subtle bg-background-primary/80 text-text-secondary dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                    }`}
                  >
                    <Thermometer className="h-4 w-4" />
                    <span>
                      <span className="block text-sm font-semibold">Temperature Sensor</span>
                      <span className="block text-xs opacity-75">Climate automation</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => placeSensor("motion", room)}
                    className={`flex w-full items-center gap-3 rounded-[1.25rem] border px-4 py-3 text-left transition hover:scale-[1.01] ${
                      placements.motion === room
                        ? "border-google-green bg-google-green/10 text-google-green shadow-none"
                        : "border-border-subtle bg-background-primary/80 text-text-secondary dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                    }`}
                  >
                    <Waves className="h-4 w-4" />
                    <span>
                      <span className="block text-sm font-semibold">Motion Sensor</span>
                      <span className="block text-xs opacity-75">Security and lighting</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                Generated if-then rules
              </p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Automation engine
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {rules.length ? (
                rules.map((rule) => (
                  <div
                    key={rule}
                    className="rounded-[1.25rem] border border-border-subtle bg-background-primary/80 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
                  >
                    {rule}
                  </div>
                ))
              ) : (
                <p>No rules yet. Place sensors into rooms to create automation logic.</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-primary/80 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-text-secondary shadow-none backdrop-blur transition hover:scale-[1.02] hover:border-google-green dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <RefreshCcw className="h-4 w-4" />
              Reset IoT Lab
            </button>
          </div>

          <div className="rounded-[1.75rem] border border-border-subtle bg-surface-secondary p-5 shadow-none backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                Lab feedback
              </p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                System monitor
              </span>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
