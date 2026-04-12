"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function DrawProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [atEnd, setAtEnd] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.97 && !atEnd) setAtEnd(true);
    else if (v < 0.95 && atEnd) setAtEnd(false);
  });

  return (
    <div
      className="hidden md:flex fixed right-4 items-center justify-center"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        height: "60vh",
        zIndex: 40,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div
        className="relative w-px h-full"
        style={{ backgroundColor: "var(--color-line)" }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            scaleY,
            transformOrigin: "bottom",
            backgroundColor: "var(--color-accent)",
          }}
          animate={atEnd ? { opacity: [0.8, 1, 0.6, 1] } : { opacity: 1 }}
          transition={
            atEnd ? { duration: 1.2, ease: "easeInOut" } : { duration: 0 }
          }
        />
      </div>
    </div>
  );
}
