
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to cart if there are no items
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
