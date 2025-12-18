"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {BorderBeam} from "@/components/ui/border-beam";
import {ArrowRight} from "lucide-react";

export interface CustomContactProps {
    headingText?: string;
    bodyText?: string;
    ctaText?: string;
    ctaLink?: string;
    onClick?: () => void;
}

const CustomContact: React.FC<CustomContactProps> = ({
                                                         headingText, bodyText, ctaText, ctaLink, onClick
                                                     }) => {
    return (<section className="container mx-auto px-6">
            <div
                className="relative bg-secondary/90 border border-border/50 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/aacexports/assets/img/cta-bg.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <BorderBeam size={350} duration={15} delay={5} colorFrom="#EAB308" colorTo="#ffffff"/>

                <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-white">
                        {headingText}
                    </h3>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        {bodyText}
                    </p>

                    {ctaLink ? (<Link href={ctaLink}>
                            <Button
                                size="lg"
                                className="rounded-full bg-white text-secondary hover:bg-primary hover:text-white font-semibold h-12 px-8 group"
                            >
                                {ctaText} <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-white"/>
                            </Button>
                        </Link>) : (<Button
                            size="lg"
                            className="rounded-full bg-white text-secondary hover:bg-primary hover:text-white font-semibold h-12 px-8 group"
                            onClick={onClick}
                        >
                            {ctaText} <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-white"/>
                        </Button>)}
                </div>
            </div>
        </section>);
};

export default CustomContact;