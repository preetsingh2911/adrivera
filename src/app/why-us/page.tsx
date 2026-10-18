import { BrandSection } from '@/components/BrandSection';
import { FAQSection } from '@/components/FAQSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { ServicesSection } from '@/components/ServicesSection';
import { TrustSection } from '@/components/TrustSection';

export default function WhyUsPage() {
  return (
    <PageShell>
      <PageIntro
        index="01"
        eyebrow="Kyun Zaroori Hai"
        headline="Business aur brand mein farak sirf product ka nahi, pehchaan ka bhi hota hai."
        description="Ek hi market mein kai businesses similar products aur services offer karte hain. Lekin kuch businesses zyada logon ko yaad rehte hain, kyunki unki pehchaan aur visibility strong hoti hai. Meta Ads aapke business ko naye logon tak pahunchane mein madad karte hain."
        quote="Aapka business. Aapki pehchaan. Aapka brand."
      />
      <BrandSection useSerifHeadline />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
    </PageShell>
  );
}
