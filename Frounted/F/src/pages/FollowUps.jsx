import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getFollowUps, createFollowUp } from "../api/followups.api";
import { getLeads } from "../api/leads.api";

export default function FollowUps() {
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Add Follow-up Modal
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    lead: "",
    due_date: "",
    remarks: "",
  });

  const loadFollowUps = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getFollowUps();
      setFollowUps(data.results || data || []);
    } catch (err) {
      console.error("FollowUps API Error:", err);
      setError(err.response?.data?.detail || "Failed to load follow-ups");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFollowUps();
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await getLeads({ limit: 100 });
      setLeads(data.results || []);
    } catch (err) {
      console.error("Failed to load leads:", err);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateFollowUp = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");

    try {
      await createFollowUp({
        lead: form.lead,
        due_date: form.due_date,
        remarks: form.remarks,
      });
      setShowModal(false);
      setForm({ lead: "", due_date: "", remarks: "" });
      loadFollowUps();
    } catch (err) {
      console.error("Create followup error:", err);
      const data = err.response?.data;
      if (data) {
        const errors = data.errors || data;
        const firstKey = Object.keys(errors).find(k => k !== "success" && k !== "status_code");
        const msg = firstKey
          ? (Array.isArray(errors[firstKey]) ? errors[firstKey][0] : errors[firstKey])
          : data.detail || "Failed to create follow-up.";
        setFormError(msg);
      } else {
        setFormError("Failed to create follow-up.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const filtered = followUps.filter((f) => {
    const matchSearch = !search || f.remarks?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || f.status?.toUpperCase() === statusFilter.toUpperCase();
    return matchSearch && matchStatus;
  });

  const today = new Date().toISOString().split("T")[0];
  const todayCount = followUps.filter((f) => f.due_date?.startsWith(today)).length;
  const pendingCount = followUps.filter((f) => f.status === "PENDING").length;
  const completedCount = followUps.filter((f) => f.status === "COMPLETED").length;
  const missedCount = followUps.filter((f) => f.status === "MISSED").length;

  const formatDate = (dateStr) => {
    if (!dateStr) return { date: "-", time: "" };
    const d = new Date(dateStr);
    return {
      date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "MISSED":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]">Overdue</span>;
      case "COMPLETED":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">Completed</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#EFF6FF] text-[#1E3A8A] border border-[#BFDBFE]">Upcoming</span>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden antialiased text-body-sm">
      <Sidebar active="/followups" />
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg w-full h-16 sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant shadow-sm text-primary font-body text-body-md">
          <div className="flex items-center gap-md w-1/3">
            <div className="relative w-full max-w-md hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline text-lg">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-body-sm transition-colors" placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="flex items-center justify-center md:hidden">
            <span className="text-headline-sm font-bold text-primary">LeadBridge</span>
          </div>
          <div className="flex items-center gap-md justify-end w-1/3">
            <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-md md:p-lg lg:px-xl">
          <div className="max-w-[1280px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-xl">
              <div>
                <h2 className="text-headline-lg text-on-background mb-1">Follow-ups</h2>
                <p className="text-body-md text-on-surface-variant">Stay on top of your customer conversations and scheduled tasks.</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary text-on-primary hover:bg-primary/90 transition-colors rounded-md font-label text-label-md py-2.5 px-5 flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                Add Follow-up
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="p-4 rounded-lg bg-red-100 text-red-700 mb-6">{error}</div>
            )}

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Today</span>
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  </div>
                </div>
                <div>
                  <span className="text-headline-xl text-primary block mb-1">{loading ? "..." : todayCount}</span>
                  <span className="text-label-sm text-on-surface-variant">Due today</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Pending</span>
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">event_upcoming</span>
                  </div>
                </div>
                <div>
                  <span className="text-headline-xl text-primary block mb-1">{loading ? "..." : pendingCount}</span>
                  <span className="text-label-sm text-on-surface-variant">Scheduled</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between border-l-4 border-l-error">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-label-md text-error uppercase tracking-wider font-semibold">Missed</span>
                  <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">warning</span>
                  </div>
                </div>
                <div>
                  <span className="text-headline-xl text-error block mb-1">{loading ? "..." : missedCount}</span>
                  <span className="text-label-sm text-error">Action required</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Completed</span>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">task_alt</span>
                  </div>
                </div>
                <div>
                  <span className="text-headline-xl text-primary block mb-1">{loading ? "..." : completedCount}</span>
                  <span className="text-label-sm text-on-surface-variant">Total completed</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
              {/* Toolbar */}
              <div className="p-4 border-b border-outline-variant flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-surface-bright">
                <div className="flex bg-surface-container-low rounded-md p-1 border border-outline-variant/50">
                  <button className="px-4 py-1.5 rounded text-label-md bg-surface-container-lowest shadow-sm text-primary font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">list</span>
                    List
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <div className="relative flex-grow lg:flex-grow-0 lg:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline text-[18px]">search</span>
                    </div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="block w-full pl-9 pr-3 py-1.5 border border-outline-variant rounded-md text-body-sm bg-surface-container-lowest placeholder-on-surface-variant focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search follow-ups..." type="text" />
                  </div>
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-outline-variant rounded-md text-body-sm py-1.5 pl-3 pr-8 bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
                    <option value="all">All Status</option>
                    <option value="PENDING">Pending</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="MISSED">Missed</option>
                  </select>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-label-sm text-on-surface-variant uppercase tracking-wider border-b border-outline-variant">
                      <th className="py-3 px-6 font-semibold">Lead</th>
                      <th className="py-3 px-6 font-semibold">Date & Time</th>
                      <th className="py-3 px-6 font-semibold hidden md:table-cell">Remarks</th>
                      <th className="py-3 px-6 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/50 text-body-sm bg-surface-container-lowest">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-on-surface-variant">Loading follow-ups...</td>
                      </tr>
                    ) : filtered.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-4xl text-outline mb-2 block">event_busy</span>
                          No follow-ups found.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((f) => {
                        const { date, time } = formatDate(f.due_date);
                        const leadInitials = f.lead_name
                          ? f.lead_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
                          : f.lead ? String(f.lead).slice(0, 2).toUpperCase() : "?";

                        return (
                          <tr key={f.id} className="hover:bg-surface-container-low/50 transition-colors group">
                            <td className="py-3 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-semibold text-sm">{leadInitials}</div>
                                <span className="font-medium text-primary">{f.lead_name || `Lead #${f.lead}`}</span>
                              </div>
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                              <div className="text-primary font-medium">{date}</div>
                              {time && <div className="text-on-surface-variant text-label-sm">{time}</div>}
                            </td>
                            <td className="py-3 px-6 hidden md:table-cell max-w-[200px] truncate text-on-surface-variant">
                              {f.remarks || "-"}
                            </td>
                            <td className="py-3 px-6">{getStatusBadge(f.status)}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Info */}
              {!loading && (
                <div className="p-4 border-t border-outline-variant bg-surface-bright text-body-sm text-on-surface-variant">
                  Showing {filtered.length} of {followUps.length} follow-ups
                </div>
              )}
            </div>
          </div>
        </main>

      {/* ================= ADD FOLLOW-UP MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-outline-variant">
              <h3 className="text-xl font-semibold text-on-surface">
                Add New Follow-up
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleCreateFollowUp} className="p-6 space-y-5">
              {formError && (
                <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {formError}
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Lead *</label>
                <select
                  name="lead"
                  required
                  value={form.lead}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm h-10"
                >
                  <option value="">-- Select Lead --</option>
                  {leads.map((lead) => (
                    <option key={lead.id} value={lead.id}>
                      {lead.name}{lead.company_name ? ` (${lead.company_name})` : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Due Date & Time *</label>
                <input
                  name="due_date"
                  type="datetime-local"
                  required
                  value={form.due_date}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm h-10"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Remarks</label>
                <textarea
                  name="remarks"
                  rows={3}
                  value={form.remarks}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Add any notes or remarks..."
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-outline-variant rounded-md text-on-surface hover:bg-surface-container-low transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-primary text-on-primary rounded-md hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {submitting ? "Creating..." : "Create Follow-up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
