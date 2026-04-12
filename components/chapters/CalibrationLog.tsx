"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";

const SHOTS = [
  {
    id: "SHOT_01",
    target: "Build a full e-commerce experience",
    attempt: "Next.js storefront with Stripe and custom cart logic",
    deviation: "Overengineered the state management early on",
    adjustment:
      'Learned to scope before building. "What\'s the simplest version that works?" comes first now.',
    tools: "Next.js · Stripe · Tailwind · Vercel",
  },
  {
    id: "SHOT_02",
    target: "Build a site that communicates a brand, not just displays it",
    attempt: "Corporate site with a custom CMS and design system",
    deviation: "The design was clean but the CMS was fragile under real content",
    adjustment:
      "Structure matters before aesthetics. Started studying content modeling seriously.",
    tools: "Next.js · Sanity · CSS Modules",
  },
  {
    id: "SHOT_03",
    target: "Automate a repetitive business workflow",
    attempt: "Booking and scheduling system with calendar integration",
    deviation: "The UX felt logical to me but confusing to the actual user",
    adjustment:
      'Informal user tests before anything is called "done."',
    tools: "React · Google Calendar API · Notion API",
  },
  {
    id: "SHOT_04",
    target: "Build something I didn't fully know how to build yet",
    attempt: "Custom web app tailored to specific business logic",
    deviation: "Took longer than planned. Hit walls I didn't anticipate.",
    adjustment:
      "Time-box unknowns. Research before estimating. Uncertainty is a planning variable.",
    tools: "React · Custom API · PostgreSQL",
  },
];

function ShotCard({
  shot,
  delay,
}: {
  shot: (typeof SHOTS)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const arcLength = useMotionValue(0);

  const handleHoverStart = () => {
    setHovered(true);
    animate(arcLength, 1, { duration: 0.5, ease: "easeOut" });
  };

  const handleHoverEnd = () => {
    setHovered(false);
    animate(arcLength, 0, { duration: 0.4, ease: "easeIn" });
  };

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative"
    >
      {/* Arc above card */}
      <svg
        className="absolute left-0 w-full pointer-events-none"
        style={{ top: "-28px", height: "28px" }}
        viewBox="0 0 100 28"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 0 28 Q 50 0 100 28"
          stroke="var(--color-accent)"
          strokeWidth="0.8"
          fill="none"
          style={{ pathLength: arcLength }}
        />
      </svg>

      {/* Card */}
      <div
        className="p-6 md:p-8"
        style={{
          border: `1px solid ${hovered ? "var(--color-accent)" : "var(--color-line)"}`,
          backgroundColor: "var(--color-surface)",
          transition: "border-color 0.3s ease",
        }}
      >
        {/* Shot ID */}
        <span
          className="font-mono text-xs tracking-widest block mb-5"
          style={{ color: "var(--color-accent)" }}
        >
          [{shot.id}]
        </span>

        <div className="flex flex-col gap-3">
          <CardRow label="TARGET" value={shot.target} />
          <CardRow label="ATTEMPT" value={shot.attempt} />
          <CardRow
            label="DEVIATION"
            value={shot.deviation}
            valueStyle={{ fontStyle: "italic", opacity: 0.8 }}
          />
          <CardRow label="ADJUSTMENT" value={shot.adjustment} />

          {/* Tools — hidden until hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex gap-4 items-baseline"
          >
            <span
              className="font-mono text-xs w-28 shrink-0 tracking-widest"
              style={{ color: "var(--color-muted)" }}
            >
              TOOLS
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: "var(--color-text)" }}
            >
              {shot.tools}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function CardRow({
  label,
  value,
  valueStyle,
}: {
  label: string;
  value: string;
  valueStyle?: React.CSSProperties;
}) {
  return (
    <div className="flex gap-4 items-baseline">
      <span
        className="font-mono text-xs w-28 shrink-0 tracking-widest"
        style={{ color: "var(--color-muted)" }}
      >
        {label}
      </span>
      <span
        className="font-sans text-sm leading-relaxed"
        style={{ color: "var(--color-text)", ...valueStyle }}
      >
        {value}
      </span>
    </div>
  );
}

export default function CalibrationLog() {
  return (
    <section
      id="calibration-log"
      data-snap="true"
      className="relative flex items-center justify-center px-6 md:px-16"
      style={{ minHeight: "100svh", backgroundColor: "var(--color-bg)" }}
    >
      <div className="w-full max-w-6xl py-24">
        {/* Section label */}
        <span
          className="font-mono text-xs tracking-widest block mb-2"
          style={{ color: "var(--color-muted)" }}
        >
          CALIBRATION LOG
        </span>
        <p
          className="font-serif text-sm mb-14"
          style={{ color: "var(--color-muted)" }}
        >
          Shots taken. Where they landed. What I adjusted.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {SHOTS.map((shot, i) => (
            <ShotCard key={shot.id} shot={shot} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
