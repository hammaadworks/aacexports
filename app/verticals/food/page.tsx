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
  CheckCircle2,
  Eye,
  Leaf,
  Microscope,
  PackageCheck,
  PackageCheckIcon,
  Truck,
  Wheat,
} from "lucide-react";
import { useState } from "react";

export default function FoodTradingPage() {
  const { openModal } = useModal();

  const [selectedDoc, setSelectedDoc] = useState<CatalogDoc | null>(null);

  const foodImageDir = "/aacexports/verticals/food";

  const food2ImageDir = `${foodImageDir}/food_2`;
  const food2Images = [
    "chilli.jpeg",
    "cucumber.jpeg",
    "lemons.jpeg",
    "moringa.jpeg",
    "onion.jpeg",
    "zucchini.jpeg",
  ].map((filename) => `${food2ImageDir}/${filename}`);

  const food3ImageDir = `${foodImageDir}/food_3`;
  const food3Images = [
    "bayleaf.jpeg",
    "cinnamon.jpeg",
    "clove.jpeg",
    "pepper.jpeg",
  ].map((filename) => `${food3ImageDir}/${filename}`);

  return (
    <VerticalPageWrapper>
      <VerticalHero
        icon={Wheat}
        badgeText="DAARAAB"
        title={
          <>
            Crafted Origins.
            <br />
            <span className="text-chart-3 italic">Global Distinction.</span>
          </>
        }
        description={
          <>
            Operating under the distinguished brand <strong>DAARAAB</strong>, we
            bring over three decades of excellence in exporting premium
            agricultural commodities. From the paddy fields of India to tables
            worldwide.
          </>
        }
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
        items={[
          {
            id: "sustainable",
            icon: Leaf,
            label: "Sustainably Sourced",
            description:
              "Directly from farmers employing sustainable agricultural practices.",
            colorClass: "bg-green-100 text-green-700",
          },
          {
            id: "lab",
            icon: Microscope,
            label: "Lab Tested",
            description:
              "Every batch undergoes rigorous quality checks for residue and purity.",
            colorClass: "bg-yellow-100 text-yellow-700",
          },
          {
            id: "export",
            icon: Truck,
            label: "Export Ready",
            description:
              "Compliant with FDA, FSSAI, and specific destination country regulations.",
            colorClass: "bg-blue-100 text-blue-700",
          },
        ]}
      />

      {/* Product Deep Dive */}
      <section className="py-24 container mx-auto px-6">
        <VerticalSectionHeader
          badge="Our Heritage"
          title="Fresh Produce & Spices"
          description="Selected Indian-origin merchandise and commodities, sourced and supplied as per buyer specifications and international trade standards."
          align="center"
        />

        <FeatureRow
          title="Basmati & Non-Basmati Rice"
          description="Our rice is aged to perfection, ensuring the authentic aroma and fluffy texture that DAARAAB is known for. We offer 1121 Steam, Sella, and Ponni varieties, sortex cleaned and graded."
          tags={[
            "1121 Basmati",
            "Sona Masoori",
            "Sortex Cleaned",
            "Aged 2 Years",
          ]}
          imageAlign="right"
          customVisual={
            <video
              controls
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="/aacexports/verticals/food/food_1/rice_demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          }
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Food & Spices",
                  file: "food.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />

        <FeatureRow
          title="G4 Green Chilli Fresh"
          description="Handpicked at peak ripeness for maximum heat and crispness. Our G4 chillies are packed in ventilated cartons to maintain freshness during transit to markets in UAE, Saudi Arabia, and Bahrain."
          tags={[
            "High Pungency",
            "Ventilated Box",
            "3.8kg Net Wt",
            "Crisp Texture",
          ]}
          imageAlign="left"
          color="bg-green-600"
          customVisual={<SimpleCarousel images={food2Images} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Fresh Vegetables",
                  file: "fresh_vegetables.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />

        <FeatureRow
          title="Authentic Indian Spices"
          description="Whole and ground spices including Cardamom and Black Pepper. We ensure high essential oil content and purity, free from adulteration."
          tags={["Cardamom", "Black Pepper", "Turmeric", "Cumin"]}
          imageAlign="right"
          color="bg-orange-600"
          customVisual={<SimpleCarousel images={food3Images} />}
          action={
            <Button
              variant="outline"
              className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setSelectedDoc({
                  title: "Food & Spices",
                  file: "food.pdf",
                });
              }}
            >
              <Eye size={16} /> View Catalog
            </Button>
          }
        />
      </section>

      <VerticalInfoSection
        badgeIcons={PackageCheckIcon}
        badgeText="Export Quality Packaging"
        title="Packaging that Preserves."
        description="We understand that packaging is as critical as the product itself. Our export packaging is designed to withstand long transit times while maintaining humidity and temperature levels."
        variant="colored"
        visual={
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/aacexports/verticals/food/food_4/packaging.png"
                alt="Export Quality Packaging"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-90"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/aacexports/verticals/food/food_4/brand_daaraab.png"
                alt="DAARAAB Branding"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-90"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        }
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />{" "}
            <span>Ventilated Corrugated Cartons for Fresh Produce</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />{" "}
            <span>Multi-layer Poly Pouches for Spices</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />{" "}
            <span>Jute & PP Bags for Rice (5kg - 50kg)</span>
          </li>
        </ul>
      </VerticalInfoSection>

      <CustomContact
        onClick={openModal}
        headingText={"Represent DAARAAB Globally"}
        bodyText={
          "Join us as an authorized country representative for DAARAAB food products."
        }
        ctaText={"Represent DAARAAB"}
      />

      <CatalogViewer
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        doc={selectedDoc}
      />
    </VerticalPageWrapper>
  );
}
