'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/content/site';

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const enquiryEl = document.getElementById('enquiry');
    if (!enquiryEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when the enquiry section is intersecting the viewport
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(enquiryEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const whatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Namaste ADrivera team, main apne business ke liye Meta advertising (Facebook & Instagram) ke baare mein baat karna chahta hoon.'
  )}`;

  return (
    <aside
      aria-label="Mobile Contact Action"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border p-3 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      <div className="flex items-center gap-3">
        <a
          href={whatsAppUrl}
          className="flex-1 flex items-center justify-center gap-2 min-h-[48px] px-4 text-sm font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="w-2 h-2 bg-white inline-block flex-shrink-0" />
          <span>WhatsApp Par Baat Karein</span>
        </a>

        <a
          href="/#pricing"
          className="flex items-center justify-center min-h-[48px] px-4 text-xs font-mono font-bold uppercase tracking-wider text-ink border border-border bg-bg hover:bg-bg/80 active:bg-border/40 rounded-none transition-colors"
        >
          Plan Chunein
        </a>
      </div>
    </aside>
  );
}
