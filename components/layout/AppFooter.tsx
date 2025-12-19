import React from "react";
import Link from "next/link";
import {Linkedin, Mail, MapPin, MessageCircle, Phone} from "lucide-react";

export function AppFooter() {
    return (
        <footer className="bg-secondary text-white border-t border-primary/20 pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        {/* Logo / Name */}
                        <div className="flex flex-col select-none mb-6">
                            <div className="flex flex-col items-center">
                                {/* Main Title */}
                                <h2 className="text-2xl font-serif text-primary tracking-tight text-center leading-none font-medium">
                                    Al Ahmed Continental
                                </h2>
                                
                                {/* Subtitle Container with Lines */}
                                <div className="flex items-center gap-3 w-full max-w-[260px] my-2">
                                    <div className="h-[1px] bg-primary flex-grow opacity-60"></div>
                                    <span className="text-white text-xs tracking-[0.3em] font-sans font-medium uppercase">
                                        Exports
                                    </span>
                                    <div className="h-[1px] bg-primary flex-grow opacity-60"></div>
                                </div>
                                
                                {/* URL */}
                                <a href="https://aacexports.in" className="text-primary text-xs tracking-[0.2em] hover:text-white transition-colors">
                                    aacexports.in
                                </a>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm text-white/80 leading-relaxed max-w-xs font-light">
                            Performance is the promise. Consistency is the proof. A legacy of precision since 1996.
                        </p>

                        {/* Address */}
                        <div className="flex items-start gap-4 text-sm text-white/90">
                            <MapPin size={20} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                            <a 
                                href="https://maps.app.goo.gl/vyeGBbU15fQinwE19" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors leading-relaxed font-light"
                            >
                                #579, 32nd 'D' cross<br/>
                                10th main road, 4th Block<br/>
                                Jayanagar, Bangalore - 560011<br/>
                                Karnataka, India.
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80 font-light">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/#verticals" className="hover:text-primary transition-colors">Verticals</Link></li>
                            <li><Link href="/catalog" className="hover:text-primary transition-colors">Catalogs</Link></li>
                            <li><Link href="/certificates" className="hover:text-primary transition-colors">Certificates</Link></li>
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Our Verticals
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80 font-light">
                            <li><Link href="/steel" className="hover:text-primary transition-colors">Iron & Steel</Link></li>
                            <li><Link href="/produce" className="hover:text-primary transition-colors">Fresh Produce</Link></li>
                            <li><Link href="/powders" className="hover:text-primary transition-colors">Dehydrated Powders</Link></li>
                            <li><Link href="/stones" className="hover:text-primary transition-colors">Natural Stones</Link></li>
                        </ul>
                    </div>

                    {/* Contact Links */}
                    <div id="contact" className="flex flex-col">
                        <h4 className="font-bold text-lg mb-6 text-primary relative inline-block">
                            Connect With Us
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/40 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <MapPin size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://maps.app.goo.gl/vyeGBbU15fQinwE19" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">Find us on Map</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Phone size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="tel:+916363372655" className="group-hover:text-primary transition-colors font-light">+91 6363372655</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Mail size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="mailto:sales@aacexports.in" className="group-hover:text-primary transition-colors font-light">sales@aacexports.in</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <Linkedin size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://www.linkedin.com/in/al-ahmed-continental-1826791b0" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">LinkedIn</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <MessageCircle size={18} className="text-primary" strokeWidth={1.5} />
                                </div>
                                <a href="https://wa.me/916363372655" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors font-light">WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
                    <p>© {new Date().getFullYear()} Al Ahmed Continental Exports. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
