"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";

interface Props {
    image: string;
    video?: string;
    // Extra gate from the parent, e.g. "this card is on top of the stack".
    active?: boolean;
    alt: string;
    sizes: string;
    className?: string;
}

// Plays a muted, looping preview only while the card is on screen, so
// several videos on the page never decode at the same time. Falls back to
// the still image when there's no video or the user prefers reduced motion.
export default function ProjectMedia({ image, video, active = true, alt, sizes, className = "" }: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const inView = useInView(wrapRef, { amount: 0.4 });
    const reduceMotion = useReducedMotion();
    const [ready, setReady] = useState(false);

    const playVideo = !!video && !reduceMotion;
    const shouldPlay = inView && active;

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        if (shouldPlay) {
            el.play().catch(() => {});
        } else {
            el.pause();
        }
    }, [shouldPlay]);

    return (
        <div ref={wrapRef} className={`relative w-full h-full overflow-hidden ${className}`}>
            <Image
                src={image}
                alt={alt}
                fill
                unoptimized={image.endsWith(".jfif")}
                className={`object-cover object-top transition-opacity duration-700 ${playVideo && ready ? "opacity-0" : "opacity-100"}`}
                sizes={sizes}
            />
            {playVideo && (
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${alt} preview`}
                    onPlaying={() => setReady(true)}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
                />
            )}
        </div>
    );
}
