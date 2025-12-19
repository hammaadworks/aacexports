"use client";

import React, { useState } from "react";
import BaseModal from "@/components/ui/base-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Loader2, CheckCircle2, Phone, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({ contact: "" });

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    contact: "", 
    message: ""
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { contact: "" };

    if (formData.contact) {
      // Basic validation for Email or Phone (allow international format for phone)
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact);
      const isPhone = /^\+?[\d\s-]{10,}$/.test(formData.contact);

      if (!isEmail && !isPhone) {
        newErrors.contact = "Please enter a valid email or phone number.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", contact: "", message: "" });
        setErrors({ contact: "" });
    }, 300);
  };

  // Dynamic Content for Links
  const baseWa = "https://wa.me/916363372655";
  const baseMail = "mailto:sales@aacexports.in";
  
  const contactText = formData.name || formData.contact || formData.message 
    ? `Hi, I am interested in AAC Exports.\n\nName: ${formData.name}\nContact: ${formData.contact}\nRequirement: ${formData.message}`
    : "Hi, I am interested in AAC Exports products. Let's discuss.";
  
  const waLink = `${baseWa}?text=${encodeURIComponent(contactText)}`;
  const mailLink = `${baseMail}?subject=Enquiry%20from%20Website&body=${encodeURIComponent(contactText)}`;

  const renderContent = () => (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="text-center space-y-1">
         <h2 className="text-2xl font-serif font-bold text-foreground">Get in Touch</h2>
         <p className="text-muted-foreground text-sm">We typically reply within 2 hours.</p>
      </div>

      {/* Direct Contact Options - Compact & Up Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button variant="outline" className="h-16 px-4 justify-start border-border/60 hover:border-green-500/50 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all duration-300 group" asChild>
            <Link href={waLink} target="_blank" className="flex items-center gap-3 w-full">
                <div className="h-9 w-9 shrink-0 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">WhatsApp</span>
                        <span className="text-[10px] text-green-600 dark:text-green-400 font-medium bg-green-100/50 dark:bg-green-900/20 px-1.5 rounded-full">Fastest</span>
                    </div>
                    <span className="text-xs text-muted-foreground truncate w-full">+91 63633 72655</span>
                </div>
            </Link>
        </Button>
        <Button variant="outline" className="h-16 px-4 justify-start border-border/60 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 group" asChild>
            <Link href={mailLink} className="flex items-center gap-3 w-full">
                <div className="h-9 w-9 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">Email</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium bg-blue-100/50 dark:bg-blue-900/20 px-1.5 rounded-full">Official</span>
                    </div>
                    <span className="text-xs text-muted-foreground truncate w-full">sales@aacexports.in</span>
                </div>
            </Link>
        </Button>
      </div>

      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase font-medium tracking-widest">
            <span className="bg-background px-4 text-muted-foreground">Or send a message</span>
        </div>
      </div>

      {/* Modern Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="space-y-4">
            <div className="relative group">
                <Input 
                    placeholder="Your Name / Company" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-11 bg-background border-border/80 focus-visible:ring-primary/30 transition-all pl-4"
                />
            </div>
            <div className="relative group">
                <Input 
                    placeholder="Email or Phone Number" 
                    required 
                    value={formData.contact}
                    onChange={(e) => {
                        setFormData({...formData, contact: e.target.value});
                        if (errors.contact) setErrors({ contact: "" });
                    }}
                    className={`h-11 bg-background border-border/80 focus-visible:ring-primary/30 transition-all pl-4 ${errors.contact ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.contact && <span className="text-xs text-red-500 mt-1 ml-1">{errors.contact}</span>}
            </div>
            <div className="relative group">
                <Textarea 
                    placeholder="Tell us about your requirement..." 
                    className="min-h-[100px] bg-background border-border/80 focus-visible:ring-primary/30 resize-none p-4" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
            </div>
        </div>

        <Button 
            type="submit" 
            className="w-full h-12 mt-2 rounded-full text-primary-foreground font-bold text-sm shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 bg-primary"
            disabled={loading}
        >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <span className="flex items-center">Send Message <ArrowRight className="ml-2 h-4 w-4" /></span>}
        </Button>
      </form>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
        <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2"
        >
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
        </motion.div>
        <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-foreground">Inquiry Received!</h3>
            <p className="text-muted-foreground text-sm max-w-[280px] mx-auto leading-relaxed">
                Thank you for reaching out. Our team will review your requirement and get back to you shortly.
            </p>
        </div>
        <Button onClick={handleClose} variant="outline" className="mt-4 px-8 rounded-full border-border/60 hover:bg-secondary/10">
            Close
        </Button>
    </div>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title=""
      description=""
      footerContent={null} 
      headerClassName="hidden" // Hiding default header to use custom one for better layout control
    >
      <AnimatePresence mode="wait">
        <motion.div
            key={success ? "success" : "form"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
        >
            {success ? renderSuccess() : renderContent()}
        </motion.div>
      </AnimatePresence>
    </BaseModal>
  );
}
