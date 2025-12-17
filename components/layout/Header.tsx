"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Assuming Button component exists or I'll create it
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Verticals", href: "/#verticals" },
  { name: "About", href: "/#about" },
  { name: "Certificates", href: "/certificates" },
  { name: "Catalogs", href: "/#catalogs" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out",
          isScrolled
            ? "top-4 mx-auto max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent border-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Replace with Image if available */}
          <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
            AAC Exports
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm" asChild>
            <Link href="/#contact">Send Requirement</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay (for top navigation, though bottom nav is primary for mobile) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-24 px-6">
            <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href} 
                        className="text-lg font-medium text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
                <Button className="w-full" asChild>
                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Send Requirement</Link>
                </Button>
            </div>
        </div>
      )}
    </>
  );
}
