"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Award,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Building2,
  Briefcase,
  MapPin,
  Mail,
  Camera,
} from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

export interface BannerSlide {
  id: string;
  image: string;
  alt: string;
  label: string;
  tagline: string;
  scope: string;
}

export const HERO_BANNER_SLIDES: BannerSlide[] = [
  {
    id: "modular-kitchen",
    image: "/hero-banner/hero-1-modular-kitchen.jpg",
    alt: "Luxury Modular Kitchen with Quartz Countertops and Fluted Cabinetry - Blue Space Interiors Turnkey Contracting",
    label: "Bespoke Modular Kitchen",
    tagline: "High-Gloss Joinery, Quartz Tops & Under-Cabinet Lighting",
    scope: "Residential Modular Execution",
  },
  {
    id: "grand-living-room",
    image: "/hero-banner/hero-2-grand-living-room.jpg",
    alt: "Grand Living Room with Cascading Chandelier and Modern Suspended Swing - Blue Space Interiors",
    label: "Grand Living Suite",
    tagline: "Tiered Chandelier, Suspended Swing & Architectural Moulding",
    scope: "Luxury Villa & Penthouse Fitout",
  },
  {
    id: "luxury-master-bedroom",
    image: "/hero-banner/hero-3-luxury-master-bedroom.jpg",
    alt: "Luxury Master Bedroom with Sage Green Wainscoting and Curved Indirect Lighting - Blue Space Interiors",
    label: "Master Bedroom Suite",
    tagline: "Sage Green Wainscoting, Curved Cove & Built-In Wardrobes",
    scope: "Turnkey Master Suite Fitout",
  },
  {
    id: "aesthetic-bedroom-suite",
    image: "/hero-banner/hero-4-aesthetic-bedroom-suite.jpg",
    alt: "Aesthetic Bedroom Suite with Fluted Wood Panelling and Sheer Drapes - Blue Space Interiors",
    label: "Fluted Wood Panelled Suite",
    tagline: "Vertical Fluted Wood Accents, Study Nook & Sunlight Drapes",
    scope: "Bespoke Architectural Woodwork",
  },
  {
    id: "entertainment-tv-lounge",
    image: "/hero-banner/hero-5-entertainment-tv-lounge.jpg",
    alt: "Lavish TV Entertainment Feature Wall Lounge with Acoustic Slats - Blue Space Interiors",
    label: "Marble & Fluted TV Lounge",
    tagline: "Bookmatched Marble Feature Wall, Acoustic Slats & Low Credenza",
    scope: "Turnkey Lounge & Dining Execution",
  },
];

interface HeroBannerSliderProps {
  yearsOfExcellence: string;
}

export default function HeroBannerSlider({ yearsOfExcellence }: HeroBannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const slideCount = HERO_BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds (3000ms) with horizontal transition
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentIndex]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      if (diff > 50) {
        // Swiped left -> next
        nextSlide();
      } else if (diff < -50) {
        // Swiped right -> prev
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentSlide = HERO_BANNER_SLIDES[currentIndex];

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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

      {/* 3. Top Banner Status Bar (Active Project Tag & Timer Bar) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-xs text-xs sm:text-sm text-slate-800 font-medium pointer-events-auto">
          <Camera className="w-3.5 h-3.5 text-[#3154A5]" />
          <span className="hidden sm:inline font-bold text-[#3154A5]">Real Project:</span>
          <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">{currentSlide.label}</span>
          <span className="text-slate-400 hidden md:inline">•</span>
          <span className="text-slate-600 hidden md:inline text-xs">{currentSlide.scope}</span>
        </div>

        {/* 3-Second Horizontal Progress Ticker */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs pointer-events-auto">
          <span className="text-xs font-mono font-bold text-[#3154A5]">
            0{currentIndex + 1}
          </span>
          <span className="text-xs font-mono text-slate-400">/</span>
          <span className="text-xs font-mono text-slate-500">
            0{slideCount}
          </span>
          <span className="text-[10px] text-slate-400 ml-1 hidden sm:inline">(3s auto)</span>
        </div>
      </div>

      {/* 4. Left & Right Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Project Banner Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/90 hover:bg-white text-slate-700 hover:text-[#3154A5] border border-slate-200/80 shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Project Banner Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/90 hover:bg-white text-slate-700 hover:text-[#3154A5] border border-slate-200/80 shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 5. Main Hero Content (H1, Subhead, Guarantees, CTAs, 5-Pillar Ribbon) */}
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

        {/* 6. Horizontal Banner Navigation Dots with 3s animated progress */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
          {HERO_BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Switch to banner slide ${idx + 1}: ${slide.label}`}
                className={`group relative flex items-center transition-all duration-300 cursor-pointer ${
                  isActive ? "w-14 sm:w-20" : "w-6 sm:w-8 hover:w-10"
                } h-2.5 sm:h-3 rounded-full overflow-hidden`}
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
                    className={`absolute inset-y-0 left-0 bg-[#3154A5] rounded-full ${
                      isPaused ? "w-full" : "animate-[bannerProgress_3000ms_linear_forwards]"
                    }`}
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

        {/* Slide navigation label for user clarity */}
        <p className="mt-2 text-[11px] text-slate-500 font-medium">
          Slide {currentIndex + 1} of {slideCount}: <span className="text-slate-800 font-semibold">{currentSlide.label}</span> • Changes every 3 seconds (Hover to pause)
        </p>
      </div>
    </section>
  );
}
