"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Anvil, ArrowRight, Building2, Eye, Maximize2, PackageOpen,} from "lucide-react";
import {useModal} from "@/lib/modal-context";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import {NumberTicker} from "@/components/ui/number-ticker";
import {FeatureRow} from "@/components/FeatureRow";
import {SimpleCarousel} from "@/components/SimpleCarousel";
import BaseModal from "@/components/ui/base-modal";
import dynamic from "next/dynamic";
import {VerticalHero, VerticalPageWrapper} from "@/app/verticals/layout";

const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), {ssr: false});
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
    ssr: false,
});

export default function GeneralTradingPage() {
    const {openModal} = useModal();

    const [selectedDoc, setSelectedDoc] = useState<{
        title: string; file: string;
    } | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import("react-pdf").then((mod) => {
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

    const stoneImages = ["/aacexports/verticals/general/granite_1/excavate.png", "/aacexports/verticals/general/granite_1/granite_block.png", "/aacexports/verticals/general/granite_1/green_granite.png", "/aacexports/verticals/general/granite_1/multicolor_granite.png", "/aacexports/verticals/general/granite_1/packing.png", "/aacexports/verticals/general/granite_1/white_marble.png",];

    const landscapeImages = ["/aacexports/verticals/general/granite_2/kerbs.png", "/aacexports/verticals/general/granite_2/landscape_1.png", "/aacexports/verticals/general/granite_2/landscape_kerb.png", "/aacexports/verticals/general/granite_2/sphere.png",];

    const tmtImages = ["/aacexports/verticals/general/ironsteel_1/angle_load.png", "/aacexports/verticals/general/ironsteel_1/fabrications.png",];

    return (<VerticalPageWrapper>
            <VerticalHero
                icon={Building2}
                badgeText="Construction & Materials"
                title={<>
                    Building the World,
                    <br/>
                    <span className="text-[#8B9D77] italic">One Block at a Time.</span>
                </>}
                description="Since 1996, Al Ahmed Continental has been a pillar of reliability. We quarry, process, and export premium Indian Natural Stones and Structural Steel to global infrastructure projects."
                titleClassName="text-5xl md:text-7xl"
                descriptionClassName="max-w-3xl"
            >
                <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-secondary rounded-full px-8 h-12"
                    onClick={openModal}
                >
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </VerticalHero>

            {/* Stats Section / Trust Indicators */}
            <section className="py-12 border-y bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={1996}/>
                            </p>

                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Established
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={30}/>+
                            </p>

                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Countries Served
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                <NumberTicker value={500}/>+
                            </p>

                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Projects Completed
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-4xl font-bold font-serif text-[#2D3028]">
                                100%
                            </p>

                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                IEC Compliance
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Natural Stones Section */}
            <section id="stones" className="py-24 container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#8B9D77] font-bold tracking-wider uppercase text-sm">
            Our Heritage
          </span>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6 text-[#2D3028]">
                        Natural Stones & Granite
                    </h2>

                    <p className="text-lg text-muted-foreground">
                        We are pioneers in the Indian stone industry. From quarrying rough
                        blocks to crafting intricate monuments, our expertise covers the
                        entire value chain.
                    </p>
                </div>

                <FeatureRow
                    title="Granite & Marble Slabs"
                    description="We operate quarries for rough dimensional blocks and process them into high-gloss polished slabs and tiles. Our varieties include Kuppam Green, Red Multicolour, Paradiso, Absolute Black, and Black Galaxy."
                    tags={["Kuppam Green", "Black Galaxy", "Polished Slabs", "Italian Marble",]}
                    imageAlign="right"
                    color="bg-stone-500"
                    customVisual={<SimpleCarousel images={stoneImages}/>}
                    action={<Button
                        variant="outline"
                        className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                            setSelectedDoc({
                                title: "Natural Stones", file: "natural_stones.pdf",
                            });

                            setNumPages(null);
                        }}
                    >
                        <Eye size={16}/> View Catalog
                    </Button>}
                />

                <FeatureRow
                    title="Landscaping & Monuments"
                    description="Specialized finishing for global projects including Flamed & Bush hammered paving slabs, Kerbstones, Pollers, Balls, Steps, and Cobblestones. Perfect for city centers, airports, and walkways."
                    tags={["Monuments", "Cobblestones", "Kerbstones", "Bush Hammered",]}
                    imageAlign="left"
                    color="bg-stone-700"
                    customVisual={<SimpleCarousel images={landscapeImages}/>}
                    action={<Button
                        variant="outline"
                        className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                            setSelectedDoc({
                                title: "Natural Stones", file: "natural_stones.pdf",
                            });

                            setNumPages(null);
                        }}
                    >
                        <Eye size={16}/> View Catalog
                    </Button>}
                />
            </section>

            {/* Iron & Steel Section */}
            <section className="py-24 bg-[#E8E6E1] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <PageHeaderBadge icon={Anvil}>Heavy Industry</PageHeaderBadge>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-[#2D3028]">
                            Iron & Steel
                        </h2>

                        <p className="text-lg text-muted-foreground">
                            The backbone of infrastructure. We source TMT bars and structural
                            steel from India's most reputed manufacturers, ensuring high
                            ductility and earthquake resistance.
                        </p>
                    </div>

                    <FeatureRow
                        title="TMT Steel Bars"
                        description="High-quality TMT bars in Fe500 and Fe550 grades. Sourced from verified manufacturers ensuring compliance with IS standards. Suitable for critical infrastructure like bridges, dams, and high-rise buildings."
                        tags={["Fe500 / Fe550", "IS Standards", "High Ductility", "Earthquake Resistant",]}
                        imageAlign="right"
                        color="bg-orange-700"
                        customVisual={<SimpleCarousel images={tmtImages}/>}
                        action={<Button
                            variant="outline"
                            className="w-full rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                            onClick={() => {
                                setSelectedDoc({
                                    title: "Iron & Steel", file: "ironsteel.pdf",
                                });

                                setNumPages(null);
                            }}
                        >
                            <Eye size={16}/> View Catalog
                        </Button>}
                    />
                </div>
            </section>

            <CustomContact
                onClick={openModal}
                headingText={"Ready to Source?"}
                bodyText={"Whether it's a single container of granite or a bulk shipment of TMT bars, we ensure seamless logistics and competitive pricing."}
                ctaText={"Get a Quote Today"}
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
                            <a
                                href={`/aacexports/catalog/${selectedDoc.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Maximize2 className="mr-2 h-4 w-4"/> View Full Page
                            </a>
                        </Button>
                    </div>)}
            >
                <div
                    className="w-full flex-grow bg-muted/30 overflow-y-auto p-4 md:p-8 flex justify-center relative"
                    ref={containerRef}
                >
                    {selectedDoc && (<Document
                            file={`/aacexports/catalog/${selectedDoc.file}`}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={<div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                                    <p className="text-sm font-medium text-muted-foreground animate-pulse">
                                        Loading catalog...
                                    </p>
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
                        <span className="sr-only">
                          Loading Page {index + 1}...
                        </span>
                                    </div>}
                                />))}
                        </Document>)}
                </div>
            </BaseModal>
        </VerticalPageWrapper>);
}