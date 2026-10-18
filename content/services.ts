export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const servicesData = {
  eyebrow: '05 / Services',
  headline: 'Everything You Need to Get Your Meta Ads Moving.',
  leadText:
    'We take care of the technical setup, audience targeting, and routine optimization so you can focus on running your business and responding to customer enquiries.',
  items: [
    {
      number: '01',
      title: 'Campaign planning',
      summary:
        'Understanding your business model, customer economics, location, and target goals before selecting an advertising strategy.',
      details: [
        'Clarifying business objectives (discovery, store visits, direct enquiries)',
        'Reviewing existing customer profiles and competitors in Bhopal',
        'Selecting the right campaign format for your specific offer',
      ],
    },
    {
      number: '02',
      title: 'Audience and location targeting',
      summary:
        'Configuring geographic boundaries and relevant interest parameters aligned with advertising policies and business requirements.',
      details: [
        'Bhopal local-area and radial radius targeting',
        'Demographic and interest-based audience testing',
        'Policy-compliant targeting without unverifiable claims',
      ],
    },
    {
      number: '03',
      title: 'Creative development',
      summary:
        'Designing ad visuals, headlines, and video assets appropriate for your chosen plan to engage audiences in the feed and stories.',
      details: [
        'Static ad layouts with clear typography and offer messaging',
        'AI-assisted video production in Growth and higher tiers',
        'Defined variation quotas for systematic creative learning',
      ],
    },
    {
      number: '04',
      title: 'Campaign setup',
      summary:
        'Configuring campaigns, ad sets, placements, and click destinations in Meta Ads Manager with precision.',
      details: [
        'Budget scheduling and delivery configuration',
        'Placement selection across Facebook and Instagram',
        'Tracking parameter and link hygiene',
      ],
    },
    {
      number: '05',
      title: 'Monitoring and optimization',
      summary:
        'Observing daily performance, identifying cost anomalies, and adjusting parameters within the scope of your package.',
      details: [
        'Click-through rate and cost-per-click review',
        'Ad fatigue monitoring and creative rotation',
        'Budget reallocation across performing audience segments',
      ],
    },
    {
      number: '06',
      title: 'Performance reporting',
      summary:
        'Transparent documentation showing what was spent on advertising, key metrics achieved, and lessons for subsequent cycles.',
      details: [
        'Clear separation of Meta ad spend and agency service fees',
        'Breakdown of reach, impressions, and click-through numbers',
        'Pragmatic recommendations for next steps',
      ],
    },
    {
      number: '07',
      title: 'Enquiry-focused advertising',
      summary:
        'Designing direct paths from mobile ad impressions to customer conversations via WhatsApp, phone calls, or forms.',
      details: [
        'Click-to-WhatsApp campaign architecture',
        'Pre-filled opening messages for smooth customer follow-up',
        'Clear guidance on lead response timing',
      ],
    },
  ] as ServiceItem[],
};
