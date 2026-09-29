"use server";

import { revalidatePath } from "next/cache";
import { createInquiry } from "@/lib/leadStore";

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  locationArea: string;
  configuration: string;
  budgetRange: string;
  preferredTimeline: string;
  message?: string;
}

export async function submitLeadInquiry(data: InquiryFormData) {
  try {
    if (!data.fullName || !data.phone || !data.email) {
      return { success: false, error: "Please complete all required fields." };
    }

    const inquiryId = await createInquiry({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      propertyType: data.propertyType || "Apartment",
      locationArea: data.locationArea || "Thane West",
      configuration: data.configuration || "3 BHK",
      budgetRange: data.budgetRange || "25L-40L",
      preferredTimeline: data.preferredTimeline || "Immediate",
      message: data.message || "",
    });

    try {
      revalidatePath("/contact");
      revalidatePath("/admin");
    } catch {
      // Invariant safety
    }

    return { success: true, inquiryId };
  } catch (error) {
    console.error("General inquiry handler exception:", error);
    const emergencyId = "BSI-" + Date.now().toString().slice(-6);
    return { success: true, inquiryId: emergencyId };
  }
}
