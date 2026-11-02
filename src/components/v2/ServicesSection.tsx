"use client";

import FadeIn from "./FadeIn";
import RevealHeading from "./RevealHeading";

const SERVICES = [
    {
        num: "01",
        name: "SaaS Web Platforms",
        desc: "End-to-end product builds, from landing pages to multi-tenant dashboards, in React, Next.js, Node, MongoDB and Supabase.",
    },
    {
        num: "02",
        name: "GenAI & RAG Systems",
        desc: "RAG pipelines, semantic search, AI chat and multimodal workflows using OpenAI, Gemini, LangChain and vector databases, running in live products.",
    },
    {
        num: "03",
        name: "AI-Powered Features",
        desc: "AI added to the app you already have: chat assistants, smart search, content generation, document Q&A and AI agents.",
    },
    {
        num: "04",
        name: "Backend & API Engineering",
        desc: "Node.js, Express, NestJS and FastAPI services. REST and real-time APIs, data layers, auth, payments and third-party integrations.",
    },
    {
        num: "05",
        name: "Performance & SEO",
        desc: "Sub-second load times, Core Web Vitals tuning, image and bundle optimization, and SEO built in from the start.",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
        >
            <RevealHeading
                text="Services"
                gradient={false}
                className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 type-display"
                style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            />

            <div className="max-w-5xl mx-auto">
                {SERVICES.map((s, i) => (
                    <FadeIn key={s.num} y={30} delay={i * 0.1}>
                        <div
                            className="group flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                            style={{
                                borderTop:
                                    i === 0
                                        ? "1px solid rgba(12, 12, 12, 0.15)"
                                        : "none",
                                borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
                            }}
                        >
                            <span
                                className="service-num ink-pad tabular font-black leading-none shrink-0"
                                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                            >
                                {s.num}
                            </span>
                            <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                                <h3
                                    className="type-title font-semibold uppercase"
                                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                                >
                                    {s.name}
                                </h3>
                                <p
                                    className="type-body font-light max-w-2xl text-[#0C0C0C]/70"
                                    style={{ fontSize: "clamp(0.92rem, 1.6vw, 1.25rem)" }}
                                >
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
