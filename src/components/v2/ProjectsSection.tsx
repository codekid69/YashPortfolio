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
    // Phones only: where the first card pins and the shared card height (px).
    mobileBase: number;
    mobileCardHeight: number;
    total: number;
    progress: MotionValue<number>;
    isDesktop: boolean;
    isActive: boolean;
}

// Phones: every card gets the same height (the tallest card's) and one
// shared pin line, so the stack has identical edges and even peeks, and it
// moves as one when the section ends. The pin line sits just under the top;
// if the cards are too tall for that, the whole stack pins higher so every
// card's bottom edge (with its buttons) is on screen when it pins.
const MOBILE_TOP = 56;
const MOBILE_PEEK = 10;
const DESKTOP_PEEK = 20;

// Height of an article's content, ignoring any min-height we set on it.
function naturalHeight(card: HTMLElement) {
    const cs = getComputedStyle(card);
    const kids = Array.from(card.children).filter((c) => getComputedStyle(c).position !== "absolute") as HTMLElement[];
    const px = (v: string) => parseFloat(v) || 0;
    return (
        kids.reduce((sum, k) => sum + k.offsetHeight, 0) +
        px(cs.rowGap) * Math.max(0, kids.length - 1) +
        px(cs.paddingTop) + px(cs.paddingBottom) + px(cs.borderTopWidth) + px(cs.borderBottomWidth)
    );
}

function useMobileStack(container: React.RefObject<HTMLDivElement>, enabled: boolean) {
    const [stack, setStack] = useState({ base: MOBILE_TOP, cardHeight: 0 });
    useEffect(() => {
        const root = container.current;
        if (!root || !enabled) return;
        const cards = Array.from(root.querySelectorAll("article")) as HTMLElement[];
        const update = () => {
            const cardHeight = Math.ceil(Math.max(...cards.map(naturalHeight)));
            // The last card pins lowest: its top (+12px slot padding) plus its
            // height must stay above the bottom edge, with 8px to spare.
            const lowest = window.innerHeight - 8 - (cardHeight + 12) - (cards.length - 1) * MOBILE_PEEK;
            setStack({ base: Math.min(MOBILE_TOP, lowest), cardHeight });
        };
        update();
        const ro = new ResizeObserver(update);
        cards.forEach((c) => Array.from(c.children).forEach((k) => ro.observe(k)));
        window.addEventListener("resize", update);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [container, enabled]);
    return stack;
}

function StackCard({ project, index, mobileBase, mobileCardHeight, total, progress, isDesktop, isActive }: CardProps) {
    const step = 1 / total;
    const isLast = index === total - 1;
    const num = String(index + 1).padStart(2, "0");

    // Shrink and dim once later cards start stacking on top of this one.
    const targetScale = 1 - (total - 1 - index) * 0.04;
    const scale = useTransform(progress, [index * step, 1], [1, targetScale]);
    const dim = useTransform(progress, [(index + 1) * step, 1], [0, isLast ? 0 : 0.55]);

    return (
        <div
            className="sticky px-3 sm:px-4 pt-3 md:pt-0 flex items-start justify-center"
            style={
                // Each slot is taller by the peeks still to come, so every slot
                // ends on the same line and the pile scrolls away as one piece
                // instead of collapsing at the end of the section.
                isDesktop
                    ? { top: `calc(5rem + ${index * DESKTOP_PEEK}px)`, height: `calc(85vh + ${(total - 1 - index) * DESKTOP_PEEK}px)`, perspective: 1400 }
                    : { top: mobileBase + index * MOBILE_PEEK, paddingBottom: 12 + (total - 1 - index) * MOBILE_PEEK, perspective: 1400 }
            }
        >
            {/* One-shot entrance (not scroll-linked) so every card always settles flat. */}
            <motion.article
                initial={{ opacity: 0, y: 70, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", bounce: 0, duration: 1.1 }}
                style={{ scale, transformOrigin: "50% 0%", minHeight: isDesktop ? undefined : mobileCardHeight || undefined }}
                className="relative w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[linear-gradient(180deg,#141414_0%,#0C0C0C_55%)] p-3.5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-8 content-start md:content-normal items-center will-change-transform shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.9)] md:shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.9)]"
            >
                {/* Copy */}
                <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-5 order-2 md:order-1 md:py-2">
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
                        className="type-body leading-[1.55] sm:leading-[1.65] text-[#D7E2EA]/80 font-light"
                        style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)" }}
                    >
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Highlights">
                        {project.tags.map((t) => (
                            <li
                                key={t}
                                className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.03] px-2.5 sm:px-3 py-[3px] sm:py-1 text-[11px] sm:text-xs uppercase tracking-[0.1em] text-[#D7E2EA]/75 font-normal transition-colors duration-300 hover:border-[#D7E2EA]/50 hover:text-[#EEF3F6]"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    <div className="sm:pt-1 flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-3">
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
                    <div className="flex items-center gap-3 px-4 py-2 sm:py-2.5 border-b border-[#D7E2EA]/10">
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
                    <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
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
    const mobileStack = useMobileStack(containerRef, !isDesktop);

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
                        mobileBase={mobileStack.base}
                        mobileCardHeight={mobileStack.cardHeight}
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
