"use server";

import prisma from "@/lib/prisma";
import { cookies, headers } from "next/headers";
import crypto from "crypto";

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

      // Insert fact record into VisitorSession for Power BI analytics
      await prisma.visitorSession.create({
        data: {
          sessionId,
          pageVisited: pagePath,
          referrer,
          userAgent,
        },
      });
    } else {
      // Ensure session exists in SQLite database in case of DB reset
      const existingSession = await prisma.visitorSession.findUnique({
        where: { sessionId },
      });
      if (!existingSession) {
        await prisma.visitorSession.create({
          data: {
            sessionId,
            pageVisited: pagePath,
            referrer,
            userAgent,
          },
        });
        isNewSession = true;
      }
    }

    // Record this individual page view fact in PageView table
    await prisma.pageView.create({
      data: {
        sessionId,
        path: pagePath,
        referrer,
        userAgent,
      },
    });

    // Compute 100% authentic, real counts from SQLite database
    const [totalVisits, uniqueVisits] = await Promise.all([
      prisma.pageView.count(),
      prisma.visitorSession.count(),
    ]);

    // Keep SiteMetrics in sync for fast static queries
    await prisma.siteMetrics.upsert({
      where: { id: 1 },
      update: {
        totalVisits,
        uniqueVisits,
      },
      create: {
        id: 1,
        totalVisits,
        uniqueVisits,
      },
    });

    return {
      totalVisits,
      uniqueVisits,
      isNewSession,
    };
  } catch (err) {
    console.error("Error updating visit counter:", err);
    try {
      const metrics = await prisma.siteMetrics.findUnique({ where: { id: 1 } });
      return {
        totalVisits: metrics?.totalVisits ?? 0,
        uniqueVisits: metrics?.uniqueVisits ?? 0,
        isNewSession: false,
      };
    } catch {
      return {
        totalVisits: 0,
        uniqueVisits: 0,
        isNewSession: false,
      };
    }
  }
}

export async function getLiveMetrics() {
  try {
    const metrics = await prisma.siteMetrics.findUnique({
      where: { id: 1 },
    });
    if (metrics) {
      return {
        totalVisits: metrics.totalVisits,
        uniqueVisits: metrics.uniqueVisits,
      };
    }
    const [totalVisits, uniqueVisits] = await Promise.all([
      prisma.pageView.count(),
      prisma.visitorSession.count(),
    ]);
    return {
      totalVisits,
      uniqueVisits,
    };
  } catch {
    return {
      totalVisits: 0,
      uniqueVisits: 0,
    };
  }
}
