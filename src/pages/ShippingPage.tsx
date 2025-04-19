
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Truck, Package, ArrowLeftRight, Clock } from "lucide-react";

const ShippingPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shipping Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Truck className="h-6 w-6 text-shop-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Free Standard Shipping</h3>
                  <p className="text-muted-foreground">
                    Orders over $999 qualify for free standard shipping. Delivery typically takes 3-5 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Package className="h-6 w-6 text-shop-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Professional Delivery</h3>
                  <p className="text-muted-foreground">
                    All TVs are carefully packaged and delivered by our professional team, including basic setup.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-shop-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Delivery Times</h3>
                  <p className="text-muted-foreground">
                    - Standard Shipping: 3-5 business days<br />
                    - Express Shipping: 1-2 business days<br />
                    - Professional Installation: Scheduled at your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Returns Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Returns Policy</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ArrowLeftRight className="h-6 w-6 text-shop-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">30-Day Return Policy</h3>
                  <p className="text-muted-foreground">
                    If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Return Requirements:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Item must be in original condition</li>
                  <li>All original packaging and accessories included</li>
                  <li>Proof of purchase required</li>
                  <li>Return shipping costs may apply</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">How to Initiate a Return:</h3>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Contact our customer service</li>
                  <li>Receive a return authorization number</li>
                  <li>Pack the item securely</li>
                  <li>Ship to the provided return address</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShippingPage;
