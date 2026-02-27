"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

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

export default function Hero() {
    const [currentTech, setCurrentTech] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Particle canvas - floating nodes
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }[] = [];
        const particleCount = 60;
        const connectionDistance = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
                ctx.fill();

                // Glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    p.x,
                    p.y,
                    0,
                    p.x,
                    p.y,
                    p.size * 3
                );
                gradient.addColorStop(0, `rgba(0, 212, 255, ${p.opacity * 0.3})`);
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

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
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

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyber-blue/20 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                    <span className="text-xs font-mono text-text-secondary">
                        Available for work
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
                >
                    I build{" "}
                    <span className="gradient-text">production-grade</span>
                    <br />
                    SaaS & GenAI systems.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6"
                >
                    Full Stack Developer specializing in scalable web platforms
                    and AI-powered products.
                </motion.p>

                {/* Terminal Typing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#work"
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm bg-gradient-to-r from-cyber-blue/10 to-neon-violet/10 border border-cyber-blue/40 text-cyber-blue hover:border-cyber-blue/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300"
                    >
                        View Work
                        <ExternalLink
                            size={16}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm glass text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Stat Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-5 py-2.5 rounded-xl glass-card"
                        >
                            <span className="text-2xl font-heading font-bold gradient-text-blue">
                                {stat.value}
                            </span>
                            <span className="text-xs text-text-muted max-w-[100px] leading-tight">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

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
