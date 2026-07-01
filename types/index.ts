export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // The Lucide React icon name
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  year: string;
  location: string;
  size: string;
}

export interface WorkProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl: string;
}
