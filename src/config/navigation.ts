import {
  Calendar,
  Settings2,
  Blocks,
  Trash2,
  MessageCircleQuestion,
} from "lucide-react";

export const NAV_CONFIG = {
  mainNav: [
    { name: "Dashboard", url: "/", emoji: "📊" },
    { name: "Categories", url: "/categories", emoji: "📂" },
    { name: "Customers", url: "/customers", emoji: "👥" },
    { name: "Employees", url: "/employees", emoji: "🧑‍💼" },
    { name: "Orders", url: "/orders", emoji: "🛒" },
    { name: "Products", url: "/products", emoji: "📦" },
    { name: "Suppliers", url: "/suppliers", emoji: "🚚" },
  ],
  secondaryNav: [
    { title: "Calendar", url: "/calendar", icon: Calendar },
    { title: "Settings", url: "/settings", icon: Settings2 },
    { title: "Templates", url: "/templates", icon: Blocks },
    { title: "Trash", url: "/trash", icon: Trash2 },
    { title: "Help", url: "/help", icon: MessageCircleQuestion },
  ],
} as const;
