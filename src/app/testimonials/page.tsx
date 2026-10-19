import { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Quote,
  ShieldCheck,
  Award,
  CheckCircle2,
  MapPin,
  Building2,
  ArrowRight,
  PhoneCall,
  Sparkles,
  User,
  Clock,
  Layers,
} from "lucide-react";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Testimonials & Endorsements | Blue Space Interiors",
  description:
    "Read verified client endorsements from C-suite executives, business owners, and luxury homeowners across India who trusted Blue Space Interiors for turnkey design and contracting.",
  alternates: {
    canonical: "https://bluespaceinteriors.com/testimonials",
  },
  openGraph: {
    title: "Client Testimonials | Blue Space Interiors",
    description:
      "Verified client endorsements from business leaders and discerning homeowners across India.",
    url: "https://bluespaceinteriors.com/testimonials",
  },
};

const testimonials = [
  {
    clientName: "Mr. Sanjay Sahoo",
    clientRole: "Coal Mining Business",
    location: "Sikshyakpada, Angul, Odisha",
    projectScope: "12,000 Sq.Ft. Luxury Villa Estate",
    projectType: "Grand Villa Estate",
    executionModel: "Turnkey Design by BRS & Execution by Blue Space Interiors",
    quote:
      "Blue Space Interiors designed and executed our 12,000 sq.ft. private villa in Angul, Odisha with remarkable expertise. Executing a lavish project of this scale across state borders was seamless under Sunil Pandey's single-window contracting governance. The luxurious double-height ceilings, stone finishes, and custom joinery are world-class.",
    rating: 5,
    highlights: ["12,000 Sq.Ft. Scope", "Interstate Contracting", "Custom Joinery & Marble"],
  },
  {
    clientName: "Mr. Neeraj Medekar",
    clientRole: "General Manager in Hitachi",
    location: "Flat 901, Glendale, Lake Enclave, Hiranandani Estate, Thane",
    projectScope: "2,000 Sq.Ft. Luxury Residence Fitout",
    projectType: "Premium High-Rise Residence",
    executionModel: "Full Turnkey Design & Execution by Blue Space Interiors",
    quote:
      "As General Manager at Hitachi, engineering precision and committed timelines are non-negotiable for me. Blue Space Interiors designed and executed our 2,000 sq.ft. residence at Lake Enclave, Hiranandani Estate to perfection. Their luxurious and lavish finishes, locked BOQ, and zero cost escalations made the fitout completely seamless.",
    rating: 5,
    highlights: ["Hitachi GM Leadership Review", "Locked Fixed BOQ", "Acoustic Wall Panelling"],
  },
  {
    clientName: "Ms. Bhavana Waignkar",
    clientRole: "IT Professional",
    location: "Flat 2506, Oberoi Eternia, Mulund, Mumbai",
    projectScope: "1,450 Sq.Ft. Oberoi Eternia 3 BHK Luxury Suite",
    projectType: "Luxury 3 BHK Suite",
    executionModel: "Full Turnkey Design & Execution by Blue Space Interiors",
    quote:
      "Designing and executing our 1,450 sq.ft. 3 BHK at Oberoi Eternia Mulund was handled with utmost professionalism. As an IT professional with tight schedules, I appreciated Blue Space Interiors managing everything autonomously—from society NOCs to modular joinery. The luxurious and lavish aesthetic exceeded all our expectations.",
    rating: 5,
    highlights: ["Autonomous Project Handover", "Society NOC Clearances", "Sleek Modular Joinery"],
  },
  {
    clientName: "Mr. Anand Acharya",
    clientRole: "Owner of Chemical Company",
    location: "Tower A, 2604, Oberoi Enigma, Mulund, Mumbai",
    projectScope: "2,200 Sq.Ft. 4 BHK Grand Residence",
    projectType: "Ultra-Luxury 4 BHK",
    executionModel: "Full Turnkey Design & Execution by Blue Space Interiors",
    quote:
      "For our 2,200 sq.ft. 4 BHK at Oberoi Enigma Mulund, Blue Space Interiors delivered a masterclass in turnkey contracting. The lavish bookmatched marble craftsmanship, concealed air-conditioning, and custom furniture reflect top-tier designer precision. Handover was on schedule with complete quality assurance.",
    rating: 5,
    highlights: ["Bookmatched Marble", "Concealed AC Ducting", "Bespoke Millwork"],
  },
  {
    clientName: "Mr. Himanshu Shrivastava",
    clientRole: "Branch Manager in HDFC Bank",
    location: "Flat 2503, Sai Nirvana, Kalyan",
    projectScope: "4,000 Sq.Ft. Grand Residence",
    projectType: "Signature Grand Residence",
    executionModel: "Turnkey Design by BRS & Execution by Blue Space Interiors",
    quote:
      "Executing a 4,000 sq.ft. comprehensive transformation at Sai Nirvana, Kalyan requires genuine contracting muscle. Sunil Pandey and his team executed the entire scope with lavish details, robust BWP Marine Plywood, and strict financial discipline.",
    rating: 5,
    highlights: ["4,000 Sq.Ft. Scale", "100% BWP Marine Plywood", "Financial Discipline"],
  },
];

export default function TestimonialsPage() {
  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <div className="pt-24 pb-20 bg-[#fafafc]">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements • PAN India Execution</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Endorsed by Discerning C-Suite Executives, Business Leaders &amp; Homeowners
          </h1>

          <p className="mt-6 text-slate-700 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Real experiences from clients who entrusted their grand villas, duplexes, and luxury residences to our single-window Design &amp; Contracting leadership.
          </p>

          {/* Excellence Metrics Ribbon */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5] block">
                {yearsOfExcellence}
              </span>
              <span className="text-xs text-slate-600 font-medium">Years of Excellence</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5] block">
                150+
              </span>
              <span className="text-xs text-slate-600 font-medium">Projects Delivered</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-600 block">
                100%
              </span>
              <span className="text-xs text-slate-600 font-medium">Zero Cost Escalation</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5] block">
                5-Year
              </span>
              <span className="text-xs text-slate-600 font-medium">Structural Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#3154A5]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#3154A5]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#3154A5] border border-blue-200">
                      {t.projectType}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-blue-200 mb-3 group-hover:text-[#3154A5]/40 transition-colors" />

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {t.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#3154A5] flex-shrink-0" />
                        <span>{t.clientName}</span>
                      </h3>
                      <p className="text-xs text-[#3154A5] font-semibold mt-0.5">{t.clientRole}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 font-medium mt-2">{t.projectScope}</p>
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                    <span>{t.location}</span>
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                    {t.executionModel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Callout */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
            Accountable Contracting
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Why Discerning Clients Choose Blue Space Interiors
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="text-sm font-bold text-slate-900">Zero Cost Escalations</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-light">
                Itemized, transparent Bill of Quantities locked upfront. No surprise variation bills or mid-project price revisions.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Award className="w-6 h-6 text-[#3154A5] mb-3" />
              <h3 className="text-sm font-bold text-slate-900">5-Year Structural Warranty</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-light">
                Direct written warranty for all modular joinery, hardware fixtures, and core contracting works across India.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Layers className="w-6 h-6 text-[#3154A5] mb-3" />
              <h3 className="text-sm font-bold text-slate-900">Single-Window Leadership</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-light">
                Led personally by Mr. Sunil Pandey. One accountable point of contact bridging design conceptualization and site execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
            Experience the Blue Space Standard for Your Property
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-base max-w-xl mx-auto font-light">
            Schedule a consultation at our registered office in Thane (West), Maharashtra or arrange a virtual review for your property anywhere in India.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md"
            >
              <span>Schedule Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 flex items-center gap-2 hover:border-[#3154A5] shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#3154A5]" />
              <span>Direct Desk: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
