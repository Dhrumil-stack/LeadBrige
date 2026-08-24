import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutConfirmation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <>
<div className="bg-background text-on-background h-screen w-screen overflow-hidden flex relative">
{/* Background Context (Profile Settings Screen Simulation) */}
<div className="absolute inset-0 z-0 opacity-40 grayscale blur-sm pointer-events-none flex">
{/* SideNav Mock */}
<div className="w-64 border-r border-outline-variant bg-primary-container h-full flex flex-col py-6">
<div className="px-6 mb-8">
<div className="text-headline-md font-bold text-on-primary tracking-tight">LeadBridge</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center gap-3 px-4 py-2 text-on-primary-container"><span className="material-symbols-outlined">dashboard</span>Dashboard</div>
<div className="flex items-center gap-3 px-4 py-2 text-on-primary-container"><span className="material-symbols-outlined">person_search</span>Leads</div>
<div className="flex items-center gap-3 px-4 py-2 border-l-4 border-primary bg-on-primary-container/10 text-on-primary font-semibold"><span className="material-symbols-outlined"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>settings</span>Settings</div>
</div>
</div>
{/* Main Content Area Mock */}
<div className="flex-1 flex flex-col">
{/* TopNav Mock */}
<div className="h-16 border-b border-outline-variant bg-surface-container-lowest shadow-sm flex justify-between items-center px-6">
<div className="text-headline-sm font-bold text-on-surface">Settings</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined">notifications</span>
<div className="w-8 h-8 rounded-full bg-surface-variant"></div>
</div>
</div>
{/* Page Content Mock */}
<div className="p-8 max-w-container-max mx-auto w-full">
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
<div className="h-8 bg-surface-variant rounded w-1/4 mb-6"></div>
<div className="space-y-4">
<div className="h-10 bg-surface-variant rounded w-full"></div>
<div className="h-10 bg-surface-variant rounded w-full"></div>
<div className="h-10 bg-surface-variant rounded w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
{/* Overlay / Backdrop */}
<div aria-labelledby="modal-title" aria-modal="true" className="absolute inset-0 z-50 bg-on-surface/40 backdrop-blur-[2px] flex items-center justify-center p-4" role="dialog">
{/* Modal Container */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-outline-variant w-full max-w-md overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col">
{/* Modal Header */}
<div className="px-6 pt-6 pb-4 flex items-start gap-4">
{/* Icon Container (Danger context) */}
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined text-[28px]"style={{fontVariationSettings: '"FILL" 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24'}}>logout</span>
</div>
{/* Title & Body */}
<div className="mt-1">
<h2 className="text-headline-sm font-semibold text-on-surface mb-2" id="modal-title">Log out?</h2>
<p className="text-body-sm text-on-surface-variant">Are you sure you want to log out of your LeadBridge account?</p>
</div>
</div>
{/* Modal Footer / Actions */}
<div className="px-6 py-4 bg-surface-bright flex items-center justify-end gap-3 rounded-b-xl border-t border-outline-variant/30 mt-2">
<button onClick={() => navigate(-1)} className="px-4 py-2 text-label-md font-medium rounded text-on-surface-variant bg-transparent border border-outline-variant hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20" type="button">
                    Cancel
                </button>
<button onClick={handleLogout} className="px-4 py-2 text-label-md font-medium rounded text-on-error bg-error hover:bg-error/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-error/20 flex items-center gap-2" type="button">
                    Log Out
                </button>
</div>
</div>
</div>
</div>
    </>
  );
}
