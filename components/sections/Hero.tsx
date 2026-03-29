"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      {/* Right half — image */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left half solid dark */}
        <div className="w-full md:w-1/2 h-full bg-charcoal-deep flex-shrink-0" />
        {/* Right half — image with parallax */}
        <div className="hidden md:block relative flex-1 h-full overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: bgY }}>
            <Image
              src="/images/hero-bg.jpeg"
              alt="Abdullah Mohamed — Archer"
              fill
              priority
              quality={90}
              className="object-cover"
              style={{ objectPosition: "30% center" }}
            />
          </motion.div>
          {/* Fade left edge into the dark panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/40 to-transparent" />
          {/* Fade bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-transparent" />
        </div>
      </div>

      {/* Mobile: full bleed image with strong overlay */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Abdullah Mohamed — Archer"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: "30% center" }}
        />
        <div className="absolute inset-0 bg-charcoal-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Pre-label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Digital Craftsman
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-none mb-6"
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
              Abdullah
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-gold-gradient gold-glow-text">
              Mohamed
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 font-light tracking-wide mb-3"
          >
            Precision-driven digital experiences.
          </motion.p>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-white/40 max-w-md mb-10 leading-relaxed"
          >
            I build systems and experiences that are designed to perform,{" "}
            <span className="text-white/60">not just exist.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("work")}
              className="group flex items-center gap-3 px-7 py-3.5 bg-gold text-charcoal-deep font-display font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-200"
            >
              View Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="px-7 py-3.5 border border-white/20 text-white/80 font-display font-medium text-sm tracking-wide hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Start a Project
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-deep to-transparent z-20 pointer-events-none" />
    </section>
  );
}
