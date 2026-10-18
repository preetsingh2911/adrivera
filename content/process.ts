export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processData = {
  eyebrow: '07 / Process',
  headline: 'Saaf Tareeka. Zero Guesswork.',
  leadText:
    'Pehle business aur target audience ko samjhenge, campaign plan karke live karenge, performance monitor karenge aur clean data ke basis par aage badhenge.',
  steps: [
    {
      step: '01',
      title: 'Step 1 — Understand',
      description:
        'Aapka business, offering, Bhopal ke target customers aur main advertising goals ko detail mein samjhenge.',
    },
    {
      step: '02',
      title: 'Step 2 — Plan aur Launch',
      description:
        'Sahi campaign objective, audience targeting, ad creatives, placements aur budget allocation ke saath campaign live karenge.',
    },
    {
      step: '03',
      title: 'Step 3 — Monitor aur Improve',
      description:
        'Package ke hisaab se ad performance ko track karenge aur zaroori improvements aur optimizations karenge.',
    },
    {
      step: '04',
      title: 'Step 4 — Report aur Decide',
      description:
        'Report mein samjhenge ki spend kitna hua, reach kitni mili aur available data ke basis par aage kya step lena chahiye.',
    },
  ] as ProcessStep[],
  footnote:
    'Campaign optimization data ke basis par improve karne ka process hai, bina kisi unreal sales guarantee ke.',
};
