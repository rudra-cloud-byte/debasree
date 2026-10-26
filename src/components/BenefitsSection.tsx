"use client";

import React from "react";
import { Heart, ShieldCheck, Smile, Sparkles } from "lucide-react";
import { coachData } from "@/data/coachData";

export default function BenefitsSection() {
  const getIcon = (iconName: "Heart" | "ShieldCheck" | "Smile") => {
    switch (iconName) {
      case "Heart":
        return <Heart className="w-6 h-6 text-rose-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-pink-400" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-red-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Ambient gradient in pink & red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-800 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Philosophy & Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {coachData.philosophy.heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            No extreme diets, no exhausting burnout. Just practical strength, mindful movement, and feeling confident in your own body.
          </p>
        </div>

        {/* Clean 3-Column Story Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {coachData.philosophy.stories.map((story, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-dark-850/80 backdrop-blur-sm border border-white/10 hover:border-rose-500/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]"
            >
              <div>
                {/* Icon wrapper & Tagline */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-dark-800 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {getIcon(story.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-dark-800/90 border border-white/5 text-zinc-400">
                    {story.tagline}
                  </span>
                </div>

                {/* Story Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors mb-4">
                  {story.title}
                </h3>

                {/* Narrative Text */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {story.content}
                </p>
              </div>

              {/* Card Footer accent line */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-rose-400/80 transition-colors">
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Everyday Wellness
                </span>
                <span className="text-rose-400 font-mono text-sm">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
