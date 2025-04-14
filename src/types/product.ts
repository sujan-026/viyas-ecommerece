
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  featured?: boolean;
  screenSize?: number; // Size in inches
  resolution?: string; // e.g., "4K", "8K", "1080p"
  smartFeatures?: string[]; // e.g., ["Netflix", "YouTube", "Voice Control"]
  connectivity?: string[]; // e.g., ["HDMI", "USB", "Bluetooth"]
}
