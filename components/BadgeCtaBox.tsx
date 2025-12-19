import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight, LucideIcon} from "lucide-react";
import {MagicCard} from "@/components/ui/magic-card";

interface BadgeCtaBoxProps {
    title: string;
    category: string;
    description: string;
    icon: LucideIcon;
    href: string;
    details: string[];
    gradientColor: string;
    className?: string;
}

export function BadgeCtaBox({
                                title, category, description, icon: Icon, href, details, gradientColor, className,
                            }: Readonly<BadgeCtaBoxProps>) {
    return (<MagicCard
        className={`flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}
        gradientColor={gradientColor}
    >
        <div className="p-8 flex flex-col h-full relative z-10">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div
                    className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                    <Icon size={28}/>
                </div>
                <div
                    className="px-3 py-1 rounded-full bg-secondary/90 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-white">
                    {category}
                </div>
            </div>

            {/* Enhanced Title & Desc */}
            <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-10 max-w-md">
                {details.map((detail, idx) => (<div key={idx}
                                                    className="flex items-center text-sm font-medium text-muted-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5"/>
                    {detail}
                </div>))}
            </div>

            {/* Action Button - Pushed to bottom */}
            <div className="mt-auto pt-4 relative z-20 w-full">
                <Button
                    variant="default"
                    size="lg"
                    className="w-full rounded-full group bg-primary text-primary-foreground hover:bg-secondary/90"
                    asChild
                >
                    <Link href={href}>
                        Explore Vertical <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                    </Link>
                </Button>
            </div>

            {/* Apt Symbol (Large Icon Watermark) */}
            <div
                className="absolute -right-12 -bottom-12 opacity-10 text-primary pointer-events-none transform -rotate-12 z-0">
                <Icon size={300} strokeWidth={1.5}/>
            </div>
        </div>
    </MagicCard>);
}
