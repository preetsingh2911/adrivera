export interface CaseStudyEntry {
  id: string;
  title: string;
  category: string;
  objective: string;
  duration: string;
  spend: string;
  reach: string;
  impressions: string;
  clicks: string;
  cpc: string;
  enquiries: string;
  contextNotes: string;
  ownership: 'client' | 'founder-owned';
  status: 'verified' | 'illustrative';
}

export interface MetricDefinition {
  term: string;
  explanation: string;
}

export interface CaseStudiesData {
  eyebrow: string;
  headline: string;
  leadText: string;
  statusPolicyNote: string;
  definitions: MetricDefinition[];
  entries: CaseStudyEntry[];
}

export const caseStudiesData: CaseStudiesData = {
  eyebrow: '10 / Evidence & Transparency',
  headline: 'Real Campaigns. Transparent Results.',
  leadText:
    'Every campaign operates with real commercial constraints. We present advertising performance openly—documenting actual ad spend, platform delivery metrics, and operational lessons.',
  statusPolicyNote:
    'ADrivera does not publish fabricated statistics, unverified client testimonials, or commercial claims without written consent. When client-verified data is pending verification, we present structured illustrative benchmarks clearly marked as sample figures.',
  definitions: [
    {
      term: 'Views (Impressions) vs. Unique Reach',
      explanation:
        'Impressions represent the total count of times an ad appeared on screen, including repeated views by the same user. Unique Reach measures the distinct individual people who were served the advertisement at least once.',
    },
    {
      term: 'Cost Per Click (CPC) vs. Cost Per Lead or Sale',
      explanation:
        'CPC measures the exact platform cost required to generate a click to your website or WhatsApp channel. CPC does not measure the cost of acquiring a paying customer or completed transaction, which depends on offer attractiveness, pricing, and your direct sales conversion process.',
    },
  ],
  entries: [
    {
      id: 'illustrative-bhopal-hospitality',
      title: 'Bhopal Food & Hospitality Venue Promotion',
      category: 'Local Hospitality / Food Service',
      objective: 'Local Brand Discovery & WhatsApp Table Inquiries',
      duration: '30 Days (Operational Sample Cycle)',
      spend: '₹4,500 (Sample allocated ad spend)',
      reach: '18,400 (Sample unique reach)',
      impressions: '42,800 (Sample total views)',
      clicks: '680 (Sample link clicks)',
      cpc: '₹6.61 (Sample average CPC)',
      enquiries: '44 (Sample WhatsApp conversations started)',
      contextNotes:
        'A local dining establishment tested advertising within a 5 km radius in Bhopal. Week 1 utilized a static menu image (average CPC ₹8.20). In week 2, an AI-assisted video reel showcasing dish preparation replaced the static ad, reducing average CPC to ₹5.40. Table bookings were directly contingent on the venue staff replying to WhatsApp inquiries within 10 minutes.',
      ownership: 'founder-owned',
      status: 'illustrative',
    },
  ],
};
