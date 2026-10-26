"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { coachData } from "@/data/coachData";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/60 border-t border-rose-500/20">
      {/* Background ambient lighting in pink/red */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Connect With Coach Debashree
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Have questions about beginning strength training, starting your running journey, or selecting the right program? Reach out directly via WhatsApp, Phone, or Instagram.
          </p>
        </div>

        {/* Primary Contact Channels Grid (3 Large Touch Targets) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* 1. WhatsApp Button / Card */}
          <a
            href={`https://wa.me/${coachData.contact.whatsappNumber}?text=${encodeURIComponent(
              coachData.contact.whatsappPrefillMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[96px] p-6 rounded-2xl bg-dark-850 border border-white/10 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 flex items-center justify-between active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-dark-950 transition-colors duration-300">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  Instant Chat
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Quick message or voice note
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          {/* 2. Direct Phone Button / Card in Rose & Red */}
          <a
            href={`tel:${coachData.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="group min-h-[96px] p-6 rounded-2xl bg-dark-850 border border-white/10 hover:border-rose-500/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.25)] transition-all duration-300 flex items-center justify-between active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-0.5">
                  Direct Line
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  Call Phone
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {coachData.contact.phone}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          {/* 3. Instagram Button / Card in Vibrant Pink */}
          <a
            href={coachData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[96px] p-6 rounded-2xl bg-dark-850 border border-white/10 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-all duration-300 flex items-center justify-between active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-0.5">
                  Training Updates
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  Instagram
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {coachData.contact.instagramHandle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

        </div>

        {/* Quick Message Form (Centered, Clean & Uncluttered Layout) */}
        <div className="max-w-2xl mx-auto p-7 sm:p-9 rounded-3xl bg-dark-850/90 border border-white/10 shadow-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-2">Send a Quick Message</h3>
          <p className="text-xs text-zinc-400 mb-6">
            Drop your details below and Coach Debashree will reply within 24 hours.
          </p>

          {formSent ? (
            <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-2 animate-fadeIn">
              <CheckCircle2 className="w-8 h-8 text-rose-400 mx-auto" />
              <h4 className="font-bold text-white text-base">Inquiry Dispatched!</h4>
              <p className="text-xs text-zinc-300">
                Thanks for reaching out! Debashree will receive your message directly and get back to you shortly.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-3 text-xs text-rose-400 underline font-semibold"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  How can Debashree help you?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell Debashree about your current fitness level, running goals, or what program you are interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.45)] transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message to Coach Debashree</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
