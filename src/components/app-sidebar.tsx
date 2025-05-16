import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NWBlue, NWWhite } from "@/assets";

import { NavDashboard } from "@/components/nav-dashboard";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Northwind",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Dashboard",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Categories",
      url: "/categories",
      emoji: "📂",
    },
    {
      name: "Customers",
      url: "/customers",
      emoji: "👥",
    },
    {
      name: "Employees",
      url: "/employees",
      emoji: "🧑‍💼",
    },
    {
      name: "Orders",
      url: "/orders",
      emoji: "🛒",
    },
    {
      name: "Products",
      url: "/products",
      emoji: "📦",
    },
    {
      name: "Regions/Territories",
      url: "#",
      emoji: "🌍",
    },
    {
      name: "Shippers",
      url: "#",
      emoji: "🧾",
    },
    {
      name: "Suppliers",
      url: "/suppliers",
      emoji: "🚚",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="h-screen w-64 border-r" {...props}>
      <div className="flex h-16 items-center px- border-b">
        <img src={NWBlue} alt="Logo" className="w-8 h-8 ml-3"></img>
        <span className="ml-2 text-xl font-semibold">Northwind</span>
      </div>
      <SidebarContent>
        <NavDashboard favorites={data.favorites} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
