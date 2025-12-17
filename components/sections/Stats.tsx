import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const stats = [
  { label: "Expertise", value: "30 Years", icon: TrendingUp },
  { label: "Served", value: "25+ Countries", icon: Users },
  { label: "Clients", value: "500+", icon: Award },
  { label: "Workflow", value: "100% Compliance", icon: CheckCircle },
];

export function Stats() {
  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center space-y-2 p-4">
              <stat.icon className="h-8 w-8 text-primary mb-2 opacity-80" />
              <h3 className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
