'use client';

import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({
  children,
  className = '',
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add('js-ready');

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-revealed');
      return;
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => {
                el.classList.add('is-revealed');
              }, delayMs);
            } else {
              el.classList.add('is-revealed');
            }
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '150px',
      }
    );

    observer.observe(el);

    // Fallback timer ensures that full-page captures, print, or anchor navigation
    // never leave elements invisible
    const fallbackTimer = setTimeout(() => {
      el.classList.add('is-revealed');
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [delayMs]);

  return (
    <div ref={ref} className={`reveal-item ${className}`}>
      {children}
    </div>
  );
}
