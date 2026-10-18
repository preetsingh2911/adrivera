import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { PricingSection } from '@/components/PricingSection';
import { StarterSection } from '@/components/StarterSection';
import { EnquirySection } from '@/components/EnquirySection';
import { FAQSection } from '@/components/FAQSection';

export default function PricingPage() {
  return (
    <PageShell>
      <PageIntro
        index="03"
        eyebrow="Pricing & Plans"
        headline="Shuruaat chhoti rakhiye. Business ko grow karne ka mauka dijiye."
        description="Pehli baar Meta Ads try kar rahe hain? Koi baat nahi. Apne budget aur business ki zaroorat ke hisaab se plan chuniye. Har plan mein advertising spend aur service fee clearly mentioned hai."
        quote="Aapko pehle din se bada budget lagane ki zaroorat nahi. Shuruaat kijiye, actual performance dekhiye aur apne experience ke basis par aage ka decision lijiye."
      />
      <StarterSection />
      <PricingSection />
      <FAQSection />
      <EnquirySection />
    </PageShell>
  );
}
