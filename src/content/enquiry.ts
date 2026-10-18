export interface EnquiryOption {
  value: string;
  label: string;
}

export const businessCategories: EnquiryOption[] = [
  { value: 'retail', label: 'Retail & Consumer Goods' },
  { value: 'food-hospitality', label: 'Food, Cafe & Hospitality' },
  { value: 'healthcare-wellness', label: 'Healthcare, Clinic & Wellness' },
  { value: 'education-coaching', label: 'Coaching, Institute & Education' },
  { value: 'real-estate', label: 'Real Estate & Property Development' },
  { value: 'professional-services', label: 'Professional & Business Services' },
  { value: 'local-services', label: 'Local Home & Trade Services' },
  { value: 'other', label: 'Other Local Business' },
];

export const primaryObjectives: EnquiryOption[] = [
  { value: 'leads', label: 'Generate Customer Inquiries & Leads' },
  { value: 'brand-awareness', label: 'Increase Local Brand Recognition in Bhopal' },
  { value: 'whatsapp-chat', label: 'Direct WhatsApp Customer Conversations' },
  { value: 'offer-promotion', label: 'Promote a Seasonal Offer, Event or Launch' },
  { value: 'store-visits', label: 'Drive Foot Traffic to Physical Store/Location' },
];

export const planOptions: EnquiryOption[] = [
  { value: 'starter', label: 'Starter — ₹5,000/month (₹3,000 Ads + ₹2,000 Service)' },
  { value: 'growth', label: 'Growth — ₹8,000/month (₹4,500 Ads + ₹3,500 Service)' },
  { value: 'premium', label: 'Premium — ₹16,000/month (Custom Allocation)' },
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

  return `Hello ADrivera Team,

I would like to explore Meta advertising for my business in Bhopal. Here are my details:

• Business Name: ${data.businessName.trim()}
• Category: ${categoryLabel}
• Location: ${data.location.trim()}
• Primary Objective: ${objectiveLabel}
• Preferred Plan: ${planLabel}
• Contact Person: ${data.contactName.trim()}
• Phone / WhatsApp: ${data.phone.trim()}

Please review my details and share the onboarding steps.`;
}
