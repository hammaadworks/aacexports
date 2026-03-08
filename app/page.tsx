"use client";

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Verticals } from "@/components/sections/Verticals";
import { Quality } from "@/components/sections/Quality";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Building2 } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import Link from "next/link";
import { staticallyCDN } from "@/lib/constants";

export default function Home() {
    const { openModal } = useModal();
    
    return (
        <div className="flex flex-col gap-0">
            {/* Section 1: Hero */}
            <Hero />
            
            {/* Section 2: Trust Stats */}
            <Stats />
            
            {/* Section 3: Vision & Mission */}
            <VisionMission />

            {/* Section 4: About / Credibility */}
            <About />
            
            {/* Section 5: Trading Verticals */}
            <Verticals />

            {/* Section 5.5: Strategic Industry Solutions */}
            <section className="py-24 bg-stone-50 border-y border-stone-200/60 dark:bg-stone-950 dark:border-stone-900 overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                                Exclusive Opportunities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                                Strategic Industry <span className="text-primary italic">Solutions.</span>
                            </h2>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-sm font-light leading-relaxed">
                            Beyond standard trading, we facilitate high-value industrial acquisitions 
                            and technical scaling for our global partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Opportunity 1: Granite Quarry */}
                        <div className="group relative flex flex-col sm:flex-row gap-6 p-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-500 overflow-hidden">
                            <div className="sm:w-1/3 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden relative">
                                <img 
                                    src={`${staticallyCDN}/verticals/general/granite_1/granite_block.png`} 
                                    alt="Granite Quarry" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                                <div className="absolute bottom-3 left-3 bg-amber-500 text-[8px] font-black px-2 py-0.5 rounded-full text-stone-950">
                                    ASSET SALE
                                </div>
                            </div>
                            <div className="sm:w-2/3 flex flex-col justify-between py-2">
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                                        <Building2 className="h-4 w-4 text-amber-500" /> Jet Black Quarry (4.5 Acres)
                                    </h3>
                                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed font-light line-clamp-2">
                                        Acquire a highly profitable operational quarry in M.M. Hills. Immediate handover for serious buyers. Proven mineral richness.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    <Button 
                                        size="sm" 
                                        onClick={openModal}
                                        className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-full text-[10px] px-4"
                                    >
                                        Request Prospectus
                                    </Button>
                                    <Button 
                                        size="sm" 
                                        variant="outline" 
                                        className="rounded-full text-[10px] px-4 gap-1.5 border-stone-200 dark:border-stone-800"
                                        asChild
                                    >
                                        <Link href="/verticals/general">
                                            Asset Details <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                        </div>

                        {/* Opportunity 2: Dehydration Tech */}
                        <div className="group relative flex flex-col sm:flex-row gap-6 p-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                            <div className="sm:w-1/3 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden relative">
                                <img 
                                    src={`${staticallyCDN}/verticals/powder/powder_1/turmeric.png`} 
                                    alt="Dehydration Technology" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                                <div className="absolute bottom-3 left-3 bg-blue-500 text-[8px] font-black px-2 py-0.5 rounded-full text-white">
                                    TECH ADVISORY
                                </div>
                            </div>
                            <div className="sm:w-2/3 flex flex-col justify-between py-2">
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                                        <Zap className="h-4 w-4 text-blue-500" /> Profitable Dehydration Tech
                                    </h3>
                                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed font-light line-clamp-2">
                                        Scale with 2+ years of expertise. Turn perishable raw produce into high-demand Banana & Veg powders. Profitable business model.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    <Button 
                                        size="sm" 
                                        onClick={openModal}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-[10px] px-4"
                                    >
                                        Scale My Business
                                    </Button>
                                    <Button 
                                        size="sm" 
                                        variant="outline" 
                                        className="rounded-full text-[10px] px-4 gap-1.5 border-stone-200 dark:border-stone-800"
                                        asChild
                                    >
                                        <Link href="/verticals/powder">
                                            Tech Specs <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 6: Quality & Compliance */}
            <Quality />
            
            {/* Section 8: Lead Conversion CTA */}
            <ContactCTA />
        </div>
    );
}
