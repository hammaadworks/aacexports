"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {CheckCircle2, Eye, FileText, Maximize2, ShieldCheck} from "lucide-react";
import {motion} from "motion/react";
import {BlurFade} from "@/components/ui/blur-fade";
import {useModal} from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";
import {PageHeaderBadge} from "@/components/ui/PageHeaderBadge";
import CustomContact from "@/components/CustomContact";
import dynamic from "next/dynamic";
import {BadgeCtaBox} from "@/components/BadgeCtaBox";

const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), {ssr: false});
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), {ssr: false});

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
    gradient: "#EAB308"
}, {
    title: "Import Export Code (IEC)",
    category: "Trade License",
    issuer: "DGFT, Govt. of India",
    description: "Primary license for undertaking import/export activities in India.",
    icon: FileText,
    file: "iec.pdf",
    gradient: "#EAB308"
}, {
    title: "MSME / Udyam Registration",
    category: "Business",
    issuer: "Ministry of MSME",
    description: "Certification for Micro, Small and Medium Enterprises.",
    icon: ShieldCheck,
    file: "udyam.pdf",
    gradient: "#EAB308"
},];

export default function CertificatesPage() {
    const {openModal} = useModal();
    const [selectedCert, setSelectedCert] = useState<{ title: string; file: string } | null>(null);
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
    }, [selectedCert]); // Re-run when modal opens/content mounts

    function onDocumentLoadSuccess({numPages}: { numPages: number }) {
        setNumPages(numPages);
    }

    return (<div className="relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
             style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>

        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 text-center z-10">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <PageHeaderBadge icon={ShieldCheck}>Official Documentation</PageHeaderBadge>
                <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter text-[#2D3028]">
                    Legal & Compliance
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Transparency is the foundation of our business. View our official registrations and
                    certifications below.
                </p>
            </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (<BlurFade key={index} delay={0.1 + index * 0.05} inView>
                    <BadgeCtaBox
                        title={cert.title}
                        category={cert.category}
                        description={cert.description}
                        icon={cert.icon}
                        gradientColor={cert.gradient}
                        subtitle={cert.issuer}
                        buttonText="View Certificate"
                        buttonIcon={Eye}
                        onClick={() => {
                            setSelectedCert({title: cert.title, file: cert.file});
                            setNumPages(null); // Reset pages on new selection
                        }}
                        className="bg-white/80 backdrop-blur-sm"
                    />
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
            footerContent={selectedCert && (<div
                    className="w-full flex justify-end px-6 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
                    <Button asChild variant="default">
                        <a href={`/aacexports/certificates/${selectedCert.file}`} target="_blank"
                           rel="noopener noreferrer">
                            <Maximize2 className="mr-2 h-4 w-4"/> View Full Page
                        </a>
                    </Button>
                </div>)}
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
