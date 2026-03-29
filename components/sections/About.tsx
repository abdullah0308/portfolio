"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { arrowFlight, fadeUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — section number and accent */}
          <motion.div
            variants={arrowFlight}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <span className="font-display text-[8rem] md:text-[10rem] leading-none font-bold text-gold/10 select-none">
              02
            </span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                About
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
              I approach every project with{" "}
              <span className="text-gold-gradient">precision</span> and intent.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              My work is not just about design or development. It&apos;s about
              building systems that function seamlessly, scale efficiently, and
              deliver real value.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              From websites to integrated digital solutions, I focus on clarity,
              performance, and purpose in every detail.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pt-4 flex flex-wrap gap-6"
            >
              {["Clarity", "Performance", "Purpose"].map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-white/70 text-sm tracking-wide">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
