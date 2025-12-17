import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Map, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const markets = ["Middle East", "Europe", "Africa", "Southeast Asia", "The Americas"];

export function MarketsCTA() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle 
            title="Serving 25+ International Markets" 
            className="mb-8"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {markets.map((market, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm">
                    {market}
                </span>
            ))}
        </div>

        <div className="max-w-3xl mx-auto bg-background border border-border shadow-lg rounded-2xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
             
             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Source with Confidence?</h3>
             <p className="text-muted-foreground mb-8 text-lg">
                Send your requirements and receive a tailored quote within 24 hours.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8" asChild>
                    <Link href="/#contact">Get A Quote Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8" asChild>
                    <Link href="mailto:info@aacexports.com">Email Us</Link>
                </Button>
             </div>
        </div>
      </div>
    </section>
  );
}
