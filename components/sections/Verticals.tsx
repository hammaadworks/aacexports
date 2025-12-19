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
    description: "Premium granite, marble, sandstone, iron & steel, and electronics.",
    icon: Package,
    href: "/verticals/general",
    details: ["Stones", "Iron & Steel", "Electrical & Electronics"],
}, {
    title: "Food Stuff Trading",
    description: "Basmati & Non-Basmati rice, graded, polished, and fully export-ready.",
    icon: Wheat,
    href: "/verticals/food",
    details: ["Rice", "Spices", "Fresh Produce"],
}, {
    title: "Dehydrated Powders",
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {verticals.map((item, index) => (<BlurFade
                            key={index}
                            delay={index * 0.1}
                            inView
                            className="h-full"
                        >
                            <MagicCard
                                className="flex flex-col h-full border-border/40"
                                gradientColor="#EAB308"
                                gradientOpacity={0.15}
                            >
                                <div className="flex flex-col h-full p-6">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <item.icon size={24}/>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-grow">{item.description}</p>

                                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-primary/50"/>
                                                {detail}
                                            </li>))}
                                    </ul>

                                    <Button variant="ghost" className="w-full group justify-between mt-auto" asChild>
                                        <Link href={item.href}>
                                            Explore Vertical <ArrowRight
                                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                        </Link>
                                    </Button>
                                </div>
                            </MagicCard>
                        </BlurFade>))}
                </div>
            </div>
        </section>);
}
