export interface PlanPricing {
  id: string;
  name: string;
  subtitle: string;
  totalPrice: number;
  priceDisplay: string;
  billingPeriod: string;
  adSpend: number | null;
  serviceFee: number | null;
  targetPersona?: string;
  summary?: string;
  features: string[];
  limits: string[];
  limitations?: string[];
  ctaLabel: string;
  ctaType?: 'whatsapp' | 'custom';
  ctaAction?: 'whatsapp' | 'custom';
  hindiStarterMessage?: string;
  isPopular?: boolean;
}

export const plansContent: PlanPricing[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Accessible entry point for testing paid Meta Ads',
    totalPrice: 5000,
    priceDisplay: 'INR 5,000',
    billingPeriod: '/month',
    adSpend: 3000,
    serviceFee: 2000,
    targetPersona: 'Small business owners trying Meta advertising for the first time without risking heavy budget.',
    summary:
      'New to Meta Ads? Start with INR 5,000 per month. Test advertising for your business, evaluate performance, and decide whether to continue or scale. Package includes INR 3,000 in advertising spend and our basic campaign management service.',
    features: [
      'INR 3,000 allocated Meta advertising spend',
      'INR 2,000 ADrivera campaign management fee',
      'Basic campaign setup and objective configuration',
      'Audience and geographic targeting in Bhopal',
      'One primary ad creative or customer-supplied creative',
      'WhatsApp click-to-chat integration',
      'Routine campaign health monitoring',
      'Monthly performance report',
      'Remote support via WhatsApp, calls, or online meetings',
    ],
    limits: [
      'No in-person meetings included',
      'Limited creative scope (no continuous creative replacement)',
      'No video production included in this package',
    ],
    limitations: [
      'No in-person meetings included',
      'Limited creative variations (no continuous creative replacement)',
      'No video production included in this package',
    ],
    ctaLabel: 'Start with INR 5,000',
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
    totalPrice: 8000,
    priceDisplay: 'INR 8,000',
    billingPeriod: '/month',
    adSpend: 4500,
    serviceFee: 3500,
    targetPersona: 'Businesses with established demand seeking higher engagement and systematic creative testing.',
    summary:
      'Ready to go beyond a basic campaign? Growth adds creative testing, AI-assisted video production, and more frequent optimization to help you learn which advertising approaches work best for your business.',
    features: [
      'INR 4,500 allocated Meta advertising spend',
      'INR 3,500 ADrivera campaign management fee',
      'Everything included in Starter',
      'AI-assisted video ad creation via production tools',
      'Defined allowance of 2 to 3 creative variations per month',
      'More extensive audience testing',
      'Weekly optimization reviews and adjustments',
      'Comprehensive monthly performance report',
      'One in-person meeting per month in Bhopal',
    ],
    limits: [
      'Creative variations subject to defined monthly quotas (2 to 3 variations/replacements)',
      'Additional video revisions outside scope quoted separately',
    ],
    limitations: [
      'Creative variations subject to agreed monthly quotas',
      'Additional video revisions outside scope quoted separately',
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
    totalPrice: 16000,
    priceDisplay: 'INR 16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona: 'Established local brands requiring strategic guidance, retargeting, and regular coordination.',
    summary:
      'For businesses ready for a more involved advertising partnership. We work closely with you, study campaign performance and customer responses, and use those insights to guide creative, targeting, and campaign decisions.',
    features: [
      'INR 16,000 total package (ad spend / service split confirmed before purchase)',
      'Everything included in Growth',
      'Advanced campaign architecture and budget scaling',
      'Audience retargeting setup where tracking allows',
      'Regular in-person strategy meetings in Bhopal',
      'Priority communication and fast turnaround',
      'Deep campaign-performance analysis and cohort breakdowns',
      'Continuous creative and copy testing',
    ],
    limits: [
      'Advertising spend and service fee allocation confirmed individually before contract',
    ],
    limitations: [
      'Ad spend and service allocation confirmed individually before contract',
    ],
    ctaLabel: 'Discuss Premium',
    ctaType: 'whatsapp',
    ctaAction: 'whatsapp',
    isPopular: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Tailored campaigns for larger budgets or multi-location operations',
    totalPrice: 16000,
    priceDisplay: 'Starting at INR 16,000',
    billingPeriod: '/month',
    adSpend: null,
    serviceFee: null,
    targetPersona: 'Enterprises, multi-outlet businesses, or firms requiring bespoke creative pipelines.',
    summary:
      'For businesses with specialized objectives, larger budgets, or requirements beyond standard plans. Final scope and allocation are agreed individually based on ad spend, creative requirements, and reporting frequency.',
    features: [
      'Custom budget allocation confirmed before onboarding',
      'Multi-location or multi-campaign structure',
      'Dedicated creative development pipeline',
      'Customized reporting cadence and executive reviews',
      'Advanced funnel and retargeting architecture',
      'Direct partner-level strategic consultation',
    ],
    limits: [
      'Scope, deliverables, and pricing strictly agreed prior to campaign launch',
      'No unlimited work promises',
    ],
    limitations: [
      'Scope and deliverables strictly defined and agreed prior to campaign launch',
    ],
    ctaLabel: 'Request a Custom Plan',
    ctaType: 'custom',
    ctaAction: 'custom',
    isPopular: false,
  },
];

export const pricingPlans = plansContent;

export const pricingTransparencyRules = [
  'The displayed monthly price is the complete package price. No additional agency fee is added on top.',
  'Every standard package transparently accounts for both the Meta ad spend and ADrivera service fee.',
  'Allocations for Premium and Custom packages are confirmed with the business prior to purchase.',
  'Actual reach, clicks, and enquiries depend on audience response and market conditions and cannot be guaranteed.',
];

/**
 * Formats the ad spend and service split for transparent rendering.
 * Renders "Confirmed before purchase" when the split is null.
 */
export function formatAllocation(amount: number | null): string {
  if (amount === null) {
    return 'Confirmed before purchase';
  }
  return `INR ${amount.toLocaleString('en-IN')}`;
}
