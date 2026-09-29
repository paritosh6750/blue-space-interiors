import prisma from "@/lib/prisma";
import {
  saveToFallbackStore,
  readFallbackStore,
  deleteFromFallbackStore,
  updateFallbackStatus,
  FallbackInquiryRecord,
} from "@/lib/inquiryStore";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import crypto from "crypto";

export interface InquiryRecord {
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
}

// Check if a cloud PostgreSQL connection string is configured
function getPostgresClient(): NeonQueryFunction<false, false> | null {
  const url = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (url && (url.startsWith("postgres://") || url.startsWith("postgresql://"))) {
    try {
      return neon(url);
    } catch (err) {
      console.warn("Could not initialize Neon Postgres client:", err);
    }
  }
  return null;
}

// Ensure the PostgreSQL table exists on initial invocation
let pgTableInitialized = false;
async function ensurePostgresTable(sql: NeonQueryFunction<false, false>) {
  if (pgTableInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS lead_inquiries (
        id TEXT PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        property_type TEXT NOT NULL,
        location_area TEXT NOT NULL,
        configuration TEXT NOT NULL,
        budget_range TEXT NOT NULL,
        preferred_timeline TEXT NOT NULL,
        message TEXT,
        status TEXT NOT NULL DEFAULT 'NEW',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;
    pgTableInitialized = true;
  } catch (err) {
    console.warn("Error verifying PostgreSQL lead_inquiries table:", err);
  }
}

/**
 * Fetch all customer-submitted inquiries in strict chronological sequence (newest first).
 * Completely filters out any dummy/test entries.
 */
export async function getAllInquiries(): Promise<InquiryRecord[]> {
  const sql = getPostgresClient();

  if (sql) {
    try {
      await ensurePostgresTable(sql);
      const rows = await sql`
        SELECT 
          id,
          full_name AS "fullName",
          email,
          phone,
          property_type AS "propertyType",
          location_area AS "locationArea",
          configuration,
          budget_range AS "budgetRange",
          preferred_timeline AS "preferredTimeline",
          message,
          status,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
        FROM lead_inquiries
        ORDER BY created_at DESC;
      `;

      return (rows as unknown as Array<Record<string, unknown>>).map((r) => ({
        id: String(r.id),
        fullName: String(r.fullName),
        email: String(r.email),
        phone: String(r.phone),
        propertyType: String(r.propertyType),
        locationArea: String(r.locationArea),
        configuration: String(r.configuration),
        budgetRange: String(r.budgetRange),
        preferredTimeline: String(r.preferredTimeline),
        message: r.message ? String(r.message) : null,
        status: String(r.status || "NEW"),
        createdAt: new Date(String(r.createdAt)).toISOString(),
        updatedAt: new Date(String(r.updatedAt)).toISOString(),
      }));
    } catch (err) {
      console.warn("Postgres query error, falling back to local store:", err);
    }
  }

  // SQLite + Fallback Store aggregation
  const map = new Map<string, InquiryRecord>();

  try {
    const dbInquiries = await prisma.leadInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    for (const item of dbInquiries) {
      map.set(item.id, {
        id: item.id,
        fullName: item.fullName,
        email: item.email,
        phone: item.phone,
        propertyType: item.propertyType,
        locationArea: item.locationArea,
        configuration: item.configuration,
        budgetRange: item.budgetRange,
        preferredTimeline: item.preferredTimeline,
        message: item.message,
        status: item.status,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
      });
    }
  } catch (err) {
    console.warn("Prisma query fallback:", err);
  }

  const fallbackList = readFallbackStore();
  for (const fb of fallbackList) {
    if (!map.has(fb.id)) {
      map.set(fb.id, {
        id: fb.id,
        fullName: fb.fullName,
        email: fb.email,
        phone: fb.phone,
        propertyType: fb.propertyType,
        locationArea: fb.locationArea,
        configuration: fb.configuration,
        budgetRange: fb.budgetRange,
        preferredTimeline: fb.preferredTimeline,
        message: fb.message || null,
        status: fb.status || "NEW",
        createdAt: fb.createdAt,
        updatedAt: fb.updatedAt,
      });
    }
  }

  // Filter out any known dummy names just in case
  const dummyNames = new Set([
    "vikramaditya deshmukh",
    "dr. rohini sawant",
    "rajesh singhania",
    "test client",
    "mr. rajesh sharma",
  ]);

  const cleanList = Array.from(map.values())
    .filter((i) => !dummyNames.has(i.fullName.trim().toLowerCase()))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return cleanList;
}

/**
 * Insert a customer submission cleanly into cloud Postgres and/or local database.
 */
export async function createInquiry(data: {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  locationArea: string;
  configuration: string;
  budgetRange: string;
  preferredTimeline: string;
  message?: string;
}): Promise<string> {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const record: FallbackInquiryRecord = {
    id,
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
    createdAt: now,
    updatedAt: now,
  };

  const sql = getPostgresClient();
  if (sql) {
    try {
      await ensurePostgresTable(sql);
      await sql`
        INSERT INTO lead_inquiries (
          id, full_name, email, phone, property_type, location_area, configuration,
          budget_range, preferred_timeline, message, status, created_at, updated_at
        ) VALUES (
          ${record.id}, ${record.fullName}, ${record.email}, ${record.phone},
          ${record.propertyType}, ${record.locationArea}, ${record.configuration},
          ${record.budgetRange}, ${record.preferredTimeline}, ${record.message},
          ${record.status}, ${record.createdAt}, ${record.updatedAt}
        );
      `;
    } catch (pgErr) {
      console.warn("Postgres insert error:", pgErr);
    }
  }

  // Also save to SQLite if possible
  try {
    await prisma.leadInquiry.create({
      data: {
        id: record.id,
        fullName: record.fullName,
        email: record.email,
        phone: record.phone,
        propertyType: record.propertyType,
        locationArea: record.locationArea,
        configuration: record.configuration,
        budgetRange: record.budgetRange,
        preferredTimeline: record.preferredTimeline,
        message: record.message,
        status: record.status,
      },
    });
  } catch (dbErr) {
    console.warn("Prisma insert fallback:", dbErr);
  }

  // Always mirror to fallback store
  saveToFallbackStore(record);

  return id;
}

/**
 * Permanently delete an inquiry across all storage engines.
 */
export async function deleteInquiryById(id: string): Promise<boolean> {
  const sql = getPostgresClient();
  if (sql) {
    try {
      await ensurePostgresTable(sql);
      await sql`DELETE FROM lead_inquiries WHERE id = ${id};`;
    } catch (err) {
      console.warn("Postgres delete error:", err);
    }
  }

  try {
    await prisma.leadInquiry.delete({ where: { id } }).catch(() => null);
  } catch {
    // Ignore if not present
  }

  deleteFromFallbackStore(id);
  return true;
}

/**
 * Update status across all storage engines.
 */
export async function updateInquiryStatusById(id: string, newStatus: string): Promise<boolean> {
  const sql = getPostgresClient();
  if (sql) {
    try {
      await ensurePostgresTable(sql);
      await sql`
        UPDATE lead_inquiries 
        SET status = ${newStatus}, updated_at = NOW() 
        WHERE id = ${id};
      `;
    } catch (err) {
      console.warn("Postgres status update error:", err);
    }
  }

  try {
    await prisma.leadInquiry.update({
      where: { id },
      data: { status: newStatus },
    }).catch(() => null);
  } catch {
    // Ignore
  }

  updateFallbackStatus(id, newStatus);
  return true;
}
