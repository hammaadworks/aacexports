"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Download, Lock, ShieldCheck, Image as ImageIcon, FileText, Layout, Info, Archive, ArrowRight, ExternalLink, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MagicCard } from "@/components/ui/magic-card"
import { Badge } from "@/components/ui/badge"
import { Meteors } from "@/components/ui/meteors"
import { cn } from "@/lib/utils"
import {staticallyCDN} from "@/lib/constants";

const CODE = "YWFjZTEyMzQ="; // base64

const brandkitDir = `${staticallyCDN}/brandkit`;

const EDIT_LINKS = [
    {
        name: "Letterhead Template",
        url: "https://docs.google.com/document/d/10v15a21zE0elmyc_nNeeM66tSjoM5pV68ftsREL9080/edit",
        description: "Google Docs template for official letters",
        icon: <Pencil className="w-4 h-4" />
    },
    {
        name: "PDFGear Editor",
        url: "https://www.pdfgear.com/edit-pdf/",
        description: "Free online PDF editor for finalizing documents",
        icon: <ExternalLink className="w-4 h-4" />
    }
]

const BRAND_ASSETS = [
    {
        title: "Letterhead & Docs",
        description: "Official documentation templates",
        icon: <FileText className="w-5 h-5" />,
        items: [
            { name: "Standard Letterhead", path: `${brandkitDir}/letterhead/letterhead.png`, pdfPath: `${brandkitDir}/letterhead/letterhead.pdf`, category: "Document", description: "Main stationery" },
            { name: "Quotation Form", path: `${brandkitDir}/letterhead/quotation.png`, pdfPath: `${brandkitDir}/letterhead/quotation.pdf`, category: "Sales", description: "Official quote format" },
            { name: "Performa Invoice", path: `${brandkitDir}/letterhead/performa_invoice.png`, pdfPath: `${brandkitDir}/letterhead/performa_invoice.pdf`, category: "Finance", description: "Pre-payment doc" },
            { name: "Commercial Invoice", path: `${brandkitDir}/letterhead/commercial_invoice.png`, pdfPath: `${brandkitDir}/letterhead/commercial_invoice.pdf`, category: "Finance", description: "Final shipping doc" },
        ]
    },
    {
        title: "Marketing Assets",
        description: "Marketing and social media identity",
        icon: <Layout className="w-5 h-5" />,
        items: [
            { name: "Showcase Card", path: `${brandkitDir}/cards/card_showcase.png`, category: "Marketing", description: "Card presentation" },
            { name: "Business Card", path: `${brandkitDir}/cards/card.png`, category: "Identity", description: "Standard business card design" },
            { name: "Profile Card", path: `${brandkitDir}/cards/profile_card.png`, category: "Identity", description: "Digital business card" },
            { name: "Profile Banner", path: `${brandkitDir}/cards/profile_banner.png`, category: "Social", description: "LinkedIn/Twitter banner" },
            { name: "Catalog Cover", path: `${brandkitDir}/cards/catalog.png`, category: "Sales", description: "Official catalog styling" },
        ]
    },
    {
        title: "Logos",
        description: "Primary brand identity markers",
        icon: <ImageIcon className="w-5 h-5" />,
        items: [
            { name: "Full Logo (PNG)", path: `${brandkitDir}/logo/logo_full.png`, category: "Logo", description: "Logo with wordmark" },
            { name: "Logo Icon (PNG)", path: `${brandkitDir}/logo/logo.png`, category: "Icon", description: "Symbol only" },
            { name: "Logo on Green (PNG)", path: `${brandkitDir}/logo/logo_bg.png`, category: "Icon", description: "White symbol on brand green" },
            { name: "Rounded Logo (PNG)", path: `${brandkitDir}/logo/logo_rounded.png`, category: "Icon", description: "Logo in circular container" },
            { name: "Wordmark (PNG)", path: `${brandkitDir}/logo/wordmark.png`, category: "Typography", description: "Text only brand mark" },
            { name: "Wordmark on Green (PNG)", path: `${brandkitDir}/logo/wordmark_bg.png`, category: "Typography", description: "White text on brand green" },
        ]
    },
    {
        title: "Favicons & App Icons",
        description: "Web and app application icons",
        icon: <Info className="w-5 h-5" />,
        items: [
            { name: "Apple Touch Icon", path: `${brandkitDir}/favicons/apple-touch-icon.png`, category: "Web", description: "iOS home screen" },
            { name: "Android Chrome 512x512", path: `${brandkitDir}/favicons/android-chrome-512x512.png`, category: "Android", description: "Large app icon" },
            { name: "Android Chrome 192x192", path: `${brandkitDir}/favicons/android-chrome-192x192.png`, category: "Android", description: "Standard app icon" },
            { name: "Favicon 32x32", path: `${brandkitDir}/favicons/favicon-32x32.png`, category: "Web", description: "Browser tab icon" },
            { name: "Favicon 16x16", path: `${brandkitDir}/favicons/favicon-16x16.png`, category: "Web", description: "Small browser icon" },
            { name: "Favicon (ICO)", path: `${brandkitDir}/favicons/favicon.ico`, category: "Legacy Web", description: "Standard ICO format" },
        ]
    }
]

const ARCHIVED_ASSETS = [
    {
        title: "Al Ahmad (V0) Assets",
        description: "Legacy branding and development materials",
        items: [
            { name: "V0 Full Logo (PNG)", path: `${brandkitDir}/v0_alahmed/logo/logo_full.png`, category: "Legacy Logo" },
            { name: "V0 Logo Icon (PNG)", path: `${brandkitDir}/v0_alahmed/logo/logo.png`, category: "Legacy Logo" },
            { name: "V0 Wordmark (PNG)", path: `${brandkitDir}/v0_alahmed/logo/wordmark.png`, category: "Legacy Logo" },
            { name: "V0 Wordmark BG (PNG)", path: `${brandkitDir}/v0_alahmed/logo/wordmark_bg.png`, category: "Legacy Logo" },
            { name: "V0 Logo BG (PNG)", path: `${brandkitDir}/v0_alahmed/logo/logo_bg.png`, category: "Legacy Logo" },
            { name: "V0 Letterhead (PDF)", path: `${brandkitDir}/v0_alahmed/letterhead/letterhead.pdf`, category: "Legacy Doc" },
            { name: "V0 Page Header (PNG)", path: `${brandkitDir}/v0_alahmed/letterhead/page_header.png`, category: "Legacy Doc" },
            { name: "V0 Header (PNG)", path: `${brandkitDir}/v0_alahmed/letterhead/header.png`, category: "Legacy Doc" },
            { name: "V0 Footer (PNG)", path: `${brandkitDir}/v0_alahmed/letterhead/footer.png`, category: "Legacy Doc" },
        ]
    }
]

export default function BrandKitPage() {
    const [password, setPassword] = useState("")
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const auth = localStorage.getItem("brandkit_auth")
        if (auth === CODE) {
            setIsAuthorized(true)
        }
        setLoading(false)
    }, [])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (btoa(password) === CODE) {
            setIsAuthorized(true)
            localStorage.setItem("brandkit_auth", CODE)
            setError(false)
        } else {
            setError(true)
            setTimeout(() => setError(false), 2000)
        }
    }

    if (loading) return null

    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-6">
            <AnimatePresence mode="wait">
                {!isAuthorized ? (
                    <motion.div 
                        key="login"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="max-w-md mx-auto mt-20"
                    >
                        <div className="relative p-8 rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-2xl">
                            <Meteors number={20} />
                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                                    <Lock className="w-8 h-8 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-serif font-bold tracking-tight text-primary">Brand Vault</h1>
                                    <p className="text-muted-foreground text-sm font-light">Protected access to internal brand assets.</p>
                                </div>
                                
                                <form onSubmit={handleLogin} className="w-full space-y-4">
                                    <div className="space-y-1">
                                        <motion.div
                                            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Input 
                                                type="password" 
                                                placeholder="Access Code" 
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className={cn(
                                                    "text-center bg-background/50 border-primary/20 focus:border-primary transition-all rounded-xl h-12",
                                                    error && "border-destructive text-destructive"
                                                )}
                                            />
                                        </motion.div>
                                        {error && <p className="text-destructive text-[10px] uppercase tracking-widest font-bold mt-2">Incorrect Access Code</p>}
                                    </div>
                                    <Button type="submit" className="w-full h-12 text-base font-bold tracking-wide rounded-xl">
                                        Unlock Vault <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </form>
                                
                                <div className="pt-4 flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                                    <ShieldCheck className="w-3 h-3" />
                                    Internal Use Only
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-6xl mx-auto space-y-20"
                    >
                        {/* Header */}
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                                Al Ahmad Continental
                            </Badge>
                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary">Brand Kit</h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                                Comprehensive collection of official logos, stationery templates, and identity guidelines. 
                                Maintaining consistency across all global touchpoints.
                            </p>
                        </div>

                        {/* Edit Links Section */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                    <Pencil className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-secondary">Edit Links</h2>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">Quick access to document modification tools</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {EDIT_LINKS.map((link, idx) => (
                                    <MagicCard key={idx} className="p-6 border-primary/10 overflow-hidden group rounded-2xl shadow-none">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                    {link.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-secondary">{link.name}</h4>
                                                    <p className="text-xs text-muted-foreground font-light">{link.description}</p>
                                                </div>
                                            </div>
                                            <a 
                                                href={link.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full hover:bg-primary/10 text-primary transition-colors"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </MagicCard>
                                ))}
                            </div>
                        </section>

                        {/* Assets Grid */}
                        <div className="space-y-24">
                            {BRAND_ASSETS.map((section, sIdx) => (
                                <section key={sIdx} className="space-y-8">
                                    <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-serif font-bold text-secondary">{section.title}</h2>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">{section.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {section.items.map((item, iIdx) => (
                                            <MagicCard key={iIdx} className="p-0 border-primary/10 overflow-hidden group rounded-2xl">
                                                <div className="relative aspect-video bg-muted/20 flex items-center justify-center p-6">
                                                    {/* Preview (if image) */}
                                                    {item.path.endsWith('.png') || item.path.endsWith('.jpg') ? (
                                                        <img 
                                                            src={item.path} 
                                                            alt={item.name} 
                                                            className="max-w-full max-h-full object-contain drop-shadow-md transition-transform group-hover:scale-110 duration-500" 
                                                        />
                                                    ) : (
                                                        <FileText className="w-12 h-12 text-primary/40" />
                                                    )}
                                                    
                                                    <div className="absolute top-3 right-3">
                                                        <Badge variant="secondary" className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 bg-background/80 backdrop-blur-sm border-primary/10 text-primary">
                                                            {item.category}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                
                                                <div className="p-5 space-y-4">
                                                    <div>
                                                        <h4 className="font-bold text-sm text-secondary truncate">{item.name}</h4>
                                                        <p className="text-[11px] text-muted-foreground line-clamp-1 font-light">{item.description}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <a 
                                                            href={item.path} 
                                                            download 
                                                            className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-bold transition-all border border-primary/20"
                                                        >
                                                            <Download className="w-3.5 h-3.5" />
                                                            {item.path.endsWith('.png') ? 'PNG' : 'Download'}
                                                        </a>
                                                        {(item as any).pdfPath && (
                                                            <a 
                                                                href={(item as any).pdfPath} 
                                                                download 
                                                                className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-bold transition-all border border-primary/20"
                                                            >
                                                                <FileText className="w-3.5 h-3.5" />
                                                                PDF
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </MagicCard>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Archived Section */}
                        <section className="bg-secondary/5 rounded-[2rem] p-8 md:p-12 border border-secondary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Archive className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                                        <Archive className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-serif font-bold text-secondary">Archive</h2>
                                        <p className="text-sm text-muted-foreground font-light">Legacy assets and development materials (V0)</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {ARCHIVED_ASSETS[0].items.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-secondary/10 bg-background/50 hover:bg-background transition-all group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                                                    <FileText className="w-4 h-4 text-secondary/60" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-secondary">{item.name}</p>
                                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.category}</p>
                                                </div>
                                            </div>
                                            <a href={item.path} download className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                                <Download className="w-4 h-4" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="text-center pt-10 border-t border-primary/10">
                            <Button 
                                variant="ghost" 
                                className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] hover:text-primary font-medium"
                                onClick={() => {
                                    localStorage.removeItem("brandkit_auth")
                                    setIsAuthorized(false)
                                }}
                            >
                                <Lock className="w-3 h-3 mr-2" />
                                Lock Brand Vault
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
