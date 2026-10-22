import React from 'react';

export interface MetaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function MetaIcon({
  size = 20,
  className = 'w-5 h-5',
  ...props
}: MetaIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        fill="#0668E1"
        d="M17.2 4C14.7 4 12.8 5.4 12 6.7 11.2 5.4 9.3 4 6.8 4 3 4 0 7.3 0 11.3s3 7.3 6.8 7.3c2.7 0 4.7-1.5 5.2-2.1.5.6 2.5 2.1 5.2 2.1 3.8 0 6.8-3.3 6.8-7.3S21 4 17.2 4zm0 11.8c-2.3 0-4.3-1.8-4.8-2.9-.1-.2-.3-.2-.4 0-.5 1.1-2.5 2.9-4.8 2.9-2.3 0-4.2-2-4.2-4.5s1.9-4.5 4.2-4.5c2.3 0 4.3 1.8 4.8 2.9.1.2.3.2.4 0 .5-1.1 2.5-2.9 4.8-2.9 2.3 0 4.2 2 4.2 4.5s-1.9 4.5-4.2 4.5z"
      />
    </svg>
  );
}

export default MetaIcon;
