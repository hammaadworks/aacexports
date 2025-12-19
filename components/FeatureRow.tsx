import React, {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {DotPattern} from "@/components/ui/dot-pattern";

interface FeatureRowProps {
    title: string;
    description: string;
    tags: string[];
    imageAlign?: "left" | "right";
    color?: string;
    image?: string; // Optional image URL
    customVisual?: ReactNode; // Custom component for the visual area (e.g. Carousel)
    action?: ReactNode; // Optional action area (e.g. Button)
}

export const FeatureRow = ({
                               title,
                               description,
                               tags,
                               imageAlign = "right",
                               color = "bg-yellow-500",
                               image,
                               customVisual,
                               action
                           }: FeatureRowProps) => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0">
            <div className={cn("order-2 lg:order-1", imageAlign === "right" ? "lg:order-1" : "lg:order-2")}>
                <h3 className="text-3xl font-serif font-bold mb-4">{title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                {action && <div className="mt-4">{action}</div>}
            </div>
            <div className={cn("order-1 lg:order-2 h-64 lg:h-96 rounded-2xl overflow-hidden relative group", imageAlign === "right" ? "lg:order-2" : "lg:order-1")}>
                 {customVisual ? (
                     customVisual
                 ) : (
                    <>
                         {/* Placeholder or Real Image */}
                         {image ? (
                             <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         ) : (
                            <>
                                <div className={cn("absolute inset-0 opacity-20", color)} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-serif font-bold opacity-10 uppercase tracking-widest px-4 text-center">{title}</span>
                                </div>
                            </>
                         )}
                    </>
                 )}
                
                {/* Decorative Pattern overlay (subtle on images) */}
                {!customVisual && <DotPattern className={cn("absolute inset-0 text-foreground/20", image ? "opacity-30" : "opacity-100")} width={20} height={20} cx={1} cy={1} cr={1} />}
            </div>
        </div>
    )
}
