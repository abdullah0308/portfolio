"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer, cardReveal } from "@/lib/animations";

const metrics = [
  {
    value: 98,
    suffix: "",
    unit: "Score",
    label: "Performance",
    sublabel: "Lighthouse",
    barPercent: 98,
    description: "Fast and responsive experiences",
  },
  {
    value: 100,
    suffix: "%",
    unit: "On-Time",
    label: "Precision",
    sublabel: "Delivery Rate",
    barPercent: 100,
    description: "Structured and scalable systems",
  },
  {
    value: 10,
    suffix: "x",
    unit: "Faster",
    label: "Speed",
    sublabel: "Than Average",
    barPercent: 80,
    description: "Clean, maintainable architecture",
  },
  {
    value: 3,
    suffix: "x",
    unit: "Growth",
    label: "Efficiency",
    sublabel: "Revenue Impact",
    barPercent: 60,
    description: "Designed for real-world usability",
  },
];

export default function Performance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="performance" className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Performance
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-xl"
          >
            Built with performance at the core
          </motion.h2>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={cardReveal}
              className="bg-charcoal-deep p-8 flex flex-col gap-6 group hover:bg-surface transition-colors duration-300"
            >
              {/* Label */}
              <div>
                <span className="text-white/30 text-xs tracking-widest uppercase">
                  {metric.sublabel}
                </span>
              </div>

              {/* Big number */}
              <div className="flex items-end gap-1">
                <span className="font-display font-bold text-5xl md:text-6xl text-gold leading-none">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    duration={1200}
                  />
                </span>
                <span className="text-white/40 text-sm mb-2 leading-none">{metric.unit}</span>
              </div>

              {/* Bar gauge */}
              <div className="w-full h-px bg-white/10 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${metric.barPercent}%` } : { width: "0%" }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.15,
                  }}
                />
              </div>

              {/* Label and description */}
              <div>
                <h3 className="font-display font-semibold text-white text-lg mb-1">
                  {metric.label}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          variants={fadeUp}
          className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            "Fast and responsive experiences",
            "Structured and scalable systems",
            "Designed for real-world usability",
          ].map((statement) => (
            <div key={statement} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="text-white/50 text-sm">{statement}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
