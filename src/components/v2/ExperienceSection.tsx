"use client";

import FadeIn from "./FadeIn";
import RevealHeading from "./RevealHeading";

type Experience = {
    role: string;
    company: string;
    period: string;
    type: string;
    highlight?: string;
    impacts: string[];
    stack?: string[];
};

const EXPERIENCES: Experience[] = [
    {
        role: "Software Engineer",
        company: "BeyondChats",
        period: "Mar 2026 – Present",
        type: "Full-time · Remote",
        highlight: "Built Clinic OS solo, end to end",
        impacts: [
            "Designed and shipped Clinic OS, a multi-tenant clinic management SaaS covering bookings, public booking links, patient records, check-in, prescriptions and reports, now running live in clinics",
            "Automated patient communication on WhatsApp and email: reminders with one-tap confirm, follow-up journeys, rating surveys and report delivery",
            "Integrated Razorpay payment links and pay-before-visit, two-way Google Calendar sync, the BeyondChats chatbot inbox over OAuth and MediXcel EMR import, plus AI lab-report summaries for patients and doctors",
            "Owned dev-to-prod delivery: role-based access, an operator console for onboarding clinics, analytics dashboards, GitLab CI/CD with safe migrations, post-deploy smoke checks and Playwright E2E across devices",
        ],
        stack: ["Laravel", "PHP", "PostgreSQL", "React", "Vite", "Node.js", "WhatsApp Business API", "Razorpay", "Google Calendar API", "OAuth 2.0", "GitLab CI/CD", "Playwright", "Sentry"],
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
            <RevealHeading
                text="Experience"
                className="font-black uppercase text-center type-display"
                style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
            />

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
                                <span className="type-eyebrow tabular text-xs font-normal">
                                    {e.period} · {e.type}
                                </span>
                                <h3 className="type-title text-[#EEF3F6] text-xl sm:text-2xl font-semibold uppercase mt-1">
                                    {e.company}
                                </h3>
                                <span className="text-[#D7E2EA]/75 text-sm font-light tracking-[0.01em]">
                                    {e.role}
                                </span>
                                {e.highlight && (
                                    <span className="mt-3 self-start rounded-full p-px bg-[linear-gradient(95deg,#B600A8,#7621B0,#BE4C00)]">
                                        <span className="block rounded-full bg-[#0C0C0C] px-3 py-1 text-[11px] uppercase tracking-[0.1em]">
                                            <span className="accent-text">{e.highlight}</span>
                                        </span>
                                    </span>
                                )}
                            </div>
                            <ul className="sm:w-2/3 flex flex-col gap-3">
                                {e.impacts.map((imp, j) => (
                                    <li
                                        key={j}
                                        className="type-body text-[#D7E2EA]/75 font-light pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#D7E2EA]/40"
                                        style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                                    >
                                        {imp}
                                    </li>
                                ))}
                                {e.stack && (
                                    <li className="flex flex-wrap gap-2 pt-2 pl-6" aria-label="Stack">
                                        {e.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.03] px-2.5 py-0.5 text-[11px] uppercase tracking-[0.1em] text-[#D7E2EA]/70 font-normal"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
