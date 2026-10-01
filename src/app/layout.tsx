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
    default: "Blue Space Interiors | Premier Turnkey Interior Design & Contracting | PAN India",
    template: "%s | Blue Space Interiors",
  },
  description:
    "Leading turnkey interior design and contracting firm executing complete end-to-end fitouts for residential, commercial, and corporate properties across India. 120-day guaranteed handover, zero cost escalations, and single-window contracting execution.",
  keywords: [
    "turnkey interior contracting",
    "turnkey interior design and contracting",
    "interior contractors India",
    "commercial and residential interior contracting",
    "turnkey fitout contractors",
    "120 day handover interiors",
    "PAN India interior contracting",
    "interior design and contracting firm",
    "Blue Space Interiors",
    "Sunil Pandey Blue Space Interiors",
  ],
  authors: [{ name: "Mr. Sunil Pandey (Blue Space Interiors)" }],
  creator: "Blue Space Interiors",
  publisher: "Blue Space Interiors",
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
    title: "Blue Space Interiors | Premier Turnkey Interior Design & Contracting | PAN India",
    description:
      "Single-window interior design & contracting execution for residential, commercial, and corporate properties across India. 120-day guaranteed handover and zero cost escalations.",
    url: "https://bluespaceinteriors.com",
    siteName: "Blue Space Interiors",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Turnkey Interior Design & Contracting - Blue Space Interiors PAN India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Space Interiors | Turnkey Interior Design & Contracting PAN India",
    description:
      "Turnkey interior design and contracting for residential, commercial, and corporate properties across India. 120-day guaranteed handover.",
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
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
