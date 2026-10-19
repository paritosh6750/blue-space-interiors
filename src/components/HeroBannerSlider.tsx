"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Award,
  Layers,
  ArrowRight,
  Building2,
  Briefcase,
  MapPin,
  Mail,
} from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

export interface BannerSlide {
  id: string;
  image: string;
  alt: string;
}

export const HERO_BANNER_SLIDES: BannerSlide[] = [
  {
    id: "modular-kitchen",
    image: "/hero-banner/hero-1-modular-kitchen.jpg",
    alt: "Luxury Modular Kitchen with Quartz Countertops and Fluted Cabinetry - Blue Space Interiors Turnkey Contracting",
  },
  {
    id: "grand-living-room",
    image: "/hero-banner/hero-2-grand-living-room.jpg",
    alt: "Grand Living Room with Cascading Chandelier and Modern Suspended Swing - Blue Space Interiors",
  },
  {
    id: "luxury-master-bedroom",
    image: "/hero-banner/hero-3-luxury-master-bedroom.jpg",
    alt: "Luxury Master Bedroom with Sage Green Wainscoting and Curved Indirect Lighting - Blue Space Interiors",
  },
  {
    id: "aesthetic-bedroom-suite",
    image: "/hero-banner/hero-4-aesthetic-bedroom-suite.jpg",
    alt: "Aesthetic Bedroom Suite with Fluted Wood Panelling and Sheer Drapes - Blue Space Interiors",
  },
  {
    id: "entertainment-tv-lounge",
    image: "/hero-banner/hero-5-entertainment-tv-lounge.jpg",
    alt: "Lavish TV Entertainment Feature Wall Lounge with Acoustic Slats - Blue Space Interiors",
  },
];

interface HeroBannerSliderProps {
  yearsOfExcellence: string;
}

export default function HeroBannerSlider({ yearsOfExcellence }: HeroBannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = HERO_BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Continuous automatic horizontal transition every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden select-none"
      aria-label="Premier Interior Design and Turnkey Contracting Banner Slider"
      role="region"
    >
      {/* 1. Horizontal Background Image Slider Track */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {HERO_BANNER_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative shrink-0 overflow-hidden"
              aria-hidden={index !== currentIndex}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                  index === currentIndex ? "scale-105" : "scale-100"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        {/* 2. Light Luxury Gradient Overlays (preserves light aesthetic + ensures maximum typography contrast) */}
        {/* Soft white multi-stop gradient from center-left for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/84 to-white/70 sm:from-white/88 sm:via-white/76 sm:to-white/55 z-10 pointer-events-none" />
        
        {/* Top and Bottom soft white transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-transparent to-white z-10 pointer-events-none" />
        
        {/* Subtle radial glow to highlight the central copy */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.3)_60%,transparent_100%)] z-10 pointer-events-none" />
      </div>

      {/* 3. Main Hero Content (H1, Subhead, Guarantees, CTAs, 5-Pillar Ribbon) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 text-center">
        {/* Primary Target Keyword in H1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto drop-shadow-xs">
          Premier Interior Design &amp; <span className="brand-gradient-text">Turnkey Contracting</span> Firm
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
          Eliminate the costly divide between impractical designers and disconnected contractors. 
          We engineer and execute complete turnkey fitouts for <strong className="text-slate-900 font-semibold">all kinds of properties</strong>—residential, 
          commercial, corporate, and grand villas across India—with designer precision and a strict{" "}
          <strong className="text-slate-900 font-semibold">{BRAND_CONFIG.handoverGuarantee}</strong>.
        </p>

        {/* Core Value Guarantee Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-700">
          <span className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Zero Cost Escalation Guarantee
          </span>
          <span className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
            <Clock className="w-4 h-4 text-[#3154A5]" />
            Guaranteed 120-Day Handover Protocol
          </span>
          <span className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
            <Award className="w-4 h-4 text-[#3154A5]" />
            5-Year Direct Structural Warranty
          </span>
          <span className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
            <Layers className="w-4 h-4 text-[#3154A5]" />
            Integrated Design &amp; Contracting
          </span>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="brand-button px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            <span>Schedule Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-800 bg-white/95 hover:bg-white border border-slate-300 hover:border-[#3154A5] shadow-xs transition-all"
          >
            Explore Projects
          </Link>
        </div>

        {/* 5-Pillar Core Excellence Ribbon */}
        <div className="mt-11 sm:mt-13 max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-blue-200/80 shadow-xl p-3 sm:p-5">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#3154A5] mb-2 shadow-2xs">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight">{yearsOfExcellence}</span>
              <span className="text-[11px] text-slate-600 font-medium mt-0.5">of Excellence (Est. 2020)</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#3154A5] mb-2 shadow-2xs">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#3154A5] text-sm sm:text-base leading-tight">150+ Projects</span>
              <span className="text-[11px] text-slate-600 font-medium mt-0.5">Delivered to Date</span>
            </div>

            <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#3154A5] mb-2 shadow-2xs">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Design &amp; Contracting</span>
              <span className="text-[11px] text-slate-600 font-medium mt-0.5">End-To-End Single Window</span>
            </div>

            <div className="col-span-1 flex flex-col items-center justify-center text-center p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#3154A5] mb-2 shadow-2xs">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">PAN India Services</span>
              <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="text-xs text-[#3154A5] font-bold hover:underline mt-0.5">
                {BRAND_CONFIG.phoneDisplay}
              </a>
            </div>

            <div className="col-span-1 flex flex-col items-center justify-center text-center p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#3154A5] mb-2 shadow-2xs">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Direct Desk</span>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="text-[11px] text-[#3154A5] font-semibold hover:underline mt-0.5 truncate max-w-[125px] sm:max-w-none"
                title={BRAND_CONFIG.email}
              >
                {BRAND_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* 4. Horizontal Banner Indicator Dots (Clean & Minimal) */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-2.5">
          {HERO_BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Switch to banner slide ${idx + 1}`}
                className={`group relative flex items-center transition-all duration-300 cursor-pointer ${
                  isActive ? "w-10 sm:w-14" : "w-3 sm:w-4 hover:w-6"
                } h-1.5 sm:h-2 rounded-full overflow-hidden`}
              >
                {/* Background bar */}
                <span
                  className={`absolute inset-0 rounded-full transition-colors ${
                    isActive ? "bg-blue-100 border border-blue-300" : "bg-slate-300/80 hover:bg-slate-400"
                  }`}
                />

                {/* Active animated fill bar */}
                {isActive && (
                  <span
                    key={`bar-${currentIndex}`}
                    className="absolute inset-y-0 left-0 bg-[#3154A5] rounded-full animate-[bannerProgress_3000ms_linear_forwards]"
                    style={{
                      animationDuration: "3000ms",
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
