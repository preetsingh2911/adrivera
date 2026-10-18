export interface EnquiryOption {
  value: string;
  label: string;
}

export const businessCategories: EnquiryOption[] = [
  { value: 'retail', label: 'Retail & Consumer Goods (Dukaan, Showroom, Products)' },
  { value: 'food-hospitality', label: 'Restaurant, Cafe, Bakery & Hospitality' },
  { value: 'healthcare-wellness', label: 'Clinic, Hospital, Dental & Wellness' },
  { value: 'education-coaching', label: 'Coaching, Institute & Classes' },
  { value: 'real-estate', label: 'Real Estate, Builders & Property' },
  { value: 'professional-services', label: 'Professional & Business Services' },
  { value: 'local-services', label: 'Local Services (Salon, Repair, Event Services)' },
  { value: 'other', label: 'Other Local Business' },
];

export const primaryObjectives: EnquiryOption[] = [
  { value: 'leads', label: 'Enquiries & Customer Leads Badhana' },
  { value: 'brand-awareness', label: 'Bhopal Mein Business Ki Pehchaan (Brand Visibility)' },
  { value: 'whatsapp-chat', label: 'Customers Se Direct WhatsApp Par Baat Karna' },
  { value: 'offer-promotion', label: 'Naya Offer, Discount Ya Event Promote Karna' },
  { value: 'store-visits', label: 'Dukaan, Clinic Ya Store Par Footfall Badhana' },
];

export const planOptions: EnquiryOption[] = [
  { value: 'starter', label: 'Starter — ₹5,000/month (₹3,000 Ads + ₹2,000 Service)' },
  { value: 'growth', label: 'Growth — ₹8,000/month (₹4,500 Ads + ₹3,500 Service)' },
  { value: 'premium', label: 'Premium — ₹16,000/month (Focused Advertising Support)' },
  { value: 'custom', label: 'Custom — From ₹16,000/month (Tailored Scope)' },
];

export interface EnquiryFormData {
  businessName: string;
  category: string;
  location: string;
  objective: string;
  preferredPlan: string;
  contactName: string;
  phone: string;
}

export function buildWhatsAppMessage(data: EnquiryFormData): string {
  const categoryLabel =
    businessCategories.find((c) => c.value === data.category)?.label || data.category;
  const objectiveLabel =
    primaryObjectives.find((o) => o.value === data.objective)?.label || data.objective;
  const planLabel =
    planOptions.find((p) => p.value === data.preferredPlan)?.label || data.preferredPlan;

  return `Namaste ADrivera Team,

Main apne business ke liye Meta advertising (Facebook & Instagram) discuss karna chahta hoon. Mere details ye hain:

• Business Name: ${data.businessName.trim()}
• Category: ${categoryLabel}
• Location: ${data.location.trim()}
• Main Goal: ${objectiveLabel}
• Preferred Plan: ${planLabel}
• Contact Person: ${data.contactName.trim()}
• Phone / WhatsApp: ${data.phone.trim()}

Kripya mere details review karke aage ka advertising process batayein.`;
}
