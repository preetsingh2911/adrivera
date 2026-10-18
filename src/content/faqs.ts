export interface FAQItem {
  id: string;
  question: string;
  answer: string;
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
        'Yes. The displayed monthly price includes both the allocated Meta advertising budget and ADrivera’s service fee. The allocation is shown for each standard plan.',
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
        'Yes. Starter is designed for businesses that want to test Meta advertising with a relatively small monthly commitment.',
    },
    {
      id: 'faq-4',
      question: 'What happens if I want to increase my budget?',
      answer:
        'You can discuss moving to Growth, Premium, or a Custom package depending on your goals and the complexity of the advertising required.',
    },
    {
      id: 'faq-5',
      question: 'Which platforms do you advertise on?',
      answer:
        'Primarily Facebook and Instagram through Meta Ads Manager, with supported campaign destinations such as WhatsApp where relevant.',
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
        'Creative changes depend on the package. Starter includes a limited creative scope; Growth includes a defined allowance for variations or replacements; Premium and Custom allow for more extensive work according to the agreement.',
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
        'Yes. Custom packages can be discussed for businesses requiring a different advertising allocation or level of service.',
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
        'Starter does not include in-person meetings. Growth includes one per month. Premium and Custom can include more frequent meetings according to the agreed scope.',
    },
  ] as FAQItem[],
};
