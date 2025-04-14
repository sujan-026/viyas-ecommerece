
import { Order, OrderStatus as OrderStatusType } from "@/types/order";
import {
  CheckCircle,
  Clock,
  Package,
  Truck,
  XCircle,
} from "lucide-react";

interface OrderStatusProps {
  status: OrderStatusType;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}

export function OrderStatus({
  status,
  createdAt,
  updatedAt,
  estimatedDelivery,
}: OrderStatusProps) {
  const getStepStatus = (
    step: "pending" | "processing" | "shipped" | "delivered"
  ) => {
    const statusOrder = ["pending", "processing", "shipped", "delivered"];
    const currentIndex = statusOrder.indexOf(status);
    const stepIndex = statusOrder.indexOf(step);

    if (status === "cancelled") {
      return "cancelled";
    }

    if (stepIndex < currentIndex) {
      return "completed";
    } else if (stepIndex === currentIndex) {
      return "current";
    } else {
      return "upcoming";
    }
  };

  const getStepIcon = (
    step: "pending" | "processing" | "shipped" | "delivered"
  ) => {
    const stepStatus = getStepStatus(step);

    if (status === "cancelled" && step === "pending") {
      return <XCircle className="h-8 w-8 text-destructive" />;
    }

    switch (stepStatus) {
      case "completed":
        return <CheckCircle className="h-8 w-8 text-shop-success" />;
      case "current":
        switch (step) {
          case "pending":
            return <Clock className="h-8 w-8 text-shop-primary animate-pulse" />;
          case "processing":
            return <Package className="h-8 w-8 text-shop-primary animate-pulse" />;
          case "shipped":
            return <Truck className="h-8 w-8 text-shop-primary animate-pulse" />;
          case "delivered":
            return <CheckCircle className="h-8 w-8 text-shop-primary animate-pulse" />;
        }
        break;
      case "upcoming":
        switch (step) {
          case "pending":
            return <Clock className="h-8 w-8 text-muted-foreground" />;
          case "processing":
            return <Package className="h-8 w-8 text-muted-foreground" />;
          case "shipped":
            return <Truck className="h-8 w-8 text-muted-foreground" />;
          case "delivered":
            return <CheckCircle className="h-8 w-8 text-muted-foreground" />;
        }
        break;
      case "cancelled":
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (status === "cancelled") {
    return (
      <div className="p-6 bg-gray-50 rounded-lg mt-4">
        <div className="flex items-center gap-4">
          <XCircle className="h-8 w-8 text-destructive" />
          <div>
            <h3 className="font-medium text-lg">Order Cancelled</h3>
            <p className="text-muted-foreground">
              This order was cancelled on {formatDate(updatedAt)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg mt-4">
      <h3 className="font-medium text-lg mb-4">Order Status</h3>

      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-4 top-4 h-[calc(100%-32px)] w-0.5 bg-gray-200"></div>

        <div className="space-y-8">
          {/* Step 1: Order Placed */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10">
              {getStepIcon("pending")}
            </div>
            <div>
              <h4 className="font-medium">Order Placed</h4>
              <p className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            </div>
          </div>

          {/* Step 2: Processing */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10">
              {getStepIcon("processing")}
            </div>
            <div>
              <h4 className="font-medium">Processing</h4>
              <p className="text-sm text-muted-foreground">
                {getStepStatus("processing") === "completed" ||
                getStepStatus("processing") === "current"
                  ? "We're preparing your order"
                  : "Your order will be processed soon"}
              </p>
            </div>
          </div>

          {/* Step 3: Shipped */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10">
              {getStepIcon("shipped")}
            </div>
            <div>
              <h4 className="font-medium">Shipped</h4>
              <p className="text-sm text-muted-foreground">
                {getStepStatus("shipped") === "completed" ||
                getStepStatus("shipped") === "current"
                  ? `Shipped on ${formatDate(updatedAt)}`
                  : "Your order will be shipped soon"}
              </p>
            </div>
          </div>

          {/* Step 4: Delivered */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10">
              {getStepIcon("delivered")}
            </div>
            <div>
              <h4 className="font-medium">Delivered</h4>
              <p className="text-sm text-muted-foreground">
                {getStepStatus("delivered") === "completed"
                  ? `Delivered on ${formatDate(updatedAt)}`
                  : estimatedDelivery
                  ? `Estimated delivery: ${formatDate(estimatedDelivery)}`
                  : "Your order will be delivered soon"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
