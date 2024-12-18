"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimationContainer from "@/lib/globals/animted-container";
import AnimatedButton from "../animated-button";
import { NavigationMenuNav } from "./navigation-menu-nav";
import MagicButton from "../magic-button";
import { DownloadCloudIcon, MenuIcon } from "lucide-react";
import { NavbarSheet } from "./navbar-sheet";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-16 w-full z-[99999] select-none lg:px-28 px-6 flex items-center",
        scroll && "border-input bg-background/60 backdrop-blur-md border-b "
      )}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-12">
          <Link href="/">
            <span className="text-transparent text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text inline-bloc">
              Venkat M
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <NavigationMenuNav />
        </div>

        <div className="lg:flex items-center gap-3 hidden">
          <div>
            <AnimatedButton
              name="Let's Connect"
              href="https://api.whatsapp.com/send?phone=919347653480"
            />
          </div>
          <a href="/resume.pdf" download>
            <MagicButton title="Download CV" icon={<DownloadCloudIcon />} />
          </a>
        </div>

        <NavbarSheet />
      </div>

      {/* <MobileNavbar /> */}
    </header>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center space-x-2 text-neutral-300">
              <Icon className="h-4 w-4" />
              <h6 className="text-sm font-medium !leading-none">{title}</h6>
            </div>
            <p
              title={children}
              className="line-clamp-1 text-sm leading-snug text-muted-foreground"
            >
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
