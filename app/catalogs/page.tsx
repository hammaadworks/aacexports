"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, BookOpen, Download, Eye, Gem, Leaf, Maximize2, PackageOpen, Utensils} from "lucide-react";
import {motion} from "motion/react";
import {MagicCard} from "@/components/ui/magic-card";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import dynamic from "next/dynamic";

const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), { ssr: false });

// Define catalog data structure
const catalogs = [{
    title: "Natural Stones",
    category: "Architecture & Design",
    description: "Explore our exquisite collection of Granite, Marble, and Quartz. Perfect for timeless architectural projects.",
    icon: Gem,
    file: "natural_stones.pdf",
    gradient: "#EAB30830"
}, {
    title: "Fresh Produce",
    category: "Agriculture",
    description: "Farm-fresh vegetables and fruits sourced directly from growers. Quality and freshness guaranteed.",
    icon: Leaf,
    file: "fresh_vegetables.pdf",
    gradient: "#303F2D30"
}, {
    title: "Premium Spices and Food Products",
    category: "FMCG",
    description: "A curated selection of premium spices, high-quality processed food items, snacks, and culinary essentials.",
    icon: Utensils,
    file: "food.pdf",
    gradient: "#EAB30830"
}, {
    title: "Dehydrated Powders",
    category: "Ingredients",
    description: "Premium dehydrated vegetable and fruit powders, and industrial-grade food ingredients for bulk export.",
    icon: PackageOpen,
    file: "powders.pdf",
    gradient: "#303F2D30"
}, {
    title: "Iron & Steel",
    category: "Industrial Materials",
    description: "Structural steel, raw materials, and heavy metal products for construction and manufacturing.",
    icon: Anvil,
    file: "ironsteel.pdf",
    gradient: "#78716C30"
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

    return (<div className="relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden">
             {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 text-center z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <PageHeaderBadge icon={BookOpen}>Digital Library</PageHeaderBadge>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]">
                        Product Catalogs
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Discover our diverse range of export-quality products. Browse detailed specifications and
                        brochures designed to help you make informed sourcing decisions.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 mb-20 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catalogs.map((item, index) => (<BlurFade
                            key={index}
                            delay={0.1 + index * 0.05}
                            inView
                            className={index === 0 ? "lg:row-span-2" : ""}
                        >
                            <MagicCard
                                className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
                                gradientColor={item.gradient}
                            >
                                {index === 0 ? (
                                    // Special Layout for Natural Stones (Index 0)
                                    <div className="p-8 flex flex-col h-full relative z-10">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div
                                                className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                                                <item.icon size={28}/>
                                            </div>
                                            <div
                                                className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-bold uppercase tracking-wider text-secondary/80">
                                                {item.category}
                                            </div>
                                        </div>

                                        {/* Enhanced Title & Desc */}
                                        <div className="mb-8">
                                            <h3 className="text-4xl font-serif font-bold text-foreground mb-4 leading-tight tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Features List */}
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 max-w-md">
                                            {["Granite", "Marble", "Quartz", "Sandstone", "Limestone", "Slate"].map((stone) => (
                                                <div key={stone}
                                                     className="flex items-center text-sm font-medium text-muted-foreground/80">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5"/>
                                                    {stone}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Button - Pushed to bottom */}
                                        <div className="mt-auto pt-4 relative z-20 w-full sm:w-auto">
                                            <Button
                                                variant="default"
                                                size="lg"
                                                className="w-full rounded-full group bg-[#2D3028] text-white hover:bg-[#3E4236]"
                                                onClick={() => {
                                                    setSelectedDoc({title: item.title, file: item.file});
                                                    setNumPages(null);
                                                }}
                                            >
                                                <Eye className="mr-2 h-4 w-4"/> Explore Catalog
                                            </Button>
                                        </div>

                                        {/* Abstract "Stone Stack" Visualization */}
                                        <div className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none opacity-[0.15] hidden sm:block">
                                            {/* Bottom Slab */}
                                            <div
                                                className="absolute bottom-[-40px] right-[-40px] w-64 h-64 bg-current rounded-[3rem] transform -rotate-12"/>
                                            {/* Middle Slab */}
                                            <div
                                                className="absolute bottom-[-10px] right-[20px] w-56 h-56 bg-current rounded-[2.5rem] transform -rotate-3 opacity-80"/>
                                            {/* Top Slab */}
                                            <div
                                                className="absolute bottom-[40px] right-[60px] w-48 h-48 bg-current rounded-[2rem] transform rotate-6 opacity-60"/>
                                        </div>
                                    </div>
                                ) : (
                                    // Standard Layout for other items
                                    <div className="p-8 flex flex-col h-full gap-6">
                                        <div className="flex flex-row items-start justify-between">
                                            <div
                                                className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                                                <item.icon size={24}/>
                                            </div>
                                            <div
                                                className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-bold uppercase tracking-wider text-secondary/80">
                                                {item.category}
                                            </div>
                                        </div>

                                        <div className="flex-grow space-y-3">
                                            <h3 className="text-xl font-bold leading-tight font-serif">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                        </div>

                                        <div className="pt-2">
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="w-full rounded-full group bg-[#2D3028] text-white hover:bg-[#3E4236]"
                                                onClick={() => {
                                                    setSelectedDoc({title: item.title, file: item.file});
                                                    setNumPages(null);
                                                }}
                                            >
                                                <Eye className="mr-2 h-3.5 w-3.5"/> Explore Catalog
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </MagicCard>
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
                footerContent={
                    selectedDoc && (
                        <div className="w-full flex justify-end px-6 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
                            <Button asChild variant="default">
                                <a href={`/aacexports/catalogs/${selectedDoc.file}`} target="_blank"
                                   rel="noopener noreferrer">
                                    <Maximize2 className="mr-2 h-4 w-4"/> View Full Page
                                </a>
                            </Button>
                        </div>
                    )
                }
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
        </div>);
}
