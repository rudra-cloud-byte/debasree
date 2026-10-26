"use client";

import React, { useEffect, useState } from "react";
import {
  Lock,
  X,
  CreditCard,
  CheckCircle,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { CourseItem } from "@/data/coachData";

interface CheckoutModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ course, isOpen, onClose }: CheckoutModalProps) {
  const [progress, setProgress] = useState(15);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);

  // Reset states whenever modal opens with a course
  useEffect(() => {
    if (isOpen) {
      setProgress(25);
      setIsSuccess(false);
      setIsRedirecting(true);

      const timer1 = setTimeout(() => setProgress(65), 500);
      const timer2 = setTimeout(() => setProgress(90), 1200);

      // Light-dismiss on Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      // Lock body scroll
      document.body.style.overflow = "hidden";

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const handleSimulateCompletion = () => {
    setProgress(100);
    setIsRedirecting(false);
    setIsSuccess(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dimmed Backdrop with light-dismiss */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-dark-900 border border-rose-500/30 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 animate-scaleUp">
        
        {/* Stripe Header Accent Bar in pink and red */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-600" />

        {/* Modal Top Nav / Close button */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                Stripe Payments Engine
              </span>
              <h3 id="checkout-modal-title" className="text-base font-bold text-white flex items-center gap-1.5">
                <span>Secure Checkout Routing</span>
                <Lock className="w-3.5 h-3.5 text-rose-400" />
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close checkout modal"
            className="p-2 rounded-xl bg-dark-800 text-zinc-400 hover:text-white hover:bg-dark-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Active Redirection Banner */}
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3">
            <RefreshCw className={`w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0 ${isRedirecting ? "animate-spin" : ""}`} />
            <div>
              <p className="text-xs font-semibold text-rose-300 uppercase tracking-wider">
                Payment Gateway Handshake Active
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                Redirecting to secure Stripe Checkout for <span className="text-rose-400 underline decoration-rose-400/50">{course.title}</span>...
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Your payment routing handler has been triggered with session parameters.
              </p>
            </div>
          </div>

          {/* Course Order Summary Box */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Course Selection
                </span>
                <h4 className="text-lg font-bold text-white">{course.title}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">{course.schedule} • {course.duration}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 block uppercase font-medium">Total</span>
                <span className="text-2xl font-black text-rose-400">${course.price}</span>
                <span className="text-[10px] text-zinc-400 block font-mono">USD / program</span>
              </div>
            </div>

            {/* Simulated Progress Bar in pink and red */}
            <div className="pt-2">
              <div className="flex justify-between text-xs text-zinc-400 font-mono mb-1.5">
                <span>Routing to Stripe Checkout...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Security details */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>256-Bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-zinc-500" />
              <span>PCI-DSS Level 1 Compliant</span>
            </div>
          </div>

          {/* Success state simulation or action buttons */}
          {isSuccess ? (
            <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-center space-y-2 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h5 className="font-bold text-white text-base">Payment Simulation Verified</h5>
              <p className="text-xs text-zinc-300">
                Stripe webhook listener confirmed! Coach Debashree will reach out via WhatsApp with your onboarding running & lifting calendar.
              </p>
              <button
                onClick={onClose}
                className="mt-2 w-full py-2.5 rounded-xl bg-dark-800 text-xs font-bold text-white hover:bg-dark-700 transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSimulateCompletion}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white font-black text-sm uppercase tracking-wider hover:from-rose-600 hover:to-red-600 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>Simulate Successful Stripe Payment</span>
                <CheckCircle className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-transparent hover:bg-dark-800 text-zinc-400 hover:text-zinc-200 text-xs font-semibold transition-colors"
              >
                Cancel Checkout
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
