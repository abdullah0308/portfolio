"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Archery() {
  const imgLeftRef = useRef<HTMLDivElement>(null);
  const imgRightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(imgLeftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(imgRightRef, { once: true, amount: 0.3 });

  return (
    <SectionWrapper id="archery" className="bg-charcoal-mid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-mono">
              The Archer
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl"
          >
            Beyond the screen. Discipline in motion.
          </motion.h2>
        </motion.div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-start">
          {/* Left image — clip-path reveal */}
          <div ref={imgLeftRef} className="lg:col-span-7">
            <motion.div
              className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] overflow-hidden group"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={leftInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/archery-full.jpeg"
                alt="Abdullah Mohamed — Full draw at night"
                fill
                quality={85}
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/50" />
            </motion.div>
          </div>

          {/* Right column */}
          <div ref={imgRightRef} className="lg:col-span-5 flex flex-col gap-6 lg:pl-8">
            {/* Top image — slides from right */}
            <motion.div
              className="relative aspect-square overflow-hidden group"
              initial={{ x: 40, opacity: 0 }}
              animate={rightInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <Image
                src="/images/archery-aim.jpeg"
                alt="Abdullah Mohamed — Aiming at targets"
                fill
                quality={85}
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-charcoal-deep/20" />
            </motion.div>

            {/* Quote — staggered lines */}
            <motion.div
              className="relative p-8 border border-white/5 bg-charcoal-deep/50"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            >
              <span className="font-display text-6xl text-gold/20 leading-none absolute -top-3 left-6">
                &ldquo;
              </span>
              <p className="font-display text-xl md:text-2xl text-white/80 leading-relaxed italic pt-4">
                Precision is not a destination. It&apos;s a practice.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-white/50 text-sm leading-relaxed">
                  You can repeat the same shot a thousand times and still find
                  room to improve it. Not because you&apos;re failing. Because
                  that&apos;s how mastery actually works. That&apos;s how I approach
                  building. Not to be done. To be better.
                </p>
              </div>
              <span className="font-display text-6xl text-gold/20 leading-none absolute -bottom-6 right-6">
                &rdquo;
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
