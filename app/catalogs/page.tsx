"use client";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, ArrowRight, BookOpen, Gem, Leaf, Maximize2, PackageOpen, Utensils} from "lucide-react";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";
import CustomContact from "@/components/CustomContact";
import dynamic from "next/dynamic";
import {BadgeCtaBox} from "@/components/BadgeCtaBox";
import {VerticalHero, VerticalPageWrapper} from "@/app/verticals/layout";

const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), {ssr: false});
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), {ssr: false});

// Define catalog data structure
const catalogs = [{
    title: "Natural Stones",
    category: "Architecture & Design",
    description: "Explore our exquisite collection of Granite, Marble, and Quartz. Perfect for timeless architectural projects.",
    icon: Gem,
    file: "natural_stones.pdf",
    gradient: "var(--accent)"

}, {
    title: "Fresh Produce",
    category: "Agriculture",
    description: "Farm-fresh vegetables and fruits sourced directly from growers. Quality and freshness guaranteed.",
    icon: Leaf,
    file: "fresh_vegetables.pdf",
    gradient: "var(--accent)"
}, {
    title: "Premium Spices and Food Products",
    category: "FMCG",
    description: "A curated selection of premium spices, high-quality processed food items, snacks, and culinary essentials.",
    icon: Utensils,
    file: "food.pdf",
    gradient: "var(--accent)"
}, {
    title: "Dehydrated Powders",
    category: "Ingredients",
    description: "Premium dehydrated vegetable and fruit powders, and industrial-grade food ingredients for bulk export.",
    icon: PackageOpen,
    file: "powders.pdf",
    gradient: "var(--accent)"
}, {
    title: "Iron & Steel",
    category: "Industrial Materials",
    description: "Structural steel, raw materials, and heavy metal products for construction and manufacturing.",
    icon: Anvil,
    file: "ironsteel.pdf",
    gradient: "var(--accent)"
},];

export default function CatalogPage() {
    const {openModal} = useModal();
    const [selectedDoc, setSelectedDoc] = useState<{ title: string; file: string } | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import("react-pdf").then(mod => {
            mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
        });
    }, []);

    // Handle container resizing to make PDF responsive
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                setContainerWidth(entry.contentRect.width);
            }
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [selectedDoc]);

    function onDocumentLoadSuccess({numPages}: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <VerticalPageWrapper>

            <VerticalHero
            icon={BookOpen}
            badgeText="Catalog Library"
            title={<>
                Product <span className="text-chart-3 italic">Catalogs.</span>
            </>}
            description={<>
                Discover our diverse range of export-quality products. Browse detailed specifications and
                brochures designed to help you make informed sourcing decisions.
            </>}
        >
        </VerticalHero>

            <section className="container mx-auto px-6 mb-20 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catalogs.map((item, index) => (<BlurFade
                        key={index}
                        delay={0.1 + index * 0.05}
                        inView
                        className={index === 0 ? "lg:row-span-2" : ""}
                    >
                        <BadgeCtaBox
                            title={item.title}
                            category={item.category}
                            description={item.description}
                            icon={item.icon}
                            gradientColor={item.gradient}
                            buttonText="Explore Catalog"
                            buttonIcon={ArrowRight}
                            onClick={() => {
                                setSelectedDoc({title: item.title, file: item.file});
                                setNumPages(null);
                            }}
                            className="bg-white/80 backdrop-blur-sm"
                            titleClassName={index === 0 ? "text-4xl" : ""}
                        >
                            {index === 0 && (<div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 max-w-md">
                                {["Granite", "Marble", "Quartz", "Sandstone", "Limestone", "Slate"].map((stone) => (
                                    <div key={stone}
                                         className="flex items-center text-sm font-medium text-muted-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5"/>
                                        {stone}
                                    </div>))}
                            </div>)}
                        </BadgeCtaBox>
                    </BlurFade>))}
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Can't find what you're looking for?"}
                           bodyText={"We specialize in sourcing bespoke requirements. Request a quotation tailored to your specific market needs."}
                           ctaText={"Specify your requirements"}
            />

            {/* PDF Viewer Modal */}
            <BaseModal
                isOpen={!!selectedDoc}
                onClose={() => setSelectedDoc(null)}
                title={selectedDoc?.title || "Catalog View"}
                className="!w-[95vw] !max-w-7xl !h-[95vh] !p-0 flex flex-col gap-0"
                headerClassName="px-6 py-4 border-b shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                footerContent={selectedDoc && (<div
                    className="w-full flex justify-end px-6 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
                    <Button asChild variant="default">
                        <a href={`/aacexports/catalogs/${selectedDoc.file}`} target="_blank"
                           rel="noopener noreferrer">
                            <Maximize2 className="mr-2 h-4 w-4"/> View Full Page
                        </a>
                    </Button>
                </div>)}
            >
                <div className="w-full flex-grow bg-muted/30 overflow-y-auto p-4 md:p-8 flex justify-center relative"
                     ref={containerRef}>
                    {selectedDoc && (<Document
                        file={`/aacexports/catalogs/${selectedDoc.file}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                                <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading
                                    catalog...</p>
                            </div>
                        </div>}
                        error={<div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-destructive flex flex-col items-center gap-2">
                                <PackageOpen className="h-8 w-8"/>
                                <p>Failed to load catalog.</p>
                            </div>
                        </div>}
                        className="flex flex-col gap-6 max-w-full shadow-2xl"
                    >
                        {numPages && Array.from(new Array(numPages), (el, index) => (<Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={containerWidth ? Math.min(containerWidth - 48, 1000) : 300}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="shadow-sm bg-white"
                            loading={<div
                                className="h-[800px] w-full bg-white animate-pulse flex items-center justify-center text-muted-foreground">
                                <span className="sr-only">Loading Page {index + 1}...</span>
                            </div>}
                        />))}
                    </Document>)}
                </div>
            </BaseModal>

    </VerticalPageWrapper>);
}
