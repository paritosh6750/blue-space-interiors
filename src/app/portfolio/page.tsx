import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Building,
  ShieldCheck,
  Mail,
} from "lucide-react";

export const revalidate = 0; // Fresh SSR data

export const metadata: Metadata = {
  title: "Portfolio | Blue Space Interiors | Premier Interior Designers in Thane",
  description:
    "Explore luxury residential interior design case studies across Thane West: Hiranandani Estate, Pokhran Road, Raymond Ten X, and Majiwada. 100% turnkey execution in 45 days.",
  keywords: [
    "interior designer in Thane",
    "interior designers in Thane",
    "turnkey interior designer Thane",
    "Hiranandani Estate interior design projects",
    "Raymond Ten X interior designers",
    "luxury apartment portfolio Thane",
  ],
};

export default async function PortfolioPage() {
  const projects = await prisma.project.findMany({
    orderBy: { completionDate: "desc" },
  });

  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen">
      {/* Portfolio Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#f4f2ec] to-[#fbfaf7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Documented Handover Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Curated Residences by Leading <span className="brand-gradient-text">Interior Designers in Thane</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            Witness how architectural precision, German joinery, and natural stone combine into timeless residences across Thane’s most iconic societies.
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
                <Building className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-[#3154A5] text-xs sm:text-sm">150+ Projects</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">Portfolio Archive</span>
            </div>
            <div className="flex flex-col items-center text-center p-1.5 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3154A5] mb-1.5 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-slate-900 text-[11px] sm:text-xs leading-snug">End -To- End</span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">Project Execution</span>
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

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {projects.map((project, index) => {
            let highlightsArray: string[] = [];
            try {
              highlightsArray = JSON.parse(project.highlights);
            } catch {
              highlightsArray = [project.highlights];
            }

            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Project Image Column */}
                <div
                  className={`lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden group ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200 text-xs font-bold text-[#3154A5] shadow-sm">
                    {project.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 shadow-md">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-300" />
                      {project.locality}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-white font-semibold">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      {project.sqft.toLocaleString()} Sq.Ft. Carpet
                    </span>
                  </div>
                </div>

                {/* Project Info Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between h-full py-2 ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <div>
                    <div className="inline-block text-[11px] font-bold text-[#3154A5] uppercase tracking-wider mb-2">
                      Scope: {project.scope.split(",")[0]}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      A complete architectural overhaul designed and executed within our 45-day turnkey SLA. All modular cabinetry was manufactured off-site in our Thane-Bhiwandi facility using 100% Century Club Prime BWP Marine Plywood and Austrian Blum hardware.
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Key Architectural Features & Specifications
                      </h4>
                      <ul className="space-y-2.5">
                        {highlightsArray.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-700 font-light"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Handover Date</span>
                      <span className="text-xs font-semibold text-slate-800">
                        {new Date(project.completionDate).toLocaleDateString("en-IN", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="brand-button px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                    >
                      <span>Inquire Similar Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Have a Flat or Penthouse Possession Coming Up in Thane?
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-light">
            Bring your builder layout to Principal Architect Abhishek Pandey for a turnkey spatial audit and 3D concept before taking possession.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="brand-button px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md"
            >
              <span>Request Floorplan Feasibility</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
