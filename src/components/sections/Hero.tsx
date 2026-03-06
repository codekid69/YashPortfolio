"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import GlowEffect from "@/components/ui/GlowEffect";
import TiltCard from "@/components/ui/TiltCard";

const techStack = [
    "next.js",
    "node.js",
    "genai",
    "rag",
    "fastapi",
    "mongodb",
    "react",
    "typescript",
];

const stats = [
    { value: "10+", label: "Client Projects Delivered" },
    { value: "5+", label: "GenAI Systems Built" },
    { value: "3+", label: "Production Apps Shipped" },
];

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
    const [currentTech, setCurrentTech] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const spotlightRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Smooth spring for parallax
    const springConfig = { stiffness: 75, damping: 20, mass: 1 };
    const parallaxX = useSpring(0, springConfig);
    const parallaxY = useSpring(0, springConfig);

    // Terminal typing effect
    useEffect(() => {
        const current = techStack[currentTech];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(current.substring(0, displayText.length + 1));
                    if (displayText === current) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayText(current.substring(0, displayText.length - 1));
                    if (displayText === "") {
                        setIsDeleting(false);
                        setCurrentTech((prev) => (prev + 1) % techStack.length);
                    }
                }
            },
            isDeleting ? 40 : 80
        );
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTech]);

    // Mouse tracking for parallax
    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        // Subtle content parallax (opposing movement)
        const cx = (e.clientX / window.innerWidth - 0.5) * -12;
        const cy = (e.clientY / window.innerHeight - 0.5) * -12;
        parallaxX.set(cx);
        parallaxY.set(cy);

        // Update spotlight position
        if (spotlightRef.current) {
            spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 255, 255, 0.03), transparent 40%)`;
        }
    }, [parallaxX, parallaxY]);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    // Enhanced particle canvas with depth layers and mouse interaction
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            depth: number; // 0=far, 1=mid, 2=near
        }

        const particles: Particle[] = [];
        const particleCount = 70;
        const connectionDistance = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialize particles with depth layers
        for (let i = 0; i < particleCount; i++) {
            const depth = i < 20 ? 0 : i < 50 ? 1 : 2;
            const speedMultiplier = depth === 0 ? 0.2 : depth === 1 ? 0.4 : 0.7;
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * speedMultiplier,
                vy: (Math.random() - 0.5) * speedMultiplier,
                size: depth === 0 ? 1.2 : depth === 1 ? 2 : 3.5,
                opacity: depth === 0 ? 0.3 : depth === 1 ? 0.5 : 0.8,
                depth,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Draw connections (only between same/adjacent depth layers)
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    if (Math.abs(particles[i].depth - particles[j].depth) > 1) continue;
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.25;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update particles with mouse interaction
            particles.forEach((p) => {
                // Mouse repulsion / parallax based on depth
                const ddx = p.x - mx;
                const ddy = p.y - my;
                const mouseDist = Math.sqrt(ddx * ddx + ddy * ddy);
                const influence = p.depth === 2 ? 80 : p.depth === 1 ? 40 : 10;

                if (mouseDist < 200 && mouseDist > 0) {
                    const force = ((200 - mouseDist) / 200) * influence * 0.01;
                    p.x += (ddx / mouseDist) * force;
                    p.y += (ddy / mouseDist) * force;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Particle dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
                ctx.fill();

                // Glow halo
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.size * 3
                );
                gradient.addColorStop(0, `rgba(0, 212, 255, ${p.opacity * 0.5})`);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.8, ease: EASE_PREMIUM },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
                aria-hidden="true"
            />

            {/* Radial Gradient Overlay */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, #050816 100%)",
                }}
                aria-hidden="true"
            />

            {/* Cinematic Lighting Layer */}
            <div className="cinematic-lighting" />

            {/* Film Grain Texture Overaly */}
            <div className="film-grain" />

            {/* Cursor Spotlight (updated via mousemove) */}
            <div
                ref={spotlightRef}
                className="absolute inset-0 z-[3] pointer-events-none hidden md:block"
                style={{
                    background: "radial-gradient(600px circle at 50% 50%, rgba(255, 255, 255, 0.02), transparent 40%)"
                }}
            />

            {/* Ambient Glow behind headline extending downwards */}
            <GlowEffect
                color="rgba(0, 212, 255, 0.12)"
                size="800px"
                className="top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-[2]"
            />
            <GlowEffect
                color="rgba(124, 58, 237, 0.1)"
                size="700px"
                className="top-[60%] right-[30%] z-[2]"
            />

            {/* Blending Gradient at bottom to fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-base via-dark-base/60 to-transparent z-[4] pointer-events-none" aria-hidden="true" />

            {/* Horizon glowing line */}
            <div className="hero-horizon-line z-[5]" aria-hidden="true" />

            {/* Content with subtle parallax */}
            <motion.div
                ref={contentRef}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                style={{ x: parallaxX, y: parallaxY }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyber-blue/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                        <span className="text-xs font-mono text-text-secondary">
                            Available for work
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 relative"
                    >
                        {/* Static text glow layer to mimic ambient light bleeding */}
                        <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-cyber-blue via-transparent to-neon-violet -z-10 bg-clip-text text-transparent pointer-events-none" aria-hidden="true">
                            I build production-grade<br />SaaS & GenAI systems.
                        </div>

                        I build{" "}
                        <span className="text-gradient-flow relative">
                            production-grade
                        </span>
                        <br />
                        SaaS & GenAI systems.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6"
                    >
                        Full Stack Developer specializing in scalable web platforms
                        and <br />AI-powered products.
                    </motion.p>

                    {/* Terminal Typing */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg glass border border-dark-border mb-10"
                    >
                        <span className="text-cyber-green font-mono text-sm">$</span>
                        <span className="font-mono text-sm text-text-secondary">
                            stack.current ={" "}
                        </span>
                        <span className="font-mono text-sm text-cyber-blue">
                            {displayText}
                            <span className="animate-pulse text-cyber-blue">|</span>
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="#work"
                            className="group flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm bg-gradient-to-r from-cyber-blue/10 to-neon-violet/10 border border-cyber-blue/40 text-cyber-blue cta-premium overflow-hidden relative"
                        >
                            {/* Inner shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                            <span className="relative z-10">View Work</span>
                            <ExternalLink
                                size={16}
                                className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm glass text-text-secondary hover:text-text-primary hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Stat Pills */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
                    >
                        {stats.map((stat, i) => (
                            <TiltCard
                                key={i}
                                tiltIntensity={6}
                                disableOnMobile={true}
                                glowColor="rgba(0, 212, 255, 0.15)"
                            >
                                <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl glass-card transition-all duration-300 border border-dark-border/40 hover:border-cyber-blue/40 group">
                                    <span className="text-2xl font-heading font-bold bg-gradient-to-br from-cyber-blue to-neon-violet bg-clip-text text-transparent group-hover:from-white group-hover:to-cyber-blue transition-all duration-300">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-text-muted max-w-[100px] leading-tight group-hover:text-text-secondary transition-colors duration-300">
                                        {stat.label}
                                    </span>
                                </div>
                            </TiltCard>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} className="text-text-muted" />
                </motion.div>
            </motion.div>
        </section>
    );
}
