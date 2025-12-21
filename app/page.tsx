import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Verticals } from "@/components/sections/Verticals";
import { Quality } from "@/components/sections/Quality";
import { GlobalMarkets } from "@/components/sections/GlobalMarkets";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            {/* Section 1: Hero */}
            <Hero />
            
            {/* Section 2: Trust Stats */}
            <Stats />
            
            {/* Section 3: Vision & Mission */}
            <VisionMission />

            {/* Section 4: About / Credibility */}
            <About />
            
            {/* Section 5: Trading Verticals */}
            <Verticals />
            
            {/* Section 6: Quality & Compliance */}
            <Quality />
            
            {/* Section 7: Global Markets */}
            <GlobalMarkets />
            
            {/* Section 8: Lead Conversion CTA */}
            <ContactCTA />
        </div>
    );
}
