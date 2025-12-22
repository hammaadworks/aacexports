"use client";

import BaseModal from "@/components/ui/base-modal";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PageHeaderBadge } from "@/components/ui/PageHeaderBadge";
import { cn } from "@/lib/utils";
import { Loader2, LucideIcon, Maximize2, PackageOpen } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useRef, useState } from "react";

// Dynamically import React-PDF components with SSR disabled
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

/* -------------------------------------------------------------------------- */
/*                               SHARED TYPES                                 */

/* -------------------------------------------------------------------------- */

export interface CatalogDoc {
  title: string;
  file: string;
}

/* -------------------------------------------------------------------------- */
/*                           LAYOUT & WRAPPERS                                */

/* -------------------------------------------------------------------------- */

interface VerticalPageWrapperProps {
  children: ReactNode;
  className?: string;
  textureOpacity?: number;
}

export function VerticalPageWrapper({
  children,
  className,
  textureOpacity = 0.75,
}: Readonly<VerticalPageWrapperProps>) {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-[#FDFCF8] text-foreground overflow-hidden",
        className
      )}
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: textureOpacity,
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>
      {children}
    </div>
  );
}

interface VerticalHeroProps {
  icon: LucideIcon;
  badgeText: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode; // For actions/buttons
  titleClassName?: string;
  descriptionClassName?: string;
}

export function VerticalHero({
  icon,
  badgeText,
  title,
  description,
  children,
  titleClassName,
  descriptionClassName,
}: Readonly<VerticalHeroProps>) {
  return (
    <section className="relative pt-22 pb-16 lg:pt-24 lg:pb-16 px-6 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageHeaderBadge icon={icon}>{badgeText}</PageHeaderBadge>
          <h1
            className={cn(
              "text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tighter text-secondary",
              titleClassName
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8",
              descriptionClassName
            )}
          >
            {description}
          </p>

          {children && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             SHARED COMPONENTS                              */

/* -------------------------------------------------------------------------- */

export interface StatItem {
  id: string | number;
  icon?: LucideIcon;
  value?: number;
  valueSuffix?: string; // e.g., "+" or "%"
  valuePrefix?: string;
  label: string;
  description?: string;
  colorClass?: string; // e.g. "text-green-700" or "bg-green-100"
}

export interface VerticalStatsProps {
  items: StatItem[];
  className?: string;
  variant?: "icons" | "numbers"; // icons for Food/Powder, numbers for General
}

/**
 * A unified section for displaying stats or trust indicators (icons + text).
 */
export function VerticalStats({
  items,
  className,
  variant = "icons",
}: Readonly<VerticalStatsProps>) {
  return (
    <section
      className={cn("py-16 border-y bg-white/50 backdrop-blur-sm", className)}
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "grid gap-8 text-center",
            items.length === 3 ? "md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "px-4 relative", // Add dividers except for the last item (desktop only)
                index === items.length - 1
                  ? ""
                  : "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-gray-200"
              )}
            >
              {variant === "icons" && item.icon ? (
                <>
                  <div
                    className={cn(
                      "mx-auto h-14 w-14 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300",
                      item.colorClass || "bg-primary/10 text-primary"
                    )}
                  >
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-secondary">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  )}
                </>
              ) : (
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold font-serif text-secondary">
                    {item.valuePrefix}
                    {item.value === undefined ? (
                      <span>0</span>
                    ) : (
                      <NumberTicker value={item.value} />
                    )}
                    {item.valueSuffix}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Standardized Section Header
 */
export function VerticalSectionHeader({
  title,
  description,
  badge,
  className,
  align = "center",
}: Readonly<{
  title: ReactNode;
  description?: ReactNode;
  badge?: string;
  className?: string;
  align?: "left" | "center" | "right";
}>) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {badge && (
        <span className="text-[#8B9D77] font-bold tracking-wider uppercase text-sm mb-3 block">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-secondary">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * A generic 2-column info section for things like "Packaging", "Process", etc.
 * Supports a dark or light theme.
 */
export function VerticalInfoSection({
  title,
  badgeIcons,
  badgeText,
  description,
  children,
  visual,
  variant = "light",
  className,
}: Readonly<{
  title: string;
  badgeIcons?: LucideIcon;
  badgeText?: string;
  description?: string;
  children: ReactNode;
  visual: ReactNode;
  variant?: "light" | "dark" | "colored";
  className?: string;
}>) {
  // Enhanced variant styling
  const variants = {
    light: "bg-background border-y border-border/40",
    dark: "bg-[#0A0F0D] text-[#F4F6F4]",
    colored: "bg-secondary/5 border-y border-secondary/10",
  };

  const textClass =
    variant === "dark" ? "text-gray-300" : "text-muted-foreground";
  const titleClass = variant === "dark" ? "text-white" : "text-foreground";

  return (
    <section
      className={cn(
        "py-20 relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col justify-center items-start h-full">
            {badgeIcons && badgeText && (
              <PageHeaderBadge icon={badgeIcons}>{badgeText}</PageHeaderBadge>
            )}
            <h2
              className={cn(
                "text-4xl md:text-5xl font-serif font-bold mb-6",
                titleClass
              )}
            >
              {title}
            </h2>
            {description && (
              <p className={cn("text-lg mb-8 leading-relaxed", textClass)}>
                {description}
              </p>
            )}
            <div className="space-y-4">{children}</div>
          </div>
          {/* Visual Side */}
          <div className="order-1 md:order-2">
            {/* Wrapper for hover effects and shadows */}
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden transition-all duration-500",
                variant === "dark"
                  ? "shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10"
                  : "shadow-2xl border border-border/50 bg-white"
              )}
            >
              {visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CATALOG VIEWER                               */
/* -------------------------------------------------------------------------- */

export function CatalogViewer({
  isOpen,
  onClose,
  doc,
}: Readonly<{
  isOpen: boolean;
  onClose: () => void;
  doc: CatalogDoc | null;
}>) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize worker once when modal opens
  useEffect(() => {
    if (isOpen) {
      import("react-pdf").then((mod) => {
        mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
      });
    }
  }, [isOpen]);

  // Handle container resizing to make PDF responsive
  useEffect(() => {
    if (!containerRef.current || !isOpen) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isOpen, doc]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={doc?.title || "Catalog View"}
      className="!w-[95vw] !max-w-7xl !h-[95vh] !p-0 flex flex-col gap-0"
      headerClassName="px-6 py-4 border-b shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      footerContent={
        doc && (
          <div className="w-full flex justify-end px-6 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
            <Button asChild variant="default">
              <a
                href={`/catalogs/${doc.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Maximize2 className="mr-2 h-4 w-4" /> View Full Page
              </a>
            </Button>
          </div>
        )
      }
    >
      <div
        className="w-full flex-grow bg-muted/30 overflow-y-auto p-4 md:p-8 flex justify-center relative min-h-[500px]"
        ref={containerRef}
      >
        {doc && (
          <Document
            file={`/catalogs/${doc.file}`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm font-medium text-muted-foreground animate-pulse">
                    Loading catalog...
                  </p>
                </div>
              </div>
            }
            error={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-destructive flex flex-col items-center gap-2">
                  <PackageOpen className="h-8 w-8" />
                  <p>Failed to load catalog.</p>
                </div>
              </div>
            }
            className="flex flex-col gap-6 max-w-full shadow-2xl"
          >
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={
                    containerWidth ? Math.min(containerWidth - 48, 1000) : 300
                  }
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-sm bg-white"
                  loading={
                    <div className="h-[800px] w-full bg-white animate-pulse flex items-center justify-center text-muted-foreground">
                      <span className="sr-only">
                        Loading Page {index + 1}...
                      </span>
                    </div>
                  }
                />
              ))}
          </Document>
        )}
      </div>
    </BaseModal>
  );
}

/* -------------------------------------------------------------------------- */
/*                               DEFAULT EXPORT                               */
/* -------------------------------------------------------------------------- */

export default function VerticalLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
