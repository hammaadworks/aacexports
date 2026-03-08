"use client";

import {
  CatalogDoc,
  CatalogViewer,
  VerticalHero,
  VerticalInfoSection,
  VerticalPageWrapper,
  VerticalSectionHeader,
  VerticalStats,
} from "@/app/verticals/layout";
import CustomContact from "@/components/CustomContact";
import { FeatureRow } from "@/components/FeatureRow";
import { SimpleCarousel } from "@/components/SimpleCarousel";
import { Button } from "@/components/ui/button";
import { staticallyCDN } from "@/lib/constants";
import { useModal } from "@/lib/modal-context";
import { ArrowRight, Building2, Eye, LayersIcon } from "lucide-react";
import { useState } from "react";

export default function GeneralTradingPage() {
  const { openModal } = useModal();

  const [selectedDoc, setSelectedDoc] = useState<CatalogDoc | null>(null);

  const generalImageDir = `${staticallyCDN}/verticals/general`;

  const stoneImageDir = `${generalImageDir}/granite_1`;
  const stoneImages = [
    "excavate.png",
    "granite_block.png",
    "green_granite.png",
    "multicolor_granite.png",
    "packing.png",
    "white_marble.png",
  ].map((filename) => `${stoneImageDir}/${filename}`);

  const landscapeImageDir = generalImageDir + "/granite_2";
  const landscapeImages = [
    "kerbs.png",
    "landscape_1.png",
    "landscape_kerb.png",
    "sphere.png",
  ].map((filename) => `${landscapeImageDir}/${filename}`);

  const tmtImageDir = generalImageDir + "/ironsteel_1";
  const tmtImages = ["angle_load.png", "fabrications.png"].map(
    (filename) => `${tmtImageDir}/${filename}`
  );

  return (
    <VerticalPageWrapper>
      <VerticalHero
        icon={Building2}
        badgeText="Construction & Materials"
        title={
          <>
            Building the World,
            <br />
            <span className="text-[#8B9D77] italic">One Block at a Time.</span>
          </>
        }
        description="Since 1996, Al Ahmad Continental has been a pillar of reliability. We quarry, process, and export premium Indian Natural Stones and Structural Steel to global infrastructure projects."
        titleClassName="text-5xl md:text-7xl"
        descriptionClassName="max-w-3xl"
      >
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-secondary rounded-full px-8 h-12"
          onClick={openModal}
        >
          Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </VerticalHero>

      <VerticalStats
        variant="numbers"
        items={[
          { id: "est", label: "Established", value: 1996, valuePrefix: "" },
          {
            id: "countries",
            label: "Countries Served",
            value: 30,
            valueSuffix: "+",
          },
          {
            id: "projects",
            label: "Projects Completed",
            value: 500,
            valueSuffix: "+",
          },
          {
            id: "iec",
            label: "IEC Compliance",
            value: 100,
            valueSuffix: "%",
          },
        ]}
      />

      {/* Natural Stones Section */}
      <section id="stones" className="py-24 container mx-auto px-6">
        <VerticalSectionHeader
          badge="Our Heritage"
          title="Natural Stones & Granite"
          description="We are pioneers in the Indian stone industry. From quarrying rough blocks to crafting intricate monuments, our expertise covers the entire value chain."
          align="center"
        />

        <FeatureRow
          title="Granite & Marble Slabs"
          description="We operate quarries for rough dimensional blocks and process them into high-gloss polished slabs and tiles. Our varieties include Kuppam Green, Red Multicolour, Paradiso, Absolute Black, and Black Galaxy."
          tags={[
            "Kuppam Green",
            "Black Galaxy",
            "Polished Slabs",
            "Italian Marble",
          ]}
          imageAlign="right"
          color="bg-stone-500"
          customVisual={<SimpleCarousel images={stoneImages} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Natural Stones",
                  file: "natural_stones.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />

        <FeatureRow
          title="Landscaping & Monuments"
          description="Specialized finishing for global projects including Flamed & Bush hammered paving slabs, Kerbstones, Pollers, Balls, Steps, and Cobblestones. Perfect for city centers, airports, and walkways."
          tags={["Monuments", "Cobblestones", "Kerbstones", "Bush Hammered"]}
          imageAlign="left"
          color="bg-stone-700"
          customVisual={<SimpleCarousel images={landscapeImages} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Natural Stones",
                  file: "natural_stones.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />
      </section>

      {/* Iron & Steel Section */}
      <VerticalInfoSection
        title="Iron & Steel"
        badgeIcons={LayersIcon}
        badgeText="Construction Materials"
        description="The backbone of infrastructure. We source TMT bars and structural steel from India's most reputed manufacturers, ensuring high ductility and earthquake resistance."
        variant="colored"
        visual={
          <div className="h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
            <SimpleCarousel images={tmtImages} />
          </div>
        }
      >
        <FeatureRow
          title="TMT Steel Bars"
          description="High-quality TMT bars in Fe500 and Fe550 grades. Sourced from verified manufacturers ensuring compliance with IS standards. Suitable for critical infrastructure like bridges, dams, and high-rise buildings."
          tags={[
            "Fe500 / Fe550",
            "IS Standards",
            "High Ductility",
            "Earthquake Resistant",
          ]}
          showVisual={false}
          color="bg-stone-500"
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Iron & Steel",
                  file: "ironsteel.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />
      </VerticalInfoSection>

      {/* Irresistible Offer: Granite Quarry Acquisition */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 text-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
          {/* Animated Background Element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-stone-500/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 space-y-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 text-xs font-black px-4 py-2 rounded-full border border-amber-500/30 uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Exclusive Strategic Asset
              </div>
              
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Acquire a Profitable <span className="text-amber-500 italic">Jet Black Quarry.</span>
              </h3>
              
              <p className="text-stone-300 text-xl leading-relaxed font-light">
                A rare opportunity to acquire a <span className="text-white font-semibold">4.5-acre operational Jet Black Granite Quarry</span> in M.M. Hills. This is a high-yield, turn-key industrial asset with proven mineral richness and immediate ROI potential. <span className="text-amber-500 font-medium italic">Serious inquiries only.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="border-l-2 border-amber-500/50 pl-4">
                  <div className="text-2xl font-bold text-white">4.5 Acres</div>
                  <div className="text-stone-400 text-sm">Jet Black Material</div>
                </div>
                <div className="border-l-2 border-amber-500/50 pl-4">
                  <div className="text-2xl font-bold text-white">M.M. Hills</div>
                  <div className="text-stone-400 text-sm">Prime Location</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={openModal}
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-full px-10 h-14 text-lg shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105"
                >
                  Request Full Prospectus
                </Button>
                <div className="flex items-center gap-3 px-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700 flex items-center justify-center text-[10px] font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-stone-400 font-medium">4 Active Inquiries this week</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl group-hover:border-amber-500/20 transition-colors duration-500">
                <img 
                  src={`${staticallyCDN}/verticals/general/granite_1/excavate.png`}
                  alt="Granite Quarry"
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                   <div className="text-amber-500 font-bold text-sm">Prime Location</div>
                   <div className="text-white text-xs opacity-80">Proven Export-Grade Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomContact
        onClick={openModal}
        headingText={"Ready to Source?"}
        bodyText={
          "Whether it's a single container of granite or a bulk shipment of TMT bars, we ensure seamless logistics and competitive pricing."
        }
        ctaText={"Get a Quote Today"}
      />

      <CatalogViewer
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        doc={selectedDoc}
      />
    </VerticalPageWrapper>
  );
}
