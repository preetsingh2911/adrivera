export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface VerifiedStat {
  value: string;
  definition: string;
  source: string;
  verified: boolean;
}

export interface SiteContent {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  navLinks: NavLink[];
  footerLinks: FooterLinkGroup[];
  verifiedStats: VerifiedStat[];
  location: string;
  contact: {
    whatsappNumberPlaceholder: string;
    whatsappNumberFormatted: string;
    whatsappDisplayPlaceholder: string;
    isWhatsappVerified: boolean;
    emailPlaceholder: string;
    officeLocation: string;
  };
  disclaimers: {
    metaNonAffiliation: string;
    resultsGuarantee: string;
    taxNotice: string;
  };
}

export const siteContent: SiteContent = {
  brandName: 'ADrivera',
  tagline: 'Good Business. Better Visibility. Stronger Growth.',
  whatsappNumber: '918815512459',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Our Approach', href: '#our-approach' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
  ],
  footerLinks: [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'What We Do', href: '#what-we-do' },
        { label: 'Our Approach', href: '#our-approach' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQs', href: '#faqs' },
      ],
    },
    {
      title: 'Policies & Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cancellation Terms', href: '#cancellation' },
        { label: 'Advertising Disclaimers', href: '#disclaimers' },
      ],
    },
  ],
  // Empty for now per brief claims policy. Each entry requires a value, definition, source, and verified flag.
  // Only entries with verified: true are permitted to render in the UI.
  verifiedStats: [],
  location: 'Bhopal, Madhya Pradesh, India',
  contact: {
    whatsappNumberPlaceholder: '918815512459',
    whatsappNumberFormatted: '+91 88155 12459',
    whatsappDisplayPlaceholder: '+91 88155 12459',
    isWhatsappVerified: true,
    emailPlaceholder: 'hello@adrivera.in',
    officeLocation: 'Bhopal, Madhya Pradesh, India',
  },
  disclaimers: {
    metaNonAffiliation:
      'ADrivera is an independent performance marketing agency and is not affiliated with, sponsored by, or endorsed by Meta Platforms, Inc. Facebook and Instagram are trademarks of Meta Platforms, Inc.',
    resultsGuarantee:
      'We do not guarantee a fixed number of leads, sales, revenue, or return on ad spend. Campaign performance is influenced by market demand, offer quality, pricing, and sales follow-up.',
    taxNotice:
      'Package prices include the stated Meta advertising budget and ADrivera service fee. Statutory taxes or GST disclosures will be confirmed prior to contract confirmation.',
  },
};

export const siteConfig = siteContent;

/**
 * Enforces the strict claims policy: only stats explicitly verified by founders can render.
 */
export function getRenderableStats(stats: VerifiedStat[]): VerifiedStat[] {
  return stats.filter((stat) => stat.verified === true);
}
