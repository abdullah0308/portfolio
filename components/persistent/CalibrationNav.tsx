"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHAPTERS = [
  { name: "The Range", id: "the-range" },
  { name: "The Archer", id: "the-archer" },
  { name: "How I Think", id: "how-i-think" },
  { name: "Log", id: "calibration-log" },
  { name: "Distance", id: "distance-traveled" },
  { name: "The Archer Beyond", id: "archer-beyond" },
  { name: "Contact", id: "contact" },
];

export default function CalibrationNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div
      className="fixed top-6 left-6 z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        className="font-mono text-sm tracking-widest select-none cursor-default"
        style={{ color: "var(--color-muted)" }}
      >
        AM
      </span>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-3 flex flex-col gap-2"
          >
            {CHAPTERS.map((ch) => (
              <ChapterLink
                key={ch.id}
                name={ch.name}
                onClick={() => scrollTo(ch.id)}
              />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChapterLink({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-left font-mono text-xs tracking-wide transition-colors duration-150"
      style={{ color: hovered ? "var(--color-text)" : "var(--color-muted)" }}
    >
      {name}
    </button>
  );
}
