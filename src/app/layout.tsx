import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluespaceinteriors.com"),
  title: {
    default: "Blue Space Interiors | Premier Turnkey Interior Designer in Thane",
    template: "%s | Blue Space Interiors Thane",
  },
  description:
    "Leading architectural turnkey interior designer in Thane. Bespoke luxury transformations for 3 BHK, 4 BHK & penthouses in Hiranandani Estate, Pokhran Road & Majiwada. 45-day guaranteed handover, zero cost escalations, 10-year warranty.",
  keywords: [
    "interior designer in Thane",
    "interior designers in Thane",
    "turnkey interior designer Thane",
    "best interior designers in Thane West",
    "luxury interior designers Thane",
    "Hiranandani Estate interior designers",
    "Pokhran Road interior designers",
    "Raymond Ten X interior turnkey",
    "Lodha Amara interior design Thane",
    "modular kitchen Thane Blum",
  ],
  authors: [{ name: "Ar. Abhishek Pandey (Principal Architect, Blue Space Interiors)" }],
  creator: "Blue Space Interiors LLP",
  publisher: "Blue Space Interiors LLP",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-icon-transparent.png",
    apple: "/logo-icon-transparent.png",
  },
  openGraph: {
    title: "Blue Space Interiors | Premier Turnkey Interior Designer in Thane",
    description:
      "Crafting extraordinary living spaces for Thane's discerning senior professionals and business leaders. Single-window turnkey execution with 45-day handover and 10-year warranty.",
    url: "https://bluespaceinteriors.com",
    siteName: "Blue Space Interiors Thane",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Luxury Turnkey Interior Design in Thane - Blue Space Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Space Interiors | Turnkey Interior Designer Thane",
    description:
      "Turnkey architectural interior design for high-ticket residences in Thane. 45-day guaranteed handover.",
    images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbfaf7] text-slate-900 flex flex-col font-sans selection:bg-[#3154a5] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
