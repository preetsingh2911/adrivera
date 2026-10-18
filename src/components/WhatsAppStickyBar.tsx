'use client';

import React from 'react';
import { siteConfig } from '@/content/site';

export function WhatsAppStickyBar() {
  const defaultMessage = encodeURIComponent(
    'Namaste ADrivera team, main apne business ke liye Meta advertising (Facebook & Instagram) ke baare mein baat karna chahta hoon.'
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${defaultMessage}`;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="flex items-center justify-between min-h-[48px] px-5 py-3 bg-dark text-white border border-border-dark rounded-[2px] active:bg-dark/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-positive inline-block rounded-none" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            WhatsApp Par Baat Karein
          </span>
        </div>
        <span className="text-xs font-mono text-white/70">
          Direct Chat
        </span>
      </a>
    </div>
  );
}
