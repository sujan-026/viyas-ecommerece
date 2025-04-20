
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, Mail, Bell, Shield } from "lucide-react";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            <CardTitle>Password & Security</CardTitle>
          </div>
          <CardDescription>
            Manage your password and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Change Password</h3>
              <p className="text-sm text-muted-foreground">
                Update your password regularly to keep your account secure
              </p>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Button variant="outline">Enable 2FA</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <CardTitle>Email Settings</CardTitle>
          </div>
          <CardDescription>
            Manage your email preferences and notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Change Email</h3>
              <p className="text-sm text-muted-foreground">
                Update your email address
              </p>
            </div>
            <Button variant="outline">Update Email</Button>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Email Verification</h3>
              <p className="text-sm text-muted-foreground">
                Verify your email address
              </p>
            </div>
            <Button variant="outline">Verify Email</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notification Preferences</CardTitle>
          </div>
          <CardDescription>
            Manage how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Order Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about your order status
                </p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Price Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Get notified when items in your wishlist go on sale
                </p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <CardTitle>Privacy Settings</CardTitle>
          </div>
          <CardDescription>
            Manage your privacy and data settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Data Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Manage how your data is used and stored
                </p>
              </div>
              <Button variant="outline">Manage</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Account Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
