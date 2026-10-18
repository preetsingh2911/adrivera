export interface VisibilityPillar {
  number: string;
  title: string;
  summary: string;
  description: string;
}

export const visibilityData = {
  eyebrow: '03 / The Problem',
  headline: "Being Good at What You Do Isn't Always Enough. People Need to Know You Exist.",
  leadText:
    'Many local businesses offer excellent products and services but depend primarily on walk-ins, referrals, and people who already know their name. Advertising gives you another way to reach potential customers who might otherwise never discover your business.',
  pillars: [
    {
      number: '01',
      title: 'Discovery',
      summary: 'Introduce your business to relevant local audiences who have not yet encountered your brand.',
      description:
        'Put your menu, property inventory, educational courses, or retail offers directly in front of people living and working in Bhopal.',
    },
    {
      number: '02',
      title: 'Familiarity',
      summary: 'Help prospective customers recognize and remember your name when they need what you sell.',
      description:
        'People rarely purchase the very first moment they see an advertisement. Consistent visibility turns an unknown storefront into a familiar, credible option.',
    },
    {
      number: '03',
      title: 'Action',
      summary: 'Encourage interested people to take a concrete step: enquire, call, visit, or order.',
      description:
        'Clear calls to action route prospective buyers straight to WhatsApp or your sales desk while their interest is active.',
    },
  ] as VisibilityPillar[],
  qualificationNote:
    'The correct objective depends on your business. A restaurant may prioritize local discovery, while a real estate firm prioritizes qualified phone enquiries.',
};

export const brandBuildingData = {
  eyebrow: '04 / Brand Building',
  headline: "Don't Just Run a Business. Build a Brand People Remember.",
  paragraphs: [
    'Two businesses can sell similar products at similar prices and still achieve very different levels of recognition. Consistent visibility, professional presentation, customer experience, and a clear identity help a business stand out.',
    'Meta Ads help you introduce your business to new audiences and remain visible to people who may need your products or services. Over time, that visibility supports recognition, customer recall, and commercial trust.',
  ],
  benefits: [
    'Establish recognizable presence across Bhopal neighborhoods',
    'Present products, services, and offers with professional creative standards',
    'Remain top-of-mind when customers are ready to make buying decisions',
    'Support launches of new products, branch locations, or seasonal campaigns',
  ],
  qualification:
    'Advertising supports brand growth, but cannot guarantee popularity, customer loyalty, or premium pricing. Product quality, pricing fairness, customer experience, and local market demand remain essential.',
};
