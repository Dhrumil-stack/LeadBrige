import React from "react";

export default function ResetPassword() {
  return (
    <>
<div className="bg-surface min-h-screen flex flex-col items-center justify-center p-4 antialiased text-on-surface">
{/* Brand Header (Outside Card) */}
<div className="mb-8 flex flex-col items-center text-center">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-[20px]"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>hub</span>
</div>
<span className="text-2xl font-bold tracking-tight text-primary">LeadBridge</span>
</div>
</div>
{/* Reset Password Card */}
<div className="w-full max-w-[420px] bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-8">
<div className="mb-6">
<h1 className="text-xl font-semibold mb-2">Reset your password</h1>
<p className="text-sm text-on-surface-variant">Create a new, strong password for your account.</p>
</div>
<form className="space-y-5">
{/* New Password Field */}
<div>
<label className="block text-xs font-semibold tracking-wide text-on-surface mb-1.5 uppercase" htmlFor="new-password">New Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
<input className="w-full h-10 pl-10 pr-10 rounded-lg border border-outline-variant bg-surface-container-lowest text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/60" id="new-password" placeholder="••••••••" type="password"/ >
<button aria-label="Toggle password visibility" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors toggle-password flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
{/* Password Strength UI */}
<div className="space-y-3">
<div className="flex gap-1.5 h-1.5">
<div className="flex-1 rounded-full bg-primary transition-all duration-300"></div>
<div className="flex-1 rounded-full bg-primary/40 transition-all duration-300"></div>
<div className="flex-1 rounded-full bg-outline-variant transition-all duration-300"></div>
<div className="flex-1 rounded-full bg-outline-variant transition-all duration-300"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-on-surface-variant">Password strength: <span className="text-primary font-semibold">Fair</span></span>
</div>
{/* Validation Rules */}
<ul className="text-xs space-y-1.5 text-on-surface-variant mt-2">
<li className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[16px]"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>check_circle</span>
                        At least 8 characters
                    </li>
<li className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[16px]"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>check_circle</span>
                        One uppercase letter
                    </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
                        One number
                    </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
                        One special character
                    </li>
</ul>
</div>
{/* Confirm Password Field */}
<div>
<label className="block text-xs font-semibold tracking-wide text-on-surface mb-1.5 uppercase" htmlFor="confirm-password">Confirm Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
<input className="w-full h-10 pl-10 pr-10 rounded-lg border border-outline-variant bg-surface-container-lowest text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/60" id="confirm-password" placeholder="••••••••" type="password"/ >
<button aria-label="Toggle password visibility" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors toggle-password flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
{/* Submit Action */}
<div className="pt-2">
<button className="w-full h-10 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:bg-on-surface transition-colors duration-200 flex items-center justify-center gap-2" type="submit">
                    Reset Password
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="text-center mt-4">
<a className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Return to login</a>
</div>
</form>
</div>
{/* Minimal Footer */}
<div className="mt-8 text-xs text-on-surface-variant flex gap-4">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<span>•</span>
<a className="hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
    </>
  );
}
