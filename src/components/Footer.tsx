import React from "react";
import { Dumbbell } from "lucide-react";
import { coachData } from "@/data/coachData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-rose-500/20 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <span className="font-black tracking-wider uppercase text-lg text-white">
                {coachData.name}
              </span>
              <p className="text-xs text-zinc-400 font-medium">
                Evidence-Based Strength & Running Coaching
              </p>
            </div>
          </div>

          {/* Quick anchor jump links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <a href="#hero" className="hover:text-rose-400 transition-colors">
              About Coach
            </a>
            <a href="#benefits" className="hover:text-rose-400 transition-colors">
              Why Strength
            </a>
            <a href="#courses" className="hover:text-rose-400 transition-colors">
              Programs
            </a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">
              Contact & Socials
            </a>
          </nav>

          {/* Quote */}
          <div className="text-center md:text-right">
            <p className="text-xs text-zinc-300 italic">
              &quot;The Iron never lies to you.&quot;
            </p>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mt-0.5">
              Henry Rollins
            </span>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {currentYear} {coachData.name}. All rights reserved. Built for athletic resilience.
          </p>
          <p className="text-center sm:text-right text-[11px] text-zinc-400">
            Medical Disclaimer: Always consult your physician before beginning any strenuous weightlifting regimen.
          </p>
        </div>

      </div>
    </footer>
  );
}
