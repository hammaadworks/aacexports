"use client";

import React, { useState } from "react";
import BaseModal from "@/components/ui/base-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Loader2, CheckCircle2, Phone, Send } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    contact: "", // Combined Email/Phone
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }, 300);
  };

  const renderContent = () => (
    <div className="flex flex-col gap-6">
      {/* Direct Contact Options */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="h-auto py-4 flex-col gap-1 hover:bg-green-50 hover:text-green-700 hover:border-green-200 dark:hover:bg-green-900/20" asChild>
            <Link href="https://wa.me/916363372655?text=Interest%20in%20aacexports.in%20lets%20discuss" target="_blank">
                <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-bold">WhatsApp</span>
                </div>
                <span className="text-xs text-muted-foreground">+91 63633 72655</span>
            </Link>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-1 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 dark:hover:bg-blue-900/20" asChild>
            <Link href="mailto:sales@aacexports.in?subject=Enquiry%20from%20Website&body=Hi%20Team%2C%0A%0AI%20am%20interested%20in...">
                <div className="flex items-center gap-2 mb-1">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-bold">Email</span>
                </div>
                <span className="text-xs text-muted-foreground">sales@aacexports.in</span>
            </Link>
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or write to us</span>
        </div>
      </div>

      {/* Simplified Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input 
            placeholder="Name / Company" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-secondary/20"
        />
        <Input 
            placeholder="Email or Phone Number" 
            required 
            value={formData.contact}
            onChange={(e) => setFormData({...formData, contact: e.target.value})}
            className="bg-secondary/20"
        />
        <Textarea 
            placeholder="How can we help?" 
            className="min-h-[80px] bg-secondary/20 resize-none" 
            required 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
        </Button>
      </form>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
        >
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
        </motion.div>
        <div>
            <h3 className="text-xl font-semibold mb-2">Received!</h3>
            <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">
                We'll get back to you shortly.
            </p>
        </div>
        <Button onClick={handleClose} variant="secondary" className="mt-4">
            Close
        </Button>
    </div>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title={success ? "" : "Get in Touch"}
      description={success ? "" : "We usually reply within a few hours."}
      footerContent={null} 
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