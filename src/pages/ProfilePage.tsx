
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProfileInfo } from "@/components/profile/ProfileInfo";
import { AddressList } from "@/components/profile/AddressList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currentUser } from "@/data/user";
import { getUserOrders } from "@/data/orders";

const ProfilePage = () => {
  const userOrders = getUserOrders(currentUser.id);

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Account</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="address">Addresses</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileInfo user={currentUser} />
          </TabsContent>

          <TabsContent value="address">
            <AddressList user={currentUser} />
          </TabsContent>

          <TabsContent value="orders">
            <div className="mb-4">
              <p className="text-muted-foreground">
                View your orders in the{" "}
                <a href="/orders" className="text-shop-primary hover:underline">
                  orders page
                </a>
                .
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
