import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  FileCheck,
  User,
  Award,
  Building,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Blue Space Interiors | Premier Luxury Turnkey Studio",
  description:
    "Schedule a direct consultation with Contact Person Mr. Sunil Pandey at our studio headquarters at 1507 on 15th, The Capital Tree, Pokhran Road No. 2, Thane (West) 400601, or book a virtual session from anywhere in India. Cell: +91 77383 18383.",
  keywords: [
    "contact turnkey interior designer",
    "luxury interior design consultation",
    "Blue Space Interiors contact",
    "Sunil Pandey Blue Space Interiors",
    "turnkey interior studio PAN India",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#f4f2ec] to-[#fbfaf7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Studio Headquarters &amp; Architecture Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Schedule a Private Consultation with Our{" "}
            <span className="brand-gradient-text">Principal Architects</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            Begin your journey toward an exquisite, stress-free turnkey home. Meet our leadership team and Contact Person Mr. Sunil Pandey at our studio headquarters at The Capital Tree on Pokhran Road No. 2, or arrange a virtual property evaluation from anywhere in India.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Studio Coordinates & Landmark Directions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studio Coordinates Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
                Studio Location
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                Studio Headquarters
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#3154A5] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Studio Address:</strong>
                    <span>
                      1507 on 15th, The Capital Tree, Pokhran Road No. 2, Thane (West), Maharashtra 400601
                    </span>
                    <span className="text-slate-500 block text-xs mt-1">
                      Landmark: Off Pokhran Road 2, near Bethany Hospital & Majiwada Junction
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Contact Person:</strong>
                    <span className="text-slate-900 font-medium">Mr. Sunil Pandey</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Cell Number / Direct Line:</strong>
                    <a
                      href="tel:+917738318383"
                      className="hover:text-[#3154A5] transition-colors font-semibold text-slate-900"
                    >
                      +91 77383 18383
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Official Email:</strong>
                    <a
                      href="mailto:bluespaceinteriors1@gmail.com"
                      className="hover:text-[#3154A5] transition-colors font-medium"
                    >
                      bluespaceinteriors1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Studio Visiting Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 8:00 PM</span>
                    <span className="text-slate-500 block text-xs">
                      (Sunday by prior appointment for working professionals)
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Council of Architecture Reg: <strong>CA/2012/54892</strong> | GSTIN: 27AABCB9123M1Z5
                  </span>
                </div>
              </div>
            </div>

            {/* Key Credentials & Pan India Reach Card */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm">
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#3154A5] uppercase mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#3154A5]" />
                <span>Core Credentials &amp; National Footprint</span>
              </h4>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-light">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">10+ Years of Excellence</strong> in luxury residential architecture.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Building className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">150+ Projects</strong> delivered with zero budget escalations.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">End -To- End Project Management &amp; Execution</strong> from design to handover.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">Pan India Presence:</strong> Direct client desk at <a href="tel:+917738318383" className="font-bold text-[#3154A5] underline">7738318383</a>.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">Official Inquiries:</strong> <a href="mailto:bluespaceinteriors1@gmail.com" className="font-semibold text-[#3154A5] underline">bluespaceinteriors1@gmail.com</a>.</span>
                </div>
              </div>
            </div>

            {/* Official Social Media Portals */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
                Digital Studio Portals
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1 mb-2">
                Explore Real Site Walkthroughs
              </h3>
              <p className="text-xs text-slate-600 mb-5 font-light">
                Follow our official social accounts for completed apartment reels, behind-the-scenes carpentry craftsmanship, and design insights.
              </p>
              <SocialLinks variant="contact-card" />
            </div>

            {/* Landmark & Transit Directions */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/60 to-white border border-blue-200 shadow-sm">
              <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#3154A5]" />
                Visiting Our Studio Headquarters
              </h4>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 text-[11px] text-[#3154A5] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>From Eastern Express Highway:</strong> Take Cadbury Junction flyover exit toward Pokhran Road No. 2; continue past Bethany Hospital to The Capital Tree (15th Floor, Suite 1507).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 text-[11px] text-[#3154A5] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>From Ghodbunder Road / Hiranandani Estate:</strong> Drive south past Manpada junction towards Pokhran Road No. 2 to reach The Capital Tree.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 text-[11px] text-[#3154A5] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Visitor Parking:</strong> Dedicated visitor parking is available at The Capital Tree with security assistance on arrival.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
