"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { arrowFlight, fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
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

            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/23059102080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors duration-200">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.863L0 24l6.303-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.857 9.857 0 01-5.032-1.38l-.361-.214-3.741.981.998-3.648-.235-.374A9.822 9.822 0 012.143 12C2.143 6.54 6.54 2.143 12 2.143S21.857 6.54 21.857 12 17.46 21.857 12 21.857z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-0.5">WhatsApp</p>
                  <p className="text-white/70 text-sm">+230 5910 2080</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdullah-mohamed-05426931a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors duration-200">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-0.5">LinkedIn</p>
                  <p className="text-white/70 text-sm">Abdullah Mohamed</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 text-base outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-3">
                    Email
                  </label>
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

                {/* Message */}
                <div>
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

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="group w-full py-4 bg-gold text-charcoal-deep font-display font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Start a Project"}
                  {!loading && (
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
                  )}
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
