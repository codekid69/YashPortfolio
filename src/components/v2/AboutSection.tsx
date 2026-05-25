"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import AnimatedText from "./AnimatedText";

const BIO =
    "With 2+ years of experience building production-grade SaaS platforms and GenAI systems, i focus on full stack engineering, RAG architectures, and AI-powered products, i truly enjoy working with teams that want to ship fast and stand out. Let's build something incredible together!";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
        >
            {/* Decorative 3D images */}
            <FadeIn
                x={-80}
                y={0}
                delay={0.1}
                duration={0.9}
                className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[70px] sm:w-[130px] md:w-[210px] pointer-events-none"
            >
                <Image
                    src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
                    alt=""
                    width={210}
                    height={210}
                    unoptimized
                    className="w-full h-auto"
                />
            </FadeIn>
            <FadeIn
                x={-80}
                y={0}
                delay={0.25}
                duration={0.9}
                className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[60px] sm:w-[110px] md:w-[180px] pointer-events-none"
            >
                <Image
                    src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
                    alt=""
                    width={180}
                    height={180}
                    unoptimized
                    className="w-full h-auto"
                />
            </FadeIn>
            <FadeIn
                x={80}
                y={0}
                delay={0.15}
                duration={0.9}
                className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[70px] sm:w-[130px] md:w-[210px] pointer-events-none"
            >
                <Image
                    src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
                    alt=""
                    width={210}
                    height={210}
                    unoptimized
                    className="w-full h-auto"
                />
            </FadeIn>
            <FadeIn
                x={80}
                y={0}
                delay={0.3}
                duration={0.9}
                className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[75px] sm:w-[140px] md:w-[220px] pointer-events-none"
            >
                <Image
                    src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
                    alt=""
                    width={220}
                    height={220}
                    unoptimized
                    className="w-full h-auto"
                />
            </FadeIn>

            <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
                <FadeIn y={40} delay={0}>
                    <h2
                        className="hero-heading font-black uppercase leading-none tracking-tight"
                        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
                    >
                        About me
                    </h2>
                </FadeIn>

                <AnimatedText
                    text={BIO}
                    className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
                />
            </div>

            <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
                <FadeIn y={20} delay={0.2}>
                    <ContactButton />
                </FadeIn>
            </div>
        </section>
    );
}
