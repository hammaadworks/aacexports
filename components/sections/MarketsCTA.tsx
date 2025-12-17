"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "motion/react";

const markets = ["Middle East", "Europe", "Africa", "Southeast Asia", "The Americas"];

export function MarketsCTA() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle 
                title="Serving 25+ International Markets" 
                className="mb-8"
            />
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {markets.map((market, i) => (
                <motion.span 
                    key={i} 
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                    {market}
                </motion.span>
            ))}
        </div>

        <motion.div 
            className="max-w-3xl mx-auto bg-background border border-border/50 shadow-xl rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
             <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
             
             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10">Ready to Source with Confidence?</h3>
             <p className="text-muted-foreground mb-8 text-lg relative z-10">
                Send your requirements and receive a tailored quote within 24 hours.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 shadow-md hover:shadow-lg transition-all" asChild>
                    <Link href="/#contact">Get A Quote Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 hover:bg-secondary/50" asChild>
                    <Link href="mailto:info@aacexports.com">Email Us</Link>
                </Button>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
