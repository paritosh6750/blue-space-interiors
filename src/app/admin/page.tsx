import { isAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";
import { getLiveMetrics } from "@/app/actions/tracker";
import { getAllInquiries } from "@/lib/leadStore";
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

export const revalidate = 0; // Always serve fresh records on every load/refresh

export default async function AdminPortalPage() {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect("/admin/login");
  }

  // Fetch only authentic, customer-submitted inquiries in strict chronological sequence (newest first)
  const inquiries = await getAllInquiries();
  const metrics = await getLiveMetrics();

  return <AdminDashboard initialInquiries={inquiries} metrics={metrics} />;
}
