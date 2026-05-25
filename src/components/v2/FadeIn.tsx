"use client";

import { motion } from "framer-motion";
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

const EASE = [0.25, 0.1, 0.25, 1] as const;

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
    return (
        <Component
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "50px", amount: 0 }}
            transition={{ delay, duration, ease: EASE }}
            className={className}
            style={style}
        >
            {children}
        </Component>
    );
}
