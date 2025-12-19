"use client";

import React, {ReactNode} from "react";
import {motion} from "motion/react";
import {LucideIcon} from "lucide-react";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import {cn} from "@/lib/utils";

interface VerticalPageWrapperProps {
    children: ReactNode;
    className?: string;
    textureOpacity?: number;
}

export function VerticalPageWrapper({
                                        children, className, textureOpacity = 0.75,
                                    }: Readonly<VerticalPageWrapperProps>) {
    return (<div
            className={cn("relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden", className)}
        >
            {/* Background Texture */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    opacity: textureOpacity,
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                }}
            ></div>
            {children}
        </div>);
}

interface VerticalHeroProps {
    icon: LucideIcon;
    badgeText: string;
    title: ReactNode;
    description: ReactNode;
    children?: ReactNode; // For actions/buttons
    titleClassName?: string;
    descriptionClassName?: string;
}

export function VerticalHero({
                                 icon, badgeText, title, description, children, titleClassName, descriptionClassName,
                             }: Readonly<VerticalHeroProps>) {
    return (<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <PageHeaderBadge icon={icon}>{badgeText}</PageHeaderBadge>
                    <h1
                        className={cn("text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]", titleClassName)}
                    >
                        {title}
                    </h1>
                    <p
                        className={cn("text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10", descriptionClassName)}
                    >
                        {description}
                    </p>

                    {children && (<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {children}
                        </div>)}
                </motion.div>
            </div>
        </section>);
}

export default function VerticalLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}