"use client";

import React from "react";
import { ShieldCheck, FileText, Truck, Headphones } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

const trustBadges = [
  { label: "Government-Recognized Exporter", icon: ShieldCheck },
  { label: "ISO-Aligned Quality Framework", icon: FileText },
  { label: "Full Documentation + Logistics Handling", icon: Truck },
  { label: "24/7 Client Assistance", icon: Headphones },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="A Three-Decade Legacy of Precision and Dependability" 
              align="left"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 1996, <strong className="text-foreground">Al Ahmed Continental</strong> has operated with the discipline of a global enterprise. 
              Every shipment. Every document. Every deadline — executed with clarity and control.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between Indian craftsmanship and global demand, ensuring that what you order is exactly what you receive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                className={cn("relative flex flex-col items-start p-6 rounded-xl border border-border bg-secondary/5 transition-colors overflow-hidden")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <badge.icon size={24} />
                </div>
                <h4 className="font-semibold text-foreground relative z-10">{badge.label}</h4>
                <BorderBeam size={100} duration={8} delay={index * 2} colorFrom="#EAB308" colorTo="#303F2D" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
