import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Verticals } from "@/components/sections/Verticals";
import { Quality } from "@/components/sections/Quality";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

            {/* Special Section: Strategic Assets / Granite Quarry */}
            <section className="py-24 bg-stone-950 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-xs font-black tracking-widest border border-amber-500/20 uppercase">
                                <Star className="h-3 w-3 fill-current" /> Strategic Investment Opportunity
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                                High-Yield <span className="text-amber-500 italic">Granite Quarry</span> for Acquisition.
                            </h2>
                            <p className="text-stone-400 text-xl font-light leading-relaxed">
                                Facilitating the sale of a prime operational asset with rich mineral deposits and established export-grade logistics. A rare turnkey entry into the Indian natural stone industry.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-full px-10 h-14" asChild>
                                    <Link href="/verticals/general">
                                        View Opportunity <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <div className="flex flex-col justify-center">
                                    <span className="text-white font-bold text-lg">Verified Prospectus</span>
                                    <span className="text-stone-500 text-sm">Available upon qualified inquiry</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full relative">
                            <div className="aspect-square max-w-lg mx-auto relative group">
                                <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative rounded-[3rem] overflow-hidden border-8 border-stone-900 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                    <img 
                                        src="https://cdn.statically.io/gh/hammaadworks/aacexports@master/public/verticals/general/granite_1/granite_block.png" 
                                        alt="Granite Quarry" 
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="text-amber-500 font-black text-sm uppercase tracking-widest mb-2">Operational Asset</div>
                                        <div className="text-white text-2xl font-serif font-bold">Premium Reserve Site</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-64 h-64 bg-stone-500/5 rounded-full blur-[100px]"></div>
            </section>
            
            {/* Section 6: Quality & Compliance */}
            <Quality />
            
            {/* Section 7: Global Markets - Removed as it is merged into Quality */}
            
            {/* Section 8: Lead Conversion CTA */}
            <ContactCTA />
        </div>
    );
}
