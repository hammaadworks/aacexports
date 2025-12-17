"use client";

import React from "react";
import { Check, FileCheck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  "Multi‑stage inspections",
  "Compliance-aligned documentation",
  "Clear communication from inquiry to dispatch",
];

const documents = [
  "Certificate of Origin",
  "Phytosanitary Certificates",
  "Lab Reports",
  "Invoice + Packing List",
];

export function Quality() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
            className="rounded-3xl bg-foreground text-background p-8 md:p-16 overflow-hidden relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-30" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                        Quality Isn’t an Act — <br />
                        <span className="text-primary">It’s Our Operating System.</span>
                    </h2>
                    <p className="text-lg text-background/80 leading-relaxed">
                        We don't just export products; we export trust. Our rigorous quality control processes ensure that every shipment meets international standards.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                        <h4 className="font-semibold text-lg text-primary">Our Standards</h4>
                        <ul className="space-y-2">
                            {features.map((feature, i) => (
                                <motion.li 
                                    key={i} 
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                                >
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <Check size={14} />
                                    </div>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-background/5 rounded-2xl p-8 border border-background/10 backdrop-blur-sm">
                    <h4 className="font-semibold text-xl mb-6 flex items-center gap-2">
                        <FileCheck className="text-primary" />
                        Documentation Provided
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {documents.map((doc, i) => (
                            <motion.div 
                                key={i} 
                                className="flex items-center gap-3 p-3 rounded-lg bg-background/5 hover:bg-background/10 transition-colors border border-transparent hover:border-background/10"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-sm font-medium">{doc}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
