import prisma from "@/lib/prisma";

export const DEFAULT_TEAM_MEMBERS = [
  {
    id: "team-1",
    name: "Sunil Pandey",
    role: "Managing Director & Head of Turnkey Contracting",
    specialty: "Single-Window Design & Contracting Execution, Fixed BOQ Governance",
    experience: "15+ Years Industry Experience",
    bio: "Sunil Pandey leads end-to-end turnkey contracting, project execution, and client advisory at Blue Space Interiors. Having spearheaded premium residential, villa, and commercial transformations across India, he specializes in unifying design intent with rigorous site execution to eliminate budget overruns and project delays.",
    avatarUrl: "/logo-icon.png",
    order: 1,
  },
];

export const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "12,000 Sq.Ft. Luxury Villa Estate",
    slug: "luxury-villa-angul-odisha-sanjay-sahoo",
    category: "Luxury Villa Project",
    locality: "Sikshyakpada, Angul, Odisha",
    scope: "Full Turnkey Design & Execution by Blue Space Interiors (Client: Mr. Sanjay Sahoo - Coal Mining)",
    sqft: 12000,
    completionDate: new Date("2026-02-15"),
    heroImage: "/projects/project-1-sanjay-sahoo-angul-villa.jpg",
    highlights: JSON.stringify([
      "Client: Mr. Sanjay Sahoo (Coal Mining), Sikshyakpada, Angul, Odisha.",
      "12,000 Sq.Ft. grand private villa estate designed and executed end-to-end by Blue Space Interiors.",
      "Designing style: Luxurious and lavish aesthetic with bespoke double-height living, grand chandeliers, and imported stone craftsmanship.",
      "Complete turnkey contracting execution with locked BOQ, milestone scheduling, and 5-year direct structural warranty.",
    ]),
    featured: true,
  },
  {
    id: "proj-2",
    title: "Lake Enclave Luxury Residence",
    slug: "lake-enclave-glendale-hiranandani-neeraj-medekar",
    category: "Premium Residence Fitout",
    locality: "Flat 901, Glendale Building, Lake Enclave, Hiranandani Estate, Thane",
    scope: "Full Turnkey Design & Execution by Blue Space Interiors (Client: Mr. Neeraj Medekar - General Manager, Hitachi)",
    sqft: 2000,
    completionDate: new Date("2025-11-20"),
    heroImage: "/projects/project-2-neeraj-medekar-hiranandani-lake-enclave.jpg",
    highlights: JSON.stringify([
      "Client: Mr. Neeraj Medekar (General Manager in Hitachi), Flat 901, Glendale Building, Lake Enclave, Hiranandani Estate.",
      "2,000 Sq.Ft. premium apartment fitout designed and executed end-to-end by Blue Space Interiors.",
      "Designing style: Luxurious and lavish with custom modular kitchen, acoustic wall paneling, and German hardware fittings.",
      "Delivered with 100% society NOC compliance, designer precision, and 5-year structural warranty.",
    ]),
    featured: true,
  },
  {
    id: "proj-3",
    title: "Oberoi Enigma 3 BHK Luxury Suite",
    slug: "oberoi-enigma-mulund-bhavana-waignkar",
    category: "Luxury 3 BHK Residence",
    locality: "Flat 2506, Oberoi Enigma, Mulund, Mumbai",
    scope: "Full Turnkey Design & Execution by Blue Space Interiors (Client: Ms. Bhavana Waignkar - IT Professional)",
    sqft: 1450,
    completionDate: new Date("2025-08-15"),
    heroImage: "/projects/project-3-bhavana-waignkar-oberoi-enigma.png",
    highlights: JSON.stringify([
      "Client: Ms. Bhavana Waignkar (IT Professional), Flat 2506, Oberoi Enigma, Mulund, Mumbai.",
      "1,450 Sq.Ft. 3 BHK residence designed and executed end-to-end by Blue Space Interiors.",
      "Designing style: Luxurious and lavish aesthetic with custom walk-in wardrobe, sleek modular kitchen, and smart dimming controls.",
      "Delivered on schedule with 120-day handover guarantee, itemized locked BOQ, and zero budget overruns.",
    ]),
    featured: true,
  },
  {
    id: "proj-4",
    title: "Oberoi Enigma 4 BHK Grand Residence",
    slug: "oberoi-enigma-tower-a-anand-acharya",
    category: "Ultra-Luxury 4 BHK Residence",
    locality: "Tower A, Flat 2604, Oberoi Enigma, Mulund, Mumbai",
    scope: "Full Turnkey Design & Execution by Blue Space Interiors (Client: Mr. Anand Acharya - Owner, Chemical Company)",
    sqft: 2200,
    completionDate: new Date("2025-05-10"),
    heroImage: "/projects/project-4-anand-acharya-oberoi-enigma.png",
    highlights: JSON.stringify([
      "Client: Mr. Anand Acharya (Owner of Chemical Company), Tower A, Flat 2604, Oberoi Enigma, Mulund.",
      "2,200 Sq.Ft. 4 BHK residence designed and executed end-to-end by Blue Space Interiors.",
      "Designing style: Luxurious and lavish with bookmatched Italian marble feature walls, designer false ceilings, and bespoke furniture.",
      "Turnkey civil, MEP, and precision modular woodwork delivered under 120-day SLA with zero cost escalation.",
    ]),
    featured: true,
  },
  {
    id: "proj-5",
    title: "Sai Nirvana 4,000 Sq.Ft. Grand Residence",
    slug: "sai-nirvana-kalyan-himanshu-shrivastava",
    category: "Signature 4,000 Sq.Ft. Residence",
    locality: "Flat 2503, Sai Nirvana, Kalyan",
    scope: "Full Turnkey Design & Execution by Blue Space Interiors (Client: Mr. Himanshu Shrivastava - Branch Manager, HDFC Bank)",
    sqft: 4000,
    completionDate: new Date("2025-03-25"),
    heroImage: "/projects/project-5-himanshu-shrivastava-sai-nirvana.png",
    highlights: JSON.stringify([
      "Client: Mr. Himanshu Shrivastava (Branch Manager in HDFC Bank), Flat 2503, Sai Nirvana, Kalyan.",
      "4,000 Sq.Ft. expansive residence designed and executed end-to-end by Blue Space Interiors.",
      "Designing style: Luxurious and lavish with open-concept entertaining zones, luxury suites, and ambient lighting.",
      "Built with high-grade BWP Marine Plywood, original Blum hardware, and full turnkey site coordination.",
    ]),
    featured: true,
  },
];

export async function getSafeFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      take: 5,
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
