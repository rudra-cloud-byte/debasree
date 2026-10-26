"use client";

import React from "react";
import { Check, Clock, Calendar, Zap, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { coachData, CourseItem } from "@/data/coachData";

interface CoursesSectionProps {
  onEnroll: (course: CourseItem) => void;
}

export default function CoursesSection({ onEnroll }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background radial accent in pink & red */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Zap className="w-3.5 h-3.5" />
            <span>Coaching Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Courses Offered
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Personalized, practical coaching designed to fit your life. Build everyday functional strength, start running comfortably, or cross your next finish line with confidence.
          </p>
        </div>

        {/* Pricing & Course Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {coachData.courses.map((course) => {
            const isPopular = course.popular;

            return (
              <div
                key={course.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 ${
                  isPopular
                    ? "bg-dark-850/95 border-2 border-rose-500/80 shadow-[0_0_40px_rgba(244,63,94,0.25)]"
                    : "bg-dark-900/80 border border-white/10 hover:border-rose-500/40 hover:shadow-xl"
                }`}
              >
                {/* Popular / Highlight Banner */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                      <Star className="w-3 h-3 fill-white" />
                      {course.badge || "Most Popular"}
                    </span>
                  </div>
                )}

                {/* Top Section: Title & Schedule */}
                <div>
                  {!isPopular && course.badge && (
                    <span className="inline-block mb-3 px-3 py-1 rounded-md bg-dark-800 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                      {course.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1.5 mb-4 font-medium">
                    {course.tagline}
                  </p>

                  {/* Schedule & Duration badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-800/80 border border-white/5 text-zinc-300 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-rose-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-800/80 border border-white/5 text-zinc-300 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      <span className="line-clamp-1">{course.schedule}</span>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="pb-6 mb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-400 tracking-tight">
                      ${course.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                      USD / program
                    </span>
                  </div>

                  {/* Short Overview Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {course.description}
                  </p>

                  {/* Syllabus / Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Program Details
                    </span>
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Enroll Now */}
                <div className="pt-2">
                  <button
                    onClick={() => onEnroll(course)}
                    className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group ${
                      isPopular
                        ? "bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white hover:from-rose-600 hover:via-pink-600 hover:to-red-600 shadow-[0_0_25px_rgba(244,63,94,0.45)] hover:shadow-[0_0_35px_rgba(244,63,94,0.65)] transform hover:-translate-y-0.5"
                        : "bg-dark-800 hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 text-white border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                    }`}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                    <span>Instant Stripe checkout • 100% Secure</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
