import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getNotifications, markAsRead } from "../api/notifications.api";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  useEffect(() => {
    loadNotifications();
    // Poll every 30 seconds for new notifications
    const interval = setInterval(loadNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      const data = await getNotifications({ limit: 5, ordering: "-created_at" });
      setNotifications(data.results || data || []);
    } catch (err) {
      console.error("Failed to load notifications:", err);
    } finally {
      setLoading(false);
    }
  };

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

  const getIcon = (title) => {
    if (title?.toLowerCase().includes("assign")) return "person_add";
    if (title?.toLowerCase().includes("follow")) return "event";
    if (title?.toLowerCase().includes("status")) return "swap_horiz";
    if (title?.toLowerCase().includes("note")) return "edit_note";
    return "notifications";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors rounded-full p-2"
      >
        <span className="material-symbols-outlined">notifications</span>
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-error text-white text-[10px] font-bold px-1">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[360px] bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant">
            <h3 className="text-body-md font-semibold text-on-surface">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span className="text-label-sm text-primary">
                {unreadCount} unread
              </span>
            )}
          </div>

          {/* Notification List */}
          <div className="max-h-[400px] overflow-y-auto">
            {loading && notifications.length === 0 ? (
              <div className="p-6 text-center text-body-sm text-on-surface-variant">
                Loading...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-6 text-center text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-3xl text-outline mb-2 block">
                  notifications_off
                </span>
                No notifications
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => !notif.is_read && handleMarkRead(notif.id)}
                  className={`flex items-start gap-3 px-4 py-3 border-b border-outline-variant/30 cursor-pointer transition-colors ${
                    !notif.is_read
                      ? "bg-primary/5 hover:bg-primary/10"
                      : "hover:bg-surface-container-low/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      !notif.is_read
                        ? "bg-primary-fixed text-on-primary-fixed"
                        : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {getIcon(notif.title)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-body-sm ${
                        !notif.is_read
                          ? "font-semibold text-primary"
                          : "text-on-surface"
                      }`}
                    >
                      {notif.title}
                    </p>
                    <p className="text-label-sm text-on-surface-variant truncate mt-0.5">
                      {notif.message}
                    </p>
                    <span className="text-label-sm text-outline mt-1 block">
                      {timeAgo(notif.created_at)}
                    </span>
                  </div>
                  {!notif.is_read && (
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-outline-variant px-4 py-3">
            <Link
              to="/notifications"
              onClick={() => setIsOpen(false)}
              className="text-body-sm text-primary font-medium hover:underline block text-center"
            >
              View all notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
