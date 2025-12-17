import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Ahmed Continental | Global Merchandise Exports",
  description: "Established in 1996. Premier exporter of Natural Stones, Fresh Produce, Food Ingredients, and Iron & Steel. Delivering trust and quality globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}