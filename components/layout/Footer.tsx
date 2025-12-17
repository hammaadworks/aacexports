import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-foreground">AAC Exports</h3>
            <p className="text-sm text-muted-foreground">
              Performance is the promise. Consistency is the proof. A legacy of precision since 1996.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#verticals" className="hover:text-primary transition-colors">Verticals</Link></li>
              <li><Link href="/certificates" className="hover:text-primary transition-colors">Certificates</Link></li>
              <li><Link href="/#catalogs" className="hover:text-primary transition-colors">Catalogs</Link></li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Verticals</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/steel" className="hover:text-primary transition-colors">Iron & Steel</Link></li>
              <li><Link href="/produce" className="hover:text-primary transition-colors">Fresh Produce</Link></li>
              <li><Link href="/powders" className="hover:text-primary transition-colors">Dehydrated Powders</Link></li>
              <li><Link href="/stones" className="hover:text-primary transition-colors">Natural Stones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@aacexports.com" className="hover:text-primary">info@aacexports.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Bangalore, India</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            </div>
          </div>

        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Al Ahmed Continental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
