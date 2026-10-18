export interface CaseStudy {
  id: string;
  category: string;
  businessName: string;
  isIllustrative: boolean;
  objective: string;
  duration: string;
  adSpend: string;
  agencyFee: string;
  metrics: {
    label: string;
    value: string;
  }[];
  context: string;
  lessons: string;
}

export const caseStudiesData = {
  eyebrow: '09 / Evidence',
  headline: 'Real Campaigns. Transparent Results.',
  leadText:
    'Every campaign operates with real commercial constraints. Below is a structured campaign framework demonstrating how budget, targeting, and creative changes impact real customer inquiries.',
  policyNote:
    'Claims Policy: ADrivera does not publish unverified testimonials or client logos without written consent. The example below demonstrates our campaign reporting structure and is explicitly labeled as an illustrative operational model.',
  items: [
    {
      id: 'sample-local-retail',
      category: 'Local Hospitality / Food Service',
      businessName: 'Illustrative Bhopal Café Campaign',
      isIllustrative: true,
      objective: 'Local Brand Discovery & WhatsApp Table Enquiries',
      duration: '30 Days (Cycle 1)',
      adSpend: 'INR 4,500 (Growth Plan Allocation)',
      agencyFee: 'INR 3,500 (Growth Plan Management)',
      metrics: [
        { label: 'Impressions', value: '42,800' },
        { label: 'Unique Local Reach', value: '18,400' },
        { label: 'Link Clicks', value: '680' },
        { label: 'Average CPC', value: 'INR 6.61' },
        { label: 'Direct WhatsApp Starts', value: '44' },
      ],
      context:
        'A local food venue launched a weekend dining special targeting residential areas within 5 km. Initial week 1 creative used a static photo with high text overlay (CPC INR 8.20). In week 2, an AI-assisted short video reel showcasing dish preparation replaced the static ad, reducing average CPC to INR 5.40.',
      lessons:
        'Video creative significantly improved engagement among local food enthusiasts. However, table bookings depended on the venue staff replying to WhatsApp messages within 10 minutes during peak dinner hours.',
    },
  ] as CaseStudy[],
};
