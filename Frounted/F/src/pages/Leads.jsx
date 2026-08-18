import React, { useEffect, useState } from "react";
import { getLeads } from "../api/leads.api";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const [page, setPage] = useState(1);

  const loadLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getLeads({
        limit: 10,
        offset: (page - 1) * 10,
        search: search,
      });

      console.log("LEADS API RESPONSE:", data);

      setLeads(data.results || []);
      setCount(data.count || 0);
      setNext(data.next);
      setPrevious(data.previous);

    } catch (error) {
      console.error("Lead API Error:", error);

      setError(
        error.response?.data?.detail ||
        "Failed to load leads"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [page, search]);


  const totalPages = Math.ceil(count / 10);

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex antialiased">

      {/* ================= SIDEBAR ================= */}

      <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-primary-container flex flex-col py-6">

        <div className="px-6 mb-8 flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">
              add
            </span>
          </div>

          <div>
            <h1 className="text-headline-md font-bold text-on-primary">
              LeadBridge
            </h1>

            <p className="font-body text-body-sm text-on-primary-container">
              Sales CRM
            </p>
          </div>

        </div>

        <div className="px-4 mb-6">

          <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label text-label-md flex justify-center items-center gap-2 hover:bg-surface-tint transition-colors">
            <span className="material-symbols-outlined text-sm">
              add
            </span>

            New Lead
          </button>

        </div>

        <ul className="flex flex-col gap-1 flex-1 overflow-y-auto px-2">

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 transition-colors rounded-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                dashboard
              </span>

              Dashboard
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 bg-surface-container-highest text-on-surface border-l-4 border-primary rounded-r-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                group
              </span>

              Leads
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 transition-colors rounded-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                event_repeat
              </span>

              Follow-ups
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 transition-colors rounded-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                notifications
              </span>

              Notifications
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 transition-colors rounded-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                history
              </span>

              Activity Logs
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 transition-colors rounded-lg font-label text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">
                settings
              </span>

              Settings
            </a>
          </li>

        </ul>

      </nav>

      {/* ================= MAIN ================= */}

      <div className="ml-64 flex-1 flex flex-col min-h-screen">

        {/* ================= TOP BAR ================= */}

        <header className="docked full-width top-0 sticky z-40 border-b border-outline-variant bg-surface flex justify-between items-center h-16 px-6">

          <h2 className="hidden md:block text-headline-sm font-bold text-on-surface">
            LeadBridge
          </h2>

          <div className="flex items-center gap-6">

            <button className="text-on-surface-variant hover:text-primary transition-colors rounded-full p-2">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>

          </div>

        </header>

        {/* ================= CONTENT ================= */}

        <main className="flex-1 p-8">

          <div className="max-w-[1280px] mx-auto space-y-6">

            {/* HEADER */}

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

              <div>

                <h1 className="font-headline font-semibold text-3xl text-on-surface mb-1">
                  Leads
                </h1>

                <p className="font-body text-body-md text-on-surface-variant">
                  Manage and track your sales leads.
                </p>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="p-4 rounded-lg bg-red-100 text-red-700">
                {error}
              </div>
            )}

            {/* ACTION BAR */}

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm">

              <div className="relative w-full sm:w-96">

                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  search
                </span>

                <input
                  value={search}
                  onChange={(e) => {
                    setPage(1);
                    setSearch(e.target.value);
                  }}
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-body-sm text-on-surface outline-none h-10"
                  placeholder="Search leads..."
                  type="text"
                />

              </div>

              <div className="flex gap-3 w-full sm:w-auto">

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-label text-label-md hover:bg-surface-container-low transition-colors h-10">

                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>

                  Filter

                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-label text-label-md hover:bg-surface-container-low transition-colors h-10">

                  <span className="material-symbols-outlined text-sm">
                    sort
                  </span>

                  Sort

                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded font-label text-label-md hover:bg-surface-tint transition-colors h-10">

                  <span className="material-symbols-outlined text-sm">
                    add
                  </span>

                  Add Lead

                </button>

              </div>

            </div>

            {/* TABLE */}

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">

              <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">

                      <th className="py-3 px-6 text-left text-xs font-semibold">
                        LEAD NAME
                      </th>

                      <th className="py-3 px-6 text-left text-xs font-semibold">
                        SOURCE
                      </th>

                      <th className="py-3 px-6 text-left text-xs font-semibold">
                        STATUS
                      </th>

                      <th className="py-3 px-6 text-left text-xs font-semibold">
                        AGENT
                      </th>

                      <th className="py-3 px-6 text-left text-xs font-semibold">
                        CREATED
                      </th>

                    </tr>
                  </thead>

                  <tbody className="font-body text-body-sm text-on-surface divide-y divide-outline-variant">

  {loading ? (
    <tr>
      <td
        colSpan={5}
        className="py-10 text-center text-on-surface-variant"
      >
        Loading leads...
      </td>
    </tr>

  ) : recentLeads.length === 0 ? (

    <tr>
      <td
        colSpan={5}
        className="py-10 text-center text-on-surface-variant"
      >
        No leads found.
      </td>
    </tr>

  ) : (

    recentLeads.slice(0, 5).map((lead) => (

      <tr
        key={lead.id}
        className="hover:bg-surface-container-low/50 transition-colors"
      >

        {/* LEAD NAME */}
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
              {lead.name
                ?.split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div>
              <p className="font-semibold">
                {lead.name || "-"}
              </p>

              {lead.company_name && (
                <p className="text-xs text-on-surface-variant">
                  {lead.company_name}
                </p>
              )}
            </div>

          </div>
        </td>

        {/* SOURCE */}
        <td className="py-4 px-6">
          <div className="flex items-center gap-2">

            <span className="material-symbols-outlined text-sm">
              public
            </span>

            {lead.source || "-"}
          </div>
        </td>

        {/* STATUS */}
        <td className="py-4 px-6">

          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-container-highest">
            {lead.status || "-"}
          </span>

        </td>

        {/* AGENT */}
        <td className="py-4 px-6">
          {lead.assigned_to_name ||
            lead.assigned_to ||
            "-"}
        </td>

        {/* CREATED */}
        <td className="py-4 px-6 text-on-surface-variant">

          {lead.created_at
            ? new Date(
                lead.created_at
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "-"}

        </td>

      </tr>

    ))

  )}

</tbody>

                </table>

              </div>

              {/* PAGINATION */}

              <div className="border-t border-outline-variant px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

                <p className="text-sm text-on-surface-variant">

                  Showing{" "}

                  {count === 0
                    ? 0
                    : (page - 1) * 10 + 1}

                  {"–"}

                  {Math.min(page * 10, count)}

                  {" "}of {count} leads

                </p>

                <div className="flex items-center gap-1">

                  <button
                    disabled={!previous}
                    onClick={() =>
                      setPage((prev) => prev - 1)
                    }
                    className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <span className="px-3 py-1 border border-primary bg-primary text-on-primary rounded text-sm">
                    {page}
                  </span>

                  <button
                    disabled={!next}
                    onClick={() =>
                      setPage((prev) => prev + 1)
                    }
                    className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors disabled:opacity-50"
                  >
                    Next
                  </button>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}