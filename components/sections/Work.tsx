"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, cardReveal, staggerContainer } from "@/lib/animations";

const shots = [
  {
    number: "01",
    name: "E-Commerce Platform",
    type: "WordPress · WooCommerce",
    description:
      "Built a WooCommerce store from scratch. Product pages, cart, checkout, payment. The plugin handles a lot but you still have to know what you're doing.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    accent: "from-[#0C6170]/20 via-[#0C6170]/10 to-charcoal-deep",
    adjustment: "Performance on WooCommerce takes real work. Test with real data early, not at the end.",
  },
  {
    number: "02",
    name: "Corporate Website",
    type: "Next.js · Payload CMS",
    description:
      "Built in Next.js with Payload as the CMS. Developers can actually work with Payload without things falling apart. Good fit for structured content.",
    tags: ["Next.js", "Payload CMS", "TypeScript"],
    accent: "from-zinc-700/20 via-slate-800/30 to-charcoal-deep",
    adjustment: "Content modeling matters more than the design does. You find that out after the first content migration.",
  },
  {
    number: "03",
    name: "Archery Training App",
    type: "Next.js",
    description:
      "Built a web app to track training sessions, log arrow groupings, and spot patterns over time. Scratched my own itch. Turned out harder than expected to design for a sport you're also practicing.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    accent: "from-[#0C6170]/15 via-[#0C6170]/8 to-charcoal-deep",
    adjustment: "Being the user and the developer at the same time is useful. You can't lie to yourself about what's confusing.",
  },
  {
    number: "04",
    name: "Multilingual Websites",
    type: "WordPress · WPML",
    description:
      "Sites in multiple languages for clients operating across different markets. More decisions at the content and structure level than I expected going in.",
    tags: ["WordPress", "WPML", "PHP"],
    accent: "from-[#0C6170]/20 via-[#0C6170]/10 to-charcoal-deep",
    adjustment: "Translation is not just text. Structure, navigation, and content relationships all have to work in every language.",
  },
];

function ShotCard({ shot }: { shot: typeof shots[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative bg-gradient-to-br ${shot.accent} flex flex-col gap-6 min-h-[300px] overflow-hidden`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-charcoal-deep opacity-60" />

      <div className="relative z-10 flex flex-col gap-5 h-full p-8 md:p-10">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="text-white/20 text-xs tracking-widest font-mono">{shot.number}</span>
          <span className="text-xs text-white/40 tracking-wider border border-white/10 px-2 py-1 font-mono">
            {shot.type}
          </span>
        </div>

        {/* Name */}
        <div className="flex-1">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
            {shot.name}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">{shot.description}</p>

          {/* Adjustment — revealed on hover */}
          <motion.div
            className="overflow-hidden"
            animate={hovered ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-2 pt-1">
              <span className="text-gold/60 text-xs font-mono mt-0.5 shrink-0">→</span>
              <p className="text-gold/70 text-xs leading-relaxed italic">{shot.adjustment}</p>
            </div>
          </motion.div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {shot.tags.map((tag) => (
            <span key={tag} className="text-xs text-white/30 tracking-wide font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gold accent line — animates on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gold origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ width: "100%" }}
      />
    </motion.div>
  );
}

export default function Work() {
  return (
    <SectionWrapper id="work" className="bg-charcoal-mid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-mono">
              Calibration Log
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white"
            >
              Shots taken.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/40 text-sm hidden md:block"
            >
              Hover each card to see what was adjusted.
            </motion.p>
          </div>
        </motion.div>

        {/* Shots grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
        >
          {shots.map((shot) => (
            <ShotCard key={shot.name} shot={shot} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
