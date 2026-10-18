export interface PlanPricing {
  id: string;
  name: string;
  subtitle: string;
  purposeTagline?: string;
  highlights: string[];
  bestForLabel: string;
  bestForDescription: string;
  bestForExamples: string[];
  bestForMessage: string;
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
    subtitle: 'Pehli baar Meta Ads try kar rahe hain? Yahin se shuru kijiye.',
    purposeTagline: 'Sirf ₹5,000 per month mein Meta Ads ki shuruaat kijiye.',
    highlights: [
      'Basic campaign management',
      'Best for businesses trying online advertising for the first time',
      'Audience and location targeting',
    ],
    bestForLabel: 'Pehli Baar Try Karne Walon Ke Liye',
    bestForDescription:
      'Agar aap pehli baar Meta Ads try karna chahte hain, ya apne business ki online reach badhane ke liye chhoti shuruaat karna chahte hain, toh ye plan aapke liye hai.',
    bestForExamples: [
      'Chhoti local shops aur retailers',
      'First-time advertisers',
      'Small businesses with a limited starting budget',
      'Businesses reaching their local audience online',
    ],
    bestForMessage:
      'Bada budget lagane se pehle shuruaat kijiye, campaign ke results samjhiye aur phir aage ka decision lijiye.',
    totalPrice: 5000,
    priceDisplay: '₹5,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Naye business owners jo pehli baar Meta Ads ko bina heavy budget risk ke test karna chahte hain.',
    summary:
      'Sirf ₹5,000 per month mein Meta Ads ki shuruaat kijiye. Campaign ke results samjhiye, service ka experience lijiye aur phir decide kijiye ki aage kya karna hai.',
    features: [
      'Basic campaign setup.',
      'Audience and location targeting.',
      'One primary ad creative or one customer-supplied creative, according to the agreed scope.',
      'WhatsApp integration where relevant.',
      'Routine campaign monitoring.',
      'Monthly performance report.',
      'Support through calls, WhatsApp, or online meetings.',
      'No in-person meetings included.',
      'No repeated creative production or unlimited revisions.',
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
    subtitle: 'Ads ko test kijiye, creatives improve kijiye aur campaign performance par zyada focus kijiye.',
    purposeTagline: 'Creative testing, AI-assisted video ads aur weekly optimization.',
    highlights: [
      'AI-assisted video ad creation',
      'Regular campaign optimization',
      'More extensive audience testing',
    ],
    bestForLabel: 'Local Businesses Ready to Grow',
    bestForDescription:
      'Agar aapka business already chal raha hai aur aap zyada logon tak pahunchne, better creatives test karne aur regular campaign optimization par focus karna chahte hain, toh Growth plan choose karein.',
    bestForExamples: [
      'Gyms aur fitness studios',
      'Local shops, retailers, restaurants aur cafes',
      'Service businesses growing in their city',
      'Businesses ready for creative testing',
    ],
    bestForMessage:
      'Sirf ads chalane se aage badhiye, creative testing aur regular optimization ke saath apni advertising improve kijiye.',
    totalPrice: 8000,
    priceDisplay: '₹8,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Businesses with existing demand seeking creative variety, video ads, and regular optimization.',
    summary:
      'Jab aap creative testing, AI-assisted video ads aur regular campaign optimization chahte hain, tab Growth plan aapke liye hai.',
    features: [
      'Everything in Starter.',
      'AI-assisted video ad creation.',
      'A defined allowance of approximately two to three creative variations or replacements per month.',
      'More extensive audience testing.',
      'Weekly optimization reviews.',
      'Monthly performance reporting.',
      'One in-person meeting per month.',
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
    subtitle: 'Apne business ke liye more advanced advertising aur closer campaign management.',
    purposeTagline: 'Focused growth aur scaling ke liye involved advertising partnership.',
    highlights: [
      'Advanced campaign management',
      'More extensive optimization and creative testing',
      'Customized allocation between service and advertising budget',
    ],
    bestForLabel: 'Multi-City Growth',
    bestForDescription:
      'Agar aap apne business ko ek se zyada cities mein promote karna chahte hain aur zyada involved advertising management ki zaroorat hai, toh Premium plan aapke liye hai.',
    bestForExamples: [
      'Businesses expanding into multiple cities',
      'Established retail and multi-location businesses',
      'Businesses launching in new markets',
      'Brands seeking consistent presence across locations',
    ],
    bestForMessage:
      'Ek city tak limited mat rahiye. Naye markets mein introduce hone ke liye agreed scope aur budget ke hisaab se structured strategy par kaam kijiye.',
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
      'Advanced campaign planning and scaling.',
      'More extensive audience and creative testing.',
      'Retargeting where suitable audiences and tracking are available.',
      'Deeper campaign-performance analysis.',
      'More frequent communication and regular in-person meetings according to the agreed scope.',
      'Priority support.',
      'Ongoing optimization within the agreed service scope.',
      'Final advertising/service allocation to be confirmed before purchase.',
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
    subtitle: 'Aapke business, goals aur budget ke hisaab se customized advertising plan.',
    highlights: [
      'Flexible campaign strategy',
      'Customized budget allocation',
      'Tailored service scope',
    ],
    bestForLabel: 'Multi-State Visibility & Brand Building',
    bestForDescription:
      'Agar aapka business multiple states mein operate karta hai, naye markets mein expand kar raha hai, ya apni digital brand image consistently build karna chahta hai, toh Custom plan aapki requirements ke hisaab se design kiya jayega.',
    bestForExamples: [
      'Established businesses targeting multiple states',
      'High-scale businesses with larger advertising requirements',
      'Brands entering new geographic markets',
      'Businesses managing multiple locations or product lines',
    ],
    bestForMessage:
      'Sirf local visibility nahi, naye markets tak pahunchne aur consistent digital identity build karne ke liye customized strategy choose kijiye.',
    totalPrice: 30000,
    priceDisplay: '₹30,000+',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Businesses with specialized objectives, larger ad budgets, or requirements beyond standard plans.',
    summary:
      'Agar aapko larger budget, multiple campaigns ya customized advertising support chahiye, toh apni requirements share kijiye. Hum aapke goals aur scope ke hisaab se plan discuss karenge.',
    features: [
      'Customized advertising strategy.',
      'Flexible allocation between advertising spend and service.',
      'Potentially larger budgets and multiple campaigns.',
      'Customized creative production and reporting.',
      'Scope and pricing confirmed individually before onboarding.',
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
    custom: '₹30,000+',
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
  'Campaign scope, budget allocation aur service deliverables purchase se pehle clearly discuss kiye jate hain.',
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
    'Aapko pehle din se bada budget lagane ki zaroorat nahi. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye.',
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
