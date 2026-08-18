import React, { useEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardNotifications from "./pages/DashboardNotifications.jsx";
import Leads from "./pages/Leads.jsx";
import LeadDetails from "./pages/LeadDetails.jsx";
import FollowUps from "./pages/FollowUps.jsx";
import Notifications from "./pages/Notifications.jsx";
import ActivityLogs from "./pages/ActivityLogs.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import SecuritySettings from "./pages/SecuritySettings.jsx";
import NotificationPreferences from "./pages/NotificationPreferences.jsx";
import LogoutConfirmation from "./pages/LogoutConfirmation.jsx";

const routes = {
      "/": Login,
      "/login": Login,
      "/forgot-password": ForgotPassword,
      "/reset-password": ResetPassword,
      "/dashboard": Dashboard,
      "/dashboard/notifications": DashboardNotifications,
      "/leads": Leads,
      "/leads/1": LeadDetails,
      "/followups": FollowUps,
      "/notifications": Notifications,
      "/activity-logs": ActivityLogs,
      "/settings": ProfileSettings,
      "/settings/profile": ProfileSettings,
      "/settings/security": SecuritySettings,
      "/settings/notifications": NotificationPreferences,
      "/logout": LogoutConfirmation,
};

function AppContent() {
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const go = (to) => {
    if (!to) return;
    navigate(to);
    setPath(to);
  };

  // Make the static Stitch navigation links functional without altering the generated UI.
  const handleClick = (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) return;
    const text = anchor.textContent.trim().toLowerCase();
    const map = {
      "dashboard": "/dashboard",
      "leads": "/leads",
      "follow-ups": "/followups",
      "notifications": "/notifications",
      "activity logs": "/activity-logs",
      "settings": "/settings",
      "back to leads": "/leads",
      "forgot password?": "/forgot-password",
    };
    if (map[text]) {
      event.preventDefault();
      go(map[text]);
    }
  };

  const Page = routes[path] || routes["/dashboard"];
  return (
    <div onClick={handleClick}>
      <Page />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
