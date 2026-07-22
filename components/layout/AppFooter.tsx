"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {Linkedin, Mail, MapPin, MessageCircle, Phone} from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const bannerItems = [
    {
        title: "Rare Asset: 4.5 Acre Jet Black Quarry",
        description: "Acquire a highly profitable operational quarry in M.M. Hills. Serious buyers only.",
        buttonText: "View Asset"
    },
    {
        title: "Profit from Dehydration Tech",
        description: "Scale with 2+ years of expertise. Turn perishables to high-value powders.",
        buttonText: "Get Consultancy"
    }
];

export function AppFooter() {
    const { openModal } = useModal();
    const [bannerIndex, setBannerIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBannerIndex((prev) => (prev + 1) % bannerItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="bg-secondary text-white border-t border-primary/20 pt-12 pb-8">
            <div className="container mx-auto px-6">
                {/* Special Opportunity Banner - Top of Footer */}
                <div className="mb-16 relative overflow-hidden rounded-2xl bg-amber-500/5 border border-amber-500/20 min-h-[120px] md:min-h-[140px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={bannerIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full p-8 group"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                                        <span className="text-amber-500 text-lg font-bold">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-white mb-1 tracking-wide uppercase">
                                            {bannerItems[bannerIndex].title}
                                        </h4>
                                        <p className="text-stone-400 text-sm font-light">
                                            {bannerItems[bannerIndex].description}
                                        </p>
                                    </div>
                                </div>
                                <Button 
                                    onClick={openModal} 
                                    className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-black px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all shadow-[0_5px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)] h-auto shrink-0"
                                >
                                    {bannerItems[bannerIndex].buttonText}
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-full bg-amber-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        {/* Logo / Name */}
                        <div className="flex flex-col select-none mb-6">
                            <div className="flex flex-col items-center">
                                {/* Main Title */}
                                <h2 className="text-2xl font-serif text-primary tracking-tight text-center leading-none font-medium">
                                    Al Ahmad Continental
                                </h2>
                                
                                {/* Subtitle Container with Lines */}
                                <div className="flex items-center gap-3 w-full max-w-[260px] my-2">
                                    <div className="h-[1px] bg-primary flex-grow opacity-60"></div>
                                    <span className="text-white text-xs tracking-[0.3em] font-sans font-medium uppercase">
                                        Exports
                                    </span>
                                    <div className="h-[1px] bg-primary flex-grow opacity-60"></div>
                                </div>
                                
                                {/* URL */}
                                <a href="https://aacexports.in" className="text-primary text-xs tracking-[0.2em] hover:text-white transition-colors">
                                    aacexports.in
                                </a>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm text-white/80 leading-relaxed max-w-xs font-light">
                            Reliable sourcing. Professional execution. Long‑term partnerships.
                        </p>

                        {/* Address */}
                        <div className="flex items-start gap-4 text-sm text-white/90">
                            <MapPin size={20} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                            <a 
                                href="https://maps.app.goo.gl/vyeGBbU15fQinwE19" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors leading-relaxed font-light"
                            >
                                #579, 32nd 'D' cross<br/>
                                10th main road, 4th Block<br/>
                                Jayanagar, Bangalore - 560011<br/>
                                Karnataka, India.
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80 font-light">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/#verticals" className="hover:text-primary transition-colors">Verticals</Link></li>
                            <li><Link href="/catalogs" className="hover:text-primary transition-colors">Catalogs</Link></li>
                            <li><Link href="/certificates" className="hover:text-primary transition-colors">Certificates</Link></li>
                            <li><Link href="/brandkit" className="hover:text-primary transition-colors">Brand Kit</Link></li>
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Our Verticals
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80 font-light">
                            <li><Link href="/verticals/general" className="hover:text-primary transition-colors">Natural Stones</Link></li>
                            <li><Link href="/verticals/food" className="hover:text-primary transition-colors">Fresh Produce</Link></li>
                            <li><Link href="/verticals/powder" className="hover:text-primary transition-colors">Dehydrated Powders</Link></li>
                            <li><button onClick={openModal} className="text-amber-500 font-semibold flex items-center gap-2 group/quarry hover:text-amber-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-left">
                                Granite Quarry Sale
                                <span className="bg-amber-500/10 text-[8px] px-1.5 py-0.5 rounded-full border border-amber-500/20 group-hover/quarry:bg-amber-500/20">SPECIAL</span>
                            </button></li>
                            <li><button onClick={openModal} className="text-amber-500 font-semibold flex items-center gap-2 group/dehydration hover:text-amber-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-left">
                                Dehydration Expertise
                                <span className="bg-amber-500/10 text-[8px] px-1.5 py-0.5 rounded-full border border-amber-500/20 group-hover/dehydration:bg-amber-500/20">SPECIAL</span>
                            </button></li>
                        </ul>
                    </div>

                    {/* Contact Links */}
                    <div id="contact" className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Connect With Us
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <MapPin size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://maps.app.goo.gl/vyeGBbU15fQinwE19" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">Find us on Map</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Phone size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="tel:+919986217867" className="group-hover:text-primary transition-colors font-light">+91 9986217867</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Mail size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="mailto:sales@aacexports.in" className="group-hover:text-primary transition-colors font-light">sales@aacexports.in</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Linkedin size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://www.linkedin.com/in/al-ahmed-continental-1826791b0" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">LinkedIn</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <MessageCircle size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://wa.me/919986217867" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
                    <p>© {new Date().getFullYear()} Al Ahmad Continental Exports. All rights reserved.</p>
                    <div className="flex gap-8 items-center">
                        <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/brandkit" className="hover:text-primary transition-colors">Brand Kit</Link>
                        <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
