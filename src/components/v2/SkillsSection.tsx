"use client";

import FadeIn from "./FadeIn";
import RevealHeading from "./RevealHeading";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const SI = "https://cdn.simpleicons.org";

interface Tech {
    name: string;
    icon: string;
    invert?: boolean;
}

const GROUPS: { name: string; techs: Tech[] }[] = [
    {
        name: "Frontend",
        techs: [
            { name: "React", icon: `${CDN}/react/react-original.svg` },
            { name: "Next.js", icon: `${SI}/nextdotjs/FFFFFF` },
            { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
            { name: "Vite", icon: `${CDN}/vitejs/vitejs-original.svg` },
            { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
            { name: "Redux", icon: `${CDN}/redux/redux-original.svg` },
            { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
        ],
    },
    {
        name: "Backend",
        techs: [
            { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
            { name: "Laravel", icon: `${CDN}/laravel/laravel-original.svg` },
            { name: "PHP", icon: `${CDN}/php/php-original.svg` },
            { name: "Express", icon: `${SI}/express/FFFFFF` },
            { name: "NestJS", icon: `${CDN}/nestjs/nestjs-original.svg` },
            { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
            { name: "Python", icon: `${CDN}/python/python-original.svg` },
        ],
    },
    {
        name: "Databases",
        techs: [
            { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
            { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
            { name: "Supabase", icon: `${CDN}/supabase/supabase-original.svg` },
            { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
            { name: "Firebase", icon: `${CDN}/firebase/firebase-original.svg` },
        ],
    },
    {
        name: "GenAI",
        techs: [
            {
                name: "OpenAI",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                invert: true,
            },
            { name: "Gemini", icon: `${SI}/googlegemini/8E75B2` },
            { name: "LangChain", icon: `${SI}/langchain/FFFFFF` },
        ],
    },
    {
        name: "Integrations & Testing",
        techs: [
            { name: "WhatsApp API", icon: `${SI}/whatsapp/25D366` },
            { name: "Razorpay", icon: `${SI}/razorpay/3395FF` },
            { name: "Google Calendar", icon: `${SI}/googlecalendar/4285F4` },
            { name: "Playwright", icon: `${CDN}/playwright/playwright-original.svg` },
            { name: "Sentry", icon: `${SI}/sentry/FFFFFF` },
        ],
    },
    {
        name: "DevOps & Cloud",
        techs: [
            { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
            { name: "GitLab CI/CD", icon: `${CDN}/gitlab/gitlab-original.svg` },
            { name: "GitHub", icon: `${SI}/github/FFFFFF` },
            { name: "Vercel", icon: `${SI}/vercel/FFFFFF` },
            { name: "GCP", icon: `${CDN}/googlecloud/googlecloud-original.svg` },
            { name: "Azure", icon: `${CDN}/azure/azure-original.svg` },
        ],
    },
];

function LogoTile({ tech }: { tech: Tech }) {
    return (
        <div className="group flex flex-col items-center gap-2 w-[80px] sm:w-[90px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D7E2EA]/15 bg-[linear-gradient(180deg,#171717,#0F0F0F)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#D7E2EA]/40 group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-110"
                    style={tech.invert ? { filter: "invert(1) brightness(1.5)" } : undefined}
                />
            </div>
            <span className="text-[11px] sm:text-xs text-[#D7E2EA]/75 font-normal uppercase tracking-[0.08em] text-center transition-colors duration-300 group-hover:text-[#EEF3F6]">
                {tech.name}
            </span>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
        >
            <RevealHeading
                text="Stack"
                className="font-black uppercase text-center type-display"
                style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
            />

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {GROUPS.map((g, i) => (
                    <FadeIn key={g.name} y={30} delay={i * 0.08}>
                        <div className="rounded-3xl border border-[#D7E2EA]/15 bg-[linear-gradient(180deg,rgba(215,226,234,0.035),transparent_60%)] p-6 sm:p-8 h-full transition-colors duration-500 hover:border-[#D7E2EA]/30">
                            <h3 className="type-title text-[#EEF3F6] text-lg sm:text-xl font-semibold uppercase tracking-[0.06em] mb-6">
                                {g.name}
                            </h3>
                            <div className="flex flex-wrap gap-4 sm:gap-5">
                                {g.techs.map((t) => (
                                    <LogoTile key={t.name} tech={t} />
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
