import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Wheat, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const verticals = [
  {
    title: "General Trading",
    description: "Premium granite, marble, sandstone, iron & steel, and electronics.",
    icon: Package,
    href: "/steel", // Redirecting to steel as a primary example, or could be a generic page
    details: ["Stones", "Iron & Steel", "Electrical & Electronics"],
  },
  {
    title: "Food Stuff Trading",
    description: "Basmati & Non-Basmati rice, graded, polished, and fully export-ready.",
    icon: Wheat,
    href: "/produce",
    details: ["Rice", "Commodity Catalog", "Fresh Produce"],
  },
  {
    title: "Dehydrated Powders",
    description: "Clean-label, potent ingredients for industrial and culinary brands.",
    icon: Zap,
    href: "/powders",
    details: ["Onion & Garlic", "Chilli Powders", "Banana & Moringa"],
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <SectionTitle 
            title="Our Trading Verticals" 
            subtitle="Three divisions. One commitment: consistent international standards."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((item, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <item.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="text-base mt-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group" asChild>
                    <Link href={item.href}>
                        Explore Vertical <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
