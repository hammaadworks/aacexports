"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { EnquiryModal } from "@/components/enquiry-modal";

export function AppHeader() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 md:px-6 md:py-3 transition-all duration-300 ease-in-out",
          "mx-auto max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo Icon */}
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="/aacexports/logo/logo_bg.png" 
              alt="AAC Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          
          {/* Vertical Divider */}
          <div className="h-6 md:h-8 w-[1px] bg-border/60" />

          {/* Wordmark Logo */}
          <Link href="/" className="flex items-center">
            <img 
               src="/aacexports/logo/wordmark_bg.png"
               alt="Al Ahmed Continental Exports"
               className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Button 
            variant="default"
            className="font-bold rounded-full h-8 px-4 text-xs md:h-10 md:px-6 md:text-sm shadow-md hover:shadow-lg transition-all duration-300 text-primary-foreground bg-primary"
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
