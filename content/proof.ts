export interface ProofMetric {
  label: string;
  value: string;
  subtext: string;
  status: 'verified' | 'pending_verification' | 'benchmark';
  metricType: 'experience' | 'views' | 'cpc';
}

export const proofData = {
  eyebrow: '02 / Experience',
  headline: 'Built on Practical Advertising Experience.',
  leadText:
    'ADrivera applies hands-on Meta Ads experience, audience research, local-market understanding, and campaign performance analysis to help businesses make more informed advertising decisions.',
  experienceStatement:
    'We manage campaigns with disciplined audience targeting, transparent ad-spend allocations, and honest reporting. We focus on real feedback loops rather than exaggerated promises.',
  metrics: [
    {
      label: 'Campaign Experience',
      value: '4–5 Months',
      subtext: 'Continuous hands-on Meta Ads testing and optimization',
      status: 'pending_verification',
      metricType: 'experience',
    },
    {
      label: 'Aggregate Ad Views',
      value: '10+ Lakh',
      subtext: 'Cumulative impressions across managed campaigns (views ≠ unique reach)',
      status: 'pending_verification',
      metricType: 'views',
    },
    {
      label: 'Observed CPC Range',
      value: 'INR 1.50 – INR 6.00',
      subtext: 'Observed cost-per-click depending on category, audience, and creative (CPC ≠ cost per lead)',
      status: 'benchmark',
      metricType: 'cpc',
    },
  ] as ProofMetric[],
  claimsNotice:
    'Note on figures: Aggregate ad views reflect total ad impressions, not unique individuals. Cost-per-click metrics represent historical ad clicks and do not represent guaranteed cost per lead or sale. Performance varies by business, offer, and market competition.',
};
