
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, getProductsByCategory, products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types/product"; // Use consistent type import

const CategoriesPage = () => {
  const { category } = useParams();
  
  // If a specific category is selected, show products from that category
  if (category) {
    const categoryProducts = getProductsByCategory(category) as Product[]; // Add type assertion here
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="mb-6">
            <Link to="/categories" className="text-shop-primary hover:underline mb-4 inline-block">
              &larr; All Categories
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold mt-2">{category}</h1>
            <p className="text-muted-foreground">
              Browse our collection of {category.toLowerCase()} products.
            </p>
          </div>
          
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground">
                We couldn't find any products in this category.
              </p>
            </div>
          )}
        </div>
      </MainLayout>
    );
  }

  // If no specific category, show all categories
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Shop by Category</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category);
            const productCount = categoryProducts.length;
            // Get a sample image from the first product in this category
            const sampleImage = productCount > 0 ? categoryProducts[0].images[0] : null;
            
            return (
              <Link 
                to={`/categories/${category}`} 
                key={category}
                className="group"
              >
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="aspect-video relative bg-gray-100">
                    {sampleImage ? (
                      <img 
                        src={sampleImage} 
                        alt={category} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium">View Products</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">{category}</h2>
                      <ArrowRight className="h-5 w-5 text-shop-primary group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {productCount} {productCount === 1 ? 'product' : 'products'}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
