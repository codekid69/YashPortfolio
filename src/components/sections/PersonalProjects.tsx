"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    FlaskConical,
    ChevronDown,
    Video,
    FileText,
    PenTool,
    MessageSquare,
    ExternalLink,
} from "lucide-react";

const projects = [
    {
        icon: Video,
        name: "GenAI Video Intelligence System",
        problem: "Manual video content analysis is slow and unscalable.",
        solution:
            "AI pipeline that extracts, transcribes, embeds, and clusters video segments for automated analysis.",
        architecture: [
            "Video Upload",
            "Frame Extraction",
            "Transcription",
            "Embedding (Gemini)",
            "DBSCAN Clustering",
        ],
        stack: [
            "Node.js",
            "MongoDB",
            "FFmpeg",
            "Cloudinary",
            "AssemblyAI",
            "Gemini",
            "React",
        ],
        aiDetail:
            "Uses multimodal embeddings to cluster video segments by semantic similarity. DBSCAN identifies highlight-worthy segments scored on clarity, confidence, and relevance.",
        impact:
            "Automated content moderation and intelligent highlight extraction — real-time scored clips.",
        link: "https://video-ai-stitcher.vercel.app/",
        image: "/video intelligence.png",
        color: "#00D4FF",
    },
    {
        icon: MessageSquare,
        name: "AI Document Chat",
        problem: "Interacting with complex documents is tedious and lacks context memory.",
        solution:
            "Real-time AI chat interface for documents with streaming reasoning and instant contextual answers.",
        architecture: [
            "Document Processing",
            "Vector Search",
            "Vercel AI SDK Integration",
            "Streaming UI",
        ],
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "OpenAI",
        ],
        aiDetail:
            "Leverages streaming LLM responses to provide zero-latency interaction. Maintains conversation history and dynamically injects document context into the prompt chain.",
        impact:
            "Seamless, conversational document interaction mimicking a real analyst without any processing delays.",
        link: "https://document-chat-frontend.vercel.app/",
        image: "/document chat.png",
        color: "#FF006E",
    },
    {
        icon: FileText,
        name: "PDF Professor — RAG Workflow",
        problem: "Large documents are hard to query intelligently.",
        solution:
            "Multilingual PDF assistant with RAG for translation, extraction, and contextual Q&A.",
        architecture: [
            "PDF Upload",
            "Text Extraction",
            "Chunking",
            "Vector Embeddings",
            "Semantic Search",
            "LLM Q&A",
        ],
        stack: [
            "React",
            "Express.js",
            "Supabase",
            "OpenAI",
            "Google AI API",
            "Tailwind",
        ],
        aiDetail:
            "RAG pipeline using Supabase vector DB for semantic retrieval. OpenAI for intelligent search, Google AI for multilingual translation. Returns answers with source citations.",
        impact:
            "Context-aware document Q&A supporting multiple languages — enabling smart query and instant document insights.",
        link: "https://pdf-professor.vercel.app/",
        color: "#7C3AED",
    },
    {
        icon: PenTool,
        name: "Bloggo — GenAI Blogging SaaS",
        problem: "Content creation bottleneck for writers and marketers.",
        solution:
            "Full-stack blogging platform with AI-generated content from a single prompt.",
        architecture: [
            "Topic Input",
            "Gemini LLM Outline",
            "Streaming Content Gen",
            "CMS Integration",
        ],
        stack: [
            "MERN Stack",
            "Google Gemini",
            "Google OAuth",
            "JWT",
            "Nodemailer",
            "Cloudinary",
        ],
        aiDetail:
            "Gemini generates complete blog posts from a single prompt — including outline, structure, and content. Integrated with real-time social features and media uploads.",
        impact:
            "10x content creation speed — merging GenAI with social blogging for rapid, high-quality content.",
        link: "#",
        image: "/bloggo.png",
        color: "#00FF88",
    },
];

export default function PersonalProjects() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section id="projects" className="relative section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-cyber-green border border-cyber-green/20 bg-cyber-green/5 mb-4">
                        <FlaskConical size={12} />
                        INNOVATION LAB
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                        Personal Projects
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-xl">
                        R&D experiments turned into production-grade systems. Each one
                        pushes the boundary of what&apos;s possible with GenAI.
                    </p>
                </motion.div>

                {/* Project Panels */}
                <div className="space-y-4">
                    {projects.map((project, i) => {
                        const Icon = project.icon;
                        const isExpanded = expanded === i;

                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card rounded-2xl overflow-hidden"
                                style={{
                                    borderColor: isExpanded
                                        ? `${project.color}40`
                                        : undefined,
                                }}
                            >
                                {/* Header (Clickable) */}
                                <button
                                    onClick={() =>
                                        setExpanded(isExpanded ? null : i)
                                    }
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                            style={{
                                                background: `${project.color}15`,
                                                border: `1px solid ${project.color}30`,
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                style={{ color: project.color }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-heading font-semibold text-text-primary">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-text-muted mt-0.5">
                                                {project.problem}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="shrink-0 ml-4 hidden sm:block"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className="text-text-muted"
                                        />
                                    </motion.div>
                                </button>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 space-y-6">
                                                <div className="border-t border-dark-border/30 pt-6" />

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* Left Column: Details */}
                                                    <div className="space-y-6">
                                                        {/* Solution */}
                                                        <div>
                                                            <p className="text-sm font-mono mb-2" style={{ color: project.color }}>
                                                                {"// Solution"}
                                                            </p>
                                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                                {project.solution}
                                                            </p>
                                                        </div>

                                                        {/* Architecture Flow */}
                                                        <div>
                                                            <p className="text-sm font-mono mb-3" style={{ color: project.color }}>
                                                                {"// Architecture"}
                                                            </p>
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                {project.architecture.map(
                                                                    (step, si) => (
                                                                        <div
                                                                            key={step}
                                                                            className="flex items-center gap-2"
                                                                        >
                                                                            <span className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 text-text-secondary border border-dark-border/30">
                                                                                {step}
                                                                            </span>
                                                                            {si < project.architecture.length - 1 && (
                                                                                <span
                                                                                    className="text-xs"
                                                                                    style={{ color: project.color }}
                                                                                >
                                                                                    →
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* AI/LLM Detail */}
                                                        <div>
                                                            <p className="text-sm font-mono mb-2" style={{ color: project.color }}>
                                                                {"// AI Layer"}
                                                            </p>
                                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                                {project.aiDetail}
                                                            </p>
                                                        </div>

                                                        {/* Live Link Button */}
                                                        {project.link !== "#" && (
                                                            <div className="pt-2">
                                                                <a
                                                                    href={project.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border text-text-primary hover:bg-white/5 transition-colors duration-300"
                                                                    style={{ borderColor: `${project.color}40`, color: project.color }}
                                                                >
                                                                    View Live App
                                                                    <ExternalLink size={14} />
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Right Column: Image & Stack/Impact */}
                                                    <div className="space-y-6">
                                                        {project.image && (
                                                            <div className="relative aspect-video rounded-xl overflow-hidden border border-dark-border/30 group">
                                                                <Image
                                                                    src={project.image}
                                                                    alt={project.name}
                                                                    fill
                                                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 via-transparent to-transparent pointer-events-none" />
                                                            </div>
                                                        )}

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                            <div>
                                                                <p className="text-sm font-mono mb-2" style={{ color: project.color }}>
                                                                    {"// Stack"}
                                                                </p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.stack.map(
                                                                        (tech) => (
                                                                            <span
                                                                                key={tech}
                                                                                className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-text-secondary border border-dark-border/50"
                                                                            >
                                                                                {tech}
                                                                            </span>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-mono mb-2" style={{ color: project.color }}>
                                                                    {"// Impact"}
                                                                </p>
                                                                <p className="text-text-secondary text-sm leading-relaxed">
                                                                    {project.impact}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
