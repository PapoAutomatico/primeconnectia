export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  creationPrice: number;
  monthlyPrice: number;
  description: string;
  features: { text: string; included: boolean; highlight?: boolean }[];
  accentColor: string;
  targetAudience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  metric: string;
  segment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Vendas' | 'Atendimento' | 'Tecnologia' | 'Casos de Sucesso';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  keyTakeaways: string[];
  relatedStat: {
    number: string;
    label: string;
  };
}

export interface DemoScheduleData {
  name: string;
  phone: string;
  email: string;
  company: string;
  segment: string;
  messageVolume: string;
  preferredDate: string;
  preferredTime: string;
  mainGoal: string;
}

export interface BotMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  actionType?: 'schedule' | 'plans' | 'whatsapp' | 'call';
}
