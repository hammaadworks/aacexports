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

export default function StonesPage() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex flex-col pt-24">
          {/* Hero */}
          <section className="relative py-20 px-4 md:px-6 overflow-hidden">
             <DotPattern width={32} height={32} className="opacity-10 fill-stone-500" />
             <div className="container mx-auto max-w-5xl">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                   <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <BlurFade delay={0.1} inView>
                   <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-foreground">Natural Stones & Granite</h1>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                   <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                      Timeless materials. Precision‑cut. Export‑ready.
                   </p>
                </BlurFade>
             </div>
          </section>

          {/* Featured Gallery with Lens */}
          <section className="py-12 bg-background border-b border-border/50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold font-serif mb-8 text-center">Featured Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <Lens zoomFactor={2} lensSize={150}>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                      <Image 
                        src="/assets/img/product-range/granite.png" 
                        alt="Premium Granite Slab"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Lens>
                  <p className="text-center text-sm font-medium text-muted-foreground">Premium Granite Slabs</p>
                </div>
                <div className="space-y-4">
                  <Lens zoomFactor={2} lensSize={150}>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                      <Image 
                        src="/assets/img/product-range/marble.png" 
                        alt="Exquisite Marble"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Lens>
                  <p className="text-center text-sm font-medium text-muted-foreground">Exquisite Marble Collection</p>
                </div>
              </div>
            </div>
          </section>

          {/* Details */}
          <section className="py-16 bg-muted/20">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <h2 className="text-3xl font-bold font-serif">Our Collection</h2>
                      <div className="prose prose-stone dark:prose-invert">
                         <p>
                            We source from India’s richest quarry belts.
                         </p>
                         <h3 className="text-xl font-bold mt-6 mb-3">Popular Varieties</h3>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Makrana White:</strong> The legendary marble used in the Taj Mahal.</li>
                            <li><strong>Ketan Green:</strong> A unique, vibrant granite perfect for countertops.</li>
                            <li><strong>Albeta:</strong> Premium white marble with subtle figuring.</li>
                            <li><strong>Paradiso:</strong> Classic multicolor granite with waves of violet and gray.</li>
                            <li><strong>Absolute Black:</strong> Dense, consistent black granite for monuments and high-end facades.</li>
                         </ul>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                         <h3 className="text-2xl font-bold font-serif mb-4">Specifications</h3>
                         <ul className="space-y-4 text-muted-foreground">
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Forms</span>
                               <span className="font-medium text-foreground">Blocks, slabs, tiles</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Finishes</span>
                               <span className="font-medium text-foreground">Polished, honed, flamed, leather, bush‑hammered</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Thickness</span>
                               <span className="font-medium text-foreground">18mm, 20mm, 30mm</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                               <span>Origin</span>
                               <span className="font-medium text-foreground">South & North India</span>
                            </li>
                         </ul>
                      </div>
                      
                      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                         <h3 className="text-2xl font-bold font-serif mb-4">Catalog</h3>
                         <p className="mb-6 text-muted-foreground">Download complete stone catalog with high‑res textures.</p>
                         {/* Placeholder download link */}
                         <a href="/aace_catalog.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
                            <ShimmerButton className="w-full justify-center">
                               <Download className="w-4 h-4 mr-2" /> Download PDF Catalog
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
