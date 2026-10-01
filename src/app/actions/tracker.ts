"use server";

import prisma from "@/lib/prisma";
import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { getCloudMetrics, updateCloudMetrics } from "@/lib/cloudStore";

export async function trackAndGetVisitCount(pagePath = "/"): Promise<{
  totalVisits: number;
  uniqueVisits: number;
  isNewSession: boolean;
}> {
  try {
    const cookieStore = await cookies();
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "unknown";
    const referrer = headersList.get("referer") || null;

    let sessionId = cookieStore.get("bsi_visitor_session")?.value;
    let isNewSession = false;

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      isNewSession = true;
      cookieStore.set("bsi_visitor_session", sessionId, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      // Insert fact record into VisitorSession for analytics
      await prisma.visitorSession.create({
        data: {
          sessionId,
          pageVisited: pagePath,
          referrer,
          userAgent,
        },
      }).catch(() => null);
    } else {
      // Ensure session exists in SQLite database in case of DB reset
      const existingSession = await prisma.visitorSession.findUnique({
        where: { sessionId },
      }).catch(() => null);

      if (!existingSession) {
        await prisma.visitorSession.create({
          data: {
            sessionId,
            pageVisited: pagePath,
            referrer,
            userAgent,
          },
        }).catch(() => null);
        isNewSession = true;
      }
    }

    // Record this individual page view fact in PageView table
    await prisma.pageView.create({
      data: {
        sessionId: sessionId || "anon",
        path: pagePath,
        referrer,
        userAgent,
      },
    }).catch(() => null);

    // Compute authentic counts from SQLite database
    let totalVisits = 0;
    let uniqueVisits = 0;

    try {
      const [tCount, uCount] = await Promise.all([
        prisma.pageView.count(),
        prisma.visitorSession.count(),
      ]);
      totalVisits = tCount;
      uniqueVisits = uCount;

      await prisma.siteMetrics.upsert({
        where: { id: 1 },
        update: { totalVisits, uniqueVisits },
        create: { id: 1, totalVisits, uniqueVisits },
      }).catch(() => null);
    } catch {
      // If sqlite count fails, fall back to cloud store
      const cloud = await getCloudMetrics();
      if (cloud) {
        totalVisits = cloud.totalVisits + 1;
        uniqueVisits = cloud.uniqueVisits + (isNewSession ? 1 : 0);
      }
    }

    // Synchronize to cloud store in background
    if (totalVisits > 0) {
      updateCloudMetrics(totalVisits, uniqueVisits).catch(() => null);
    }

    return {
      totalVisits,
      uniqueVisits,
      isNewSession,
    };
  } catch (err) {
    console.error("Error updating visit counter:", err);
    const cloud = await getCloudMetrics().catch(() => null);
    return {
      totalVisits: cloud?.totalVisits || 1,
      uniqueVisits: cloud?.uniqueVisits || 1,
      isNewSession: false,
    };
  }
}

export async function getLiveMetrics() {
  try {
    const metrics = await prisma.siteMetrics.findUnique({
      where: { id: 1 },
    });
    if (metrics && metrics.totalVisits > 0) {
      return {
        totalVisits: metrics.totalVisits,
        uniqueVisits: metrics.uniqueVisits,
      };
    }
  } catch {
    // Ignore and fallback to cloud store
  }

  try {
    const cloud = await getCloudMetrics();
    if (cloud && cloud.totalVisits > 0) {
      return cloud;
    }
  } catch {
    // Ignore
  }

  return {
    totalVisits: 0,
    uniqueVisits: 0,
  };
}
