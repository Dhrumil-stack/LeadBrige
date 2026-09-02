import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLead, assignLead, updateLead, getAgents } from "../api/leads.api";
import Sidebar from "../components/Sidebar";

export default function LeadDetails() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Status update
  const [statusLoading, setStatusLoading] = useState(false);

  // Assign modal
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [assignLoading, setAssignLoading] = useState(false);
  const [assignError, setAssignError] = useState("");

  const loadLead = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getLead(id);
      setLead(data);
    } catch (err) {
      console.error("Lead fetch error:", err);
      setError(err.response?.data?.detail || "Failed to load lead");
    } finally {
      setLoading(false);
    }
  };

  const loadAgents = async () => {
    try {
      const data = await getAgents();
      setAgents(data);
    } catch (err) {
      console.error("Failed to load agents:", err);
    }
  };

  useEffect(() => {
    loadLead();
    loadAgents();
  }, [id]);

  const openAssignModal = () => {
    setSelectedAgent(lead.assigned_to || "");
    setAssignError("");
    setShowAssignModal(true);
  };

  const handleAssign = async () => {
    if (!selectedAgent) {
      setAssignError("Please select an agent.");
      return;
    }
    setAssignLoading(true);
    setAssignError("");
    try {
      await assignLead(lead.id, selectedAgent);
      setShowAssignModal(false);
      // Reload lead to get updated assigned_to info
      await loadLead();
    } catch (err) {
      console.error("Assign error:", err);
      const data = err.response?.data;
      setAssignError(data?.detail || data?.agent_id?.[0] || "Failed to assign lead.");
    } finally {
      setAssignLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleStatusChange = async (newStatus) => {
    if (newStatus === lead.status) return;
    setStatusLoading(true);
    try {
      await updateLead(lead.id, { status: newStatus });
      setLead({ ...lead, status: newStatus });
    } catch (err) {
      console.error("Status update error:", err);
    } finally {
      setStatusLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      NEW: "bg-blue-100 text-blue-800 border-blue-200",
      CONTACTED: "bg-yellow-100 text-yellow-800 border-yellow-200",
      INTERESTED: "bg-purple-100 text-purple-800 border-purple-200",
      NEGOTIATION: "bg-orange-100 text-orange-800 border-orange-200",
      WON: "bg-green-100 text-green-800 border-green-200",
      LOST: "bg-red-100 text-red-800 border-red-200",
    };
    const cls = colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cls}`}>
        {status || "-"}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar active="/leads" />
        <div className="ml-64 flex-1 flex items-center justify-center">
          <p className="text-on-surface-variant text-lg">Loading lead details...</p>
        </div>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar active="/leads" />
        <div className="ml-64 flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-red-600 text-lg">{error || "Lead not found"}</p>
          <Link to="/leads" className="text-primary hover:underline">
            Back to Leads
          </Link>
        </div>
      </div>
    );
  }

  const initials = (lead.name || "?")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const agentInitials = lead.assigned_to_name
    ? lead.assigned_to_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : null;

  return (
    <div className="flex min-h-screen bg-background text-on-background font-body antialiased">
      <Sidebar active="/leads" />

      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-40 h-16 flex items-center justify-between px-6">
          <Link
            to="/leads"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Leads
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={openAssignModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md border border-outline-variant text-primary hover:bg-surface-container-low transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Assign Agent
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="max-w-[1280px] mx-auto">
            {/* Lead Identity Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary text-xl font-bold">
                  {initials}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl font-bold text-on-surface">{lead.name}</h1>
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(e.target.value)}
                      disabled={statusLoading}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer disabled:opacity-50 ${
                        {
                          NEW: "bg-blue-100 text-blue-800",
                          CONTACTED: "bg-yellow-100 text-yellow-800",
                          INTERESTED: "bg-purple-100 text-purple-800",
                          NEGOTIATION: "bg-orange-100 text-orange-800",
                          WON: "bg-green-100 text-green-800",
                          LOST: "bg-red-100 text-red-800",
                        }[lead.status] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="INTERESTED">INTERESTED</option>
                      <option value="NEGOTIATION">NEGOTIATION</option>
                      <option value="WON">WON</option>
                      <option value="LOST">LOST</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant mt-1">
                    {lead.phone && (
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">call</span>
                        <span>{lead.phone}</span>
                      </div>
                    )}
                    {lead.email && (
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">mail</span>
                        <span>{lead.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Lead Details Card */}
                <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-on-surface mb-4">Lead Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Source</span>
                      <span className="text-sm text-on-surface font-medium">{lead.source || "-"}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Service Interest</span>
                      <span className="text-sm text-on-surface font-medium">{lead.service_interest || "-"}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Deal Value</span>
                      <span className="text-sm text-on-surface font-medium">
                        {lead.deal_value ? `₹${Number(lead.deal_value).toLocaleString("en-IN")}` : "-"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Company</span>
                      <span className="text-sm text-on-surface font-medium">{lead.company_name || "-"}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Created Date</span>
                      <span className="text-sm text-on-surface font-medium">{formatDate(lead.created_at)}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Created By</span>
                      <span className="text-sm text-on-surface font-medium">{lead.created_by_name || "-"}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Assigned To</span>
                      <span className="text-sm text-on-surface font-medium">{lead.assigned_to_name || "Unassigned"}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase tracking-wider mb-1">Next Follow-up</span>
                      <span className="text-sm text-on-surface font-medium">{formatDate(lead.next_followup_at)}</span>
                    </div>
                  </div>
                </section>

                {/* Notes Section */}
                <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-on-surface">Notes</h2>
                  </div>
                  <p className="text-sm text-on-surface-variant text-center py-6">No notes yet.</p>
                </section>

                {/* Follow-ups Section */}
                <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-on-surface">Follow-ups</h2>
                  </div>
                  <p className="text-sm text-on-surface-variant text-center py-6">No follow-ups scheduled.</p>
                </section>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Assigned Agent Card */}
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-4">Assigned Agent</h3>
                  {lead.assigned_to_name ? (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-sm font-bold">
                        {agentInitials}
                      </div>
                      <div>
                        <div className="text-sm text-on-surface font-medium">{lead.assigned_to_name}</div>
                        <div className="text-xs text-on-surface-variant">Agent</div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-on-surface-variant mb-4">No agent assigned yet.</p>
                  )}
                  <button
                    onClick={openAssignModal}
                    className="w-full py-2 rounded-md border border-outline-variant text-primary hover:bg-surface-container-low transition-colors text-sm font-medium"
                  >
                    {lead.assigned_to_name ? "Change Agent" : "Assign Agent"}
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-4">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors text-sm font-medium text-primary">
                      <span className="material-symbols-outlined text-base">call</span>
                      Call
                    </button>
                    <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors text-sm font-medium text-primary">
                      <span className="material-symbols-outlined text-base">mail</span>
                      Email
                    </button>
                    <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors text-sm font-medium text-[#128C7E]">
                      <span className="material-symbols-outlined text-base">chat</span>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ================= ASSIGN AGENT MODAL ================= */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowAssignModal(false)}
          />
          <div className="relative bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-outline-variant">
              <h3 className="text-xl font-semibold text-on-surface">Assign Lead to Agent</h3>
              <button
                onClick={() => setShowAssignModal(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-5">
              {assignError && (
                <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {assignError}
                </div>
              )}
              <div>
                <p className="text-sm text-on-surface-variant mb-1">
                  Lead: <span className="font-semibold text-on-surface">{lead.name}</span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">Select Agent *</label>
                <select
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  className="w-full px-3 py-2 border border-outline-variant rounded-md bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm h-10"
                >
                  <option value="">-- Select Agent --</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.full_name || `${agent.first_name} ${agent.last_name}`} ({agent.email})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="px-4 py-2 border border-outline-variant rounded-md text-on-surface hover:bg-surface-container-low transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAssign}
                  disabled={assignLoading}
                  className="px-4 py-2 bg-primary text-on-primary rounded-md hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {assignLoading ? "Assigning..." : "Assign Lead"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
