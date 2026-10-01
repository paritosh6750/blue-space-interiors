"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SocialLinks from "@/components/SocialLinks";
import { BRAND_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Turnkey Services", href: "/turnkey-services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Row */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group transition-transform hover:opacity-95">
              <BrandLogo variant="horizontal" size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors relative py-1 font-medium ${
                      isActive
                        ? "text-[#3154A5] font-semibold"
                        : "text-slate-700 hover:text-[#3154A5]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3154A5] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Contact CTA */}
            <div className="hidden md:flex items-center gap-4">
              <SocialLinks variant="navbar" className="hidden lg:flex border-r border-slate-200 pr-3 mr-1" />

              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#3154A5] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#3154A5]" />
                </div>
                <span>{BRAND_CONFIG.phone}</span>
              </a>

              <Link
                href="/contact"
                className="brand-button px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="brand-button px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase"
              >
                Consult
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 pt-4 pb-8 mt-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base py-2 border-b border-slate-100 flex items-center justify-between ${
                    isActive ? "text-[#3154A5] font-semibold" : "text-slate-800"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#3154A5]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Cost Escalation | 120-Day Handover Guarantee</span>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">Follow Our Firm:</span>
                <SocialLinks variant="navbar" />
              </div>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="text-xs text-[#3154A5] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin Portal</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="brand-button w-full text-center py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
