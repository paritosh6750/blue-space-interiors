import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  FileCheck,
  User,
  Award,
  Building,
  Briefcase,
} from "lucide-react";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Blue Space Interiors | Turnkey Interior Design & Contracting PAN India",
  description:
    "Schedule a direct consultation with Contact Person Mr. Sunil Pandey at our registered office in Thane (West), Maharashtra 400601, or book a virtual session from anywhere in India. Cell: +91 77383 18383.",
  keywords: [
    "contact turnkey interior contractor",
    "interior contracting consultation",
    "Blue Space Interiors contact",
    "Sunil Pandey Blue Space Interiors",
    "turnkey interior studio PAN India",
  ],
};

export default function ContactPage() {
  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#f4f2ec] to-[#fbfaf7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Turnkey Contracting Desk • PAN India Execution</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Schedule a Private Consultation with Our{" "}
            <span className="brand-gradient-text">Contracting Leadership</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            Begin your journey toward an exquisite, stress-free interior fitout. Meet our leadership team and Contact Person 
            Mr. Sunil Pandey at our registered office in Thane (West), Maharashtra, or arrange a virtual property evaluation from anywhere in India.
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
                Contact &amp; Corporate Details
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                Office Coordinates
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#3154A5] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Registered Office:</strong>
                    <span>
                      {BRAND_CONFIG.registeredCity}
                    </span>
                    <span className="text-[#3154A5] block text-xs mt-1 font-semibold">
                      Providing Turnkey Contracting Services PAN India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Contact Person:</strong>
                    <span className="text-slate-900 font-medium">{BRAND_CONFIG.contactPerson}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Mobile / WhatsApp:</strong>
                    <a
                      href={`tel:${BRAND_CONFIG.phoneRaw}`}
                      className="hover:text-[#3154A5] transition-colors font-semibold text-slate-900"
                    >
                      {BRAND_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Official Email:</strong>
                    <a
                      href={`mailto:${BRAND_CONFIG.email}`}
                      className="hover:text-[#3154A5] transition-colors font-medium"
                    >
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#3154A5] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Business Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 8:00 PM</span>
                    <span className="text-slate-500 block text-xs">
                      (Sunday by prior appointment for working executives)
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                  <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Verified GSTIN: <strong className="font-mono text-slate-900 font-bold">{BRAND_CONFIG.gstin}</strong>
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
                  <span><strong className="font-semibold text-slate-900">{yearsOfExcellence} of Excellence</strong> in turnkey contracting (Est. 2020).</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Building className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">150+ Projects</strong> delivered with zero budget escalations.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">End -To- End Design &amp; Contracting</strong> with 5-year warranty.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">PAN India Services:</strong> Direct client desk at <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="font-bold text-[#3154A5] underline">{BRAND_CONFIG.phoneDisplay}</a>.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-[#3154A5] flex-shrink-0 shadow-xs">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold text-slate-900">Official Inquiries:</strong> <a href={`mailto:${BRAND_CONFIG.email}`} className="font-semibold text-[#3154A5] underline">{BRAND_CONFIG.email}</a>.</span>
                </div>
              </div>
            </div>

            {/* Official Social Media Portals */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
                Digital Portals
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1 mb-2">
                Explore Real Site Walkthroughs
              </h3>
              <p className="text-xs text-slate-600 mb-5 font-light">
                Follow our official social media channels for real project walkthroughs, site progress updates, and contracting insights.
              </p>
              <SocialLinks variant="contact-card" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
