import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SteelPage() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Iron & Steel</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium-grade materials engineered for modern infrastructure.
        </p>
      </section>

      {/* Details */}
      <section className="container mx-auto px-6 mb-16">
        <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6">Strength. Stability. Standards You Can Rely On.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                    Al Ahmed Continental is a Bangalore-based supply and export firm specializing in Fe500 and Fe550 TMT steel bars. 
                    We support residential, commercial, and infrastructure projects with materials backed by clear specifications and consistent quality.
                </p>
                <p>
                    We source from accredited mills to ensure compliance with IS norms and suitability for RCC construction. 
                    Bulk, scheduled, and project-based supplies are supported with transparent pricing and reliable logistics.
                </p>
            </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="container mx-auto px-6 mb-16">
        <SectionTitle title="Product Portfolio" className="mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "TMT Bars", desc: "Fe500 · Fe500D · Fe550 (8mm–32mm)" },
                { title: "MS Billets", desc: "Dimensional + chemical consistency" },
                { title: "Wire Rods", desc: "For drawing, reinforcement, mesh production" },
                { title: "Structural Steel", desc: "Angles · Channels · Beams" }
            ].map((item, i) => (
                <Card key={i} className="bg-card hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Standards & Assurance */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold mb-6">Standards & Assurance</h3>
                <ul className="space-y-4">
                    {[
                        "IS 1786:2008, ASTM, BS",
                        "Project-based or scheduled procurement",
                        "Break-bulk or containerized shipping",
                        "Optional third-party inspection (SGS / BV)"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <ShieldCheck className="text-primary h-5 w-5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-6">Why Buyers Prefer Our Steel Division</h3>
                <ul className="space-y-4">
                    {[
                        "Clear grade/specification matching",
                        "Accredited mill sourcing",
                        "Predictable logistics",
                        "Transparent commercial communication"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="text-primary h-5 w-5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 text-center">
        <Button size="lg" asChild>
            <Link href="/#contact">Request a Steel Quote</Link>
        </Button>
      </section>
    </div>
  );
}