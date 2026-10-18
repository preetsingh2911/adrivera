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
  headline: 'Jahan Bhopal Ke Log Active Hain, Wahin Dikhega Aapka Business.',
  leadText:
    'Aapke potential customers har roz ghanton Instagram aur Facebook scroll karte hain. Sahi placements aur ad formats ke saath aapka ad unke saamne sahi waqt par dikhaya ja sakta hai.',
  wireframes: [
    {
      id: 'feed',
      label: 'Facebook & Instagram Feed',
      aspectRatio: '4:5',
      format: 'In-Feed Sponsored Post',
      description:
        'Feed placement jahan high-impact visuals aur clear headline se scrolling audience ka dhyan turant attract hota hai.',
    },
    {
      id: 'stories',
      label: 'Instagram & Facebook Stories',
      aspectRatio: '9:16',
      format: 'Full-Screen Story Ad',
      description:
        'Full-screen vertical format jahan customer direct swipe ya message karke aapse seedha connect ho sakta hai.',
    },
    {
      id: 'reels',
      label: 'Instagram & Facebook Reels',
      aspectRatio: '9:16',
      format: 'Short-Form Video Reel',
      description:
        'Fast-moving short video format jo local audience tak genuine engagement aur organic feel ke saath business ko pahunchata hai.',
    },
  ] as PlacementWireframe[],
  flowSteps: [
    {
      step: '01',
      category: 'Platform',
      title: 'Ad Facebook / Instagram Par Dekha',
      role: 'Advertising Platform',
      description:
        'Bhopal ke potential customers Feed, Stories ya Reels scroll karte waqt aapka ad dekhte hain.',
    },
    {
      step: '02',
      category: 'Interaction',
      title: 'Call-to-Action Par Tap Kiya',
      role: 'Direct Action',
      description:
        "Interested customer ad par diye gaye button ('WhatsApp Karein' ya 'Details Dekhein') par tap karta hai.",
    },
    {
      step: '03',
      category: 'Destination',
      title: 'Direct WhatsApp Chat Shuru',
      role: 'Customer Enquiry',
      description:
        'Customer seedhe aapke WhatsApp par aata hai, jahan aap unki enquiry attend karke deal close kar sakte hain.',
    },
  ] as FlowStep[],
  placementNote:
    'Har campaign ke liye har placement zaroori nahi hoti. Aapke business goal aur creative format ke hisaab se best placements select ki jaati hain.',
  distinctionNote:
    'Meta Ads (Facebook aur Instagram) reach aur traffic create karte hain, jabki WhatsApp enquiries ko attend karne ka personal medium hai.',
};
