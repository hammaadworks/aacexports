import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Verticals } from "@/components/sections/Verticals";
import { Quality } from "@/components/sections/Quality";
import { MarketsCTA } from "@/components/sections/MarketsCTA";
import { PageHeaderBadge } from "@/components/ui/PageHeaderBadge";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex justify-center pt-20">
        <PageHeaderBadge icon={Globe}>
          Welcome to AAC Exports
        </PageHeaderBadge>
      </div>
      <Hero />
      <Stats />
      <About />
      <Verticals />
      <Quality />
      <MarketsCTA />
    </div>
  );
}