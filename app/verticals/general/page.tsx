"use client";

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, ArrowRight, Building2, CheckCircle2, Globe, Hammer, Layers, ShieldCheck, Zap} from "lucide-react";
import {motion} from "motion/react";
import {MagicCard} from "@/components/ui/magic-card";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {BentoCard, BentoGrid} from "@/components/ui/bento-grid";
import {Particles} from "@/components/ui/particles";
import {NumberTicker} from "@/components/ui/number-ticker";
import {BorderBeam} from "@/components/ui/border-beam";

// --- Data ---

const stoneFeatures = [
    {
        name: "Quarry to Port",
        description: "End-to-end control from rough block quarrying to final polished slab export.",
        Icon: Hammer,
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 opacity-20"/>,
    },
    {
        name: "Diverse Palette",
        description: "Kuppam Green, Red Multicolour, Paradiso, Absolute Black, and Black Galaxy.",
        Icon: Layers,
        className: "col-span-3 lg:col-span-2",
        href: "#",
        cta: "View Catalog",
        background: <div className="absolute inset-0 bg-gradient-to-br from-stone-500 to-stone-800 opacity-10"/>,
    },
    {
        name: "Custom Finishes",
        description: "High Gloss Polish, Flamed, Bush Hammered, and Leather finishes available.",
        Icon: CheckCircle2,
        className: "col-span-3 lg:col-span-2",
        href: "#",
        cta: "See Samples",
        background: <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-orange-200 opacity-20"/>,
    },
    {
        name: "Global Projects",
        description: "Supplying monuments, kerbstones, and cladding for airports, plazas, and city centers worldwide.",
        Icon: Globe,
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "View Portfolio",
        background: <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-20"/>,
    },
];

const steelSpecs = [
    {label: "Grades", value: "Fe500, Fe550, Fe500D"},
    {label: "Standards", value: "IS 1786:2008 (BIS Certified)"},
    {label: "Forms", value: "TMT Bars, Structural Steel, Billets"},
    {label: "Applications", value: "High-rise, Bridges, Dams, Industrial"},
];

export default function GeneralTradingPage() {
    const {openModal} = useModal();

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} ease={80} color="#000000" refresh/>
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <PageHeaderBadge icon={Building2}>Infrastructure & Materials</PageHeaderBadge>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tight">
                            Building the World,<br/>
                            <span className="text-primary">One Block at a Time.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                            Since 1996, Al Ahmed Continental has been a pillar of reliability in the export of premium
                            Natural Stones, Structural Steel, and Industrial Electronics. We don't just trade; we deliver trust.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base" onClick={openModal}>
                                Partner With Us <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base"
                                    onClick={() => document.getElementById('stones')?.scrollIntoView({behavior: 'smooth'})}>
                                Explore Verticals
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-primary">
                                <NumberTicker value={1996} />
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-primary">
                                <NumberTicker value={30} />+
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Countries Served</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-primary">
                                <NumberTicker value={500} />+
                            </p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Completed</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-primary">100%</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Natural Stones Section */}
            <section id="stones" className="py-24 container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Heritage</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Natural Stones</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We are pioneers in the Indian stone industry. From quarrying rough blocks to crafting intricate
                        monuments, our expertise covers the entire value chain. Our stones grace airports, city centers,
                        and luxury homes across the globe.
                    </p>
                </div>

                <BentoGrid className="lg:grid-rows-2">
                    {stoneFeatures.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </section>

            {/* Iron & Steel Section */}
            <section className="py-24 bg-secondary/5 relative overflow-hidden">
                 <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background mb-6">
                                <Anvil className="mr-2 h-4 w-4"/> Heavy Industry
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Iron & Steel</h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We supply the backbone of infrastructure. Our TMT bars and structural steel products are sourced
                                from India's most reputed manufacturers, ensuring high ductility, earthquake resistance, and
                                strict adherence to IS standards.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {steelSpecs.map((spec, i) => (
                                    <div key={i} className="p-4 bg-background rounded-xl border shadow-sm">
                                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                                        <p className="font-semibold text-lg">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Button size="lg" onClick={openModal}>Request Steel Quote</Button>
                            </div>
                        </div>
                        
                        <div className="relative">
                             <MagicCard className="aspect-square flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-2xl">
                                <BorderBeam size={250} duration={12} delay={9} />
                                <Anvil size={64} className="mb-6 opacity-80" />
                                <h3 className="text-3xl font-bold mb-2">Fe550 Grade</h3>
                                <p className="text-gray-400">Superior Strength & Flexibility</p>
                                <div className="mt-8 w-full h-px bg-white/10" />
                                <div className="mt-8 grid grid-cols-2 gap-4 w-full text-sm text-left">
                                    <div>
                                        <span className="block text-gray-500">Yield Strength</span>
                                        <span className="font-mono">Min 550 N/mm²</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500">Elongation</span>
                                        <span className="font-mono">Min 14.5%</span>
                                    </div>
                                </div>
                             </MagicCard>
                        </div>
                    </div>
                </div>
            </section>

             {/* Electronics Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <PageHeaderBadge icon={Zap}>Technology</PageHeaderBadge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Electricals & Electronics</h2>
                    <p className="text-lg text-muted-foreground">
                        Powering industries with reliable components. We trade in high-grade electrical distribution products,
                        control systems, and industrial electronics from certified global brands.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {title: "Power Distribution", desc: "Switchgears, MCBs, and industrial cabling solutions."},
                        {title: "Control Systems", desc: "Automation components, relays, and panels for manufacturing units."},
                        {title: "Consumer Electronics", desc: "Bulk trading of branded electronic appliances for retail chains."},
                    ].map((item, i) => (
                        <BlurFade key={i} delay={i * 0.1} inView>
                            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 hover:shadow-lg transition-all duration-300">
                                <div className="mb-4 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Zap size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Ready to Source?"}
                           bodyText={"Whether it's a single container of granite or a bulk shipment of TMT bars, we ensure seamless logistics and competitive pricing."}
                           ctaText={"Get a Quote Today"}
            />
        </div>
    );
}