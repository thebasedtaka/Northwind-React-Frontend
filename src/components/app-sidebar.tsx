import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { NWBlue } from "@/assets";
import { cn } from "@/lib/utils";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { NAV_CONFIG } from "@/config/navigation";

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar className="h-screen w-64 border-r">
      {/* Logo Section */}
      <div className="flex h-16 items-center border-b px-4">
        <img src={NWBlue} alt="Northwind Logo" className="w-8 h-8" />
        <span className="ml-2 text-xl font-semibold">Northwind</span>
      </div>

      {/* Main Navigation */}
      <SidebarContent>
        <nav className="space-y-1 p-2">
          {NAV_CONFIG.mainNav.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
                location.pathname === item.url
                  ? "bg-accent font-medium"
                  : "hover:bg-accent/50"
              )}
            >
              <span className="text-lg">{item.emoji}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Secondary Navigation */}
        <div className="mt-auto p-2 border-t">
          {NAV_CONFIG.secondaryNav.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent/50"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
