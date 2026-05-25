"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

function Char({
    char,
    progress,
    range,
}: {
    char: string;
    progress: MotionValue<number>;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <span className="relative inline-block">
            <span className="invisible">{char}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0">
                {char}
            </motion.span>
        </span>
    );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.2"],
    });

    const totalChars = text.replace(/\s/g, "").length;
    const step = 1 / Math.max(totalChars, 1);

    const words = text.split(" ");
    let charIndex = 0;

    return (
        <p ref={ref} className={className} style={style}>
            {words.map((word, wi) => {
                const wordChars = word.split("");
                const wordEl = (
                    <span
                        key={`w-${wi}`}
                        className="inline-block whitespace-nowrap"
                    >
                        {wordChars.map((c, ci) => {
                            const start = charIndex * step;
                            const end = start + step * 1.5;
                            charIndex += 1;
                            return (
                                <Char
                                    key={`w${wi}-c${ci}`}
                                    char={c}
                                    progress={scrollYProgress}
                                    range={[start, Math.min(end, 1)]}
                                />
                            );
                        })}
                    </span>
                );
                return (
                    <span key={`g-${wi}`}>
                        {wordEl}
                        {wi < words.length - 1 ? " " : ""}
                    </span>
                );
            })}
        </p>
    );
}
