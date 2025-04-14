
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/user";
import { Home, Briefcase, Plus, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface AddressListProps {
  user: User;
}

export function AddressList({ user }: AddressListProps) {
  const handleEditAddress = (addressId: string) => {
    console.log("Edit address", addressId);
    // In a real app, this would open a dialog to edit the address
    toast.info("Edit address functionality would be implemented here");
  };

  const handleDeleteAddress = (addressId: string) => {
    console.log("Delete address", addressId);
    // In a real app, this would delete the address
    toast.info("Delete address functionality would be implemented here");
  };

  const handleAddAddress = () => {
    console.log("Add new address");
    // In a real app, this would open a dialog to add a new address
    toast.info("Add address functionality would be implemented here");
  };

  const getAddressIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "home":
        return <Home className="h-5 w-5" />;
      case "work":
        return <Briefcase className="h-5 w-5" />;
      default:
        return <Home className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Addresses</CardTitle>
          <CardDescription>
            Manage your shipping addresses.
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={handleAddAddress}>
          <Plus className="mr-2 h-4 w-4" />
          Add Address
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {user.addresses.map((address) => (
            <div
              key={address.id}
              className="flex flex-col md:flex-row justify-between p-4 border rounded-md"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-muted-foreground">
                  {getAddressIcon(address.title)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{address.title}</h3>
                    {address.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                  <p className="text-sm mt-1">{address.fullName}</p>
                  <p className="text-sm mt-1">{address.address}</p>
                  <p className="text-sm">
                    {address.city}, {address.state} {address.postalCode}
                  </p>
                  <p className="text-sm">{address.country}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditAddress(address.id)}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteAddress(address.id)}
                  className="text-red-500 hover:text-red-700"
                  disabled={address.isDefault}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
