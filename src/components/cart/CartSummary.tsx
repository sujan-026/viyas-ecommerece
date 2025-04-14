
import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export function CartSummary() {
  const { getCartTotal, getCartCount } = useCart();
  const subtotal = getCartTotal();
  const itemCount = getCartCount();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base text-gray-600">Subtotal</div>
          <div className="text-base font-medium text-gray-900">
            ${subtotal.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <span className="text-base text-gray-600">Shipping</span>
            {shipping === 0 && (
              <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                Free
              </span>
            )}
          </div>
          <div className="text-base font-medium text-gray-900">
            ${shipping.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base text-gray-600">Tax estimate</div>
          <div className="text-base font-medium text-gray-900">
            ${tax.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-bold text-gray-900">Order total</div>
          <div className="text-base font-bold text-gray-900">
            ${total.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button className="w-full text-base" size="lg" asChild>
          <Link to={itemCount > 0 ? "/checkout" : "#"}>
            {itemCount > 0 ? "Proceed to Checkout" : "Your Cart is Empty"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
