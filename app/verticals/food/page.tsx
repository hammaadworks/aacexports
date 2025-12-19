"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {CheckCircle2, Leaf, Microscope, PackageCheck, Truck, Wheat,} from "lucide-react";
import {useModal} from "@/lib/modal-context";
import CustomContact from "@/components/CustomContact";
import {MagicCard} from "@/components/ui/magic-card";
import {NumberTicker} from "@/components/ui/number-ticker";
import {FeatureRow} from "@/components/FeatureRow";
import {VerticalHero, VerticalPageWrapper} from "@/app/verticals/layout";

export default function FoodTradingPage() {
    const {openModal} = useModal();

    return (<VerticalPageWrapper>
            <VerticalHero
                icon={Wheat}
                badgeText="DAARAAB"
                title={<>
                    Crafted Origins.
                    <br/>
                    <span className="text-[#8B9D77] italic">Global Distinction.</span>
                </>}
                description={<>
                    Operating under the distinguished brand <strong>DAARAAB</strong>, we
                    bring over three decades of excellence in exporting premium
                    agricultural commodities. From the paddy fields of India to tables
                    worldwide.
                </>}
            >
                <Button
                    size="lg"
                    className="bg-[#2D3028] text-white hover:bg-[#3E4236] rounded-full px-8 h-12"
                    onClick={openModal}
                >
                    Request Product List
                </Button>
            </VerticalHero>

            {/* Trust Indicators / Brand Story */}
            <section className="py-12 border-y bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-gray-100/50">
                        <div className="px-4">
                            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-3">
                                <Leaf size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-[#2D3028]">Sustainably Sourced</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Directly from farmers employing sustainable agricultural practices.
                            </p>
                        </div>
                        <div className="px-4">
                            <div className="mx-auto h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 mb-3">
                                <Microscope size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-[#2D3028]">Lab Tested</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Every batch undergoes rigorous quality checks for residue and purity.
                            </p>
                        </div>
                        <div className="px-4">
                            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-3">
                                <Truck size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-[#2D3028]">Export Ready</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Compliant with FDA, FSSAI, and specific destination country regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Deep Dive */}
            <section className="py-24 container mx-auto px-6">
                <FeatureRow
                    title="Basmati & Non-Basmati Rice"
                    description="Our rice is aged to perfection, ensuring the authentic aroma and fluffy texture that DAARAAB is known for. We offer 1121 Steam, Sella, and Ponni varieties, sortex cleaned and graded."
                    tags={["1121 Basmati", "Sona Masoori", "Sortex Cleaned", "Aged 2 Years",]}
                    imageAlign="right"
                    color="bg-yellow-500"
                />

                <FeatureRow
                    title="G4 Green Chilli Fresh"
                    description="Handpicked at peak ripeness for maximum heat and crispness. Our G4 chillies are packed in ventilated cartons to maintain freshness during transit to markets in UAE, Saudi Arabia, and Bahrain."
                    tags={["High Pungency", "Ventilated Box", "3.8kg Net Wt", "Crisp Texture",]}
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
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Packaging that Preserves.
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                We understand that packaging is as critical as the product itself.
                                Our export packaging is designed to withstand long transit times
                                while maintaining humidity and temperature levels.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400"/>{" "}
                                    <span>Ventilated Corrugated Cartons for Fresh Produce</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400"/>{" "}
                                    <span>Multi-layer Poly Pouches for Spices</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400"/>{" "}
                                    <span>Jute & PP Bags for Rice (5kg - 50kg)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <MagicCard
                                gradientColor="#3E4236"
                                className="bg-white/5 border-white/10 p-6 flex flex-col items-center justify-center aspect-square"
                            >
                                <PackageCheck size={40} className="mb-4 text-green-400"/>
                                <span className="font-bold">Custom Labels</span>
                            </MagicCard>
                            <MagicCard
                                gradientColor="#3E4236"
                                className="bg-white/5 border-white/10 p-6 flex flex-col items-center justify-center aspect-square"
                            >
                                <Truck size={40} className="mb-4 text-green-400"/>
                                <span className="font-bold">Palletized</span>
                            </MagicCard>
                        </div>
                    </div>
                </div>
            </section>

            <CustomContact
                onClick={openModal}
                headingText={"Represent DAARAAB Globally"}
                bodyText={"Join us as an authorized country representative for DAARAAB food products."}
                ctaText={"Represent DARAAB"}
            />
        </VerticalPageWrapper>);
}
