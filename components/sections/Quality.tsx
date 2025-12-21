"use client";

import React from "react";
import { Check, FileCheck } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Globe } from "@/components/ui/globe";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

const features = [
  "Multi-stage inspections",
  "Compliance-aligned documentation",
  "Clear communication from inquiry to dispatch",
];

const documents = [
  "Commercial Invoice",
  "Packing List",
  "Origin Certificate",
  "Bill Lading",
  "Insurance Policy",
  "Lab Report",
  "Phytosanitary Certificate",
  "Fumigation Certificate",
];

const markets = [
  "Middle East", 
  "Europe", 
  "Africa", 
  "Southeast Asia", 
  "The Americas"
];

export function Quality() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6">
        <motion.div 
            className="rounded-3xl bg-foreground text-background p-8 md:p-16 overflow-hidden relative shadow-2xl z-20"
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
                    <div className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                        <div className="inline-block">
                           <SparklesText text="Quality" className="text-3xl md:text-4xl" colors={{first: "#EAB308", second: "#FFFFFF"}} />
                        </div>
                        <span className="ml-2">Isn’t an Act —</span>
                        <br />
                        <TextAnimate animation="blurInUp" by="word" delay={0.5} className="text-primary inline-block">
                             It’s Our Operating System.
                        </TextAnimate>
                    </div>
                    <p className="text-lg text-background/80 leading-relaxed">
                        We don’t just export products — <strong className="text-primary">we export trust</strong>. Our quality control processes are designed to eliminate risk, reduce delays, and ensure full compliance at every stage.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                        <h4 className="font-semibold text-lg text-primary">Our Standards</h4>
                        <ul className="space-y-2">
                            {features.map((feature, i) => (
                                <BlurFade 
                                    key={i} 
                                    delay={0.2 + (i * 0.1)}
                                    inView
                                >
                                    <li className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <Check size={14} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                </BlurFade>
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
                            <BlurFade 
                                key={i} 
                                delay={0.4 + (i * 0.1)}
                                inView
                            >
                            <Card 
                                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border-transparent hover:bg-white/10 transition-colors shadow-none"
                            >
                                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                                <span className="text-base font-medium text-white/90">{doc}</span>
                            </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Merged Global Markets Section */}
        <div className="mt-24 relative w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
            >
                <SectionTitle 
                    title="Serving 25+ International Markets" 
                    className="mb-12"
                />
            </motion.div>
            
            {/* Globe Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] -z-0 opacity-40 pointer-events-none overflow-hidden">
                <Globe className="scale-125" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
                {markets.map((market, i) => (
                    <motion.span 
                        key={i} 
                        className="px-6 py-3 rounded-full bg-background/80 border border-border text-lg font-medium text-muted-foreground shadow-sm hover:border-primary/50 hover:text-primary hover:bg-background transition-all cursor-default backdrop-blur-sm"
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
      </div>
    </section>
  );
}
