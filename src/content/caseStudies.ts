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
  headline: 'Real Campaigns. Saaf Aur Transparent Data.',
  leadText:
    'Har business ki apni practical situations hoti hain. Hum advertising performance ko transparent tareeqe se share karte hain—actual ad spend, platform delivery metrics aur seekhe gaye lessons ke saath.',
  statusPolicyNote:
    'ADrivera fake claims ya bina permission fabricated testimonials publish nahi karta. Yahan hum ek educational campaign benchmark share kar rahe hain jo dikhata hai ki hum advertising performance data ko kaise evaluate aur present karte hain.',
  definitions: [
    {
      term: 'Views (Impressions) vs. Unique Reach',
      explanation:
        'Impressions ka matlab hai ki ad screen par kitni baar dikha (repeated views shamil hain). Unique Reach ka matlab hai kitne alag-alag logon ne ad ko kam se kam ek baar dekha.',
    },
    {
      term: 'Cost Per Click (CPC) vs. Cost Per Lead or Sale',
      explanation:
        'CPC Meta platform par ek click ki cost hoti hai. CPC ka matlab direct customer ya sale nahi hota—kyunki final conversion offer, pricing aur customer follow-up par bhi depend karta hai.',
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
        'Ek local dining establishment ne Bhopal mein 5 km radius ke andar ads test kiye. Pehle week mein static image chalaya gaya (CPC ₹8.20). Doosre week mein food preparation ka video Reel ad banaya gaya, jisse average CPC ghat kar ₹5.40 ho gaya. Final table bookings ke liye venue staff ka WhatsApp enquiries par time par reply dena decisive factor raha.',
      ownership: 'founder-owned',
      status: 'illustrative',
    },
  ],
};
