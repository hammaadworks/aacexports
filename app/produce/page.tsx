import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf, Apple } from "lucide-react";

export default function ProducePage() {
  return (
    <div className="pt-24 pb-12">
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">DAARAAB — Fresh Produce</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh Produce for Global Markets. Farm-to-port sourcing with export-standard grading.
        </p>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <SectionTitle title="Key Exports" className="mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "G4 Green Chilli", icon: Leaf },
                { title: "Red Onions", icon: Leaf },
                { title: "Pomegranates", icon: Apple },
                { title: "Seasonal Fruit", icon: Apple }
            ].map((item, i) => (
                <Card key={i} className="flex flex-col items-center text-center p-6 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                        <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                </Card>
            ))}
        </div>
      </section>

      <section className="container mx-auto px-6 text-center">
        <div className="bg-primary/5 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">Freshness Guaranteed</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our logistics are optimized for perishables, ensuring that your produce arrives fresh and ready for market.
            </p>
            <Button size="lg" asChild>
                <Link href="/#contact">Inquire About Availability</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}