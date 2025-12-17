"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, Eye } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const certificates = [
  {
    title: "Import Export Code (IEC)",
    issuer: "DGFT, Govt. of India",
    description: "Primary license for undertaking import/export activities in India.",
    icon: FileText,
  },
  {
    title: "GST Registration",
    issuer: "Goods & Services Tax",
    description: "Official tax registration ensuring compliance with Indian tax laws.",
    icon: FileText,
  },
  {
    title: "MSME / Udyam Registration",
    issuer: "Ministry of MSME",
    description: "Certification for Micro, Small and Medium Enterprises.",
    icon: ShieldCheck,
  },
  {
    title: "APEDA Registration",
    issuer: "APEDA",
    description: "Agricultural and Processed Food Products Export Development Authority.",
    icon: ShieldCheck,
  },
  {
    title: "Spices Board Registration",
    issuer: "Ministry of Commerce & Industry",
    description: "Mandatory for export of spices and spice products.",
    icon: ShieldCheck,
  },
  {
    title: "FIEO Membership",
    issuer: "Federation of Indian Export Organisations",
    description: "Recognized status as a premier export organization.",
    icon: ShieldCheck,
  },
];

export default function CertificatesPage() {
  return (
    <div className="pt-24 pb-12 relative min-h-screen">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("flex flex-col h-full glass-card-hover border-transparent")}>
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <cert.icon size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight mb-1">{cert.title}</CardTitle>
                    <p className="text-xs font-medium text-muted-foreground uppercase">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
                <CardFooter className="pt-0 gap-2">
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    <Eye className="mr-2 h-3 w-3" /> View
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/20 border border-border/50 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
        >
            <h3 className="text-2xl font-bold mb-4">Need specific documentation for your order?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We provide shipment-specific documents including Certificate of Origin, Phytosanitary Certificates, and Lab Reports upon request.
            </p>
            <Button size="lg" asChild>
                <Link href="/#contact">Contact Compliance Team</Link>
            </Button>
        </motion.div>
      </section>
    </div>
  );
}
