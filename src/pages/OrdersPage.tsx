import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { orders } from "@/data/orders";
import { Link } from "react-router-dom";
import { PackageOpen, ShoppingBag } from "lucide-react";

const formatINR = (amount: number) =>
  amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const OrdersPage = () => {
  const activeOrders = orders.filter(
    (order) => order.status !== "delivered" && order.status !== "cancelled"
  );
  const completedOrders = orders.filter(
    (order) => order.status === "delivered" || order.status === "cancelled"
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderOrderCard = (order: typeof orders[0]) => (
    <Card key={order.id} className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">Order #{order.id.slice(-6)}</CardTitle>
            <CardDescription>Placed on {formatDate(order.createdAt)}</CardDescription>
          </div>
          <Badge className={getStatusColor(order.status)}>
            {getStatusText(order.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Order Items</h4>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{formatINR(item.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-2 border-t">
            <p className="font-medium">Total</p>
            <p className="font-bold">₹{formatINR(order.total)}</p>
          </div>

          <div className="pt-2">
            <Button size="sm" asChild>
              <Link to={`/orders/${order.id}`}>View Order Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-6 text-center">
              You haven't placed any orders yet. Start shopping to create your first order.
            </p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="active">Active Orders</TabsTrigger>
              <TabsTrigger value="completed">Completed Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              {activeOrders.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center">
                  <PackageOpen className="h-12 w-12 text-gray-400 mb-4" />
                  <h2 className="text-lg font-semibold mb-2">No active orders</h2>
                  <p className="text-gray-500 mb-4 text-center">
                    You don't have any active orders at the moment.
                  </p>
                </div>
              ) : (
                <div>{activeOrders.map(renderOrderCard)}</div>
              )}
            </TabsContent>
            <TabsContent value="completed">
              {completedOrders.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center">
                  <PackageOpen className="h-12 w-12 text-gray-400 mb-4" />
                  <h2 className="text-lg font-semibold mb-2">No completed orders</h2>
                  <p className="text-gray-500 mb-4 text-center">
                    You don't have any completed orders yet.
                  </p>
                </div>
              ) : (
                <div>{completedOrders.map(renderOrderCard)}</div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
