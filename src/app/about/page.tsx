import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  PhoneCall,
  Briefcase,
  Layers,
  BookOpen,
} from "lucide-react";
import { BRAND_CONFIG, getYearsOfExcellence } from "@/lib/constants";

export const revalidate = 0; // Fresh SSR data

export const metadata: Metadata = {
  title: "About Us | Blue Space Interiors | Turnkey Interior Design & Contracting PAN India",
  description:
    "Learn about Blue Space Interiors, established in 2020. Single-window turnkey interior design and contracting bridging the gap between designers and contractors. Guaranteed milestone delivery across India, 5-year warranty, led by Mr. Sunil Pandey.",
  keywords: [
    "turnkey interior design and contracting",
    "interior contracting firm India",
    "Sunil Pandey Blue Space Interiors",
    "turnkey fitout contractors",
    "commercial and residential interior contracting",
    "PAN India interior contractors",
  ],
};

export default function AboutPage() {
  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <div className="bg-[#fafafc] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-[#fafafc] border-b border-slate-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Integrated Design &amp; Contracting • Established 2020</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Designing Mastery with the{" "}
            <span className="brand-gradient-text">Top Interior Designers</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            Blue Space Interiors was founded to eliminate the fundamental disconnect that plagues the interior industry: 
            impractical concepts created by detached designers, and the lack of design understanding among standalone contractors. 
            We unify both under one disciplined roof with designer precision and strict milestone commitment.
          </p>
        </div>
      </section>

      {/* Brand Narrative & Core Metrics Ribbon */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Our Vision &amp; Inception
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Why We Built a Direct Design &amp; Contracting Model
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              <p>
                Established in <strong>2020</strong> under the leadership of <strong>Mr. Sunil Pandey</strong>, Blue Space Interiors was built from the ground up to solve an acute industry frustration. For years, clients undertaking residential, commercial, or corporate renovations faced a painful choice: hire an expensive design studio that produced unbuildable drawings with runaway budgets, or hire an unorganized local contractor who butchered design aesthetics and missed timelines by months.
              </p>
              <p>
                We realized that the real problem was not design alone or contracting alone—it was the <em>fracture</em> between the two. Designers lacked hands-on site contracting experience, while standalone contractors lacked design literacy.
              </p>
              <p>
                Blue Space Interiors provides complete <strong>Design &amp; Contracting</strong> with an emphasis on rigorous execution. By keeping spatial design, material sourcing, and site contracting under a single point of accountability, we ensure that every square foot drawn is constructible, every item in our BOQ is locked, and every handover is delivered within our committed milestone timeline backed by a <strong>5-year structural warranty</strong>.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-6">
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">{yearsOfExcellence}</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">of Excellence (Est. 2020)</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">150+</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Projects Delivered</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">100%</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Single-Window Execution</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">5-Year</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Direct Warranty</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="/projects/project-1-sanjay-sahoo-angul-villa.jpg"
                alt="Blue Space Interiors Turnkey Contracting Leadership"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 text-xs text-[#3154A5] font-bold uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-[#3154A5]" />
                  <span>Turnkey Leadership</span>
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 mt-1">
                  Mr. Sunil Pandey
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                  Head of Turnkey Contracting &amp; Client Advisory. Personally governing BOQ integrity, technical feasibility, and on-time site handovers across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Optimized Thought Leadership Blog / Article Section */}
      <section className="py-20 bg-[#f8f7f4] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#3154A5]" />
              <span>Industry Editorial &amp; Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Bridging the Divide: Why the Gap Between Designers &amp; Contractors Fails Projects
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-light">
              An inside analysis on how impractical design concepts and contractor communication breakdowns inflate budgets — and how integrated Design &amp; Contracting solves it.
            </p>
          </div>

          <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            {/* Part 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#3154A5] text-sm font-bold flex items-center justify-center border border-blue-200 flex-shrink-0">
                  01
                </span>
                The Designer Dilemma: Impractical Concepts Detached From Site Feasibility
              </h3>
              <p className="mt-3">
                In standard practice, interior designers often operate behind computer monitors. They create visually stunning 3D renderings featuring cantilevered stone islands, intricate false ceiling drops, and hidden flush doors. However, many designers work in conceptual silos without an in-depth understanding of on-site structural constraints, load-bearing beam profiles, ceiling clearances, and real-world material tolerances.
              </p>
              <p className="mt-3">
                The result? A set of aesthetic drawings that look breathtaking in a PDF portfolio but prove unbuildable on-site. When the physical site reveals ceiling beam drops, structural columns, or ducting shafts that the drawings overlooked, the client is forced into compromises, costly structural revisions, and budget variations.
              </p>
            </div>

            {/* Part 2 */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#3154A5] text-sm font-bold flex items-center justify-center border border-blue-200 flex-shrink-0">
                  02
                </span>
                The Contractor Trap: Lack of Design Comprehension and Aesthetic Sensitivity
              </h3>
              <p className="mt-3">
                On the opposite end of the spectrum are standalone local contractors. While they understand cement, plywood, and labor management, most contractors lack the design literacy to interpret nuanced drawings. Subtle details such as shadow-gap reveals, 3000K warm lighting reflections, bookmatched stone veining, and millimeter-calibrated hardware clearances are frequently misunderstood or dismissed as unnecessary complications.
              </p>
              <p className="mt-3">
                Without a designer actively directing site execution daily, standalone contractors substitute specified materials with generic alternatives, misalign groove details, and improvise on the fly. The final outcome bears little resemblance to what the homeowner or enterprise originally paid for.
              </p>
            </div>

            {/* Part 3 */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#3154A5] text-sm font-bold flex items-center justify-center border border-blue-200 flex-shrink-0">
                  03
                </span>
                Comprehensive Turnkey Scopes: Residential, Commercial &amp; Corporate
              </h3>
              <p className="mt-3">
                Whether executing a high-ticket penthouse, a duplex residence, a high-rise apartment, or a multi-floor commercial corporate workspace, the principles of integrated contracting remain the same: single-window accountability, transparent itemized costing, certified materials, and prompt possession.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Schedule a Private Discussion with Mr. Sunil Pandey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-light">
            Bring your floorplan to our registered office in Thane (West), Maharashtra or schedule a comprehensive virtual consultation from anywhere in India.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="brand-button px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md"
            >
              <span>Book Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wider text-slate-800 bg-white border border-slate-300 flex items-center gap-2 hover:border-[#3154A5] shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#3154A5]" />
              <span>Call Direct: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
