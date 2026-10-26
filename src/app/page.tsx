"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import { CourseItem } from "@/data/coachData";
import { CreditCard, RefreshCw, X, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mock checkout handler triggered by "Enroll Now"
  const handleEnroll = (course: CourseItem) => {
    setSelectedCourse(course);
    setIsCheckoutOpen(true);

    // Trigger toast notification
    const message = `Redirecting to secure Stripe Checkout for ${course.title}...`;
    setToastMessage(message);

    // Auto-dismiss toast after 6 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleCloseModal = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-zinc-100 flex flex-col">
      {/* Toast Notification Container in Pink & Red Theme */}
      {toastMessage && (
        <aside
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] p-4 rounded-2xl bg-dark-900/95 backdrop-blur-xl border border-rose-500/40 shadow-2xl shadow-black/80 animate-slideUp"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <RefreshCw className="w-4 h-4 animate-spin" />
            </div>

            <div className="flex-1 pr-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Stripe Payment Handshake</span>
              </div>
              <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                {toastMessage}
              </p>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3 h-3 text-rose-400" />
                <span>256-Bit SSL Encrypted Route</span>
              </div>
            </div>

            <button
              onClick={() => setToastMessage(null)}
              aria-label="Dismiss toast"
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-dark-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Main Single-Page Structure */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero / Profile Section */}
        <HeroSection />

        {/* 2. Why Strength Training Benefits Section */}
        <BenefitsSection />

        {/* 3. Courses Offered Grid Section */}
        <CoursesSection onEnroll={handleEnroll} />

        {/* 5. Contact & Socials Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 4. Payment Gateway Integration Modal */}
      <CheckoutModal
        course={selectedCourse}
        isOpen={isCheckoutOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
