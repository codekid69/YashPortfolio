"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const PROJECTS = [
    {
        num: "01",
        category: "Client · End-to-End Product",
        name: "PopCom",
        tagline: "Turn Creator Traffic Into Trackable Sales",
        link: "https://www.getpopcom.com/",
        col1a: "/popcom2.png",
        col1b: "/popcom3.png",
        col2: "/popcom.png",
    },
    {
        num: "02",
        category: "Client",
        name: "Dukiya Infra",
        tagline: "The Art of Elevation",
        link: "https://www.dukiyainfra.com/",
        col1a: "/dukiya2.png",
        col1b: "/dukiya3.png",
        col2: "/dukiya.png",
    },
    {
        num: "03",
        category: "Client",
        name: "Hariom Interior",
        tagline: "Mumbai's Premium Interior Design Firm",
        link: "https://www.hariominterior.in/",
        col1a: "/hariominterior2.png",
        col1b: "/hariominterior3.png",
        col2: "/hariominterior.png",
    },
    {
        num: "04",
        category: "Personal · Featured",
        name: "Thread AI",
        tagline: "AI That Knows You",
        link: "https://thread-ai-phi.vercel.app/",
        col1a: "/Threadai2.jfif",
        col1b: "/Threadai3.jfif",
        col2: "/Threadai.png",
    },
];

interface CardProps {
    project: (typeof PROJECTS)[number];
    index: number;
    total: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    range: [number, number];
}

function StackCard({ project, index, total, progress, range }: CardProps) {
    const targetScale = 1 - (total - 1 - index) * 0.03;
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            className="sticky h-auto md:h-[85vh] flex items-center justify-center px-3 sm:px-4 py-6 md:py-0"
            style={{ top: `calc(5rem + ${index * 20}px)` }}
        >
            <motion.div
                style={{ scale }}
                className="w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
            >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                        <span
                            className="font-black text-[#D7E2EA] leading-none shrink-0"
                            style={{ fontSize: "clamp(2.25rem, 7vw, 100px)" }}
                        >
                            {project.num}
                        </span>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[#D7E2EA]/60 text-[10px] sm:text-sm uppercase tracking-widest font-light">
                                {project.category}
                            </span>
                            <h3 className="text-[#D7E2EA] text-base sm:text-2xl md:text-3xl font-medium uppercase truncate">
                                {project.name}
                            </h3>
                            <span className="text-[#D7E2EA]/50 text-[11px] sm:text-sm font-light italic mt-0.5 truncate">
                                {project.tagline}
                            </span>
                        </div>
                    </div>
                    <div className="self-start sm:self-auto">
                        <LiveProjectButton href={project.link} />
                    </div>
                </div>

                {/* Mobile: single full-width image. Desktop: 40/60 grid. */}
                <div className="block sm:hidden">
                    <div className="relative w-full rounded-[24px] overflow-hidden h-[220px] xs:h-[260px]">
                        <Image
                            src={project.col2}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                </div>

                <div className="hidden sm:grid sm:grid-cols-5 gap-3 sm:gap-4">
                    <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-4">
                        <div
                            className="relative w-full rounded-[40px] md:rounded-[60px] overflow-hidden"
                            style={{ height: "clamp(130px, 16vw, 230px)" }}
                        >
                            <Image
                                src={project.col1a}
                                alt={project.name}
                                fill
                                unoptimized={project.col1a.endsWith(".jfif")}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                        <div
                            className="relative w-full rounded-[40px] md:rounded-[60px] overflow-hidden"
                            style={{ height: "clamp(160px, 22vw, 340px)" }}
                        >
                            <Image
                                src={project.col1b}
                                alt={project.name}
                                fill
                                unoptimized={project.col1b.endsWith(".jfif")}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div
                            className="relative w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden"
                            style={{ minHeight: "clamp(310px, 38vw, 590px)" }}
                        >
                            <Image
                                src={project.col2}
                                alt={project.name}
                                fill
                                unoptimized={project.col2.endsWith(".jfif")}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const step = 1 / PROJECTS.length;

    return (
        <section
            id="projects"
            className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-24 md:pt-32"
        >
            <FadeIn y={40} delay={0}>
                <h2
                    className="hero-heading font-black uppercase text-center leading-none tracking-tight px-5"
                    style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
                >
                    Project
                </h2>
            </FadeIn>

            <div ref={containerRef} className="relative mt-10 sm:mt-16">
                {PROJECTS.map((p, i) => {
                    const start = i * step;
                    const end = 1;
                    return (
                        <StackCard
                            key={p.num}
                            project={p}
                            index={i}
                            total={PROJECTS.length}
                            progress={scrollYProgress}
                            range={[start, end]}
                        />
                    );
                })}
            </div>
        </section>
    );
}
