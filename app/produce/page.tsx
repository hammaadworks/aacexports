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

export default function ProducePage() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex flex-col pt-24">
          <section className="relative py-20 px-4 md:px-6 overflow-hidden">
             <DotPattern width={32} height={32} className="opacity-10 fill-green-500" />
             <div className="container mx-auto max-w-5xl">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                   <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <BlurFade delay={0.1} inView>
                   <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-foreground">Fresh Produce (DAARAAB)</h1>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                   <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                      Farm-to-port freshness backed by strict quality control.
                   </p>
                </BlurFade>
             </div>
          </section>

          {/* Fresh Gallery with Lens */}
          <section className="py-12 bg-background border-b border-border/50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold font-serif mb-8 text-center">Fresh From Farms</h2>
              <div className="max-w-2xl mx-auto">
                <Lens zoomFactor={2} lensSize={150}>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                    <Image 
                      src="/assets/img/features-1.png" 
                      alt="Fresh Produce Assortment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Lens>
                <p className="text-center text-sm font-medium text-muted-foreground mt-4">Hand-picked Quality</p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/20">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <h2 className="text-3xl font-bold font-serif">Freshness Guaranteed</h2>
                      <div className="prose prose-stone dark:prose-invert">
                         <p>
                            Direct sourcing from contract farmers ensures export-standard size, color, and residue control.
                         </p>
                         <h3 className="text-xl font-bold mt-6 mb-3">Key Exports</h3>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong>G4 Green Chilli:</strong> Known for its heat and shelf life. Our specialty export to the Middle East.</li>
                            <li><strong>Red Onions:</strong> Nashik and Pune varieties, graded for size and pungency.</li>
                            <li><strong>Pomegranates:</strong> Bhagwa variety, rich in color and seeds.</li>
                            <li><strong>Seasonal Fruits:</strong> Alphonso Mangoes, Grapes, and Bananas.</li>
                         </ul>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                         <h3 className="text-2xl font-bold font-serif mb-4">Export Standards</h3>
                         <ul className="space-y-4 text-muted-foreground">
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Packaging</span>
                               <span className="font-medium text-foreground">Corrugated boxes, mesh bags</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Cold Chain</span>
                               <span className="font-medium text-foreground">Pre‑cooling, reefer containers</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Certification</span>
                               <span className="font-medium text-foreground">Phytosanitary, APEDA</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Main Markets</span>
                               <span className="font-medium text-foreground">UAE, Saudi Arabia, Qatar, Europe</span>
                            </li>
                         </ul>
                      </div>
                      
                      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                         <h3 className="text-2xl font-bold font-serif mb-4">Catalog</h3>
                         <p className="mb-6 text-muted-foreground">View seasonal calendar + packaging specs.</p>
                         <a href="/aace_catalog.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
                            <ShimmerButton className="w-full justify-center">
                               <Download className="w-4 h-4 mr-2" /> Download Produce List
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
