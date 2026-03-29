"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Performance", href: "#performance" },
  { label: "Archery", href: "#archery" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-60px 0px -60px 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal-deep/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          aria-label="Go to top"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#0C6170" strokeWidth="1" opacity="0.3" />
            <circle cx="14" cy="14" r="9" stroke="#0C6170" strokeWidth="1" opacity="0.5" />
            <circle cx="14" cy="14" r="5" stroke="#0C6170" strokeWidth="1" opacity="0.8" />
            <circle cx="14" cy="14" r="2" fill="#0C6170" />
          </svg>
          <span className="font-display font-bold text-white text-sm tracking-widest uppercase">
            AM
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={label} className="relative">
                <button
                  onClick={() => handleLink(href)}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    isActive ? "text-gold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </button>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleLink("#contact")}
            className="text-sm font-display font-medium px-5 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-charcoal-deep transition-all duration-200"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-6 bg-white"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6 bg-white"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6 bg-white"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-charcoal-deep/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleLink(href)}
                    className="text-white/70 hover:text-gold text-base tracking-wide transition-colors w-full text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleLink("#contact")}
                  className="w-full text-sm font-display font-medium px-5 py-2.5 bg-gold text-charcoal-deep hover:bg-gold-light transition-colors"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
