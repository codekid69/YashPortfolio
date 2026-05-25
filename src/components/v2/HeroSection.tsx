"use client";

import dynamic from "next/dynamic";
import FadeIn from "./FadeIn";
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

export default function HeroSection() {
    return (
        <section
            className="relative h-screen flex flex-col"
            style={{ overflowX: "clip" }}
        >
            {/* Navbar */}
            <FadeIn
                as="nav"
                y={-20}
                delay={0}
                className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider"
            >
                {navLinks.map((l) => (
                    <a
                        key={l.name}
                        href={l.href}
                        className="text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
                    >
                        {l.name}
                    </a>
                ))}
            </FadeIn>

            {/* Heading */}
            <div className="relative z-0 overflow-hidden mt-6 sm:mt-4 md:-mt-5 flex-1 flex flex-col justify-between">
                <FadeIn y={40} delay={0.15} className="w-full">
                    <div
                        aria-hidden="true"
                        className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
                    >
                        Hi, i&apos;m yash
                    </div>
                </FadeIn>

                {/* Bottom bar */}
                <div className="relative flex justify-between items-end gap-4 px-4 sm:px-6 md:px-10 pb-5 sm:pb-8 md:pb-10 z-20">
                    <FadeIn
                        as="p"
                        y={20}
                        delay={0.35}
                        className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[220px] md:max-w-[260px]"
                        style={{ fontSize: "clamp(0.65rem, 1.4vw, 1.5rem)" }}
                    >
                        a full stack &amp; genai engineer driven by shipping striking, production-grade systems
                    </FadeIn>
                    <FadeIn y={20} delay={0.5} className="shrink-0">
                        <ContactButton />
                    </FadeIn>
                </div>
            </div>

            {/* 3D Avatar */}
            <div className="absolute inset-x-0 bottom-[90px] sm:bottom-0 z-10 flex justify-center pointer-events-none px-6">
                <FadeIn
                    y={30}
                    delay={0.6}
                    className="w-[480px] h-[560px] sm:w-[420px] sm:h-[480px] md:w-[520px] md:h-[580px] lg:w-[620px] lg:h-[680px] max-w-full pointer-events-auto"
                >
                    <Avatar3D />
                </FadeIn>
            </div>
        </section>
    );
}
