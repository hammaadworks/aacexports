"use client";

import React from "react";
import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { VerticalStats, StatItem } from "@/app/verticals/layout";

const stats: StatItem[] = [
  { id: 1, label: "Export Expertise", description: "30+ Years", icon: TrendingUp },
  { id: 2, label: "Served Worldwide", description: "25+ Countries", icon: Users },
  { id: 3, label: "Across Industries", description: "500+ Clients", icon: Award },
  { id: 4, label: "Quality Workflow", description: "100% Compliance", icon: CheckCircle },
];

export function Stats() {
  return (
    <div className="relative overflow-hidden">
        {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <Meteors number={20} className="opacity-40" />
      
      <VerticalStats 
        items={stats} 
        variant="icons" 
        className="bg-transparent border-none py-12" 
      />
    </div>
  );
}
