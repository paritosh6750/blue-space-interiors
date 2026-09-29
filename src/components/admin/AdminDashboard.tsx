"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  logoutAdminAction,
  updateInquiryStatusAction,
  deleteInquiryAction,
} from "@/app/actions/admin";
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Eye,
  Trash2,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export interface InquiryRecord {
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
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface AdminDashboardProps {
  initialInquiries: InquiryRecord[];
  metrics: {
    totalVisits: number;
    uniqueVisits: number;
  };
}

const STATUS_CONFIG: Record<
  string,
  { label: string; badge: string; bg: string; border: string; text: string }
> = {
  NEW: {
    label: "New Inquiry",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    bg: "bg-blue-500",
    border: "border-blue-300",
    text: "text-blue-700",
  },
  CONTACTED: {
    label: "Contacted",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    bg: "bg-indigo-500",
    border: "border-indigo-300",
    text: "text-indigo-700",
  },
  ESTIMATE_SENT: {
    label: "Estimate Sent",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    bg: "bg-purple-500",
    border: "border-purple-300",
    text: "text-purple-700",
  },
  WON: {
    label: "Deal Won",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bg: "bg-emerald-500",
    border: "border-emerald-300",
    text: "text-emerald-700",
  },
  CLOSED: {
    label: "Archived / Closed",
    badge: "bg-slate-100 text-slate-700 border-slate-300",
    bg: "bg-slate-500",
    border: "border-slate-300",
    text: "text-slate-700",
  },
};

export default function AdminDashboard({
  initialInquiries,
  metrics,
}: AdminDashboardProps) {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(initialInquiries);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("ALL");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [notification, setNotification] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const showNotification = (type: "success" | "error", text: string) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    // Optimistic update
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedInquiry?.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    startTransition(async () => {
      const res = await updateInquiryStatusAction(id, newStatus);
      if (res.success) {
        showNotification("success", `Inquiry status updated to ${STATUS_CONFIG[newStatus]?.label || newStatus}`);
      } else {
        showNotification("error", res.error || "Failed to update status");
      }
    });
  };

  const handleDelete = async (id: string) => {
    setDeleteConfirmationId(null);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(null);
    }
    setInquiries((prev) => prev.filter((item) => item.id !== id));

    startTransition(async () => {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        showNotification("success", "Inquiry deleted successfully");
      } else {
        showNotification("error", res.error || "Failed to delete inquiry");
      }
    });
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      showNotification("error", "No data to export");
      return;
    }

    const headers = [
      "Inquiry ID",
      "Full Name",
      "Email",
      "Phone",
      "Property Type",
      "Locality / Society",
      "Configuration",
      "Budget Range",
      "Preferred Timeline",
      "Homeowner Notes / Message",
      "Status",
      "Submitted Date",
      "Submitted Time (IST)",
    ];

    const rows = inquiries.map((item) => {
      const dateObj = new Date(item.createdAt);
      const dateStr = dateObj.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
      const timeStr = dateObj.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

      return [
        `"${item.id}"`,
        `"${item.fullName.replace(/"/g, '""')}"`,
        `"${item.email.replace(/"/g, '""')}"`,
        `"${item.phone.replace(/"/g, '""')}"`,
        `"${item.propertyType.replace(/"/g, '""')}"`,
        `"${item.locationArea.replace(/"/g, '""')}"`,
        `"${item.configuration.replace(/"/g, '""')}"`,
        `"${item.budgetRange.replace(/"/g, '""')}"`,
        `"${item.preferredTimeline.replace(/"/g, '""')}"`,
        `"${(item.message || "").replace(/"/g, '""')}"`,
        `"${item.status}"`,
        `"${dateStr}"`,
        `"${timeStr}"`,
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Blue_Space_Interiors_Leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("success", "CSV exported successfully (Power BI & Excel ready)");
  };

  // Filter inquiries based on search and dropdowns
  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.locationArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      selectedStatus === "ALL" || item.status === selectedStatus;

    const matchesProperty =
      selectedPropertyType === "ALL" || item.propertyType === selectedPropertyType;

    return matchesSearch && matchesStatus && matchesProperty;
  });

  // Calculate high-level KPIs
  const totalLeads = inquiries.length;
  const newLeads = inquiries.filter((i) => i.status === "NEW").length;
  const inProgressLeads = inquiries.filter(
    (i) => i.status === "CONTACTED" || i.status === "ESTIMATE_SENT"
  ).length;
  const wonDeals = inquiries.filter((i) => i.status === "WON").length;

  return (
    <div className="bg-[#fbfaf7] text-slate-900 min-h-screen pb-24">
      {/* Top Admin Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <BrandLogo variant="horizontal" size="sm" />
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3154A5]" />
              <span>Studio Administration Desk</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              target="_blank"
              className="text-xs font-semibold text-slate-700 hover:text-[#3154A5] flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 bg-white transition-all shadow-xs"
            >
              <span>Test Public Contact Form</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <form action={logoutAdminAction}>
              <button
                type="submit"
                className="text-xs font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 bg-white transition-all shadow-xs cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div
            className={`p-4 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-medium ${
              notification.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-red-50 border-red-300 text-red-800"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            )}
            <span>{notification.text}</span>
            <button
              onClick={() => setNotification(null)}
              className="ml-2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Dashboard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Homeowner Inquiries &amp; Consultations
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">
              Live database stream of contact submissions, architectural floorplan audits, and turnkey quote requests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="brand-button px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV (Power BI / Excel)</span>
            </button>
          </div>
        </div>

        {/* KPI Cards Row */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Inquiries</span>
              <Users className="w-4 h-4 text-[#3154A5]" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              {totalLeads}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-light">
              Captured across Thane &amp; Pan India
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-blue-600 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">New Leads</span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-blue-700">
              {newLeads}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-light">
              Awaiting 4-hour review
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">In Discussion</span>
              <Clock className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-purple-700">
              {inProgressLeads}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-light">
              Estimate or meeting scheduled
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-emerald-600 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Deals Won</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700">
              {wonDeals}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-light">
              Turnkey contracts confirmed
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Site Footfall</span>
              <Building className="w-4 h-4 text-[#3154A5]" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              {metrics.uniqueVisits.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-light">
              {metrics.totalVisits.toLocaleString()} Total Pageviews
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client name, email, phone, society..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3154A5] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs bg-white text-slate-800 focus:outline-none focus:border-[#3154A5]"
              >
                <option value="ALL">All Statuses ({inquiries.length})</option>
                <option value="NEW">New ({inquiries.filter((i) => i.status === "NEW").length})</option>
                <option value="CONTACTED">Contacted ({inquiries.filter((i) => i.status === "CONTACTED").length})</option>
                <option value="ESTIMATE_SENT">Estimate Sent ({inquiries.filter((i) => i.status === "ESTIMATE_SENT").length})</option>
                <option value="WON">Won ({inquiries.filter((i) => i.status === "WON").length})</option>
                <option value="CLOSED">Closed ({inquiries.filter((i) => i.status === "CLOSED").length})</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <span>Property:</span>
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs bg-white text-slate-800 focus:outline-none focus:border-[#3154A5]"
              >
                <option value="ALL">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Duplex">Duplex</option>
                <option value="Villa">Villa</option>
                <option value="Commercial Office">Commercial</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-serif font-bold text-slate-900 uppercase tracking-wider">
                Submitted Inquiries
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                {filteredInquiries.length} {filteredInquiries.length === 1 ? "Record" : "Records"}
              </span>
            </div>
            {isPending && (
              <span className="text-xs text-[#3154A5] font-medium animate-pulse">
                Saving updates to SQLite...
              </span>
            )}
          </div>

          {filteredInquiries.length === 0 ? (
            <div className="py-20 text-center px-4">
              <FileSpreadsheet className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-800">
                No Inquiries Found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 font-light">
                {searchQuery || selectedStatus !== "ALL" || selectedPropertyType !== "ALL"
                  ? "Try clearing filters to view all stored contact submissions."
                  : "When prospective homeowners complete the consultation form on /contact, their details will stream here instantly."}
              </p>
              {(searchQuery || selectedStatus !== "ALL" || selectedPropertyType !== "ALL") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedStatus("ALL");
                    setSelectedPropertyType("ALL");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-[#3154A5] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 sm:px-6">Client / Homeowner</th>
                    <th className="py-3.5 px-4">Contact</th>
                    <th className="py-3.5 px-4">Property &amp; Society</th>
                    <th className="py-3.5 px-4">Scope &amp; Budget</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Submitted</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.map((inquiry) => {
                    const statusObj = STATUS_CONFIG[inquiry.status] || STATUS_CONFIG.NEW;
                    const dateObj = new Date(inquiry.createdAt);
                    const formattedDate = dateObj.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                    const formattedTime = dateObj.toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <tr
                        key={inquiry.id}
                        className="hover:bg-blue-50/30 transition-colors group"
                      >
                        {/* Client Name */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-semibold text-slate-900 text-sm">
                            {inquiry.fullName}
                          </div>
                          {inquiry.message && (
                            <p className="text-[11px] text-slate-500 truncate max-w-xs mt-0.5 font-light italic">
                              &ldquo;{inquiry.message}&rdquo;
                            </p>
                          )}
                        </td>

                        {/* Contact Channels */}
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <a
                              href={`tel:${inquiry.phone}`}
                              className="flex items-center gap-1.5 text-slate-800 hover:text-[#3154A5] font-medium"
                            >
                              <Phone className="w-3 h-3 text-[#3154A5]" />
                              <span>{inquiry.phone}</span>
                            </a>
                            <a
                              href={`mailto:${inquiry.email}`}
                              className="flex items-center gap-1.5 text-slate-500 hover:text-[#3154A5] text-[11px] truncate max-w-[180px]"
                            >
                              <Mail className="w-3 h-3 text-slate-400" />
                              <span className="truncate">{inquiry.email}</span>
                            </a>
                          </div>
                        </td>

                        {/* Property & Society */}
                        <td className="py-4 px-4">
                          <div className="font-medium text-slate-900">
                            {inquiry.configuration} • {inquiry.propertyType}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                            <span className="truncate max-w-[180px]">{inquiry.locationArea}</span>
                          </div>
                        </td>

                        {/* Budget & Timeline */}
                        <td className="py-4 px-4">
                          <div className="font-medium text-slate-800">
                            ₹{inquiry.budgetRange}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Timeline: {inquiry.preferredTimeline}
                          </div>
                        </td>

                        {/* Live Status Selector */}
                        <td className="py-4 px-4">
                          <div className="relative inline-block">
                            <select
                              value={inquiry.status}
                              onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                              className={`appearance-none text-xs font-semibold py-1 pl-2.5 pr-6 rounded-full border cursor-pointer ${statusObj.badge}`}
                            >
                              <option value="NEW">New</option>
                              <option value="CONTACTED">Contacted</option>
                              <option value="ESTIMATE_SENT">Estimate Sent</option>
                              <option value="WON">Won</option>
                              <option value="CLOSED">Closed</option>
                            </select>
                            <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                          </div>
                        </td>

                        {/* Submission Date */}
                        <td className="py-4 px-4 text-slate-500 text-[11px]">
                          <div>{formattedDate}</div>
                          <div className="text-[10px] text-slate-400">{formattedTime}</div>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedInquiry(inquiry)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-[#3154A5] hover:bg-blue-50 border border-slate-200 transition-colors cursor-pointer"
                              title="View Full Inquiry Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirmationId(inquiry.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 border border-slate-200 transition-colors cursor-pointer"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3154A5]">
                Inquiry Profile
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${STATUS_CONFIG[selectedInquiry.status]?.badge}`}>
                {STATUS_CONFIG[selectedInquiry.status]?.label}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900">
              {selectedInquiry.fullName}
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-slate-100 py-6 text-xs text-slate-700">
              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Phone Number
                </strong>
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="text-sm font-bold text-[#3154A5] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{selectedInquiry.phone}</span>
                </a>
              </div>

              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Email Address
                </strong>
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="text-sm font-medium text-[#3154A5] hover:underline flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{selectedInquiry.email}</span>
                </a>
              </div>

              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Property Locality / Society
                </strong>
                <span className="text-sm font-medium text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedInquiry.locationArea}</span>
                </span>
              </div>

              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Configuration &amp; Type
                </strong>
                <span className="text-sm font-medium text-slate-900 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedInquiry.configuration} • {selectedInquiry.propertyType}</span>
                </span>
              </div>

              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Budget Range
                </strong>
                <span className="text-sm font-bold text-slate-900">
                  ₹{selectedInquiry.budgetRange}
                </span>
              </div>

              <div>
                <strong className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Possession / Execution Timeline
                </strong>
                <span className="text-sm font-medium text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedInquiry.preferredTimeline}</span>
                </span>
              </div>
            </div>

            {/* Homeowner Message */}
            <div className="mt-6">
              <strong className="block text-slate-500 font-semibold mb-2 uppercase tracking-wider text-[10px]">
                Homeowner Project Requirements &amp; Notes
              </strong>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-light whitespace-pre-wrap">
                {selectedInquiry.message || "No custom message provided. Prospective homeowner requested standard architectural consultation."}
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Update Status:</span>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value)}
                  className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-white font-medium focus:border-[#3154A5]"
                >
                  <option value="NEW">New Inquiry</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="ESTIMATE_SENT">Estimate Sent</option>
                  <option value="WON">Deal Won</option>
                  <option value="CLOSED">Closed / Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="brand-button px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Homeowner</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmationId && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 text-center">
              Delete Lead Record?
            </h3>
            <p className="text-xs text-slate-600 text-center mt-2 font-light">
              This action will remove the inquiry record from the SQLite database. This cannot be undone.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmationId(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmationId)}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
