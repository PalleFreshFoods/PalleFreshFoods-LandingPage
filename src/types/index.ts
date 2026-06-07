// Product with pricing, units, category — used by Shop grid + Home best-sellers.
export type ProductCategory = 'Fruits' | 'Vegetables' | 'Dairy' | 'Greens';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  unit: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
  origin: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  body: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactItem {
  icon: string;
  title: string;
  primary: string;
  secondary?: string;
}

export interface HoursEntry {
  day: string;
  time: string;
}

export interface BentoItem {
  title: string;
  body: string;
  span: string; // tailwind grid class
  image: string;
  icon: string;
  accent: 'primary' | 'tertiary' | 'secondary';
}
