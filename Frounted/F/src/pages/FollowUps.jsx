import React from "react";
import Sidebar from "../components/Sidebar";

export default function FollowUps() {
  return (
    <>
<div className="flex h-screen overflow-hidden antialiased text-body-sm">
<Sidebar active="/followups" />
{/* Main Content Area */}
<div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
{/* TopNavBar */}
<header className="flex justify-between items-center px-lg w-full h-16 sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant shadow-sm text-primary font-body text-body-md">
<div className="flex items-center gap-md w-1/3">
<button className="md:hidden text-primary">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="relative w-full max-w-md hidden md:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline" data-icon="search">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-outline-variant rounded-md leading-5 bg-surface-container-lowest placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200" placeholder="Search..." type="text" />
</div>
</div>
<div className="flex items-center justify-center md:hidden">
<span className="text-headline-sm font-bold text-primary">LeadBridge</span>
</div>
<div className="flex items-center gap-md justify-end w-1/3">
<button className="text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 p-2 rounded-full cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 p-2 rounded-full cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer active:scale-95 hover:shadow-md transition-shadow">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a business executive. The lighting is clean, bright, and studio-quality against a solid light gray background. The subject is wearing a tailored navy blazer. The overall aesthetic is sharp, corporate, and trustworthy, perfectly fitting a high-end B2B CRM profile avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9HYc76mZLtcJnF352HZh3CDMRjkdxK0KIoKWkzDH8PWXcuqYrBOmCtRQrvg4k63J1zUpTSmrJekgymaHYGnSABFWod3cO2QvJYX5CBH7fo746ZyeBfGKGOoVNrsNpYTBBTE-PhLzoE-x5AY4CMbrG0eAkbgKE8LUk4-E0LEWLcVQBWw6_HChFwCmFyQH7WeLvOtNqnP2eyBBpm3ASnIjl1o6uObwSBxbZRrJ630JdQYJcweu3LhNvqg"/ >
</button>
</div>
</header>
{/* Page Content */}
<main className="flex-1 overflow-y-auto p-md md:p-lg lg:px-xl">
<div className="max-w-[1280px] mx-auto">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-xl">
<div>
<h2 className="text-headline-lg text-on-background mb-1">Follow-ups</h2>
<p className="text-body-md text-on-surface-variant">Stay on top of your customer conversations and scheduled tasks.</p>
</div>
<button className="bg-primary text-on-primary hover:bg-primary/90 transition-colors duration-200 rounded-md font-label-md py-2.5 px-5 flex items-center justify-center gap-2 whitespace-nowrap shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                        Add Follow-up
                    </button>
</div>
{/* Summary Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-label-md text-on-surface-variant uppercase tracking-wider">Today's Follow-ups</span>
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="calendar_today">calendar_today</span>
</div>
</div>
<div>
<span className="text-headline-xl text-primary block mb-1">12</span>
<span className="text-label-sm text-on-surface-variant">Due today</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-label-md text-on-surface-variant uppercase tracking-wider">Upcoming</span>
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="event_upcoming">event_upcoming</span>
</div>
</div>
<div>
<span className="text-headline-xl text-primary block mb-1">24</span>
<span className="text-label-sm text-on-surface-variant">Scheduled</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between border-l-4 border-l-error">
<div className="flex justify-between items-start mb-4">
<span className="text-label-md text-error uppercase tracking-wider font-semibold">Overdue</span>
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="warning">warning</span>
</div>
</div>
<div>
<span className="text-headline-xl text-error block mb-1">3</span>
<span className="text-label-sm text-error">Action required</span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-label-md text-on-surface-variant uppercase tracking-wider">Completed</span>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="task_alt">task_alt</span>
</div>
</div>
<div>
<span className="text-headline-xl text-primary block mb-1">156</span>
<span className="text-label-sm text-on-surface-variant">Total this month</span>
</div>
</div>
</div>
{/* Main Content Section: Controls */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
{/* Toolbar */}
<div className="p-4 border-b border-outline-variant flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-surface-bright">
{/* View Switcher */}
<div className="flex bg-surface-container-low rounded-md p-1 border border-outline-variant/50">
<button className="px-4 py-1.5 rounded text-label-md bg-surface-container-lowest shadow-sm text-primary font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="list">list</span>
                                List
                            </button>
<button className="px-4 py-1.5 rounded text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">calendar_month</span>
                                Calendar
                            </button>
</div>
{/* Filters */}
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<div className="relative flex-grow lg:flex-grow-0 lg:w-64">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="search">search</span>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 border border-outline-variant rounded-md text-body-sm bg-surface-container-lowest placeholder-on-surface-variant focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search follow-ups or leads..." type="text" />
</div>
<select className="border border-outline-variant rounded-md text-body-sm py-1.5 pl-3 pr-8 bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
<option>Status</option>
<option>Upcoming</option>
<option>Overdue</option>
<option>Completed</option>
</select>
<select className="border border-outline-variant rounded-md text-body-sm py-1.5 pl-3 pr-8 bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:border-primary text-on-surface-variant">
<option>Date</option>
<option>Today</option>
<option>Tomorrow</option>
<option>This Week</option>
</select>
<button className="p-1.5 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/* Data Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-label-sm text-on-surface-variant uppercase tracking-wider border-b border-outline-variant">
<th className="py-3 px-6 font-semibold">Lead</th>
<th className="py-3 px-6 font-semibold">Date &amp; Time</th>
<th className="py-3 px-6 font-semibold">Type</th>
<th className="py-3 px-6 font-semibold hidden md:table-cell">Description</th>
<th className="py-3 px-6 font-semibold hidden sm:table-cell">Assigned To</th>
<th className="py-3 px-6 font-semibold">Status</th>
<th className="py-3 px-6 font-semibold text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50 text-body-sm bg-surface-container-lowest">
{/* Row 1: Overdue */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-semibold text-sm">RS</div>
<span className="font-medium text-primary">Rahul Sharma</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="text-primary font-medium">Aug 15, 2026</div>
<div className="text-on-surface-variant text-label-sm">10:00 AM</div>
</td>
<td className="py-3 px-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
<span>Phone Call</span>
</div>
</td>
<td className="py-3 px-6 hidden md:table-cell max-w-[200px] truncate text-on-surface-variant">
                                        Follow up regarding product demo.
                                    </td>
<td className="py-3 px-6 hidden sm:table-cell">
<div className="flex items-center gap-2">
<img alt="John Smith" className="w-6 h-6 rounded-full object-cover" data-alt="A small circular headshot of a male professional wearing a light blue dress shirt. The background is a soft, out-of-focus modern office setting. The lighting is natural and bright, suitable for a corporate directory avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACOfloBMBh4bbQ4CrcwvrtzNt4tcG5i14XzdoB3tGrgSpl44AppndoxZ9QUq97J8CMSdcRnRWXthFlCRllj0FFA2mZZy4e2S1nZ07ARs8W-TsATqrG3OEjSLWSSTrnirpKUSZgNJ3P2MQNHM0rwfnNkl-cTp3A31I1vl1E2FT-0ET1NsbsSuE1o_W-P7Op4KI7hHVt3iGUy_E5eGStFsyA_tsow6M684awmlS22BW6C--tLakCmMS89A"/ >
<span className="text-on-surface-variant">John Smith</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]">
                                            Overdue
                                        </span>
</td>
<td className="py-3 px-6 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container-highest transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 2: Today */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-semibold text-sm">AP</div>
<span className="font-medium text-primary">Amit Patel</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="text-primary font-medium">Aug 17, 2026</div>
<div className="text-on-surface-variant text-label-sm">11:30 AM</div>
</td>
<td className="py-3 px-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
<span>WhatsApp</span>
</div>
</td>
<td className="py-3 px-6 hidden md:table-cell max-w-[200px] truncate text-on-surface-variant">
                                        Send product details.
                                    </td>
<td className="py-3 px-6 hidden sm:table-cell">
<div className="flex items-center gap-2">
<img alt="John Smith" className="w-6 h-6 rounded-full object-cover" data-alt="A small circular headshot of a male professional wearing a light blue dress shirt. The background is a soft, out-of-focus modern office setting. The lighting is natural and bright, suitable for a corporate directory avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi9BX8b1iU75cINmWYHEFRAnH7mHBc8HBuoo2voOuoDBrfqHJ_D7NBOsMrIpWu2OH7sD6P1rSaWU1ECiA0FjpTI2eyZf66kxPhv9AbTumD_1lmC6waU8YvkHc0rp689ZxdJ3mXqjMrZu9YaBn6evuPhNQ7g3uWGWOicrKOs-YcWhoPDrqFAMqr5Y8aycxj4gWI2_S5DN1jLKr5qPL0ss3m2B2ZgoGjwCgc6wV0sO1kFWHv4U3WfSzT8Q"/ >
<span className="text-on-surface-variant">John Smith</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#EFF6FF] text-[#1E3A8A] border border-[#BFDBFE]">
                                            Upcoming
                                        </span>
</td>
<td className="py-3 px-6 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container-highest transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 3: Upcoming */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-semibold text-sm">SC</div>
<span className="font-medium text-primary">Sarah Chen</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="text-primary font-medium">Aug 18, 2026</div>
<div className="text-on-surface-variant text-label-sm">02:00 PM</div>
</td>
<td className="py-3 px-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="groups">groups</span>
<span>Meeting</span>
</div>
</td>
<td className="py-3 px-6 hidden md:table-cell max-w-[200px] truncate text-on-surface-variant">
                                        Initial consultation.
                                    </td>
<td className="py-3 px-6 hidden sm:table-cell">
<div className="flex items-center gap-2">
<img alt="Sarah Jenkins" className="w-6 h-6 rounded-full object-cover" data-alt="A small circular headshot of a female professional with dark hair, wearing a dark blazer. The background is a clean, minimal white space. The image is high-resolution, sharply focused, and conveys a confident, approachable business persona." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU-TRmjcvdpMFLKqc0RODle5VdFnLHiwa5tgkoKtjMzxhVUFoE0kkJ8Fw6W2KR27oeWap2CB1j-B-HdD4We61fYHhb-QlOmwHxL_bl4oF0mb_bFSgsKhBGkGygH3wM1_ab4tz_6sM9zQF6LF1-MSfkIQ_hL4ifEi6T4c80ZXB58LH3SaLTs_qv6VsL0B4rSB_f1yRBwe4oTXqmOxPYFzt3Eltz03ZULEO8X2icgYAIoCGDim7ecpfT5Q"/ >
<span className="text-on-surface-variant">Sarah Jenkins</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-[#EFF6FF] text-[#1E3A8A] border border-[#BFDBFE]">
                                            Upcoming
                                        </span>
</td>
<td className="py-3 px-6 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container-highest transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination (Static representation) */}
<div className="p-4 border-t border-outline-variant bg-surface-bright flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Showing 1 to 3 of 36 results</span>
<div className="flex gap-1">
<button className="px-3 py-1 border border-outline-variant rounded-md hover:bg-surface-container-low disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded-md">1</button>
<button className="px-3 py-1 border border-outline-variant rounded-md hover:bg-surface-container-low">2</button>
<button className="px-3 py-1 border border-outline-variant rounded-md hover:bg-surface-container-low">3</button>
<span className="px-2 py-1">...</span>
<button className="px-3 py-1 border border-outline-variant rounded-md hover:bg-surface-container-low">Next</button>
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
