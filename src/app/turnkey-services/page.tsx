import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  Award,
  Building2,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Turnkey Interior Designer Thane | Complete Turnkey Execution Solutions",
  description:
    "End-to-end turnkey interior solutions in Thane. Guaranteed 45-day key handover, zero cost escalations, 100% BWP Marine Plywood, and direct architectural execution.",
  keywords: [
    "turnkey interior designer Thane",
    "interior designer in Thane",
    "interior designers in Thane",
    "turnkey residential interiors Thane",
    "turnkey contractors Thane West",
    "full home turnkey interiors Hiranandani",
  ],
};

export default function TurnkeyServicesPage() {
  const steps = [
    {
      number: "01",
      title: "Laser Spatial Audit & Lifestyle Profiling",
      duration: "Days 1–3",
      description:
        "Principal Architect Abhishek Pandey personally inspects your Thane residence (in Hiranandani Estate, Raymond Ten X, Pokhran Road, or Majiwada). We deploy Leica 3D laser meters to capture exact slab-to-beam clearances, conduit positions, and window sun paths.",
      highlights: [
        "Sub-millimeter laser floor mapping",
        "Concealed electrical conduit & plumbing line tracing",
        "Acoustic noise audit from Thane road corridors",
      ],
    },
    {
      number: "02",
      title: "Photorealistic 4K VR & Locked BOQ Formulation",
      duration: "Days 4–10",
      description:
        "Experience your prospective home in 4K V-Ray before committing. You will see exact veneer grain directions, 3000K warm architectural lighting reflections, and stone veining. Concurrently, we formulate an itemized, locked Bill of Quantities (BOQ) with a zero-cost-escalation contract.",
      highlights: [
        "Photorealistic 4K virtual walkthroughs",
        "Physical material tray review (Italian marble, Blum fittings, veneers)",
        "Zero-cost escalation legal agreement signed",
      ],
    },
    {
      number: "03",
      title: "Factory CNC Pre-Fabrication in Cleanroom Plant",
      duration: "Days 11–28",
      description:
        "While wet civil work (tiling, gypsum framing, core cutting) starts quietly on site under society timing rules, all modular casework, wardrobes, and kitchen carcasses are cut on German Homag CNC beam saws at our Thane-Bhiwandi manufacturing plant.",
      highlights: [
        "100% Century Club Prime BWP Marine Plywood calibration",
        "PUR zero-joint edge banding resistant to 140°C heat & steam",
        "Blum Austria soft-close hardware factory mounted",
      ],
    },
    {
      number: "04",
      title: "Clean Modular Assembly & Architectural Finishes",
      duration: "Days 29–40",
      description:
        "Pre-finished modular units arrive on site in specialized protective transit crates. Our technicians assemble them with minimal sawing noise or dust. In parallel, our painters apply Asian Paints Royale Aspira or PU spray finishes, and our electricians integrate smart dimming presets.",
      highlights: [
        "Pre-laminated transit floor protection across common society lobbies",
        "Concealed Daikin/Mitsubishi air conditioning final commissioning",
        "Italian marble 8-stage diamond pad mirror polishing",
      ],
    },
    {
      number: "05",
      title: "320-Point Snag Audit & White-Glove Handover",
      duration: "Days 41–45",
      description:
        "Quality Head Siddham Jain runs our rigorous 320-point snag checklist—verifying drawer glide resistance, concealed pipe pressure, socket earthing, and door alignment. We perform complete industrial HEPA deep cleaning and hand over keys on Day 45.",
      highlights: [
        "Legally bound 45-day handover with ₹2,500/day penalty clause",
        "10-Year Direct Structural Warranty certificate issued",
        "Complete appliance manual and maintenance dossier provided",
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
            <span>Single-Point Architectural Accountability</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            The Definitive <span className="brand-gradient-text">Turnkey Interior Designer Thane</span> Solution
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            From raw concrete keys to an impeccably finished, move-in-ready luxury home in 45 days. One contract, guaranteed pricing, and zero headache.
          </p>

          {/* 5-Pillar Core Excellence Bar */}
          <div className="mt-12 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200 shadow-md p-4 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">10+ Years</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">of Excellence</span>
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
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-[11px] sm:text-xs leading-snug">End -To- End</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">Execution &amp; Management</span>
            </div>
            <div className="flex flex-col items-center text-center p-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Pan India</span>
              <a href="tel:+917738318383" className="text-[11px] text-[#3154A5] font-bold hover:underline mt-0.5">
                7738318383
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-1.5 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Direct Desk</span>
              <a href="mailto:bluespaceinteriors1@gmail.com" className="text-[10px] text-[#3154A5] font-semibold hover:underline mt-0.5 break-all">
                bluespaceinteriors1@gmail.com
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
            How we eliminate contractor delays and deliver high-ticket Thane residences on schedule.
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
              Why Senior Executives in Thane Select Our Turnkey Model
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-light">
              Clear accountability vs. the hidden risks of aggregator platforms and fragmented local contractors.
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
                  <th className="py-5 px-6">National Aggregators (Livspace/Bonito)</th>
                  <th className="py-5 px-6">Local Freelance Contractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Execution Timeline</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-emerald-700 font-semibold">
                    Strict 45 Days (₹2,500/day penalty backed)
                  </td>
                  <td className="py-4 px-6 text-slate-600">90 – 120 Days typical</td>
                  <td className="py-4 px-6 text-rose-600">Unpredictable (4–7 months)</td>
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
                    100% Century Club Prime BWP Marine Plywood
                  </td>
                  <td className="py-4 px-6 text-slate-600">Commercial MDF/HDF particle boards</td>
                  <td className="py-4 px-6 text-slate-600">Unverified commercial ply</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Hardware & Runners</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-[#3154A5] font-semibold">
                    Direct Austrian Blum & German Häfele OEM
                  </td>
                  <td className="py-4 px-6 text-slate-600">White-label basic hardware</td>
                  <td className="py-4 px-6 text-slate-600">Local unbranded runners</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Design Leadership</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-slate-900 font-semibold">
                    Sir J.J. College of Architecture Alumni
                  </td>
                  <td className="py-4 px-6 text-slate-600">Junior freelance coordinators</td>
                  <td className="py-4 px-6 text-slate-600">Unqualified local labor</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Warranty & Post-Possession</td>
                  <td className="py-4 px-6 bg-blue-50/50 border-x border-blue-200 text-emerald-700 font-semibold">
                    10-Year Direct Structural Warranty
                  </td>
                  <td className="py-4 px-6 text-slate-600">Tedious portal ticketing friction</td>
                  <td className="py-4 px-6 text-rose-600">Zero accountability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Turnkey Scope Packages */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
            Curated Offerings
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
            Tailored Turnkey Scopes for Thane Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                For 3 BHK Apartments
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                The Executive Turnkey
              </h3>
              <p className="text-xs text-slate-600 mt-2 font-light">
                Engineered for homes in Raymond Ten X, Lodha Amara, and Rosa Manhattan (1,200–1,600 sq.ft.).
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Full home modular carpentry & Saint-Gobain gypsum ceilings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  German acrylic modular kitchen with quartz counter & Blum Aventos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Concealed architectural lighting with Philips 3000K COBs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Master bedroom with walk-in wardrobe and ambient LED reveals
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
            >
              Request 3 BHK Proposal
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-[#3154A5] relative flex flex-col justify-between shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3154A5] text-white px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Most Selected
            </div>
            <div>
              <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                For 4 BHK & Penthouses
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                The Penthouse Signature
              </h3>
              <p className="text-xs text-slate-600 mt-2 font-light">
                Customized for Hiranandani Estate, Sheth Avalon, and Pokhran Road duplexes (2,200–4,000+ sq.ft.).
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Italian Statuario/Bottochino marble supply & diamond polishing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Acoustic fluted veneer panelling & hidden flush door system
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Daikin VRV central HVAC with linear architectural diffusers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Lutron/KNX smart automation for lighting, climate & shades
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Dedicated on-site senior architect & MEP supervisor
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
            >
              Request Penthouse Proposal
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                Kitchen & Wardrobe Suites
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                Precision Modular Upgrades
              </h3>
              <p className="text-xs text-slate-600 mt-2 font-light">
                Clean factory-fabricated upgrades with 21-day rapid on-site installation.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% German Blum hardware with lifetime functional warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Scratch-resistant anti-fingerprint nano-matte acrylic finishes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Integrated LED profile channels with smart infrared sensors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Rapid 21-day installation with zero on-site cutting dust
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
            >
              Request Modular Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Turnkey CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Secure Your 45-Day Possession Handover in Thane
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-light">
            Contact Principal Architect Abhishek Pandey today to review your possession schedule and lock your turnkey execution window.
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
