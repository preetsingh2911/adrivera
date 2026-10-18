export interface PlacementWireframe {
  id: string;
  label: string;
  aspectRatio: string;
  format: string;
  description: string;
}

export interface FlowStep {
  step: string;
  category: 'Platform' | 'Interaction' | 'Destination';
  title: string;
  role: string;
  description: string;
}

export const platformsData = {
  eyebrow: '06 / Placements',
  headline: 'Reach Customers Where They Spend Their Time.',
  leadText:
    'Meta advertising can provide access to different placements and campaign formats, depending on campaign objectives, eligibility, and account configuration.',
  wireframes: [
    {
      id: 'feed',
      label: 'Facebook & Instagram Feed',
      aspectRatio: '4:5',
      format: 'In-Feed Sponsored Post',
      description:
        'A native feed placement optimized for high visual impact, prominent headlines, and clear context before the user scrolls.',
    },
    {
      id: 'stories',
      label: 'Instagram & Facebook Stories',
      aspectRatio: '9:16',
      format: 'Full-Screen Story',
      description:
        'Immersive full-screen vertical ad format with top progress indicators and a direct swipe-up or message call-to-action.',
    },
    {
      id: 'reels',
      label: 'Instagram & Facebook Reels',
      aspectRatio: '9:16',
      format: 'Short-Form Video Reel',
      description:
        'Fast-paced short-form video featuring vertical presentation and a dedicated right-side action column for likes, comments, and shares.',
    },
  ] as PlacementWireframe[],
  flowSteps: [
    {
      step: '01',
      category: 'Platform',
      title: 'Ad on Facebook / Instagram',
      role: 'Advertising Platform',
      description:
        'Where potential customers discover your business through targeted feed, story, or reel placements.',
    },
    {
      step: '02',
      category: 'Interaction',
      title: 'Tap Call-to-Action',
      role: 'Direct Engagement',
      description:
        'The prospect engages with the sponsored creative and taps the verified action button.',
    },
    {
      step: '03',
      category: 'Destination',
      title: 'WhatsApp Chat',
      role: 'Contact Destination',
      description:
        'A direct one-on-one conversation starts in WhatsApp where your business can answer questions and close orders.',
    },
  ] as FlowStep[],
  placementNote:
    'Not every campaign uses every placement. We select placements based on your specific business objective, audience, creative format, and available performance data.',
  distinctionNote:
    'Advertising platforms (Facebook & Instagram) and contact destinations (WhatsApp, website forms, or phone calls) serve distinct functions in your campaign architecture.',
};

