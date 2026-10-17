"use client";

import { useEffect, useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import ContactButton from "./ContactButton";

const Avatar3D = dynamic(() => import("@/components/ui/Avatar3D"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-[#D7E2EA]/30 border-t-[#D7E2EA] animate-spin" />
        </div>
    ),
});

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const enter = (delay: number, y = 30) =>
    ({ "--hero-delay": `${delay}s`, "--hero-y": `${y}px` }) as CSSProperties;

// Mount the 3D avatar only once the page is idle, so three.js never competes
// with the first paint of the hero text.
function useIdleReady() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        let idleId: number | undefined;
        let timer: ReturnType<typeof setTimeout> | undefined;
        const go = () => {
            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
            } else {
                timer = setTimeout(() => setReady(true), 300);
            }
        };
        if (document.readyState === "complete") go();
        else window.addEventListener("load", go, { once: true });
        return () => {
            window.removeEventListener("load", go);
            if (idleId !== undefined) window.cancelIdleCallback(idleId);
            if (timer) clearTimeout(timer);
        };
    }, []);
    return ready;
}

export default function HeroSection() {
    const showAvatar = useIdleReady();
    return (
        <section
            className="relative h-screen flex flex-col"
            style={{ overflowX: "clip" }}
        >
            {/* Navbar */}
            <nav
                style={enter(0, -20)}
                className="hero-in relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider"
            >
                {navLinks.map((l) => (
                    <a
                        key={l.name}
                        href={l.href}
                        // Padding grows the tap target to 44px; the negative margin keeps the layout.
                        className="link-grow press-soft py-3 -my-3 text-sm md:text-lg lg:text-[1.4rem] tracking-[0.08em] hover:text-[#EEF3F6] transition-colors duration-300"
                    >
                        {l.name}
                    </a>
                ))}
            </nav>

            {/* Heading */}
            <div className="relative z-0 overflow-hidden mt-6 sm:mt-4 md:-mt-5 flex-1 flex flex-col justify-between">
                <div style={enter(0.15)} className="sweep sweep-play w-full">
                    <div
                        aria-hidden="true"
                        className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
                    >
                        Hi, i&apos;m yash
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative flex justify-between items-end gap-4 px-4 sm:px-6 md:px-10 pb-5 sm:pb-8 md:pb-10 z-20">
                    {/* The page's real H1: carries the full name for search, styled as the tagline. */}
                    <h1
                        className="hero-in text-[#D7E2EA]/80 font-light uppercase tracking-[0.04em] leading-[1.45] max-w-[150px] sm:max-w-[230px] md:max-w-[280px]"
                        style={{ ...enter(0.55, 20), fontSize: "clamp(0.65rem, 1.4vw, 1.5rem)" }}
                    >
                        <span className="block font-semibold tracking-[0.1em] text-[#EEF3F6] mb-0.5">Yash Bisht</span>
                        a full stack &amp; genai engineer driven by shipping striking, production-grade systems
                    </h1>
                    <div style={enter(0.7, 20)} className="hero-in shrink-0">
                        <ContactButton />
                    </div>
                </div>
            </div>

            {/* 3D Avatar */}
            <div className="absolute inset-x-0 bottom-[90px] sm:bottom-0 z-10 flex justify-center pointer-events-none px-6">
                <div
                    style={enter(0.1, 30)}
                    className="hero-in w-[480px] h-[560px] sm:w-[420px] sm:h-[480px] md:w-[520px] md:h-[580px] lg:w-[620px] lg:h-[680px] max-w-full pointer-events-auto"
                >
                    {showAvatar && <Avatar3D />}
                </div>
            </div>
        </section>
    );
}
