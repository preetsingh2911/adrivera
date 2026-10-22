'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'adrivera-theme';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const [isMounted, setIsMounted] = useState(false);
  const [, startTransition] = useTransition();

  // Apply theme to document
  const applyTheme = (targetResolved: ResolvedTheme) => {
    const root = document.documentElement;
    if (targetResolved === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }

    // Update meta color-scheme
    const meta = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
    if (meta) {
      meta.content = targetResolved;
    }
  };

  // Initialize on mount
  useEffect(() => {
    setIsMounted(true);
    let initialTheme: Theme = 'light';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        initialTheme = stored;
      }
    } catch {
      // Ignore localStorage errors
    }

    const initialResolved = initialTheme === 'system' ? getSystemTheme() : initialTheme;
    setThemeState(initialTheme);
    setResolvedTheme(initialResolved);
    applyTheme(initialResolved);

    // System preference change listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setThemeState((currentTheme) => {
        if (currentTheme === 'system') {
          const newResolved = e.matches ? 'dark' : 'light';
          setResolvedTheme(newResolved);
          applyTheme(newResolved);
        }
        return currentTheme;
      });
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    // Cross-tab storage sync
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const next = (e.newValue as Theme) || 'system';
        setThemeState(next);
        const resolved = next === 'system' ? getSystemTheme() : next;
        setResolvedTheme(resolved);
        applyTheme(resolved);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore localStorage errors
    }

    const nextResolved = nextTheme === 'system' ? getSystemTheme() : nextTheme;
    startTransition(() => {
      setResolvedTheme(nextResolved);
      applyTheme(nextResolved);
    });
  };

  const toggleTheme = () => {
    // If currently dark, switch to light; if light, switch to dark
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        isMounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
