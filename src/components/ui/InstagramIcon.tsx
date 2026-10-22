import React from 'react';

export interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  colored?: boolean;
}

export function InstagramIcon({
  size = 20,
  colored = true,
  className = 'w-5 h-5',
  ...props
}: InstagramIconProps) {
  const gradientId = React.useId();

  if (colored) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        {...props}
      >
        <defs>
          <radialGradient
            id={`${gradientId}-ig`}
            cx="20%"
            cy="110%"
            r="140%"
            fx="20%"
            fy="110%"
          >
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        {/* Background rounded squircle with gradient */}
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          rx="6"
          fill={`url(#${gradientId}-ig)`}
        />
        {/* White Camera glyph */}
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="4.2"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.7"
        />
        <circle cx="16.2" cy="7.8" r="0.9" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default InstagramIcon;
