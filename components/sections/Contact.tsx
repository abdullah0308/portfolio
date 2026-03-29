"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { arrowFlight, fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA text */}
          <motion.div variants={staggerContainer} className="flex flex-col justify-center">
            <motion.div variants={arrowFlight} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                Contact
              </span>
            </motion.div>

            <motion.h2
              variants={arrowFlight}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Let&apos;s build something{" "}
              <span className="text-gold-gradient">that performs.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed mb-10">
              Whether it&apos;s a website, a system, or a complete digital solution. I&apos;m
              ready to help you execute with precision.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm">Available for freelance & contract work</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm">Quick turnaround, precise execution</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm">Full-stack web & digital solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-3">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 text-base outline-none focus:border-gold transition-colors duration-200"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gold"
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left", width: "100%" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-3">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 text-base outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 text-base outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full py-4 bg-gold text-charcoal-deep font-display font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  Start a Project
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
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-gold text-5xl mb-6">✦</div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Message received.
                </h3>
                <p className="text-white/50">
                  I&apos;ll get back to you with precision. Shortly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/20 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Abdullah Mohamed. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <span>Built with precision.</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
