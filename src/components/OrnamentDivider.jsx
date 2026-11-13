import React from 'react';

export default function OrnamentDivider({ className = "my-4", color = "#B08D57" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-8 md:w-12 bg-[#B08D57]/40" />
      <svg
        width="22"
        height="18"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        {/* Subtle leaf/floral crest inspired by luxury editorial monogram ornaments */}
        <path
          d="M12 2C12 2 10.2 6.5 7 8.5C10.5 8.5 12 12 12 12C12 12 13.5 8.5 17 8.5C13.8 6.5 12 2 12 2Z"
          fill={color}
          fillOpacity="0.8"
        />
        <circle cx="12" cy="16" r="1.5" fill={color} fillOpacity="0.7" />
        <path
          d="M4 11C6.5 10 9 10.5 10.5 12"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M20 11C17.5 10 15 10.5 13.5 12"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </svg>
      <span className="h-[1px] w-8 md:w-12 bg-[#B08D57]/40" />
    </div>
  );
}

