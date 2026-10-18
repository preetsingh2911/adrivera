export interface VisibilityBenefit {
  number: string;
  title: string;
  summary: string;
  description: string;
}

export const visibilityData = {
  eyebrow: '03 / Visibility Gap',
  headline: "Being Good at What You Do Isn't Always Enough. People Need to Know You Exist.",
  leadText:
    'Many local businesses offer excellent products and services but depend primarily on walk-ins, referrals, and people who already know their name. Advertising gives you another way to reach potential customers who might otherwise never discover your business.',
  benefits: [
    {
      number: '01',
      title: 'Discovery',
      summary: 'Introduce your business to relevant audiences.',
      description:
        'Put your offerings directly in front of people living and working in Bhopal who have a genuine need for your product or service.',
    },
    {
      number: '02',
      title: 'Familiarity',
      summary: 'Help potential customers recognize and remember your brand.',
      description:
        'Repeated, professional visibility across Facebook and Instagram feeds and Reels builds recognition and credibility over time.',
    },
    {
      number: '03',
      title: 'Action',
      summary: 'Encourage interested people to enquire, visit, call, or purchase.',
      description:
        'Clear, purposeful calls-to-action guide prospects straight to WhatsApp chats, phone inquiries, or in-person visits.',
    },
  ] as VisibilityBenefit[],
  qualificationNote:
    'The right advertising objective depends on the business. A restaurant might prioritize local discovery or footfall, a real estate agency might prioritize qualified phone inquiries, and a retail store might focus on product discovery and purchases. We do not suggest that every campaign achieves every objective simultaneously.',
};

export const brandBuildingData = {
  eyebrow: '04 / Brand Building',
  headline: "Don't Just Run a Business. Build a Brand People Remember.",
  paragraphs: [
    'Two businesses can sell similar products at similar prices and still achieve very different levels of recognition. Consistent visibility, professional presentation, customer experience, and a clear identity can help a business stand out.',
    'Meta Ads can help you introduce your business to new audiences and remain visible to people who may need your products or services. Over time, that visibility can support brand recognition and customer acquisition.',
  ] as string[],
  opportunities: [
    'Become more recognizable in your local market.',
    'Present your products and services professionally.',
    'Stay visible to relevant audiences.',
    'Support the launch of new products, offers, or locations.',
    'Explore whether stronger brand recognition supports higher-value positioning.',
  ] as string[],
  qualification:
    'Advertising can support brand growth, but it cannot guarantee popularity, customer loyalty, or higher prices. Product quality, pricing, customer experience, competition, and market demand remain important.',
};

