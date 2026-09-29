import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileCheck,
  User,
  Building,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { getLiveMetrics } from "@/app/actions/tracker";
import BrandLogo from "@/components/BrandLogo";
import SocialLinks from "@/components/SocialLinks";

export default async function Footer() {
  const metrics = await getLiveMetrics();

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
              <h4 className="text-slate-900 font-semibold text-sm">10+ Years of Excellence</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Institutional pedigree &amp; architectural precision.
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
                Completed across premium gated communities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-[#3154A5]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">End -To- End Execution</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Single-window project management &amp; factory fabrication.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm">Pan India Presence</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-light">
                Direct client line: <a href="tel:+917738318383" className="font-bold text-[#3154A5] underline">7738318383</a>
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
              Thane&apos;s premier turnkey architectural and interior firm for high-ticket residences and penthouses.
              Founded by Sir J.J. College of Architecture and VJTI alumni, we eliminate contractor fragmentation
              through direct factory execution, delivering bespoke living environments with a strict 45-day key handover.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-[#3154A5]">
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                10+ Years of Excellence
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                150+ Projects
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                End -To- End Execution
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 font-medium">
                Pan India
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                Official Studio Portals
              </span>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Studio Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-[#3154A5] transition-colors">
                  Home (Turnkey Thane)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3154A5] transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/turnkey-services" className="hover:text-[#3154A5] transition-colors">
                  Turnkey Execution Model
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#3154A5] transition-colors">
                  Curated Thane Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3154A5] transition-colors">
                  Consultation & 3D Estimation
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

          {/* Column 3: Prime Thane Societies Served */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Thane Enclaves Served
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Hiranandani Estate & Meadows</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Raymond Ten X & Park Avenue</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Pokhran Road No. 1 & 2 Enclaves</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Lodha Amara & Sterling, Kolshet</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Sheth Avalon & Majiwada Junction</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3154A5]" />
                <span>Vasant Vihar & Upvan Lake</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info */}
          <div>
            <h4 className="text-slate-900 font-serif text-sm font-bold tracking-wider uppercase border-b border-blue-200 pb-2">
              Experience Studio
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-600 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3154A5] mt-0.5 flex-shrink-0" />
                <span>
                  1507 on 15th, The Capital Tree, Pokhran Road No. 2, Thane (West), Maharashtra 400601
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <span>Contact Person: <strong className="text-slate-900 font-medium">Mr. Sunil Pandey</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <a href="tel:+917738318383" className="hover:text-[#3154A5] transition-colors font-medium">
                  +91 77383 18383
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <a href="mailto:bluespaceinteriors1@gmail.com" className="hover:text-[#3154A5] transition-colors">
                  bluespaceinteriors1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                COA Reg: <strong>CA/2012/54892</strong> | GSTIN: 27AABCB9123M1Z5
              </div>
            </div>
          </div>
        </div>

        {/* Legal Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-[11px] text-slate-500 text-center">
          <p>
            © {new Date().getFullYear()} Blue Space Interiors LLP. All Rights Reserved. Reg. Architectural & Turnkey Interior Studio, Thane West.
          </p>
        </div>
      </div>

      {/* Dynamic Visitor Tracking Module - Positioned in Absolute Bottom Footer */}
      <VisitorCounter
        initialTotal={metrics.totalVisits}
        initialUnique={metrics.uniqueVisits}
      />
    </footer>
  );
}
