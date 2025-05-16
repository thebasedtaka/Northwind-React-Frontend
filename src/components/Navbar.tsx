import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { NWBlue, NWWhite } from "@/assets";

export function Navbar() {
  return (
    <nav className="flex justify-between">
      <img src={NWBlue} alt="Logo" className="w-10 h-10"></img>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Login</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
