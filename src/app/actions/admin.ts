"use server";

import prisma from "@/lib/prisma";
import {
  verifyCredentials,
  setAdminSession,
  clearAdminSession,
  isAuthenticated,
} from "@/lib/adminAuth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAdminAction(prevState: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { success: false, error: "Please provide both username and password." };
  }

  const isValid = verifyCredentials(username, password);
  if (!isValid) {
    return {
      success: false,
      error: "Invalid username or password. Access restricted to authorized personnel.",
    };
  }

  await setAdminSession();
  return { success: true };
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function updateInquiryStatusAction(id: string, newStatus: string) {
  const auth = await isAuthenticated();
  if (!auth) {
    return { success: false, error: "Unauthorized access" };
  }

  try {
    const updated = await prisma.leadInquiry.update({
      where: { id },
      data: { status: newStatus },
    });
    revalidatePath("/admin");
    return { success: true, inquiry: updated };
  } catch (error) {
    console.error("Error updating inquiry status:", error);
    return { success: false, error: "Failed to update status." };
  }
}

export async function deleteInquiryAction(id: string) {
  const auth = await isAuthenticated();
  if (!auth) {
    return { success: false, error: "Unauthorized access" };
  }

  try {
    await prisma.leadInquiry.delete({
      where: { id },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return { success: false, error: "Failed to delete inquiry." };
  }
}
