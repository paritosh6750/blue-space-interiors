import prisma from "@/lib/prisma";

export const DEFAULT_TEAM_MEMBERS = [
  {
    id: "team-1",
    name: "Abhishek Pandey",
    role: "Principal Architect & Co-Founder",
    specialty: "High-Ticket Spatial Architecture & Turnkey Execution",
    experience: "14+ Years Experience • Council of Architecture (COA: CA/2012/54892)",
    bio: "B.Arch graduate from Sir J.J. College of Architecture, Mumbai (Class of 2010). Abhishek leads architectural planning, structural modifications, and turnkey integrity at Blue Space Interiors. Having spearheaded over 140 luxury residential transformations across Hiranandani Estate, Pokhran Road, and South Mumbai, he specializes in translating client lifestyles into seamless, high-yielding spatial plans.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    order: 1,
  },
  {
    id: "team-2",
    name: "Sanskruti Suryavanshi",
    role: "Design Director & Co-Founder",
    specialty: "Luxury Material Moodboards, Lighting Curation & Bespoke Styling",
    experience: "11+ Years Experience • Master in Interior Architecture (Rachana Sansad)",
    bio: "Holding an advanced degree from Rachana Sansad Institute of Interior Design, Sanskruti directs aesthetic vision, custom furniture joinery, and tactile materiality. She has curated bespoke living environments for top medical directors, senior IT executives, and industrial families across India, harmonizing Italian Statuario stone, acoustic fluted panels, and German architectural illumination.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    order: 2,
  },
  {
    id: "team-3",
    name: "Panya Bangari",
    role: "VP of Turnkey Operations & Site Execution",
    specialty: "45-Day Handover Protocol, Precision MEP & Factory Logistics",
    experience: "12+ Years Experience • B.E. Civil Engineering (VJTI Mumbai)",
    bio: "A VJTI Mumbai Civil Engineering alumnus with over a decade in high-tolerance residential construction management. Panya oversees Blue Space's 18,000 sq.ft. precision prefabrication plant, site-level HVAC ducting, plumbing conduits, and strict adherence to our legally backed 45-day key handover guarantee.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    order: 3,
  },
  {
    id: "team-4",
    name: "Atharv Bhoir",
    role: "Senior Technical Architect & 3D Spatial Visualizer",
    specialty: "Photorealistic 4K V-Ray Simulations, Unreal Engine VR & Millimeter Shop Drawings",
    experience: "8+ Years Experience • B.Arch, Certified Autodesk 3ds Max Specialist",
    bio: "Atharv bridges aesthetic conceptualization and factory fabrication. Utilizing 4K V-Ray rendering and millimeter-calibrated CAD shop drawings, Atharv enables homeowners to experience exact lighting temperatures (3000K vs 4000K), natural stone veining, and ergonomic walkway clearances prior to on-site assembly.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    order: 4,
  },
  {
    id: "team-5",
    name: "Siddham Jain",
    role: "Head of Materials Procurement & Quality Assurance",
    specialty: "Direct European Hardware Sourcing, BWP Gurjan Marine Audits & 320-Point Snag Audits",
    experience: "9+ Years Experience • B.Tech Materials Science, ISO 9001 Auditor",
    bio: "Siddham governs Blue Space's direct supply chain partnerships with Blum (Austria), Häfele (Germany), Saint-Gobain, and CenturyPly. He personally supervises calibrated timber moisture testing, multi-layer surface coatings, and the final 320-point snag inspection before white-glove handover to our clients.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85",
    order: 5,
  },
];

export const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "The Solitaire Penthouse, Hiranandani Estate",
    slug: "solitaire-penthouse-hiranandani",
    category: "Luxury Penthouse",
    locality: "Rodas Enclave, Hiranandani Estate",
    scope: "Full 4.5 BHK Turnkey Overhaul, Double-Height Living, Daikin VRV HVAC, Statuario Marble",
    sqft: 3850,
    completionDate: new Date("2025-11-20"),
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Bespoke double-height living room with bookmatched Italian Statuario marble feature wall and concealed perimeter profile lighting.",
      "Custom German kitchen featuring Blum Servo-Drive touch-to-open hardware, quartz countertops, and integrated Bosch appliances.",
      "Master suite with walk-in acoustic dressing room clad in smoked European walnut veneer and bronze-tinted fluted glass.",
      "Executed in 44 days with zero cost overrun against initial signed BOQ.",
    ]),
    featured: true,
  },
  {
    id: "proj-2",
    title: "The Minimalist Biophilic Haven, Raymond Ten X",
    slug: "minimalist-biophilic-raymond-ten-x",
    category: "Modern 3 BHK Residence",
    locality: "Tower 4, Raymond Ten X Habitat, Pokhran Road No. 2",
    scope: "Architectural Space Optimization, Concealed Storage, Micro-Concrete Finishes, Acoustic Ceilings",
    sqft: 1420,
    completionDate: new Date("2025-08-15"),
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Spatially engineered layout expanding living area visual span by removing non-structural partition walls.",
      "Natural veneer panelling concealing utility shafts and ducted air-conditioning return plenums.",
      "Custom cantilevered breakfast bar crafted from Brazilian quartzite with brushed brass support legs.",
      "Delivered in 42 days with full society NOC clearance and zero snag items.",
    ]),
    featured: true,
  },
  {
    id: "proj-3",
    title: "The Grand Duplex Estate, Sheth Avalon",
    slug: "grand-duplex-sheth-avalon",
    category: "Bespoke Duplex",
    locality: "Sheth Avalon, Majiwada",
    scope: "Turnkey Architecture & Civil Reconstruction, Teak Wood Cantilever Staircase, Smart Home Automation",
    sqft: 4200,
    completionDate: new Date("2025-04-10"),
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    highlights: JSON.stringify([
      "Sculptural floating staircase engineered with Burma teak treads and frameless 15mm toughened glass balustrades.",
      "Lutron smart lighting automation controlling 32 distinct architectural lighting circuits and motorized drapery.",
      "Temperature-controlled wine display unit and backlit onyx bar counter for executive entertaining.",
      "Delivered strictly within 45-day turnkey agreement with 10-year structural warranty certificate.",
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
  } catch (err) {
    console.warn("Using fallback featured projects due to DB error:", err);
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
  } catch (err) {
    console.warn("Using fallback all projects due to DB error:", err);
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
  } catch (err) {
    console.warn("Using fallback team members due to DB error:", err);
    return DEFAULT_TEAM_MEMBERS;
  }
}
