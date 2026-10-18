import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
  hairlineBottom?: boolean;
  children: React.ReactNode;
}

export function Section({
  id,
  className = '',
  containerClassName = '',
  dark = false,
  hairlineBottom = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        dark ? 'bg-dark text-white' : 'bg-bg text-ink'
      } ${
        hairlineBottom
          ? dark
            ? 'border-b border-border-dark'
            : 'border-b border-border'
          : ''
      } ${className}`}
      {...props}
    >
      <div className={`max-w-site mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
