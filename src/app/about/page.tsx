import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Compass,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users2,
  Building,
  Factory,
  GraduationCap,
} from "lucide-react";

export const revalidate = 0; // Fresh SSR data

export const metadata: Metadata = {
  title: "About Us | Blue Space Interiors | Premier Architectural & Turnkey Studio",
  description:
    "Learn about Blue Space Interiors, founded by Sir J.J. College of Architecture and VJTI alumni. Single-window turnkey execution with 45-day guaranteed handover, zero cost escalations, and PAN India reach. Studio HQ at The Capital Tree, Thane (West).",
  keywords: [
    "luxury turnkey interior designers",
    "architectural interior design firm",
    "turnkey interior design studio India",
    "Abhishek Pandey architect",
    "Sanskruti Suryavanshi interior designer",
    "luxury residential interiors PAN India",
    "Blue Space Interiors",
  ],
};

import { getSafeTeamMembers } from "@/lib/fallbackData";

export default async function AboutPage() {
  const teamMembers = await getSafeTeamMembers();

  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#f4f2ec] to-[#fbfaf7] border-b border-slate-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#3154A5]" />
            <span>Architectural Rigor • Institutional Pedigree</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Architectural Mastery with Premier{" "}
            <span className="brand-gradient-text">Luxury Interior Designers</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            Founded by alumni of Sir J.J. College of Architecture and VJTI Mumbai, Blue Space Interiors brings structural integrity, German factory engineering, and uncompromising turnkey accountability to luxury residences across India.
          </p>
        </div>
      </section>

      {/* Brand Narrative & Studio History */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
              Our Origin & Purpose
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
              Why We Built a Direct Architectural Turnkey Studio
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              <p>
                In 2018, as large venture-funded aggregators entered the market with mass-market modular furniture catalogs, we witnessed high-net-worth homeowners facing acute frustration. Homeowners purchasing premium 3 BHK, 4 BHK, penthouses, and private villas were being assigned junior freelance coordinators and particle-board cabinetry that sagged under coastal humidity.
              </p>
              <p>
                Blue Space Interiors was established as a direct architectural countermeasure. Led by Council of Architecture-registered Architect Abhishek Pandey (COA: CA/2012/54892) and Civil Engineer Panya Bangari (VJTI), we built our own 18,000 sq.ft. cleanroom pre-fabrication plant in the Thane manufacturing corridor to deliver turnkey excellence across India.
              </p>
              <p>
                By pre-fabricating 85% of modular cabinetry off-site using calibrated Century Club Prime BWP Marine Plywood and genuine Austrian Blum fittings, we eliminated on-site noise, dust, and contractor delays. This architectural precision enables our legally bound 45-day key handover and 10-year direct warranty.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-6">
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">10+ Years</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Architectural Excellence</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">150+</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Projects Delivered</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">End-To-End</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Project Management</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#3154A5]">Pan India</span>
                <p className="text-xs text-slate-600 mt-1 font-medium">Execution Network</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Blue Space Interiors Studio & Architecture Desk"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 text-xs text-[#3154A5] font-bold uppercase tracking-wider">
                  <Factory className="w-4 h-4 text-[#3154A5]" />
                  <span>Precision Offsite Manufacturing Facility</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 font-light">
                  Equipped with German Homag CNC beam saws, PUR zero-joint edge banders, and specialized dust-free PU spray booths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Core Team Members Section */}
      <section className="py-20 bg-[#f8f7f4] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase flex items-center justify-center gap-1.5">
              <Users2 className="w-3.5 h-3.5 text-[#3154A5]" />
              Core Leadership & Architectural Directors
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              The Specialized Minds Shaping High-End Residences
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-light">
              Unlike platforms where your project is handed to outsourced subcontractors, our core leaders personally govern every stage of design and execution.
            </p>
          </div>

          {/* Dynamic Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all flex flex-col group"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[10px] font-bold text-[#3154A5] shadow-sm">
                    {member.experience.split("•")[0]}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-blue-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-blue-200 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[11px] text-[#3154A5] font-semibold mb-3">
                      Specialty: {member.specialty}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Active Project Lead
                    </span>
                    <span className="text-[#3154A5] font-bold">Studio Headquarters</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Credentials & Quality Benchmarks */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#3154A5] uppercase">
            Rigorous Engineering Standards
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">
            Our Certified Material Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <Award className="w-8 h-8 text-[#3154A5] mb-3" />
            <h4 className="text-slate-900 font-semibold text-sm">Blum & Häfele Direct OEM</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
              Exclusively original Austrian Blum Aventos lift-ups, Legrabox drawers, and Häfele architectural handles certified for 200,000 cycles.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="text-slate-900 font-semibold text-sm">Century Club Prime BWP</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
              100% Calibrated Boiling Water Proof plywood with Gurjan face veneer, zero core gaps, and 25-year manufacturer anti-borer warranty.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <Sparkles className="w-8 h-8 text-[#3154A5] mb-3" />
            <h4 className="text-slate-900 font-semibold text-sm">Italian Stone Diamond Polish</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
              Laser-calibrated mitered joint transitions and 8-stage diamond abrasive pad polishing with water-repellent silane impregnators.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="text-slate-900 font-semibold text-sm">COA Registered Supervision</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
              Every structural wall opening, electrical load calculation, and false ceiling structural grid is certified by registered architects.
            </p>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border-t border-blue-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Schedule a Private Discussion with Mr. Sunil Pandey
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto font-light">
            Bring your builder floorplan to our studio at 1507 on 15th, The Capital Tree, Pokhran Road No. 2, Thane (West) 400601 for an architectural feasibility review.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="brand-button px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md"
            >
              <span>Schedule Architectural Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
