/**
 * Google Sheets Integration for Blue Space Interiors
 * Supports:
 * 1. Google Apps Script Web App (two-way read & write via POST / GET)
 * 2. Public Google Sheet CSV Export (direct read from published/viewable sheet)
 */

export interface GoogleSheetInquiry {
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

const TIMEOUT_MS = 6000;

function extractSheetId(input: string): string | null {
  if (!input) return null;
  if (/^[a-zA-Z0-9-_]{25,60}$/.test(input.trim())) {
    return input.trim();
  }
  const match = input.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

const DEFAULT_SHEET_ID = "1gnues-0I8Py8KFbAlAH9E66F8nFU3LV0imiCoJQsaOI";

export function getGoogleSheetConfig() {
  const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL || process.env.GOOGLE_SCRIPT_URL;
  const sheetInput =
    process.env.GOOGLE_SHEET_URL ||
    process.env.GOOGLE_SHEET_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
    DEFAULT_SHEET_ID;

  const sheetId = sheetInput ? extractSheetId(sheetInput) : DEFAULT_SHEET_ID;

  return {
    scriptUrl: scriptUrl?.trim() || null,
    sheetId: sheetId || DEFAULT_SHEET_ID,
    sheetUrl: `https://docs.google.com/spreadsheets/d/${sheetId || DEFAULT_SHEET_ID}/edit`,
    isConfigured: true,
  };
}

export function isGoogleSheetConfigured(): boolean {
  const config = getGoogleSheetConfig();
  return config.isConfigured;
}

/**
 * Robust CSV parser for Google Sheets export
 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  const lines = text.split(/\r?\n/);

  for (const line of lines) {
    if (!line.trim()) continue;
    const values: string[] = [];
    let cur = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        values.push(cur.trim());
        cur = "";
      } else {
        cur += char;
      }
    }
    values.push(cur.trim());
    rows.push(values);
  }
  return rows;
}

/**
 * Fetch all inquiries from Google Sheets
 */
export async function getInquiriesFromGoogleSheet(): Promise<GoogleSheetInquiry[]> {
  const { scriptUrl, sheetId } = getGoogleSheetConfig();

  // 1. Try Google Apps Script Web App first
  if (scriptUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const res = await fetch(scriptUrl, {
        method: "GET",
        headers: { Accept: "application/json" },
        redirect: "follow",
        signal: controller.signal,
        cache: "no-store",
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        const items = Array.isArray(json) ? json : json.inquiries || json.data;
        if (Array.isArray(items)) {
          return items
            .map((r) => normalizeSheetRow(r))
            .filter((item): item is GoogleSheetInquiry => item !== null);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch from Google Apps Script Web App:", err);
    }
  }

  // 2. Try Public Google Sheet CSV Export
  if (sheetId) {
    try {
      const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const res = await fetch(csvUrl, {
        headers: { "Cache-Control": "no-cache" },
        redirect: "follow",
        signal: controller.signal,
        cache: "no-store",
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const csvText = await res.text();
        const rows = parseCsv(csvText);
        if (rows.length > 1) {
          const headers = rows[0].map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ""));
          const inquiries: GoogleSheetInquiry[] = [];

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const parsed = mapCsvRowToInquiry(headers, row);
            if (parsed) inquiries.push(parsed);
          }

          return inquiries;
        }
      }
    } catch (err) {
      console.warn("Failed to fetch from Google Sheet CSV export:", err);
    }
  }

  return [];
}

/**
 * Append a new customer inquiry to Google Sheets
 */
export async function appendInquiryToGoogleSheet(record: GoogleSheetInquiry): Promise<boolean> {
  const { scriptUrl } = getGoogleSheetConfig();

  if (!scriptUrl) {
    return false;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    return res.ok;
  } catch (err) {
    console.warn("Failed to append inquiry to Google Sheet:", err);
    return false;
  }
}

function normalizeSheetRow(row: Record<string, unknown>): GoogleSheetInquiry | null {
  if (!row) return null;
  const fullName = String(row.fullName || row.full_name || row.Name || row.name || "").trim();
  const phone = String(row.phone || row.Phone || row.mobile || "").trim();
  if (!fullName || !phone) return null;

  const id = String(row.id || row.inquiryId || `GSH-${Date.now().toString().slice(-6)}`);
  const createdAt = row.createdAt || row.created_at || row.Date || new Date().toISOString();

  return {
    id,
    fullName,
    phone,
    email: String(row.email || row.Email || "").trim(),
    propertyType: String(row.propertyType || row.property_type || "Turnkey Fitout").trim(),
    locationArea: String(row.locationArea || row.location_area || row.Address || row.address || "Not Specified").trim(),
    configuration: String(row.configuration || "Custom Scope").trim(),
    budgetRange: String(row.budgetRange || "On Discussion").trim(),
    preferredTimeline: String(row.preferredTimeline || "Immediate").trim(),
    message: row.message || row.Message || row.enquiry ? String(row.message || row.Message || row.enquiry) : null,
    status: String(row.status || "NEW").trim(),
    createdAt: new Date(String(createdAt)).toISOString(),
    updatedAt: new Date(String(row.updatedAt || createdAt)).toISOString(),
  };
}

function mapCsvRowToInquiry(headers: string[], values: string[]): GoogleSheetInquiry | null {
  const map: Record<string, string> = {};
  for (let i = 0; i < headers.length; i++) {
    map[headers[i]] = values[i] || "";
  }

  const fullName =
    map["fullname"] ||
    map["name"] ||
    map["clientname"] ||
    map["customername"] ||
    values[2] ||
    "";
  const phone = map["phone"] || map["mobile"] || map["contact"] || values[3] || "";

  if (!fullName.trim() || !phone.trim()) return null;

  const id = map["id"] || map["inquiryid"] || values[0] || `GS-${Date.now().toString().slice(-6)}`;
  const dateVal = map["date"] || map["createdat"] || map["timestamp"] || values[1] || new Date().toISOString();

  return {
    id,
    fullName: fullName.trim(),
    phone: phone.trim(),
    email: (map["email"] || values[4] || "").trim(),
    locationArea: (map["location"] || map["address"] || map["area"] || values[5] || "Not Specified").trim(),
    propertyType: (map["propertytype"] || map["type"] || values[6] || "Turnkey Fitout").trim(),
    configuration: (map["configuration"] || map["config"] || values[7] || "Custom Scope").trim(),
    budgetRange: (map["budget"] || map["budgetrange"] || values[8] || "On Discussion").trim(),
    preferredTimeline: (map["timeline"] || values[9] || "Immediate").trim(),
    message: map["message"] || map["enquiry"] || map["notes"] || values[10] || null,
    status: (map["status"] || values[11] || "NEW").trim(),
    createdAt: new Date(dateVal).toISOString(),
    updatedAt: new Date(dateVal).toISOString(),
  };
}
