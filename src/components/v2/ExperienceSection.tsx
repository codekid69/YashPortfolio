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
        role: "Senior Software Engineer",
        company: "Kuinn AI · Rawcult",
        period: "Sep 2026 to Present",
        type: "Hybrid · New Delhi",
        impacts: [
            "Own the backend and dashboard of a multi-tenant platform that prepares Amazon and Flipkart listings for D2C brands",
            "Built the Python, FastAPI and PostgreSQL APIs, background jobs, tenant isolation and marketplace adapters",
            "Kept AI generation behind a strict boundary: every listing passes the rules engine and a human approval, and AI can never publish",
            "React and TypeScript dashboard typed from the OpenAPI contract, deployed on Google Cloud with Cloud Run and Cloud SQL",
            "Auth and security: MFA, Google sign-in, marketplace OAuth and encrypted marketplace tokens",
        ],
        stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Cloud Run", "Cloud SQL", "OAuth 2.0"],
    },
    {
        role: "Software Engineer",
        company: "BeyondChats",
        period: "Mar 2026 to Present",
        type: "Full-time · Remote",
        impacts: [
            "Designed and shipped Clinic OS, a multi-tenant clinic management SaaS covering bookings, public booking links, patient records, check-in, prescriptions and reports, now running live in clinics",
            "Automated patient communication on WhatsApp and email: reminders with one-tap confirm, follow-up journeys, rating surveys and report delivery",
            "Integrated Razorpay payment links and pay-before-visit, two-way Google Calendar sync, the BeyondChats chatbot inbox over OAuth and MediXcel EMR import, plus AI lab-report summaries for patients and doctors",
            "Owned dev-to-prod delivery: role-based access, an operator console for onboarding clinics, analytics dashboards, GitLab CI/CD with safe migrations, post-deploy smoke checks and Playwright E2E across devices",
        ],
        stack: ["Laravel", "PHP", "PostgreSQL", "React", "Vite", "Node.js", "WhatsApp Business API", "Razorpay", "Google Calendar API", "OAuth 2.0", "GitLab CI/CD", "Playwright", "Sentry"],
    },
    {
        role: "Product Engineer (Full Stack)",
        company: "Turing Labs",
        period: "Nov 2025 to Present",
        type: "Freelance · Remote",
        impacts: [
            "Shipping SaaS and AI products end to end for global clients, with React and TypeScript frontends on Node.js services",
            "Building GenAI features for clients: RAG-based chat, semantic search and AI copilots powered by OpenAI and Google Gemini",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Votewave Consultancy",
        period: "May 2025 to Apr 2026",
        type: "Freelance · Contract",
        impacts: [
            "Owned delivery of several client web platforms, from architecture and the full stack build to deployment, SEO and post-launch fixes",
            "Built MERN and Next.js apps for clients, with custom dashboards, lead capture flows and the data layers behind them",
        ],
    },
    {
        role: "Software Engineer",
        company: "Dumroo.ai & Orfiq",
        period: "2025",
        type: "Contract · Remote",
        impacts: [
            "Built AI features for an EdTech platform: RAG-based learning chat, automated lesson and quiz generation, and semantic search across course material",
            "Built responsive interfaces in React, TypeScript and Tailwind, with dark and light themes for students using it every day",
        ],
    },
    {
        role: "Software Engineer",
        company: "ModusETP",
        period: "Aug 2023 to Apr 2025",
        type: "Full-time · Remote",
        impacts: [
            "Built and scaled an enterprise survey platform for 10,000+ users, keeping response times under 300ms",
            "Cut database query times by 30% and made frontend delivery 40% faster through better tooling, architecture and team process",
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
                                        className="type-body text-[#D7E2EA]/75 font-light pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#D7E2EA]/40"
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
