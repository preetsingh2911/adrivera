export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export const servicesData = {
  eyebrow: '05 / Services',
  headline: 'Hum sirf ads nahi chalate. Hum aapke business ko sahi logon tak pahunchane par focus karte hain.',
  leadText:
    'Pehle samjhenge aapka business, phir advertising plan banayenge. Campaign setup, creative, targeting aur regular optimization—sab agreed package ke hisaab se manage hoga.',
  items: [
    {
      number: '01',
      title: 'Campaign planning',
      description:
        'Pehle samjhenge aapka business, aapke customers aur aapka goal. Phir uske hisaab se advertising plan banayenge.',
    },
    {
      number: '02',
      title: 'Audience aur location targeting',
      description:
        'Har business ke customers alag hote hain. Isliye audience aur location ka selection aapke business aur campaign goal ke hisaab se kiya jayega.',
    },
    {
      number: '03',
      title: 'Creative production',
      description:
        'Aapke business ke liye aise ad creatives banane mein madad karenge jo aapki offering ko clearly dikhayein aur audience ka attention attract karein.',
    },
    {
      number: '04',
      title: 'Campaign setup & configuration',
      description:
        'Meta Ads Manager mein campaign objectives, placement settings, budget allocation aur destination tracking professionally configure karenge.',
    },
    {
      number: '05',
      title: 'Campaign optimization',
      description:
        'Campaign ki performance ko monitor karke, package ke hisaab se, zaroori improvements kiye jayenge.',
    },
    {
      number: '06',
      title: 'Performance reporting',
      description:
        'Sirf numbers nahi—report mein samjhiye ki kitna spend hua, kitni reach mili, kitne clicks aaye aur available data kya indicate karta hai.',
    },
    {
      number: '07',
      title: 'WhatsApp enquiries integration',
      description:
        'Jab aapke potential customers interested hon, toh unke liye WhatsApp par aapse contact karna aasaan banaiye.',
    },
  ] as ServiceItem[],
};

