"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackAndGetVisitCount } from "@/app/actions/tracker";

interface VisitorCounterProps {
  initialTotal?: number;
  initialUnique?: number;
}

export default function VisitorCounter(_props: VisitorCounterProps) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  // Silently track visit on route change for Admin Portal analytics
  useEffect(() => {
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    trackAndGetVisitCount(pathname).catch((err) => {
      console.error("Failed to track visit:", err);
    });
  }, [pathname]);

  // Silent background tracking for Admin Portal metrics only — no public counter rendered
  return null;
}
