import Image from 'next/image';
import { Plane } from "lucide-react";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Button } from '../../button';

export function LandingNavbar() {
    return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.png" // Path to your logo image
              alt="Logo" // Alt text for accessibility
              width={50} // Set width of the logo
              height={50} // Set height of the logo
            />
            singroamAI
          </Link>
        </div>
  
        {/* Using Navigation Menu */}
        <NavigationMenu className="hidden md:flex items-center gap-6">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary"
              >
                How It Works
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#explore"
                className="text-sm font-medium hover:text-primary"
              >
                Explore
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
  
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/dashboard" className="flex items-center gap-2">
              Get Started
              <Plane />
            </Link>
          </Button>
        </div>
      </div>
    </header>;
  }