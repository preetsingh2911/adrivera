import React from 'react';

export interface BrandLogoProps {
  /**
   * 'horizontal': Emblem icon + crisp typography (compact width matching previous logo)
   * 'image': Pure horizontal lockup graphic (constrained to compact width)
   * 'emblem': Emblem mark only
   * 'stacked': Vertical stacked logo (emblem on top, text below)
   */
  variant?: 'horizontal' | 'image' | 'emblem' | 'stacked';
  /**
   * Size presets
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Optional custom class
   */
  className?: string;
  /**
   * Accessible text
   */
  alt?: string;
}

export function BrandLogo({
  variant = 'horizontal',
  size = 'md',
  className = '',
  alt = 'ADrivera',
}: BrandLogoProps) {
  // Preset sizes for horizontal lockup (emblem + text)
  const horizontalConfig = {
    sm: {
      emblem: 'h-4 w-auto',
      text: 'text-sm sm:text-base',
      gap: 'gap-1.5',
    },
    md: {
      emblem: 'h-5 sm:h-5.5 w-auto',
      text: 'text-base sm:text-lg',
      gap: 'gap-2',
    },
    lg: {
      emblem: 'h-6 sm:h-6.5 w-auto',
      text: 'text-lg sm:text-xl',
      gap: 'gap-2',
    },
    xl: {
      emblem: 'h-8 sm:h-9 w-auto',
      text: 'text-2xl sm:text-3xl',
      gap: 'gap-2.5',
    },
  }[size] || {
    emblem: 'h-5 sm:h-5.5 w-auto',
    text: 'text-base sm:text-lg',
    gap: 'gap-2',
  };

  // Image-only variant (pure graphic, with tight max-width constraint)
  if (variant === 'image') {
    const imgSize = {
      sm: 'h-5 max-w-[95px]',
      md: 'h-6 max-w-[115px]',
      lg: 'h-7 max-w-[135px]',
      xl: 'h-9 max-w-[170px]',
    }[size] || 'h-6 max-w-[115px]';

    return (
      <div
        className={`relative inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      >
        <img
          src="/brand/logo-horizontal-light.png"
          alt={alt}
          className={`${imgSize} w-auto object-contain dark:hidden shrink-0`}
          draggable={false}
        />
        <img
          src="/brand/logo-horizontal-dark.png"
          alt={alt}
          className={`${imgSize} w-auto object-contain hidden dark:block shrink-0`}
          draggable={false}
        />
      </div>
    );
  }

  // Emblem-only variant
  if (variant === 'emblem') {
    const embSize = {
      sm: 'h-5',
      md: 'h-6 sm:h-7',
      lg: 'h-8 sm:h-9',
      xl: 'h-11 sm:h-12',
    }[size] || 'h-6 sm:h-7';

    return (
      <div
        className={`relative inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      >
        <img
          src="/brand/logo-emblem-light.png"
          alt={alt}
          className={`${embSize} w-auto object-contain dark:hidden shrink-0`}
          draggable={false}
        />
        <img
          src="/brand/logo-emblem-dark.png"
          alt={alt}
          className={`${embSize} w-auto object-contain hidden dark:block shrink-0`}
          draggable={false}
        />
      </div>
    );
  }

  // Stacked variant
  if (variant === 'stacked') {
    const stkSize = {
      sm: 'h-10 max-w-[120px]',
      md: 'h-14 max-w-[160px]',
      lg: 'h-18 max-w-[200px]',
      xl: 'h-24 max-w-[260px]',
    }[size] || 'h-14 max-w-[160px]';

    return (
      <div
        className={`relative inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      >
        <img
          src="/brand/logo-stacked-light.png"
          alt={alt}
          className={`${stkSize} w-auto object-contain dark:hidden`}
          draggable={false}
        />
        <img
          src="/brand/logo-stacked-dark.png"
          alt={alt}
          className={`${stkSize} w-auto object-contain hidden dark:block`}
          draggable={false}
        />
      </div>
    );
  }

  // Default: 'horizontal' (Official emblem + crisp brand typography)
  // Perfectly matches previous logo width (~100px - 115px) and aligns cleanly with navbar height
  return (
    <div
      className={`inline-flex items-center ${horizontalConfig.gap} select-none transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      <div className="relative inline-flex items-center justify-center shrink-0">
        <img
          src="/brand/logo-emblem-light.png"
          alt=""
          className={`${horizontalConfig.emblem} object-contain dark:hidden shrink-0`}
          draggable={false}
        />
        <img
          src="/brand/logo-emblem-dark.png"
          alt=""
          className={`${horizontalConfig.emblem} object-contain hidden dark:block shrink-0`}
          draggable={false}
        />
      </div>
      <span
        className={`font-heading font-extrabold ${horizontalConfig.text} tracking-tight leading-none text-ink flex items-baseline`}
      >
        <span className="text-[#0066FF] dark:text-[#388BFD]">AD</span>
        <span className="text-ink">rivera</span>
      </span>
    </div>
  );
}

export default BrandLogo;
