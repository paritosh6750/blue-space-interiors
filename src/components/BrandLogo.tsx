import Link from "next/link";

interface BrandLogoProps {
  variant?: "horizontal" | "stacked" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  variant = "horizontal",
  className = "",
  size = "md",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const textSizes = {
    sm: {
      brand: "text-lg",
      sub: "text-[9px] tracking-[0.18em]",
    },
    md: {
      brand: "text-xl sm:text-2xl",
      sub: "text-[10px] sm:text-[11px] tracking-[0.2em]",
    },
    lg: {
      brand: "text-2xl sm:text-3xl",
      sub: "text-xs tracking-[0.22em]",
    },
  };

  if (variant === "icon-only") {
    return (
      <div className={`relative ${iconSizes[size]} flex items-center justify-center ${className}`}>
        <img
          src="/logo-icon-transparent.png"
          alt="Blue Space Interiors & Contracting Icon"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className={`relative ${iconSizes[size]} mb-2`}>
          <img
            src="/logo-icon-transparent.png"
            alt="Blue Space Interiors & Contracting Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className={`${textSizes[size].brand} font-sans tracking-wide leading-none text-[#3154A5]`}>
            <span className="font-extrabold">BLUE</span>
            <span className="font-light tracking-widest ml-0.5">SPACE</span>
          </div>
          <span
            className={`${textSizes[size].sub} font-sans text-[#3154A5] font-medium uppercase mt-1 leading-none`}
          >
            interiors & contracting
          </span>
        </div>
      </div>
    );
  }

  // Default "horizontal" layout for Navbar & Footers
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <img
          src="/logo-icon-transparent.png"
          alt="Blue Space Interiors & Contracting Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className={`${textSizes[size].brand} font-sans tracking-wide leading-tight text-[#3154A5]`}>
          <span className="font-extrabold">BLUE</span>
          <span className="font-light tracking-wider ml-0.5">SPACE</span>
        </div>
        <span
          className={`${textSizes[size].sub} font-sans text-[#3154A5] font-medium lowercase tracking-wide -mt-0.5`}
        >
          interiors & contracting
        </span>
      </div>
    </div>
  );
}
