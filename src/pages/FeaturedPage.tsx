
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

const FeaturedPage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <p className="text-muted-foreground mb-8">
          Discover our specially curated collection of premium TVs.
        </p>
        <ProductGrid products={featuredProducts} />
      </div>
    </MainLayout>
  );
};

export default FeaturedPage;
