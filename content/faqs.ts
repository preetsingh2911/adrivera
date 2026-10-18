export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData = {
  eyebrow: '11 / FAQs',
  headline: 'Frequently Asked Questions',
  leadText:
    'Clear answers to the most common questions about our plans, advertising budgets, deliverables, and service scopes.',
  items: [
    {
      id: 'faq-1',
      question: 'Is the advertising budget included in the package?',
      answer:
        'Yes. The displayed monthly package price includes both the allocated Meta advertising budget and ADrivera service fee. The exact allocation is displayed for Starter (INR 3,000 ad / INR 2,000 service) and Growth (INR 4,500 ad / INR 3,500 service). No additional agency management fee is added on top.',
    },
    {
      id: 'faq-2',
      question: 'Will you guarantee sales or leads?',
      answer:
        'No. We manage advertising activities professionally, configure targeting, and report actual performance. Business results depend on multiple factors beyond advertising, including your offer, product quality, local competition, pricing, and how quickly your team responds to incoming customer enquiries.',
    },
    {
      id: 'faq-3',
      question: 'Can I start if I have never run ads before?',
      answer:
        'Yes. The Starter plan (INR 5,000 per month) is designed specifically for business owners who want to test Meta advertising with a manageable initial investment, understand how campaigns perform, and evaluate our working relationship before scaling.',
    },
    {
      id: 'faq-4',
      question: 'What happens if I want to increase my budget?',
      answer:
        'You can move to Growth, Premium, or request a Custom package depending on your goals and the advertising complexity required. Upgrades take effect at the next billing cycle or on an agreed prorated schedule.',
    },
    {
      id: 'faq-5',
      question: 'Which platforms do you advertise on?',
      answer:
        'Primarily Facebook and Instagram using Meta Ads Manager. Placements can include Feed, Stories, and Reels, with supported campaign destinations such as direct WhatsApp conversations or contact forms where relevant.',
    },
    {
      id: 'faq-6',
      question: 'Do you create video ads?',
      answer:
        'AI-assisted video production is included in Growth and higher packages according to the defined package scope. The Starter package includes static creative development and does not include video production.',
    },
    {
      id: 'faq-7',
      question: 'Will you keep changing my ads?',
      answer:
        'Creative changes depend on your package. Starter includes a focused creative scope. Growth includes a defined allowance of approximately 2 to 3 creative variations or replacements per month. Premium and Custom allow for more extensive creative pipelines as agreed.',
    },
    {
      id: 'faq-8',
      question: 'Can you advertise for my particular business?',
      answer:
        'ADrivera evaluates your business category, objectives, location, audience, and applicable Meta advertising policies before recommending an advertising approach. Certain restricted categories (e.g. medical treatments, financial products) are subject to Meta platform regulations.',
    },
    {
      id: 'faq-9',
      question: 'Can I choose my own budget?',
      answer:
        'Yes. Custom packages are available starting at INR 16,000 per month for businesses requiring a larger advertising spend, multiple locations, or custom operational requirements. Budgets and service scopes are confirmed before onboarding.',
    },
    {
      id: 'faq-10',
      question: 'What if my ads receive clicks but no sales?',
      answer:
        'We examine the available performance data to diagnose potential bottlenecks. If ads are generating clicks at reasonable costs but visitors do not buy or enquire, we will review your offer clarity, landing destination, pricing, and follow-up speed. Clicks demonstrate visibility; sales require an effective customer conversion path.',
    },
    {
      id: 'faq-11',
      question: 'Do you provide in-person meetings?',
      answer:
        'Starter is managed remotely via WhatsApp, phone, and video calls. Growth includes one in-person review meeting per month in Bhopal. Premium and Custom packages include more frequent in-person coordination as agreed in the service contract.',
    },
  ] as FAQItem[],
};
