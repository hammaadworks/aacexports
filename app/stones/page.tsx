import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers } from "lucide-react";

export default function StonesPage() {
  return (
    <div className="pt-24 pb-12">
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Natural Stones & Granite</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Timeless materials. Modern precision.
        </p>
      </section>

      <section className="container mx-auto px-6 mb-16 text-center">
        <div className="bg-secondary/10 rounded-2xl p-12 border border-border">
            <Layers className="h-16 w-16 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-6">Premium Sourcing</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Premium granite, marble, and sandstone — export-finished with accuracy. 
                We handle the sourcing, processing, and logistics to deliver the finest natural stones to your doorstep.
            </p>
            <Button size="lg" asChild>
                <Link href="/#contact">Download Catalog</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}