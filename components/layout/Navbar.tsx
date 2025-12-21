"use client";

import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BookOpen, FileText, Home, Info, Layers} from "lucide-react"; // Added Info icon for About
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import { useRouter } from "next/navigation"; // Import useRouter

const navItems = [
    {name: "Home", href: "/", icon: Home},
    {name: "About", href: "/#about", icon: Info},
    {name: "Verticals", href: "/#verticals", icon: Layers},  // Added About
    {name: "Catalogs", href: "/catalogs", icon: BookOpen},
    {name: "Certificates", href: "/certificates", icon: FileText}, // Added Certificates
];

export function Navbar() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("");
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const router = useRouter();

    const scrollToSection = (id: string) => {
        router.push(`/#${id}`); // Update URL hash
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    React.useEffect(() => {
        // Set initial active tab based on window location
        setActiveTab(window.location.pathname + window.location.hash);

        const handleHashChange = () => {
            setActiveTab(window.location.pathname + window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, [pathname]);

    // Update active tab when pathname changes (for non-hash routes)
    React.useEffect(() => {
        if (!window.location.hash) {
            setActiveTab(pathname);
        }
    }, [pathname]);


    return (<div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
            className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-border/20 bg-secondary shadow-2xl ring-1 ring-black/5 mx-4">
            {navItems.map((item) => {
                const isHashLink = item.href.includes("/#");
                const targetId = isHashLink ? item.href.split("#")[1] : "";

                const isActive =
                    (isHashLink && pathname === "/" && window.location.hash === `#${targetId}`) ||
                    (!isHashLink && (activeTab === item.href || (item.href === "/" && activeTab === "") || (item.href === "/" && activeTab === "/")));

                const commonProps = {
                    className: cn(
                        "relative flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200",
                        isActive ? "text-foreground" : "text-white hover:text-white/80"
                    ),
                    onMouseEnter: () => setHoveredTab(item.name),
                    onMouseLeave: () => setHoveredTab(null),
                };

                const content = (
                    <span className="relative z-10 flex items-center gap-2">
                        <item.icon size={18} className="text-primary"/>
                        <span className={cn("hidden sm:inline", isActive ? "text-foreground" : "text-white")}>
                            {item.name}
                        </span>
                    </span>
                );

                return isHashLink ? (
                    <a
                        key={item.name}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(targetId);
                            setActiveTab(item.href); // Manually set active tab for hash links
                        }}
                        {...commonProps}
                    >
                        {isActive && (<motion.div
                            layoutId="navbar-active"
                            className="absolute inset-0 rounded-full bg-background shadow-sm"
                            transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                        />)}
                        {hoveredTab === item.name && !isActive && (<motion.div
                            layoutId="navbar-hover"
                            className="absolute inset-0 rounded-full bg-white/10"
                            transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                        />)}
                        {content}
                    </a>
                ) : (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveTab(item.href)}
                        {...commonProps}
                    >
                        {isActive && (<motion.div
                            layoutId="navbar-active"
                            className="absolute inset-0 rounded-full bg-background shadow-sm"
                            transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                        />)}
                        {hoveredTab === item.name && !isActive && (<motion.div
                            layoutId="navbar-hover"
                            className="absolute inset-0 rounded-full bg-white/10"
                            transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                        />)}
                        {content}
                    </Link>
                );
            })}
        </div>
    </div>);
}