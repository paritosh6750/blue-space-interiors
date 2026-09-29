import { isAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getLiveMetrics } from "@/app/actions/tracker";
import { readFallbackStore } from "@/lib/inquiryStore";
import AdminDashboard from "@/components/admin/AdminDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Blue Space Interiors",
  description: "Secure lead management and studio administration portal.",
  robots: {
    index: false,
    follow: false,
  },
};

export const revalidate = 0; // Always serve fresh database records

export default async function AdminPortalPage() {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect("/admin/login");
  }

  // 1. Fetch leads from database safely
  let dbInquiries: Array<{
    id: string;
    fullName: string;
    email: string;
    phone: string;
    propertyType: string;
    locationArea: string;
    configuration: string;
    budgetRange: string;
    preferredTimeline: string;
    message: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }> = [];

  try {
    dbInquiries = await prisma.leadInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.warn("Could not query leadInquiry from DB:", err);
  }

  // 2. Fetch leads from fallback file store
  const fallbackInquiries = readFallbackStore();

  // 3. Merge and deduplicate
  const inquiriesMap = new Map<string, {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    propertyType: string;
    locationArea: string;
    configuration: string;
    budgetRange: string;
    preferredTimeline: string;
    message: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  }>();

  for (const inquiry of dbInquiries) {
    inquiriesMap.set(inquiry.id, {
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
      updatedAt: inquiry.updatedAt.toISOString(),
    });
  }

  for (const fb of fallbackInquiries) {
    if (!inquiriesMap.has(fb.id)) {
      inquiriesMap.set(fb.id, {
        ...fb,
        createdAt: fb.createdAt,
        updatedAt: fb.updatedAt,
      });
    }
  }

  const inquiries = Array.from(inquiriesMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const metrics = await getLiveMetrics();

  return <AdminDashboard initialInquiries={inquiries} metrics={metrics} />;
}
