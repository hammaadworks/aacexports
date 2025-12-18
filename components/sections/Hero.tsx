"use client";

import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Ripple} from "@/components/ui/ripple";
import {ArrowRight, Globe} from "lucide-react";
import { PageHeaderBadge } from "@/components/ui/PageHeaderBadge";

export function Hero() {
    return (<section
        className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-background pt-20 md:pt-0">

        <div className="relative h-[500px] w-full overflow-hidden">
            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <PageHeaderBadge icon={Globe} className="bg-secondary/50">
                        Global Exports. Built on Standards.
                    </PageHeaderBadge>

                    <h1 className="mb-6 text-4xl font-serif font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                        Powered by Experience. <br/>
                        <span className="text-primary">Driven by Quality.</span>
                    </h1>

                    <p className="mb-10 text-lg text-muted-foreground md:text-xl leading-relaxed">
                        For 30 years, we’ve supplied Stones, Steel, Electronics, Food Grains, and Dehydrated Powders
                        with one principle: <br className="hidden md:block"/>
                        <strong className="text-foreground">Performance is the promise. Consistency is the
                            proof.</strong>
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="w-full sm:w-auto font-semibold" asChild>
                            <Link href="/#contact">Send Requirement <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold" asChild>
                            <Link href="/#verticals">Explore Products</Link>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Background Ripple */}
            <Ripple mainCircleSize={100} mainCircleOpacity={0.80} color={["var(--brand-gold)", "var(--brand-green)"]}/>
        </div>
    </section>);
}