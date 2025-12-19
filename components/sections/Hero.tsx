"use client";

import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight, Globe as GlobeIcons} from "lucide-react";
import {Globe} from "@/components/ui/globe";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import { Particles } from "@/components/ui/particles";
import { WordRotate } from "@/components/ui/word-rotate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import confetti from "canvas-confetti";

const heroParticlesColors = ["#303F2D", "#EAB308"];

export function Hero() {
    const handleCTAClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y },
            colors: ["#EAB308", "#303F2D", "#FFFFFF"]
        });
    };

    return (<section
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pt-30 md:pt-0">

        {/* 1. Background Globe Layer */}
        {/* Centered absolutely using standard translation technique */}
        <div
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full max-w-[1000px] md:max-w-[1200px] aspect-square pointer-events-none select-none overflow-hidden opacity-70">
            <Globe
                className="opacity-100"
                config={{
                    width: 1000, height: 1000, onRender: () => {
                    }, devicePixelRatio: 2, phi: 0, theta: 0.3, dark: 0, diffuse: 0.8, // Increased diffuse for better visibility
                    mapSamples: 16000, mapBrightness: 1.2, baseColor: [1, 1, 1], // Pure white base
                    markerColor: [234 / 255, 179 / 255, 8 / 255], // Brand Gold
                    glowColor: [1, 1, 1], // White glow
                    markers: [{location: [12.9716, 77.5946], size: 0.1}, // Bangalore
                        {location: [25.2048, 55.2708], size: 0.05}, // Dubai
                        {location: [51.5074, -0.1278], size: 0.05}, // London
                        {location: [40.7128, -74.0060], size: 0.05}, // New York
                        {location: [1.3521, 103.8198], size: 0.05}, // Singapore
                    ],
                }}
            />
        </div>

        {/* 2. Readability Halo */}
        {/* A subtle radial gradient centered behind the text to wash out the globe slightly for contrast */}
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_closest-side,var(--color-background)_30%,transparent_100%)] opacity-80 pointer-events-none"></div>

        {/* 2.5 Particles Layer */}
        <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={heroParticlesColors}
            refresh
        />

        {/* 3. Content Layer */}
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center">

            <div className="flex justify-center pt-20">
                <PageHeaderBadge icon={GlobeIcons}>
                    Global Exports. Built on Standards.
                </PageHeaderBadge>
            </div>
            {/* Headline */}
            <h1 className="mb-8 max-w-5xl text-5xl font-serif font-bold tracking-tight md:text-7xl lg:text-8xl leading-[1.1] animate-fade-in-up"
                style={{animationDelay: "0.2s"}}>
                <span className="text-secondary block">Powered by Experience.</span>
                <span className="text-primary block mt-2 flex justify-center">
                    <WordRotate 
                        words={["Driven by Quality.", "Built on Trust.", "Global Reach."]} 
                        className="text-primary"
                    />
                </span>
            </h1>

            {/* Subtext */}
            <p className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed animate-fade-in-up"
               style={{animationDelay: "0.3s"}}>
                For 30 years, we’ve supplied Stones, Steel, Electronics, Food Grains, and Dehydrated Powders
                with one principle: <br className="hidden md:block"/>
                <span
                    className="font-semibold text-secondary">Performance is the promise. Consistency is the proof.</span>
            </p>

            {/* CTA Buttons */}
            <div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto animate-fade-in-up"
                style={{animationDelay: "0.4s"}}>
                <ShimmerButton 
                    className="h-14 px-8 text-base font-semibold shadow-lg"
                    shimmerColor="#EAB308"
                    shimmerSize="0.1em"
                    borderRadius="9999px"
                    background="var(--brand-green)"
                    onClick={handleCTAClick}
                >
                    <Link href="/#contact" className="flex items-center gap-2">
                        Send Requirement <ArrowRight className="h-4 w-4"/>
                    </Link>
                </ShimmerButton>
                <Button size="lg" variant="outline"
                        className="h-14 px-8 text-base w-full sm:w-auto font-semibold rounded-full bg-white/60 backdrop-blur-md border-muted hover:bg-white/80 text-secondary transition-all duration-300"
                        asChild>
                    <Link href="/#verticals">Explore Products</Link>
                </Button>
            </div>
        </div>
    </section>);
}