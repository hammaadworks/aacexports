"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface SimpleCarouselProps {
    images: string[];
    interval?: number;
    className?: string;
}

export function SimpleCarousel({ images, interval = 3000, className }: SimpleCarouselProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`Slide ${index}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <div 
                        key={i}
                        className={cn("w-2 h-2 rounded-full transition-all duration-300", 
                            i === index ? "bg-white scale-125" : "bg-white/40")}
                    />
                ))}
            </div>
            
            {/* Gradient Overlay for text readability if needed, though FeatureRow handles text outside */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    );
}
