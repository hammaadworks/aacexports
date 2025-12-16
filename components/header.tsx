"use client"

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useModal } from "@/lib/modal-context"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Stones", href: "/stones" },
    { name: "Produce", href: "/produce" },
    { name: "Powders", href: "/powders" },
    { name: "Steel", href: "/steel" },
    { name: "Quality", href: "/#quality" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-border"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-primary font-serif">
            AL AHMED
          </span>
          <span className="text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase">
            Continental • Est. 1996
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ShimmerButton className="h-9 px-4 text-xs" onClick={openModal}>
            Send Requirement
          </ShimmerButton>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                openModal()
                setMobileMenuOpen(false)
              }}
              className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium"
            >
              Send Requirement
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
