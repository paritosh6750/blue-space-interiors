import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
  Building2,
  MapPin,
  Mail,
  Briefcase,
  PhoneCall,
  Clock,
} from "lucide-react";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Turnkey Interior Design & Contracting | Blue Space Interiors | PAN India",
  description:
    "End-to-end turnkey interior design and contracting solutions across India for residential, commercial, and corporate properties. Guaranteed 120-day key handover, 5-year warranty, zero cost escalations, and direct contracting execution led by Mr. Sunil Pandey.",
  keywords: [
    "turnkey interior contracting",
    "turnkey interior design and contracting India",
    "commercial and residential interior contractors",
    "120 day handover guarantee",
    "5 year warranty interiors",
    "Blue Space Interiors Sunil Pandey",
    "zero cost escalation contracting",
  ],
};

export default function TurnkeyServicesPage() {
  const yearsOfExcellence = getYearsOfExcellence();

  const steps = [
    {
      number: "01",
      title: "Spatial Audit & Functional Requirements Profiling",
      duration: "Days 1–7",
      description:
        "Directed by Mr. Sunil Pandey, our engineering and contracting team coordinates a comprehensive spatial audit. We capture exact slab-to-beam clearances, conduit positions, column setbacks, and site constraints to ensure designs are 100% buildable from day one.",
      highlights: [
        "Laser floor and ceiling mapping with designer precision",
        "Concealed electrical conduit & plumbing line tracing",
        "HVAC, ventilation, and structural feasibility audit",
      ],
    },
    {
      number: "02",
      title: "3D Spatial Layouts & Locked BOQ Formulation",
      duration: "Days 8–20",
      description:
        "Experience your prospective interior in detailed 3D spatial models before physical construction commences. Concurrently, we formulate an itemized, fully locked Bill of Quantities (BOQ) with a strict zero-cost-escalation contract.",
      highlights: [
        "Detailed 3D visualizations and walk-through reviews",
        "Physical material sample board review (plywood, finishes, hardware)",
        "Zero-cost escalation legal agreement signed",
      ],
    },
    {
      number: "03",
      title: "Civil, MEP & Modular Offsite Fabrication",
      duration: "Days 21–65",
      description:
        "While wet civil works (masonry, tiling, gypsum framing, core cutting) proceed on site under gated society guidelines, all modular cabinetry, wardrobes, and commercial millwork are pre-fabricated offsite with precision machinery.",
      highlights: [
        "100% Boiling Water Proof (BWP) Marine Plywood calibration",
        "Durable heat-resistant zero-joint edge banding",
        "Original certified soft-close hardware",
      ],
    },
    {
      number: "04",
      title: "Clean Fitout Assembly & MEP Integration",
      duration: "Days 66–105",
      description:
        "Pre-finished modular units and interior components arrive on site for clean assembly. In parallel, our specialized crews complete acoustic false ceilings, concealed VRV/split air conditioning, designer electrical lighting, and wall treatments.",
      highlights: [
        "Heavy-duty protective floor covering across common lobbies and site",
        "Precision HVAC ducting and electrical testing",
        "Italian marble diamond pad restoration or premium flooring installation",
      ],
    },
    {
      number: "05",
      title: "Comprehensive Snag Audit & 120-Day Handover",
      duration: "Days 106–120",
      description:
        "Our site quality managers execute a rigorous snag checklist—verifying drawer glides, plumbing pressure, electrical socket earthing, and millimeter alignment. We perform industrial deep cleaning and hand over keys strictly on or before Day 120.",
      highlights: [
        "Guaranteed 120-day key handover protocol",
        "Comprehensive 5-Year Direct Structural Warranty issued",
        "Complete appliance, fixture, and maintenance dossier provided",
      ],
    },
  ];

  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen">
      {/* Services Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#f4f2ec] to-[#fbfaf7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Single-Point Design &amp; Contracting Accountability</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            The Definitive <span className="brand-gradient-text">Design &amp; Contracting</span> Solution
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            From raw concrete handover to a turnkey, impeccably finished property in 120 days. 
            Residential, commercial, and corporate fitouts across India with one locked contract and zero headaches.
          </p>

          {/* 5-Pillar Core Excellence Bar */}
          <div className="mt-12 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200 shadow-md p-4 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">{yearsOfExcellence}</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">of Excellence (Est. 2020)</span>
            </div>
            <div className="flex flex-col items-center text-center p-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-[#3154A5] text-xs sm:text-sm">150+ Projects</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">Completed</span>
            </div>
            <div className="flex flex-col items-center text-center p-1.5 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-[11px] sm:text-xs leading-snug">Design &amp; Contracting</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">End-To-End Execution</span>
            </div>
            <div className="flex flex-col items-center text-center p-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">PAN India Scope</span>
              <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="text-[11px] text-[#3154A5] font-bold hover:underline mt-0.5">
                {BRAND_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-1.5 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Direct Desk</span>
              <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[10px] text-[#3154A5] font-semibold hover:underline mt-0.5 break-all">
                {BRAND_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
            The Turnkey Blueprint
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
            Our 5-Stage Precision Execution Roadmap
          </h2>
          <p className="mt-2 text-slate-600 text-sm font-light">
            How our integrated Design &amp; Contracting framework eliminates delays across residential and commercial properties.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col lg:flex-row gap-6 lg:items-center justify-between"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-blue-300/80 font-mono flex-shrink-0">
                  {step.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#3154A5]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-col gap-2 flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 text-xs text-slate-600">
                {step.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 bg-[#f8f7f4] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Comparative Analysis
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Why Clients Select Our Design &amp; Contracting Model
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-light">
              Clear single-window accountability vs. aggregator platforms and unorganized standalone contractors.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm rounded-3xl bg-white border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 bg-[#fbfaf7]">
                  <th className="py-5 px-6">Criteria</th>
                  <th className="py-5 px-6 text-[#3154A5] font-bold bg-blue-50/70 border-x border-blue-200">
                    Blue Space Interiors
                  </th>
                  <th className="py-5 px-6">National Aggregator Platforms</th>
                  <th className="py-5 px-6">Standalone Local Contractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Execution Timeline</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-emerald-700 font-semibold">
                    Strict 120-Day Handover Guarantee
                  </td>
                  <td className="py-4 px-6 text-slate-600">180+ Days typical</td>
                  <td className="py-4 px-6 text-rose-600">Unpredictable (6+ months)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Budget Certainty</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-emerald-700 font-semibold">
                    100% Fixed BOQ (Zero Cost Escalation)
                  </td>
                  <td className="py-4 px-6 text-slate-600">15–30% Variation billings midway</td>
                  <td className="py-4 px-6 text-rose-600">Constant budget overshoots</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Core Materials</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-[#3154A5] font-semibold">
                    100% Boiling Water Proof (BWP) Marine Plywood
                  </td>
                  <td className="py-4 px-6 text-slate-600">Commercial MDF/HDF particle boards</td>
                  <td className="py-4 px-6 text-slate-600">Unverified commercial ply</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Hardware &amp; Fittings</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-[#3154A5] font-semibold">
                    Certified Original Architectural Hardware
                  </td>
                  <td className="py-4 px-6 text-slate-600">White-label basic hardware</td>
                  <td className="py-4 px-6 text-slate-600">Local unbranded runners</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Project Governance</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-slate-900 font-semibold">
                    Led by Sunil Pandey (Single Window)
                  </td>
                  <td className="py-4 px-6 text-slate-600">Junior freelance coordinators</td>
                  <td className="py-4 px-6 text-slate-600">Unqualified local labor</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Warranty &amp; Support</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-emerald-700 font-semibold">
                    5-Year Direct Structural Warranty
                  </td>
                  <td className="py-4 px-6 text-slate-600">Tedious app ticketing friction</td>
                  <td className="py-4 px-6 text-rose-600">Zero accountability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Turnkey CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Secure Your 120-Day Turnkey Handover
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-light">
            Contact Mr. Sunil Pandey today to review your property layout and lock your turnkey execution schedule.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="brand-button px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md"
            >
              <span>Schedule Turnkey Feasibility Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
