
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Building2, Award, Users, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">About Viyas</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            At Viyas, we're passionate about bringing the latest TV technology and exceptional viewing experiences to your home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Our Story</h2>
              </div>
              <p className="text-muted-foreground">
                Founded in 2020, Viyas has grown from a small startup to a leading provider of premium television solutions, serving customers nationwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Quality Commitment</h2>
              </div>
              <p className="text-muted-foreground">
                We partner with leading manufacturers to bring you the highest quality TVs, backed by our satisfaction guarantee.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Expert Team</h2>
              </div>
              <p className="text-muted-foreground">
                Our team of TV experts is dedicated to helping you find the perfect television for your space and needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Global Standards</h2>
              </div>
              <p className="text-muted-foreground">
                We adhere to international quality standards and bring you the latest in TV technology from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
