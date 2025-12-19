"use client";

import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight, Package, Wheat, Zap} from "lucide-react";
import {SectionTitle} from "@/components/ui/section-title";
import {BlurFade} from "@/components/ui/blur-fade";
import {MagicCard} from "@/components/ui/magic-card";

const verticals = [{
    title: "General Trading",
    category: "Industrial & Tech",
    description: "Premium granite, marble, sandstone, iron & steel, and electronics.",
    icon: Package,
    href: "/verticals/general",
    details: ["Stones", "Iron & Steel", "Electrical & Electronics"],
}, {
    title: "Food Stuff Trading",
    category: "Agriculture",
    description: "Basmati & Non-Basmati rice, graded, polished, and fully export-ready.",
    icon: Wheat,
    href: "/verticals/food",
    details: ["Rice", "Spices", "Fresh Produce"],
}, {
    title: "Dehydrated Powders",
    category: "Ingredients",
    description: "Clean-label, potent ingredients for industrial and culinary brands.",
    icon: Zap,
    href: "/verticals/powder",
    details: ["Onion & Garlic", "Chilli & Turmeric", "Banana & Moringa"],
},];

export function Verticals() {
    return (<section id="verticals" className="py-24 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-6">
                <BlurFade inView>
                    <SectionTitle
                        title="Our Trading Verticals"
                        subtitle="Three divisions. One commitment: consistent international standards."
                    />
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {verticals.map((item, index) => (<BlurFade
                            key={index}
                            delay={index * 0.1}
                            inView
                            className="h-full"
                        >
                            <MagicCard
                                className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                                gradientColor="#EAB30830"
                            >
                                <div className="p-8 flex flex-col h-full relative z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div
                                            className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                                            <item.icon size={28}/>
                                        </div>
                                        <div
                                            className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-bold uppercase tracking-wider text-secondary/80">
                                            {item.category}
                                        </div>
                                    </div>

                                    {/* Enhanced Title & Desc */}
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-serif font-bold text-foreground mb-4 leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-10 max-w-md">
                                        {item.details.map((detail, idx) => (
                                            <div key={idx}
                                                 className="flex items-center text-sm font-medium text-muted-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5"/>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button - Pushed to bottom */}
                                    <div className="mt-auto pt-4 relative z-20 w-full">
                                        <Button
                                            variant="default"
                                            size="lg"
                                            className="w-full rounded-full group bg-primary text-primary-foreground hover:bg-secondary/90"
                                            asChild
                                        >
                                            <Link href={item.href}>
                                                Explore Vertical <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Apt Symbol (Large Icon Watermark) */}
                                    <div className="absolute -right-12 -bottom-12 opacity-10 text-primary pointer-events-none transform -rotate-12 z-0">
                                        <item.icon size={300} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </MagicCard>
                        </BlurFade>))}
                </div>
            </div>
        </section>);
}
