"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { arrowFlight, fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.div variants={staggerContainer}>
            {/* Label */}
            <motion.div variants={arrowFlight} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-mono">
                Contact
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={arrowFlight}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-10"
            >
              The next{" "}
              <span className="text-gold-gradient">shot.</span>
            </motion.h2>

            {/* Body copy — written like a person, not a cover letter */}
            <motion.div variants={fadeUp} className="space-y-5 mb-12">
              <p className="text-white/60 text-lg leading-relaxed">
                I&apos;ve been building at{" "}
                <span className="text-white/90">MetaBox Technology</span>.
                Real work, real codebases, things that had to actually function.
                WordPress, PHP, Next.js. Not tutorials.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                I&apos;m looking for somewhere to keep going. A team that
                reads code before it ships and gives a damn about how things
                are put together. Junior title is fine. Learning on the job is
                the whole point.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                LinkedIn is the best place to reach me.
              </p>
            </motion.div>

            {/* LinkedIn — the one link */}
            <motion.div variants={fadeUp}>
              <a
                href="https://www.linkedin.com/in/abdullah-mohamed-05426931a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-200"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors duration-200">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-0.5 font-mono">
                    LinkedIn
                  </p>
                  <p className="text-white/70 text-sm">Abdullah Mohamed</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/20 text-xs tracking-wide font-mono">
            2026 Abdullah Mohamed - All Rights Reserved
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
