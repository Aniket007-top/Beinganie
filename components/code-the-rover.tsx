"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ChevronUp, Play, RotateCcw, Trophy } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const GRID_SIZE = 5;
const MAX_COMMANDS = 12;
const STORAGE_KEY = "beinganie-rover-progress";

type Command = "up" | "right" | "down";
type Position = { row: number; col: number };

const obstacles: Position[] = [
  { row: 1, col: 1 },
  { row: 1, col: 3 },
  { row: 2, col: 3 },
  { row: 3, col: 1 }
];

const start: Position = { row: 4, col: 0 };
const goal: Position = { row: 0, col: 4 };

export function CodeTheRover() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [rover, setRover] = useState<Position>(start);
  const [status, setStatus] = useState("Plan the route, then run your command list.");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "completed") {
      setCompleted(true);
      setStatus("Challenge already completed. Improve your route or replay it.");
    }
  }, []);

  const obstacleSet = useMemo(() => new Set(obstacles.map((cell) => `${cell.row}-${cell.col}`)), []);

  function addCommand(command: Command) {
    if (commands.length >= MAX_COMMANDS) {
      setStatus("Command buffer is full. Run or reset the rover.");
      return;
    }

    setCommands((current) => [...current, command]);
    setStatus("Command added. Keep building the route.");
  }

  function resetBoard() {
    setCommands([]);
    setRover(start);
    setCompleted(false);
    localStorage.removeItem(STORAGE_KEY);
    setStatus("Board reset. Create a new command sequence.");
  }

  function executeCommands() {
    let current = { ...start };

    for (const command of commands) {
      const next = { ...current };

      if (command === "up") next.row -= 1;
      if (command === "right") next.col += 1;
      if (command === "down") next.row += 1;

      const outOfBounds =
        next.row < 0 || next.row >= GRID_SIZE || next.col < 0 || next.col >= GRID_SIZE;

      if (outOfBounds) {
        setRover(current);
        setStatus("The rover tried to leave the grid. Adjust the logic path.");
        return;
      }

      if (obstacleSet.has(`${next.row}-${next.col}`)) {
        setRover(next);
        setStatus("The rover hit an obstacle. Reorder the commands and try again.");
        return;
      }

      current = next;
    }

    setRover(current);

    if (current.row === goal.row && current.col === goal.col) {
      setCompleted(true);
      localStorage.setItem(STORAGE_KEY, "completed");
      setStatus("Success. The rover reached the goal using your logic sequence.");
      return;
    }

    setStatus("Execution finished, but the rover did not reach the goal yet.");
  }

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-indigo-200/70 bg-white/75 p-6 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.15),transparent_30%)]" />
      <div className="relative grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-robotics/20 bg-white/80 px-4 py-2 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-robotics shadow-sm dark:bg-slate-950/70">
            <Trophy className="h-4 w-4" />
            Arcade Lab - Robotics
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Code the Rover
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Build a simple logic sequence to move the rover from start to goal without
              hitting obstacles. This lab turns algorithmic thinking into a visual robotics
              challenge.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Objective
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Route planning
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Use a sequence of commands to make the rover follow a safe path.
              </p>
            </div>
            <div className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Skill
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
                Logic before motion
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This mirrors how robotic systems convert instructions into actions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
            <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
              Mission rules
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>Use only `Up`, `Right`, and `Down` commands.</li>
              <li>Stay inside the 5x5 grid.</li>
              <li>Avoid blocked cells.</li>
              <li>Reach the goal in 12 commands or fewer.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-indigo-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                Command queue
              </p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {commands.length}/{MAX_COMMANDS} loaded
              </span>
            </div>
            <div className="mt-4 flex min-h-16 flex-wrap gap-2">
              {commands.length ? (
                commands.map((command, index) => (
                  <span
                    key={`${command}-${index}`}
                    className="inline-flex items-center rounded-full border border-robotics/20 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-robotics/30 dark:bg-slate-950/80 dark:text-slate-200"
                  >
                    {labelForCommand(command)}
                  </span>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No commands yet. Add a route below.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <CommandButton icon={ChevronUp} label="Up" onClick={() => addCommand("up")} />
            <CommandButton icon={ChevronRight} label="Right" onClick={() => addCommand("right")} />
            <CommandButton icon={ChevronDown} label="Down" onClick={() => addCommand("down")} />
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto_auto]">
            <button
              type="button"
              onClick={executeCommands}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-robotics to-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-neon transition hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-500"
            >
              <Play className="h-4 w-4" />
              Run Commands
            </button>
            <button
              type="button"
              onClick={() => {
                setCommands([]);
                setRover(start);
                setStatus("Command queue cleared. Build a new route.");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-robotics hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <RotateCcw className="h-4 w-4" />
              Clear Queue
            </button>
            <button
              type="button"
              onClick={resetBoard}
              className="inline-flex items-center justify-center rounded-full border border-indigo-200/70 bg-white/80 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-robotics hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-900/70 dark:text-slate-200"
            >
              Full Reset
            </button>
          </div>

          <div className="rounded-[1.75rem] border border-indigo-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,247,237,0.8))] p-5 shadow-neon backdrop-blur dark:border-indigo-500/20 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.72))]">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Rover grid
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Start at bottom-left and reach the top-right goal.
                </p>
              </div>
              {completed ? (
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  Completed
                </span>
              ) : null}
            </div>

            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const row = Math.floor(index / GRID_SIZE);
                const col = index % GRID_SIZE;
                const key = `${row}-${col}`;
                const isObstacle = obstacleSet.has(key);
                const isStart = row === start.row && col === start.col;
                const isGoal = row === goal.row && col === goal.col;
                const isRover = row === rover.row && col === rover.col;

                return (
                  <motion.div
                    layout
                    key={key}
                    className={[
                      "flex aspect-square items-center justify-center rounded-2xl border text-xs font-semibold sm:text-sm",
                      isObstacle
                        ? "border-slate-400 bg-[linear-gradient(180deg,#cbd5e1,#94a3b8)] text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
                        : isGoal
                          ? "border-emerald-200 bg-[linear-gradient(180deg,#dcfce7,#bbf7d0)] text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-300"
                          : isStart
                            ? "border-robotics/20 bg-amber-100 text-robotics dark:bg-amber-500/20"
                            : "border-indigo-200/70 bg-white/80 text-slate-500 dark:border-indigo-500/20 dark:bg-slate-950/80 dark:text-slate-300"
                    ].join(" ")}
                  >
                    {isRover ? "R" : isObstacle ? "X" : isGoal ? "Goal" : isStart ? "Start" : ""}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-200/70 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/70">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                Status
              </p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Rover telemetry
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

function CommandButton({
  icon: Icon,
  label,
  onClick
}: {
  icon: typeof ChevronRight;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-200/70 bg-white/80 px-4 py-4 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-robotics hover:bg-amber-50 hover:text-robotics hover:shadow-neon dark:border-indigo-500/20 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:bg-robotics/10"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function labelForCommand(command: Command) {
  if (command === "up") return "Up";
  if (command === "right") return "Right";
  return "Down";
}
