'use client';

import React from 'react';
import { siteContent } from '@/content/site';
import CardNav, { type CardNavItem } from './CardNav';
import { BrandLogo } from './BrandLogo';

export function SiteHeader() {
  const items: CardNavItem[] = [
    {
      label: 'Why Us',
      description: 'Bhopal businesses ke liye targeted Meta Ads execution.',
      links: [
        { label: 'Kyun Zaroori Hai', href: '/why-us' },
        { label: 'Kaam Ka Tareeka', href: '/how-we-work' },
        { label: 'Platforms Covered', href: '/#platforms' }
      ]
    },
    {
      label: 'Packages',
      description: 'Sirf ₹5,000/month se transparent Meta Ads plans.',
      links: [
        { label: 'Starter (₹5,000/mo)', href: '/#pricing' },
        { label: 'Growth (₹8,000/mo)', href: '/#pricing' },
        { label: 'Premium (₹16,000/mo)', href: '/#pricing' },
        { label: 'Custom (₹30,000+/mo)', href: '/#pricing' }
      ]
    },
    {
      label: 'Contact',
      description: 'Direct communication & fast onboarding on WhatsApp.',
      links: [
        {
          label: 'WhatsApp Chat',
          href: 'https://wa.me/918815512459?text=Namaste%20ADrivera%20team%2C%20main%20Meta%20Ads%20ke%20baare%20mein%20baat%20karna%20chahta%20hoon.'
        },
        { label: 'Online Enquiry', href: '/contact' },
        { label: 'About Agency', href: '/about' }
      ]
    }
  ];

  const logoNode = (
    <BrandLogo variant="horizontal" size="md" alt={siteContent.brandName} />
  );

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 w-full pointer-events-none">
      <div className="pointer-events-auto">
        <CardNav
          logo={logoNode}
          logoAlt={siteContent.brandName}
          logoHref="/"
          items={items}
          cta={{ label: 'Plans Dekhein', href: '/#pricing' }}
          cardEffect="rise"
          openOn="click"
          surface="glass"
          stagger={0.12}
          bounce={0.2}
          menuLabel
          speed={1}
          cardHeight={176}
          maxWidth={820}
          intro
        />
      </div>
    </header>
  );
}

export default SiteHeader;
