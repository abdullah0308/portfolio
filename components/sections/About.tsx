"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { arrowFlight, fadeUp, staggerContainer } from "@/lib/animations";

const values = ["Iterate", "Adjust", "Repeat"];

export default function About() {
  const numRef = useRef<HTMLSpanElement>(null);
  const numInView = useInView(numRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about" className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — large decorative number */}
          <motion.div
            variants={arrowFlight}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <motion.span
              ref={numRef}
              className="font-display text-[8rem] md:text-[10rem] leading-none font-bold text-gold/10 select-none"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={numInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              01
            </motion.span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-mono">
                The Archer
              </span>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={staggerContainer}
            className="lg:col-span-9 space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
            >
              I know what I don&apos;t know.{" "}
              <span className="text-gold-gradient">
                I&apos;m methodical about closing that gap.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              I started building things because I wanted to understand how they
              worked. Not just use them. That impulse is still what drives me.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              I approach problems the way I approach archery: understand the
              variables, control what you can, release with intention, and adjust
              based on where it lands. I&apos;m not looking for a stage. I&apos;m
              looking for a room where good thinking is valued.
            </motion.p>

            {/* Values */}
            <motion.div variants={fadeUp} className="pt-4 flex flex-wrap gap-6">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-white/70 text-sm tracking-wide font-mono">
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
