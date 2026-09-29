import Link from "next/link";
import prisma from "@/lib/prisma";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Award,
  Building2,
  PhoneCall,
  Star,
  Quote,
  HelpCircle,
  Calculator,
  Check,
  MapPin,
  Mail,
} from "lucide-react";

import { getSafeFeaturedProjects } from "@/lib/fallbackData";

export const revalidate = 0; // Fresh SSR data

export default async function HomePage() {
  const featuredProjects = await getSafeFeaturedProjects();

  // Local Business & FAQ Schema.org JSON-LD for Thane SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Blue Space Interiors",
    "alternateName": "Blue Space Turnkey Interior Designer Thane",
    "description":
      "Blue Space Interiors is Thane's premier turnkey architectural and interior design studio. Specializing in bespoke 3 BHK, 4 BHK, and penthouse residences across Hiranandani Estate, Pokhran Road, Majiwada, and Kolshet Road. Guaranteed 45-day handover and 10-year warranty.",
    "url": "https://bluespaceinteriors.com",
    "telephone": "+917738318383",
    "email": "bluespaceinteriors1@gmail.com",
    "priceRange": "₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1507 on 15th, The Capital Tree, Pokhran Road No. 2",
      "addressLocality": "Thane West",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2285,
      "longitude": 72.9734,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00",
      },
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Thane" },
      { "@type": "AdministrativeArea", "name": "Thane West" },
      { "@type": "AdministrativeArea", "name": "Hiranandani Estate" },
      { "@type": "AdministrativeArea", "name": "Pokhran Road No. 1 and 2" },
      { "@type": "AdministrativeArea", "name": "Majiwada Junction" },
      { "@type": "AdministrativeArea", "name": "Kolshet Road" },
      { "@type": "AdministrativeArea", "name": "Ghodbunder Road" },
      { "@type": "AdministrativeArea", "name": "Vasant Vihar" },
    ],
    "sameAs": [
      "https://www.instagram.com/blue_space_interiors?stkn=d215ZWN2cTdqN3Fk",
      "https://www.facebook.com/108155958732682?ref=PROFILE_EDIT_xav_ig_profile_page_web",
      "https://www.threads.com/@blue_space_interiors?xmt=AQG0IGwV1GoBLDtI18XKZJ9Y2wucsVIJLH9P3JFgGawIpf0"
    ],
    "keywords":
      "interior designer in Thane, interior designers in Thane, turnkey interior designer Thane, luxury interior designers Thane West, Hiranandani Estate turnkey interiors",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Blue Space Interiors guarantee a 45-day turnkey handover in Thane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike aggregators who rely on on-site manual carpentry, Blue Space Interiors manufactures 85% of modular cabinetry, wardrobes, and kitchen casework offsite in our precision CNC facility in the Thane-Bhiwandi corridor. While civil, tiling, and false ceiling works happen at your flat, carpentry is pre-finished with German PUR edge-banding. On-site installation takes only 10 to 14 days, allowing us to legally commit to a 45-day key handover with a ₹2,500/day penalty guarantee.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the typical turnkey interior cost per square foot in Thane for a 3 BHK or 4 BHK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turnkey interior execution in Thane typically ranges between ₹1,800 to ₹3,500 per sq.ft. depending on material specifications. A premium 3 BHK (1,400–1,800 sq.ft.) in societies like Raymond Ten X or Lodha Amara averages ₹28L to ₹42L for complete turnkey scope including modular kitchen, wardrobes, false ceilings, lighting, and civil works. A luxury 4 BHK or penthouse in Hiranandani Estate with Italian marble and Daikin VRV HVAC averages ₹50L to ₹80L.",
        },
      },
      {
        "@type": "Question",
        "name": "Why choose Blue Space Interiors over aggregators like Livspace or Bonito Designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aggregators operate on a broker model—they take 30–40% sales commissions and outsource your home to third-party sub-contractors and freelance designers who frequently change. Blue Space Interiors provides direct execution led by Principal Architect Abhishek Pandey (Sir J.J. College of Architecture) and VP Operations Panya Bangari (VJTI). We offer a 100% Zero Cost Escalation guarantee with fixed BOQ, 10-year direct warranty, and 100% BWP Marine Plywood instead of particle board.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you assist with Thane society NOCs and working hour permissions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Gated communities in Thane such as Hiranandani Estate, Raymond Ten X, and Sheth Avalon have strict interior work rules (10 AM to 6 PM, zero drilling during lunch hours, goods elevator protection). Our dedicated liaison team manages society drawings, debris disposal NOCs, floor protection sheets, and security gate passes autonomously.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fbfaf7] via-white to-[#f4f2ec]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="Premier Turnkey Interior Designer in Thane - Blue Space Interiors"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf7] via-[#fbfaf7]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Thane&apos;s Highest-Rated Architectural Turnkey Firm</span>
          </div>

          {/* Primary Target Keyword in H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            The Premier <span className="brand-gradient-text">Interior Designer in Thane</span> for Luxury Residences
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            Eliminate fragmented contractors, budget creep, and agonizing possession delays. We design and execute 
            architectural-grade turnkey transformations for premium 3 BHK, 4 BHK, and penthouse homes across 
            Hiranandani Estate, Pokhran Road, and Majiwada with a strictly enforced{" "}
            <strong className="text-slate-900 font-semibold">45-day handover guarantee</strong>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Zero Cost Escalation Guarantee
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Clock className="w-4 h-4 text-[#3154A5]" />
              Guaranteed 45-Day Handover Protocol
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Award className="w-4 h-4 text-[#3154A5]" />
              10-Year Direct Structural Warranty
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <span>Schedule VIP Design Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 hover:border-[#3154A5] shadow-sm transition-all"
            >
              Explore Thane Projects
            </Link>
          </div>

          {/* 5-Pillar Core Excellence Ribbon */}
          <div className="mt-14 max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200 shadow-xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-sm sm:text-base">10+ Years</span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium">of Excellence</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-[#3154A5] text-sm sm:text-base">150+ Projects</span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium">Delivered to Date</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm leading-snug">End -To- End</span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium">Project Management &amp; Execution</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Pan India</span>
              <a href="tel:+917738318383" className="text-xs text-[#3154A5] font-bold hover:underline mt-0.5">
                7738318383
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-2 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Direct Desk</span>
              <a href="mailto:bluespaceinteriors1@gmail.com" className="text-[11px] text-[#3154A5] font-semibold hover:underline mt-0.5 break-all">
                bluespaceinteriors1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target SEO & Competitive Positioning: Turnkey vs Livspace / Bonito */}
      <section className="py-24 bg-[#f8f7f4] border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              The Turnkey Advantage
            </span>
            {/* Target Keyword in H2 */}
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Why Discerning Homeowners Choose Our <span className="brand-gradient-text">Turnkey Interior Designer Thane</span> Model
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Aggregator companies like Livspace, Bonito Designs, and HomeLane operate on an outsourced broker model. They charge 30–40% platform margins while sub-contracting your expensive apartment to temporary third-party vendors. Blue Space Interiors delivers direct architectural engineering with in-house accountability.
            </p>
          </div>

          {/* 3-Way Detailed Comparison Matrix */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blue Space Interiors */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#3154A5] shadow-xl relative transform lg:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3154A5] text-white px-4 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Direct Architectural Firm
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2 mt-2">
                  <Sparkles className="w-5 h-5 text-[#3154A5]" />
                  Blue Space Interiors
                </h3>
                <p className="text-xs text-[#3154A5] font-bold mt-1">
                  Sir J.J. College & VJTI Leadership • Zero Subcontracting
                </p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>45-Day Handover Guarantee:</strong> Legally backed with ₹2,500/day penalty clause for delays.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>100% Fixed BOQ:</strong> Itemized quote with zero cost escalation protection. No surprise bills.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Certified Materials:</strong> Century Club Prime & Greenply BWP Marine Plywood with genuine Austrian Blum hardware.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>In-House Factory Precision:</strong> 18,000 sq.ft. cleanroom pre-fabrication in Thane corridor eliminates on-site dust.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Direct Principal Access:</strong> Direct supervision by Principal Architect Abhishek Pandey.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="brand-button w-full text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
                >
                  Book Free Feasibility Study
                </Link>
              </div>
            </div>

            {/* National Aggregators */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-800">
                  National Aggregators
                </h3>
                <p className="text-xs text-slate-500 mt-1">Livspace, Bonito Designs, HomeLane</p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>High Design Churn:</strong> Junior freelance designers with high turnover; multiple handover handoffs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Budget Creep:</strong> Initial quotes exclude civil, electrical, and ducting, resulting in 20–35% escalation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Catalog Constraints:</strong> Modular box sizes that fail to seamlessly accommodate Thane high-rise beam drops.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>90–120 Day Delays:</strong> Fragmented supply chains and third-party vendor blaming causes prolonged possession delays.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                High overhead sales commission model
              </div>
            </div>

            {/* Local Unorganized Contractors */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-800">
                  Local Freelance Carpenters
                </h3>
                <p className="text-xs text-slate-500 mt-1">Fragmented Local Labor & Sub-vendors</p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Zero 3D Modeling:</strong> Work proceeds on hand-drawn sketches with frequent aesthetic misunderstandings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Material Substitution Risk:</strong> Commercial grade ply substituted for promised marine ply with zero traceability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Prolonged Dust & Noise:</strong> Manual sawing in flat creates friction with Thane society management.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>No Written Warranty:</strong> Once final settlement is collected, response for repairs becomes impossible.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                High financial and execution risk
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase with Target Keyword */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
                Proven Handover Excellence
              </span>
              {/* Target Keyword in H2 */}
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Completed Residences by Top <span className="brand-gradient-text">Interior Designers in Thane</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-xl font-light">
                Explore real completed apartments in Hiranandani Estate, Raymond Ten X, and Majiwada, delivered within 45 days.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3154A5] hover:text-slate-900 transition-colors"
            >
              <span>View All Thane Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#fcfbf9] rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-blue-200 text-[11px] font-bold text-[#3154A5] shadow-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white font-mono shadow-sm">
                    {project.sqft.toLocaleString()} Sq.Ft.
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#3154A5] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#3154A5] mt-1 font-semibold">{project.locality}</p>
                    <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-light">
                      {project.scope}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Handover Protocol:</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      45-Day Delivery Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Thane Price Estimation Guide */}
      <section className="py-20 bg-[#f8f7f4] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase flex items-center justify-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              Transparent Budgeting
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Turnkey Interior Cost Benchmark for Thane Homes
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-light">
              We eliminate hidden charges through guaranteed itemized BOQs. Here is the realistic cost breakdown for Thane gated societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                  2 BHK Premium Turnkey
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-slate-900">₹16L – ₹24L</span>
                  <span className="text-xs text-slate-500">all-inclusive</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-light">
                  Suitable for 750–950 sq.ft. carpet area (e.g., Lodha Amara, Rustomjee Urbania).
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    BWP Marine Ply modular kitchen with Blum hardware
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    2 Complete bedroom wardrobe units with PU finish
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Gypsum false ceiling with Philips 3000K COB lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Asian Paints Royale Luxury paint across all rooms
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
              >
                Inquire 2 BHK Plan
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-[#3154A5] shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3154A5] text-white px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Thane Executive Standard
              </div>
              <div>
                <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                  3 BHK Luxury Turnkey
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-slate-900">₹28L – ₹42L</span>
                  <span className="text-xs text-slate-500">all-inclusive</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 font-light">
                  Suitable for 1,200–1,600 sq.ft. carpet area (e.g., Raymond Ten X, Rosa Manhattan).
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    German acrylic kitchen with quartz counter & Blum Aventos
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Master walk-in wardrobe with glass profiles & LED reveals
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Acoustic wall panelling & hidden flush door system
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Diamond marble floor restoration or imported wooden flooring
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Strict 45-day guaranteed key handover
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
              >
                Inquire 3 BHK Plan
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                  4 BHK / Penthouse Signature
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-slate-900">₹50L – ₹85L+</span>
                  <span className="text-xs text-slate-500">bespoke scope</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-light">
                  Suitable for 2,200–4,000+ sq.ft. (e.g., Hiranandani Estate, Sheth Avalon).
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Italian Statuario/Bottochino marble supply & laying
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Daikin VRV central HVAC with magnetic linear diffusers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Lutron smart automation for lighting, climate & shades
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Dedicated senior architect stationed on site
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
              >
                Inquire Penthouse Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Localities in Thane */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Thane Society Specialists
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Expertise Across Thane’s Top Gated Developments
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light">
              We manage all society NOC documentation, freight elevator bookings, and zero-noise timing protocols.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                society: "Hiranandani Estate",
                location: "Ghodbunder Road",
                deliveries: "52+ Completed Residences",
              },
              {
                society: "Raymond Ten X",
                location: "Pokhran Road No. 2",
                deliveries: "38+ Turnkey Fitouts",
              },
              {
                society: "Sheth Avalon",
                location: "Majiwada Junction",
                deliveries: "24+ Luxury Penthouses",
              },
              {
                society: "Lodha Amara",
                location: "Kolshet Road",
                deliveries: "44+ Bespoke Apartments",
              },
            ].map((loc, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#fbfaf7] border border-slate-200 hover:border-blue-400 transition-all text-center shadow-sm"
              >
                <Building2 className="w-6 h-6 text-[#3154A5] mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-slate-900">{loc.society}</h4>
                <p className="text-[11px] text-slate-500">{loc.location}</p>
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[10px] text-emerald-700 font-semibold border border-emerald-200">
                  {loc.deliveries}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Verified Client Endorsements */}
      <section className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Client Testimonials
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
              Endorsed by Thane&apos;s Senior Executives & Doctors
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vikramaditya Deshmukh",
                title: "VP, Cloud Engineering (Capgemini)",
                residence: "4.5 BHK Duplex, Rodas Enclave, Hiranandani Estate",
                quote:
                  "As an IT executive with long overseas work hours, I had zero bandwidth to deal with contractors or purchase plywood. Abhishek Pandey and Panya Bangari managed everything down to the millimeter. The concealed Daikin VRV air-conditioning and German kitchen are magnificent. They handed over keys on Day 44 with zero budget inflation.",
                rating: 5,
              },
              {
                name: "Dr. Rohini & Dr. Sanjeev Sawant",
                title: "Consultant Radiologists, Jupiter Hospital",
                residence: "3 BHK Residence, Raymond Ten X Habitat, Pokhran Rd 2",
                quote:
                  "We previously lost months of peace with an aggregator who gave an initial low estimate and then billed 30% extra under variation clauses. Blue Space gave us a locked BOQ, adhered to society rules, and delivered top-tier acoustic ceilings and walk-in closets. Truly Thane's best turnkey team.",
                rating: 5,
              },
              {
                name: "Manish Khandelwal",
                title: "Managing Director, Khandelwal Logistics",
                residence: "5 BHK Duplex Villa, Pokhran Road No. 1",
                quote:
                  "The teak cantilever staircase and backlit quartzite bar island are showstoppers for our evening guests. Seeing our 3D render match reality down to the exact lighting temperature was incredible. Their 10-year warranty gives genuine peace of mind.",
                rating: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#3154A5] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3154A5]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-3" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-[#3154A5] font-medium">{t.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t.residence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ Section with Schema Markup */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Answered Questions
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
              Questions About Hiring an <span className="brand-gradient-text">Interior Designer in Thane</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                How does Blue Space Interiors guarantee a 45-day turnkey handover in Thane?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Unlike aggregators who rely on on-site manual carpentry, Blue Space Interiors manufactures 85% of modular cabinetry, wardrobes, and kitchen casework offsite in our precision CNC facility in the Thane-Bhiwandi corridor. While civil, tiling, and false ceiling works happen at your flat, carpentry is pre-finished with German PUR edge-banding. On-site installation takes only 10 to 14 days, allowing us to legally commit to a 45-day key handover with a ₹2,500/day penalty guarantee.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                What is the typical turnkey interior cost per square foot in Thane?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Turnkey interior execution in Thane typically ranges between ₹1,800 to ₹3,500 per sq.ft. depending on material specifications. A premium 3 BHK (1,400–1,800 sq.ft.) in societies like Raymond Ten X or Lodha Amara averages ₹28L to ₹42L for complete turnkey scope including modular kitchen, wardrobes, false ceilings, lighting, and civil works. A luxury 4 BHK or penthouse in Hiranandani Estate with Italian marble and Daikin VRV HVAC averages ₹50L to ₹80L.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                Why choose Blue Space Interiors over aggregators like Livspace or Bonito Designs?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Aggregators operate on a broker model—they take 30–40% sales commissions and outsource your home to third-party sub-contractors and freelance designers who frequently change. Blue Space Interiors provides direct execution led by Principal Architect Abhishek Pandey (Sir J.J. College of Architecture) and VP Operations Panya Bangari (VJTI). We offer a 100% Zero Cost Escalation guarantee with fixed BOQ, 10-year direct warranty, and 100% BWP Marine Plywood instead of particle board.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                Do you assist with Thane society NOCs and working hour permissions?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Yes. Gated communities in Thane such as Hiranandani Estate, Raymond Ten X, and Sheth Avalon have strict interior work rules (10 AM to 6 PM, zero drilling during lunch hours, goods elevator protection). Our dedicated liaison team manages society drawings, debris disposal NOCs, floor protection sheets, and security gate passes autonomously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
            Transform Your Thane Flat into an Architectural Masterpiece
          </h2>
          <p className="mt-4 text-slate-700 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Schedule a private consultation at our Pokhran Road studio or request a property evaluation. Receive a customized 3D spatial layout and fixed-item BOQ within 4 business hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg"
            >
              <span>Book Private Design Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917738318383"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 flex items-center gap-2 hover:border-[#3154A5] shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#3154A5]" />
              <span>Direct Studio Desk: +91 77383 18383</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
