"use client";

import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "motion/react";
import { Globe } from "@/components/ui/globe";

const markets = [
  "Middle East", 
  "Europe", 
  "Africa", 
  "Southeast Asia", 
  "The Americas"
];

export function GlobalMarkets() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Optional: Add a subtle map background or keep it clean */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle 
                title="Serving 25+ International Markets" 
                className="mb-12"
            />
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {markets.map((market, i) => (
                <motion.span 
                    key={i} 
                    className="px-6 py-3 rounded-full bg-secondary/5 border border-border text-lg font-medium text-muted-foreground shadow-sm hover:border-primary/50 hover:text-primary hover:bg-secondary/10 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                    {market}
                </motion.span>
            ))}
        </div>
      </div>
    </section>
  );
}
