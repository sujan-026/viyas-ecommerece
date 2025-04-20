
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart`);
    }
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  // formatter for Indian Rupees
  const formatINR = (amount: number) =>
    amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          {wishlistItems.length > 0 && (
            <Button variant="outline" onClick={clearWishlist} className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              Clear Wishlist
            </Button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Browse our products and add your favorite items to your wishlist.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {wishlistItems.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-32 h-32">
                    <Link to={`/products/${product.id}`}>
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </Link>
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row justify-between">
                    <div className="space-y-1">
                      <Link to={`/products/${product.id}`} className="hover:underline">
                        <h3 className="font-medium text-lg">{product.name}</h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                      <p className="font-bold text-lg">₹{formatINR(product.price)}</p>
                      <p className={product.stock > 0 ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
                        {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                      </p>
                    </div>
                    
                    <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0 justify-end">
                      <Button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={product.stock === 0}
                        className="w-full"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => handleRemoveFromWishlist(product.id)}
                        className="w-full"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default WishlistPage;
