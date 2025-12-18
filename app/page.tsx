import {Hero} from "@/components/sections/Hero";
import {Stats} from "@/components/sections/Stats";
import {About} from "@/components/sections/About";
import {Verticals} from "@/components/sections/Verticals";
import {Quality} from "@/components/sections/Quality";
import {MarketsCTA} from "@/components/sections/MarketsCTA";


export default function Home() {
    return (<div className="flex flex-col gap-0">
            <Hero/>
            <Stats/>
            <About/>
            <Verticals/>
            <Quality/>
            <MarketsCTA/>
        </div>);
}