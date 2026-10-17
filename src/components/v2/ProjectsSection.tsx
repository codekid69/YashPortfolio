"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";
import ProjectMedia from "./ProjectMedia";
import { PROJECTS, hostOf, type Project } from "@/data/projects";

// Stacking only on md+; on phones tall cards would pin with their bottoms hidden.
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const update = () => setIsDesktop(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return isDesktop;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface CardProps {
    project: Project;
    index: number;
    total: number;
    progress: MotionValue<number>;
    isDesktop: boolean;
    isActive: boolean;
}

function StackCard({ project, index, total, progress, isDesktop, isActive }: CardProps) {
    const step = 1 / total;
    const isLast = index === total - 1;
    const num = String(index + 1).padStart(2, "0");

    // Shrink and dim once later cards start stacking on top of this one.
    const targetScale = 1 - (total - 1 - index) * 0.04;
    const scale = useTransform(progress, [index * step, 1], [1, targetScale]);
    const dim = useTransform(progress, [(index + 1) * step, 1], [0, isLast ? 0 : 0.55]);

    return (
        <div
            className="px-3 sm:px-4 py-3 md:py-0 md:sticky md:h-[85vh] flex items-start justify-center"
            style={isDesktop ? { top: `calc(5rem + ${index * 20}px)`, perspective: 1400 } : { perspective: 1400 }}
        >
            {/* One-shot entrance (not scroll-linked) so every card always settles flat. */}
            <motion.article
                initial={{ opacity: 0, y: 70, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: EASE_OUT }}
                style={isDesktop ? { scale, transformOrigin: "50% 0%" } : undefined}
                className="relative w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center will-change-transform md:shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.9)]"
            >
                {/* Copy */}
                <div className="md:col-span-5 flex flex-col gap-4 md:gap-5 order-2 md:order-1 md:py-2">
                    <div className="flex items-start gap-4">
                        <span
                            aria-hidden="true"
                            className="font-black text-[#D7E2EA] leading-[0.8] shrink-0"
                            style={{ fontSize: "clamp(2.5rem, 6vw, 88px)" }}
                        >
                            {num}
                        </span>
                        <div className="flex flex-col min-w-0 pt-0.5">
                            <span className="text-[#D7E2EA]/55 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light">
                                {project.category}
                            </span>
                            <h3 className="text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl font-medium uppercase leading-tight">
                                {project.name}
                            </h3>
                            <span className="text-[#D7E2EA]/50 text-xs sm:text-sm font-light italic">
                                {project.tagline}
                            </span>
                        </div>
                    </div>

                    <p
                        className="text-[#D7E2EA]/75 font-light leading-relaxed"
                        style={{ fontSize: "clamp(0.92rem, 1.15vw, 1.08rem)" }}
                    >
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2" aria-label="Highlights">
                        {project.tags.map((t) => (
                            <li
                                key={t}
                                className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-light"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <LiveProjectButton href={project.link} />
                        <a
                            href={`/projects/${project.slug}`}
                            className="text-sm uppercase tracking-widest text-[#D7E2EA]/70 underline decoration-[#D7E2EA]/30 underline-offset-[6px] hover:text-[#D7E2EA] hover:decoration-[#D7E2EA] transition-colors"
                        >
                            Case study<span className="sr-only">: {project.name}</span> →
                        </a>
                    </div>
                </div>

                {/* Video in a minimal browser frame; the whole frame opens the site */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live site`}
                    data-media
                    className="group md:col-span-7 order-1 md:order-2 block rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-[#D7E2EA]/15 bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
                >
                    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#D7E2EA]/10">
                        <span className="flex gap-1.5" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                        </span>
                        <span className="flex-1 truncate text-center text-[11px] sm:text-xs text-[#D7E2EA]/45 font-light tracking-wide">
                            {hostOf(project.link)}
                        </span>
                        <span className="w-[42px]" aria-hidden="true" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.2, ease: EASE_OUT }}
                        >
                            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                                <ProjectMedia
                                    image={project.poster}
                                    video={project.video}
                                    active={isActive}
                                    alt={`${project.name} — ${project.tagline}`}
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </div>
                        </motion.div>
                    </div>
                </a>

                {/* Dims the card as the next one slides over it */}
                {isDesktop && (
                    <motion.div
                        aria-hidden="true"
                        style={{ opacity: dim }}
                        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[#0C0C0C]"
                    />
                )}
            </motion.article>
        </div>
    );
}

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    // Spring-smoothed so the stack eases instead of tracking the wheel 1:1.
    const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 });
    const isDesktop = useIsDesktop();

    // Only one video plays at a time. Desktop: the card on top of the stack
    // (last one whose top has passed ~45% of the viewport). Phones: the video
    // frame closest to the middle of the screen, since frames sit at the top of
    // each card and can scroll away before the next card arrives.
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", () => {
        const root = containerRef.current;
        if (!root) return;
        const vh = window.innerHeight;
        let next = 0;
        if (isDesktop) {
            root.querySelectorAll("article").forEach((card, i) => {
                if (card.getBoundingClientRect().top < vh * 0.45) next = i;
            });
        } else {
            let best = Infinity;
            root.querySelectorAll("[data-media]").forEach((frame, i) => {
                const r = frame.getBoundingClientRect();
                const dist = Math.abs(r.top + r.height / 2 - vh / 2);
                if (dist < best) {
                    best = dist;
                    next = i;
                }
            });
        }
        setActiveIndex(next);
    });

    return (
        <section
            id="projects"
            className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-24 md:pt-32 pb-10"
        >
            <FadeIn y={40} delay={0}>
                <h2
                    className="hero-heading font-black uppercase text-center leading-none tracking-tight px-5"
                    style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
                >
                    Projects
                </h2>
            </FadeIn>

            <div ref={containerRef} className="relative mt-10 sm:mt-16">
                {PROJECTS.map((p, i) => (
                    <StackCard
                        key={p.name}
                        project={p}
                        index={i}
                        total={PROJECTS.length}
                        progress={progress}
                        isDesktop={isDesktop}
                        isActive={activeIndex === i}
                    />
                ))}
            </div>
        </section>
    );
}
