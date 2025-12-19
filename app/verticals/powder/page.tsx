"use client";

import React, {useRef} from "react";
import {Button} from "@/components/ui/button";
import {Atom, Factory, FlaskConical, Leaf, Sprout, Zap} from "lucide-react";
import {motion, useScroll, useTransform} from "motion/react";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {FeatureRow} from "@/components/FeatureRow";
import {MagicCard} from "@/components/ui/magic-card";

export default function PowderPage() {
    const {openModal} = useModal();
    const targetRef = useRef<HTMLDivElement>(null);

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
                        <PageHeaderBadge icon={Atom}>Clean Label Ingredients</PageHeaderBadge>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]">
                            Concentrated Goodness.<br/>
                            <span className="text-[#8B9D77] italic">Industrial Scale.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                            Revolutionizing food ingredients with 100% natural dehydrated vegetable and fruit powders.
                            Reliable, Flavor-Rich, and Industry-Ready.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-[#2D3028] text-white hover:bg-[#3E4236] rounded-full px-8 h-12" onClick={openModal}>
                                Request Specification Sheet
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
                            <h3 className="font-bold text-lg mb-2">100% Natural</h3>
                            <p className="text-sm text-muted-foreground">Sourced from fresh produce and dehydrated at low temperatures to retain color and nutrients.</p>
                        </div>
                        <div className="px-4">
                             <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                                <Factory size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Industry Ready</h3>
                            <p className="text-sm text-muted-foreground">Available in bulk packing (10kg/20kg) with consistent mesh size and moisture control.</p>
                        </div>
                        <div className="px-4">
                             <div className="mx-auto h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 mb-4">
                                <Zap size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">High Potency</h3>
                            <p className="text-sm text-muted-foreground">Concentrated flavor profiles that mean you use less to achieve the desired taste.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Deep Dive */}
            <section className="py-24 container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D3028]">Product Portfolio</h2>
                    <p className="text-lg text-muted-foreground">
                        We specialize in producing powders that serve as essential ingredients for the global food processing and spice industries.
                    </p>
                </div>

                <FeatureRow
                    title="Veg & Spice Powders"
                    description="Our premium range includes Onion, Garlic, and Red Chili powders. Processed in hygienic conditions, they are tailored to meet large-scale industrial requirements for ready-to-mix soups, seasonings, and sauces."
                    tags={["Onion Powder", "Garlic Powder", "Red Chilli Powder", "Turmeric"]}
                    imageAlign="right"
                    color="bg-red-500"
                />

                <FeatureRow
                    title="Fruit & Superfood Powders"
                    description="Natural Banana powder and Moringa powder. Ideal for nutraceuticals, health mixes, and baby food. We ensure nutritional integrity and clean-label purity across all our products."
                    tags={["Banana Powder", "Moringa Powder", "Natural Sweetener", "Superfoods"]}
                    imageAlign="left"
                    color="bg-green-600"
                />
            </section>

             {/* Application Areas / Process */}
            <section className="py-24 bg-[#E8E6E1] relative overflow-hidden">
                 <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6 text-[#2D3028]">Applications</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm"><FlaskConical size={20}/></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Food Processing</h4>
                                        <p className="text-muted-foreground">Instant noodles, ready-to-eat meals, and snacks.</p>
                                    </div>
                                </li>
                                 <li className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm"><Factory size={20}/></div>
                                    <div>
                                        <h4 className="font-bold text-lg">HoReCa</h4>
                                        <p className="text-muted-foreground">Consistent flavor bases for hotels, restaurants, and catering.</p>
                                    </div>
                                </li>
                                 <li className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm"><Atom size={20}/></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Nutraceuticals</h4>
                                        <p className="text-muted-foreground">Natural supplements and health drink mixes.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="relative">
                             <MagicCard className="p-8 bg-white border-none shadow-xl flex flex-col items-center justify-center text-center">
                                <h3 className="text-2xl font-serif font-bold mb-8">Our Process</h3>
                                <div className="flex flex-col gap-4 items-center w-full">
                                    <div className="w-full max-w-xs p-4 border rounded-xl bg-green-50 text-green-800 font-medium">Fresh Harvest</div>
                                    <div className="h-6 w-px bg-gray-300"></div>
                                    <div className="w-full max-w-xs p-4 border rounded-xl bg-blue-50 text-blue-800 font-medium">Washing & Sorting</div>
                                    <div className="h-6 w-px bg-gray-300"></div>
                                    <div className="w-full max-w-xs p-4 border rounded-xl bg-orange-50 text-orange-800 font-medium">Dehydration</div>
                                    <div className="h-6 w-px bg-gray-300"></div>
                                    <div className="w-full max-w-xs p-4 border rounded-xl bg-purple-50 text-purple-800 font-medium">Pulverization</div>
                                </div>
                             </MagicCard>
                        </div>
                    </div>
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Private Label Services"}
                           bodyText={"Launch your own brand of spices or health mixes. We offer options for private labeling, enabling businesses to grow confidently with trusted ingredients."}
                           ctaText={"Start Private Labeling"}
            />
        </div>
    );
}