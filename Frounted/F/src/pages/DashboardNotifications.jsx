import React from "react";

export default function DashboardNotifications() {
  return (
    <>
<div className="bg-background text-on-background min-h-screen flex overflow-hidden">
{/* SideNavBar (Shared Component) */}
<nav className="bg-primary-container h-screen w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col py-6 z-40">
<div className="px-6 mb-8 flex flex-col gap-1">
<h1 className="text-[24px] font-headline font-bold text-on-primary tracking-[-0.01em]">LeadBridge</h1>
<span className="text-[12px] font-label font-semibold text-on-primary-container tracking-[0.05em] uppercase">Sales CRM</span>
</div>
<button className="mx-4 mb-6 bg-secondary-container hover:bg-secondary-fixed transition-colors duration-150 text-on-secondary-container font-label text-[14px] font-medium py-2.5 px-4 rounded-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">add</span>
            New Lead
        </button>
<ul className="flex flex-col flex-1 space-y-1">
{/* Active Tab: Dashboard */}
<li>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-fixed-dim/10 text-on-primary border-l-4 border-on-primary-fixed hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium opacity-90 transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
                    Dashboard
                </a>
</li>
{/* Inactive Tabs */}
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">leaderboard</span>
                    Leads
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">reorder</span>
                    Pipeline
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">group</span>
                    Contacts
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">insights</span>
                    Analytics
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-auto pt-4">
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container border-l-4 border-transparent hover:bg-on-primary-container/5 hover:text-on-primary transition-colors duration-150 font-body text-[14px] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">help</span>
                Help Center
            </a>
</div>
</nav>
{/* Main Content Area */}
<main className="ml-64 flex-1 flex flex-col h-screen overflow-y-auto bg-surface relative">
{/* Background Overlay to subtly de-emphasize dashboard content when dropdown is active */}
<div className="absolute inset-0 bg-primary-container/5 pointer-events-none z-40 transition-opacity duration-200"></div>
{/* TopNavBar (Shared Component) */}
<header className="bg-surface border-b border-outline-variant full-width top-0 sticky z-50 flex justify-between items-center h-16 px-8 transition-all">
{/* Search Bar (on_left) */}
<div className="relative w-80">
<span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-2 pl-10 pr-4 font-body text-[14px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Search leads, contacts..." type="text"/ >
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-4">
{/* Notification Container (ACTIVE STATE) */}
<div className="relative">
<button aria-label="Notifications" className="p-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors relative flex items-center justify-center group focus:ring-2 focus:ring-primary/20 outline-none">
<span className="material-symbols-outlined"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>notifications</span>
{/* Notification Badge (Unread count indicator) */}
<span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary border-2 border-surface-container-high rounded-full"></span>
</button>
{/* NOTIFICATION DROPDOWN PANEL (OPEN) */}
<div className="absolute right-0 top-[calc(100%+8px)] w-[400px] bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col z-50 origin-top-right transition-all transform scale-100 opacity-100">
{/* Dropdown Header */}
<div className="px-5 py-4 border-b border-outline-variant/60 flex items-center justify-between bg-surface-bright">
<h3 className="font-headline text-[16px] font-semibold text-on-surface">Notifications</h3>
<button className="font-label text-[12px] font-medium text-on-surface-variant hover:text-primary transition-colors">Mark all as read</button>
</div>
{/* Notification List */}
<div className="max-h-[420px] overflow-y-auto custom-scrollbar flex flex-col">
{/* Item 1: Unread */}
<div className="px-5 py-4 flex gap-4 bg-primary-fixed/30 hover:bg-primary-fixed/40 transition-colors border-b border-outline-variant/30 relative cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-sm"></div>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body text-[14px] text-on-surface leading-snug">
<span className="font-semibold text-on-surface">Rahul Sharma</span> has been assigned to you.
                                    </p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label text-[12px] text-primary font-medium">5 min ago</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label text-[12px] text-primary">Unread</span>
</div>
</div>
<div className="flex-shrink-0 pt-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
{/* Item 2: Unread */}
<div className="px-5 py-4 flex gap-4 bg-primary-fixed/30 hover:bg-primary-fixed/40 transition-colors border-b border-outline-variant/30 relative cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-sm"></div>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[20px]">event_repeat</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body text-[14px] text-on-surface leading-snug">
                                        You have a follow-up with <span className="font-semibold text-on-surface">Amit Patel</span> at 10:30 AM.
                                    </p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label text-[12px] text-primary font-medium">25 min ago</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label text-[12px] text-primary">Unread</span>
</div>
</div>
<div className="flex-shrink-0 pt-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
{/* Item 3: Read */}
<div className="px-5 py-4 flex gap-4 hover:bg-surface-container-low transition-colors border-b border-outline-variant/30 cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body text-[14px] text-on-surface-variant leading-snug">
<span className="font-semibold text-on-surface">Rahul Sharma</span> was moved to Qualified.
                                    </p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label text-[12px] text-outline">1 hour ago</span>
</div>
</div>
</div>
{/* Item 4: Read */}
<div className="px-5 py-4 flex gap-4 hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">group_add</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body text-[14px] text-on-surface-variant leading-snug">
<span className="font-semibold text-on-surface">Acme Corp</span> was added to the system.
                                    </p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label text-[12px] text-outline">3 hours ago</span>
</div>
</div>
</div>
</div>
{/* Dropdown Footer */}
<div className="px-5 py-3 border-t border-outline-variant/60 bg-surface-container-lowest text-center">
<button className="font-label text-[14px] font-medium text-primary hover:underline transition-all">View all notifications</button>
</div>
</div>
</div>
{/* History Icon */}
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none">
<span className="material-symbols-outlined">history</span>
</button>
{/* Help Icon */}
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none">
<span className="material-symbols-outlined">help_outline</span>
</button>
{/* Profile Avatar */}
<div className="ml-2 w-9 h-9 rounded-full border border-outline-variant overflow-hidden cursor-pointer">
<img alt="Professional headshot" className="w-full h-full object-cover" data-alt="Professional headshot of a confident B2B sales executive in modern office lighting. The portrait is sharp, corporate, and minimalist, fitting perfectly into a light-mode high-end CRM application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaN5epVFTyxVwWDohTjjla6kITSwTszTZbFznX1kqP3cIsxBMSFW5HNakCpmBUrly43oh3z9ER2dC-xwWnqos1O3ZeQli35EzFezwkbyr_X9Ozb0-0fpsdke8iLrhGgMqdh_mVE0J3b47jC9wnm-Z0FkfLrXcfBTZzDVaOaqtpxl_4WsDbosremeh3Jb9EwbI1mP_lMWe1UfUEEHRPUzfaGIsHcM2-K4oQrSh-UXtXxsXhS8-saKMVYQ"/ >
</div>
</div>
</header>
{/* Dashboard Canvas (De-emphasized visually by the overlay, but structure remains) */}
<div className="p-8 max-w-[1280px] mx-auto w-full flex-1">
{/* Page Header */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-[30px] font-headline font-semibold text-on-surface tracking-[-0.02em] leading-tight">Dashboard Overview</h2>
<p className="text-[14px] font-body text-on-surface-variant mt-1">Here's what's happening with your pipeline today.</p>
</div>
</div>
{/* Metrics Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
{/* Metric Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="font-label text-[14px] font-medium text-on-surface-variant">Total Active Leads</span>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[18px]">group</span>
</div>
</div>
<div>
<div className="text-[36px] font-headline font-bold text-on-surface tracking-tight">248</div>
<div className="flex items-center gap-1 mt-1 text-[12px] font-label font-medium text-[#166534]">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span>+12% from last week</span>
</div>
</div>
</div>
{/* Metric Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="font-label text-[14px] font-medium text-on-surface-variant">Pipeline Value</span>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[18px]">payments</span>
</div>
</div>
<div>
<div className="text-[36px] font-headline font-bold text-on-surface tracking-tight">$1.2M</div>
<div className="flex items-center gap-1 mt-1 text-[12px] font-label font-medium text-on-surface-variant">
<span>Across 42 deals</span>
</div>
</div>
</div>
{/* Metric Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="font-label text-[14px] font-medium text-on-surface-variant">Conversion Rate</span>
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">donut_large</span>
</div>
</div>
<div>
<div className="text-[36px] font-headline font-bold text-on-surface tracking-tight">18.4%</div>
<div className="flex items-center gap-1 mt-1 text-[12px] font-label font-medium text-on-error-container">
<span className="material-symbols-outlined text-[14px]">trending_down</span>
<span>-2.1% from last week</span>
</div>
</div>
</div>
</div>
{/* Lower Section Placeholder to fill out the bento layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-[1.5rem] p-6 shadow-sm h-80 flex items-center justify-center text-outline-variant">
<div className="text-center">
<span className="material-symbols-outlined text-[48px] mb-2">bar_chart</span>
<p className="font-body text-[14px]">Revenue Forecast Chart Placeholder</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-[1.5rem] p-6 shadow-sm h-80 flex items-center justify-center text-outline-variant">
<div className="text-center">
<span className="material-symbols-outlined text-[48px] mb-2">format_list_bulleted</span>
<p className="font-body text-[14px]">Recent Activity Placeholder</p>
</div>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
