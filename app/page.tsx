"use client";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  MapPin,
  PenLine,
  Plane,
  Sparkles,
  Sun,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FeatureCard } from "@/components/ui/landing/FeatureCard";
import { ItineraryCard } from "@/components/ui/landing/ItineraryCard";
import { StepCard } from "@/components/ui/landing/StepCard";
import Image from "next/image";

export default function LandingPage() {
  useEffect(() => {
    // Apply smooth scrolling only on the root page
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup after the component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/images/logo.png" // Path to your logo image
              alt="Logo" // Alt text for accessibility
              width={50} // Set width of the logo
              height={50} // Set height of the logo
            />
            <Link href="/">singroamAI</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#explore"
              className="text-sm font-medium hover:text-primary"
            >
              Explore
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/auth">
                Get Started
                <Plane />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="container mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-12 left-[5%] w-12 h-12 text-accent opacity-20 animate-bounce">
              <Sun className="w-full h-full" />
            </div>
            <div className="absolute bottom-24 right-[10%] w-16 h-16 text-primary opacity-30 animate-pulse">
              <Plane className="w-full h-full" />
            </div>
            <div className="absolute top-1/3 right-[15%] w-10 h-10 text-accent opacity-20 animate-ping">
              <MapPin className="w-full h-full" />
            </div>

            <div className="container flex flex-col items-center text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-pulse">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  AI-Powered Travel Planning
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative">
                Your Dream Vacation <br className="hidden md:inline" />
                <span className="text-primary relative inline-block">
                  Made Simple
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,5 Q25,0 50,5 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mb-8">
                Create and discover personalized travel itineraries with the
                help of AI. Plan your next adventure in minutes, not hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 group transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/auth">
                    Create Your Itinerary <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 bg-muted/50 relative overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
              <svg
                preserveAspectRatio="none"
                width="100%"
                height="60"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "rgba(226, 232, 240, 0.5)",
                  width: "100%",
                  height: "60px",
                }}
              >
                <path d="M0,60C200,100,400,20,600,60C800,100,1000,20,1200,60V120H0Z" />
              </svg>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-primary opacity-5"></div>
            <div className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-accent opacity-5"></div>

            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 ">
                  <span className="text-sm font-medium ">
                    Powerful Features
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  Everything You Need for Travel Planning
                </h2>
                <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                  Discover how singroamAI transforms your travel planning
                  experience with powerful features.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<PenLine className="h-10 w-10 text-accent" />}
                  title="AI Itinerary Generation"
                  description="Let our AI create personalized travel plans based on your preferences, complete with markdown-style blog formatting."
                />
                <FeatureCard
                  icon={<Users className="h-10 w-10 text-primary" />}
                  title="Community Itineraries"
                  description="Browse and get inspired by itineraries created by other travelers from around the world."
                />
                <FeatureCard
                  icon={<Star className="h-10 w-10 text-accent" />}
                  title="Save Your Adventures"
                  description="Create and save your travel itineraries to keep track of your journeys and revisit them anytime."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden"
        >
          <div className="container mx-auto">
            {/* Decorative wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
              <svg
                preserveAspectRatio="none"
                width="100%"
                height="50"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "rgba(226, 232, 240, 0.5)",
                  width: "100%",
                  height: "50px",
                }}
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                ></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
              </svg>
            </div>

            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-sm font-medium">Simple Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  How singroamAI Works
                </h2>
                <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                  Planning your next trip is as easy as 1-2-3 with our
                  AI-powered platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting line between steps */}
                <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
                <StepCard
                  number={1}
                  title="Tell Us Your Preferences"
                  description="Share your destination, interests, travel style, and any specific requirements."
                />
                <StepCard
                  number={2}
                  title="AI Creates Your Itinerary"
                  description="Our AI generates a detailed day-by-day itinerary with recommendations tailored to you."
                />
                <StepCard
                  number={3}
                  title="Customize & Share"
                  description="Edit your itinerary as needed, then share it with friends or the community."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section
          id="explore"
          className="py-20 bg-muted/50 relative overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
              <svg
                preserveAspectRatio="none"
                width="100%"
                height="60"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "rgba(226, 232, 240, 0.5)",
                  width: "100%",
                  height: "60px",
                }}
              >
                <path d="M0,60C150,110,350,30,500,70C650,110,850,30,1000,50C1150,70,1200,110,1200,60V120H0Z" />
              </svg>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-24 left-[10%] w-16 h-16 text-accent opacity-30 animate-pulse">
              <Plane className="w-full h-full" />
            </div>
            <div className="absolute bottom-40 right-10 w-16 h-16 rounded-full bg-accent/10 animate-pulse"></div>

            <div className="container">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-sm font-medium">Get Inspired</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  Explore Popular Itineraries
                </h2>
                <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                  Get inspired by these community-created travel plans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ItineraryCard
                  image="/images/japan.png"
                  title="10 Days in Japan: Mount Fuji viewing"
                  author="Travel Enthusiast"
                  likes={124}
                  badge="Most Popular"
                />
                <ItineraryCard
                  image="/images/korea.png"
                  title="Relaxing Getaway: South Korea"
                  author="City Explorer"
                  likes={98}
                  badge="Trending"
                />
                <ItineraryCard
                  image="/images/hongkong.png"
                  title="Intriguing nightlife: Hongkong"
                  author="Night Owl"
                  likes={156}
                  badge="Editor's Choice"
                />
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 group"
                  asChild
                >
                  <Link href="/auth">
                    Explore Itineraries
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="container mx-auto">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
              <svg
                preserveAspectRatio="none"
                width="100%"
                height="50"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "rgba(226, 232, 240, 0.5)",
                  width: "100%",
                  height: "50px",
                }}
              >
                <path d="M0,0C150,60,350,40,500,60C650,80,850,20,1000,30C1150,40,1200,90,1200,90V0H0Z" />
              </svg>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-25 h-25 rounded-full bg-accent opacity-5 animate-pulse"></div>
            </div>

            <div className="container relative">
              <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Start Your Journey
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                  Ready to Plan Your Next Adventure?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join thousands of travelers who are already using singroamAI
                  to create memorable journeys.
                </p>
                <div className="relative">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/auth">
                      Get Started For Free <ArrowRight />
                    </Link>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">10,000+ Itineraries Created</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">500+ Destinations</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-sm">4.9/5 User Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Image
                  src="/images/logo.png" // Path to your logo image
                  alt="Logo" // Alt text for accessibility
                  width={50} // Set width of the logo
                  height={50} // Set height of the logo
                />
                <span>singroamAI</span>
              </div>
              <p className="text-muted-foreground max-w-[300px]">
                AI-powered travel planning to help you create unforgettable
                experiences.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
