"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "motion/react";
import { ConfettiButton } from "@/components/ui/confetti";
import { Calendar, Mail } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export function ContactCTA() {
  const { openModal } = useModal();

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div 
            className="max-w-4xl mx-auto bg-background border border-border/50 shadow-2xl rounded-3xl p-8 md:p-16 relative overflow-hidden backdrop-blur-sm text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
             <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
             
             <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10 text-foreground">
                Ready to Source with Confidence?
             </h3>
             <p className="text-muted-foreground mb-10 text-xl relative z-10 max-w-2xl mx-auto">
                Share your requirements and receive a <strong className="text-foreground">tailored quote within 24 hours</strong> from our export team.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                <ConfettiButton 
                    className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    options={{ colors: ["#EAB308", "#303F2D", "#FFFFFF"] }}
                    onClick={openModal}
                >
                    Get A Quote Now
                </ConfettiButton>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
