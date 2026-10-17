"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";

interface Props {
    image: string;
    // Base path without extension; `${video}.mp4` and `${video}.webm` are served.
    video?: string;
    // Extra gate from the parent, e.g. "this card is on top of the stack".
    active?: boolean;
    alt: string;
    sizes: string;
    className?: string;
}

// Plays a muted, looping preview only while it's the active, visible card.
// Sources are attached lazily the first time a card becomes active, so phones
// don't download every video at once and the visible one gets the bandwidth.
// MP4 (H.264) comes first because iOS Safari can't reliably play WebM.
// Falls back to the still image when there's no video, autoplay is blocked
// (e.g. iOS Low Power Mode) or the user prefers reduced motion.
export default function ProjectMedia({ image, video, active = true, alt, sizes, className = "" }: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const inView = useInView(wrapRef, { amount: 0.25 });
    const reduceMotion = useReducedMotion();
    const [armed, setArmed] = useState(false);
    const [ready, setReady] = useState(false);

    const playVideo = !!video && !reduceMotion;
    const shouldPlay = inView && active;

    useEffect(() => {
        if (shouldPlay && playVideo) setArmed(true);
    }, [shouldPlay, playVideo]);

    // Sources were just added: make the element pick them up.
    useEffect(() => {
        if (armed) videoRef.current?.load();
    }, [armed]);

    useEffect(() => {
        const el = videoRef.current;
        if (!el || !armed) return;
        if (!shouldPlay) {
            el.pause();
            return;
        }
        // iOS only autoplays muted inline video, and React doesn't reliably
        // reflect `muted` as an attribute, so set it on the element directly.
        el.muted = true;
        el.defaultMuted = true;
        const tryPlay = () => {
            el.play().catch(() => {});
        };
        tryPlay();
        // If data wasn't ready yet, try again once it is.
        el.addEventListener("canplay", tryPlay, { once: true });
        return () => el.removeEventListener("canplay", tryPlay);
    }, [shouldPlay, armed]);

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
                    muted
                    loop
                    playsInline
                    preload={armed ? "auto" : "none"}
                    aria-label={`${alt} preview`}
                    onPlaying={() => setReady(true)}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
                >
                    {armed && (
                        <>
                            <source src={`${video}.mp4`} type="video/mp4" />
                            <source src={`${video}.webm`} type="video/webm" />
                        </>
                    )}
                </video>
            )}
        </div>
    );
}
