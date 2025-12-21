"use client";

import React from "react";
import { Check, FileCheck } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { SparklesText } from "@/components/ui/sparkles-text";
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

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
                        {["Certificate of Origin", "Phytosanitary Certificates", "Lab Analysis Reports", "Commercial Invoice & Packing List"].map((doc, i) => (
                            <BlurFade 
                                key={i} 
                                delay={0.4 + (i * 0.1)}
                                inView
                            >
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/5 hover:bg-background/10 transition-colors border border-transparent hover:border-background/10">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-sm font-medium">{doc}</span>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
