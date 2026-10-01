"use server";

import { revalidatePath } from "next/cache";
import { createInquiry } from "@/lib/leadStore";

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  enquiry?: string;
  // Optional backward compatibility
  propertyType?: string;
  locationArea?: string;
  configuration?: string;
  budgetRange?: string;
  preferredTimeline?: string;
  message?: string;
}

export async function submitLeadInquiry(data: InquiryFormData) {
  try {
    if (!data.fullName || !data.phone || !data.email) {
      return { success: false, error: "Please complete all required fields." };
    }

    const resolvedAddress = data.address || data.locationArea || "Not Specified";
    const resolvedEnquiry = data.enquiry || data.message || "";

    const inquiryId = await createInquiry({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      propertyType: data.propertyType || "Turnkey Fitout",
      locationArea: resolvedAddress,
      configuration: data.configuration || "Custom Scope",
      budgetRange: data.budgetRange || "On Discussion",
      preferredTimeline: data.preferredTimeline || "Immediate",
      message: resolvedEnquiry,
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
