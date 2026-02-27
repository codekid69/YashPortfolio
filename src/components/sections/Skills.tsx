"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Database,
    Brain,
    Cloud,
    ChevronRight,
} from "lucide-react";

const categories = [
    {
        name: "Frontend",
        icon: Code2,
        color: "#00D4FF",
        techs: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Redux",
        ],
        usage:
            "Building responsive, high-performance UIs for SaaS platforms with server-side rendering and optimistic updates.",
    },
    {
        name: "Backend",
        icon: Server,
        color: "#7C3AED",
        techs: ["Node.js", "Express", "NestJS", "FastAPI", "Python", "REST APIs"],
        usage:
            "Designing scalable microservices and API architectures for production systems serving thousands of users.",
    },
    {
        name: "Databases",
        icon: Database,
        color: "#00FF88",
        techs: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Redis"],
        usage:
            "Optimizing data layers with indexing, aggregation pipelines, and real-time subscriptions for complex queries.",
    },
    {
        name: "GenAI",
        icon: Brain,
        color: "#FF006E",
        techs: [
            "RAG Pipelines",
            "LangChain",
            "OpenAI",
            "Gemini",
            "Vector DBs",
            "Prompt Engineering",
        ],
        usage:
            "Building production RAG systems, semantic search, multimodal AI pipelines, and intelligent content generation.",
    },
    {
        name: "DevOps",
        icon: Cloud,
        color: "#F59E0B",
        techs: [
            "Docker",
            "Vercel",
            "Render",
            "GitHub Actions",
            "GCP",
            "Azure",
        ],
        usage:
            "Implementing CI/CD pipelines, containerized deployments, and cloud-native infrastructure for zero-downtime releases.",
    },
];

export default function Skills() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section id="skills" className="relative section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-cyber-blue border border-cyber-blue/20 bg-cyber-blue/5 mb-4">
                        TECH STACK
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                        Systems I Build With
                    </h2>
                </motion.div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((cat, i) => {
                        const Icon = cat.icon;
                        const isExpanded = expanded === i;

                        return (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => setExpanded(isExpanded ? null : i)}
                                className={`group relative glass-card rounded-2xl p-6 cursor-pointer transition-all duration-500 ${isExpanded ? "md:col-span-2 lg:col-span-1" : ""
                                    }`}
                                style={{
                                    borderColor: isExpanded
                                        ? `${cat.color}33`
                                        : undefined,
                                }}
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(ellipse at center, ${cat.color}08, transparent 70%)`,
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                style={{
                                                    background: `${cat.color}15`,
                                                    border: `1px solid ${cat.color}30`,
                                                }}
                                            >
                                                <Icon size={20} style={{ color: cat.color }} />
                                            </div>
                                            <h3 className="text-lg font-heading font-semibold text-text-primary">
                                                {cat.name}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronRight
                                                size={18}
                                                className="text-text-muted"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cat.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-text-secondary border border-dark-border/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Expanded Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isExpanded ? "auto" : 0,
                                            opacity: isExpanded ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-dark-border/50">
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                <span
                                                    className="font-mono text-xs mr-2"
                                                    style={{ color: cat.color }}
                                                >
                                                    {"//"}
                                                </span>
                                                {cat.usage}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
