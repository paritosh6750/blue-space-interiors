import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Building,
  User,
  ShieldCheck,
  Lock,
  Briefcase,
  Layers,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SocialLinks from "@/components/SocialLinks";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export default function Footer() {
  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <footer className="bg-[#fcfbf9] border-t border-slate-200 text-slate-700">
      {/* Upper Footer: Value Props */}
      <div className="border-b border-slate-200 bg-[#f4f2ec] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-[#3154A5]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">{yearsOfExcellence} of Excellence</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Established in {BRAND_CONFIG.establishedYear} with single-window accountability.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-[#3154A5]">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">150+ Turnkey Projects</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Completed across residential &amp; commercial properties.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-[#3154A5]">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">Design &amp; Contracting</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                {BRAND_CONFIG.handoverGuarantee} with locked BOQ.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">PAN India Services</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Direct client line:{" "}
                <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="font-bold text-[#3154A5] underline">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-transform hover:opacity-95 mb-1">
              <BrandLogo variant="horizontal" size="lg" />
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed pr-6 font-light">
              Premier turnkey interior design and contracting firm executing complete fitouts for residential, commercial, 
              and corporate properties across India. We bridge the gap between design and contracting with single-window 
              accountability, locked BOQs, and a guaranteed 120-day key handover.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-[#3154A5]">
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                {yearsOfExcellence} of Excellence
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                150+ Projects
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                Design &amp; Contracting
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                PAN India Services
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                Official Portals
              </span>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-[#3154A5] transition-colors">
                  Home (Design &amp; Contracting)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3154A5] transition-colors">
                  About Us (Bridging the Gap)
                </Link>
              </li>
              <li>
                <Link href="/turnkey-services" className="hover:text-[#3154A5] transition-colors">
                  Turnkey Execution Model
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#3154A5] transition-colors">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3154A5] transition-colors">
                  Consultation &amp; Feasibility
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-[#3154A5] font-semibold hover:underline"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Contracting Verticals (Completely replaces Thane Enclaves Served) */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Contracting Verticals
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Turnkey Residential Fitouts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Corporate Office Interiors</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Commercial &amp; Retail Contracting</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Luxury Penthouses &amp; Villas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Turnkey Civil &amp; MEP Fitouts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-slate-900">PAN India Project Execution</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Office Coordinates
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-600 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3154A5] mt-0.5 flex-shrink-0" />
                <span>
                  {BRAND_CONFIG.registeredCity} • Executing PAN India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <span>Contact Person: <strong className="text-slate-900 font-medium">{BRAND_CONFIG.contactPerson}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="hover:text-[#3154A5] transition-colors font-medium">
                  {BRAND_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-[#3154A5] transition-colors">
                  {BRAND_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-700">
                GSTIN: <strong className="font-mono text-slate-900 font-bold">{BRAND_CONFIG.gstin}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-[11px] text-slate-500 text-center">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved. Turnkey Interior Design &amp; Contracting Firm • Registered in Thane West, Maharashtra • Services PAN India.
          </p>
        </div>
      </div>

      {/* Dynamic Visitor Tracking Module - Positioned in Absolute Bottom Footer */}
      <VisitorCounter />
    </footer>
  );
}
