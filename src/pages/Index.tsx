
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, products, categories } from "@/data/products";
import { Link } from "react-router-dom";
import { ChevronRight, Tv, Zap, Award, Wifi } from "lucide-react";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-shop-primary to-shop-accent text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
              Experience Entertainment Like Never Before
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-100">
              Discover Viyas premium television technology with stunning picture quality from 24" to 75" screens.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">Explore TVs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured TVs</h2>
            <Link to="/products" className="text-shop-primary hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Shop by Screen Size</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/categories/${category}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center"
              >
                <div className="flex flex-col items-center">
                  <Tv className="h-8 w-8 mb-2 text-shop-primary" />
                  <span className="text-lg font-medium">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Viyas TVs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-shop-primary bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-shop-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brilliant Picture Quality</h3>
              <p className="text-muted-foreground">
                Experience lifelike colors and stunning clarity with our advanced display technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-shop-primary bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-shop-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Build Quality</h3>
              <p className="text-muted-foreground">
                Every Viyas TV is crafted with durability and aesthetic appeal in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-shop-primary bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-shop-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Connectivity</h3>
              <p className="text-muted-foreground">
                Access your favorite content with our intuitive smart TV interface and multiple connectivity options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-12 bg-shop-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Free Professional Installation
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Enjoy free professional installation on all premium TVs above $1000. Our expert technicians will set up your TV for the best viewing experience.
              </p>
              <Button asChild>
                <Link to="/products">Shop Premium TVs</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=600&h=400&fit=crop"
                alt="Professional TV installation"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Models Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Models</h2>
            <Link to="/products" className="text-shop-primary hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
