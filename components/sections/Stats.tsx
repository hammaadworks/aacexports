"use client";

import React from "react";
import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";

const stats = [
  { label: "Expertise", value: 30, suffix: " Years", icon: TrendingUp },
  { label: "Served", value: 25, suffix: "+ Countries", icon: Users },
  { label: "Clients", value: 500, suffix: "+", icon: Award },
  { label: "Workflow", value: 100, suffix: "% Compliance", icon: CheckCircle },
];

export function Stats() {
  return (
    <section className="py-12 bg-secondary/20 border-y border-border relative overflow-hidden">
      <Meteors number={20} className="opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <BlurFade
              key={index} 
              delay={0.1 * index}
              inView
              className="flex flex-col items-center justify-center text-center space-y-2 p-4"
            >
              <stat.icon className="h-8 w-8 text-primary mb-2 opacity-80" />
              <h3 className="text-3xl font-bold text-foreground tracking-tight flex items-center justify-center">
                <NumberTicker value={stat.value} />
                <span>{stat.suffix}</span>
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
