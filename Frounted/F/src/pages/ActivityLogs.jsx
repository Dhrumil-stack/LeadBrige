import React from "react";
import Sidebar from "../components/Sidebar";

export default function ActivityLogs() {
  return (
    <>
<div className="bg-surface font-body text-on-surface h-full antialiased overflow-hidden flex">
<Sidebar active="/activity-logs" />
{/* Main Content Area */}
<main className="flex-1 flex flex-col ml-64 h-screen bg-surface">
{/* TopNavBar */}
<header className="flex justify-between items-center px-6 w-full h-16 border-b border-outline-variant bg-surface dark:bg-surface-dim shrink-0">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-md text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search across CRM..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-xl">help</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-xl">apps</span>
</button>
</div>
</header>
{/* Page Content Container */}
<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-[1280px] mx-auto w-full flex flex-col gap-6">
{/* Page Header */}
<div className="flex justify-between items-end">
<div>
<h2 className="text-headline-lg font-semibold tracking-tight text-on-surface">Activity Logs</h2>
<p className="text-body-md text-on-surface-variant mt-1">Track important actions and changes across your sales team.</p>
</div>
</div>
{/* Stats Summary Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm uppercase text-on-surface-variant font-semibold">Today's Activity</p>
<p className="text-headline-md font-semibold text-primary mt-1">24</p>
</div>
<div className="bg-surface-container-low p-3 rounded-full text-secondary">
<span className="material-symbols-outlined">today</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm uppercase text-on-surface-variant font-semibold">This Week</p>
<p className="text-headline-md font-semibold text-primary mt-1">137</p>
</div>
<div className="bg-surface-container-low p-3 rounded-full text-secondary">
<span className="material-symbols-outlined">date_range</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm uppercase text-on-surface-variant font-semibold">Active Agents</p>
<p className="text-headline-md font-semibold text-primary mt-1">8</p>
</div>
<div className="bg-surface-container-low p-3 rounded-full text-secondary">
<span className="material-symbols-outlined">group</span>
</div>
</div>
</div>
{/* Main Content Area: Filter & Table */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col">
{/* Filter Toolbar */}
<div className="p-4 border-b border-outline-variant flex flex-col sm:flex-row items-center gap-4 justify-between bg-surface-container-low/50 rounded-t-xl">
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded text-body-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search activity..." type="text" />
</div>
</div>
<div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
<select className="bg-surface-container-lowest border border-outline-variant rounded text-body-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
<option>User: All</option>
<option>Sarah Jenkins</option>
<option>Michael Chen</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded text-body-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
<option>Action: All</option>
<option>Created</option>
<option>Updated</option>
<option>Status Changed</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded text-body-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
<option>Date: Today</option>
<option>This Week</option>
<option>This Month</option>
</select>
<button className="text-on-surface-variant hover:text-primary text-body-sm font-medium px-3 py-2 whitespace-nowrap">Clear Filters</button>
</div>
</div>
{/* Activity Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">User</th>
<th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Action</th>
<th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Description</th>
<th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider">Date &amp; Time</th>
<th className="py-3 px-6 text-label-sm font-semibold uppercase text-on-surface-variant tracking-wider text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50">
{/* Row 1 */}
<tr className="hover:bg-secondary-fixed/30 transition-colors group">
<td className="py-4 px-6 align-top">
<div className="flex items-center gap-3">
<br />
<div>
<p className="text-body-sm font-medium text-on-surface">Michael Chen</p>
<p className="text-label-sm text-on-surface-variant">Sales Rep</p>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high border border-outline-variant text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">sync_alt</span>
<span className="text-label-sm font-medium">Status Changed</span>
</div>
</td>
<td className="py-4 px-6 align-top max-w-md">
<p className="text-body-sm text-on-surface">
<a className="font-medium text-primary hover:underline" href="#">Acme Corp Enterprise</a> was moved from <span className="bg-surface-variant px-1 rounded text-on-surface-variant text-label-sm">Contacted</span> to <span className="bg-secondary-fixed px-1 rounded text-on-secondary-fixed-variant text-label-sm font-medium">Qualified</span>.
                                        </p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-body-sm text-on-surface font-medium">Today, 10:30 AM</p>
</td>
<td className="py-4 px-6 align-top text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-secondary-fixed/30 transition-colors group">
<td className="py-4 px-6 align-top">
<div className="flex items-center gap-3">
<br />
<div>
<p className="text-body-sm font-medium text-on-surface">Sarah Jenkins</p>
<p className="text-label-sm text-on-surface-variant">Account Exec</p>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high border border-outline-variant text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">person_add</span>
<span className="text-label-sm font-medium">Lead Created</span>
</div>
</td>
<td className="py-4 px-6 align-top max-w-md">
<p className="text-body-sm text-on-surface">
                                            Created new lead <a className="font-medium text-primary hover:underline" href="#">TechFlow Systems</a> from inbound website form.
                                        </p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-body-sm text-on-surface font-medium">Today, 09:15 AM</p>
</td>
<td className="py-4 px-6 align-top text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="p-4 border-t border-outline-variant flex items-center justify-between bg-surface-container-lowest rounded-b-xl">
<p className="text-body-sm text-on-surface-variant">Showing <span className="font-medium text-on-surface">1–20</span> of 248 activities</p>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 text-body-sm font-medium text-on-surface-variant border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50" disabled="">Previous</button>
<button className="w-8 h-8 flex items-center justify-center text-body-sm font-medium rounded bg-primary text-on-primary">1</button>
<button className="w-8 h-8 flex items-center justify-center text-body-sm font-medium rounded text-on-surface-variant hover:bg-surface-container-low">2</button>
<button className="w-8 h-8 flex items-center justify-center text-body-sm font-medium rounded text-on-surface-variant hover:bg-surface-container-low">3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="px-3 py-1.5 text-body-sm font-medium text-on-surface border border-outline-variant rounded hover:bg-surface-container-low">Next</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
