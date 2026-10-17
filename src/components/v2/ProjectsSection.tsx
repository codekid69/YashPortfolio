"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import RevealHeading from "./RevealHeading";
import LiveProjectButton from "./LiveProjectButton";
import ProjectMedia from "./ProjectMedia";
import { PROJECTS, hostOf, type Project } from "@/data/projects";

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

// Where a card pins on phones. Normally just under the top with a small peek
// per card; a card taller than the screen pins only once its bottom edge is
// on screen, so its buttons are never hidden under the next card.
function useMobileTop(ref: React.RefObject<HTMLDivElement>, index: number, enabled: boolean) {
    const base = 64 + index * 12;
    const [top, setTop] = useState(base);
    useEffect(() => {
        const el = ref.current;
        if (!el || !enabled) return;
        const update = () => setTop(Math.min(base, window.innerHeight - el.offsetHeight - 8));
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        window.addEventListener("resize", update);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [ref, base, enabled]);
    return top;
}

function StackCard({ project, index, total, progress, isDesktop, isActive }: CardProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mobileTop = useMobileTop(wrapRef, index, !isDesktop);
    const step = 1 / total;
    const isLast = index === total - 1;
    const num = String(index + 1).padStart(2, "0");

    // Shrink and dim once later cards start stacking on top of this one.
    const targetScale = 1 - (total - 1 - index) * 0.04;
    const scale = useTransform(progress, [index * step, 1], [1, targetScale]);
    const dim = useTransform(progress, [(index + 1) * step, 1], [0, isLast ? 0 : 0.55]);

    return (
        <div
            ref={wrapRef}
            className="sticky px-3 sm:px-4 py-3 md:py-0 md:h-[85vh] flex items-start justify-center"
            style={{ top: isDesktop ? `calc(5rem + ${index * 20}px)` : mobileTop, perspective: 1400 }}
        >
            {/* One-shot entrance (not scroll-linked) so every card always settles flat. */}
            <motion.article
                initial={{ opacity: 0, y: 70, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", bounce: 0, duration: 1.1 }}
                style={{ scale, transformOrigin: "50% 0%" }}
                className="relative w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[linear-gradient(180deg,#141414_0%,#0C0C0C_55%)] p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center will-change-transform shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.9)] md:shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.9)]"
            >
                {/* Copy */}
                <div className="md:col-span-5 flex flex-col gap-4 md:gap-5 order-2 md:order-1 md:py-2">
                    <div className="flex items-start gap-4">
                        <span
                            aria-hidden="true"
                            className="hero-heading ink-pad tabular font-black leading-[0.8] shrink-0"
                            style={{ fontSize: "clamp(2.5rem, 6vw, 88px)" }}
                        >
                            {num}
                        </span>
                        <div className="flex flex-col min-w-0 pt-0.5">
                            <span className="type-eyebrow text-[11px] sm:text-xs font-normal tracking-[0.12em] sm:tracking-[0.18em]">
                                {project.category}
                            </span>
                            <h3 className="type-title text-[#EEF3F6] text-xl sm:text-2xl md:text-3xl font-semibold uppercase mt-1">
                                {project.name}
                            </h3>
                            <span className="accent-text self-start text-xs sm:text-sm font-normal tracking-[0.01em] mt-0.5">
                                {project.tagline}
                            </span>
                        </div>
                    </div>

                    <p
                        className="type-body text-[#D7E2EA]/80 font-light"
                        style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)" }}
                    >
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2" aria-label="Highlights">
                        {project.tags.map((t) => (
                            <li
                                key={t}
                                className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.03] px-3 py-1 text-[11px] sm:text-xs uppercase tracking-[0.1em] text-[#D7E2EA]/75 font-normal transition-colors duration-300 hover:border-[#D7E2EA]/50 hover:text-[#EEF3F6]"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-1 flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-3">
                        <LiveProjectButton href={project.link} />
                        <a
                            href={`/projects/${project.slug}`}
                            className="press-soft group/cs inline-flex items-center gap-2 py-3 -my-3 text-sm uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#D7E2EA]/75 underline decoration-[#D7E2EA]/30 underline-offset-[6px] hover:text-[#EEF3F6] hover:decoration-[#EEF3F6] transition-colors duration-300"
                        >
                            Case study<span className="sr-only">: {project.name}</span>
                            <span
                                aria-hidden="true"
                                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cs:translate-x-1"
                            >
                                →
                            </span>
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
                    className="press-soft group md:col-span-7 order-1 md:order-2 block rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-[#D7E2EA]/15 bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
                >
                    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#D7E2EA]/10">
                        {/* Window controls light up on the card whose video is playing. */}
                        <span className="flex gap-1.5" aria-hidden="true">
                            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                                <span
                                    key={c}
                                    className="w-2.5 h-2.5 rounded-full transition-colors duration-700"
                                    style={{ backgroundColor: isActive ? c : "rgba(215, 226, 234, 0.2)" }}
                                />
                            ))}
                        </span>
                        <span className="flex-1 truncate text-center text-[11px] sm:text-xs text-[#D7E2EA]/60 font-light tracking-[0.04em]">
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
                <motion.div
                    aria-hidden="true"
                    style={{ opacity: dim }}
                    className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[#0C0C0C]"
                />
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

    // Only one video plays at a time: the card on top of the stack, i.e. the
    // last one whose top has passed ~45% of the viewport.
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", () => {
        const root = containerRef.current;
        if (!root) return;
        const line = window.innerHeight * 0.45;
        let next = 0;
        root.querySelectorAll("article").forEach((card, i) => {
            if (card.getBoundingClientRect().top < line) next = i;
        });
        setActiveIndex(next);
    });

    return (
        <section
            id="projects"
            className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-24 md:pt-32 pb-10"
        >
            <RevealHeading
                text="Projects"
                className="font-black uppercase text-center type-display px-5"
                style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            />

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
