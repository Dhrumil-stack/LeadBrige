import React from "react";

export default function ProfileSettings() {
  return (
    <>
<div className="bg-surface text-on-surface antialiased min-h-screen flex">
{/* SideNavBar */}
<nav className="bg-primary-container dark:bg-primary-container h-full w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col py-6 z-50">
<div className="px-6 mb-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary-container font-bold text-lg">L</div>
<div>
<h1 className="text-headline-sm font-bold text-on-primary tracking-tight">LeadBridge</h1>
<p className="text-label-sm font-medium text-on-primary-container">Sales CRM</p>
</div>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-150 shadow-sm scale-95 hover:scale-100 transform">
<span className="material-symbols-outlined text-lg" data-icon="add"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>add</span>
                Add New Lead
            </button>
</div>
<ul className="flex-1 space-y-1">
<li className="">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-label-sm font-medium">Dashboard</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="text-label-sm font-medium">Leads</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="event_repeat">event_repeat</span>
<span className="text-label-sm font-medium">Follow-ups</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-label-sm font-medium">Notifications</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-4 py-2 text-on-primary-container hover:text-on-primary hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="text-label-sm font-medium">Activity Logs</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-4 py-2 border-l-4 border-primary bg-on-primary-container/10 text-on-primary font-semibold hover:bg-primary/20 transition-colors duration-150 scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="settings"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>settings</span>
<span className="text-label-sm font-medium">Settings</span>
</a>
</li>
</ul>
<div className="px-6 mt-auto">
<div className="flex items-center gap-3 py-3 border-t border-outline-variant/30">
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full object-cover" data-alt="Professional headshot of a sales agent with a neutral expression, wearing smart business casual attire, against a light grey studio background. Clean, high quality corporate portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6QTWCosOEyDspibGzfhL47TrlMfc6F09u2Y7bNdg7DLgzMBY7_810375QOW03FcEWKARrFHg01X76oQtrzX-v1DdnoduNiZq1-DwC8Gh1E2WEYHlef75pi-hWDA02yjP3XXTOcWb7avoE5oQMnzCDhKf0YdhvcWVDwfxhuzUvH60peP5GstZktKNXRr235EUpli2oIQFisIMry7GJ98QSM2CWH4LM-74oOMR9RrT73KgwG9IdOHEIQ" />
<div className="flex-1 min-w-0">
<p className="text-label-sm text-on-primary font-medium truncate">John Smith</p>
</div>
</div>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 ml-64 flex flex-col min-h-screen">
{/* TopNavBar */}
<header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant shadow-sm docked full-width top-0 sticky z-40">
<div className="flex justify-between items-center h-16 px-6">
{/* Search Bar (on_left) */}
<div className="flex-1 flex items-center max-w-md">
<div className="relative w-full focus-within:ring-2 focus-within:ring-primary/20 rounded-lg">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-[20px]" data-icon="search">search</span>
<input className="w-full h-10 pl-10 pr-4 bg-surface rounded-lg border border-outline-variant text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" placeholder="Search leads, tasks..." type="text" />
</div>
</div>
{/* Trailing Actions & Profile */}
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/50 mx-2"></div>
<img alt="LeadBridge User" className="w-9 h-9 rounded-full object-cover border border-outline-variant cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all" data-alt="Professional headshot of a sales agent with a neutral expression, wearing smart business casual attire, against a light grey studio background. Clean, high quality corporate portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsml53LDZKS2Z9exNUi3QBsmE94ewLyDHLLgoAAC8m2xd0GaSXNI2k2JbhqnnIZ2uAp9z22IppQ_khN0JIX9H9XWgSushThAmw2fMNEkobvJ3egk_m26_z-dpyRNxL657LhW8tIguxTZ4gn8kutYGR9ezb4sn-N7UJRLvqEyEUaeWUCrn3upYn7e5OUP8WahzvdX4XidtGN2yszZD-YpsHkCjrgxMVov_hcWEZfs-edI9RXqug1ukaVQ" />
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-8 max-w-[1280px] mx-auto w-full">
{/* Section Header */}
<div className="mb-8">
<h2 className="text-headline-lg font-semibold text-on-surface tracking-tight mb-2">Profile Settings</h2>
<p className="text-body-md text-on-surface-variant">Manage your personal information and account details.</p>
</div>
<div className="flex flex-col md:flex-row gap-8">
{/* Settings Navigation (Left Sidebar) */}
<aside className="w-full md:w-64 flex-shrink-0">
<nav className="flex flex-col space-y-1">
<a className="px-4 py-3 bg-surface-container text-primary font-semibold rounded-lg flex items-center justify-between group" href="#">
<span className="">Profile</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
<a className="px-4 py-3 text-on-surface-variant hover:bg-surface hover:text-on-surface font-medium rounded-lg flex items-center justify-between transition-colors group" href="#">
<span className="">Security</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
<a className="px-4 py-3 text-on-surface-variant hover:bg-surface hover:text-on-surface font-medium rounded-lg flex items-center justify-between transition-colors group" href="#">
<span className="">Notifications</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
<a className="px-4 py-3 text-on-surface-variant hover:bg-surface hover:text-on-surface font-medium rounded-lg flex items-center justify-between transition-colors group" href="#">
<span className="">Preferences</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
</nav>
</aside>
{/* Settings Content (Right Area) */}
<div className="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-8">
{/* Profile Header */}
<div className="flex items-center gap-6 mb-10 pb-8 border-b border-outline-variant/50">

<div>
<h3 className="text-headline-md font-semibold text-on-surface mb-1">John Smith</h3>
<div className="flex flex-col gap-1 text-body-sm text-on-surface-variant">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]" data-icon="work">work</span> Sales Agent</span>
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]" data-icon="mail">mail</span> john@example.com</span>
</div>
</div>
<div className="ml-auto">
<button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg font-medium text-label-md hover:bg-surface-container transition-colors shadow-sm">
                                Change Photo
                            </button>
</div>
</div>
{/* Profile Form */}
<form className="space-y-6 max-w-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Full Name */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface uppercase tracking-wider">Full Name</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px]" data-icon="person">person</span>
<input className="w-full h-10 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="text" value="John Smith" />
</div>
</div>
{/* Role (Read Only) */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface uppercase tracking-wider">Role</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px]" data-icon="badge">badge</span>
<input className="w-full h-10 pl-10 pr-3 bg-surface-container border border-outline-variant/50 rounded-lg text-body-md text-on-surface-variant cursor-not-allowed focus:outline-none" readOnly="" type="text" value="Sales Agent" />
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Email */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface uppercase tracking-wider">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px]" data-icon="mail">mail</span>
<input className="w-full h-10 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="email" value="john@example.com" />
</div>
</div>
{/* Phone Number */}
<div className="space-y-2">
<label className="text-label-sm font-medium text-on-surface uppercase tracking-wider">Phone Number</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px]" data-icon="phone">phone</span>
<input className="w-full h-10 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="tel" value="+91 98765 43210" />
</div>
</div>
</div>
{/* Action Buttons */}
<div className="pt-8 mt-8 border-t border-outline-variant/50 flex justify-end gap-3">
<button className="px-5 py-2.5 bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container hover:text-on-surface rounded-lg font-medium text-label-md transition-colors shadow-sm" type="button">
                                Cancel
                            </button>
<button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-medium text-label-md hover:bg-primary/90 transition-colors shadow-sm" type="button">
                                Save Changes
                            </button>
</div>
</form>
</div>
</div>
</main>
</div>
</div>
    </>
  );
}
