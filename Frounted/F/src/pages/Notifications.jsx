import React from "react";
import Sidebar from "../components/Sidebar";

export default function Notifications() {
  return (
    <>
<div className="bg-background text-on-background font-body antialiased flex h-screen overflow-hidden">
<Sidebar active="/notifications" />
{/* Main Content Area */}
<main className="flex-1 ml-64 flex flex-col h-full bg-background relative overflow-hidden">
{/* TopNavBar */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-on-surface-variant docked full-width top-0 sticky flex justify-between items-center h-16 px-8 z-10 w-full">
<div className="flex-1 flex items-center">
{/* Search on left as requested */}
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-md text-body-sm text-primary placeholder-on-surface-variant focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Search leads, contacts, or notifications..." type="text"/ >
</div>
</div>
<div className="flex items-center gap-4">
<button aria-label="Notifications" className="text-primary dark:text-inverse-primary hover:bg-surface-container-low dark:hover:bg-on-tertiary-container/10 p-2 rounded-full transition-all relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface"></span>
</button>
<button aria-label="History" className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-on-tertiary-container/10 p-2 rounded-full transition-all">
<span className="material-symbols-outlined">history</span>
</button>
<button aria-label="Help" className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-on-tertiary-container/10 p-2 rounded-full transition-all">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
</header>
{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto p-gutter relative">
<div className="max-w-container-max mx-auto h-full flex flex-col">
{/* Page Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="text-headline-lg text-primary">Notifications</h1>
<p className="text-body-md text-on-surface-variant mt-1">Stay updated on your leads, follow-ups, and sales activity.</p>
</div>
<button className="bg-surface text-primary border border-outline-variant px-4 py-2 rounded-md font-label-md hover:bg-surface-container-low transition-colors shadow-sm">
                        Mark all as read
                    </button>
</div>
{/* Filters Area */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-6 shadow-sm flex flex-col gap-4">
<div className="flex flex-wrap gap-6 border-b border-outline-variant/50 pb-4">
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-colors">Unread <span className="ml-1 bg-surface-variant px-1.5 py-0.5 rounded-full text-[10px]">2</span></button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-colors">Read</button>
</div>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 rounded border border-outline-variant bg-surface text-on-surface-variant font-body-sm hover:bg-surface-container-low transition-colors">All Categories</button>
<button className="px-3 py-1 rounded border border-transparent bg-surface-container text-on-surface font-body-sm hover:bg-surface-container-high transition-colors">Leads</button>
<button className="px-3 py-1 rounded border border-transparent bg-surface-container text-on-surface font-body-sm hover:bg-surface-container-high transition-colors">Assignments</button>
<button className="px-3 py-1 rounded border border-transparent bg-surface-container text-on-surface font-body-sm hover:bg-surface-container-high transition-colors">Follow-ups</button>
</div>
</div>
{/* Notification List Container */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
{/* Item 1: Unread, Lead Assigned */}
<div className="group relative flex items-start gap-4 p-5 border-b border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>person_add</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-body-md font-semibold text-primary">Lead Assigned</h3>
<p className="text-body-sm text-on-surface-variant mt-0.5">Rahul Sharma has been assigned to you.</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">person</span> Rahul Sharma
                                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-label-sm text-primary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                                        10m ago
                                    </span>
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
{/* Item 2: Unread, Follow-up Overdue */}
<div className="group relative flex items-start gap-4 p-5 border-b border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>error</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<div className="flex items-center gap-2">
<h3 className="text-body-md font-semibold text-primary">Follow-up Overdue</h3>
<span className="px-2 py-0.5 rounded-full bg-error/10 text-error text-[10px] font-bold uppercase tracking-wide">High Priority</span>
</div>
<p className="text-body-sm text-on-surface-variant mt-0.5">The follow-up with TechFlow Solutions is overdue.</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">business</span> TechFlow Solutions
                                        </span>
<span className="inline-flex items-center gap-1 text-xs font-medium text-error bg-error-container/50 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">schedule</span> Today, 9:00 AM
                                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-label-sm text-primary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                                        4h ago
                                    </span>
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
{/* Item 3: Read, Follow-up Reminder */}
<div className="group relative flex items-start gap-4 p-5 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">event</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-body-md font-medium text-on-surface">Follow-up Reminder</h3>
<p className="text-body-sm text-on-surface-variant mt-0.5">You have a follow-up with Amit Patel today at 2:00 PM.</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">person</span> Amit Patel
                                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-label-sm text-on-surface-variant">Today, 9:30 AM</span>
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
{/* Item 4: Read, Status Changed */}
<div className="group relative flex items-start gap-4 p-5 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">swap_horiz</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-body-md font-medium text-on-surface">Lead Status Changed</h3>
<p className="text-body-sm text-on-surface-variant mt-0.5">Rahul Sharma changed from Contacted to Qualified.</p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-label-sm text-on-surface-variant">2h ago</span>
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
{/* Item 5: Read, Note Added */}
<div className="group relative flex items-start gap-4 p-5 hover:bg-surface-container-low transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">edit_note</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-body-md font-medium text-on-surface">Note Added</h3>
<p className="text-body-sm text-on-surface-variant mt-0.5">Sarah Jenkins added a note to Rahul Sharma.</p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-label-sm text-on-surface-variant">5h ago</span>
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* Load More / End of List */}
<div className="text-center mt-6 mb-12">
<button className="text-body-sm font-medium text-on-surface-variant hover:text-primary transition-colors">View older notifications</button>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
