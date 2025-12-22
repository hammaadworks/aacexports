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
import { useModal } from "@/lib/modal-context";
import { ArrowRight, Building2, Eye, LayersIcon } from "lucide-react";
import { useState } from "react";

export default function GeneralTradingPage() {
  const { openModal } = useModal();

  const [selectedDoc, setSelectedDoc] = useState<CatalogDoc | null>(null);

  const generalImageDir = "/verticals/general";

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
        description="Since 1996, Al Ahmed Continental has been a pillar of reliability. We quarry, process, and export premium Indian Natural Stones and Structural Steel to global infrastructure projects."
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
