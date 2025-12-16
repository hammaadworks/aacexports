"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, Loader2, CheckCircle } from "lucide-react"
import { useModal } from "@/lib/modal-context"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function EnquiryModal() {
  const { isOpen, closeModal } = useModal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Format for Lark Webhook (example structure)
    const larkPayload = {
      msg_type: "text",
      content: {
        text: `New Enquiry:\n\nCompany: ${data.companyName}
Contact: ${data.contactPerson}
Email: ${data.email}
Phone: ${data.phone}
Country: ${data.country}
Category: ${data.category}
Details: ${data.details}
Quantity: ${data.quantity}
`
      }
    }

    try {
      // Replace with actual Lark Webhook URL
      // Since I don't have the actual URL, I'll simulate a success or use a placeholder
      // In production, this should be an env variable and likely proxied via a Next.js API route to avoid CORS
      // For this prototype, I will simulate a delay.
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        closeModal()
      }, 2000)
    } catch (err) {
      setError("Failed to submit. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            className="fixed left-1/2 top-1/2 w-full max-w-lg bg-background border border-border rounded-xl shadow-2xl z-50 p-6 overflow-y-auto max-h-[90vh]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Send Requirement</h2>
              <button onClick={closeModal} className="p-1 hover:bg-muted rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className="text-xl font-medium">Enquiry Sent!</h3>
                <p className="text-muted-foreground">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name *</label>
                    <input required name="companyName" className="w-full p-2 rounded-md border border-input bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Person *</label>
                    <input required name="contactPerson" className="w-full p-2 rounded-md border border-input bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input required type="email" name="email" className="w-full p-2 rounded-md border border-input bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone / WhatsApp *</label>
                    <input required name="phone" className="w-full p-2 rounded-md border border-input bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Country *</label>
                  <input required name="country" className="w-full p-2 rounded-md border border-input bg-background" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Product Category *</label>
                  <select name="category" className="w-full p-2 rounded-md border border-input bg-background">
                    <option value="Natural Stones">Natural Stones & Granite</option>
                    <option value="Fresh Produce">Fresh Produce (DAARAAB)</option>
                    <option value="Dehydrated Powders">Dehydrated Powders</option>
                    <option value="Iron & Steel">Iron & Steel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Product Details *</label>
                  <textarea required name="details" rows={3} className="w-full p-2 rounded-md border border-input bg-background" placeholder="Specs, Sizes, Grade..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity / Volume *</label>
                  <input required name="quantity" className="w-full p-2 rounded-md border border-input bg-background" placeholder="e.g. 1 Container, 20 Tons..." />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="pt-2">
                   <ShimmerButton type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Enquiry"}
                   </ShimmerButton>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
