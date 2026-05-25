"use client";

import FadeIn from "./FadeIn";

const EXPERIENCES = [
    {
        role: "Software Engineer",
        company: "BeyondChats",
        period: "Mar 2026 – Present",
        type: "Full-time · Remote",
        impacts: [
            "Architecting AI conversational experiences at the core of the product — chatbots, intent-driven flows, and live-agent handoff serving real businesses at scale",
            "Shipping production RAG pipelines over customer knowledge bases with sub-second retrieval, alongside real-time messaging infrastructure built on Next.js and Node.js",
        ],
    },
    {
        role: "Software Engineer",
        company: "Turing Labs",
        period: "Nov 2025 – Present",
        type: "Freelance · Remote",
        impacts: [
            "Partnering with global clients to ship production-grade SaaS and AI products end-to-end — scalable React and TypeScript frontends paired with resilient Node.js services",
            "Designing and deploying GenAI workflows in real-world systems: RAG-based chat, semantic search, and AI copilots powered by OpenAI and Google Gemini",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Votewave Consultancy",
        period: "Apr 2025 – Mar 2026",
        type: "Freelance · Contract",
        impacts: [
            "Owned end-to-end delivery for multiple client web platforms — from architecture and full stack build to deployment, SEO, and post-launch optimization",
            "Engineered conversion-focused MERN and Next.js applications with custom dashboards, lead capture flows, and high-performance data layers built to scale",
        ],
    },
    {
        role: "Software Engineer",
        company: "Dumroo.ai & Orfiq",
        period: "2025",
        type: "Contract · Remote",
        impacts: [
            "Drove AI-powered EdTech features end-to-end — RAG-based learning chat, automated lesson and quiz generation, and semantic search across course material",
            "Crafted responsive, high-performance interfaces in React, TypeScript, and Tailwind with polished dark and light themes tuned for daily learners",
        ],
    },
    {
        role: "Software Engineer",
        company: "ModusETP",
        period: "Aug 2023 – Apr 2025",
        type: "Full-time · Remote",
        impacts: [
            "Built and scaled an enterprise survey platform serving 10,000+ users, sustaining sub-300ms response times through targeted performance tuning",
            "Lifted database query performance by 30% and accelerated frontend delivery velocity by 40% through tooling, architecture, and process upgrades across the team",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
        >
            <FadeIn y={40} delay={0}>
                <h2
                    className="hero-heading font-black uppercase text-center leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
                >
                    Experience
                </h2>
            </FadeIn>

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20">
                {EXPERIENCES.map((e, i) => (
                    <FadeIn key={e.company} y={30} delay={i * 0.1}>
                        <div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8 sm:py-10 md:py-12"
                            style={{
                                borderTop:
                                    i === 0
                                        ? "1px solid rgba(215, 226, 234, 0.15)"
                                        : "none",
                                borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
                            }}
                        >
                            <div className="sm:w-1/3 flex flex-col gap-1">
                                <span className="text-[#D7E2EA]/60 text-xs uppercase tracking-widest font-light">
                                    {e.period} · {e.type}
                                </span>
                                <h3 className="text-[#D7E2EA] text-xl sm:text-2xl font-medium uppercase">
                                    {e.company}
                                </h3>
                                <span className="text-[#D7E2EA]/70 text-sm font-light">
                                    {e.role}
                                </span>
                            </div>
                            <ul className="sm:w-2/3 flex flex-col gap-3">
                                {e.impacts.map((imp, j) => (
                                    <li
                                        key={j}
                                        className="text-[#D7E2EA]/70 font-light leading-relaxed"
                                        style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}
                                    >
                                        — {imp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
