import React from "react";

export default function NotificationPreferences() {
  return (
    <>
<div className="h-full bg-surface-container-lowest font-body text-on-surface flex overflow-hidden">
{/* SideNavBar */}
<aside className="bg-primary-container h-full w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col h-screen py-6 z-50">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-sm" data-icon="hub"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>hub</span>
</div>
<div>
<h1 className="text-headline-md font-bold text-on-primary tracking-tight leading-none">LeadBridge</h1>
<p className="text-label-sm font-medium text-on-primary-container">Sales CRM</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-2">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-label-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="text-label-sm font-medium">Leads</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="event_repeat">event_repeat</span>
<span className="text-label-sm font-medium">Follow-ups</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-label-sm font-medium">Notifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="text-label-sm font-medium">Activity Logs</span>
</a>
{/* Active State */}
<a className="flex items-center gap-3 px-4 py-2 border-l-4 border-primary bg-on-primary-container/10 text-on-primary font-semibold rounded-r-lg mt-auto mb-2" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-label-sm font-medium">Settings</span>
</a>
</nav>
<div className="px-6 mt-4">
<button className="w-full bg-primary text-on-primary py-2 px-4 rounded font-medium text-label-sm hover:bg-primary/90 transition-colors scale-95 transition-transform duration-100 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                Add New Lead
            </button>
</div>
</aside>
{/* Main Content Area Wrapper */}
<div className="flex-1 flex flex-col ml-64 min-h-screen">
{/* TopNavBar */}
<header className="bg-surface-container-lowest docked full-width top-0 sticky z-40 border-b border-outline-variant shadow-sm flex justify-between items-center h-16 px-6 w-full">
<div className="flex-1 max-w-xl hidden md:block text-headline-sm font-bold text-on-surface">
{/* Brand logo hidden here as it's in sidebar, but keeping structure per JSON */}
</div>
<div className="flex-1 max-w-xl mx-auto hidden md:block">
<div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-md text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search leads, notes..." type="text"/ >
</div>
</div>
<div className="flex-1 flex justify-end items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-container overflow-hidden border border-outline-variant flex-shrink-0 cursor-pointer">
<img alt="LeadBridge User" className="w-full h-full object-cover" data-alt="A professional headshot of a person in a corporate setting, soft high-key lighting, bright neutral background. The person looks approachable and confident. Light mode aesthetic with sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyNCRHfpCfAKGvPC9YvAnLAn2vRVbv4PTsnc4NKvmFIwk_jfJ3-IdG1Mo4C3-tNMq6C5KOCOsUj1azFJ6cKfOkygq4aYMjIUDqpCJh7dOyYh2vvNFIQilmEstG2kGQrRNVNQEQj-QqVln1D3pa-MKa7n4FuMroWfZTSb1VF4F3GiN4z6dHXl8BH5_Qf7clmjwEHiv4cdeQmKn2O_38gUo-VNaB3738sM_f49ElRxWHd9GEO21V7B-nLQ"/ >
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-[1280px] mx-auto">
{/* Page Header */}
<div className="mb-8">
<h2 className="text-headline-lg font-semibold text-on-surface mb-2">Settings</h2>
<p className="text-body-md text-on-surface-variant">Manage your account preferences and notification settings.</p>
</div>
{/* Settings Sub-Nav (Tabs) */}
<div className="flex border-b border-outline-variant mb-8 gap-8">
<button className="text-primary font-bold border-b-2 border-primary pb-3 px-1 text-label-md">Notifications &amp; Preferences</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-3 px-1 text-label-md">Profile &amp; Security</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-3 px-1 text-label-md">Integrations</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-3 px-1 text-label-md">Billing</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Main Settings Column */}
<div className="lg:col-span-2 space-y-8">
{/* Section 1: Notification Preferences */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant">
<span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
<h3 className="text-headline-sm font-semibold text-on-surface">Notification Preferences</h3>
</div>
<div className="space-y-4">
{/* Toggle Item */}
<div className="flex items-center justify-between py-2">
<div>
<p className="text-body-md font-medium text-on-surface">Lead assigned to me</p>
<p className="text-body-sm text-on-surface-variant">Notify me when a new lead is routed to my queue.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/ >
<div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Toggle Item */}
<div className="flex items-center justify-between py-2">
<div>
<p className="text-body-md font-medium text-on-surface">Follow-up reminders</p>
<p className="text-body-sm text-on-surface-variant">Daily summary of scheduled follow-ups.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/ >
<div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Toggle Item */}
<div className="flex items-center justify-between py-2">
<div>
<p className="text-body-md font-medium text-on-surface">Overdue follow-ups</p>
<p className="text-body-sm text-on-surface-variant">Immediate alerts for missed commitments.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/ >
<div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Toggle Item */}
<div className="flex items-center justify-between py-2">
<div>
<p className="text-body-md font-medium text-on-surface">Lead status changes</p>
<p className="text-body-sm text-on-surface-variant">Updates when a lead moves through the pipeline.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/ >
<div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
{/* Section 2: System Preferences */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant">
<span className="material-symbols-outlined text-primary" data-icon="tune">tune</span>
<h3 className="text-headline-sm font-semibold text-on-surface">System Preferences</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Select Input */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface-variant block">Theme</label>
<div className="relative">
<select className="w-full appearance-none bg-surface border border-outline-variant rounded-md px-4 py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
<option>System Default</option>
<option selected="">Light</option>
<option>Dark</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
</div>
</div>
{/* Select Input */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface-variant block">Language</label>
<div className="relative">
<select className="w-full appearance-none bg-surface border border-outline-variant rounded-md px-4 py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
<option selected="">English (US)</option>
<option>Spanish</option>
<option>French</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
</div>
</div>
{/* Select Input */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface-variant block">Timezone</label>
<div className="relative">
<select className="w-full appearance-none bg-surface border border-outline-variant rounded-md px-4 py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
<option selected="">Auto-detect (America/New_York)</option>
<option>UTC</option>
<option>Pacific Time (PT)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
</div>
</div>
{/* Select Input */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface-variant block">Date Format</label>
<div className="relative">
<select className="w-full appearance-none bg-surface border border-outline-variant rounded-md px-4 py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
<option selected="">DD/MM/YYYY</option>
<option>MM/DD/YYYY</option>
<option>YYYY-MM-DD</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
</section>
</div>
{/* Sidebar Column (Account & Danger Zone) */}
<div className="space-y-6">
{/* Section 3: Account Actions */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="manage_accounts">manage_accounts</span>
<h3 className="text-headline-sm font-semibold text-on-surface">Account</h3>
</div>
<p className="text-body-sm text-on-surface-variant mb-6">Manage your session or switch accounts.</p>
<button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface py-2 px-4 rounded font-medium text-label-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="logout">logout</span>
                                Log Out
                            </button>
</div>
{/* Section 4: Danger Zone */}
<div className="bg-error-container/20 border border-error/30 rounded-xl p-6">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
<h3 className="text-headline-sm font-semibold text-error">Danger Zone</h3>
</div>
<p className="text-body-sm text-on-surface-variant mb-6">Irreversible actions regarding your data and account.</p>
<button className="w-full bg-error text-on-error py-2 px-4 rounded font-medium text-label-sm hover:bg-error/90 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="delete_forever">delete_forever</span>
                                Delete Account
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
    </>
  );
}
