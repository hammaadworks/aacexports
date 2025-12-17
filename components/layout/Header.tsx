"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Keep for mobile menu logic if needed elsewhere for now.
import { motion } from "motion/react";

import { EnquiryModal } from "@/components/enquiry-modal";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ease-in-out",
          "mx-auto max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <Link href="/" className="flex items-center">
            <img 
              src="/aacexports/logo/logo_bg.png" 
              alt="AAC Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          {/* Vertical Delimiter */}
          <div className="h-10 w-[1px] bg-border/60" />

          {/* Wordmark (HTML/CSS) */}
          <Link href="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-lg md:text-xl font-bold text-[#0F172A] whitespace-nowrap">
              Al Ahmed Continental
            </span>
            <div className="flex items-center w-full gap-2">
              <div className="h-[1px] flex-1 bg-[#EAB308]" />
              <span className="text-[0.65rem] md:text-xs font-sans font-bold tracking-[0.2em] text-[#EAB308] uppercase">
                Exports
              </span>
              <div className="h-[1px] flex-1 bg-[#EAB308]" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="default"
            className="font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
            size="default" 
            onClick={() => setIsContactOpen(true)}
          >
            Get in Touch
          </Button>
        </div>
      </motion.header>

      <EnquiryModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}