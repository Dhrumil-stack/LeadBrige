import React from "react";

export default function SecuritySettings() {
  return (
    <>
<div className="bg-background text-on-background h-screen flex overflow-hidden">
{/* SideNavBar */}
<aside className="h-full w-64 fixed left-0 top-0 bg-primary-container text-on-primary border-r border-outline-variant flex flex-col py-6 z-50">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-sm" data-icon="leaderboard" data-weight="fill"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>leaderboard</span>
</div>
<div>
<h1 className="text-headline-md font-bold text-on-primary tracking-tight leading-none">LeadBridge</h1>
<p className="text-label-sm text-on-primary-container mt-1">Sales CRM</p>
</div>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-label-md font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="text-label-md font-medium">Leads</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="event_repeat">event_repeat</span>
<span className="text-label-md font-medium">Follow-ups</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-label-md font-medium">Notifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="text-label-md font-medium">Activity Logs</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 border-l-4 border-primary bg-on-primary-container/10 text-on-primary font-semibold rounded-r-DEFAULT" href="#">
<span className="material-symbols-outlined" data-icon="settings" data-weight="fill"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>settings</span>
<span className="text-label-md">Settings</span>
</a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 rounded-DEFAULT text-label-md font-medium hover:bg-surface-tint transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                Add New Lead
            </button>
</div>
</aside>
{/* Main Content Area */}
<div className="ml-64 flex-1 flex flex-col h-screen overflow-hidden">
{/* TopNavBar */}
<header className="docked full-width top-0 sticky z-40 shadow-sm border-b border-outline-variant bg-surface-container-lowest text-primary">
<div className="flex justify-between items-center h-16 px-6">
{/* Search (on_left) */}
<div className="flex-1 max-w-md focus-within:ring-2 focus-within:ring-primary/20 rounded-DEFAULT transition-all">
<div className="relative flex items-center w-full h-10 rounded-DEFAULT border border-outline-variant bg-surface focus-within:border-primary overflow-hidden">
<div className="grid place-items-center h-full w-10 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="search">search</span>
</div>
<input className="peer h-full w-full outline-none text-body-md text-on-surface bg-transparent pr-2" id="search" placeholder="Search..." type="text"/ >
</div>
</div>
{/* Brand Logo (Hidden on mobile as per design system, but TopNavBar structure demands it conceptually. Leaving hidden for clean header) */}
<div className="hidden md:block text-headline-sm font-bold text-on-surface absolute left-1/2 transform -translate-x-1/2">
{/* Brand typically here if not in side nav, but side nav has it. */}
</div>
{/* Trailing Icons */}
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant cursor-pointer">
<img alt="LeadBridge User" className="w-full h-full object-cover" data-alt="A professional headshot of a person in a corporate environment. The image is brightly lit, using a modern light-mode color palette with clean, minimal surroundings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwwXwxNXyh-uZAWKrTr0JOOaKqsQ5eKn8oc8hq-fq3xd6b4kWzduDLHyrrrkFL8lUKx-AzlksZgwb3LfTIXEaso6O_wRh6A3FTOE0WNBgV6HMG-Ylf8UCAlsZuxWIN_EkoWJwR7PETPWzBjuHGQcIc48chs3p_xEPUHK_AKjldl9XhE_77cbE8vsiK8ramevAVqd7JkpdaBwlnaY6cgyW3d6mA83FPfTNOcg5kT7wDqf2nDkl56hbZ2w"/ >
</div>
</div>
</div>
</header>
{/* Main Scrollable Content */}
<main className="flex-1 overflow-y-auto p-gutter bg-background">
<div className="max-w-[1000px] mx-auto">
{/* Settings Header & Navigation */}
<div className="mb-8">
<h2 className="text-headline-lg text-on-surface mb-2">Settings</h2>
{/* Inner Nav */}
<div className="flex gap-6 border-b border-outline-variant mt-6">
<a className="pb-3 text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Profile</a>
<a className="pb-3 text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Preferences</a>
<a className="pb-3 text-body-md font-bold text-primary border-b-2 border-primary" href="#">Security</a>
<a className="pb-3 text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Notifications</a>
<a className="pb-3 text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Team</a>
</div>
</div>
{/* Security Content Area */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg">
<div className="mb-8">
<h3 className="text-headline-sm text-on-surface mb-1">Security</h3>
<p className="text-body-sm text-on-surface-variant">Manage your password and account security.</p>
</div>
<hr className="border-t border-outline-variant mb-8"/ >
{/* Change Password Form */}
<div className="max-w-md">
<h4 className="text-label-md uppercase text-on-surface-variant tracking-wider mb-6">Change Password</h4>
<form className="space-y-6" onSubmit={handleLogin}>
{/* Current Password */}
<div>
<label className="block text-label-md text-on-surface mb-2" htmlFor="current_password">Current Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="lock">lock</span>
</div>
<input className="w-full h-10 pl-10 pr-10 border border-outline-variant rounded-DEFAULT text-body-md bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="current_password" placeholder="Enter current password" type="password"/ >
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">visibility_off</span>
</button>
</div>
</div>
{/* New Password */}
<div>
<label className="block text-label-md text-on-surface mb-2" htmlFor="new_password">New Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="key">key</span>
</div>
<input className="w-full h-10 pl-10 pr-10 border border-outline-variant rounded-DEFAULT text-body-md bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="new_password" placeholder="Enter new password" type="password"/ >
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">visibility_off</span>
</button>
</div>
{/* Password Strength Indicator */}
<div className="mt-3 flex gap-1">
<div className="h-1 flex-1 bg-outline-variant rounded-full"></div>
<div className="h-1 flex-1 bg-outline-variant rounded-full"></div>
<div className="h-1 flex-1 bg-outline-variant rounded-full"></div>
<div className="h-1 flex-1 bg-outline-variant rounded-full"></div>
</div>
<p className="text-label-sm text-on-surface-variant mt-2 text-right">Must be at least 8 characters</p>
</div>
{/* Confirm New Password */}
<div>
<label className="block text-label-md text-on-surface mb-2" htmlFor="confirm_password">Confirm New Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="key">key</span>
</div>
<input className="w-full h-10 pl-10 pr-10 border border-outline-variant rounded-DEFAULT text-body-md bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="confirm_password" placeholder="Confirm new password" type="password"/ >
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">visibility_off</span>
</button>
</div>
</div>
<div className="pt-4">
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-DEFAULT font-medium text-label-md hover:bg-surface-tint transition-colors shadow-sm inline-flex items-center gap-2" type="button">
                                    Update Password
                                </button>
</div>
</form>
</div>
</div>
</div>
</main>
</div>
{/* Success Toast (Hidden by default, triggered by JS) */}
<div className="fixed bottom-6 right-6 transform translate-y-20 opacity-0 transition-all duration-300 ease-out z-50 flex items-center gap-3 bg-surface-container-lowest border border-outline-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-lg p-4 max-w-sm" id="toast">
<div className="w-8 h-8 rounded-full bg-[#ecfdf5] flex items-center justify-center text-[#047857]">
<span className="material-symbols-outlined text-[20px]" data-icon="check_circle" data-weight="fill"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>check_circle</span>
</div>
<div>
<p className="text-label-md font-semibold text-on-surface">Success</p>
<p className="text-body-sm text-on-surface-variant">Password updated successfully.</p>
</div>
<button className="ml-auto text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]" data-icon="close">close</span>
</button>
</div>
</div>
    </>
  );
}
