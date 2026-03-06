"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setIsScrolled(latest > 20);
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: isHidden ? -100 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "glass-strong shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        className="relative group flex items-center gap-1"
                    >
                        <span className="text-xl font-heading font-bold text-cyber-blue">&lt;</span>
                        <span className="text-xl font-heading font-bold text-text-primary">YB</span>
                        <span className="text-xl font-heading font-bold text-cyber-blue">/&gt;</span>
                        <div className="absolute -inset-2 bg-cyber-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyber-blue group-hover:w-3/4 transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 px-5 py-2 text-sm font-medium rounded-lg border border-cyber-blue/40 text-cyber-blue hover:bg-cyber-blue/10 hover:border-cyber-blue/60 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden glass-strong border-t border-dark-border overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileOpen(false)}
                                className="block mt-2 px-4 py-3 text-center text-sm font-medium rounded-lg border border-cyber-blue/40 text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <ScrollProgress />
        </motion.nav>
    );
}
