
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Viyas</SheetTitle>
              <SheetDescription>
                Your one-stop shop for premium products
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                className="font-medium text-lg hover:text-shop-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="font-medium text-lg hover:text-shop-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="font-medium text-lg hover:text-shop-primary transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/orders"
                className="font-medium text-lg hover:text-shop-primary transition-colors"
              >
                Orders
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-shop-primary">Viyas</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-shop-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium hover:text-shop-primary transition-colors"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium hover:text-shop-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/orders"
            className="text-sm font-medium hover:text-shop-primary transition-colors"
          >
            Orders
          </Link>
        </nav>

        {/* Search, Cart, Profile Icons */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 w-[200px] lg:w-[300px]"
            />
          </div>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-shop-primary text-white text-xs">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>

          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
