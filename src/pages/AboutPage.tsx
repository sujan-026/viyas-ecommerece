import { MainLayout } from "@/components/layout/MainLayout";
import { Building2, Award, Users, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">About Viyas</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            At Viyas Connecting India, we believe that every frame deserves brilliance, every pixel deserves
            precision, and every viewing experience deserves to be extraordinary, in short we are "Transforming
            Visual Excellence".
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Our journey began with a vision to redefine entertainment, to immerse you in
            a world where images transcend screens and technology becomes art. As pioneers in LED TV
            innovation, we've meticulously blended cutting-edge engineering, artistic design, and unwavering
            passion to create a symphony of sight and sound that captivates the senses.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            We're not just in the business of selling TVs; we're in the business of creating unforgettable moments, 
            shared laughter, and immersive stories that become an integral part of your life.
            Our commitment isn't just about producing televisions; it's about crafting cinematic wonders that
            awaken emotions, ignite imagination, and set new standards for visual perfection.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            With each LED TV we bring to life, we are rewriting the rules of engagement with technology.
            Join us on this voyage where the ordinary transforms into the extraordinary, and where each LED
            TV is not just a product, but a work of art. As we push the boundaries of what's possible, we invite
            you to explore our world of technology, craftsmanship, and boundless imagination. Discover how
            we're reimagining entertainment and making every frame a masterpiece.
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
