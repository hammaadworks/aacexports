"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {CheckCircle2, Download, Eye, FileText, ShieldCheck} from "lucide-react";
import {motion} from "motion/react";
import {MagicCard} from "@/components/ui/magic-card";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import {Document, Page, pdfjs} from 'react-pdf';
import CustomContact from "@/components/CustomContact";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;

// Define certificate data structure mapping to available PDFs
const certificates = [{
    title: "FSSAI License",
    category: "Food Safety",
    issuer: "Food Safety and Standards Authority of India",
    description: "Ensures that food products undergo quality checks and curtail food adulteration.",
    icon: ShieldCheck,
    file: "fssai.pdf",
    gradient: "#EAB30830"
}, {
    title: "GST Registration",
    category: "Taxation",
    issuer: "Goods & Services Tax",
    description: "Official tax registration ensuring compliance with Indian tax laws.",
    icon: FileText,
    file: "gst.pdf",
    gradient: "#303F2D30"
}, {
    title: "Import Export Code (IEC)",
    category: "Trade License",
    issuer: "DGFT, Govt. of India",
    description: "Primary license for undertaking import/export activities in India.",
    icon: FileText,
    file: "iec.pdf",
    gradient: "#EAB30830"
}, {
    title: "MSME / Udyam Registration",
    category: "Business",
    issuer: "Ministry of MSME",
    description: "Certification for Micro, Small and Medium Enterprises.",
    icon: ShieldCheck,
    file: "udyam.pdf",
    gradient: "#303F2D30"
},];

export default function CertificatesPage() {
    const {openModal} = useModal();
    const [selectedCert, setSelectedCert] = useState<{ title: string; file: string } | null>(null);
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
    }, [selectedCert]); // Re-run when modal opens/content mounts

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
                    <PageHeaderBadge icon={ShieldCheck}>Official Documentation</PageHeaderBadge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Legal & Compliance</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Transparency is the foundation of our business. View our official registrations and
                        certifications below.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 mb-20">
                <div className="grid md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (<BlurFade key={index} delay={0.1 + index * 0.05} inView>
                            <MagicCard
                                className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                                gradientColor={cert.gradient}
                            >
                                <div className="p-8 flex flex-col h-full gap-6">
                                    <div className="flex flex-row items-start justify-between">
                                        <div
                                            className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 ring-1 ring-inset ring-primary/20">
                                            <cert.icon size={24}/>
                                        </div>
                                        <div
                                            className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-bold uppercase tracking-wider text-secondary/80">
                                            {cert.category}
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-3">
                                        <h3 className="text-xl font-bold leading-tight font-serif">{cert.title}</h3>
                                        <p className="text-xs font-semibold text-primary uppercase tracking-wide">{cert.issuer}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Button
                                            variant="default"
                                            size="sm"
                                            className="w-full rounded-lg group bg-primary text-primary-foreground hover:bg-primary/90"
                                            onClick={() => {
                                                setSelectedCert({title: cert.title, file: cert.file});
                                                setNumPages(null); // Reset pages on new selection
                                            }}
                                        >
                                            <Eye className="mr-2 h-3.5 w-3.5"/> View
                                        </Button>
                                        <a
                                            href={`/aacexports/certificates/${cert.file}`}
                                            download
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full rounded-lg group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                                            >
                                                <Download className="mr-2 h-3.5 w-3.5 text-primary"/> Save
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </MagicCard>
                        </BlurFade>))}
                </div>
            </section>

            <CustomContact onClick={openModal}
                           headingText={"Need specific documentation for your order?"}
                           bodyText={"We provide shipment-specific documents including Certificate of Origin, Phytosanitary Certificates, and Lab Reports upon request."}
                           ctaText={"Contact Compliance Team"}
            />


            {/* Certificate Viewer Modal */}
            <BaseModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                title={selectedCert?.title || "Certificate View"}
                className="!w-[95vw] !max-w-7xl !h-[95vh] !p-0 flex flex-col gap-0"
                headerClassName="px-6 py-4 border-b shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div className="w-full flex-grow bg-muted/30 overflow-y-auto p-4 md:p-8 flex justify-center relative"
                     ref={containerRef}>
                    {selectedCert && (<Document
                            file={`/aacexports/certificates/${selectedCert.file}`}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={<div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                                    <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading
                                        certificate...</p>
                                </div>
                            </div>}
                            error={<div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-destructive flex flex-col items-center gap-2">
                                    <CheckCircle2 className="h-8 w-8 text-destructive"/>
                                    <p>Failed to load certificate.</p>
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
