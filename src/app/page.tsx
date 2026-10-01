import Link from "next/link";
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
  Briefcase,
  Layers,
} from "lucide-react";

import { getSafeFeaturedProjects } from "@/lib/fallbackData";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export const revalidate = 0; // Fresh SSR data

export default async function HomePage() {
  const featuredProjects = await getSafeFeaturedProjects();
  const yearsOfExcellence = getYearsOfExcellence();

  // Schema.org JSON-LD for Turnkey Interior Design & Contracting Business
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BRAND_CONFIG.name,
    "alternateName": "Blue Space Turnkey Interior Design & Contracting",
    "description":
      "Blue Space Interiors is a premier turnkey interior design and contracting firm delivering complete end-to-end fitouts for residential, commercial, and corporate properties across India. Guaranteed 120-day handover, zero cost escalations, and single-window contracting execution led by Mr. Sunil Pandey.",
    "url": "https://bluespaceinteriors.com",
    "telephone": BRAND_CONFIG.phoneRaw,
    "email": BRAND_CONFIG.email,
    "priceRange": "₹₹₹₹",
    "taxID": BRAND_CONFIG.gstin,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thane West",
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
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Mumbai Metropolitan Region" },
      { "@type": "AdministrativeArea", "name": "Thane" },
      { "@type": "AdministrativeArea", "name": "Pune" },
      { "@type": "AdministrativeArea", "name": "Bengaluru" },
      { "@type": "AdministrativeArea", "name": "Delhi NCR" },
      { "@type": "AdministrativeArea", "name": "Hyderabad" },
    ],
    "sameAs": [
      "https://www.instagram.com/blue_space_interiors?stkn=d215ZWN2cTdqN3Fk",
      "https://www.facebook.com/108155958732682?ref=PROFILE_EDIT_xav_ig_profile_page_web",
      "https://www.threads.com/@blue_space_interiors?xmt=AQG0IGwV1GoBLDtI18XKZJ9Y2wucsVIJLH9P3JFgGawIpf0",
    ],
    "keywords":
      "turnkey interior contracting, interior design and contracting firm, residential and commercial interior fitouts, 120 day handover guarantee, Blue Space Interiors Sunil Pandey",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Blue Space Interiors guarantee a 120-day turnkey handover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through our integrated Design & Contracting methodology led by Mr. Sunil Pandey, we bridge the gap between design conceptualization and on-site contracting. With locked procurement timelines, in-house technical supervision, and structured milestone scheduling across civil, MEP, millwork, and finishes, we commit to a strict 120-day turnkey key handover with zero delays.",
        },
      },
      {
        "@type": "Question",
        "name": "What property types do you undertake for interior contracting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We execute turnkey interior design and contracting for all types of properties across India—including luxury apartments, penthouses, independent villas, commercial corporate offices, retail showrooms, and healthcare/hospitality environments.",
        },
      },
      {
        "@type": "Question",
        "name": "Why choose Blue Space Interiors over national aggregator platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aggregator platforms operate as sales brokers charging 30–40% commissions while outsourcing execution to unvetted third parties. Blue Space Interiors provides direct single-window Design & Contracting led by Mr. Sunil Pandey with a 100% Zero Cost Escalation guarantee, fixed itemized BOQ, certified materials, and dedicated site supervision.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you provide turnkey contracting services across PAN India locations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Blue Space Interiors provides turnkey design and contracting services across India, mobilizing specialized execution crews, project managers, and supply chain partners for residential and commercial fitouts nationwide.",
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
            alt="Premier Turnkey Interior Design & Contracting - Blue Space Interiors PAN India"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf7] via-[#fbfaf7]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Turnkey Interior Design &amp; Contracting • PAN India Execution</span>
          </div>

          {/* Primary Target Keyword in H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Premier Turnkey <span className="brand-gradient-text">Interior Design &amp; Contracting</span> Firm
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            Eliminate the costly divide between impractical designers and disconnected contractors. 
            We engineer and execute complete turnkey fitouts for <strong className="text-slate-900 font-semibold">all kinds of properties</strong>—residential, 
            commercial, corporate, and retail spaces across India—with a strict{" "}
            <strong className="text-slate-900 font-semibold">{BRAND_CONFIG.handoverGuarantee}</strong>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Zero Cost Escalation Guarantee
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Clock className="w-4 h-4 text-[#3154A5]" />
              Guaranteed 120-Day Handover Protocol
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Layers className="w-4 h-4 text-[#3154A5]" />
              Integrated Design &amp; Contracting Execution
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <span>Schedule Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 hover:border-[#3154A5] shadow-sm transition-all"
            >
              Explore Projects
            </Link>
          </div>

          {/* 5-Pillar Core Excellence Ribbon */}
          <div className="mt-14 max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200 shadow-xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-sm sm:text-base">{yearsOfExcellence}</span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium">of Excellence (Est. 2020)</span>
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
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm leading-snug">Design &amp; Contracting</span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium">End-To-End Single Window</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">PAN India Services</span>
              <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="text-xs text-[#3154A5] font-bold hover:underline mt-0.5">
                {BRAND_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-2 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-2 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">Direct Desk</span>
              <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[11px] text-[#3154A5] font-semibold hover:underline mt-0.5 break-all">
                {BRAND_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target SEO & Competitive Positioning: Turnkey Design & Contracting vs Aggregators */}
      <section className="py-24 bg-[#f8f7f4] border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              The Turnkey Advantage
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Why Clients Choose Our <span className="brand-gradient-text">Design &amp; Contracting</span> Model
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              In the interior industry, clients consistently suffer from a fundamental disconnect: standalone designers produce impractical concepts detached from site realities, while separate unorganized contractors lack design understanding. Blue Space Interiors bridges this gap by unifying Design &amp; Contracting under single-window management.
            </p>
          </div>

          {/* 3-Way Detailed Comparison Matrix */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blue Space Interiors */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#3154A5] shadow-xl relative transform lg:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3154A5] text-white px-4 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Design &amp; Contracting Firm
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2 mt-2">
                  <Sparkles className="w-5 h-5 text-[#3154A5]" />
                  Blue Space Interiors
                </h3>
                <p className="text-xs text-[#3154A5] font-bold mt-1">
                  Single-Window Leadership by Sunil Pandey • Even More of Contracting
                </p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>120-Day Handover Guarantee:</strong> Legally backed milestone schedule with structured phase management.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>100% Fixed BOQ:</strong> Itemized contracting quote with zero cost escalation protection. No surprise bills.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>All Property Categories:</strong> Comprehensive turnkey execution for residential, commercial, office, and retail projects.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Certified Materials:</strong> Premium Boiling Water Proof (BWP) Marine Plywood and genuine branded architectural hardware.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Single-Window Accountability:</strong> Led directly by Sunil Pandey, ensuring design vision matches site contracting flawlessly.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="brand-button w-full text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
                >
                  Book Free Project Feasibility
                </Link>
              </div>
            </div>

            {/* National Aggregator Platforms */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-800">
                  National Aggregator Platforms
                </h3>
                <p className="text-xs text-slate-500 mt-1">Broker Aggregator &amp; Commission Model</p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Broker Overhead:</strong> 30–40% sales margin markups while execution is outsourced to third-party sub-contractors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Budget Escalations:</strong> Low initial catalog estimates followed by 20–35% variation invoices for site works.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>High Designer Churn:</strong> Freelance coordinators change mid-project, breaking continuity and aesthetic intent.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Possession Delays:</strong> Fragmented supply chains and vendor finger-pointing cause prolonged handover delays.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                High overhead sales broker model
              </div>
            </div>

            {/* Local Unorganized Contractors */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-800">
                  Standalone Local Contractors
                </h3>
                <p className="text-xs text-slate-500 mt-1">Fragmented Labor Without Design Fluency</p>

                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Lack of Design Comprehension:</strong> Inability to interpret detailed architectural drawings, resulting in aesthetic failure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Zero 3D Visualization:</strong> Work executed based on verbal assumptions and rough hand sketches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Material Inconsistency:</strong> Substandard commercial ply substituted without client awareness.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>No Written Warranty:</strong> Once final payments are released, post-handover support is non-existent.</span>
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
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Completed Projects by Premier <span className="brand-gradient-text">Design &amp; Contracting</span> Firm
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-xl font-light">
                Explore real completed residences, commercial spaces, and bespoke fitouts delivered within our 120-day turnkey protocol across India.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3154A5] hover:text-slate-900 transition-colors"
            >
              <span>Explore Projects</span>
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
                      120-Day Delivery Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects Section - Exactly Oberoi Sky City (32), Oberoi Eternia & Enigma (26), Piramal Vaikunth (25), Hiranandani (10) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Proven Project Footprint
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Flagship Project Deliveries Across Premier Developments
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light">
              Our single-window contracting teams have successfully delivered dozens of high-value turnkey interior fitouts across leading gated developments and commercial properties.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {BRAND_CONFIG.flagshipCommunities.map((loc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-center shadow-sm"
              >
                <Building2 className="w-7 h-7 text-[#3154A5] mx-auto mb-3" />
                <h4 className="text-sm sm:text-base font-semibold text-slate-900">{loc.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{loc.location}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-emerald-50 text-xs text-emerald-700 font-bold border border-emerald-200">
                  {loc.projectCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Price Estimation Guide */}
      <section className="py-20 bg-[#f8f7f4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase flex items-center justify-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              Transparent Budgeting
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Turnkey Interior Cost Benchmark for All Properties
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-light">
              We eliminate hidden charges through guaranteed itemized BOQs. Here is the realistic turnkey cost breakdown for residences, penthouses, and commercial fitouts.
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
                  Suitable for 750–950 sq.ft. carpet area.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    BWP Marine Ply modular kitchen with branded hardware
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    2 Complete bedroom wardrobe units with PU finish
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Gypsum false ceiling with warm ambient COB lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Premium Royale Luxury paint across all rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    120-Day Handover Guarantee
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
                Most Selected
              </div>
              <div>
                <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                  3 BHK / 4 BHK Luxury Fitout
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-slate-900">₹28L – ₹48L</span>
                  <span className="text-xs text-slate-500">all-inclusive</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 font-light">
                  Suitable for 1,200–1,800 sq.ft. carpet area.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Acrylic/PU modular kitchen with quartz counter &amp; lift-up systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Master walk-in wardrobe with glass profiles &amp; LED reveals
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Acoustic wall panelling &amp; hidden flush door system
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Precision marble floor restoration or imported wooden flooring
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Strict 120-day guaranteed key handover
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
              >
                Inquire Luxury Plan
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3154A5] uppercase tracking-wider">
                  Penthouse, Villa &amp; Commercial Scopes
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-slate-900">₹50L – ₹95L+</span>
                  <span className="text-xs text-slate-500">bespoke scope</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-light">
                  Customized for 2,200–5,000+ sq.ft. penthouses, villas, or commercial corporate offices.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Italian marble supply, laying &amp; 8-stage diamond abrasive polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Central VRV HVAC ducting with linear diffusers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Smart automation for lighting, climate &amp; security
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Full commercial MEP, conference audio-visual &amp; civil contracting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Dedicated senior project manager stationed on site
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 brand-button text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider block shadow-md"
              >
                Inquire Bespoke Scope
              </Link>
            </div>
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
              Endorsed by Discerning C-Suite Executives, Business Leaders &amp; Homeowners
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vikramaditya Deshmukh",
                title: "VP, Cloud Engineering",
                residence: "4.5 BHK Duplex Penthouse",
                quote:
                  "As an IT executive with long overseas work hours, I had zero bandwidth to coordinate between independent designers and unorganized contractors. Sunil Pandey and the Blue Space contracting team governed everything down to the millimeter. The concealed VRV air-conditioning and custom kitchen are magnificent. They handed over keys ahead of schedule within the 120-day commitment with zero budget inflation.",
                rating: 5,
              },
              {
                name: "Dr. Rohini & Dr. Sanjeev Sawant",
                title: "Consultant Radiologists",
                residence: "3 BHK Residence Fitout",
                quote:
                  "We previously lost months of peace with an aggregator platform that gave an initial low estimate and then billed 30% extra under variation clauses. Blue Space Interiors gave us a locked BOQ, adhered to gated community timing rules, and delivered top-tier acoustic ceilings and walk-in closets. Truly dependable single-window contracting.",
                rating: 5,
              },
              {
                name: "Manish Khandelwal",
                title: "Managing Director, Logistics Firm",
                residence: "Corporate Office & Executive Suite",
                quote:
                  "Blue Space Interiors executed our commercial workspace and private executive suite with exceptional precision. The seamless glass partitions, acoustic meeting rooms, and custom reception counter reflect pristine craftsmanship. Their fixed BOQ and proactive site coordination eliminated all contracting stress.",
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
              Frequently Asked Questions About <span className="brand-gradient-text">Turnkey Design &amp; Contracting</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                How does Blue Space Interiors guarantee a 120-day turnkey handover?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Through our integrated Design &amp; Contracting methodology led by Mr. Sunil Pandey, we bridge the gap between design conceptualization and on-site contracting. With locked procurement timelines, in-house technical supervision, and structured milestone scheduling across civil, MEP, millwork, and finishes, we commit to a strict 120-day turnkey key handover with zero delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                What kind of properties do you execute interior contracting for?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                We handle all categories of properties—including luxury apartments, sky villas, penthouses, commercial corporate offices, retail showrooms, and healthcare/hospitality properties. Our contracting crews are equipped for both large-scale commercial fitouts and bespoke residential transformations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                Why choose Blue Space Interiors over national aggregator platforms?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Aggregator platforms operate as sales brokers charging 30–40% commissions while outsourcing execution to unvetted third parties. Blue Space Interiors provides direct single-window Design &amp; Contracting led by Mr. Sunil Pandey with a 100% Zero Cost Escalation guarantee, fixed itemized BOQ, certified materials, and dedicated site supervision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-slate-200">
              <h3 className="text-base font-serif font-semibold text-slate-900">
                Do you provide turnkey contracting services across PAN India locations?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Yes. While our registered office is in Thane (West), Maharashtra, we execute turnkey interior design and contracting projects across India. Our project management and specialized contracting teams mobilize nationwide to deliver consistent quality and strict SLA adherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
            Transform Your Property with Single-Window Contracting
          </h2>
          <p className="mt-4 text-slate-700 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Schedule a private consultation at our registered office in Thane (West), Maharashtra or request a virtual property review from anywhere in India. Receive a customized 3D spatial layout and fixed-item BOQ within 4 business hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg"
            >
              <span>Book Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 flex items-center gap-2 hover:border-[#3154A5] shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#3154A5]" />
              <span>Direct Desk: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
