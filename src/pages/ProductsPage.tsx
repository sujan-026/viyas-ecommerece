
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Product } from "@/types/product";
import { Check, ChevronDown, Search, X } from "lucide-react";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, selectedCategory, priceRange, sortBy);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    applyFilters(searchTerm, category, priceRange, sortBy);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    applyFilters(searchTerm, selectedCategory, value, sortBy);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    applyFilters(searchTerm, selectedCategory, priceRange, value);
  };

  const applyFilters = (
    search: string,
    category: string | null,
    price: number[],
    sort: string
  ) => {
    let filtered = [...products];

    // Apply search filter
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );

    // Apply sorting
    switch (sort) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // "featured" - no specific sorting
        break;
    }

    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setPriceRange([0, 300]);
    setSortBy("featured");
    setFilteredProducts(products);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>

          {/* Search and sort bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-auto md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                Filters
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                  <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                  <SelectItem value="nameAsc">Name: A to Z</SelectItem>
                  <SelectItem value="nameDesc">Name: Z to A</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar - hidden on mobile unless showFilters is true */}
            <div className={`${showFilters ? "block" : "hidden"} md:block md:w-64 space-y-6`}>
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryChange(null)}
                  >
                    {selectedCategory === null && (
                      <Check className="mr-2 h-4 w-4" />
                    )}
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => handleCategoryChange(category)}
                    >
                      {selectedCategory === category && (
                        <Check className="mr-2 h-4 w-4" />
                      )}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="pt-4">
                  <Slider
                    defaultValue={[0, 300]}
                    min={0}
                    max={300}
                    step={10}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" onClick={resetFilters} className="w-full">
                <X className="mr-2 h-4 w-4" /> Reset Filters
              </Button>
            </div>

            {/* Products grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                  <Button variant="outline" onClick={resetFilters} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="text-muted-foreground">
                      Showing {filteredProducts.length} products
                    </p>
                  </div>
                  <ProductGrid products={filteredProducts} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
