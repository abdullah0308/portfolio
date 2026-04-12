"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const STATUS = ["initializing...", "calibrating...", "ready."] as const;

export default function TheRange() {
  const prefersReduced = useReducedMotion();
  const [statusIdx, setStatusIdx] = useState(0);
  const [showStatus, setShowStatus] = useState(true);
  const [showHorizon, setShowHorizon] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowHorizon(true), 1000),
      setTimeout(() => setStatusIdx(1), 1200),
      setTimeout(() => setStatusIdx(2), 2400),
      setTimeout(() => setShowStatus(false), 3000),
      setTimeout(() => setShowContent(true), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fade = { opacity: { duration: 0.5 } };

  return (
    <section
      id="the-range"
      data-snap="true"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--color-bg)",
      }}
    >
      {/* Horizon line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showHorizon ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-0 h-px pointer-events-none"
        style={{ top: "50%", backgroundColor: "var(--color-line)" }}
        aria-hidden="true"
      />

      {/* Status text */}
      <AnimatePresence mode="wait">
        {showStatus && (
          <motion.span
            key={statusIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute font-mono text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            {STATUS[statusIdx]}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Main content */}
      {showContent && (
        <div className="relative z-10 text-center px-6">
          {/* Name */}
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={prefersReduced ? fade : { duration: 0.6 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              Abdullah
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                prefersReduced ? fade : { duration: 0.6, delay: 0.4 }
              }
              className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              Mohamed
            </motion.h1>
          </div>

          {/* Slash + role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReduced ? fade : { duration: 0.4, delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-5"
          >
            <span
              className="font-mono text-xl"
              style={{ color: "var(--color-accent)" }}
            >
              /
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--color-muted)" }}
            >
              developer in training
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReduced ? fade : { duration: 0.6, delay: 1.8 }}
            className="mt-10"
          >
            <p
              className="font-serif text-xl md:text-2xl"
              style={{ color: "var(--color-text)" }}
            >
              I don&apos;t aim for perfect.
            </p>
            <p
              className="font-serif text-xl md:text-2xl"
              style={{ color: "var(--color-text)" }}
            >
              I aim for better.
            </p>
          </motion.div>
        </div>
      )}

      {/* ↓ begin */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="absolute bottom-8 right-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="font-mono text-xs"
            style={{ color: "var(--color-muted)" }}
          >
            ↓ begin
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
