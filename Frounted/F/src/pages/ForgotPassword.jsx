import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
<div className="bg-background text-on-surface min-h-screen flex items-center justify-center p-6">
{/* Main Container */}
<main className="w-full max-w-[440px] flex flex-col items-center">
{/* Logo Area */}
<div className="mb-10 flex flex-col items-center gap-2 text-center">
<div className="w-12 h-12 bg-primary rounded flex items-center justify-center text-on-primary mb-4 shadow-sm">
<span className="material-symbols-outlined text-[28px]"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>hub</span>
</div>
<h1 className="text-headline-lg font-bold text-primary tracking-[-0.02em] leading-tight">LeadBridge</h1>
<p className="text-body-sm text-on-surface-variant mt-1">B2B Sales CRM</p>
</div>
{/* Form Card */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant p-8">
<div className="mb-8 text-center">
<h2 className="text-headline-md font-semibold text-primary mb-2 tracking-[-0.01em]">Forgot your password?</h2>
<p className="text-body-sm text-on-surface-variant leading-relaxed">Enter your email and we'll help you reset your password.</p>
</div>
<form action="#" className="space-y-6" method="POST">
{/* Email Input */}
<div className="space-y-2">
<label className="block text-label-md font-medium text-on-surface" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-[20px] text-outline">mail</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-outline-variant rounded bg-surface-container-lowest text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors h-[40px]" id="email" name="email" placeholder="name@company.com" required="" type="email"/ >
</div>
</div>
{/* Submit Button */}
<button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded shadow-sm text-label-md font-medium text-on-primary bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors h-[40px]" type="submit">
                    Send Reset Link
                </button>
</form>
{/* Back to Sign In Link */}
<div className="mt-8 text-center">
<Link className="inline-flex items-center gap-2 text-label-md font-medium text-secondary hover:text-primary transition-colors" to="/login">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Sign In
                </Link>
</div>
</div>
{/* Footer */}
<div className="mt-12 text-center text-label-sm font-semibold text-outline tracking-[0.05em] uppercase">
            © 2024 LeadBridge CRM
        </div>
</main>
</div>
    </>
  );
}
