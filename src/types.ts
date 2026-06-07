export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  properties: Property[];
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  propertyInterest: string;
  message: string;
}
