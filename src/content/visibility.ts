export interface VisibilityBenefit {
  number: string;
  title: string;
  summary: string;
  description: string;
  isHinglishSummary?: boolean;
}

export const visibilityData = {
  eyebrow: '03 / Visibility Gap',
  headline: 'Aaj sirf achha product hona hi kaafi nahi. Sahi logon tak pahunchna bhi zaroori hai.',
  openingPullQuote:
    'Aapke competitors online apni pehchaan bana rahe hain. Aap bhi apne business ko un logon tak pahunchaiye jo aapke customers ban sakte hain.',
  leadText:
    'Ho sakta hai aapka product bhi utna hi achha ho. Farak is baat se pad sakta hai ki log kis business ko jaante hain aur kis par bharosa karte hain. Walk-ins aur referrals zaroori hain, lekin Meta Ads aapke business ko un logon ke saamne laane ka kaam karta hai jo abhi aapke baare mein nahi jaante.',
  benefits: [
    {
      number: '01',
      title: 'Discovery',
      summary: 'Bhopal ke naye customers tak apna business pahunchaiye.',
      isHinglishSummary: true,
      description:
        'Apne product ya service ko un logon ke saamne dikhaiye jo Bhopal mein rehte hain aur jinki zaroorat aap poori kar sakte hain.',
    },
    {
      number: '02',
      title: 'Familiarity',
      summary: 'Potential customers aapke brand ko pehchaanein aur yaad rakhein.',
      isHinglishSummary: true,
      description:
        'Facebook aur Instagram feeds aur Reels par lagataar dikhne se logon ke dimaag mein aapke business ki ek pehchaan banti hai.',
    },
    {
      number: '03',
      title: 'Action',
      summary: 'Interested logon ko seedha WhatsApp ya call par connect kijiye.',
      isHinglishSummary: true,
      description:
        'Clear calls-to-action ke saath interested customers aasaani se aapse WhatsApp ya call par contact kar sakte hain.',
    },
  ] as VisibilityBenefit[],
  closingLine: 'Achha business hona zaroori hai, par logon ko uske baare mein pata hona bhi zaroori hai.',
  qualificationNote:
    'Har business ka advertising goal alag hota hai. Restaurant local footfall aur orders chahta hai, clinic ya coaching quality enquiries chahti hai, aur retail store naye customers. Hum har campaign ko business ki zaroorat ke hisaab se customize karte hain.',
};

export const brandBuildingData = {
  eyebrow: '04 / Brand Building',
  headline: 'Business aur brand mein farak sirf product ka nahi, pehchaan ka bhi hota hai.',
  leadLine: 'Sirf business mat chalao, apna brand banao.',
  paragraphs: [
    'Ek hi market mein kai businesses similar products aur services offer karte hain. Lekin kuch businesses zyada logon ko yaad rehte hain, kyunki unki pehchaan aur visibility strong hoti hai.',
    'Facebook aur Instagram Ads aapke business ko naye logon tak pahunchane aur aapki brand recognition badhane mein madad kar sakte hain. Aapka product achha hai, toh ab use sahi audience ke saamne laane ki direction mein kaam kijiye.',
  ] as string[],
  opportunityIntro: 'Aaj local ho, kal apne sheher ka jaana-maana brand banne ki direction mein badho.',
  opportunities: [
    'Apne sheher mein ek jaani-pehchaani brand identity banayein.',
    'Apne products aur services ko professionally present karein.',
    'Relevant audience ke saamne consistently visible rahein.',
    'Naye offers, products ya branches ko shandaar reach ke saath launch karein.',
    'Dekhiye kaise behtar pehchaan aapke business ko premium positioning de sakti hai.',
  ] as string[],
  pullStatement: 'Aapka business. Aapki pehchaan. Aapka brand.',
  qualification:
    'Advertising aapke brand ki reach badha sakti hai, lekin customer loyalty, product quality aur sahi pricing business owner ki taaqat hoti hai. Hum agreed advertising work aur transparent reporting par focus karte hain.',
};
