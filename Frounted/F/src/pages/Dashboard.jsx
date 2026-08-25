import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import {
  getDashboardStats,
  getDashboardFunnel,
  getDashboardSources,
  getRecentLeads,
  getUpcomingFollowUps,
} from "../api/dashboard.api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [funnel, setFunnel] = useState(null);
  const [sources, setSources] = useState(null);

  const [recentLeads, setRecentLeads] = useState([]);
  const [upcomingFollowUps, setUpcomingFollowUps] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      // Run all API calls in parallel for speed
      const [statsData, funnelData, sourcesData, recentLeadsData, followUpsData] =
        await Promise.allSettled([
          getDashboardStats(),
          getDashboardFunnel(),
          getDashboardSources(),
          getRecentLeads(),
          getUpcomingFollowUps(),
        ]);

      // Set data from successful calls (ignore individual failures)
      if (statsData.status === "fulfilled") setStats(statsData.value);
      if (funnelData.status === "fulfilled") setFunnel(funnelData.value);
      if (sourcesData.status === "fulfilled") setSources(sourcesData.value);
      if (recentLeadsData.status === "fulfilled") setRecentLeads(recentLeadsData.value);
      if (followUpsData.status === "fulfilled") setUpcomingFollowUps(followUpsData.value);

      // Show error only if ALL calls failed
      const allFailed = [statsData, funnelData, sourcesData, recentLeadsData, followUpsData]
        .every(r => r.status === "rejected");
      if (allFailed) {
        setError("Failed to load dashboard. Please try again.");
      }

    } catch (error) {
      console.error("Dashboard API Error:", error);
      setError(
        error.response?.data?.detail ||
        "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const sourceTotal = Object.values(sources || {}).reduce(
    (total, value) => total + Number(value || 0),
    0
  );

  // REST OF YOUR DASHBOARD JSX BELOW...

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col md:flex-row">

      <Sidebar active="/dashboard" />

      {/* ================= MAIN ================= */}
      <main className="flex-1 md:ml-64 p-6 md:p-8 max-w-[1280px] w-full mx-auto overflow-y-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col gap-1">

          <h2 className="text-[30px] font-semibold text-on-surface font-headline tracking-tight">
            Dashboard
          </h2>

          <p className="text-[14px] text-on-surface-variant">
            Here's what's happening with your leads today.
          </p>

        </div>

        {/* ================= ERROR ================= */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-[#fee2e2] text-[#991b1b] text-sm">
            {error}
          </div>
        )}

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">

          {/* Total */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">

            <div className="flex justify-between items-start mb-4">

              <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">
                Total Leads
              </span>

              <div className="p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  group
                </span>
              </div>

            </div>

            <span className="text-[36px] font-bold text-on-surface">
              {loading ? "..." : stats?.TotalLeads ?? 0}
            </span>

            <p className="text-[12px] text-outline mt-2">
              Total leads
            </p>

          </div>

          {/* New */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">

            <div className="flex justify-between items-start mb-4">

              <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">
                New Leads
              </span>

              <div className="p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  fiber_new
                </span>
              </div>

            </div>

            <span className="text-[36px] font-bold text-on-surface">
              {loading ? "..." : stats?.New_Leads ?? 0}
            </span>

            <p className="text-[12px] text-outline mt-2">
              New leads
            </p>

          </div>

          {/* Interested */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">

            <div className="flex justify-between items-start mb-4">

              <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">
                Interested
              </span>

              <div className="p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  thumb_up
                </span>
              </div>

            </div>

            <span className="text-[36px] font-bold text-on-surface">
              {loading ? "..." : stats?.INTERESTED_Leads ?? 0}
            </span>

            <p className="text-[12px] text-outline mt-2">
              Interested leads
            </p>

          </div>

          {/* Won */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">

            <div className="flex justify-between items-start mb-4">

              <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">
                Won Leads
              </span>

              <div className="p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  emoji_events
                </span>
              </div>

            </div>

            <span className="text-[36px] font-bold text-on-surface">
              {loading ? "..." : stats?.WON_Leads ?? 0}
            </span>

            <p className="text-[12px] text-outline mt-2">
              Won leads
            </p>

          </div>

          {/* Lost */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">

            <div className="flex justify-between items-start mb-4">

              <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">
                Lost Leads
              </span>

              <div className="p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  cancel
                </span>
              </div>

            </div>

            <span className="text-[36px] font-bold text-on-surface">
              {loading ? "..." : stats?.LOST_Leads ?? 0}
            </span>

            <p className="text-[12px] text-outline mt-2">
              Lost leads
            </p>

          </div>

        </div>

        {/* ================= MIDDLE ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* ================= FUNNEL ================= */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">

            <h3 className="text-[16px] font-semibold text-on-surface mb-6">
              Lead Funnel
            </h3>

            <div className="space-y-5">

              {/* NEW */}
              <div className="flex items-center gap-4">

                <span className="text-[14px] w-24 text-right text-on-surface-variant">
                  New
                </span>

                <div className="h-10 bg-surface-container-highest rounded-lg w-full relative overflow-hidden flex items-center px-4">

                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>

                  <span className="relative z-10 text-[14px] font-semibold">
                    {loading ? "..." : funnel?.NEW ?? 0}
                  </span>

                </div>

              </div>

              {/* CONTACTED */}
              <div className="flex items-center gap-4">

                <span className="text-[14px] w-24 text-right text-on-surface-variant">
                  Contacted
                </span>

                <div className="h-10 bg-surface-container-highest rounded-lg w-[85%] relative overflow-hidden flex items-center px-4 mx-auto">

                  <div className="absolute inset-0 bg-green-500/30 rounded-lg"></div>

                  <span className="relative z-10 text-[14px] font-semibold">
                    {loading ? "..." : funnel?.CONTACTED ?? 0}
                  </span>

                </div>

              </div>

              {/* INTERESTED */}
              <div className="flex items-center gap-4">

                <span className="text-[14px] w-24 text-right text-on-surface-variant">
                  Interested
                </span>

                <div className="h-10 bg-surface-container-highest rounded-lg w-[60%] relative overflow-hidden flex items-center px-4 mx-auto">

                  <div className="absolute inset-0 bg-purple-500/40 rounded-lg"></div>

                  <span className="relative z-10 text-[14px] font-semibold">
                    {loading ? "..." : funnel?.INTERESTED ?? 0}
                  </span>

                </div>

              </div>

              {/* NEGOTIATION */}
              <div className="flex items-center gap-4">

                <span className="text-[14px] w-24 text-right text-on-surface-variant">
                  Negotiation
                </span>

                <div className="h-10 bg-surface-container-highest rounded-lg w-[30%] relative overflow-hidden flex items-center px-4 mx-auto">

                  <div className="absolute inset-0 bg-orange-500 rounded-lg"></div>

                  <span className="relative z-10 text-[14px] font-semibold text-white">
                    {loading ? "..." : funnel?.NEGOTIATION ?? 0}
                  </span>

                </div>

              </div>

            </div>
          </div>

          {/* ================= SOURCES ================= */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col h-[400px]">

            <h3 className="text-[16px] font-semibold text-on-surface font-headline mb-6">
              Lead Sources
            </h3>

            {/* DONUT */}
            <div className="flex-1 flex items-center justify-center relative">

              {loading ? (

                <div className="w-48 h-48 rounded-full border-[16px] border-surface-container-highest animate-pulse"></div>

              ) : (

                <div
                  className="w-48 h-48 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      sourceTotal === 0
                        ? "#e5e7eb"
                        : (() => {

                            const coldCall =
                              Number(sources?.COLD_CALL || 0);

                            const referral =
                              Number(sources?.REFERRAL || 0);

                            const whatsapp =
                              Number(sources?.WHATSAPP || 0);

                            const facebook =
                              Number(sources?.FACEBOOK || 0);

                            const instagram =
                              Number(sources?.INSTAGRAM || 0);

                            const coldPercent =
                              (coldCall / sourceTotal) * 100;

                            const referralPercent =
                              (referral / sourceTotal) * 100;

                            const whatsappPercent =
                              (whatsapp / sourceTotal) * 100;

                            const facebookPercent =
                              (facebook / sourceTotal) * 100;

                            const referralEnd =
                              coldPercent + referralPercent;

                            const whatsappEnd =
                              referralEnd + whatsappPercent;

                            const facebookEnd =
                              whatsappEnd + facebookPercent;

                            return `conic-gradient(
                              #3b82f6 0% ${coldPercent}%,
                              #22c55e ${coldPercent}% ${referralEnd}%,
                              #a855f7 ${referralEnd}% ${whatsappEnd}%,
                              #f97316 ${whatsappEnd}% ${facebookEnd}%,
                              #ec4899 ${facebookEnd}% 100%
                            )`;

                          })(),
                  }}
                >

                  {/* DONUT HOLE */}
                  <div className="w-32 h-32 rounded-full bg-surface-container-lowest flex flex-col items-center justify-center">

                    <span className="text-[24px] font-bold text-on-surface font-headline">
                      {sourceTotal}
                    </span>

                    <span className="text-[12px] text-outline">
                      Total
                    </span>

                  </div>

                </div>

              )}

            </div>

            {/* LEGEND */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>

                <span className="text-[12px] text-on-surface-variant">
                  Cold Call{" "}
                  {loading ? "..." : sources?.COLD_CALL ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="text-[12px] text-on-surface-variant">
                  Referral{" "}
                  {loading ? "..." : sources?.REFERRAL ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>

                <span className="text-[12px] text-on-surface-variant">
                  WhatsApp{" "}
                  {loading ? "..." : sources?.WHATSAPP ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>

                <span className="text-[12px] text-on-surface-variant">
                  Facebook{" "}
                  {loading ? "..." : sources?.FACEBOOK ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>

                <span className="text-[12px] text-on-surface-variant">
                  Instagram{" "}
                  {loading ? "..." : sources?.INSTAGRAM ?? 0}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= RECENT LEADS ================= */}
          <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b border-outline-variant/50 flex justify-between items-center">

              <h3 className="text-[16px] font-semibold text-on-surface">
                Recent Leads
              </h3>

              <Link to="/leads" className="text-[14px] text-primary hover:underline">
                View All
              </Link>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse">

                <thead>

                  <tr className="bg-surface-container-low border-b border-outline-variant/50">

                    <th className="py-3 px-6 text-[12px] font-semibold text-on-surface-variant uppercase">
                      Lead Name
                    </th>

                    <th className="py-3 px-6 text-[12px] font-semibold text-on-surface-variant uppercase">
                      Source
                    </th>

                    <th className="py-3 px-6 text-[12px] font-semibold text-on-surface-variant uppercase">
                      Status
                    </th>

                    <th className="py-3 px-6 text-[12px] font-semibold text-on-surface-variant uppercase hidden sm:table-cell">
                      Agent
                    </th>

                  </tr>

                </thead>

               <tbody className="font-body text-body-sm text-on-surface divide-y divide-outline-variant">

  {loading && (
    <tr>
      <td colSpan="7" className="py-10 text-center">
        Loading leads...
      </td>
    </tr>
  )}

  {error && (
    <tr>
      <td colSpan="7" className="py-10 text-center text-red-500">
        {error}
      </td>
    </tr>
  )}

  {!loading && !error && recentLeads.length === 0 && (
    <tr>
      <td colSpan="7" className="py-10 text-center text-on-surface-variant">
        No leads found.
      </td>
    </tr>
  )}

{!loading &&
  recentLeads.map((lead) => (
      <tr
        key={lead.id}
        className="hover:bg-surface-container-low/50 transition-colors group"
      >

        {/* Lead */}
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-label-md">
              {(lead.name || "?")
                .split(" ")
                .map((word) => word[0])
                .filter(Boolean)
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div>
              <p className="font-semibold">
                {lead.name}
              </p>

              {lead.company_name && (
                <p className="text-on-surface-variant text-xs">
                  {lead.company_name}
                </p>
              )}
            </div>

          </div>
        </td>

        {/* Contact */}
        <td className="py-4 px-6">
          <p>
            {lead.email || "-"}
          </p>

          <p className="text-on-surface-variant text-xs">
            {lead.phone || "-"}
          </p>
        </td>

        {/* Source */}
        <td className="py-4 px-6">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">
              public
            </span>

            {lead.source || "-"}
          </div>
        </td>

        {/* Status */}
        <td className="py-4 px-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-container-highest text-on-surface">
            {lead.status || "-"}
          </span>
        </td>

        {/* Assigned To */}
        <td className="py-4 px-6">
          {lead.assigned_to_name || lead.assigned_to || "-"}
        </td>

        {/* Created */}
        <td className="py-4 px-6 text-on-surface-variant">
          {lead.created_at
            ? new Date(lead.created_at).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "-"}
        </td>

        {/* Actions */}
        <td className="py-4 px-6 text-right">
          <button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
            <span className="material-symbols-outlined text-sm">
              more_horiz
            </span>
          </button>
        </td>

      </tr>
    ))}
</tbody>
              </table>

            </div>

          </div>

{/* ================= FOLLOW UPS ================= */}

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col">

  <div className="p-6 border-b border-outline-variant/50">

    <h3 className="text-[16px] font-semibold text-on-surface">
      Upcoming Follow-ups
    </h3>

  </div>

  <div className="p-0 flex-1 overflow-y-auto max-h-[300px]">

    {loading ? (

      <div className="p-6 text-center text-sm text-on-surface-variant">
        Loading follow-ups...
      </div>

    ) : upcomingFollowUps.length === 0 ? (

      <div className="p-6 text-center text-sm text-on-surface-variant">
        No upcoming follow-ups.
      </div>

    ) : (

      <ul className="divide-y divide-outline-variant/20">

        {upcomingFollowUps.slice(0, 5).map((followUp) => (

          <li
            key={followUp.id}
            className="p-4 flex items-start gap-3"
          >

            {/* ICON */}
            <div className="p-2 bg-[#e0e7ff] text-[#3730a3] rounded-lg mt-1">

              <span className="material-symbols-outlined text-[16px]">
                event
              </span>

            </div>

            {/* DETAILS */}
            <div className="flex-1 min-w-0">

              <p className="text-[14px] font-medium text-on-surface truncate">
                {followUp.title ||
                  followUp.remarks ||
                  "Follow-up"}
              </p>

              <p className="text-[12px] text-outline truncate">
                {followUp.lead_name || "Lead"}
              </p>

            </div>

            {/* DATE */}
            <div className="text-right">

              <p className="text-[12px] font-semibold text-on-surface">

                {followUp.due_date
                  ? new Date(
                      followUp.due_date
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    })
                  : "—"}

              </p>

              <p className="text-[12px] text-outline">

                {followUp.due_date
                  ? new Date(
                      followUp.due_date
                    ).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}

              </p>

            </div>

          </li>

        ))}

      </ul>

    )}

  </div>

</div>

        </div>

      </main>

    </div>
  );
}