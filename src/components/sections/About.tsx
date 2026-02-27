"use client";

import { motion } from "framer-motion";
import { Zap, Target, Layers } from "lucide-react";

const traits = [
    {
        icon: Zap,
        title: "Ships Fast",
        description: "Rapid prototyping to production deployment. No unnecessary complexity.",
        color: "#00D4FF",
    },
    {
        icon: Target,
        title: "Solves Real Problems",
        description: "Every line of code serves a purpose — user-facing impact over technical vanity.",
        color: "#7C3AED",
    },
    {
        icon: Layers,
        title: "Thinks in Systems",
        description: "Architecture-first mindset. Scalable, maintainable, and production-ready.",
        color: "#00FF88",
    },
];

export default function About() {
    return (
        <section id="about" className="relative section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Wireframe Art / Monogram */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Abstract geometric wireframe */}
                            <div className="w-64 h-64 md:w-80 md:h-80 relative">
                                {/* Outer rotating ring */}
                                <div className="absolute inset-0 rounded-full border border-dark-border/30 animate-[spin_30s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyber-blue" />
                                </div>
                                {/* Middle ring */}
                                <div className="absolute inset-8 rounded-full border border-neon-violet/20 animate-[spin_20s_linear_infinite_reverse]">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-neon-violet" />
                                </div>
                                {/* Inner hexagonal shape */}
                                <div className="absolute inset-16 rounded-2xl border border-cyber-green/15 rotate-45 animate-[spin_25s_linear_infinite]">
                                    <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyber-green" />
                                </div>
                                {/* Center monogram */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-5xl md:text-6xl font-heading font-bold gradient-text">
                                            YB
                                        </span>
                                        <div className="w-16 h-[2px] mx-auto mt-2 bg-gradient-to-r from-cyber-blue via-neon-violet to-cyber-green rounded-full" />
                                    </div>
                                </div>
                            </div>
                            {/* Background glow */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyber-blue/5 via-neon-violet/5 to-transparent rounded-full blur-3xl" />
                        </div>
                    </motion.div>

                    {/* Right - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-cyber-blue border border-cyber-blue/20 bg-cyber-blue/5 mb-6">
                            ABOUT
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                            Engineer. Builder. System Thinker.
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-4">
                            I&apos;m Yash Bisht — a Full Stack Developer with 2+ years of experience
                            building production-grade SaaS platforms and GenAI systems.
                            I specialize in MERN, Next.js, and AI-powered products that scale.
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            From enterprise survey platforms serving 10K+ users to AI video intelligence
                            systems with multimodal pipelines — I build things that work at scale,
                            look premium, and ship on time.
                        </p>

                        {/* Engineering Philosophy Quote */}
                        <div className="glass-card rounded-xl p-5 mb-8 border-l-2 border-cyber-blue/40">
                            <p className="font-mono text-sm text-text-secondary leading-relaxed">
                                <span className="text-cyber-blue">const</span>{" "}
                                <span className="text-cyber-green">philosophy</span>{" "}
                                <span className="text-text-muted">=</span>{" "}
                                <span className="text-neon-violet">&quot;Build systems, not features.
                                    Optimize for clarity. Ship with confidence.&quot;</span>
                            </p>
                        </div>

                        {/* Trait Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {traits.map((trait, i) => {
                                const Icon = trait.icon;
                                return (
                                    <motion.div
                                        key={trait.title}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                        className="glass-card rounded-xl p-4 text-center"
                                    >
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2"
                                            style={{
                                                background: `${trait.color}15`,
                                                border: `1px solid ${trait.color}25`,
                                            }}
                                        >
                                            <Icon size={18} style={{ color: trait.color }} />
                                        </div>
                                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                                            {trait.title}
                                        </h4>
                                        <p className="text-xs text-text-muted leading-relaxed">
                                            {trait.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
