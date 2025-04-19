
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

const NewArrivalsPage = () => {
  // Filter products created in the last 30 days (simulated)
  const newArrivals = products.slice(0, 8); // For demo, showing first 8 products

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
        <p className="text-muted-foreground mb-8">
          Discover our latest TV models with cutting-edge technology and stunning design.
        </p>
        <ProductGrid products={newArrivals} />
      </div>
    </MainLayout>
  );
};

export default NewArrivalsPage;
