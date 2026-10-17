"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType, ReactNode, useMemo } from "react";

interface FadeInProps {
    as?: ElementType;
    children: ReactNode;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
    className?: string;
    style?: React.CSSProperties;
}

// Cache of motion components by element tag, so we don't re-create
// (and therefore re-mount the subtree) on every parent render.
const motionCache = new Map<ElementType, ReturnType<typeof motion.create>>();

function getMotion(tag: ElementType) {
    const cached = motionCache.get(tag);
    if (cached) return cached;
    const created = motion.create(tag);
    motionCache.set(tag, created);
    return created;
}

export default function FadeIn({
    as = "div",
    children,
    delay = 0,
    duration = 0.7,
    x = 0,
    y = 30,
    className,
    style,
}: FadeInProps) {
    const MotionTag = useMemo(() => getMotion(as), [as]);
    const Component = MotionTag as React.ElementType;
    // Reduced motion keeps the fade (it aids reading order) but drops travel.
    const reduceMotion = useReducedMotion();
    return (
        <Component
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "50px", amount: 0 }}
            // Critically damped spring: arrives softly, never overshoots.
            transition={{ type: "spring", bounce: 0, duration: duration + 0.2, delay }}
            className={className}
            style={style}
        >
            {children}
        </Component>
    );
}
