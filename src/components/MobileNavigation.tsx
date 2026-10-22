'use client';

import React, { useEffect, useRef } from 'react';
import { NavLink } from '@/content/site';
import { Button } from './ui/Button';
import { BrandLogo } from './BrandLogo';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  brandName: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  links,
  brandName,
}: MobileNavigationProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus trap and Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap focus
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      id="mobile-navigation-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-bg flex flex-col justify-between p-6 sm:p-8"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between pb-6 border-b border-border">
        <BrandLogo variant="horizontal" size="md" alt={brandName} />

        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-12 h-12 flex items-center justify-center text-ink border border-border bg-transparent rounded-[2px] transition-colors hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {/* Thin 1.5px line close icon, no container */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Large Typography Links - Hairline Separated */}
      <nav className="flex flex-col justify-center flex-grow py-8 divide-y divide-border">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-4 text-2xl sm:text-3xl font-heading font-bold text-ink tracking-tight hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="pt-6 border-t border-border flex flex-col gap-3">
        <Button
          variant="primary"
          href="/pricing"
          fullWidth
          onClick={onClose}
        >
          Plans Dekhein
        </Button>
      </div>
    </div>
  );
}
