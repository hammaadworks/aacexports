"use client";

import {BadgeCtaBox} from "@/components/BadgeCtaBox";
import {LucideWavesArrowUp, Package, Wheat} from "lucide-react";
import {BlurFade} from "@/components/ui/blur-fade";
import {SectionTitle} from "@/components/ui/section-title";

const verticals = [{
    title: "General Trading",
    category: "Architectural & Tech",
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
    icon: LucideWavesArrowUp,
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
                            <BadgeCtaBox
                                key={index}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                icon={item.icon}
                                href={item.href}
                                details={item.details}
                                gradientColor="#EAB30830"
                                className="h-full"
                            />
                        </BlurFade>))}
                </div>
            </div>
        </section>);
}
