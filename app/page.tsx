import React from "react"
import { ModalProvider } from "@/lib/modal-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BlurFade } from "@/components/ui/blur-fade"
import { WordRotate } from "@/components/ui/word-rotate"
import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils"
import { CheckCircle2, Globe2, Truck, ShieldCheck } from "lucide-react"
import { HeroActions, StatItem, VerticalCard, FaqItem } from "@/components/landing-client"

export default function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex flex-col">
          {/* HERO SECTION */}
          <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 overflow-hidden bg-background">
            <DotPattern
              width={32}
              height={32}
              cx={1}
              cy={1}
              cr={1}
              className={cn("opacity-15 fill-muted-foreground/40")}
            />
            
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
              <BlurFade delay={0.2} inView>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm text-foreground/80 shadow-sm backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span className="font-medium">Exporting Globally Since 1996</span>
                </div>
              </BlurFade>

              <div className="max-w-5xl space-y-6">
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-serif leading-[1.1]">
                  Global Merchandise Exports, <br />
                  <span className="text-primary italic">Built on Trust.</span>
                </h1>
                
                <BlurFade delay={0.4} inView>
                  <div className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Premier exporter of 
                    <WordRotate 
                      words={["Natural Stones & Granite", "Fresh Produce & Spices", "Dehydrated Powders", "Iron & Steel Materials"]} 
                      className="inline-flex px-2 font-medium text-foreground"
                      duration={2500}
                    />
                    <br className="hidden md:block" />
                    Delivered with consistency, compliance, and scale.
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={0.6} inView className="flex flex-col sm:flex-row gap-4 pt-8">
                 <HeroActions />
              </BlurFade>
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-0 w-full border-t border-border/40 bg-background/50 backdrop-blur-sm py-8">
               <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatItem value={30} label="Years Experience" />
                  <StatItem value={25} label="Countries Served" />
                  <StatItem value={500} label="Happy Clients" suffix="+" />
                  <StatItem value={100} label="Quality Checks" suffix="%" />
               </div>
            </div>
          </section>

          {/* TRUST BAR / ABOUT */}
          <section id="about" className="py-24 bg-muted/30">
             <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif text-foreground">Three Decades of Uncompromising Quality</h2>
                   <div className="w-20 h-1 bg-primary rounded-full"></div>
                   <p className="text-muted-foreground text-lg leading-relaxed">
                     Al Ahmed Continental has been a pillar in the export industry since 1996. 
                     What started as a vision to bridge the gap between Indian craftsmanship and global demand 
                     has grown into a multi-vertical export house.
                   </p>
                   <p className="text-muted-foreground text-lg leading-relaxed">
                     We don't just ship products; we deliver peace of mind. From the quarries of Rajasthan to the 
                     farms of South India, every consignment is vetted, verified, and valued.
                   </p>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <TrustItem text="Government Recognized" />
                      <TrustItem text="ISO Certified Processes" />
                      <TrustItem text="End-to-End Logistics" />
                      <TrustItem text="24/7 Client Support" />
                   </ul>
                </div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background group">
                    <BorderBeam size={300} duration={12} delay={9} />
                    {/* Placeholder for About Image if real one not found, using gradient/pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                       <ShieldCheck className="w-32 h-32 text-primary/20 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                     <img 
                       src="/assets/img/hero-bg.jpg" 
                       alt="About Us" 
                       className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply hover:opacity-80 transition-opacity duration-700"
                     />
                </div>
             </div>
          </section>

          {/* VERTICALS */}
          <section id="verticals" className="py-32 bg-background relative">
             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                   <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Export Verticals</h2>
                   <p className="text-muted-foreground text-xl font-light">Diverse product lines, unified by a single standard of excellence.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   {/* Stones */}
                   <VerticalCard 
                     id="stones"
                     title="Natural Stones & Granite"
                     description="Premium Indian granite, marble, and sandstone for architectural marvels."
                     features={["Makrana White, Ketan Green", "Slabs, Tiles, & Blocks", "FOB Mundra Port"]}
                     gradient="bg-stone-50"
                     icon={<span className="text-3xl">🪨</span>}
                   />
                   
                   {/* Produce */}
                   <VerticalCard 
                     id="produce"
                     title="Fresh Produce (DAARAAB)"
                     description="Farm-fresh vegetables and fruits, packed for freshness and longevity."
                     features={["G4 Green Chilli Specialists", "Export-Grade Packaging", "UAE & Gulf Compliance"]}
                     gradient="bg-green-50"
                     icon={<span className="text-3xl">🌶️</span>}
                   />

                   {/* Powders */}
                   <VerticalCard 
                     id="powders"
                     title="Dehydrated Powders"
                     description="High-quality food ingredients for industrial and culinary applications."
                     features={["Onion, Garlic, Red Chilli", "Banana & Moringa Powder", "Bulk & Private Label"]}
                     gradient="bg-orange-50"
                     icon={<span className="text-3xl">🧂</span>}
                   />

                   {/* Steel */}
                   <VerticalCard 
                     id="steel"
                     title="Iron & Steel"
                     description="Construction-grade steel delivered with precision and structural integrity."
                     features={["Fe500 / Fe550 TMT Bars", "IS Standards Compliant", "Project-Based Supply"]}
                     gradient="bg-slate-50"
                     icon={<span className="text-3xl">🏗️</span>}
                   />
                </div>
             </div>
          </section>

          {/* QUALITY & COMPLIANCE */}
          <section id="quality" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
             {/* Background decorative elements */}
             <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotPattern width={40} height={40} className="fill-white" />
             </div>
             
             <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">Quality isn't a department.<br/>It's our legacy.</h2>
                   <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed font-light">
                     Every shipment leaving our facility undergoes rigorous inspection. 
                     We understand that in international trade, reputation is everything.
                     Our documentation team ensures seamless customs clearance at both ends.
                   </p>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <CheckCircle2 className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Pre-Shipment Inspection</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Globe2 className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Global Compliance</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Truck className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Logistics Expert</span>
                      </div>
                   </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl">
                   <h3 className="text-2xl font-bold mb-6 font-serif">Documentation Support</h3>
                   <ul className="space-y-4 text-lg">
                      <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        Certificate of Origin
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        Phytosanitary Certificates
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        Lab Analysis Reports
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        Commercial Invoice & Packing List
                      </li>
                   </ul>
                </div>
             </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-background">
             <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-6">
                   <FaqItem 
                     question="Can you provide samples before bulk orders?" 
                     answer="Yes, we can provide samples for most products. Shipping costs for samples are typically borne by the buyer, which is adjusted in the final bulk order." 
                   />
                   <FaqItem 
                     question="What are your payment terms?" 
                     answer="We typically work with L/C (Letter of Credit) or T/T (Telegraphic Transfer) depending on the order volume and client history. We ensure secure and transparent transactions." 
                   />
                   <FaqItem 
                     question="What is the Minimum Order Quantity (MOQ)?" 
                     answer="MOQ varies by product. For granite, it's usually one 20ft container. For high-value spices, smaller quantities can be discussed. Contact us for specific requirements." 
                   />
                   <FaqItem 
                     question="Do you handle shipping and insurance?" 
                     answer="Absolutely. We offer CNF (Cost and Freight) and CIF (Cost, Insurance, and Freight) pricing. Our logistics team handles the entire process until the destination port." 
                   />
                </div>
             </div>
          </section>

          {/* MARKETS & CTA */}
          <section id="markets" className="py-32 bg-muted/30 relative overflow-hidden">
             <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-foreground">Serving Markets Across the Globe</h2>
                <p className="text-muted-foreground text-xl mb-16 max-w-2xl mx-auto font-light">
                   From the Middle East to Europe, Southeast Asia to the Americas. 
                   We bridge the distance with reliability.
                </p>
                
                <div className="p-10 bg-background rounded-3xl border border-border shadow-2xl max-w-5xl mx-auto">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                      <div className="text-left">
                         <h3 className="text-3xl font-bold mb-3 font-serif">Ready to Source?</h3>
                         <p className="text-muted-foreground text-lg">Send us your detailed requirement and get a quote within 24 hours.</p>
                      </div>
                      <HeroActions text="Get A Quote Now" />
                   </div>
                </div>
             </div>
          </section>

        </main>
        
        <Footer />
        <EnquiryModal />
      </div>
    </ModalProvider>
  )
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-base font-medium text-foreground/80">
      <div className="p-1 rounded-full bg-primary/10">
        <CheckCircle2 className="w-5 h-5 text-primary" />
      </div>
      {text}
    </li>
  )
}
