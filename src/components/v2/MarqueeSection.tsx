"use client";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECHS = [
    { name: "React", icon: `${CDN}/react/react-original.svg`, color: "#61DAFB" },
    { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, color: "#FFFFFF" },
    { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg`, color: "#3178C6" },
    { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg`, color: "#F7DF1E" },
    { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, color: "#06B6D4" },
    { name: "Redux", icon: `${CDN}/redux/redux-original.svg`, color: "#764ABC" },
    { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg`, color: "#339933" },
    { name: "Express", icon: `${CDN}/express/express-original.svg`, color: "#FFFFFF" },
    { name: "NestJS", icon: `https://cdn.simpleicons.org/nestjs/E0234E`, color: "#E0234E" },
    { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg`, color: "#009688" },
    { name: "Python", icon: `${CDN}/python/python-original.svg`, color: "#3776AB" },
    { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg`, color: "#47A248" },
    { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg`, color: "#336791" },
    { name: "Supabase", icon: `${CDN}/supabase/supabase-original.svg`, color: "#3ECF8E" },
    { name: "Firebase", icon: `${CDN}/firebase/firebase-original.svg`, color: "#FFCA28" },
    { name: "Redis", icon: `${CDN}/redis/redis-original.svg`, color: "#DC382D" },
    { name: "Docker", icon: `${CDN}/docker/docker-original.svg`, color: "#2496ED" },
    { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, color: "#FFFFFF" },
    { name: "GitHub", icon: `${CDN}/github/github-original.svg`, color: "#FFFFFF" },
    { name: "GCP", icon: `${CDN}/googlecloud/googlecloud-original.svg`, color: "#4285F4" },
    { name: "Azure", icon: `${CDN}/azure/azure-original.svg`, color: "#0078D4" },
];

const ROW1 = TECHS.slice(0, 11);
const ROW2 = TECHS.slice(11);

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
    return (
        <section className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
            <div className="flex flex-col gap-3 sm:gap-4">
                {/* Row 1: left → right */}
                <Row items={ROW1} durationSec={45} reverse />
                {/* Row 2: right → left */}
                <Row items={ROW2} durationSec={38} />
            </div>
        </section>
    );
}
