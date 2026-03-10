"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-dark-border/50">
            {/* Subtle ambient top glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[100px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(0, 212, 255, 0.06), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-1 group">
                        <span className="text-lg font-heading font-bold text-cyber-blue">&lt;</span>
                        <span className="text-lg font-heading font-bold text-text-primary group-hover:text-white transition-colors duration-300">YB</span>
                        <span className="text-lg font-heading font-bold text-cyber-blue">/&gt;</span>
                    </a>

                    {/* Social Links */}
                    <nav aria-label="Footer navigation" className="flex items-center gap-4">
                        <a
                            href="https://github.com/codekid69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg text-text-muted hover:text-cyber-blue hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yashhbisht/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg text-text-muted hover:text-cyber-blue hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:bishtyash069@gmail.com"
                            className="p-2.5 rounded-lg text-text-muted hover:text-cyber-blue hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-text-muted">
                        © {new Date().getFullYear()} Yash Bisht. Engineered with precision.
                    </p>
                </div>
            </div>
        </footer >
    );
}
