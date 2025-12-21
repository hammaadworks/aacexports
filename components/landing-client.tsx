"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useModal } from "@/lib/modal-context"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"

export function HeroActions({ text = "Send Requirement" }: { text?: string }) {
  const { openModal } = useModal()
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <ShimmerButton onClick={openModal} className="h-12 px-8 text-base">
        {text}
      </ShimmerButton>
      <button 
        onClick={() => document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth' })}
        className="h-12 px-8 rounded-full border border-input bg-background hover:bg-muted text-foreground transition-colors font-medium"
      >
        Explore Verticals
      </button>
    </div>
  )
}

export function StatItem({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary flex items-baseline font-serif">
         <NumberTicker value={value} />
         <span>{suffix}</span>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1 font-sans">{label}</span>
    </div>
  )
}

export function VerticalCard({ 
  id, 
  title, 
  description, 
  features, 
  gradient,
  icon 
}: { 
  id: string, 
  title: string, 
  description: string, 
  features: string[], 
  gradient: string,
  icon: React.ReactNode
}) {
    // Determine the route based on ID (simple mapping)
    // id "stones" -> "/stones", etc.
    // If id matches the folder name, we are good.
    const route = `/${id}`

    return (
        <div className="h-full">
            <Link href={route} className="block h-full group">
                <div 
                    className="h-full rounded-[20px] backdrop-blur-md bg-white/60 dark:bg-black/60 border border-border group-hover:border-primary/50 transition-colors overflow-hidden p-8 flex flex-col justify-between"
                >
                    <div>
                       <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-background/50 border border-border shadow-sm text-primary backdrop-blur-sm", gradient)}>
                          {icon}
                       </div>
                       <h3 className="text-2xl font-bold mb-3 font-serif tracking-tight group-hover:text-primary transition-colors">{title}</h3>
                       <p className="text-muted-foreground mb-6 leading-relaxed font-sans text-sm">
                          {description}
                       </p>
                       <ul className="space-y-2 mb-8">
                          {features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {feature}
                              </li>
                          ))}
                       </ul>
                    </div>
                    <div 
                      className="w-full py-3 rounded-lg border border-border bg-background/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium text-sm mt-auto shadow-sm flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                        Explore Details <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-border rounded-lg overflow-hidden bg-background">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </button>
            <div 
                className={cn(
                    "grid transition-all duration-300 ease-in-out text-muted-foreground text-sm px-4",
                    isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    {answer}
                </div>
            </div>
        </div>
    )
}
