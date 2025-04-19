
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
  // ... add more products from your existing data
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
