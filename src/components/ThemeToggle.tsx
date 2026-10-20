'use client';

import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'pill' | 'segmented';
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({
  className = '',
  variant = 'icon',
  size = 'md',
}: ThemeToggleProps) {
  const { theme, resolvedTheme, toggleTheme, setTheme, isMounted } = useTheme();

  // During SSR or before mounting, render a placeholder of matching size to prevent layout shift
  if (!isMounted) {
    return (
      <div
        className={`inline-flex items-center justify-center opacity-0 pointer-events-none ${
          size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'
        } ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-md border border-border bg-bg/80 backdrop-blur-sm gap-1 ${className}`}
        role="group"
        aria-label="Theme selection"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            theme === 'light'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={theme === 'light'}
          title="Force light theme"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={theme === 'dark'}
          title="Force dark theme"
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded transition-all duration-200 ${
            theme === 'system'
              ? 'bg-card text-ink shadow-sm border border-border font-semibold'
              : 'text-muted hover:text-ink hover:bg-tint/40'
          }`}
          aria-pressed={theme === 'system'}
          title="Follow operating system preference"
        >
          <Monitor className="w-3.5 h-3.5 text-muted" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-tint/50 text-ink text-xs font-mono font-medium transition-all duration-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${className}`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={`Current: ${isDark ? 'Dark' : 'Light'} mode (${theme === 'system' ? 'Auto' : 'Manual'}). Click to toggle.`}
      >
        <span className="relative flex items-center justify-center w-4 h-4">
          <Sun
            className={`w-3.5 h-3.5 text-amber-500 absolute transition-all duration-300 transform ${
              isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <Moon
            className={`w-3.5 h-3.5 text-indigo-400 absolute transition-all duration-300 transform ${
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
            }`}
          />
        </span>
        <span className="capitalize">{isDark ? 'Dark mode' : 'Light mode'}</span>
      </button>
    );
  }

  // Default 'icon' button variant
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-md',
    md: 'w-9 h-9 sm:w-10 sm:h-10 rounded-lg',
    lg: 'w-11 h-11 rounded-lg',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4 sm:w-[18px] sm:h-[18px]',
    lg: 'w-5 h-5',
  }[size];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center cursor-pointer border border-border/80 bg-card/80 hover:bg-tint/60 text-ink transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent backdrop-blur-md select-none ${sizeClasses} ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Animated icon morph */}
      <span className="relative flex items-center justify-center w-full h-full pointer-events-none">
        <Sun
          className={`${iconSizes} text-amber-500 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] absolute ${
            isDark
              ? 'scale-0 -rotate-90 opacity-0'
              : 'scale-100 rotate-0 opacity-100 group-hover:rotate-45'
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`${iconSizes} text-sky-400 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] absolute ${
            isDark
              ? 'scale-100 rotate-0 opacity-100 group-hover:-rotate-12'
              : 'scale-0 rotate-90 opacity-0'
          }`}
          aria-hidden="true"
        />
      </span>
      <span className="sr-only">
        {isDark ? 'Currently in dark mode. Click for light mode.' : 'Currently in light mode. Click for dark mode.'}
      </span>
    </button>
  );
}

export default ThemeToggle;
