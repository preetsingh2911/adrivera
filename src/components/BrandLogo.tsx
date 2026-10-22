import React from 'react';

export interface BrandLogoProps {
  /**
   * 'horizontal': Emblem + wordmark side-by-side (recommended for navbar/headers)
   * 'emblem': Emblem only (compact mark)
   * 'stacked': Emblem on top + wordmark + tagline (great for footers and modals)
   */
  variant?: 'horizontal' | 'emblem' | 'stacked';
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

const SIZES = {
  horizontal: {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-8 sm:h-9',
    xl: 'h-10 sm:h-12',
  },
  emblem: {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10',
    xl: 'h-12 sm:h-14',
  },
  stacked: {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24',
  },
};

export function BrandLogo({
  variant = 'horizontal',
  size = 'md',
  className = '',
  alt = 'ADrivera',
}: BrandLogoProps) {
  const sizeClass = SIZES[variant][size] || SIZES.horizontal.md;

  let lightSrc = '/brand/logo-horizontal-light.png';
  let darkSrc = '/brand/logo-horizontal-dark.png';

  if (variant === 'emblem') {
    lightSrc = '/brand/logo-emblem-light.png';
    darkSrc = '/brand/logo-emblem-dark.png';
  } else if (variant === 'stacked') {
    lightSrc = '/brand/logo-stacked-light.png';
    darkSrc = '/brand/logo-stacked-dark.png';
  }

  return (
    <div
      className={`relative inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      {/* Light Mode Logo */}
      <img
        src={lightSrc}
        alt={alt}
        className={`${sizeClass} w-auto object-contain dark:hidden`}
        draggable={false}
      />
      {/* Dark Mode Logo */}
      <img
        src={darkSrc}
        alt={alt}
        className={`${sizeClass} w-auto object-contain hidden dark:block`}
        draggable={false}
      />
    </div>
  );
}

export default BrandLogo;
