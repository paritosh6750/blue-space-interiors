/**
 * Global Brand & Business Constants
 * Blue Space Interiors - Turnkey Interior Design & Contracting (PAN India)
 */

export const BRAND_CONFIG = {
  name: "Blue Space Interiors",
  establishedYear: 2020,
  gstin: "27CIWPP5341R1Z2",
  contactPerson: "Mr. Sunil Pandey",
  phone: "+91 77383 18383",
  phoneRaw: "+917738318383",
  phoneDisplay: "7738318383",
  email: "bluespaceinteriors1@gmail.com",
  handoverGuarantee: "120-Day Handover Guarantee",
  handoverDays: 120,
  warrantyGuarantee: "5-Year Direct Structural Warranty",
  warrantyYears: 5,
  tagline: "Premier Turnkey Interior Design & Contracting Firm",
  coverage: "PAN India Execution",
  registeredCity: "Thane (West), Maharashtra 400601",
  
  // Featured project credentials requested by client
  flagshipCommunities: [
    {
      name: "Oberoi Sky City",
      location: "Borivali",
      projectCount: "32 Projects Delivered",
      countNumber: 32,
    },
    {
      name: "Oberoi Eternia & Enigma",
      location: "Mulund",
      projectCount: "26 Projects Delivered",
      countNumber: 26,
    },
    {
      name: "Piramal Vaikunth",
      location: "Thane / Mumbai MMR",
      projectCount: "25 Projects Delivered",
      countNumber: 25,
    },
    {
      name: "Hiranandani",
      location: "Flagship Enclaves",
      projectCount: "10 Projects Delivered",
      countNumber: 10,
    },
  ],
};

/**
 * Dynamically computes years of excellence (e.g. 6+ Years from 2020 inception,
 * automatically incrementing as calendar years advance).
 */
export function getYearsOfExcellence(): string {
  const currentYear = new Date().getFullYear();
  const years = Math.max(6, currentYear - BRAND_CONFIG.establishedYear);
  return `${years}+ Years`;
}
