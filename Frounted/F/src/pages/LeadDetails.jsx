import React from "react";

export default function LeadDetails() {
  return (
    <>
<div className="bg-background text-on-background font-body antialiased selection:bg-secondary-container selection:text-on-secondary-container">
{/* Top Navigation (Shell suppressed for detailed task view, minimal header provided) */}
<header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50">
<div className="max-w-container-max mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
{/* Back Action */}
<a className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="arrow_back">arrow_back</span>
<span className="">Back to Leads</span>
</a>
{/* Header Actions */}
<div className="flex items-center gap-3">
<button className="flex items-center justify-center h-10 px-4 rounded-md bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container-low transition-colors text-label-md">
<span className="material-symbols-outlined text-[18px] mr-2" data-icon="edit">edit</span>
                        Edit Lead
                    </button>
<button className="flex items-center justify-center h-10 px-4 rounded-md bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container-low transition-colors text-label-md">
<span className="material-symbols-outlined text-[18px] mr-2" data-icon="person_add">person_add</span>
                        Assign
                    </button>
<div className="relative group">
<button aria-label="More options" className="flex items-center justify-center h-10 w-10 rounded-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
{/* Dropdown (Hidden by default, hover for demo) */}
<div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-md shadow-lg border border-outline-variant py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<a className="block px-4 py-2 text-body-sm text-on-surface hover:bg-surface-container-low" href="#">Add Note</a>
<a className="block px-4 py-2 text-body-sm text-on-surface hover:bg-surface-container-low" href="#">Add Follow-up</a>
<div className="h-px bg-outline-variant my-1"></div>
<a className="block px-4 py-2 text-body-sm text-error hover:bg-error-container" href="#">Delete</a>
</div>
</div>
</div>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="max-w-container-max mx-auto px-6 lg:px-8 py-8">
{/* Lead Identity Header */}
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div className="flex items-center gap-6">
{/* Avatar */}

{/* Identity Details */}
<div>
<div className="flex items-center gap-3 mb-1">
<h1 className="text-headline-lg text-primary m-0">Rahul Sharma</h1>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0]">
                            Qualified
                        </span>
</div>
<div className="flex flex-wrap items-center gap-4 text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" data-icon="call">call</span>
<span className="">+91 98765 43210</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" data-icon="mail">mail</span>
<span className="">rahul.sharma@example.com</span>
</div>
</div>
</div>
</div>
</div>
{/* Two Column Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Main Column (Left) */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/* Quick Contact Actions */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<button className="flex items-center justify-center gap-2 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-primary font-medium">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
                        Call
                    </button>
<button className="flex items-center justify-center gap-2 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-primary font-medium">
<span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
                        Email
                    </button>
<button className="flex items-center justify-center gap-2 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-[#128C7E] border-[#25D366]/30 font-medium">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
</svg>
                        WhatsApp
                    </button>
</div>
{/* Lead Summary Card */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<h2 className="text-headline-sm text-primary mb-4">Lead Details</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<div>
<span className="block text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Source</span>
<span className="text-body-md text-on-surface font-medium">Website Contact Form</span>
</div>
<div>
<span className="block text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Created Date</span>
<span className="text-body-md text-on-surface font-medium">Oct 24, 2023</span>
</div>
<div>
<span className="block text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Assigned To</span>
<span className="text-body-md text-on-surface font-medium">John Smith</span>
</div>
<div>
<span className="block text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Last Contacted</span>
<span className="text-body-md text-on-surface font-medium">Oct 26, 2023</span>
</div>
<div className="md:col-span-2">
<span className="block text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Address</span>
<span className="text-body-md text-on-surface font-medium">Sector 45, Gurugram, Haryana, India</span>
</div>
</div>
</section>
{/* Notes Section */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-headline-sm text-primary m-0">Notes</h2>
<button className="flex items-center text-label-md text-on-primary bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[18px] mr-1" data-icon="add">add</span>
                            Add Note
                        </button>
</div>
<div className="space-y-4">
{/* Sample Note */}
<div className="p-4 rounded-lg bg-surface-container-low border border-surface-container-highest">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-label-sm">JS</div>
<span className="text-label-md text-on-surface">John Smith</span>
</div>
<span className="text-body-sm text-on-surface-variant">Oct 26, 11:45 AM</span>
</div>
<p className="text-body-md text-on-surface m-0 pl-8">Customer is interested in the premium plan and requested a product demo next week.</p>
</div>
</div>
</section>
{/* Follow-ups Section */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-headline-sm text-primary m-0">Follow-ups</h2>
<button className="flex items-center text-label-md text-primary border border-outline-variant hover:bg-surface-container-low px-3 py-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[18px] mr-1" data-icon="add">add</span>
                            Add Task
                        </button>
</div>
<div className="space-y-3">
{/* Upcoming Task */}
<div className="flex items-center justify-between p-4 rounded-lg border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#fffbeb] text-[#d97706] flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
</div>
<div>
<h4 className="text-label-md text-on-surface m-0">Phone Call</h4>
<span className="text-body-sm text-on-surface-variant">Today at 10:30 AM</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm bg-[#fef3c7] text-[#92400e] border border-[#fde68a]">
                                Upcoming
                            </span>
</div>
{/* Completed Task */}
<div className="flex items-center justify-between p-4 rounded-lg border border-surface-container-highest bg-surface opacity-75">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
</div>
<div>
<h4 className="text-label-md text-on-surface-variant line-through m-0">Initial Email Sent</h4>
<span className="text-body-sm text-on-surface-variant">Oct 24</span>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-[#059669]" data-icon="check_circle">check_circle</span>
</div>
</div>
</section>
</div>
{/* Sidebar Column (Right) */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/* Status Management Pipeline */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<h3 className="text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Pipeline Status</h3>
<div className="relative">
{/* Pipeline Line */}
<div className="absolute left-[15px] top-4 bottom-4 w-px bg-outline-variant z-0"></div>
<div className="space-y-6 relative z-10">
{/* Step 1: Completed */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center border-2 border-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
</div>
<span className="text-body-md text-on-surface font-medium">New</span>
</div>
{/* Step 2: Completed */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center border-2 border-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
</div>
<span className="text-body-md text-on-surface font-medium">Contacted</span>
</div>
{/* Step 3: Active */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center border-2 border-surface-container-lowest shadow-sm ring-2 ring-primary/20">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-body-md text-primary font-bold">Qualified</span>
</div>
{/* Step 4: Pending */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest border-2 border-outline-variant text-outline-variant flex items-center justify-center shadow-sm">
</div>
<span className="text-body-md text-on-surface-variant">Won</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant">
<button className="w-full py-2 rounded-md border border-error-container text-error hover:bg-error-container/50 transition-colors text-label-md">
                            Mark as Lost
                        </button>
</div>
</div>
{/* Assigned Agent */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<h3 className="text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Assigned Agent</h3>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-label-md font-bold">
                            JS
                        </div>
<div>
<div className="text-body-md text-primary font-medium">John Smith</div>
<div className="text-body-sm text-on-surface-variant">Sales Agent</div>
</div>
</div>
<button className="w-full py-2 rounded-md border border-outline-variant text-primary hover:bg-surface-container-low transition-colors text-label-md">
                        Change Agent
                    </button>
</div>
{/* Activity Timeline (Minimal) */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
<h3 className="text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Recent Activity</h3>
<div className="relative pl-4 border-l border-outline-variant space-y-6 pb-2">
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[21px] top-1 w-[10px] h-[10px] rounded-full bg-[#3b82f6] ring-4 ring-surface-container-lowest"></div>
<div className="text-body-sm text-on-surface-variant mb-0.5">Today, 09:15 AM</div>
<div className="text-body-md text-on-surface font-medium">Status changed to Qualified</div>
<div className="text-body-sm text-on-surface-variant">by John Smith</div>
</div>
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[21px] top-1 w-[10px] h-[10px] rounded-full bg-surface-tint ring-4 ring-surface-container-lowest"></div>
<div className="text-body-sm text-on-surface-variant mb-0.5">Oct 25, 14:30 PM</div>
<div className="text-body-md text-on-surface font-medium">Note added</div>
<div className="text-body-sm text-on-surface-variant">by John Smith</div>
</div>
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[21px] top-1 w-[10px] h-[10px] rounded-full bg-outline ring-4 ring-surface-container-lowest"></div>
<div className="text-body-sm text-on-surface-variant mb-0.5">Oct 24, 10:00 AM</div>
<div className="text-body-md text-on-surface font-medium">Lead created</div>
<div className="text-body-sm text-on-surface-variant">via Website Form</div>
</div>
</div>
<button className="mt-4 w-full text-center text-label-sm text-primary hover:underline">
                        View Full History
                    </button>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
