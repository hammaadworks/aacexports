"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, Eye, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { useModal } from "@/lib/modal-context";
import BaseModal from "@/components/ui/base-modal";

// Define certificate data structure mapping to available PDFs
const certificates = [
  {
    title: "FSSAI License",
    issuer: "Food Safety and Standards Authority of India",
    description: "Ensures that food products undergo quality checks and curtail food adulteration.",
    icon: ShieldCheck,
    file: "fssai.pdf",
  },
  {
    title: "GST Registration",
    issuer: "Goods & Services Tax",
    description: "Official tax registration ensuring compliance with Indian tax laws.",
    icon: FileText,
    file: "gst.pdf",
  },
  {
    title: "Import Export Code (IEC)",
    issuer: "DGFT, Govt. of India",
    description: "Primary license for undertaking import/export activities in India.",
    icon: FileText,
    file: "iec.pdf",
  },
  {
    title: "MSME / Udyam Registration",
    issuer: "Ministry of MSME",
    description: "Certification for Micro, Small and Medium Enterprises.",
    icon: ShieldCheck,
    file: "udyam.pdf",
  },
];

export default function CertificatesPage() {
  const { openModal } = useModal();
  const [selectedCert, setSelectedCert] = useState<{ title: string; file: string } | null>(null);

  return (
    <div className="pt-24 pb-24 relative min-h-screen">
       {/* Background Grid */}
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Legal & Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparency is the foundation of our business. View our official registrations and certifications below.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05} inView>
              <MagicCard 
                className="flex flex-col h-full border-border/50 shadow-sm"
                gradientColor="#EAB30830"
              >
                <div className="p-6 flex flex-col h-full gap-4">
                    <div className="flex flex-row items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <cert.icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold leading-tight mb-1">{cert.title}</h3>
                            <p className="text-xs font-medium text-muted-foreground uppercase">{cert.issuer}</p>
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                    
                    <div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full" 
                          onClick={() => setSelectedCert({ title: cert.title, file: cert.file })}
                        >
                            <Eye className="mr-2 h-3 w-3" /> View Certificate
                        </Button>
                    </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div 
            className="relative bg-secondary/20 border border-border/50 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm overflow-hidden"
        >
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-2xl font-bold mb-4">Need specific documentation for your order?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We provide shipment-specific documents including Certificate of Origin, Phytosanitary Certificates, and Lab Reports upon request.
            </p>
            <Button size="lg" onClick={openModal}>
                Contact Compliance Team
            </Button>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <BaseModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        title={selectedCert?.title || "Certificate View"}
        className="!w-[90vw] !max-w-6xl !h-[90vh] flex flex-col"
      >
        <div className="w-full h-full min-h-[50vh] bg-muted/20 rounded-md overflow-hidden border">
           {selectedCert && (
             <iframe 
               src={`/aacexports/certificates/${selectedCert.file}#toolbar=0&navpanes=0&scrollbar=0`} 
               className="w-full h-full" 
               title={selectedCert.title}
             />
           )}
        </div>
      </BaseModal>
    </div>
  );
}