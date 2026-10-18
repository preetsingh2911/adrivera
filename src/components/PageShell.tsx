import React from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { StickyMobileCta } from './StickyMobileCta';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink selection:bg-tint selection:text-ink pb-16 md:pb-0">
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
