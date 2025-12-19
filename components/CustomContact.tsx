"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {BorderBeam} from "@/components/ui/border-beam";
import {Particles} from "@/components/ui/particles";
import {SparklesText} from "@/components/ui/sparkles-text";
import {ConfettiButton} from "@/components/ui/confetti";
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
    return (<section className="container mx-auto px-6 py-12">
            <div
                className="relative bg-secondary/90 border border-border/50 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <BorderBeam size={350} duration={15} delay={5} colorFrom="#EAB308" colorTo="#ffffff"/>
                <Particles
                    className="absolute inset-0"
                    quantity={20}
                    ease={100}
                    color={["#EAB308", "#FFFFFF"]}
                    refresh={false}
                />

                <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-white">
                        <SparklesText 
                            text={headingText || "Get in Touch"} 
                            className="text-3xl font-serif font-bold text-white" 
                            colors={{first: "#EAB308", second: "#FFFFFF"}} 
                            sparklesCount={5}
                        />
                    </h3>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                        {bodyText}
                    </p>

                    {ctaLink ? (<Link href={ctaLink}>
                            <ConfettiButton
                                size="lg"
                                className="rounded-full bg-white text-secondary hover:bg-primary hover:text-white font-semibold h-12 px-8 group"
                                options={{ colors: ["#EAB308", "#FFFFFF", "#303F2D"] }}
                            >
                                {ctaText} <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-white"/>
                            </ConfettiButton>
                        </Link>) : (<ConfettiButton
                            size="lg"
                            className="rounded-full bg-white text-secondary hover:bg-primary hover:text-white font-semibold h-12 px-8 group"
                            onClick={onClick}
                            options={{ colors: ["#EAB308", "#FFFFFF", "#303F2D"] }}
                        >
                            {ctaText} <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-white"/>
                        </ConfettiButton>)}
                </div>
            </div>
        </section>);
};

export default CustomContact;