// src/components/search-header.tsx
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchHeaderProps {
  className?: string;
  onSearch?: (query: string) => void;
}

export function SearchHeader({ className, onSearch }: SearchHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 h-16 border-b bg-background/95 backdrop-blur",
        "flex items-center justify-center px-4",
        className
      )}
    >
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products, orders, customers..."
          className="w-full pl-8"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </header>
  );
}
