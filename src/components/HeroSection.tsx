/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles, UserCheck, Dumbbell } from "lucide-react";
import { coachData } from "@/data/coachData";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting effects in hot pink & crimson */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Focus area pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-rose-500/30 text-rose-400 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(244,63,94,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Personalized Strength & Running Coaching</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-red-500">
                Strength.
              </span>{" "}
              <br className="hidden sm:inline" />
              Run{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-rose-200">
                Resilient.
              </span>
            </h1>

            {/* Warm Welcoming Hero Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {coachData.heroIntro}
            </p>

            {/* Clean row of 4 simple tags */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {coachData.focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dark-800/90 border border-rose-500/20 text-zinc-200 text-xs font-medium hover:border-rose-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                  {area}
                </span>
              ))}
            </div>

            {/* Single CTA Button (Talk to Coach removed) */}
            <div className="pt-4 w-full sm:w-auto">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-black tracking-wider uppercase bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white hover:from-rose-600 hover:via-pink-600 hover:to-red-600 shadow-[0_0_25px_rgba(244,63,94,0.45)] hover:shadow-[0_0_35px_rgba(244,63,94,0.65)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Classes</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image Aspect-Ratio Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow frame in pink/red */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-rose-500/40 via-pink-500/30 to-red-600/20 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Aspect Ratio Box (4:5) */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-dark-900 border-2 border-rose-500/30 shadow-2xl shadow-black/80">
                {!imageError ? (
                  <img
                    src={coachData.image.src}
                    alt={coachData.image.alt}
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  /* Fallback avatar */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-850 to-dark-950 p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-dark-800 border-2 border-rose-500/40 flex items-center justify-center text-rose-400 text-3xl font-black mb-4 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                      {coachData.image.fallbackInitials}
                    </div>
                    <h3 className="text-xl font-bold text-white">{coachData.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">{coachData.title}</p>
                    <span className="mt-4 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold border border-rose-500/30">
                      Coaching Profile
                    </span>
                  </div>
                )}

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent pointer-events-none" />

                {/* Floating Coach Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-extrabold text-lg leading-tight flex items-center gap-2">
                      {coachData.name}
                      <UserCheck className="w-4 h-4 text-rose-400 inline" />
                    </h3>
                    <p className="text-zinc-400 text-xs font-medium">
                      {coachData.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] font-bold uppercase tracking-wider">
                      Accepting Clients
                    </span>
                  </div>
                </div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950/85 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg">
                    <Dumbbell className="w-3.5 h-3.5 text-rose-400" />
                    Strength & Stride Biomechanics
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
