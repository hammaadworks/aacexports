"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Wheat, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const verticals = [
  {
    title: "General Trading",
    description: "Premium granite, marble, sandstone, iron & steel, and electronics.",
    icon: Package,
    href: "/steel",
    details: ["Stones", "Iron & Steel", "Electrical & Electronics"],
  },
  {
    title: "Food Stuff Trading",
    description: "Basmati & Non-Basmati rice, graded, polished, and fully export-ready.",
    icon: Wheat,
    href: "/produce",
    details: ["Rice", "Commodity Catalog", "Fresh Produce"],
  },
  {
    title: "Dehydrated Powders",
    description: "Clean-label, potent ingredients for industrial and culinary brands.",
    icon: Zap,
    href: "/powders",
    details: ["Onion & Garlic", "Chilli Powders", "Banana & Moringa"],
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle 
                title="Our Trading Verticals" 
                subtitle="Three divisions. One commitment: consistent international standards."
            />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("flex flex-col h-full glass-card-hover border-transparent")}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <item.icon size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                            {detail}
                          </li>
                      ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group justify-between" asChild>
                      <Link href={item.href}>
                          Explore Vertical <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
