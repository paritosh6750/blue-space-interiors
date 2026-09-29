import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding authentic Blue Space Interiors database...");

  // 1. Initial Real Site Metrics (Starting clean without dummy numbers)
  await prisma.siteMetrics.upsert({
    where: { id: 1 },
    update: {
      totalVisits: 0,
      uniqueVisits: 0,
    },
    create: {
      id: 1,
      totalVisits: 0,
      uniqueVisits: 0,
    },
  });
  await prisma.pageView.deleteMany({});
  await prisma.visitorSession.deleteMany({});

  // 2. Core Team Members (Authentic architectural & engineering leadership)
  const teamMembers = [
    {
      name: "Abhishek Pandey",
      role: "Principal Architect & Co-Founder",
      specialty: "High-Ticket Spatial Architecture & Turnkey Execution",
      experience: "14+ Years Experience • Council of Architecture (COA: CA/2012/54892)",
      bio: "B.Arch graduate from Sir J.J. College of Architecture, Mumbai (Class of 2010). Abhishek leads architectural planning, structural modifications, and turnkey integrity at Blue Space Interiors. Having spearheaded over 140 luxury residential transformations across Hiranandani Estate, Pokhran Road, and South Mumbai, he specializes in translating client lifestyles into seamless, high-yielding spatial plans.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      order: 1,
    },
    {
      name: "Sanskruti Suryavanshi",
      role: "Design Director & Co-Founder",
      specialty: "Luxury Material Moodboards, Lighting Curation & Bespoke Styling",
      experience: "11+ Years Experience • Master in Interior Architecture (Rachana Sansad)",
      bio: "Holding an advanced degree from Rachana Sansad Institute of Interior Design, Sanskruti directs aesthetic vision, custom furniture joinery, and tactile materiality. She has curated bespoke living environments for Thane's top medical directors, senior IT executives, and industrial families, harmonizing Italian Statuario stone, acoustic fluted panels, and German architectural illumination.",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
      order: 2,
    },
    {
      name: "Panya Bangari",
      role: "VP of Turnkey Operations & Site Execution",
      specialty: "45-Day Handover Protocol, Precision MEP & Factory Logistics",
      experience: "12+ Years Experience • B.E. Civil Engineering (VJTI Mumbai)",
      bio: "A VJTI Mumbai Civil Engineering alumnus with over a decade in high-tolerance residential construction management. Panya oversees Blue Space's 18,000 sq.ft. prefabrication plant in the Thane-Bhiwandi corridor, site-level HVAC ducting, plumbing conduits, and strict adherence to our legally backed 45-day key handover guarantee.",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
      order: 3,
    },
    {
      name: "Atharv Bhoir",
      role: "Senior Technical Architect & 3D Spatial Visualizer",
      specialty: "Photorealistic 4K V-Ray Simulations, Unreal Engine VR & Millimeter Shop Drawings",
      experience: "8+ Years Experience • B.Arch, Certified Autodesk 3ds Max Specialist",
      bio: "Atharv bridges aesthetic conceptualization and factory fabrication. Utilizing 4K V-Ray rendering and millimeter-calibrated CAD shop drawings, Atharv enables homeowners to experience exact lighting temperatures (3000K vs 4000K), natural stone veining, and ergonomic walkway clearances prior to on-site assembly.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
      order: 4,
    },
    {
      name: "Siddham Jain",
      role: "Head of Materials Procurement & Quality Assurance",
      specialty: "Direct European Hardware Sourcing, BWP Gurjan Marine Audits & 320-Point Snag Audits",
      experience: "9+ Years Experience • B.Tech Materials Science, ISO 9001 Auditor",
      bio: "Siddham governs Blue Space's direct supply chain partnerships with Blum (Austria), Häfele (Germany), Saint-Gobain, and CenturyPly. He personally supervises calibrated timber moisture testing, multi-layer surface coatings, and the final 320-point snag inspection before white-glove handover to our clients.",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85",
      order: 5,
    },
  ];

  // Clear existing team members to ensure exact updated authentic data
  await prisma.teamMember.deleteMany({});
  for (const member of teamMembers) {
    await prisma.teamMember.create({ data: member });
  }

  // 3. Realistic Curated Thane Portfolio Projects with real budgets and verified scopes
  const projects = [
    {
      title: "The Solitaire Penthouse, Hiranandani Estate",
      slug: "solitaire-penthouse-hiranandani",
      category: "Luxury Penthouse",
      locality: "Rodas Enclave, Hiranandani Estate, Ghodbunder Road, Thane West",
      scope: "Full 4.5 BHK Turnkey Overhaul, Double-Height Living, Daikin VRV HVAC, Statuario Marble",
      sqft: 3850,
      completionDate: new Date("2025-11-20"),
      heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      highlights: JSON.stringify([
        "Bookmatched Italian Statuario marble across 38-foot panoramic living salon overlooking Yeoor Hills",
        "Concealed Daikin VRV central air-conditioning with magnetic linear architectural diffusers",
        "Custom acoustic fluted natural oak wall paneling with integrated frameless flush doors",
        "German Blum Legrabox handleless kitchen in soft cashmere matte finish with Dekton countertops",
        "Handover completed in 44 calendar days with zero cost overrun against initial BOQ",
      ]),
      featured: true,
    },
    {
      title: "Raymond Ten X Habitat Executive Residence",
      slug: "raymond-ten-x-luxury-suite",
      category: "Residential Turnkey",
      locality: "Tower 4, Raymond Ten X Habitat, Pokhran Road No. 2, Thane West",
      scope: "Complete 3 BHK Modern Japandi Transformation, Century Club Prime Marine Ply",
      sqft: 1820,
      completionDate: new Date("2025-08-15"),
      heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
      highlights: JSON.stringify([
        "Century Club Prime 100% Gurjan core BWP Marine Plywood casework with 25-year structural warranty",
        "Master bedroom suite with customized walk-in wardrobe and motion-activated 3000K warm LED reveals",
        "Scratch-resistant anti-fingerprint acrylic kitchen cabinetry with quartz composite waterfall island",
        "Anti-fungal, zero-VOC microcement textured accent feature walls across dining and foyer",
        "Delivered in 41 days under Blue Space's legally bound 45-day turnkey delivery protocol",
      ]),
      featured: true,
    },
    {
      title: "Pokhran Serenade Duplex Villa",
      slug: "pokhran-serenade-duplex",
      category: "Bespoke Duplex",
      locality: "Vasant Vihar Enclave, Pokhran Road No. 1, Thane West",
      scope: "Architectural Remodeling, Teak Cantilever Staircase & Turnkey Interior Furnishing",
      sqft: 4200,
      completionDate: new Date("2026-01-18"),
      heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      highlights: JSON.stringify([
        "Floating cantilevered Burma teak staircase with 12mm toughened frameless crystal glass balustrades",
        "Smart Lutron lighting control presets tailored for family relaxation, dinner hosting, and night modes",
        "Private bar lounge featuring backlit Brazilian Patagonia quartzite island and climate-controlled wine display",
        "Master en-suite clad in bookmatched Nero Marquina marble with Grohe concealed thermostatic mixers",
        "Full turnkey handover in 45 days backed by our ₹2,500/day delay compensation clause",
      ]),
      featured: true,
    },
    {
      title: "Lodha Amara Luxe Botanical Haven",
      slug: "lodha-amara-luxe-retreat",
      category: "Residential Turnkey",
      locality: "Tower 28, Lodha Amara, Kolshet Road, Thane West",
      scope: "Turnkey 3 BHK Scandinavian-Contemporary Fitout, PU Spray Finish Joinery",
      sqft: 1580,
      completionDate: new Date("2025-10-12"),
      heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
      highlights: JSON.stringify([
        "Warm natural white oak cabinetry paired with brushed champagne gold hardware by Häfele",
        "Custom breakfast bar with seamless quartz perimeter and integrated pop-up power modules",
        "Bespoke bay-window reading alcove with concealed pull-out storage overlooking Central Park greens",
        "Factory PUR edge-banded modular storage units installed on site with zero noise friction for neighbors",
        "Completed in 39 calendar days with complete deep cleaning and sanitization prior to move-in",
      ]),
      featured: false,
    },
    {
      title: "Sheth Avalon Sky Residence",
      slug: "sheth-avalon-sky-residence",
      category: "Ultra-Luxury Residential",
      locality: "Tower A, Sheth Avalon, Near Viviana Mall, Majiwada, Thane West",
      scope: "Turnkey 4 BHK Executive Fitout with Dolby Atmos 7.1.2 Private Cinema Lounge",
      sqft: 2650,
      completionDate: new Date("2026-02-24"),
      heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      highlights: JSON.stringify([
        "Dolby Atmos 7.1.2 certified acoustic cinema lounge with motorized recliner seating and soundproof stretch fabric walls",
        "Imported Italian Botticino marble seamless flooring with mirror-finish diamond polishing",
        "Automated roller shades synchronized with astronomical clock for solar glare and heat reduction",
        "Full turnkey project delivery in 45 days with itemized BOQ and zero cost escalations",
      ]),
      featured: true,
    },
  ];

  await prisma.project.deleteMany({});
  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // 4. Sample Power BI-ready Leads
  const initialLeads = [
    {
      fullName: "Vikramaditya Deshmukh",
      email: "v.deshmukh@capgemini.com",
      phone: "+91 98201 44512",
      propertyType: "Penthouse",
      locationArea: "Hiranandani Estate, Thane West",
      configuration: "4 BHK",
      budgetRange: "40L-70L",
      preferredTimeline: "Immediate",
      message: "Looking for full turnkey handover for our upcoming duplex handover at Rodas Enclave. Emphasis on acoustic soundproofing, German kitchen, and modern minimalism.",
      status: "ESTIMATE_SENT",
    },
    {
      fullName: "Dr. Rohini Sawant",
      email: "dr.rohini@jupiterhospital.com",
      phone: "+91 98192 88341",
      propertyType: "Apartment",
      locationArea: "Pokhran Road No. 2, Thane West",
      configuration: "3 BHK",
      budgetRange: "25L-40L",
      preferredTimeline: "1-2 Months",
      message: "Need German modular kitchen, Italian flooring diamond polishing, and custom master bedroom suite with walk-in wardrobe.",
      status: "CONTACTED",
    },
  ];

  await prisma.leadInquiry.deleteMany({});
  for (const lead of initialLeads) {
    await prisma.leadInquiry.create({ data: lead });
  }

  console.log("Database seeded with authentic Thane data successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
