export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  lang?: string;
}

export const faqsData = {
  eyebrow: '12 / Questions & Answers',
  headline: 'Frequently Asked Questions — Aam Sawaal Aur Saaf Jawaab',
  leadText:
    'Packages, ad spend, creative deliverables aur campaign process ke baare mein business owners ke zaroori sawaal.',
  items: [
    {
      id: 'faq-1',
      question: 'Kya ₹5,000 mein ad spend bhi included hai?',
      answer:
        'Haan. Starter plan ka total monthly price ₹5,000 hai, jismein ₹3,000 Meta advertising ke liye aur ₹2,000 ADrivera ki service ke liye allocated hain. Koi hidden fee nahi hai.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-2',
      question: 'Kya sales guaranteed hain?',
      answer:
        'Nahi. Hum advertising campaign ko professionally manage karte hain, lekin sales product, pricing, offer, competition aur customer experience jaise factors par bhi depend karti hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-3',
      question: 'Agar maine pehle kabhi ads nahi chalaye toh?',
      answer:
        'Bilkul shuru kar sakte hain. Starter plan un businesses ke liye hai jo pehli baar Meta Ads try karna chahte hain aur ek chhote budget ke saath actual performance dekhna chahte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-4',
      question: 'Agar mujhe zyada advertising chahiye toh?',
      answer:
        'Aap Growth, Premium ya Custom plan ke options discuss kar sakte hain. Sahi plan aapke goals aur requirements par depend karega.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-5',
      question: 'Kya aap mere business ke liye ads chala sakte hain?',
      answer:
        'Apne business, location aur goal ke baare mein batayiye. Hum evaluate karenge ki kaunsa campaign approach suitable ho sakta hai.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-6',
      question: 'Kaunse platforms par ads chalenge?',
      answer:
        'Hum primarily Facebook aur Instagram par Meta Ads Manager ke through campaigns run karte hain, aur jahan relevant ho wahan direct WhatsApp enquiry destinations set up karte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-7',
      question: 'Kya aap video ads bhi banate hain?',
      answer:
        'Haan, AI-assisted video reels Growth aur higher packages mein included hain. Starter plan static ad banners aur single primary creatives ke liye hota hai.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-8',
      question: 'Kya aap ads ko regularly change karenge?',
      answer:
        'Creative updates aapke package par depend karte hain. Starter plan mein focused single primary creative hota hai, jabki Growth aur Premium mein regular creative variations aur testing shamil rehte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-9',
      question: 'Agar ads par clicks aaye lekin sales na mile toh?',
      answer:
        'Hum campaign data analyze karenge ki audience kahan drop ho rahi hai. Clicks alone sales guarantee nahi karte—offer, pricing aur follow-up conversation par bhi focus karna zaroori hota hai.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-10',
      question: 'Kya aap in-person meetings provide karte hain?',
      answer:
        'Starter plan online (WhatsApp aur calls par) manage hota hai. Growth package mein Bhopal mein har mahine 1 in-person meeting included hai, aur Premium ya Custom plans mein zaroorat ke hisaab se meetings schedule hoti hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-11',
      question: 'Kya main apna khud ka custom budget decide kar sakta hoon?',
      answer:
        'Haan bilkul. Agar aapko standard plans se alag budget ya customized advertising support chahiye, toh hum aapke goals ke hisaab se Custom plan discuss kar sakte hain.',
      lang: 'hi-Latn',
    },
  ] as FAQItem[],
};
