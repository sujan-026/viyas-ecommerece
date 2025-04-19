
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  screen_size: number;
  resolution: string;
  brand: string;
  stock: number;
  image_url: string;
}

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

      return data as Product[];
    },
  });
};
