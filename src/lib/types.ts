export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface ContactInfo {
  phone: {
    display: string;
    value: string;
  };
  email: string;
  address: Address;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  contact: ContactInfo;
  hours: Array<{ label: string; value: string }>;
  social?: NavigationLink[];
  navigation: NavigationLink[];
}
