
import React, { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";

interface ShippingAddress {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface CheckoutData {
  shippingAddress: ShippingAddress | null;
  paymentMethod: string;
  orderDate: string;
  orderId: string;
}

interface CheckoutContextType {
  checkoutData: CheckoutData;
  updateCheckoutData: (data: Partial<CheckoutData>) => void;
  clearCheckoutData: () => void;
}

const defaultCheckoutData: CheckoutData = {
  shippingAddress: null,
  paymentMethod: "",
  orderDate: "",
  orderId: "",
};

const CheckoutContext = createContext<CheckoutContextType>({
  checkoutData: defaultCheckoutData,
  updateCheckoutData: () => {},
  clearCheckoutData: () => {},
});

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(defaultCheckoutData);
  const { clearCart } = useCart();

  const updateCheckoutData = (data: Partial<CheckoutData>) => {
    setCheckoutData((prev) => ({ ...prev, ...data }));
  };

  const clearCheckoutData = () => {
    setCheckoutData(defaultCheckoutData);
    clearCart();
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutData,
        updateCheckoutData,
        clearCheckoutData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
