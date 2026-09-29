import React from "react";

export const SOCIAL_LINKS = {
  instagram: {
    name: "Instagram",
    handle: "@blue_space_interiors",
    url: "https://www.instagram.com/blue_space_interiors?stkn=d215ZWN2cTdqN3Fk",
    description: "Real Site Walkthroughs & Completed Thane Residences",
  },
  facebook: {
    name: "Facebook",
    handle: "Blue Space Interiors",
    url: "https://www.facebook.com/108155958732682?ref=PROFILE_EDIT_xav_ig_profile_page_web",
    description: "Official Client Reviews & Studio Updates",
  },
  threads: {
    name: "Threads",
    handle: "@blue_space_interiors",
    url: "https://www.threads.com/@blue_space_interiors?xmt=AQG0IGwV1GoBLDtI18XKZJ9Y2wucsVIJLH9P3JFgGawIpf0",
    description: "Daily Architectural Insights & Material Notes",
  },
};

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function ThreadsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 192 192"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.481 72.7876C81.1895 64.1287 89.9702 60.2796 97.222 60.2796C97.2974 60.2796 97.3734 60.2796 97.4497 60.2803C110.165 60.3619 119.583 68.9994 121.282 82.5273C113.881 81.3654 106.126 81.2587 98.3752 82.2081C70.3845 85.6385 54.1206 100.957 54.1206 122.395C54.1206 141.494 68.3999 154.084 87.728 154.084C104.992 154.084 116.488 145.483 122.569 133.003C127.818 143.743 136.903 149.775 149.754 149.775C169.576 149.775 180.126 134.195 180.126 106.277C180.126 68.9664 153.256 32.7443 97.222 32.7443C45.2638 32.7443 12 70.3642 12 119.782C12 168.318 45.4217 207 97.222 207C125.751 207 149.467 195.482 164.717 174.156L151.782 162.381C139.73 178.694 120.301 187.625 97.222 187.625C57.6534 187.625 31.375 156.402 31.375 119.782C31.375 79.5165 59.2272 52.1193 97.222 52.1193C141.442 52.1193 160.751 79.919 160.751 106.277C160.751 126.966 153.518 134.225 144.754 134.225C136.702 134.225 130.407 129.077 127.323 120.598C134.425 107.039 137.954 94.7573 138.835 91.5645C139.752 90.6974 140.655 89.8378 141.537 88.9883ZM120.844 98.4239C119.986 103.743 117.818 110.748 114.167 117.391C109.839 125.265 102.399 131.272 92.5113 131.272C80.2033 131.272 73.4956 123.361 73.4956 112.443C73.4956 97.1062 85.5133 87.2796 103.754 85.0441C109.689 84.3168 115.426 84.6063 120.844 85.5772V98.4239Z" />
    </svg>
  );
}

interface SocialLinksProps {
  variant?: "footer" | "navbar" | "contact-card";
  className?: string;
}

export default function SocialLinks({ variant = "footer", className = "" }: SocialLinksProps) {
  if (variant === "navbar") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <a
          href={SOCIAL_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Blue Space Interiors Instagram"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#3154A5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href={SOCIAL_LINKS.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Blue Space Interiors Facebook"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#3154A5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href={SOCIAL_LINKS.threads.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Blue Space Interiors Threads"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#3154A5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
          aria-label="Threads"
        >
          <ThreadsIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  if (variant === "contact-card") {
    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={SOCIAL_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#3154A5] hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#3154A5] flex items-center justify-center group-hover:bg-[#3154A5] group-hover:text-white transition-colors flex-shrink-0">
            <InstagramIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#3154A5] transition-colors">
              Instagram • {SOCIAL_LINKS.instagram.handle}
            </div>
            <div className="text-[11px] text-slate-500 font-light">
              {SOCIAL_LINKS.instagram.description}
            </div>
          </div>
        </a>

        <a
          href={SOCIAL_LINKS.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#3154A5] hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#3154A5] flex items-center justify-center group-hover:bg-[#3154A5] group-hover:text-white transition-colors flex-shrink-0">
            <FacebookIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#3154A5] transition-colors">
              Facebook • {SOCIAL_LINKS.facebook.handle}
            </div>
            <div className="text-[11px] text-slate-500 font-light">
              {SOCIAL_LINKS.facebook.description}
            </div>
          </div>
        </a>

        <a
          href={SOCIAL_LINKS.threads.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#3154A5] hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#3154A5] flex items-center justify-center group-hover:bg-[#3154A5] group-hover:text-white transition-colors flex-shrink-0">
            <ThreadsIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#3154A5] transition-colors">
              Threads • {SOCIAL_LINKS.threads.handle}
            </div>
            <div className="text-[11px] text-slate-500 font-light">
              {SOCIAL_LINKS.threads.description}
            </div>
          </div>
        </a>
      </div>
    );
  }

  // Default: Footer variant
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <a
        href={SOCIAL_LINKS.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Follow Blue Space Interiors on Instagram"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#3154A5] text-slate-700 hover:text-[#3154A5] text-xs font-medium shadow-sm transition-all group"
      >
        <InstagramIcon className="w-4 h-4 text-[#3154A5] group-hover:scale-110 transition-transform" />
        <span>Instagram</span>
      </a>

      <a
        href={SOCIAL_LINKS.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Connect with Blue Space Interiors on Facebook"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#3154A5] text-slate-700 hover:text-[#3154A5] text-xs font-medium shadow-sm transition-all group"
      >
        <FacebookIcon className="w-4 h-4 text-[#3154A5] group-hover:scale-110 transition-transform" />
        <span>Facebook</span>
      </a>

      <a
        href={SOCIAL_LINKS.threads.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Follow Blue Space Interiors on Threads"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#3154A5] text-slate-700 hover:text-[#3154A5] text-xs font-medium shadow-sm transition-all group"
      >
        <ThreadsIcon className="w-4 h-4 text-[#3154A5] group-hover:scale-110 transition-transform" />
        <span>Threads</span>
      </a>
    </div>
  );
}
