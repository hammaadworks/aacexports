import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileText, Truck, Headphones } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const trustBadges = [
  { label: "Government-Recognized Exporter", icon: ShieldCheck },
  { label: "ISO-Aligned Quality Framework", icon: FileText },
  { label: "Full Documentation + Logistics Handling", icon: Truck },
  { label: "24/7 Client Assistance", icon: Headphones },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-start p-6 rounded-xl border border-border bg-secondary/10 hover:bg-secondary/30 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <badge.icon size={24} />
                </div>
                <h4 className="font-semibold text-foreground">{badge.label}</h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
