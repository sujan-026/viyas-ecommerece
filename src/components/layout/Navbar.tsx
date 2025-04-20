import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, Heart, LogOut } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearch } from "@/hooks/useSearch";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Navbar() {
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const cartCount = getCartCount();
  const wishlistCount = wishlistItems.length;

  const { searchTerm, setSearchTerm, searchResults, handleSearch } = useSearch();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
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
              {isAuthenticated && (
                <>
                  <Link
                    to="/orders"
                    className="font-medium text-lg hover:text-shop-primary transition-colors"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/wishlist"
                    className="font-medium text-lg hover:text-shop-primary transition-colors"
                  >
                    Wishlist
                  </Link>
                </>
              )}
              {isAuthenticated ? (
                <Button variant="ghost" onClick={handleLogout} className="justify-start px-0">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Link
                  to="/auth"
                  className="font-medium text-lg hover:text-shop-primary transition-colors"
                >
                  Login / Register
                </Link>
              )}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-shop-primary">Viyas</span>
        </Link>

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
          {isAuthenticated && (
            <Link
              to="/orders"
              className="text-sm font-medium hover:text-shop-primary transition-colors"
            >
              Orders
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex relative">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[300px] justify-start gap-2">
                  <Search className="h-4 w-4" />
                  <span className="text-muted-foreground">Search products...</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0" align="start">
                <Command>
                  <form onSubmit={handleSearch}>
                    <CommandInput
                      placeholder="Search products..."
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                    />
                  </form>
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {searchResults.length > 0 && (
                      <CommandGroup heading="Products">
                        {searchResults.slice(0, 5).map((product) => (
                          <CommandItem
                            key={product.id}
                            onSelect={() => {
                              setOpen(false);
                              navigate(`/products/${product.id}`);
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="h-8 w-8 object-cover rounded"
                              />
                              <div>
                                <p className="text-sm font-medium">{product.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  &#x20B9;{product.price}
                                </p>
                              </div>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {isAuthenticated && (
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-shop-primary text-white text-xs">
                    {wishlistCount}
                  </span>
                )}
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
          )}

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

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="cursor-pointer">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/wishlist" className="cursor-pointer">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
