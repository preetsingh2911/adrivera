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
  tagline: 'Business achha hai. Ab duniya ko pata bhi chalne do.',
  whatsappNumber: '918815512459',
  navLinks: [
    { label: 'Home', href: '/#home' },
    { label: 'Kyun Zaroori Hai', href: '/#what-we-do' },
    { label: 'Process', href: '/#our-approach' },
    { label: 'Plans Dekhein', href: '/#pricing' },
    { label: 'FAQs', href: '/#faqs' },
  ],
  footerLinks: [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/#home' },
        { label: 'Kyun Zaroori Hai', href: '/#what-we-do' },
        { label: 'Process', href: '/#our-approach' },
        { label: 'Plans Dekhein', href: '/#pricing' },
        { label: 'FAQs', href: '/#faqs' },
      ],
    },
    {
      title: 'Policies & Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cancellation & Renewal', href: '/cancellation-and-renewal' },
        { label: 'Advertising Disclaimers', href: '/advertising-disclaimer' },
      ],
    },
  ],
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
      'ADrivera ek independent performance advertising agency hai aur Meta Platforms, Inc. se officially affiliated ya endorsed nahi hai. Facebook aur Instagram Meta Platforms, Inc. ke trademarks hain.',
    resultsGuarantee:
      'Hum fixed leads, guaranteed sales ya unrealistic return on ad spend ka fake vaada nahi karte. Campaign performance market demand, offer quality, pricing aur customer follow-up par depend karti hai.',
    taxNotice:
      'Displayed package prices mein Meta advertising budget aur ADrivera service fee included hai. Koi hidden agency charge nahi hai.',
  },
};

export const siteConfig = siteContent;

/**
 * Enforces the strict claims policy: only stats explicitly verified by founders can render.
 */
export function getRenderableStats(stats: VerifiedStat[]): VerifiedStat[] {
  return stats.filter((stat) => stat.verified === true);
}
