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
import { HeroActions, StatItem, FaqItem } from "@/components/landing-client"
import Aurora from "@/components/Aurora"
import BlurText from "@/components/BlurText"
import SplitText from "@/components/SplitText"
import ScrollReveal from "@/components/ScrollReveal"
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient"
import MagicBento from "@/components/MagicBento"
import LogoLoop from "@/components/LogoLoop"

export default function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex flex-col">
          {/* HERO SECTION */}
          <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 opacity-50">
               <Aurora colorStops={["#00d2ff", "#3a7bd5", "#00d2ff"]} speed={0.5} />
            </div>
            
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
              <BlurFade delay={0.2} inView>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm text-foreground/80 shadow-sm backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span className="font-medium">Exporting Globally Since 1996</span>
                </div>
              </BlurFade>

              <div className="max-w-5xl space-y-6">
                 <BlurText 
                   text="Global Exports. Zero Compromise." 
                   className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-serif leading-[1.1] justify-center text-center"
                   delay={50}
                   animateBy="words"
                   direction="top"
                 />
                
                <BlurFade delay={0.4} inView>
                  <div className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    <SplitText 
                       text="Delivering Stones, Steel, Electronics, Food Grains, and Dehydrated Powders for 30+ years."
                       className="inline font-medium text-foreground"
                       delay={30}
                       duration={0.5}
                    />
                    <br className="hidden md:block mt-4" />
                    <span className="block mt-2 font-semibold">Consistency. Compliance. Scale.</span>
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={0.6} inView className="flex flex-col sm:flex-row gap-4 pt-8">
                 <HeroActions />
              </BlurFade>
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-0 border-t border-border/40 w-full backdrop-blur-md bg-white/20 dark:bg-black/20 py-8">
               <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatItem value={30} label="Years Expertise" />
                  <StatItem value={25} label="Global Markets" suffix="+" />
                  <StatItem value={500} label="Clients" suffix="+" />
                  <StatItem value={100} label="Quality Checks" suffix="%" />
               </div>
            </div>
          </section>

          {/* TRUST BAR / ABOUT */}
          <section id="about" className="py-24 bg-muted/30">
             <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <ScrollReveal 
                      baseOpacity={0.2} 
                      enableBlur={true} 
                      containerClassName="mb-8"
                      textClassName="text-3xl md:text-4xl font-bold tracking-tight font-serif text-foreground"
                   >
                      A Reputation Built on Reliability
                   </ScrollReveal>
                   
                   <div className="w-20 h-1 bg-primary rounded-full"></div>
                   <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                     <p>
                       Since 1996, we’ve focused on one thing: <strong className="text-foreground">Do it right. Deliver on time. Every time.</strong>
                     </p>
                     <p>
                       Our clients stay because of our predictability, documentation accuracy, and zero‑tolerance quality standards.
                     </p>
                     <p>
                       We don’t operate like traders. We operate like <strong className="text-foreground">export infrastructure</strong>.
                     </p>
                   </div>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <TrustItem text="Government‑Recognized Exporter" />
                      <TrustItem text="ISO‑Aligned Processes" />
                      <TrustItem text="Complete Documentation & Logistics Support" />
                      <TrustItem text="24/7 Client Assistance" />
                   </ul>
                   
                   <div className="pt-8">
                      <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-semibold">Trusted by Global Partners</p>
                      <LogoLoop 
                        logos={[
                          { src: "/file.svg", alt: "Partner 1" },
                          { src: "/globe.svg", alt: "Partner 2" },
                          { src: "/window.svg", alt: "Partner 3" },
                          { src: "/next.svg", alt: "Partner 4" },
                          { src: "/vercel.svg", alt: "Partner 5" },
                        ]} 
                        speed={50} 
                        direction="left" 
                        logoHeight={40} 
                        gap={40}
                        pauseOnHover={true}
                        width="100%"
                        className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                      />
                   </div>
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
                   <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Our Trading Verticals</h2>
                   <p className="text-muted-foreground text-xl font-light">Three divisions. One standard: Excellence without compromise.</p>
                </div>

                <MagicBento 
                  textAutoHide={false}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  spotlightRadius={300}
                  particleCount={15}
                  glowColor="132, 0, 255"
                />
             </div>
          </section>

          {/* QUALITY & COMPLIANCE */}
          <section id="quality" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
             {/* Background decorative elements */}
             <div className="absolute inset-0 z-0">
                <GravityStarsBackground starsCount={100} starsSize={2} movementSpeed={0.5} starsOpacity={0.3} className="w-full h-full" />
             </div>
             
             <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">Quality Isn’t a Department — It’s Our Legacy</h2>
                   <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed font-light">
                     Every shipment undergoes multi-stage inspection. 
                     Every document is checked twice.
                     Every timeline is honored.
                   </p>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <CheckCircle2 className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Pre‑Shipment Inspection</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Globe2 className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Global Compliance Standards</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Truck className="w-10 h-10 opacity-90" />
                        <span className="font-semibold text-lg">Dedicated Logistics Team</span>
                      </div>
                   </div>
                </div>
                <div className="w-full h-full rounded-[20px] p-10 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
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
                        Lab Reports
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
                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-foreground">Serving Buyers Across 25+ Countries</h2>
                <p className="text-muted-foreground text-xl mb-16 max-w-2xl mx-auto font-light">
                   Middle East. Europe. Africa. Southeast Asia. The Americas.
                </p>
                
                <div className="w-full max-w-5xl mx-auto rounded-[24px] shadow-2xl relative overflow-hidden backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20">
                   <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                      <div className="absolute inset-0 z-0 opacity-20">
                         <GradientBackground />
                      </div>
                      <div className="text-left relative z-10">
                         <h3 className="text-3xl font-bold mb-3 font-serif">Ready to Source?</h3>
                         <p className="text-muted-foreground text-lg">Send your requirements. Receive a tailored quote within 24 hours.</p>
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
