import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Dashboard", icon: "dashboard", to: "/dashboard" },
  { label: "Leads", icon: "group", to: "/leads" },
  { label: "Follow-ups", icon: "event_repeat", to: "/followups" },
  { label: "Notifications", icon: "notifications", to: "/notifications" },
  { label: "Activity Logs", icon: "history", to: "/activity-logs" },
  { label: "Settings", icon: "settings", to: "/settings" },
];

export default function Sidebar({ active }) {
  const location = useLocation();
  const current = active || location.pathname;

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-primary-container flex flex-col py-6">
      {/* Brand */}
      <div className="px-6 mb-8">
        <Logo />
      </div>

      {/* New Lead button */}
      <div className="px-4 mb-6">
        <Link
          to="/leads"
          className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label text-label-md flex justify-center items-center gap-2 hover:bg-surface-tint transition-colors"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Lead
        </Link>
      </div>

      {/* Nav links */}
      <ul className="flex flex-col gap-1 flex-1 overflow-y-auto px-2">
        {navItems.map((item) => {
          const isActive =
            current === item.to || current.startsWith(item.to + "/");
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-label text-label-md transition-colors ${
                  isActive
                    ? "bg-surface-container-highest text-on-surface border-l-4 border-primary rounded-r-lg"
                    : "text-on-primary-container hover:bg-surface-variant/20"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Logout */}
      <div className="px-4 mt-auto pt-4 border-t border-outline-variant/30">
        <Link
          to="/logout"
          className="flex items-center gap-3 px-4 py-3 text-on-primary-container hover:bg-surface-variant/20 rounded-lg font-label text-label-md transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </Link>
      </div>
    </nav>
  );
}
