export interface CloudInquiryRecord {
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

const CLOUD_INQUIRIES_ENDPOINT =
  "https://api.restful-api.dev/objects/ff808181a09d98f701a0f913184b5b60";
const CLOUD_METRICS_ENDPOINT =
  "https://api.restful-api.dev/objects/ff808181a09d98f701a0f91377045b61";

const TIMEOUT_MS = 4500;

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(id);
  }
}

/**
 * Fetch all inquiries from universal cloud store.
 */
export async function getCloudInquiries(): Promise<CloudInquiryRecord[]> {
  try {
    const res = await fetchWithTimeout(CLOUD_INQUIRIES_ENDPOINT, {
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
    });

    if (!res.ok) {
      console.warn("Cloud store responded with non-200:", res.status);
      return [];
    }

    const data = await res.json();
    const inquiries = data?.data?.inquiries;
    if (Array.isArray(inquiries)) {
      return inquiries;
    }
  } catch (err) {
    console.warn("Error fetching inquiries from cloud store:", err);
  }
  return [];
}

/**
 * Save a new inquiry to universal cloud store, placing it at the front.
 */
export async function saveCloudInquiry(record: CloudInquiryRecord): Promise<boolean> {
  try {
    const current = await getCloudInquiries();
    // Deduplicate by ID
    const updated = [record, ...current.filter((item) => item.id !== record.id)];

    const res = await fetchWithTimeout(CLOUD_INQUIRIES_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "BSI_Production_Lead_Inquiries_Store",
        data: {
          inquiries: updated,
        },
      }),
    });

    return res.ok;
  } catch (err) {
    console.warn("Error saving inquiry to cloud store:", err);
    return false;
  }
}

/**
 * Update an existing inquiry status in the universal cloud store.
 */
export async function updateCloudInquiryStatus(
  id: string,
  newStatus: string
): Promise<boolean> {
  try {
    const current = await getCloudInquiries();
    let found = false;

    const updated = current.map((item) => {
      if (item.id === id) {
        found = true;
        return {
          ...item,
          status: newStatus,
          updatedAt: new Date().toISOString(),
        };
      }
      return item;
    });

    if (!found) return false;

    const res = await fetchWithTimeout(CLOUD_INQUIRIES_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "BSI_Production_Lead_Inquiries_Store",
        data: {
          inquiries: updated,
        },
      }),
    });

    return res.ok;
  } catch (err) {
    console.warn("Error updating inquiry in cloud store:", err);
    return false;
  }
}

/**
 * Delete an inquiry by ID from the universal cloud store.
 */
export async function deleteCloudInquiry(id: string): Promise<boolean> {
  try {
    const current = await getCloudInquiries();
    const updated = current.filter((item) => item.id !== id);

    const res = await fetchWithTimeout(CLOUD_INQUIRIES_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "BSI_Production_Lead_Inquiries_Store",
        data: {
          inquiries: updated,
        },
      }),
    });

    return res.ok;
  } catch (err) {
    console.warn("Error deleting inquiry from cloud store:", err);
    return false;
  }
}

/**
 * Fetch visitor metrics from universal cloud store.
 */
export async function getCloudMetrics(): Promise<{ totalVisits: number; uniqueVisits: number } | null> {
  try {
    const res = await fetchWithTimeout(CLOUD_METRICS_ENDPOINT, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.data && typeof data.data.totalVisits === "number") {
        return {
          totalVisits: data.data.totalVisits,
          uniqueVisits: data.data.uniqueVisits || 1,
        };
      }
    }
  } catch (err) {
    console.warn("Error reading metrics from cloud store:", err);
  }
  return null;
}

/**
 * Update visitor metrics in universal cloud store.
 */
export async function updateCloudMetrics(totalVisits: number, uniqueVisits: number): Promise<void> {
  try {
    await fetchWithTimeout(CLOUD_METRICS_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "BSI_Production_Metrics_Store",
        data: {
          totalVisits,
          uniqueVisits,
        },
      }),
    });
  } catch (err) {
    console.warn("Error syncing metrics to cloud store:", err);
  }
}
