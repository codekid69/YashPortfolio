"use client";

import FadeIn from "./FadeIn";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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
            { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg` },
            { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
            { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
            { name: "Redux", icon: `${CDN}/redux/redux-original.svg` },
            { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
        ],
    },
    {
        name: "Backend",
        techs: [
            { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
            { name: "Express", icon: `${CDN}/express/express-original.svg` },
            { name: "NestJS", icon: `https://cdn.simpleicons.org/nestjs/E0234E` },
            { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
            { name: "Python", icon: `${CDN}/python/python-original.svg` },
        ],
    },
    {
        name: "Databases",
        techs: [
            { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
            { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
            { name: "Supabase", icon: `${CDN}/supabase/supabase-original.svg` },
            { name: "Firebase", icon: `${CDN}/firebase/firebase-original.svg` },
            { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
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
            { name: "LangChain", icon: `https://cdn.simpleicons.org/langchain/FFFFFF` },
            { name: "Python", icon: `${CDN}/python/python-original.svg` },
            { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
        ],
    },
    {
        name: "DevOps",
        techs: [
            { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
            { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg` },
            { name: "GitHub", icon: `${CDN}/github/github-original.svg` },
            { name: "GCP", icon: `${CDN}/googlecloud/googlecloud-original.svg` },
            { name: "Azure", icon: `${CDN}/azure/azure-original.svg` },
        ],
    },
];

function LogoTile({ tech }: { tech: Tech }) {
    return (
        <div className="group flex flex-col items-center gap-2 w-[80px] sm:w-[90px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D7E2EA]/15 bg-[#111111] flex items-center justify-center transition-all duration-300 group-hover:border-[#D7E2EA]/40 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-110"
                    style={tech.invert ? { filter: "invert(1) brightness(1.5)" } : undefined}
                />
            </div>
            <span className="text-[10px] sm:text-xs text-[#D7E2EA]/70 font-light uppercase tracking-wider text-center">
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
            <FadeIn y={40} delay={0}>
                <h2
                    className="hero-heading font-black uppercase text-center leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
                >
                    Stack
                </h2>
            </FadeIn>

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {GROUPS.map((g, i) => (
                    <FadeIn key={g.name} y={30} delay={i * 0.08}>
                        <div className="rounded-3xl border border-[#D7E2EA]/15 p-6 sm:p-8 h-full">
                            <h3 className="text-[#D7E2EA] text-lg sm:text-xl font-medium uppercase tracking-wider mb-6">
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
