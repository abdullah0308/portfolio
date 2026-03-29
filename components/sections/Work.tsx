"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, cardReveal, staggerContainer } from "@/lib/animations";

const projects = [
  {
    number: "01",
    name: "E-Commerce Platform",
    type: "Web Experience",
    description:
      "Designed for seamless user experience, optimized checkout flow, and scalable product management.",
    tags: ["Next.js", "Stripe", "Performance"],
    accent: "from-[#0C6170]/20 via-[#0C6170]/10 to-charcoal-deep",
    lineColor: "#0C6170",
  },
  {
    number: "02",
    name: "Corporate Website",
    type: "Digital Branding",
    description:
      "Structured for clarity, professionalism, and strong digital presence.",
    tags: ["Design System", "CMS", "Brand"],
    accent: "from-zinc-700/20 via-slate-800/30 to-charcoal-deep",
    lineColor: "#0C6170",
  },
  {
    number: "03",
    name: "Booking System",
    type: "Systems & Automation",
    description:
      "Efficient scheduling experience with streamlined user interaction.",
    tags: ["Calendar API", "Automation", "UX"],
    accent: "from-[#0C6170]/15 via-[#0C6170]/8 to-charcoal-deep",
    lineColor: "#0C6170",
  },
  {
    number: "04",
    name: "ERP Integration",
    type: "Systems & Automation",
    description:
      "Connected systems enabling automation, data flow, and operational efficiency.",
    tags: ["API", "Dashboard", "Integration"],
    accent: "from-[#0C6170]/20 via-[#0C6170]/10 to-charcoal-deep",
    lineColor: "#0C6170",
  },
];

export default function Work() {
  return (
    <SectionWrapper id="work" className="bg-charcoal-mid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Work
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white"
            >
              Selected projects
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40 text-sm max-w-xs text-right hidden md:block">
              Each project is a shot. Aimed, released, and measured by results.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardReveal}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative bg-gradient-to-br ${project.accent} p-8 md:p-10 flex flex-col gap-6 min-h-[280px] overflow-hidden`}
            >
              {/* Background texture */}
              <div className="absolute inset-0 bg-charcoal-deep opacity-60" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6 h-full">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-white/20 text-xs tracking-widest font-display">
                    {project.number}
                  </span>
                  <span className="text-xs text-white/40 tracking-wider border border-white/10 px-2 py-1">
                    {project.type}
                  </span>
                </div>

                {/* Project name */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-white/30 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-white/30 group-hover:text-gold transition-colors duration-200">
                  <span className="text-xs tracking-widest uppercase">View Project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
                </div>
              </div>

              {/* Bottom gold accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
