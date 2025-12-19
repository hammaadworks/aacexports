"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {Atom, Factory, FlaskConical, Leaf, Sprout, Zap} from "lucide-react";
import {motion} from "motion/react";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {Ripple} from "@/components/ui/ripple";
import {MagicCard} from "@/components/ui/magic-card";
import {BlurFade} from "@/components/ui/blur-fade";

export default function PowderPage() {
    const {openModal} = useModal();

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
             {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <Ripple mainCircleSize={200} numCircles={8} className="-z-10 opacity-30" />
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    className="relative z-10 max-w-4xl"
                >
                    <PageHeaderBadge icon={Atom}>Clean Label Ingredients</PageHeaderBadge>
                    <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        Concentrated Goodness.<br/>
                        Industrial Scale.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        100% natural dehydrated vegetable and fruit powders. No fillers, no preservatives—just pure, potent ingredients
                        for the global food processing and spice industries.
                    </p>

                    <Button size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20" onClick={openModal}>
                        Request Specification Sheet
                    </Button>
                </motion.div>
            </section>

             {/* Value Prop Cards */}
            <section className="container mx-auto px-6 -mt-20 relative z-20 mb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    <MagicCard className="p-8 flex flex-col items-center text-center gap-4 bg-background/80 backdrop-blur border shadow-xl">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                            <Leaf size={28} />
                        </div>
                        <h3 className="font-bold text-xl">100% Natural</h3>
                        <p className="text-muted-foreground text-sm">Sourced from fresh produce and dehydrated at low temperatures to retain color and nutrients.</p>
                    </MagicCard>
                    <MagicCard className="p-8 flex flex-col items-center text-center gap-4 bg-background/80 backdrop-blur border shadow-xl">
                         <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                            <Factory size={28} />
                        </div>
                        <h3 className="font-bold text-xl">Industry Ready</h3>
                        <p className="text-muted-foreground text-sm">Available in bulk packing (10kg/20kg) with consistent mesh size and moisture control.</p>
                    </MagicCard>
                    <MagicCard className="p-8 flex flex-col items-center text-center gap-4 bg-background/80 backdrop-blur border shadow-xl">
                         <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600">
                            <Zap size={28} />
                        </div>
                        <h3 className="font-bold text-xl">High Potency</h3>
                        <p className="text-muted-foreground text-sm">Concentrated flavor profiles that mean you use less to achieve the desired taste.</p>
                    </MagicCard>
                </div>
            </section>

            {/* Product Catalog Grid */}
            <section className="container mx-auto px-6 mb-24">
                <div className="mb-12">
                     <h2 className="text-3xl font-bold mb-4">Product Portfolio</h2>
                     <p className="text-muted-foreground">Tailored for ready-to-mix soups, seasonings, sauces, and health beverages.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {title: "Onion Powder", subtitle: "Red / White / Pink", desc: "Essential base for soups and sauces.", color: "bg-red-100 text-red-700"},
                        {title: "Garlic Powder", subtitle: "Dehydrated Clove", desc: "High pungency for seasoning mixes.", color: "bg-stone-100 text-stone-700"},
                        {title: "Banana Powder", subtitle: "Raw / Ripe", desc: "Natural sweetener and thickener for baby food.", color: "bg-yellow-100 text-yellow-700"},
                        {title: "Moringa Powder", subtitle: "Superfood", desc: "Nutrient-dense additive for health mixes.", color: "bg-green-100 text-green-700"},
                        {title: "Chilli Powder", subtitle: "Heat Level Variations", desc: "Customized SHU levels for different cuisines.", color: "bg-red-100 text-red-600"},
                        {title: "Turmeric Powder", subtitle: "High Curcumin", desc: "Vibrant color and medicinal benefits.", color: "bg-orange-100 text-orange-700"},
                    ].map((item, i) => (
                         <BlurFade key={i} delay={i * 0.1} inView>
                            <div className="group border rounded-2xl p-6 hover:bg-muted/50 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.color}`}>
                                        {item.subtitle}
                                    </div>
                                    <Sprout size={18} className="text-muted-foreground group-hover:text-primary transition-colors"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* Application Areas */}
            <section className="py-24 bg-secondary/20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Applications</h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary h-fit"><FlaskConical size={20}/></div>
                                <div>
                                    <h4 className="font-bold text-lg">Food Processing</h4>
                                    <p className="text-muted-foreground">Instant noodles, ready-to-eat meals, and snacks.</p>
                                </div>
                            </li>
                             <li className="flex gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary h-fit"><Factory size={20}/></div>
                                <div>
                                    <h4 className="font-bold text-lg">HoReCa</h4>
                                    <p className="text-muted-foreground">Consistent flavor bases for hotels, restaurants, and catering.</p>
                                </div>
                            </li>
                             <li className="flex gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary h-fit"><Atom size={20}/></div>
                                <div>
                                    <h4 className="font-bold text-lg">Nutraceuticals</h4>
                                    <p className="text-muted-foreground">Natural supplements and health drink mixes.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-full min-h-[400px] bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center">
                         {/* Abstract Process Visualization */}
                         <div className="text-center">
                            <h3 className="text-2xl font-serif font-bold mb-8">Our Process</h3>
                            <div className="flex flex-col gap-4 items-center">
                                <div className="w-48 p-4 border rounded-xl bg-green-50">Fresh Harvest</div>
                                <div className="h-8 w-px bg-gray-300"></div>
                                <div className="w-48 p-4 border rounded-xl bg-blue-50">Washing & Sorting</div>
                                <div className="h-8 w-px bg-gray-300"></div>
                                <div className="w-48 p-4 border rounded-xl bg-orange-50">Dehydration</div>
                                <div className="h-8 w-px bg-gray-300"></div>
                                <div className="w-48 p-4 border rounded-xl bg-purple-50">Pulverization</div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Private Label Services"}
                           bodyText={"Launch your own brand of spices or health mixes. We handle the sourcing, processing, and packaging for you."}
                           ctaText={"Start Private Labeling"}
            />
        </div>
    );
}