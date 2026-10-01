import { NextResponse } from "next/server";
import {
  getAllInquiries,
  createInquiry,
  updateInquiryStatusById,
  deleteInquiryById,
} from "@/lib/leadStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET() {
  try {
    const inquiries = await getAllInquiries();
    return NextResponse.json(
      { inquiries, timestamp: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("API GET /api/inquiries failed:", error);
    return NextResponse.json(
      { inquiries: [], error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.fullName || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const id = await createInquiry({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      propertyType: data.propertyType || "Turnkey Fitout",
      locationArea: data.address || data.locationArea || "Not Specified",
      configuration: data.configuration || "Custom Scope",
      budgetRange: data.budgetRange || "On Discussion",
      preferredTimeline: data.preferredTimeline || "Immediate",
      message: data.enquiry || data.message || "",
    });

    return NextResponse.json({ success: true, inquiryId: id }, { status: 201 });
  } catch (error) {
    console.error("API POST /api/inquiries failed:", error);
    return NextResponse.json(
      { error: "Failed to create inquiry" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    if (!data.id || !data.status) {
      return NextResponse.json(
        { error: "id and status are required" },
        { status: 400 }
      );
    }

    const success = await updateInquiryStatusById(data.id, data.status);
    return NextResponse.json({ success });
  } catch (error) {
    console.error("API PATCH /api/inquiries failed:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    let id = url.searchParams.get("id");

    if (!id) {
      const data = await request.json().catch(() => ({}));
      id = data.id;
    }

    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    const success = await deleteInquiryById(id);
    return NextResponse.json({ success });
  } catch (error) {
    console.error("API DELETE /api/inquiries failed:", error);
    return NextResponse.json(
      { error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}
