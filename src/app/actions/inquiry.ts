"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

    const inquiry = await prisma.leadInquiry.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        propertyType: data.propertyType || "Apartment",
        locationArea: data.locationArea || "Thane West",
        configuration: data.configuration || "3 BHK",
        budgetRange: data.budgetRange || "25L-40L",
        preferredTimeline: data.preferredTimeline || "Immediate",
        message: data.message || "",
        status: "NEW",
      },
    });

    revalidatePath("/contact");
    return { success: true, inquiryId: inquiry.id };
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return { success: false, error: "Unable to submit inquiry at this time. Please call directly." };
  }
}
