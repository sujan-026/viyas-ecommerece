
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product as ProductType } from "@/types/product";

// Alias for the database product structure
export interface SupabaseProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  screen_size: number;
  resolution: string;
  brand: string;
  stock: number;
  image_url: string;
  featured?: boolean;
}

// Re-export the Product type for components that import from this hook
export type Product = ProductType;

export const useProducts = (options?: { featured?: boolean }) => {
  return useQuery({
    queryKey: ["products", options],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*");

      if (options?.featured) {
        query = query.eq("featured", true);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      // Transform the database product format to our application product format
      return data.map((item: SupabaseProduct): Product => ({
        id: item.id,
        name: item.name,
        description: item.description || "",
        price: item.price,
        images: [item.image_url], // Convert single image_url to images array
        category: item.resolution.includes("8K") ? "Premium TVs" : 
                 item.screen_size <= 32 ? "Small TVs" :
                 item.screen_size <= 50 ? "Medium TVs" :
                 "Large TVs",
        rating: 4.5, // Default rating since we don't have this in database yet
        stock: item.stock,
        featured: item.featured,
        screenSize: item.screen_size,
        resolution: item.resolution,
        smartFeatures: ["Netflix", "YouTube", "Smart TV"], // Default features
        connectivity: ["HDMI", "USB", "Wi-Fi"] // Default connectivity
      }));
    },
  });
};
