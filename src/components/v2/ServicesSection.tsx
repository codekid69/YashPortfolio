"use client";

import FadeIn from "./FadeIn";

const SERVICES = [
    {
        num: "01",
        name: "SaaS Web Platforms",
        desc: "End-to-end product builds — from landing pages to multi-tenant dashboards. React, Next.js, Node, MongoDB, Supabase. Production-ready architectures shipped on time and built to scale.",
    },
    {
        num: "02",
        name: "GenAI & RAG Systems",
        desc: "Production RAG pipelines, semantic search, AI chat, and multimodal workflows using OpenAI, Gemini, LangChain, and vector databases. Real AI products, not demos.",
    },
    {
        num: "03",
        name: "AI-Powered Features",
        desc: "Embedding intelligence into existing apps — chat assistants, smart search, content generation, document Q&A, AI agents. Quietly capable, deeply integrated.",
    },
    {
        num: "04",
        name: "Backend & API Engineering",
        desc: "Scalable Node.js, Express, NestJS, and FastAPI services. REST + real-time, robust data layers, auth, payments, third-party integrations — engineered for reliability.",
    },
    {
        num: "05",
        name: "Performance & SEO",
        desc: "Sub-second load times, Core Web Vitals tuning, image and bundle optimization, SEO-first architecture. Sites that rank, load fast, and convert.",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
        >
            <FadeIn y={40} delay={0}>
                <h2
                    className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
                    style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
                >
                    Services
                </h2>
            </FadeIn>

            <div className="max-w-5xl mx-auto">
                {SERVICES.map((s, i) => (
                    <FadeIn key={s.num} y={30} delay={i * 0.1}>
                        <div
                            className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                            style={{
                                borderTop:
                                    i === 0
                                        ? "1px solid rgba(12, 12, 12, 0.15)"
                                        : "none",
                                borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
                            }}
                        >
                            <span
                                className="font-black text-[#0C0C0C] leading-none shrink-0"
                                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                            >
                                {s.num}
                            </span>
                            <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                                <h3
                                    className="font-medium uppercase leading-tight"
                                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                                >
                                    {s.name}
                                </h3>
                                <p
                                    className="font-light leading-relaxed max-w-2xl"
                                    style={{
                                        fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                                        opacity: 0.6,
                                    }}
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
