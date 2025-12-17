"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Elements - Optional: Add subtle gradient or pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-6">
              <Globe className="mr-2 h-4 w-4 text-primary" />
              Global Exports. Built on Standards.
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-serif font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powered by Experience. <br />
            <span className="text-primary">Driven by Quality.</span>
          </motion.h1>

          <motion.p
            className="mb-10 text-lg text-muted-foreground md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For 30 years, we’ve supplied Stones, Steel, Electronics, Food Grains, and Dehydrated Powders with one principle: <br className="hidden md:block" />
            <strong className="text-foreground">Performance is the promise. Consistency is the proof.</strong>
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="w-full sm:w-auto font-semibold" asChild>
              <Link href="/#contact">Send Requirement <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold" asChild>
              <Link href="/#verticals">Explore Products</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
