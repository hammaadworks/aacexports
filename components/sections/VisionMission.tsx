"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlurFade delay={0.1} inView>
            <Card className="h-full border-primary/20 bg-background/50 hover:bg-background/80 transition-colors shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a globally trusted export partner known for <span className="font-semibold text-foreground">consistency, transparency, and long‑term reliability</span> across every market we serve.
                </p>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <Card className="h-full border-primary/20 bg-background/50 hover:bg-background/80 transition-colors shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver export solutions that combine <span className="font-semibold text-foreground">quality‑driven sourcing</span>, <span className="font-semibold text-foreground">compliance‑first operations</span>, and <span className="font-semibold text-foreground">professional execution</span>, enabling our clients to scale confidently in international markets.
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
