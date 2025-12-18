import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20 mt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tight text-primary">
                AL AHMED
              </span>
              <span className="text-xs tracking-[0.3em] text-white/70 uppercase pl-1">
                Continental
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Performance is the promise. Consistency is the proof. A legacy of precision since 1996.
            </p>
            <div className="flex items-start gap-3 text-sm font-medium text-white/90 pt-2">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  #123, Export Zone,<br />
                  Bangalore, Karnataka 560001,<br />
                  India
                </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary/50 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Home</Link></li>
              <li><Link href="/#about" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link href="/#verticals" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Verticals</Link></li>
              <li><Link href="/certificates" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Certificates</Link></li>
              <li><Link href="/#catalogs" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Catalogs</Link></li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
              Our Verticals
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary/50 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/steel" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Iron & Steel</Link></li>
              <li><Link href="/produce" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Fresh Produce</Link></li>
              <li><Link href="/powders" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Dehydrated Powders</Link></li>
              <li><Link href="/stones" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Natural Stones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary/50 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <a href="mailto:info@aacexports.com" className="hover:text-primary transition-colors">info@aacexports.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <span>+91 98765 43210</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 block">Follow Us</span>
              <div className="flex gap-3">
                <Link href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"><Linkedin size={18} /></Link>
                <Link href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"><Twitter size={18} /></Link>
                <Link href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"><Facebook size={18} /></Link>
                <Link href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"><Instagram size={18} /></Link>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Al Ahmed Continental Exports. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}