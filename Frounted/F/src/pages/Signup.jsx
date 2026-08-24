import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth.api";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("AGENT");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        role: role,
        password: password,
      });

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      const data = error.response?.data;
      if (data) {
        // Handle custom exception handler wrapped format: {errors: {...}}
        const errors = data.errors || data;
        const firstKey = Object.keys(errors).find(k => k !== 'success' && k !== 'status_code');
        const msg = firstKey
          ? (Array.isArray(errors[firstKey]) ? errors[firstKey][0] : errors[firstKey])
          : data.detail || "Signup failed. Please try again.";
        setError(msg);
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
              Create an account
            </h2>
            <p className="text-base text-on-surface-variant">
              Sign up to get started with LeadBridge.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSignup}>
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* First Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="firstName">
                First Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="firstName"
                placeholder="John"
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="lastName"
                placeholder="Doe"
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="email"
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="email"
                placeholder="you@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="phone">
                Phone
              </label>
              <input
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="phone"
                placeholder="+1 234 567 890"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="role">
                Role
              </label>
              <select
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="AGENT">Agent</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="new-password"
                className="block w-full px-3 py-2 border border-outline-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow sm:text-sm h-10"
                id="password"
                placeholder="Enter your password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit */}
            <button
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-on-primary bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
