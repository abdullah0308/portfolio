"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, cardReveal, staggerContainer } from "@/lib/animations";

const services = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Web Experiences",
    description:
      "Modern, responsive websites designed to communicate clearly and convert effectively. Built with performance and usability at the core.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Systems & Automation",
    description:
      "Smart digital systems that streamline operations, from CRM setups to ERP integrations and workflow automation.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Digital Branding",
    description:
      "Clean and consistent visual identities that translate across platforms, helping brands stand out with clarity.",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Media Production",
    description:
      "Photography and videography crafted to capture moments, tell stories, and elevate digital presence.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-charcoal-mid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Services
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-xl"
          >
            What I build for you
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardReveal}
              className="group relative bg-charcoal-deep p-8 flex flex-col gap-6 hover:bg-surface transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-display text-xs text-white/20 tracking-widest">
                {service.number}
              </span>

              {/* Icon */}
              <div className="text-gold/70 group-hover:text-gold transition-colors duration-200">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Gold bottom border on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
