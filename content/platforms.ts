export interface PlacementItem {
  platform: 'Facebook' | 'Instagram' | 'WhatsApp';
  format: string;
  role: string;
  creativeType: string;
}

export const platformsData = {
  eyebrow: '06 / Placements',
  headline: 'Reach Customers Where They Spend Their Time.',
  leadText:
    'Meta advertising provides access to diverse placements across Facebook and Instagram. WhatsApp serves as the direct conversion destination where prospective customers connect with your business.',
  placements: [
    {
      platform: 'Instagram',
      format: 'Reels & Stories',
      role: 'Short-form visual engagement and local brand recall',
      creativeType: '9:16 vertical video and motion graphics',
    },
    {
      platform: 'Instagram',
      format: 'Feed & Explore',
      role: 'Detailed offer presentations and visual catalog browsing',
      creativeType: '1:1 or 4:5 static graphics and carousels',
    },
    {
      platform: 'Facebook',
      format: 'Feed & Video',
      role: 'Local community reach, business announcements, and service details',
      creativeType: 'High-clarity image posts with clear headline copy',
    },
    {
      platform: 'WhatsApp',
      format: 'Direct Click-to-Message Destination',
      role: 'Immediate one-on-one customer enquiry and order conversation',
      creativeType: 'Pre-filled customer enquiry prompt with instant handoff',
    },
  ] as PlacementItem[],
  importantNote:
    'We do not blindly activate every placement. Placements are selected according to your specific campaign objective, creative assets, and performance feedback.',
};
