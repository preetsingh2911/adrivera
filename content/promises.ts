export interface TrustContent {
  eyebrow: string;
  headline: string;
  promiseParagraphs: string[];
  agencyResponsibilities: string[];
  customerResponsibilities: string[];
  commitmentNote: string;
}

export const trustContent: TrustContent = {
  eyebrow: '11 / Accountability',
  headline: 'Hum vaade nahi, transparent advertising par bharosa karte hain.',
  promiseParagraphs: [
    'Har business ke results alag hote hain. Product, pricing, competition, offer aur customer experience bhi final results ko affect karte hain.',
    'Hamari responsibility hai agreed campaign ko professionally set up karna, monitor karna, package ke hisaab se optimize karna aur actual performance aapke saath share karna.',
    'Hum guaranteed sales ka promise nahi karte. Hum clear communication, transparent reporting aur agreed advertising work par focus karte hain.',
  ],
  agencyResponsibilities: [
    'Agreed campaign ka professional setup aur technical configuration.',
    'Sahi audience, location aur placement settings.',
    'Package mein included ad creatives aur copy deliverables.',
    'Campaign monitoring aur plan scope ke hisaab se regular optimization.',
    'Transparent monthly reporting aur actual performance metrics.',
  ],
  customerResponsibilities: [
    'Apne business, products aur pricing ki accurate jankari dena.',
    'Product photos, offers aur required details time par share karna.',
    'Incoming WhatsApp enquiries aur calls ka prompt response dena.',
    'Product quality aur customer service standard maintain rakhna.',
    'Ad creatives ko review aur approve karna.',
  ],
  commitmentNote:
    'Clear responsibilities se dono taraf honest expectations rehti hain aur advertising professional tareeqe se aage badhti hai.',
};

export const promisesData = trustContent;
