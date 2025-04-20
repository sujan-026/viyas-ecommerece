
import { User } from "@/types/user";

export const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "https://i.pravatar.cc/150?u=user-1",
  addresses: [
    {
      id: "address-1",
      title: "Home",
      fullName: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "United States",
      isDefault: true
    },
    {
      id: "address-2",
      title: "Work",
      fullName: "John Doe",
      address: "456 Market St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94103",
      country: "United States",
      isDefault: false
    }
  ]
};
