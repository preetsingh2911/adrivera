'use client';
import React from 'react';

export interface ButtonActiveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export function ButtonActive({
  children = 'Contact me',
  className = '',
  href,
  ...props
}: ButtonActiveProps) {
  const activeClass =
    'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-linear-to-r bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-medium text-foreground dark:text-white transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px] cursor-pointer';

  if (href) {
    return (
      <a href={href} className={`${activeClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={`${activeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonActive;
