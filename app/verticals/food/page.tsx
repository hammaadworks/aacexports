"use client";

import React, {useRef} from "react";
import {Button} from "@/components/ui/button";
import {CheckCircle2, Leaf, Microscope, PackageCheck, Truck, Wheat} from "lucide-react";
import {motion, useScroll, useTransform} from "motion/react";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/lib/utils";
import {MagicCard} from "@/components/ui/magic-card";

// --- Components ---

const FeatureRow = ({
                        title,
                        description,
                        tags,
                        imageAlign = "right",
                        color = "bg-yellow-500"
                    }: {
    title: string;
    description: string;
    tags: string[];
    imageAlign?: "left" | "right";
    color?: string;
}) => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0">
            <div className={cn("order-2 lg:order-1", imageAlign === "right" ? "lg:order-1" : "lg:order-2")}>
                <h3 className="text-3xl font-serif font-bold mb-4">{title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className={cn("order-1 lg:order-2 h-64 lg:h-96 rounded-2xl overflow-hidden relative", imageAlign === "right" ? "lg:order-2" : "lg:order-1")}>
                 {/* Placeholder for Product Image - Using abstract colored block for now */}
                <div className={cn("absolute inset-0 opacity-20", color)} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-serif font-bold opacity-10 uppercase tracking-widest">{title}</span>
                </div>
                {/* Decorative Pattern */}
                <DotPattern className="absolute inset-0 text-foreground/20" width={20} height={20} cx={1} cy={1} cr={1} />
            </div>
        </div>
    )
}

export default function FoodTradingPage() {
    const {openModal} = useModal();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div className="relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden" ref={targetRef}>
             {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <PageHeaderBadge icon={Wheat}>DAARAAB</PageHeaderBadge>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]">
                            Crafted Origins.<br/>
                            <span className="text-[#8B9D77] italic">Global Distinction.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                            Operating under the distinguished brand <strong>DAARAAB</strong>, we bring over three decades of excellence
                            in exporting premium agricultural commodities. From the paddy fields of India to tables worldwide.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-[#2D3028] text-white hover:bg-[#3E4236] rounded-full px-8 h-12" onClick={openModal}>
                                Request Product List
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Brand Story / Trust */}
            <section className="py-20 bg-white border-y">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-gray-100">
                        <div className="px-4">
                            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                                <Leaf size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sustainably Sourced</h3>
                            <p className="text-sm text-muted-foreground">Directly from farmers employing sustainable agricultural practices.</p>
                        </div>
                        <div className="px-4">
                             <div className="mx-auto h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 mb-4">
                                <Microscope size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Lab Tested</h3>
                            <p className="text-sm text-muted-foreground">Every batch undergoes rigorous quality checks for residue and purity.</p>
                        </div>
                        <div className="px-4">
                             <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                                <Truck size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Export Ready</h3>
                            <p className="text-sm text-muted-foreground">Compliant with FDA, FSSAI, and specific destination country regulations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Deep Dive */}
            <section className="py-24 container mx-auto px-6">
                <FeatureRow
                    title="Basmati & Non-Basmati Rice"
                    description="Our rice is aged to perfection, ensuring the authentic aroma and fluffy texture that DAARAAB is known for. We offer 1121 Steam, Sella, and Ponni varieties, sortex cleaned and graded."
                    tags={["1121 Basmati", "Sona Masoori", "Sortex Cleaned", "Aged 2 Years"]}
                    imageAlign="right"
                    color="bg-yellow-500"
                />
                
                <FeatureRow
                    title="G4 Green Chilli Fresh"
                    description="Handpicked at peak ripeness for maximum heat and crispness. Our G4 chillies are packed in ventilated cartons to maintain freshness during transit to markets in UAE, Saudi Arabia, and Bahrain."
                    tags={["High Pungency", "Ventilated Box", "3.8kg Net Wt", "Crisp Texture"]}
                    imageAlign="left"
                    color="bg-green-600"
                />

                <FeatureRow
                    title="Authentic Indian Spices"
                    description="Whole and ground spices including Cardamom and Black Pepper. We ensure high essential oil content and purity, free from adulteration."
                    tags={["Cardamom", "Black Pepper", "Turmeric", "Cumin"]}
                    imageAlign="right"
                    color="bg-orange-600"
                />
            </section>

            {/* Packaging Highlight */}
            <section className="py-24 bg-[#2D3028] text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Packaging that Preserves.</h2>
                            <p className="text-gray-300 text-lg mb-8">
                                We understand that packaging is as critical as the product itself. Our export packaging is designed to withstand
                                long transit times while maintaining humidity and temperature levels.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400" /> <span>Ventilated Corrugated Cartons for Fresh Produce</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400" /> <span>Multi-layer Poly Pouches for Spices</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400" /> <span>Jute & PP Bags for Rice (5kg - 50kg)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <MagicCard gradientColor="#3E4236" className="bg-white/5 border-white/10 p-6 flex flex-col items-center justify-center aspect-square">
                                <PackageCheck size={40} className="mb-4 text-green-400"/>
                                <span className="font-bold">Custom Labels</span>
                             </MagicCard>
                             <MagicCard gradientColor="#3E4236" className="bg-white/5 border-white/10 p-6 flex flex-col items-center justify-center aspect-square">
                                <Truck size={40} className="mb-4 text-green-400"/>
                                <span className="font-bold">Palletized</span>
                             </MagicCard>
                        </div>
                    </div>
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Distribute DAARAAB Products"}
                           bodyText={"Join our network of global distributors bringing authentic Indian quality to the world."}
                           ctaText={"Apply for Distributorship"}
            />
        </div>
    );
}