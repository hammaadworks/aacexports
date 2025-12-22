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
import { MagicCard } from "@/components/ui/magic-card";
import { useModal } from "@/lib/modal-context";
import {
  ArrowRight,
  Atom,
  Eye,
  Factory,
  FlaskConical,
  Leaf,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function PowderPage() {
  const { openModal } = useModal();

  const [selectedDoc, setSelectedDoc] = useState<CatalogDoc | null>(null);

  const powderImageDir = "/verticals/powder";

  const powder1ImageDir = `${powderImageDir}/powder_1`;
  const powder1Images = [
    "green_chilli.png",
    "lemon.png",
    "turmeric.png",
    "onion.png",
  ].map((filename) => `${powder1ImageDir}/${filename}`);

  const powder2ImageDir = `${powderImageDir}/powder_2`;
  const powder2Images = [
    "banana.png",
    "banana2.png",
    "moringa.png",
    "moringa2.png",
  ].map((filename) => `${powder2ImageDir}/${filename}`);

  return (
    <VerticalPageWrapper>
      <VerticalHero
        icon={Atom}
        badgeText="Clean Label Ingredients"
        title={
          <>
            Concentrated Goodness.
            <br />
            <span className="text-[#8B9D77] italic">Industrial Scale.</span>
          </>
        }
        description="Carefully processed dehydrated vegetables and fruits, maintaining quality, hygiene, and shelf stability, suitable for food processing, horeca, and retail markets."
      >
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-secondary rounded-full px-8 h-12"
          onClick={openModal}
        >
          Partner with Us <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </VerticalHero>

      <VerticalStats
        items={[
          {
            id: "natural",
            icon: Leaf,
            label: "100% Natural",
            description:
              "Sourced from fresh produce and dehydrated at low temperatures to retain color and nutrients.",
            colorClass: "bg-green-100 text-green-700",
          },
          {
            id: "industry",
            icon: Factory,
            label: "Industry Ready",
            description:
              "Available in bulk packing ranging from 500mg to 25kg with consistent mesh size and moisture control.",
            colorClass: "bg-blue-100 text-blue-700",
          },
          {
            id: "potency",
            icon: Zap,
            label: "High Potency",
            description:
              "Concentrated flavor profiles that mean you use less to achieve the desired taste.",
            colorClass: "bg-orange-100 text-orange-700",
          },
        ]}
      />

      {/* Product Deep Dive */}
      <section className="py-24 container mx-auto px-6">
        <VerticalSectionHeader
          badge="Our Heritage"
          title="Product Portfolio"
          description="We specialize in producing powders that serve as essential ingredients for the global food processing and spice industries."
          align="center"
        />

        <FeatureRow
          title="Veg & Spice Powders"
          description="Our premium range includes Onion, Garlic, Red Chilli and Green Chilli powders. Processed in hygienic conditions, they are tailored to meet large-scale industrial requirements for ready-to-mix soups, seasonings, and sauces."
          tags={[
            "Onion Powder",
            "Garlic Powder",
            "Green Chilli Powder",
            "Red Chilli Powder",
            "Turmeric",
          ]}
          imageAlign="right"
          color="bg-red-500"
          customVisual={<SimpleCarousel images={powder1Images} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Dehyrated Powders",
                  file: "powders.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />

        <FeatureRow
          title="Fruit & Superfood Powders"
          description="Natural Banana powder and Moringa powder. Ideal for nutraceuticals, health mixes, and baby food. We ensure nutritional integrity and clean-label purity across all our products."
          tags={[
            "Banana Powder",
            "Moringa Powder",
            "Natural Sweetener",
            "Superfoods",
          ]}
          imageAlign="left"
          color="bg-green-600"
          customVisual={<SimpleCarousel images={powder2Images} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Dehyrated Powders",
                  file: "powders.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />
      </section>

      <VerticalInfoSection
        title="Applications"
        variant="colored"
        visual={
          <MagicCard className="p-8 bg-white border-none shadow-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-serif font-bold mb-8">Our Process</h3>
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full max-w-xs p-4 border rounded-xl bg-green-50 text-green-800 font-medium">
                Fresh Harvest
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="w-full max-w-xs p-4 border rounded-xl bg-blue-50 text-blue-800 font-medium">
                Washing & Sorting
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="w-full max-w-xs p-4 border rounded-xl bg-orange-50 text-orange-800 font-medium">
                Dehydration
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="w-full max-w-xs p-4 border rounded-xl bg-purple-50 text-purple-800 font-medium">
                Pulverization
              </div>
            </div>
          </MagicCard>
        }
      >
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm">
              <FlaskConical size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Food Processing</h4>
              <p className="text-muted-foreground">
                Instant noodles, ready-to-eat meals, and snacks.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm">
              <Factory size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">HoReCa</h4>
              <p className="text-muted-foreground">
                Consistent flavor bases for hotels, restaurants, and catering.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 bg-white p-2 rounded-lg text-[#2D3028] h-fit shadow-sm">
              <Atom size={20} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Nutraceuticals</h4>
              <p className="text-muted-foreground">
                Natural supplements and health drink mixes.
              </p>
            </div>
          </li>
        </ul>
      </VerticalInfoSection>

      <CustomContact
        onClick={openModal}
        headingText={"Private Label Services"}
        bodyText={
          "Launch your own brand of spices or health mixes. We offer options for private labeling, enabling businesses to grow confidently with trusted ingredients."
        }
        ctaText={"Start Private Labeling"}
      />

      <CatalogViewer
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        doc={selectedDoc}
      />
    </VerticalPageWrapper>
  );
}
