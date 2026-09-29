"use client";

import { useState } from "react";
import { submitLeadInquiry } from "@/app/actions/inquiry";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "Apartment",
    locationArea: "Hiranandani Estate, Ghodbunder Rd",
    configuration: "3 BHK Luxury",
    budgetRange: "25L-40L",
    preferredTimeline: "Immediate (< 30 Days)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseState, setResponseState] = useState<{
    success?: boolean;
    inquiryId?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseState(null);

    try {
      const res = await submitLeadInquiry(formData);
      setResponseState(res);
      if (res.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          propertyType: "Apartment",
          locationArea: "Hiranandani Estate, Ghodbunder Rd",
          configuration: "3 BHK Luxury",
          budgetRange: "25L-40L",
          preferredTimeline: "Immediate (< 30 Days)",
          message: "",
        });
      }
    } catch {
      setResponseState({
        success: false,
        error: "An unexpected network error occurred. Please contact our direct desk at +91 77383 18383.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
      <div className="flex items-center gap-2 text-xs font-bold text-[#3154A5] uppercase tracking-wider mb-2">
        <Sparkles className="w-3.5 h-3.5 text-[#3154A5]" />
        <span>Direct Architectural Review</span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
        Request 3D Spatial Layout & Locked BOQ
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-8 leading-relaxed font-light">
        Submit your property details below. Contact Person Mr. Sunil Pandey will review your builder floorplan and contact you within 4 business hours with an architectural feasibility assessment.
      </p>

      {responseState?.success ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h4 className="text-xl font-serif font-bold text-slate-900">
            Consultation Request Confirmed
          </h4>
          <p className="text-xs text-slate-700 mt-2 max-w-md mx-auto leading-relaxed font-light">
            Thank you. Your consultation reference token is{" "}
            <span className="font-mono text-[#3154A5] font-bold">
              BSI-THN-{responseState.inquiryId?.slice(0, 6).toUpperCase()}
            </span>
            . Contact Person Mr. Sunil Pandey will call you shortly to arrange your 3D presentation.
          </p>
          <div className="mt-6 pt-4 border-t border-emerald-200 text-xs text-slate-600 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3154A5]" />
            <span>Logged into Blue Space Power BI Analytics Engine</span>
          </div>
          <button
            onClick={() => setResponseState(null)}
            className="mt-6 text-xs text-[#3154A5] hover:underline uppercase font-bold tracking-wider"
          >
            Submit Another Property Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {responseState?.error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{responseState.error}</span>
            </div>
          )}

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Deshmukh"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Contact Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 77383 XXXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Corporate / Personal Email *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. v.deshmukh@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
            />
          </div>

          {/* Property Locality in Thane & Configuration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Thane Locality / Society *
              </label>
              <select
                value={formData.locationArea}
                onChange={(e) =>
                  setFormData({ ...formData, locationArea: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              >
                <option value="Hiranandani Estate, Ghodbunder Rd">Hiranandani Estate (Rodas / Meadows / Walk)</option>
                <option value="Raymond Ten X / Park Avenue, Pokhran Rd 2">Raymond Ten X / Park Avenue, Pokhran Rd 2</option>
                <option value="Pokhran Road No. 1 / Vasant Vihar">Pokhran Road No. 1 / Vasant Vihar Enclave</option>
                <option value="Lodha Amara / Sterling, Kolshet Road">Lodha Amara / Sterling, Kolshet Road</option>
                <option value="Sheth Avalon / Zenia, Majiwada Junction">Sheth Avalon / Zenia, Majiwada Junction</option>
                <option value="Rustomjee Urbania / Azziano, Majiwada">Rustomjee Urbania / Azziano, Majiwada</option>
                <option value="Panch Pakhadi / Teen Hath Naka">Panch Pakhadi / Teen Hath Naka</option>
                <option value="Other Premium Thane West Residence">Other Premium Thane West Residence</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Apartment Configuration *
              </label>
              <select
                value={formData.configuration}
                onChange={(e) =>
                  setFormData({ ...formData, configuration: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              >
                <option value="3 BHK Luxury">3 BHK Luxury Apartment</option>
                <option value="4 BHK Spacious">4 BHK Spacious Residence</option>
                <option value="4.5 / 5 BHK Penthouse">4.5 / 5 BHK Penthouse / Sky Villa</option>
                <option value="Duplex Villa">Independent Duplex / Row House</option>
                <option value="2 BHK Executive">2 BHK Executive Fitout</option>
                <option value="Commercial Studio / Clinic">Commercial Studio / Medical Clinic</option>
              </select>
            </div>
          </div>

          {/* Budget Range & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Estimated Turnkey Budget *
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) =>
                  setFormData({ ...formData, budgetRange: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              >
                <option value="25L-40L">₹25 Lakhs – ₹40 Lakhs (Premium 3 BHK Turnkey)</option>
                <option value="40L-70L">₹40 Lakhs – ₹70 Lakhs (Luxury Architectural 4 BHK)</option>
                <option value="70L+">₹70 Lakhs+ (Ultra-Luxury Penthouse & Duplex)</option>
                <option value="16L-24L">₹16 Lakhs – ₹24 Lakhs (Executive 2 BHK)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Possession / Start Timeline *
              </label>
              <select
                value={formData.preferredTimeline}
                onChange={(e) =>
                  setFormData({ ...formData, preferredTimeline: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
              >
                <option value="Immediate (< 30 Days)">Immediate (Possession in &lt; 30 Days)</option>
                <option value="1-2 Months">Key Handover in 1–2 Months</option>
                <option value="3+ Months">Planning in Advance (3–6 Months)</option>
              </select>
            </div>
          </div>

          {/* Custom Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Specific Architectural Requirements / Floorplan Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Possession in Raymond Ten X Tower 4 next month. Need soundproofing for home office, walk-in closet for master suite, and German handleless kitchen."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#3154A5] focus:ring-1 focus:ring-[#3154A5] transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full brand-button py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Request to Principal Architect...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Turnkey Inquiry (Zero Obligation)</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-500 font-light">
            Confidentiality Guarantee: Your contact information is never shared with third parties. Direct architectural review only.
          </p>
        </form>
      )}
    </div>
  );
}
