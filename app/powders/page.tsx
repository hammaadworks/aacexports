import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap } from "lucide-react";

const products = [
  "Onion Powder (Red/White)",
  "Garlic Powder",
  "Red Chilli Powder",
  "Green Chilli Powder",
  "Banana Powder",
  "Moringa Powder",
];

export default function PowdersPage() {
  return (
    <div className="pt-24 pb-12">
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Dehydrated Powders</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pure. Potent. Professionally Processed.
        </p>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
             <p className="text-lg text-muted-foreground">
                Premium food ingredients for industrial and private-label use. 
                Clean-label, potent ingredients for industrial, culinary and private label brands.
            </p>
        </div>

        <SectionTitle title="Product Range" className="mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, i) => (
                <Card key={i} className="hover:bg-secondary/20 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Zap className="text-orange-500 h-6 w-6" />
                        <CardTitle className="text-lg">{item}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </section>

       <section className="container mx-auto px-6 text-center">
        <Button size="lg" asChild>
            <Link href="/#contact">Request Spec Sheets</Link>
        </Button>
      </section>
    </div>
  );
}