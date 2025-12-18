"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, BookOpen, Download, Eye, Gem, Leaf, PackageOpen, Utensils} from "lucide-react";
import {motion} from "motion/react";
import {MagicCard} from "@/components/ui/magic-card";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {Document, Page, pdfjs} from 'react-pdf';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;

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

    return (<div className="pt-24 pb-24 relative min-h-screen">
            {/* Background Grid */}
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <section className="container mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <PageHeaderBadge icon={BookOpen}>Digital Library</PageHeaderBadge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Product Catalogs</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Discover our diverse range of export-quality products. Browse detailed specifications and
                        brochures
                        designed to help you make informed sourcing decisions.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catalogs.map((item, index) => (<BlurFade
                            key={index}
                            delay={0.1 + index * 0.05}
                            inView
                            className={index === 0 ? "lg:row-span-2" : ""}
                        >
                            <MagicCard
                                className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                                gradientColor={item.gradient}
                            >
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

                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Button
                                            variant="default"
                                            size="sm"
                                            className="w-full rounded-lg group bg-primary text-primary-foreground hover:bg-primary/90"
                                            onClick={() => {
                                                setSelectedDoc({title: item.title, file: item.file});
                                                setNumPages(null);
                                            }}
                                        >
                                            <Eye className="mr-2 h-3.5 w-3.5"/> View
                                        </Button>
                                        <a
                                            href={`/aacexports/catalog/${item.file}`}
                                            download
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full rounded-lg group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                                            >
                                                <Download className="mr-2 h-3.5 w-3.5 text-primary"/> PDF
                                            </Button>
                                        </a>
                                    </div>

                                    {/* Decorative Image for Large Screens (First Item Only) */}
                                    {index === 0 && (
                                        <div className="hidden lg:block relative w-full mt-auto pt-6 -mb-8 -mx-8">
                                            <div className="relative h-48 w-[calc(100%+4rem)] overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                                                <img
                                                    src="/aacexports/assets/img/product-range/granite.png"
                                                    alt="Natural Stones"
                                                    className="w-full h-full object-cover opacity-80 mix-blend-multiply hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                        </div>)}
                                </div>
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
            >
                <div className="w-full flex-grow bg-muted/30 overflow-y-auto p-4 md:p-8 flex justify-center relative"
                     ref={containerRef}>
                    {selectedDoc && (<Document
                            file={`/aacexports/catalog/${selectedDoc.file}`}
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
