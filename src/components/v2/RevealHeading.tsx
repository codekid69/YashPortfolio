"use client";

import { useRef, type CSSProperties, type ElementType } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface Props {
    text: string;
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    // Fill with the brushed-metal gradient used by the hero.
    gradient?: boolean;
}

// Section title that sweeps in left to right, rising into focus, the first
// time it scrolls into view (see .sweep in globals.css). The word stays whole
// so the font's kerning is kept.
export default function RevealHeading({ text, as: Tag = "h2", className = "", style, gradient = true }: Props) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduceMotion = useReducedMotion();
    const state = inView || reduceMotion ? "sweep-play" : "sweep-wait";

    return (
        <Tag ref={ref} className={`sweep ${state} ${gradient ? "hero-heading" : ""} ${className}`} style={style}>
            {text}
        </Tag>
    );
}
