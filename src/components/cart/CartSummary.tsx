
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

// formatter for Indian Rupees with lakhs/crores separators
const formatINR = (amount: number) =>
  amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export function CartSummary() {
  const { cartItems, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 99.99;
  const total = subtotal + shipping;

  return (
    <Card className="sticky top-20">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>&#x20B9;{formatINR(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            {shipping === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>&#x20B9;{formatINR(shipping)}</span>
            )}
          </div>
          {shipping > 0 && subtotal > 0 && (
            <div className="text-sm text-muted-foreground">
              Add &#x20B9;{formatINR(2000 - subtotal)} more for free shipping!
            </div>
          )}
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>&#x20B9;{formatINR(total)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {isAuthenticated ? (
          <Button
            asChild
            className="w-full"
            disabled={cartItems.length === 0}
          >
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        ) : (
          <div className="w-full space-y-2">
            <Button
              asChild
              className="w-full"
              disabled={cartItems.length === 0}
            >
              <Link to="/auth">Login to Checkout</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              You need to be logged in to checkout
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
