"use client";

import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers, Gem, Cuboid, Mountain, Hammer, Construction } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

const stones = [
  {
    name: "Granite",
    description: "Durable and prestigious. Ideal for countertops, flooring, and wall cladding. Available in various colors and finishes.",
    icon: Mountain,
  },
  {
    name: "Marble",
    description: "The epitome of luxury. Perfect for interiors, sculptures, and elegant architectural details.",
    icon: Gem,
  },
  {
    name: "Sandstone",
    description: "Natural and earthy. Excellent for outdoor paving, garden landscaping, and wall facades.",
    icon: Layers,
  },
  {
    name: "Limestone",
    description: "Versatile and classic. Used in construction, road base, and landscape design.",
    icon: Cuboid,
  },
  {
    name: "Slate",
    description: "Fine-grained and foliated. Popular for roofing, flooring, and flagging because of its durability and attractiveness.",
    icon: Hammer,
  },
  {
    name: "Quartz",
    description: "Engineered for strength. A uniform and non-porous alternative to natural stone, low maintenance.",
    icon: Construction,
  },
];

export default function StonesPage() {
  return (
    <div className="pt-24 pb-24 relative min-h-screen">
       {/* Background Grid */}
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <section className="container mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-secondary/10 text-secondary ring-1 ring-inset ring-secondary/20">
             <Layers className="h-6 w-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Natural Stones & Granite</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Timeless materials, modern precision. We source and process the finest natural stones for your architectural masterpieces.
        </p>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
             <p className="text-lg text-muted-foreground">
                From the quarries of India to the world. We offer a comprehensive range of granite, marble, and other natural stones, processed to your exact specifications.
            </p>
        </div>

        <SectionTitle title="Our Collection" className="mb-12" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stones.map((item, index) => (
                 <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                    <MagicCard
                        className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                        gradientColor="var(--brand-gold)" 
                    >
                        <div className="p-8 flex flex-col h-full gap-4">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-serif">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    </MagicCard>
                 </BlurFade>
            ))}
        </div>
      </section>

       <section className="container mx-auto px-6 text-center">
        <div className="bg-muted/30 rounded-3xl p-12 border border-border/50 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Build?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Get in touch for bulk orders, custom sizing, and export inquiries.
                </p>
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/#contact">Request Quote</Link>
                </Button>
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
