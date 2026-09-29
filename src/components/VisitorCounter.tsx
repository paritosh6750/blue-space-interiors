"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackAndGetVisitCount } from "@/app/actions/tracker";
import { Users, Eye } from "lucide-react";

interface VisitorCounterProps {
  initialTotal?: number;
  initialUnique?: number;
}

export default function VisitorCounter({
  initialTotal = 0,
  initialUnique = 0,
}: VisitorCounterProps) {
  const pathname = usePathname();
  const [metrics, setMetrics] = useState({
    totalVisits: initialTotal,
    uniqueVisits: initialUnique,
    isNewSession: false,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  // Track visit on route change
  useEffect(() => {
    let isMounted = true;

    async function track() {
      // Avoid duplicate track calls for identical pathname in strict mode mount
      if (lastTrackedPath.current === pathname) return;
      lastTrackedPath.current = pathname;

      try {
        setIsUpdating(true);
        const result = await trackAndGetVisitCount(pathname);
        if (isMounted) {
          setMetrics(result);
        }
      } catch (err) {
        console.error("Failed to track visit:", err);
      } finally {
        if (isMounted) {
          setTimeout(() => setIsUpdating(false), 600);
        }
      }
    }

    track();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  // Periodic polling for live updates across multiple active sessions
  useEffect(() => {
    let isMounted = true;

    async function syncLatest() {
      try {
        const res = await fetch("/api/tracker?readOnly=true");
        if (res.ok && isMounted) {
          const data = await res.json();
          setMetrics((prev) => {
            if (
              data.totalVisits !== prev.totalVisits ||
              data.uniqueVisits !== prev.uniqueVisits
            ) {
              return {
                ...prev,
                totalVisits: data.totalVisits,
                uniqueVisits: data.uniqueVisits,
              };
            }
            return prev;
          });
        }
      } catch {
        // Silently ignore background poll failure
      }
    }

    const interval = setInterval(syncLatest, 15000); // sync every 15s
    const handleFocus = () => syncLatest();
    window.addEventListener("focus", handleFocus);

    return () => {
      isMounted = false;
      clearInterval(interval);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div
      id="website-visit-counter-module"
      className="w-full bg-[#f4f2ec] border-t border-slate-200 py-3 px-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-xs">
        {/* Real-time Counter Badge */}
        <div className="flex items-center gap-4 bg-white px-5 py-2 rounded-full border border-slate-300 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Eye className="w-3.5 h-3.5 text-[#3154A5]" />
            <span className="text-slate-500">Total Pageviews:</span>
            <span
              className={`font-semibold text-slate-900 tracking-wider font-mono transition-transform duration-300 ${
                isUpdating ? "scale-110 text-[#3154A5]" : ""
              }`}
            >
              {metrics.totalVisits.toLocaleString()}
            </span>
          </div>

          <div className="h-3 w-px bg-slate-200"></div>

          <div className="flex items-center gap-1.5 text-slate-600">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-slate-500">Unique Homeowners:</span>
            <span
              className={`font-bold text-[#3154A5] tracking-wider font-mono transition-transform duration-300 ${
                isUpdating ? "scale-110" : ""
              }`}
            >
              {metrics.uniqueVisits.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
