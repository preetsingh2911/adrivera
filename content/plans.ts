export interface PlanPricing {
  id: string;
  name: string;
  subtitle: string;
  purposeTagline?: string;
  totalPrice: number;
  priceDisplay: string;
  billingPeriod: string;
  adSpend: number | null;
  serviceFee: number | null;
  targetPersona: string;
  summary: string;
  features: string[];
  limits: string[];
  limitations?: string[];
  ctaLabel: string;
  ctaType: 'whatsapp' | 'custom';
  ctaAction?: 'whatsapp' | 'custom';
  hindiStarterMessage?: string;
  isPopular?: boolean;
}

export interface ComparisonFeature {
  category: string;
  name: string;
  starter: string;
  growth: string;
  premium: string;
  custom: string;
}

export const plansContent: PlanPricing[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Pehli baar try kar rahe hain? Yahin se shuru kijiye.',
    purposeTagline: 'Sirf ₹5,000 per month mein Meta Ads ki shuruaat kijiye.',
    totalPrice: 5000,
    priceDisplay: '₹5,000',
    billingPeriod: '/month',
    adSpend: 3000,
    serviceFee: 2000,
    targetPersona:
      'Naye business owners jo pehli baar Meta Ads ko bina heavy budget risk ke test karna chahte hain.',
    summary:
      'Sirf ₹5,000 per month mein Meta Ads ki shuruaat kijiye. Campaign ke results samjhiye, service ka experience lijiye aur phir decide kijiye ki aage kya karna hai.',
    features: [
      '₹3,000 Meta advertising spend included',
      '₹2,000 ADrivera service fee included',
      'Basic campaign setup aur objective configuration',
      'Bhopal aur local area targeted audience',
      '1 primary ad creative (image/banner)',
      'WhatsApp click-to-chat integration',
      'Routine campaign health monitoring',
      'Monthly performance report',
      'Remote support via WhatsApp aur calls',
    ],
    limits: [
      'In-person meetings included nahi hain',
      'Limited creative scope (single primary creative)',
      'Video production included nahi hai',
    ],
    limitations: [
      'In-person meetings included nahi hain',
      'Limited creative scope (single primary creative)',
      'Video production included nahi hai',
    ],
    ctaLabel: '₹5,000 Se Shuru Karein',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    hindiStarterMessage:
      'Aapko pehle din se bada budget lagane ki zaroorat nahi. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye.',
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Ab sirf ads nahi, unhe behtar banane par bhi focus kijiye.',
    purposeTagline: 'Creative testing, AI-assisted video ads aur weekly optimization.',
    totalPrice: 8000,
    priceDisplay: '₹8,000',
    billingPeriod: '/month',
    adSpend: 4500,
    serviceFee: 3500,
    targetPersona:
      'Businesses with existing demand seeking creative variety, video ads, and regular optimization.',
    summary:
      'Jab aap creative testing, AI-assisted video ads aur regular campaign optimization chahte hain, tab Growth plan aapke liye hai.',
    features: [
      '₹4,500 Meta advertising spend included',
      '₹3,500 ADrivera service fee included',
      'Starter plan ke saare features',
      'AI-assisted video ads creation (Reels format)',
      'Monthly 2 se 3 creative variations aur testing',
      'Broader audience aur interest targeting',
      'Weekly campaign reviews aur optimization',
      'Detailed monthly performance report',
      '1 monthly in-person meeting (Bhopal mein)',
    ],
    limits: [
      'Creative variations monthly quota ke hisaab se (2-3)',
      'Additional video production alag se quote hota hai',
    ],
    limitations: [
      'Creative variations monthly quota ke hisaab se (2-3)',
      'Additional video production alag se quote hota hai',
    ],
    ctaLabel: 'Growth Plan Chunein',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Apne business ke liye zyada focused advertising support.',
    purposeTagline: 'Focused growth aur scaling ke liye involved advertising partnership.',
    totalPrice: 16000,
    priceDisplay: '₹16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Established businesses seeking deeper strategic alignment, retargeting, and frequent consultation.',
    summary:
      'Campaign performance, creative testing, audience response aur business goals ko dhyan mein rakhkar ek zyada involved advertising partnership.',
    features: [
      '₹16,000 total monthly package price',
      'Ad spend aur service allocation purchase se pehle confirm',
      'Growth plan ke saare features',
      'Advanced campaign planning aur scaling',
      'Retargeting setup jahan audience data exist karta hai',
      'Regular in-person meetings as required by scope',
      'Priority support aur continuous optimization',
      'Deeper campaign-performance analysis aur recommendations',
    ],
    limits: [
      'Exact service-fee aur advertising-spend allocation purchase se pehle confirm kiya jata hai',
    ],
    limitations: [
      'Exact service-fee aur advertising-spend allocation purchase se pehle confirm kiya jata hai',
    ],
    ctaLabel: 'Premium Ke Liye Baat Karein',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Aapka business alag hai. Aapka advertising plan bhi alag ho sakta hai.',
    totalPrice: 16000,
    priceDisplay: 'Starting at ₹16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Businesses with specialized objectives, larger ad budgets, or requirements beyond standard plans.',
    summary:
      'Agar aapko larger budget, multiple campaigns ya customized advertising support chahiye, toh apni requirements share kijiye. Hum aapke goals aur scope ke hisaab se plan discuss karenge.',
    features: [
      'Custom budget allocation onboarding se pehle confirm',
      'Multiple campaigns ya multiple business locations',
      'Dedicated creative development pipeline',
      'Advanced audience aur retargeting funnel architecture',
      'Customized reporting cadence aur direct consultation',
      'Intensive campaign optimization aur communication',
    ],
    limits: [
      'Scope, deliverables aur pricing contract se pehle strictly mutually agreed',
      'No unlimited work promises',
    ],
    limitations: [
      'Scope, deliverables aur pricing contract se pehle strictly mutually agreed',
      'No unlimited work promises',
    ],
    ctaLabel: 'Custom Plan Banwayein',
    ctaType: 'custom',
    ctaAction: 'custom',
    isPopular: false,
  },
];

export const pricingPlans = plansContent;

export const pricingComparisonFeatures: ComparisonFeature[] = [
  {
    category: 'Financials',
    name: 'Total Monthly Package',
    starter: '₹5,000',
    growth: '₹8,000',
    premium: '₹16,000',
    custom: 'Starting at ₹16,000',
  },
  {
    category: 'Financials',
    name: 'Meta Advertising Allocation',
    starter: '₹3,000',
    growth: '₹4,500',
    premium: 'Confirmed before purchase',
    custom: 'Confirmed before purchase',
  },
  {
    category: 'Financials',
    name: 'ADrivera Service Fee',
    starter: '₹2,000',
    growth: '₹3,500',
    premium: 'Confirmed before purchase',
    custom: 'Confirmed before purchase',
  },
  {
    category: 'Creative Scope',
    name: 'Ad Creatives Included',
    starter: '1 primary static / supplied ad',
    growth: 'Multiple creatives (2-3 variations)',
    premium: 'Extensive creative testing',
    custom: 'Custom creative pipeline',
  },
  {
    category: 'Creative Scope',
    name: 'Video Production',
    starter: 'Not included',
    growth: 'AI-assisted video ads included',
    premium: 'AI-assisted video + motion assets',
    custom: 'Custom production scope',
  },
  {
    category: 'Optimization',
    name: 'Review Frequency',
    starter: 'Routine monitoring',
    growth: 'Weekly optimization reviews',
    premium: 'Continuous optimization',
    custom: 'Intensive bespoke schedule',
  },
  {
    category: 'Optimization',
    name: 'Audience & Retargeting',
    starter: 'Basic demographic & geo',
    growth: 'Expanded audience testing',
    premium: 'Retargeting where data exists',
    custom: 'Multi-stage funnel architecture',
  },
  {
    category: 'Reporting & Support',
    name: 'Performance Reports',
    starter: 'Monthly report',
    growth: 'Monthly detailed report',
    premium: 'Deeper performance analysis',
    custom: 'Custom executive reports',
  },
  {
    category: 'Reporting & Support',
    name: 'In-Person Meetings (Bhopal)',
    starter: 'No in-person meetings',
    growth: '1 meeting per month',
    premium: 'Regular in-person meetings',
    custom: 'As agreed in scope',
  },
  {
    category: 'Reporting & Support',
    name: 'WhatsApp Lead Routing',
    starter: 'Supported & configured',
    growth: 'Supported & configured',
    premium: 'Supported & configured',
    custom: 'Supported & configured',
  },
];

export const pricingTransparencyRules: string[] = [
  'Displayed monthly price hi total package price hai—koi hidden agency fee nahi.',
  'Package mein Meta ad spend aur ADrivera service fee dono clear included hain.',
  'Starter mein ₹3,000 ad spend aur ₹2,000 agency service fee allocated hain.',
  'Growth mein ₹4,500 ad spend aur ₹3,500 agency service fee allocated hain.',
  'Premium aur Custom plans ka exact allocation purchase se pehle confirm kiya jata hai.',
  'Actual reach, clicks aur enquiries business aur offer par depend karti hain—fake guaranteed sales claims nahi.',
  'Package limits aur deliverables pehle din se bilkul transparent hain.',
];

export const starterSectionData = {
  eyebrow: '09 / Entry Point',
  headline: 'Pehli baar try kar rahe hain? Yahin se shuru kijiye.',
  leadLine:
    'Aapko pehle din se bada budget lagane ki zaroorat nahi. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye.',
  paragraphs: [
    'Sirf ₹5,000 per month mein Meta Ads ki shuruaat kijiye. Campaign ke results samjhiye, service ka experience lijiye aur phir decide kijiye ki aage kya karna hai.',
    'Aapko pehle din se bada budget lagane ki zaroorat nahi. Is package mein ₹3,000 Meta advertising spend aur ₹2,000 ADrivera service included hai. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye.',
  ],
  hindiQuote:
    'Aapko pehle din se bada budget lagane ki zaroorat nahi. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye. Hum campaign professionally set up karenge, regular monitor karenge aur honest reporting share karenge.',
  hindiNote: 'Bhopal Business Note / Starter Entry',
  qualification:
    'Starter plan testing aur evaluation ke liye limited-scope entry-level package hai. Hum fake promises nahi karte—real work aur transparent performance data deliver karte hain.',
};

/**
 * Formats the ad spend and service split for transparent rendering.
 * Renders "Confirmed before purchase" when the split is null.
 */
export function formatAllocation(amount: number | null): string {
  if (amount === null) {
    return 'Confirmed before purchase';
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}
