export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export const servicesData = {
  eyebrow: '05 / Services',
  headline: 'Everything You Need to Get Your Meta Ads Moving.',
  leadText:
    'We manage the technical setup, audience targeting, creative development, and ongoing optimization so your Meta advertising runs with clarity and purpose.',
  items: [
    {
      number: '01',
      title: 'Campaign planning',
      description:
        'Understand the business, its goals, location, audience, and budget before choosing an advertising approach.',
    },
    {
      number: '02',
      title: 'Audience and location targeting',
      description:
        'Configure appropriate geographic and audience settings based on campaign objectives, available targeting options, and applicable advertising policies.',
    },
    {
      number: '03',
      title: 'Creative development',
      description:
        'Create or adapt suitable advertising visuals, copy, and videos according to the selected plan.',
    },
    {
      number: '04',
      title: 'Campaign setup',
      description:
        'Configure campaigns, objectives, placements, destinations, and tracking where applicable.',
    },
    {
      number: '05',
      title: 'Monitoring and optimization',
      description:
        'Review campaign performance, identify problems, and make changes within the scope of the selected package.',
    },
    {
      number: '06',
      title: 'Performance reporting',
      description:
        'Explain what was spent, what the campaign delivered, which metrics matter, and what could be improved.',
    },
    {
      number: '07',
      title: 'Enquiry-focused advertising',
      description:
        'Where appropriate, use Facebook and Instagram ads that direct interested customers to WhatsApp, website forms, phone calls, or other supported destinations.',
    },
  ] as ServiceItem[],
};

