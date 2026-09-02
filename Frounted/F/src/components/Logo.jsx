import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        style={{ color: 'var(--color-primary, #1a237e)' }}
      >
        {/* Background rounded rect */}
        <rect width="40" height="40" rx="10" fill="currentColor" />
        {/* Bridge / Link icon */}
        <path
          d="M10 28V18C10 14.6863 12.6863 12 16 12H18V16H16C14.8954 16 14 16.8954 14 18V20H26V18C26 16.8954 25.1046 16 24 16H22V12H24C27.3137 12 30 14.6863 30 18V28H26V22H14V28H10Z"
          fill="white"
        />
        {/* Arrow up */}
        <path
          d="M20 10L16 14H24L20 10Z"
          fill="white"
          opacity="0.7"
        />
      </svg>
      <div>
        <h1 className="text-headline-md font-bold text-on-primary">
          LeadBridge
        </h1>
        <p className="font-body text-body-sm text-on-primary-container">
          Sales CRM
        </p>
      </div>
    </div>
  );
}
