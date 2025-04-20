
import { supabase } from "@/integrations/supabase/client";

const products = [
  {
    name: "Viyas UltraView 24\" Smart TV",
    description: "A compact 24-inch smart TV with HD resolution, perfect for bedrooms, kitchens, or small living spaces.",
    price: 249.99,
    screen_size: 24,
    resolution: "HD",
    brand: "Viyas",
    stock: 25,
    image_url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: false
  },
  {
    name: "Viyas CineView 32\" Smart TV",
    description: "A versatile 32-inch smart TV with Full HD resolution, perfect for medium-sized rooms.",
    price: 329.99,
    screen_size: 32,
    resolution: "Full HD",
    brand: "Viyas",
    stock: 18,
    image_url: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: false
  },
  {
    name: "Viyas ProView 43\" 4K Smart TV",
    description: "Experience stunning clarity with this 43-inch 4K smart TV featuring HDR technology.",
    price: 499.99,
    screen_size: 43,
    resolution: "4K Ultra HD",
    brand: "Viyas",
    stock: 42,
    image_url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: true
  },
  {
    name: "Viyas TheaterView 50\" 4K Smart TV",
    description: "Transform your living room into a home theater with this 50-inch 4K smart TV.",
    price: 649.99,
    screen_size: 50,
    resolution: "4K Ultra HD",
    brand: "Viyas",
    stock: 15,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: true
  },
  {
    name: "Viyas CinemaView 55\" QLED TV",
    description: "Experience breathtaking colors and contrast with this 55-inch QLED TV.",
    price: 849.99,
    screen_size: 55,
    resolution: "4K Ultra HD",
    brand: "Viyas",
    stock: 32,
    image_url: "https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: false
  },
  {
    name: "Viyas MaxView 65\" OLED TV",
    description: "Experience perfect blacks and infinite contrast with this premium 65-inch OLED TV.",
    price: 1799.99,
    screen_size: 65,
    resolution: "4K Ultra HD",
    brand: "Viyas",
    stock: 28,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: true
  },
  {
    name: "Viyas UltraMax 75\" 8K Smart TV",
    description: "Our flagship 75-inch 8K TV with revolutionary picture quality and AI processing.",
    price: 2899.99,
    screen_size: 75,
    resolution: "8K Ultra HD",
    brand: "Viyas",
    stock: 10,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
    featured: true
  }
];

export const seedProducts = async () => {
  const { error } = await supabase
    .from("products")
    .upsert(products, { onConflict: "name" });

  if (error) {
    console.error("Error seeding products:", error);
    throw error;
  }

  console.log("Products seeded successfully!");
};
