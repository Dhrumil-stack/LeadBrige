import React, { useState } from "react";
import { login } from "../api/auth.api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/A/login/",
        {
          email: email,
          password: password,
        }
      );

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
    }
  };


  return (
    <div className="bg-surface text-on-surface min-h-screen flex antialiased">
      {/* Left branding section */}
      <div className="hidden lg:flex w-1/2 bg-primary-container relative flex-col justify-between overflow-hidden">
        <div className="relative z-10 p-12">
          <div className="flex items-center gap-3 text-on-primary">
            <span className="material-symbols-outlined text-3xl">hub</span>
            <span className="text-xl font-bold tracking-tight">LeadBridge</span>
          </div>
        </div>

        <div className="relative z-10 p-12 pr-24 flex-grow flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-on-primary leading-tight tracking-tight mb-6">
            Turn leads into relationships.
          </h1>

          <p className="text-lg text-on-primary-container mb-12 max-w-lg leading-relaxed">
            Manage leads, follow-ups, sales activity, and your entire customer
            pipeline from one place.
          </p>
        </div>

        <div className="relative z-10 p-12 text-sm text-on-primary-container">
          © 2024 LeadBridge CRM. All rights reserved.
        </div>
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface">
        <div className="max-w-md w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">
              Welcome back
            </h2>

            <p className="text-base text-on-surface-variant">
              Sign in to your LeadBridge account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="border border-error bg-error-container text-on-error-container rounded-md p-3 text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="email">
                Email
              </label>

              <input
                autoComplete="email"
                className="block w-full pl-10 pr-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="password">
                Password
              </label>

              <div className="relative">
                <input
                    autoComplete="current-password"
                    className="block w-full pl-10 pr-10 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
{error && (
  <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
    {error}
  </div>
)}
                <button
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-on-primary bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]"
                    type="submit"
                    disabled={loading}
                    >
                    {loading ? "Signing In..." : "Sign In"}
                    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}