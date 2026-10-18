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
    subtitle: 'Accessible entry point for testing paid Meta Ads',
    purposeTagline: 'Pehli baar ads chala rahe ho? Toh ₹5,000 per month se shuru karke dekho.',
    totalPrice: 5000,
    priceDisplay: '₹5,000',
    billingPeriod: '/month',
    adSpend: 3000,
    serviceFee: 2000,
    targetPersona:
      'Small business owners trying Meta advertising for the first time without risking a heavy budget.',
    summary:
      'New to Meta Ads? Start with ₹5,000 per month. Test advertising for your business, understand how your campaign performs, and decide whether you want to continue or scale. Your package includes ₹3,000 in advertising spend and our basic campaign management service.',
    features: [
      '₹3,000 allocated to Meta advertising',
      '₹2,000 allocated to ADrivera service',
      'Basic campaign setup and objective configuration',
      'Audience and geographic targeting in Bhopal',
      'One primary ad creative or customer-supplied creative',
      'WhatsApp click-to-chat integration where relevant',
      'Routine campaign health monitoring',
      'Monthly performance report',
      'Remote support via WhatsApp, calls, or online meetings',
    ],
    limits: [
      'No in-person meetings included',
      'Limited creative scope (no continuous replacement)',
      'No video production included',
    ],
    limitations: [
      'No in-person meetings included',
      'Limited creative scope (no continuous replacement)',
      'No video production included',
    ],
    ctaLabel: 'Start with ₹5,000',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    hindiStarterMessage:
      'अगर आप पहली बार Meta Ads ट्राय करना चाहते हैं, तो ₹5,000 वाले प्लान से शुरुआत कीजिए। अपने बिज़नेस के लिए इसे आज़माइए, कैंपेन के नतीजे समझिए और फिर तय कीजिए कि आगे कितना निवेश करना है।',
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'For businesses ready for creative testing and weekly optimization',
    purposeTagline: 'Business achha chal raha hai? Ab usse aur logon tak pahunchao.',
    totalPrice: 8000,
    priceDisplay: '₹8,000',
    billingPeriod: '/month',
    adSpend: 4500,
    serviceFee: 3500,
    targetPersona:
      'Businesses with existing demand seeking creative variety, video ads, and regular optimization.',
    summary:
      'Ready to go beyond a basic campaign? Growth adds creative testing, AI-assisted video production, and more frequent optimization to help you learn which advertising approaches work best for your business.',
    features: [
      '₹4,500 allocated to Meta advertising',
      '₹3,500 allocated to ADrivera service',
      'Everything included in Starter',
      'AI-assisted video ad creation using suitable tools',
      'Defined allowance of 2 to 3 creative variations/replacements per month',
      'More extensive audience testing',
      'Weekly optimization reviews and adjustments',
      'Comprehensive monthly performance report',
      'One in-person meeting per month in Bhopal',
    ],
    limits: [
      'Creative variations subject to defined monthly quota (approx. 2-3)',
      'Additional video production quoted separately',
    ],
    limitations: [
      'Creative variations subject to defined monthly quota (approx. 2-3)',
      'Additional video production quoted separately',
    ],
    ctaLabel: 'Choose Growth',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Intensive campaign management and close collaborative partnership',
    purposeTagline: 'Aapka business grow kar raha hai. Ab apni pehchaan bhi grow karo.',
    totalPrice: 16000,
    priceDisplay: '₹16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Established businesses seeking deeper strategic alignment, retargeting, and frequent consultation.',
    summary:
      'For businesses ready for a more involved advertising partnership. We work more closely with you, study campaign performance and customer responses, and use those insights to guide future creative, targeting, and campaign decisions.',
    features: [
      '₹16,000 total package price',
      'Ad spend and service allocation confirmed before purchase',
      'Everything included in Growth',
      'Advanced campaign planning and scaling',
      'Retargeting setup where suitable audiences and tracking exist',
      'Regular in-person meetings as required by scope',
      'Priority support and more frequent communication',
      'Deeper campaign-performance analysis and ongoing recommendations',
    ],
    limits: [
      'Exact service-fee and advertising-spend allocation is not yet finalized; confirmed before purchase',
    ],
    limitations: [
      'Exact service-fee and advertising-spend allocation is not yet finalized; confirmed before purchase',
    ],
    ctaLabel: 'Discuss Premium',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Tailored campaigns for larger budgets, multiple locations, or custom needs',
    totalPrice: 16000,
    priceDisplay: 'Starting at ₹16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona:
      'Businesses with specialized objectives, larger ad budgets, or requirements beyond standard plans.',
    summary:
      'For businesses with specialized objectives, larger advertising budgets, or requirements beyond the standard plans. The final price and allocation depend on campaign complexity, ad spend, creative requirements, reporting, and communication.',
    features: [
      'Custom budget allocation confirmed before onboarding',
      'Multiple campaigns or business locations',
      'Dedicated creative development pipeline',
      'Advanced audience and retargeting strategies',
      'Customized reporting cadence and consultation',
      'Intensive communication and optimization',
    ],
    limits: [
      'Scope, deliverables, and pricing strictly agreed before onboarding',
      'No unlimited work promises',
    ],
    limitations: [
      'Scope, deliverables, and pricing strictly agreed before onboarding',
      'No unlimited work promises',
    ],
    ctaLabel: 'Request a Custom Plan',
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
  'The displayed monthly price is the total package price.',
  'A defined portion is allocated to Meta advertising.',
  'The remaining portion covers ADrivera’s service.',
  'No separate agency management fee is added on top of the advertised package price.',
  'Actual reach, clicks, enquiries, and conversions are not guaranteed.',
  'Package limits and renewal terms will be disclosed clearly before launch.',
  'The allocation for Premium and Custom will be confirmed individually before purchase.',
];

export const starterSectionData = {
  eyebrow: '09 / Entry Point',
  headline: "You Don't Have to Commit to a Big Budget to Get Started.",
  leadLine:
    'Ek baar try karne mein kya jaata hai? ₹5,000 se shuru karo, results dekho, phir aage decide karo.',
  paragraphs: [
    "We understand that not every business is ready to invest heavily in advertising. That's why our Starter package combines a ₹3,000 advertising budget with basic campaign management for a total of ₹5,000 per month.",
    'Start with a manageable package, evaluate the service and campaign performance, and decide what makes sense for your business next.',
  ],
  hindiQuote:
    'भरोसा बनाने के लिए शुरुआत छोटे कदम से कीजिए। अगर आप पहली बार विज्ञापन चला रहे हैं, तो ₹5,000 वाले प्लान से शुरुआत करें। हम कैंपेन को सही तरीके से सेटअप और मॉनिटर करेंगे, आपको वास्तविक रिपोर्ट देंगे, और फिर आप अपने अनुभव के आधार पर आगे का फैसला ले सकते हैं।',
  hindiNote: 'भोपाल व्यापार संदेश / Local Business Note',
  qualification:
    'The Starter plan does not guarantee positive commercial returns or that every customer should upgrade. We test deliberately and report honest performance data.',
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
