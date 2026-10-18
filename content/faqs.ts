export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  lang?: string;
}

export const faqsData = {
  eyebrow: '12 / Questions & Answers',
  headline: 'Frequently Asked Questions',
  leadText:
    'Clear, direct answers regarding our advertising packages, budget allocations, creative deliverables, and campaign accountability.',
  items: [
    {
      id: 'faq-1',
      question: 'Is the advertising budget included in the package?',
      answer:
        'Haan, displayed monthly price mein Meta ka ad budget aur ADrivera ki management fee dono shamil hain. Har standard plan ke saath exact budget allocation clear dikhaya gaya hai.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-2',
      question: 'Will you guarantee sales or leads?',
      answer:
        'No. We manage the agreed advertising activities and report actual performance. Results depend on multiple factors, including the business, offer, competition, and customer experience.',
    },
    {
      id: 'faq-3',
      question: 'Can I start if I have never run ads before?',
      answer:
        'Bada investment karne ki zaroorat nahi. Pehle chhote budget se apne business ke liye ads test kijiye. Starter plan unhi businesses ke liye design kiya gaya hai jo Meta ads ko ek limited monthly budget ke saath try karna chahte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-4',
      question: 'What happens if I want to increase my budget?',
      answer:
        'Pehle try kijiye, campaign ke results samjhiye, aur phir apne business ke hisaab se scale kijiye. Jab aap ready hon, tab hum Growth, Premium ya Custom package par move karne ka plan discuss kar sakte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-5',
      question: 'Which platforms do you advertise on?',
      answer:
        'Hum primarily Facebook aur Instagram par Meta Ads Manager ke through campaigns run karte hain, aur jahan relevant ho wahan direct WhatsApp enquiry destinations set up karte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-6',
      question: 'Do you create video ads?',
      answer:
        'AI-assisted video production is included in Growth and higher packages according to the agreed scope. Starter has a more limited creative allowance.',
    },
    {
      id: 'faq-7',
      question: 'Will you keep changing my ads?',
      answer:
        'Creative updates aapke package par depend karte hain. Starter plan mein focused creatives hote hain, jabki Growth aur Premium mein regular creative variations aur refreshes shamil rehte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-8',
      question: 'Can you advertise for my particular business?',
      answer:
        'ADrivera can evaluate your business, objective, location, audience, and applicable advertising policies before recommending a suitable approach.',
    },
    {
      id: 'faq-9',
      question: 'Can I choose my own budget?',
      answer:
        'Haan bilkul. Agar aapko standard plans se alag budget ya customized service chahiye, toh hum Custom package design kar sakte hain.',
      lang: 'hi-Latn',
    },
    {
      id: 'faq-10',
      question: 'What if my ads receive clicks but no sales?',
      answer:
        'We will explain the available performance data and identify potential issues within our agreed scope. Clicks alone do not guarantee sales, and the wider sales process may need attention.',
    },
    {
      id: 'faq-11',
      question: 'Do you provide in-person meetings?',
      answer:
        'Starter plan fully online manage hota hai. Growth package mein har mahine ek in-person meeting shamil hai, aur Premium ya Custom plans mein zaroorat ke hisaab se meetings schedule hoti hain.',
      lang: 'hi-Latn',
    },
  ] as FAQItem[],
};
