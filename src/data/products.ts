
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Viyas UltraView 24\" Smart TV",
    description: "A compact 24-inch smart TV with HD resolution, perfect for bedrooms, kitchens, or small living spaces.",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539786774582-b5df4576bf71?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Small TVs",
    rating: 4.5,
    stock: 25,
    featured: false,
    screenSize: 24,
    resolution: "HD",
    smartFeatures: ["Netflix", "YouTube", "Web Browser"],
    connectivity: ["HDMI", "USB", "Wi-Fi"]
  },
  {
    id: "prod-2",
    name: "Viyas CineView 32\" Smart TV",
    description: "A versatile 32-inch smart TV with Full HD resolution, perfect for medium-sized rooms with vibrant color display.",
    price: 329.99,
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Small TVs",
    rating: 4.7,
    stock: 18,
    featured: false,
    screenSize: 32,
    resolution: "Full HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Web Browser"],
    connectivity: ["HDMI", "USB", "Wi-Fi", "Bluetooth"]
  },
  {
    id: "prod-3",
    name: "Viyas ProView 43\" 4K Smart TV",
    description: "Experience stunning clarity with this 43-inch 4K smart TV featuring HDR technology and a wide range of streaming apps.",
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584641911870-6196a97a4e70?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Medium TVs",
    rating: 4.8,
    stock: 42,
    featured: true,
    screenSize: 43,
    resolution: "4K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Disney+", "Voice Control"],
    connectivity: ["HDMI", "USB", "Wi-Fi", "Bluetooth", "Optical Audio"]
  },
  {
    id: "prod-4",
    name: "Viyas TheaterView 50\" 4K Smart TV",
    description: "Transform your living room into a home theater with this 50-inch 4K smart TV featuring Dolby Vision and Dolby Atmos.",
    price: 649.99,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Medium TVs",
    rating: 4.9,
    stock: 15,
    featured: true,
    screenSize: 50,
    resolution: "4K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Disney+", "Voice Control", "App Store"],
    connectivity: ["HDMI", "USB", "Wi-Fi", "Bluetooth", "Optical Audio", "Ethernet"]
  },
  {
    id: "prod-5",
    name: "Viyas CinemaView 55\" QLED TV",
    description: "Experience breathtaking colors and contrast with this 55-inch QLED TV featuring Quantum Dot technology and AI upscaling.",
    price: 849.99,
    images: [
      "https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Large TVs",
    rating: 4.8,
    stock: 32,
    featured: false,
    screenSize: 55,
    resolution: "4K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Disney+", "Voice Control", "App Store", "Gaming Mode"],
    connectivity: ["HDMI 2.1", "USB", "Wi-Fi 6", "Bluetooth", "Optical Audio", "Ethernet"]
  },
  {
    id: "prod-6",
    name: "Viyas MaxView 65\" OLED TV",
    description: "Experience perfect blacks and infinite contrast with this premium 65-inch OLED TV featuring self-illuminating pixels.",
    price: 1799.99,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Large TVs",
    rating: 4.9,
    stock: 28,
    featured: true,
    screenSize: 65,
    resolution: "4K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Disney+", "Voice Control", "App Store", "Gaming Mode", "Smart Home Integration"],
    connectivity: ["HDMI 2.1", "USB", "Wi-Fi 6", "Bluetooth", "Optical Audio", "Ethernet", "eARC"]
  },
  {
    id: "prod-7",
    name: "Viyas UltraMax 75\" 8K Smart TV",
    description: "Our flagship 75-inch 8K TV with revolutionary picture quality, AI processing, and the most advanced features available.",
    price: 2899.99,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Premium TVs",
    rating: 5.0,
    stock: 10,
    featured: true,
    screenSize: 75,
    resolution: "8K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Prime Video", "Disney+", "Voice Control", "App Store", "Gaming Mode", "Smart Home Integration", "AI Enhancement"],
    connectivity: ["HDMI 2.1", "USB", "Wi-Fi 6", "Bluetooth 5.0", "Optical Audio", "Ethernet", "eARC", "HDMI-CEC"]
  },
  {
    id: "prod-8",
    name: "Viyas GamePro 50\" 4K Gaming TV",
    description: "Designed specifically for gamers with 120Hz refresh rate, VRR support, and ultra-low input lag for the ultimate gaming experience.",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561316416-8108d10e3f75?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Gaming TVs",
    rating: 4.9,
    stock: 22,
    featured: false,
    screenSize: 50,
    resolution: "4K Ultra HD",
    smartFeatures: ["Netflix", "YouTube", "Gaming Mode", "VRR", "120Hz", "AMD FreeSync", "NVIDIA G-Sync"],
    connectivity: ["HDMI 2.1", "USB", "Wi-Fi 6", "Bluetooth", "Optical Audio", "Ethernet", "3.5mm Audio"]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export const categories = [
  "Small TVs",
  "Medium TVs",
  "Large TVs",
  "Premium TVs",
  "Gaming TVs"
];
