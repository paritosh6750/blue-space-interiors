import fs from "fs";
import path from "path";

export interface FallbackInquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  locationArea: string;
  configuration: string;
  budgetRange: string;
  preferredTimeline: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

function getFallbackStorePath(): string {
  const isServerless = Boolean(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.LAMBDA_TASK_ROOT
  );
  return isServerless
    ? path.join("/tmp", "inquiries_fallback.json")
    : path.join(process.cwd(), "prisma", "inquiries_fallback.json");
}

export function saveToFallbackStore(inquiry: FallbackInquiryRecord) {
  try {
    const storePath = getFallbackStorePath();
    let records: FallbackInquiryRecord[] = [];

    if (fs.existsSync(storePath)) {
      try {
        const raw = fs.readFileSync(storePath, "utf-8");
        records = JSON.parse(raw);
      } catch {
        records = [];
      }
    }

    // Deduplicate if already present
    records = records.filter((r) => r.id !== inquiry.id);
    records.unshift(inquiry);
    fs.writeFileSync(storePath, JSON.stringify(records, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not save to fallback inquiries file:", err);
  }
}

export function readFallbackStore(): FallbackInquiryRecord[] {
  try {
    const storePath = getFallbackStorePath();
    if (fs.existsSync(storePath)) {
      const raw = fs.readFileSync(storePath, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("Could not read fallback inquiries file:", err);
  }
  return [];
}

export function deleteFromFallbackStore(id: string) {
  try {
    const storePath = getFallbackStorePath();
    if (fs.existsSync(storePath)) {
      const raw = fs.readFileSync(storePath, "utf-8");
      const records: FallbackInquiryRecord[] = JSON.parse(raw);
      const filtered = records.filter((r) => r.id !== id);
      fs.writeFileSync(storePath, JSON.stringify(filtered, null, 2), "utf-8");
    }
  } catch (err) {
    console.warn("Could not delete from fallback store:", err);
  }
}

export function updateFallbackStatus(id: string, newStatus: string) {
  try {
    const storePath = getFallbackStorePath();
    if (fs.existsSync(storePath)) {
      const raw = fs.readFileSync(storePath, "utf-8");
      const records: FallbackInquiryRecord[] = JSON.parse(raw);
      const record = records.find((r) => r.id === id);
      if (record) {
        record.status = newStatus;
        record.updatedAt = new Date().toISOString();
        fs.writeFileSync(storePath, JSON.stringify(records, null, 2), "utf-8");
      }
    }
  } catch (err) {
    console.warn("Could not update status in fallback store:", err);
  }
}
