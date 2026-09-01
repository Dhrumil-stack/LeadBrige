import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getNotifications, markAsRead } from "../api/notifications.api";

const ACTION_ICONS = {
  LEAD_CREATED: "person_add",
  LEAD_ASSIGNED: "assignment_ind",
  STATUS_CHANGED: "swap_horiz",
  FOLLOWUP_CREATED: "event",
  NOTE_ADDED: "edit_note",
};

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setError("");
      const params = {};
      if (search) params.search = search;
      const data = await getNotifications(params);
      setNotifications(data.results || data || []);
    } catch (err) {
      console.error("Notifications API Error:", err);
      setError(err.response?.data?.detail || "Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, [search]);

  const handleMarkRead = async (id) => {
    try {
      await markAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
      );
    } catch (err) {
      console.error("Failed to mark as read:", err);
    }
  };

  const handleMarkAllRead = async () => {
    const unread = notifications.filter((n) => !n.is_read);
    for (const n of unread) {
      await markAsRead(n.id);
    }
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
  };

  const filtered = notifications.filter((n) => {
    if (filter === "unread") return !n.is_read;
    if (filter === "read") return n.is_read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  const getIcon = (title) => {
    if (title?.toLowerCase().includes("assign")) return "person_add";
    if (title?.toLowerCase().includes("follow")) return "event";
    if (title?.toLowerCase().includes("status")) return "swap_horiz";
    if (title?.toLowerCase().includes("note")) return "edit_note";
    return "notifications";
  };

  const getIconStyle = (title, isRead) => {
    if (!isRead) {
      if (title?.toLowerCase().includes("overdue") || title?.toLowerCase().includes("error"))
        return "bg-error-container text-on-error-container";
      return "bg-secondary-fixed text-on-secondary-fixed";
    }
    return "bg-surface-container-highest text-on-surface-variant";
  };

  const getBarColor = (title, isRead) => {
    if (!isRead) {
      if (title?.toLowerCase().includes("overdue") || title?.toLowerCase().includes("error"))
        return "bg-error";
      return "bg-primary";
    }
    return "";
  };

  const timeAgo = (dateStr) => {
    if (!dateStr) return "";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="flex h-screen overflow-hidden antialiased text-body-sm">
      <Sidebar active="/notifications" />
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
                <h2 className="text-headline-lg text-on-background mb-1">Notifications</h2>
                <p className="text-body-md text-on-surface-variant">Stay updated on your leads, follow-ups, and sales activity.</p>
              </div>
              {unreadCount > 0 && (
                <button onClick={handleMarkAllRead} className="bg-primary text-on-primary hover:bg-primary/90 transition-colors rounded-md font-label text-label-md py-2.5 px-5 flex items-center justify-center gap-2 whitespace-nowrap shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">done_all</span>
                  Mark all as read
                </button>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="p-4 rounded-lg bg-red-100 text-red-700 mb-6">{error}</div>
            )}

            {/* Search */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 mb-6 shadow-sm flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md text-body-sm placeholder-on-surface-variant focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Search notifications..."
                  type="text"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 mb-6 shadow-sm flex flex-wrap gap-2">
              <button onClick={() => setFilter("all")} className={`px-4 py-1.5 rounded-full font-label text-label-md transition-colors ${filter === "all" ? "bg-primary text-on-primary" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}>
                All
              </button>
              <button onClick={() => setFilter("unread")} className={`px-4 py-1.5 rounded-full font-label text-label-md transition-colors ${filter === "unread" ? "bg-primary text-on-primary" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}>
                Unread {unreadCount > 0 && <span className="ml-1 bg-error-container text-on-error-container px-1.5 py-0.5 rounded-full text-[10px] font-bold">{unreadCount}</span>}
              </button>
              <button onClick={() => setFilter("read")} className={`px-4 py-1.5 rounded-full font-label text-label-md transition-colors ${filter === "read" ? "bg-primary text-on-primary" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}>
                Read
              </button>
            </div>

            {/* Notification List */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-6 text-center text-body-sm text-on-surface-variant">Loading notifications...</div>
              ) : filtered.length === 0 ? (
                <div className="p-6 text-center text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl text-outline mb-2 block">notifications_off</span>
                  No notifications found.
                </div>
              ) : (
                filtered.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => !notif.is_read && handleMarkRead(notif.id)}
                    className={`group relative flex items-start gap-4 p-5 border-b border-outline-variant/30 transition-colors cursor-pointer ${!notif.is_read ? "bg-surface hover:bg-surface-container-low" : "hover:bg-surface-container-low/50"}`}
                  >
                    {!notif.is_read && <div className={`absolute left-0 top-0 bottom-0 w-1 ${getBarColor(notif.title, notif.is_read)}`}></div>}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getIconStyle(notif.title, notif.is_read)}`}>
                      <span className="material-symbols-outlined">{getIcon(notif.title)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className={`text-body-md font-semibold ${!notif.is_read ? "text-primary" : "text-on-surface"}`}>{notif.title}</h3>
                          <p className="text-body-sm text-on-surface-variant mt-0.5">{notif.message}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className={`text-label-sm flex items-center gap-1 ${!notif.is_read ? "text-primary" : "text-on-surface-variant"}`}>
                            {!notif.is_read && <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>}
                            {timeAgo(notif.created_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
