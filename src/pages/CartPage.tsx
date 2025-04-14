
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6 text-center">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    Cart Items ({cartItems.length})
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                <Separator />
                <div className="p-6">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <div className="p-6 bg-gray-50 rounded-b-lg">
                  <div className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
