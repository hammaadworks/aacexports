import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModalProvider } from "@/lib/modal-context"
import { EnquiryModal } from "@/components/enquiry-modal"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Lens } from "@/components/ui/lens"
import { cn } from "@/lib/utils"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PowdersPage() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex flex-col pt-24">
          <section className="relative py-20 px-4 md:px-6 overflow-hidden">
             <DotPattern width={32} height={32} className="opacity-10 fill-orange-500" />
             <div className="container mx-auto max-w-5xl">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                   <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <BlurFade delay={0.1} inView>
                   <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-foreground">Dehydrated Powders</h1>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                   <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                      Concentrated flavor, extended shelf life. We supply high-grade food ingredients for the processing industry and culinary sector.
                   </p>
                </BlurFade>
             </div>
          </section>

          {/* Showcase with Lens */}
          <section className="py-12 bg-background border-b border-border/50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold font-serif mb-8 text-center">Ingredient Showcase</h2>
              <div className="max-w-2xl mx-auto">
                <Lens zoomFactor={2} lensSize={150}>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                    <Image 
                      src="/assets/img/features-2.png" 
                      alt="Quality Powders"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Lens>
                <p className="text-center text-sm font-medium text-muted-foreground mt-4">Premium Dehydrated Ingredients</p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/20">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <h2 className="text-3xl font-bold font-serif">Pure & Potent</h2>
                      <div className="prose prose-stone dark:prose-invert">
                         <p>
                            Dehydration technology allows us to preserve the nutritional value and flavor profile of 
                            fresh produce while drastically reducing weight and increasing shelf life. Our powders 
                            are free from artificial additives and anti-caking agents (unless requested).
                         </p>
                         <h3 className="text-xl font-bold mt-6 mb-3">Product Range</h3>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Onion Powder (Red/White):</strong> Essential for seasoning mixes and ready-to-eat meals.</li>
                            <li><strong>Garlic Powder:</strong> High potency, consistent flavor.</li>
                            <li><strong>Red Chilli Powder:</strong> Customized heat levels (SHU) and color values (ASTA).</li>
                            <li><strong>Banana Powder:</strong> Used in baby food and bakery products.</li>
                            <li><strong>Moringa Powder:</strong> The superfood supplement.</li>
                         </ul>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                         <h3 className="text-2xl font-bold font-serif mb-4">Applications</h3>
                         <ul className="space-y-4 text-muted-foreground">
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Industrial</span>
                               <span className="font-medium text-foreground">Spice Blends, Sauces, Snacks</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Retail</span>
                               <span className="font-medium text-foreground">Private Label Jars/Pouches</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Packaging</span>
                               <span className="font-medium text-foreground">Bulk Bags (20/25kg) with liner</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Quality</span>
                               <span className="font-medium text-foreground">Metal Detected, Sterilized</span>
                            </li>
                         </ul>
                      </div>
                      
                      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                         <h3 className="text-2xl font-bold font-serif mb-4">Catalog</h3>
                         <p className="mb-6 text-muted-foreground">Get technical specs for our dehydrated range.</p>
                         <a href="/aace_catalog.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
                            <ShimmerButton className="w-full justify-center">
                               <Download className="w-4 h-4 mr-2" /> Download Specs
                            </ShimmerButton>
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </section>
          
          <Footer />
        </main>
        <EnquiryModal />
      </div>
    </ModalProvider>
  )
}
