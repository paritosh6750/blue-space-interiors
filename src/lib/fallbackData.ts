import prisma from "@/lib/prisma";

export const DEFAULT_TEAM_MEMBERS = [
  {
    id: "team-1",
    name: "Sunil Pandey",
    role: "Managing Director & Head of Turnkey Contracting",
    specialty: "Single-Window Design & Contracting Execution, Fixed BOQ Governance",
    experience: "15+ Years Industry Experience",
    bio: "Sunil Pandey leads end-to-end turnkey contracting, project execution, and client advisory at Blue Space Interiors. Having spearheaded dozens of premium residential and commercial transformations across India, he specializes in unifying design intent with rigorous site execution to eliminate budget overruns and project delays.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    order: 1,
  },
];

export const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "Oberoi Sky City Luxury Fitout",
    slug: "oberoi-sky-city-borivali",
    category: "Luxury Residence",
    locality: "Oberoi Sky City, Borivali",
    scope: "Turnkey Design & Contracting, Italian Marble, VRV Air Conditioning, Custom Millwork",
    sqft: 2850,
    completionDate: new Date("2025-11-20"),
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Bespoke living and dining layout with Italian marble feature wall and concealed perimeter profile lighting.",
      "Custom designer precision kitchen featuring soft-close German hardware, quartz countertops, and seamless appliance integration.",
      "Master suite with acoustic dressing room and bespoke glass-profile wardrobe joinery.",
      "Delivered within our guaranteed 120-day turnkey timeline with 5-year structural warranty and zero cost escalation against locked BOQ.",
    ]),
    featured: true,
  },
  {
    id: "proj-2",
    title: "Oberoi Eternia & Enigma Bespoke Fitout",
    slug: "oberoi-eternia-enigma-mulund",
    category: "Premium 3 BHK Residence",
    locality: "Oberoi Eternia & Enigma, Mulund",
    scope: "Turnkey Contracting, Spatial Optimization, Concealed Storage, Acoustic Ceilings",
    sqft: 1650,
    completionDate: new Date("2025-08-15"),
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Engineered turnkey interior fitout optimizing spatial flow and functional storage across all rooms.",
      "Natural veneer wall panelling concealing utility shafts and ducted air-conditioning plenums.",
      "Custom breakfast counter and designer precision modular millwork built with high-grade BWP Marine Plywood.",
      "Delivered within our 120-day handover SLA with 5-year warranty and full gated society compliance.",
    ]),
    featured: true,
  },
  {
    id: "proj-3",
    title: "Piramal Vaikunth Signature Fitout",
    slug: "piramal-vaikunth-turnkey",
    category: "Signature Turnkey Residence",
    locality: "Piramal Vaikunth",
    scope: "Complete Design & Contracting, Teak Joinery, Smart Automation, Designer Lighting",
    sqft: 2400,
    completionDate: new Date("2025-04-10"),
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Designer precision turnkey execution with wood panelling, marble restoration, and custom furniture.",
      "Smart lighting automation controlling distinct ambient circuits and motorized shades.",
      "High-spec modular cabinetry with certified anti-scratch finishes and European hardware.",
      "Delivered strictly within 120-day turnkey agreement with 5-year direct structural warranty.",
    ]),
    featured: true,
  },
];

export async function getSafeFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      take: 3,
      orderBy: { completionDate: "desc" },
    });
    if (projects && projects.length > 0) return projects;
    return DEFAULT_PROJECTS;
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export async function getSafeAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { completionDate: "desc" },
    });
    if (projects && projects.length > 0) return projects;
    return DEFAULT_PROJECTS;
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export async function getSafeTeamMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: { order: "asc" },
    });
    if (members && members.length > 0) return members;
    return DEFAULT_TEAM_MEMBERS;
  } catch {
    return DEFAULT_TEAM_MEMBERS;
  }
}
