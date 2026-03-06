"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Shield } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import GlowEffect from "@/components/ui/GlowEffect";

const projects = [
    {
        name: "Dukiya Infra",
        tagline: "The Art of Elevation",
        description:
            "Full-scale luxury property listing platform engineered for performance, SEO, and scalability. Built with a high-performance UI layer, optimized asset delivery, and a production-ready backend serving dynamic property data with sub-second load times.",
        image: "/dukiya.png",
        link: "https://www.dukiyainfra.com/",
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind"],
        highlights: [
            "SEO-first architecture",
            "Optimized image pipeline",
            "Sub-second load times",
            "Production deployed",
        ],
    },
    {
        name: "GetPopCom",
        tagline: "Turn Creator Traffic Into Trackable Sales",
        description:
            "Creator-brand collaboration and commerce platform with smart tracking links, real-time analytics, performance-based payouts, and seamless e-commerce integration. Designed for scalability with complex business logic and multi-tenant data isolation.",
        image: "/popcom.png",
        link: "https://www.getpopcom.com/",
        stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Node.js"],
        highlights: [
            "Real-time analytics",
            "Smart tracking links",
            "Multi-tenant architecture",
            "Performance payouts",
        ],
    },
];

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function ClientProjects() {
    return (
        <section id="work" className="relative section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: EASE_PREMIUM }}
                    className="mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-cyber-blue border border-cyber-blue/20 bg-cyber-blue/5 mb-4">
                        <Shield size={12} />
                        CLIENT WORK
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                        Production Systems
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-xl">
                        Real projects shipped for real clients. Built for performance,
                        scale, and business impact.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 50, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: EASE_PREMIUM,
                            }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                                }`}
                        >
                            {/* Image */}
                            <TiltCard
                                tiltIntensity={6}
                                glowColor="rgba(0, 212, 255, 0.06)"
                                className={`relative group ${i % 2 === 1 ? "lg:order-2" : ""}`}
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-dark-border/30 depth-shadow">
                                    {/* Client Badge */}
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-base/80 backdrop-blur-sm border border-dark-border/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                                            Client Project
                                        </span>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.07]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-base/50 to-transparent" />
                                    </div>
                                </div>

                                {/* Decorative Glow */}
                                <GlowEffect
                                    color="rgba(0, 212, 255, 0.06)"
                                    size="350px"
                                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    animate={false}
                                />
                            </TiltCard>

                            {/* Content */}
                            <motion.div
                                className={i % 2 === 1 ? "lg:order-1" : ""}
                                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
                            >
                                <p
                                    className="text-sm font-mono text-neon-violet mb-2 tracking-wide"
                                >
                                    {project.tagline}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                                    {project.name}
                                </h3>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {project.highlights.map((h) => (
                                        <div
                                            key={h}
                                            className="flex items-center gap-2 text-sm text-text-muted"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-cyber-blue" />
                                            {h}
                                        </div>
                                    ))}
                                </div>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-text-secondary border border-dark-border/50 hover:border-cyber-blue/30 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 hover:border-cyber-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300"
                                >
                                    Live Site
                                    <ExternalLink
                                        size={14}
                                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                                    />
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
