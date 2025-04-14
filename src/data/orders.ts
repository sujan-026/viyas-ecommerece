
import { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: "order-1",
    items: [
      {
        id: "prod-1",
        name: "Minimal Desk Lamp",
        description: "A sleek and modern desk lamp with adjustable brightness levels and a minimalist design.",
        price: 49.99,
        images: [
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
        ],
        category: "Home Office",
        rating: 4.7,
        stock: 25,
        quantity: 1
      },
      {
        id: "prod-3",
        name: "Wireless Bluetooth Earbuds",
        description: "Premium wireless earbuds with noise cancellation, water resistance, and up to 24 hours of battery life.",
        price: 129.99,
        images: [
          "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
        ],
        category: "Electronics",
        rating: 4.5,
        stock: 42,
        quantity: 1
      }
    ],
    total: 179.98,
    status: "delivered",
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "United States"
    },
    paymentMethod: "Credit Card",
    createdAt: "2023-05-15T14:30:00Z",
    updatedAt: "2023-05-18T09:45:00Z",
    trackingNumber: "TRK928374651",
    estimatedDelivery: "2023-05-20"
  },
  {
    id: "order-2",
    items: [
      {
        id: "prod-5",
        name: "Leather Laptop Sleeve",
        description: "A premium handcrafted leather sleeve for laptops up to 15 inches, offering stylish protection for your device.",
        price: 79.99,
        images: [
          "https://images.unsplash.com/photo-1619760563666-77a9295f9a14?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
        ],
        category: "Accessories",
        rating: 4.8,
        stock: 32,
        quantity: 1
      }
    ],
    total: 79.99,
    status: "shipped",
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "United States"
    },
    paymentMethod: "PayPal",
    createdAt: "2023-06-02T11:15:00Z",
    updatedAt: "2023-06-03T16:20:00Z",
    trackingNumber: "TRK736459821",
    estimatedDelivery: "2023-06-07"
  },
  {
    id: "order-3",
    items: [
      {
        id: "prod-8",
        name: "Wool Throw Blanket",
        description: "A cozy, ethically sourced wool throw blanket perfect for adding warmth and style to any room.",
        price: 119.99,
        images: [
          "https://images.unsplash.com/photo-1606680309561-c93572ec4bf7?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
        ],
        category: "Home Decor",
        rating: 4.9,
        stock: 10,
        quantity: 1
      },
      {
        id: "prod-7",
        name: "Ceramic Pour-Over Coffee Maker",
        description: "A beautiful ceramic pour-over coffee maker for brewing a perfect cup of coffee at home.",
        price: 59.99,
        images: [
          "https://images.unsplash.com/photo-1556973361-f9604f56cb7f?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
        ],
        category: "Kitchen",
        rating: 4.7,
        stock: 22,
        quantity: 2
      }
    ],
    total: 239.97,
    status: "processing",
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "United States"
    },
    paymentMethod: "Credit Card",
    createdAt: "2023-06-10T09:00:00Z",
    updatedAt: "2023-06-10T10:15:00Z"
  }
];

export function getOrderById(id: string): Order | undefined {
  return orders.find(order => order.id === id);
}

export function getUserOrders(userId: string): Order[] {
  // In a real app, you would filter by user ID
  // For this mock data, we'll return all orders
  return orders;
}
