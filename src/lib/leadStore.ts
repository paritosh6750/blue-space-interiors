import {
  saveToFallbackStore,
  readFallbackStore,
  deleteFromFallbackStore,
  updateFallbackStatus,
  FallbackInquiryRecord,
} from "@/lib/inquiryStore";
import {
  getCloudInquiries,
  saveCloudInquiry,
  updateCloudInquiryStatus,
  deleteCloudInquiry,
} from "@/lib/cloudStore";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import {
  getInquiriesFromGoogleSheet,
  appendInquiryToGoogleSheet,
  isGoogleSheetConfigured,
  getGoogleSheetConfig,
} from "@/lib/googleSheetStore";
import crypto from "crypto";

export { isGoogleSheetConfigured, getGoogleSheetConfig };

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

const DEFAULT_POSTGRES_URL =
  "postgresql://neondb_owner:npg_j0wMJ7zucarT@ep-icy-fire-b4fgydet-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require";

// Check if a cloud PostgreSQL connection string is configured
export function isPostgresConfigured(): boolean {
  const url =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    DEFAULT_POSTGRES_URL;

  return !!(url && (url.startsWith("postgres://") || url.startsWith("postgresql://")));
}

function getPostgresClient(): NeonQueryFunction<false, false> | null {
  const url =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    DEFAULT_POSTGRES_URL;

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

const dummyNames = new Set([
  "vikramaditya deshmukh",
  "dr. rohini sawant",
  "rajesh singhania",
  "test client",
  "mr. rajesh sharma",
]);

/**
 * Fetch all customer-submitted inquiries in strict chronological sequence (newest first).
 * Neon Serverless PostgreSQL is the authoritative live database engine across all devices.
 */
export async function getAllInquiries(): Promise<InquiryRecord[]> {
  const map = new Map<string, InquiryRecord>();

  // 1. Primary: Fast authoritative fetch from Neon Cloud PostgreSQL
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

      for (const r of rows as unknown as Array<Record<string, unknown>>) {
        const id = String(r.id);
        map.set(id, {
          id,
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
        });
      }

      // If Neon returned records, return them directly for sub-100ms response time
      if (map.size > 0) {
        return Array.from(map.values())
          .filter((i) => !dummyNames.has(i.fullName.trim().toLowerCase()))
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
    } catch (err) {
      console.warn("Neon Postgres query error, checking secondary stores:", err);
    }
  }

  // 2. Google Sheets Integration (reads live rows if configured and Neon has not returned)
  if (isGoogleSheetConfigured()) {
    try {
      const sheetInquiries = await getInquiriesFromGoogleSheet();
      for (const item of sheetInquiries) {
        if (item && item.id && !map.has(item.id)) {
          map.set(item.id, item);
        }
      }
    } catch (sheetErr) {
      console.warn("Google Sheets live fetch error:", sheetErr);
    }
  }

  // 3. Secondary: Fetch from Cloud Store
  try {
    const cloudInquiries = await getCloudInquiries();
    for (const item of cloudInquiries) {
      if (item && item.id && !map.has(item.id)) {
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
          message: item.message || null,
          status: item.status || "NEW",
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        });
      }
    }
  } catch (cloudErr) {
    console.warn("Cloud store read failed:", cloudErr);
  }

  // 4. Local fallback file
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

  // Filter out dummy test entries
  const cleanList = Array.from(map.values())
    .filter((i) => !dummyNames.has(i.fullName.trim().toLowerCase()))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return cleanList;
}

/**
 * Insert a customer submission cleanly across Universal Cloud Store, PostgreSQL, and local file.
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

  const record: InquiryRecord = {
    id,
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    propertyType: data.propertyType || "Turnkey Fitout",
    locationArea: data.locationArea || "Not Specified",
    configuration: data.configuration || "Custom Scope",
    budgetRange: data.budgetRange || "On Discussion",
    preferredTimeline: data.preferredTimeline || "Immediate",
    message: data.message || "",
    status: "NEW",
    createdAt: now,
    updatedAt: now,
  };

  // 1. Primary: Save directly to Neon PostgreSQL (Authoritative multi-device cloud database)
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
      console.log(`[Neon Postgres] Saved inquiry for ${record.fullName}`);
    } catch (pgErr) {
      console.warn("Neon Postgres insert error:", pgErr);
    }
  }

  // 2. Google Sheets sync if configured
  if (isGoogleSheetConfigured()) {
    appendInquiryToGoogleSheet(record).catch(() => null);
  }

  // 3. Background mirror to secondary cloud store (non-blocking)
  saveCloudInquiry(record).catch(() => null);

  // 4. Mirror to local fallback file
  saveToFallbackStore({
    ...record,
    message: record.message || "",
  });

  return id;
}

/**
 * Permanently delete an inquiry across all storage engines.
 */
export async function deleteInquiryById(id: string): Promise<boolean> {
  // 1. PostgreSQL (Primary)
  const sql = getPostgresClient();
  if (sql) {
    try {
      await ensurePostgresTable(sql);
      await sql`DELETE FROM lead_inquiries WHERE id = ${id};`;
    } catch (err) {
      console.warn("Postgres delete error:", err);
    }
  }

  // 2. Secondary mirrors (non-blocking)
  deleteCloudInquiry(id).catch(() => null);
  deleteFromFallbackStore(id);
  return true;
}

/**
 * Update status across all storage engines.
 */
export async function updateInquiryStatusById(id: string, newStatus: string): Promise<boolean> {
  // 1. PostgreSQL (Primary)
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

  // 2. Secondary mirrors (non-blocking)
  updateCloudInquiryStatus(id, newStatus).catch(() => null);
  updateFallbackStatus(id, newStatus);
  return true;
}
