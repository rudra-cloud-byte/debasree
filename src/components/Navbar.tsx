"use client";

import React, { useState, useEffect } from "react";
import { Dumbbell, Menu, X, ArrowRight } from "lucide-react";
import { coachData } from "@/data/coachData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Why Strength", href: "#benefits" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-950/90 backdrop-blur-md border-b border-rose-500/20 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-white hover:text-rose-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-rose-500 group-hover:border-rose-500/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.35)] transition-all duration-300">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <span className="font-black tracking-wider uppercase text-lg text-white group-hover:text-rose-400 transition-colors">
                {coachData.name}
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-zinc-400 tracking-widest uppercase">
                Strength & Running
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-rose-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#courses"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white hover:from-rose-600 hover:via-pink-600 hover:to-red-600 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View Classes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden p-2.5 rounded-xl bg-dark-850 border border-white/10 text-zinc-300 hover:text-rose-400 hover:border-rose-500/30 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-rose-500/20 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-rose-400 transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-3 py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
            >
              View Classes
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
