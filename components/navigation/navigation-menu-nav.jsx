"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/constants/constants";
import { cn } from "@/lib/utils";

export function NavigationMenuNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationData?.map((item, index) => (
          <React.Fragment key={index}>
            <NavigationMenuItem
              key={index}
              className="antialiased tracking-wide text-white/70 hover:text-white "
            >
              <NavigationMenuLink
                legacyBehavior
                passHref
                className={navigationMenuTriggerStyle()}
              >
                <Link href={`#${item?.href}`}>{item?.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
