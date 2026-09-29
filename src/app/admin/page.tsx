import { isAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getLiveMetrics } from "@/app/actions/tracker";
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

  // Fetch all leads from SQLite
  const rawInquiries = await prisma.leadInquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const inquiries = rawInquiries.map((inquiry) => ({
    ...inquiry,
    createdAt: inquiry.createdAt.toISOString(),
    updatedAt: inquiry.updatedAt.toISOString(),
  }));

  const metrics = await getLiveMetrics();

  return <AdminDashboard initialInquiries={inquiries} metrics={metrics} />;
}
