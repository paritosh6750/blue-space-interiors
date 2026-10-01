import { isAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Blue Space Interiors",
  description: "Secure administrator login for Blue Space Interiors studio systems.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage() {
  const authed = await isAuthenticated();
  if (authed) {
    redirect("/admin");
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f4f2ec] via-[#fbfaf7] to-[#f4f2ec]">
      <AdminLoginForm />
    </div>
  );
}
