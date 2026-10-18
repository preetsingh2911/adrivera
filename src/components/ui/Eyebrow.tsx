import React from 'react';

interface EyebrowProps {
  number?: string;
  label?: string;
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function Eyebrow({
  number,
  label,
  children,
  dark = false,
  className = '',
}: EyebrowProps) {
  const content = children || (
    <>
      {number && <span className="font-mono">{number} / </span>}
      <span>{label}</span>
    </>
  );

  return (
    <div
      className={`text-xs font-semibold uppercase tracking-eyebrow mb-3 block ${
        dark ? 'text-white/70' : 'text-muted'
      } ${className}`}
    >
      {content}
    </div>
  );
}
