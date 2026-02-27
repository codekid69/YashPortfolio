"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer",
        company: "Turing Labs",
        period: "Nov 2025 – Present",
        type: "Remote",
        impacts: [
            "Building and shipping client-facing SaaS and AI-driven products using React, TypeScript, and Node.js",
            "Implementing GenAI workflows — RAG-based chat systems, semantic search, and AI-assisted features using OpenAI & Gemini",
        ],
        color: "#00D4FF",
    },
    {
        role: "Software Engineer",
        company: "Dumroo.ai & Orfiq",
        period: "2025",
        type: "Remote",
        impacts: [
            "Built AI-powered EdTech platform features — RAG-based chat, automated lessons/quizzes, and semantic search",
            "Developed responsive, high-performance interfaces with React, TypeScript, Tailwind CSS, and dark/light mode support",
        ],
        color: "#7C3AED",
    },
    {
        role: "Software Engineer",
        company: "ModusETP",
        period: "Aug 2023 – Apr 2025",
        type: "Remote",
        impacts: [
            "Built and optimized enterprise survey platform serving 10K+ users with sub-300ms load times",
            "Improved database performance by 30% and increased frontend delivery velocity by 40%",
        ],
        color: "#00FF88",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative section-padding">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-neon-violet border border-neon-violet/20 bg-neon-violet/5 mb-4">
                        <Briefcase size={12} />
                        EXPERIENCE
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                        Where I&apos;ve Shipped
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] timeline-line" />

                    {/* Timeline Entries */}
                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-0">
                                    <div
                                        className="w-[16px] h-[16px] rounded-full border-2 timeline-dot"
                                        style={{
                                            borderColor: exp.color,
                                            background: `${exp.color}30`,
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className={`ml-12 md:ml-0 md:w-[calc(50%-30px)] ${i % 2 === 0
                                            ? "md:text-right md:pr-4"
                                            : "md:text-left md:pl-4"
                                        }`}
                                >
                                    <div
                                        className={`glass-card rounded-xl p-6 ${i % 2 === 0
                                                ? "md:ml-auto"
                                                : "md:mr-auto"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <span
                                                className="text-xs font-mono px-2 py-0.5 rounded"
                                                style={{
                                                    color: exp.color,
                                                    background: `${exp.color}15`,
                                                }}
                                            >
                                                {exp.period}
                                            </span>
                                            <span className="text-[10px] text-text-muted font-mono">
                                                {exp.type}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm text-text-muted mb-4">
                                            {exp.company}
                                        </p>
                                        <ul
                                            className={`space-y-2 ${i % 2 === 0
                                                    ? "md:text-right"
                                                    : "md:text-left"
                                                }`}
                                        >
                                            {exp.impacts.map((impact, j) => (
                                                <li
                                                    key={j}
                                                    className="text-sm text-text-secondary leading-relaxed"
                                                >
                                                    {impact}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block md:w-[calc(50%-30px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
