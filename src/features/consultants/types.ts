export type ContactChannels = {
  /** E.164 digits only, e.g. "2010XXXXXXXX". Omit when not published. */
  whatsappE164?: string;
  phone?: string;
  email?: string;
  website?: string;
  linkedin?: string;
  bookingUrl?: string;
};

export type Consultant = {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  categoryIds: string[];
  languages: string[];
  location: string;
  remote: boolean;
  tags: string[];
  initials: string;
  accent: string;
  contact: ContactChannels;
  featured?: boolean;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
