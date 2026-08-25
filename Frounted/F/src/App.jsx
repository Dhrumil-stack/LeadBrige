import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/notifications" element={<DashboardNotifications />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/:id" element={<LeadDetails />} />
        <Route path="/followups" element={<FollowUps />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/activity-logs" element={<ActivityLogs />} />
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="/settings/security" element={<SecuritySettings />} />
        <Route path="/settings/notifications" element={<NotificationPreferences />} />
        <Route path="/logout" element={<LogoutConfirmation />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
