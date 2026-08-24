import React, { useEffect, useState } from "react";
import { getLeads, createLead } from "../api/leads.api";
import Sidebar from "../components/Sidebar";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const [page, setPage] = useState(1);

  // Add Lead Modal
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
    source: "WHATSAPP",
    service_interest: "SEO",
    deal_value: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");

    try {
      await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        company_name: form.company_name || undefined,
        source: form.source,
        service_interest: form.service_interest,
        deal_value: form.deal_value || 0,
      });

      setShowModal(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        company_name: "",
        source: "WHATSAPP",
        service_interest: "SEO",
        deal_value: "",
      });
      loadLeads();
    } catch (error) {
      console.error("Create lead error:", error);
      const data = error.response?.data;
      if (data) {
        const errors = data.errors || data;
        const firstKey = Object.keys(errors).find(k => k !== "success" && k !== "status_code");
        const msg = firstKey
          ? (Array.isArray(errors[firstKey]) ? errors[firstKey][0] : errors[firstKey])
          : data.detail || "Failed to create lead.";
        setFormError(msg);
      } else {
        setFormError("Failed to create lead.");
      }
    } finally {
      setSubmitting(false);
    }
  };

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

      <Sidebar active="/leads" />

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

                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded font-label text-label-md hover:bg-surface-tint transition-colors h-10">

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

  ) : leads.length === 0 ? (

    <tr>
      <td
        colSpan={5}
        className="py-10 text-center text-on-surface-variant"
      >
        No leads found.
      </td>
    </tr>

  ) : (

    leads.map((lead) => (

      <tr
        key={lead.id}
        className="hover:bg-surface-container-low/50 transition-colors"
      >

        {/* LEAD NAME */}
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
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

      {/* ================= ADD LEAD MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-outline-variant">
              <h3 className="text-xl font-semibold text-on-surface">
                Add New Lead
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateLead} className="p-6 space-y-5">
              {formError && (
                <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {formError}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Phone *</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  placeholder="10-digit phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  placeholder="e.g. rahul@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Company</label>
                <input
                  name="company_name"
                  value={form.company_name}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              {/* Source + Service Interest */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1">Source *</label>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  >
                    <option value="WHATSAPP">WhatsApp</option>
                    <option value="INSTAGRAM">Instagram</option>
                    <option value="FACEBOOK">Facebook</option>
                    <option value="WEBSITE">Website</option>
                    <option value="REFERRAL">Referral</option>
                    <option value="COLD_CALL">Cold Call</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1">Service *</label>
                  <select
                    name="service_interest"
                    value={form.service_interest}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  >
                    <option value="SEO">SEO</option>
                    <option value="GOOGLE_ADS">Google Ads</option>
                    <option value="META_ADS">Meta Ads</option>
                    <option value="SOCIAL_MEDIA">Social Media</option>
                    <option value="WEB_DEVELOPMENT">Web Development</option>
                  </select>
                </div>
              </div>

              {/* Deal Value */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Deal Value</label>
                <input
                  name="deal_value"
                  type="number"
                  min="0"
                  value={form.deal_value}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm h-10"
                  placeholder="0"
                />
              </div>

              {/* Actions */}
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
                  {submitting ? "Creating..." : "Create Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}