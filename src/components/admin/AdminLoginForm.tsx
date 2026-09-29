"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdminAction } from "@/app/actions/admin";
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const res = await loginAdminAction(null, formData);
      if (res.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setErrorMessage(res.error || "Authentication failed. Please verify credentials.");
      }
    } catch {
      setErrorMessage("An unexpected network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative animate-in fade-in zoom-in-95 duration-300">
      <div className="text-center mb-8">
        <Link href="/" className="inline-block transition-transform hover:opacity-95 mb-4">
          <BrandLogo variant="horizontal" size="md" />
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-2">
          <Lock className="w-3 h-3 text-[#3154A5]" />
          <span>Restricted Studio Portal</span>
        </div>
        <h1 className="text-2xl font-serif font-bold text-slate-900">
          Admin Authentication
        </h1>
        <p className="text-xs text-slate-600 mt-1.5 font-light">
          Sign in to manage incoming homeowner inquiries, 3D consultation bookings, and contact requests.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 animate-in fade-in duration-200">
          <div className="w-4 h-4 rounded-full bg-red-200 text-red-800 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
            !
          </div>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Administrator Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter administrator username"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-[#fbfaf7] text-slate-900 text-sm focus:outline-none focus:border-[#3154A5] focus:bg-white transition-all shadow-xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Secret Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-[#fbfaf7] text-slate-900 text-sm focus:outline-none focus:border-[#3154A5] focus:bg-white transition-all shadow-xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="brand-button w-full py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 transition-all cursor-pointer"
        >
          {isLoading ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <span>Access Admin Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Security Assurance */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-light">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Restricted access for Blue Space Interiors management</span>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#3154A5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Public Website</span>
        </Link>
      </div>
    </div>
  );
}
