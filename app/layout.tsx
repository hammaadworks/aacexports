import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";

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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/aacexports/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/aacexports/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/aacexports/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/aacexports/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/aacexports/favicons/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <Providers>
          <AppHeader />
          <main className="min-h-screen">
              {children}
          </main>
          <AppFooter />
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}