"use client";

import React, {useRef} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, ArrowRight, Building2, CheckCircle2, Globe, Layers, ShieldCheck, Zap} from "lucide-react";
import {motion, useScroll} from "motion/react";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {NumberTicker} from "@/components/ui/number-ticker";
import {FeatureRow} from "@/components/FeatureRow";
import {MagicCard} from "@/components/ui/magic-card";

export default function GeneralTradingPage() {
    const {openModal} = useModal();
    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: targetRef, offset: ["start end", "end start"],
    });

    return (<div className="relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden" ref={targetRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                 style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <PageHeaderBadge icon={Building2}>Construction & Materials</PageHeaderBadge>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]">
                            Building the World,<br/>
                            <span className="text-[#8B9D77] italic">One Block at a Time.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                            Since 1996, Al Ahmed Continental has been a pillar of reliability. We quarry, process, and
                            export
                            premium Indian Natural Stones and Structural Steel to global infrastructure projects.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg"
                                    className="bg-primary text-white hover:bg-secondary rounded-full px-8 h-12"
                                    onClick={openModal}>
                                Partner With Us <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section / Trust Indicators */}
            <section className="py-12 border-y bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={1996}/>
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={30}/>+
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Countries
                                Served</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={500}/>+
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects
                                Completed</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">100%</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">IEC
                                Compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Natural Stones Section */}
            <section id="stones" className="py-24 container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-[#8B9D77] font-bold tracking-wider uppercase text-sm">Our Heritage</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6 text-[#2D3028]">Natural Stones &
                        Granite</h2>
                    <p className="text-lg text-muted-foreground">
                        We are pioneers in the Indian stone industry. From quarrying rough blocks to crafting intricate
                        monuments, our expertise covers the entire value chain.
                    </p>
                </div>

                <FeatureRow
                    title="Granite & Marble Slabs"
                    description="We operate quarries for rough dimensional blocks and process them into high-gloss polished slabs and tiles. Our varieties include Kuppam Green, Red Multicolour, Paradiso, Absolute Black, and Black Galaxy."
                    tags={["Kuppam Green", "Black Galaxy", "Polished Slabs", "Italian Marble"]}
                    imageAlign="right"
                    color="bg-stone-500"
                />

                <FeatureRow
                    title="Monuments & Landscaping"
                    description="Specialized finishing for global projects including Flamed & Bush hammered paving slabs, Kerbstones, Pollers, Balls, Steps, and Cobblestones. Perfect for city centers, airports, and walkways."
                    tags={["Monuments", "Cobblestones", "Kerbstones", "Bush Hammered"]}
                    imageAlign="left"
                    color="bg-stone-700"
                />
            </section>

            {/* Iron & Steel Section */}
            <section className="py-24 bg-[#E8E6E1] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <PageHeaderBadge icon={Anvil}>Heavy Industry</PageHeaderBadge>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-[#2D3028]">Iron &
                            Steel</h2>
                        <p className="text-lg text-muted-foreground">
                            The backbone of infrastructure. We source TMT bars and structural steel from India's most
                            reputed manufacturers, ensuring high ductility and earthquake resistance.
                        </p>
                    </div>

                    <FeatureRow
                        title="TMT Steel Bars"
                        description="High-quality TMT bars in Fe500 and Fe550 grades. Sourced from verified manufacturers ensuring compliance with IS standards. Suitable for critical infrastructure like bridges, dams, and high-rise buildings."
                        tags={["Fe500 / Fe550", "IS Standards", "High Ductility", "Earthquake Resistant"]}
                        imageAlign="right"
                        color="bg-orange-700"
                    />

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <MagicCard className="p-8 bg-white/50 border-white/20">
                            <ShieldCheck className="w-10 h-10 mb-4 text-[#2D3028]"/>
                            <h3 className="font-bold text-lg mb-2">BIS Certified</h3>
                            <p className="text-sm text-muted-foreground">All products meet Bureau of Indian Standards
                                (BIS) IS 1786:2008.</p>
                        </MagicCard>
                        <MagicCard className="p-8 bg-white/50 border-white/20">
                            <Layers className="w-10 h-10 mb-4 text-[#2D3028]"/>
                            <h3 className="font-bold text-lg mb-2">Diverse Forms</h3>
                            <p className="text-sm text-muted-foreground">Billets, Structural Steel, Angles, Channels,
                                and Beams.</p>
                        </MagicCard>
                        <MagicCard className="p-8 bg-white/50 border-white/20">
                            <Globe className="w-10 h-10 mb-4 text-[#2D3028]"/>
                            <h3 className="font-bold text-lg mb-2">Global Logistics</h3>
                            <p className="text-sm text-muted-foreground">Efficient handling of bulk cargo and container
                                shipments.</p>
                        </MagicCard>
                    </div>
                </div>
            </section>

            {/* Electronics Section - Keep brief but styled */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <PageHeaderBadge icon={Zap}>Technology</PageHeaderBadge>
                        <h2 className="text-4xl font-serif font-bold mt-4 mb-6 text-[#2D3028]">Electricals &
                            Electronics</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Powering industries with reliable components. We trade in high-grade electrical distribution
                            products,
                            control systems, and industrial electronics from certified global brands.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-600"/> <span>Switchgears & MCBs</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-600"/> <span>Industrial Cabling Solutions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-600"/> <span>Automation Control Panels</span>
                            </li>
                        </ul>
                        <Button className="mt-8 bg-[#2D3028] text-white rounded-full" onClick={openModal}>Request
                            Catalog</Button>
                    </div>
                    <div
                        className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                        <Zap size={100} className="text-white/20"/>
                        <div
                            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                    </div>
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Ready to Source?"}
                           bodyText={"Whether it's a single container of granite or a bulk shipment of TMT bars, we ensure seamless logistics and competitive pricing."}
                           ctaText={"Get a Quote Today"}
            />
        </div>);
}