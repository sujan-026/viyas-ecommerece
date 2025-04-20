
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        <div className="mx-auto w-full">
          {children}
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
