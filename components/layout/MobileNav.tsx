"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, FileText, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Verticals", href: "/#verticals", icon: Layers },
  { name: "Catalogs", href: "/#catalogs", icon: FileText },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex items-center justify-around rounded-full border border-border/40 bg-background/80 backdrop-blur-lg shadow-lg px-4 py-3">
        {mobileNavItems.map((item) => {
          const isActive = pathname === item.href; // Simple check, might need more robust logic for hash links
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
