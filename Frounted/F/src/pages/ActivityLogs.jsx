import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getActivityLogs } from "../api/activityLogs.api";

const ACTION_COLORS = {
  LEAD_CREATED: "bg-green-100 text-green-700",
  LEAD_ASSIGNED: "bg-blue-100 text-blue-700",
  STATUS_CHANGED: "bg-yellow-100 text-yellow-700",
  FOLLOWUP_CREATED: "bg-purple-100 text-purple-700",
  NOTE_ADDED: "bg-gray-100 text-gray-700",
};

const ACTION_ICONS = {
  LEAD_CREATED: "person_add",
  LEAD_ASSIGNED: "assignment_ind",
  STATUS_CHANGED: "swap_horiz",
  FOLLOWUP_CREATED: "event",
  NOTE_ADDED: "edit_note",
};

export default function ActivityLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState("all");

  const loadLogs = async () => {
    try {
      setLoading(true);
      setError("");
      const params = {};
      if (search) params.search = search;
      if (actionFilter !== "all") params.action = actionFilter;
      const data = await getActivityLogs(params);
      setLogs(data.results || data || []);
    } catch (err) {
      console.error("Activity Logs API Error:", err);
      setError(err.response?.data?.detail || "Failed to load activity logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, [search, actionFilter]);

  const filtered = logs.filter((log) => {
    const matchSearch = !search || log.descption?.toLowerCase().includes(search.toLowerCase());
    const matchAction = actionFilter === "all" || log.action === actionFilter;
    return matchSearch && matchAction;
  });

  const todayStr = new Date().toISOString().split("T")[0];
  const todayCount = logs.filter((l) => l.created_at?.startsWith(todayStr)).length;

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekCount = logs.filter((l) => new Date(l.created_at) >= weekStart).length;

  const uniqueUsers = new Set(logs.map((l) => l.user)).size;

  const formatDate = (dateStr) => {
    if (!dateStr) return { date: "-", time: "" };
    const d = new Date(dateStr);
    return {
      date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const getActionLabel = (action) => {
    return action?.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) || action;
  };

  return (
    <div className="flex h-screen overflow-hidden antialiased text-body-sm">
      <Sidebar active="/activity-logs" />
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
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-md md:p-lg lg:px-xl">
          <div className="max-w-[1280px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-xl">
              <div>
                <h2 className="text-headline-lg text-on-background mb-1">Activity Logs</h2>
                <p className="text-body-md text-on-surface-variant">Track important actions and changes across your sales team.</p>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-4 rounded-lg bg-red-100 text-red-700 mb-6">{error}</div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-xl">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-label-sm uppercase text-on-surface-variant font-semibold">Today's Activity</p>
                  <p className="text-headline-md font-semibold text-primary mt-1">{loading ? "..." : todayCount}</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-full text-secondary">
                  <span className="material-symbols-outlined">today</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-label-sm uppercase text-on-surface-variant font-semibold">This Week</p>
                  <p className="text-headline-md font-semibold text-primary mt-1">{loading ? "..." : weekCount}</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-full text-secondary">
                  <span className="material-symbols-outlined">date_range</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-label-sm uppercase text-on-surface-variant font-semibold">Active Users</p>
                  <p className="text-headline-md font-semibold text-primary mt-1">{loading ? "..." : uniqueUsers}</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-full text-secondary">
                  <span className="material-symbols-outlined">group</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
              {/* Toolbar */}
              <div className="p-4 border-b border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-surface-container-low/50">
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
                  <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md text-body-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search activity..." type="text" />
                </div>
                <div className="flex items-center gap-2">
                  <select value={actionFilter} onChange={(e) => setActionFilter(e.target.value)} className="bg-surface-container-lowest border border-outline-variant rounded-md text-body-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
                    <option value="all">All Actions</option>
                    <option value="LEAD_CREATED">Created</option>
                    <option value="LEAD_ASSIGNED">Assigned</option>
                    <option value="STATUS_CHANGED">Status Changed</option>
                    <option value="FOLLOWUP_CREATED">Follow-up Created</option>
                    <option value="NOTE_ADDED">Note Added</option>
                  </select>
                </div>
              </div>

              {/* Activity Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                      <th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">User</th>
                      <th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Action</th>
                      <th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Description</th>
                      <th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/50 text-body-sm bg-surface-container-lowest">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-on-surface-variant">Loading activity logs...</td>
                      </tr>
                    ) : filtered.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-4xl text-outline mb-2 block">history</span>
                          No activity logs found.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((log) => {
                        const { date, time } = formatDate(log.created_at);
                        return (
                          <tr key={log.id} className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-semibold text-sm">
                                  {log.user ? String(log.user).slice(0, 2).toUpperCase() : "?"}
                                </div>
                                <span className="font-medium text-primary">User #{log.user || "-"}</span>
                              </div>
                            </td>
                            <td className="py-3 px-6">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${ACTION_COLORS[log.action] || "bg-gray-100 text-gray-700"}`}>
                                <span className="material-symbols-outlined text-[14px]">{ACTION_ICONS[log.action] || "info"}</span>
                                {getActionLabel(log.action)}
                              </span>
                            </td>
                            <td className="py-3 px-6 max-w-[300px] truncate text-on-surface-variant">
                              {log.descption || "-"}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap text-on-surface-variant">
                              <div>{date}</div>
                              {time && <div className="text-label-sm">{time}</div>}
                            </td>
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
                  Showing {filtered.length} of {logs.length} activity logs
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
