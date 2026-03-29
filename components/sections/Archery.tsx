"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, arrowFlight, slideFromRight, staggerContainer } from "@/lib/animations";

export default function Archery() {
  return (
    <SectionWrapper id="archery" className="bg-charcoal-mid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
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
          {/* Left image — large */}
          <motion.div
            variants={arrowFlight}
            className="lg:col-span-7 relative aspect-[3/4] lg:aspect-auto lg:h-[600px] overflow-hidden group"
          >
            <Image
              src="/images/archery-full.jpeg"
              alt="Abdullah Mohamed — Full draw at night"
              fill
              quality={85}
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
            {/* Gold left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/50" />
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-8">
            {/* Top image */}
            <motion.div
              variants={slideFromRight}
              className="relative aspect-square overflow-hidden group"
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

            {/* Quote */}
            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-white/5 bg-charcoal-deep/50"
            >
              {/* Opening quote */}
              <span className="font-display text-6xl text-gold/20 leading-none absolute -top-3 left-6">
                &ldquo;
              </span>
              <p className="font-display text-xl md:text-2xl text-white/80 leading-relaxed italic pt-4">
                Archery is more than a sport. It&apos;s discipline, focus, and consistency.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-white/50 text-sm leading-relaxed">
                  It reflects how I approach my work: clear vision, controlled execution,
                  and continuous improvement. Every shot requires intention. Every project
                  deserves the same.
                </p>
              </div>
              {/* Closing quote */}
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
