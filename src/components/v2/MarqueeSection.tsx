"use client";

import { useEffect, useRef, useState } from "react";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const SI = "https://cdn.simpleicons.org";

const TECHS = [
    { name: "React", icon: `${CDN}/react/react-original.svg`, color: "#61DAFB" },
    { name: "Next.js", icon: `${SI}/nextdotjs/FFFFFF`, color: "#FFFFFF" },
    { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg`, color: "#3178C6" },
    { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg`, color: "#339933" },
    { name: "Laravel", icon: `${CDN}/laravel/laravel-original.svg`, color: "#FF2D20" },
    { name: "PHP", icon: `${CDN}/php/php-original.svg`, color: "#777BB4" },
    { name: "Vite", icon: `${CDN}/vitejs/vitejs-original.svg`, color: "#BD34FE" },
    { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, color: "#06B6D4" },
    { name: "NestJS", icon: `${SI}/nestjs/E0234E`, color: "#E0234E" },
    { name: "Express", icon: `${SI}/express/FFFFFF`, color: "#FFFFFF" },
    { name: "Python", icon: `${CDN}/python/python-original.svg`, color: "#3776AB" },
    { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg`, color: "#009688" },
    { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg`, color: "#336791" },
    { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg`, color: "#47A248" },
    { name: "Supabase", icon: `${CDN}/supabase/supabase-original.svg`, color: "#3ECF8E" },
    { name: "Redis", icon: `${CDN}/redis/redis-original.svg`, color: "#DC382D" },
    { name: "WhatsApp API", icon: `${SI}/whatsapp/25D366`, color: "#25D366" },
    { name: "Razorpay", icon: `${SI}/razorpay/3395FF`, color: "#3395FF" },
    { name: "Playwright", icon: `${CDN}/playwright/playwright-original.svg`, color: "#2EAD33" },
    { name: "Docker", icon: `${CDN}/docker/docker-original.svg`, color: "#2496ED" },
    { name: "GitLab CI/CD", icon: `${CDN}/gitlab/gitlab-original.svg`, color: "#FC6D26" },
    { name: "Vercel", icon: `${SI}/vercel/FFFFFF`, color: "#FFFFFF" },
    { name: "GitHub", icon: `${SI}/github/FFFFFF`, color: "#FFFFFF" },
    { name: "GCP", icon: `${CDN}/googlecloud/googlecloud-original.svg`, color: "#4285F4" },
];

const ROW1 = TECHS.slice(0, 12);
const ROW2 = TECHS.slice(12);

interface Tech {
    name: string;
    icon: string;
    color: string;
}

function Tile({ tech }: { tech: Tech }) {
    return (
        <div
            className="group relative shrink-0 mx-2 sm:mx-2.5 w-[180px] h-[140px] sm:w-[240px] sm:h-[170px] md:w-[320px] md:h-[210px] rounded-2xl border border-[#D7E2EA]/15 bg-[#111111] flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-300 hover:border-[#D7E2EA]/40 overflow-hidden"
            style={{
                boxShadow: `inset 0 0 60px ${tech.color}08`,
            }}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${tech.color}20, transparent 70%)`,
                }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={tech.icon}
                alt={tech.name}
                loading="lazy"
                className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110"
            />
            <span className="relative z-10 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#D7E2EA]">
                {tech.name}
            </span>
        </div>
    );
}

function Row({
    items,
    durationSec,
    reverse = false,
}: {
    items: Tech[];
    durationSec: number;
    reverse?: boolean;
}) {
    const doubled = [...items, ...items];
    return (
        <div className="marquee-mask overflow-hidden">
            <div
                className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
                style={{ animationDuration: `${durationSec}s` }}
            >
                {doubled.map((t, i) => (
                    <Tile key={i} tech={t} />
                ))}
            </div>
        </div>
    );
}

export default function MarqueeSection() {
    // Stop the loop while it's off screen; nobody is watching it.
    const ref = useRef<HTMLElement>(null);
    const [onScreen, setOnScreen] = useState(true);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            data-offscreen={onScreen ? undefined : ""}
            className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
        >
            <div className="flex flex-col gap-3 sm:gap-4">
                {/* Row 1: left → right */}
                <Row items={ROW1} durationSec={45} reverse />
                {/* Row 2: right → left */}
                <Row items={ROW2} durationSec={38} />
            </div>
        </section>
    );
}
