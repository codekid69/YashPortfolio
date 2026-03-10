"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Github,
    Linkedin,
    Send,
    Download,
    ArrowUpRight,
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "d40fd95b-56eb-4aba-a9f4-5322006b063d",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    const socials = [
        {
            name: "Email",
            href: "mailto:bishtyash069@gmail.com",
            icon: Mail,
            label: "bishtyash069@gmail.com",
        },
        {
            name: "GitHub",
            href: "https://github.com/codekid69",
            icon: Github,
            label: "codekid69",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/yashhbisht/",
            icon: Linkedin,
            label: "yashhbisht",
        },
    ];

    return (
        <section id="contact" className="relative section-padding">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 -z-10"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0, 212, 255, 0.06), transparent)",
                }}
            />

            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: EASE_PREMIUM }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-cyber-blue border border-cyber-blue/20 bg-cyber-blue/5 mb-4">
                        CONTACT
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                        Let&apos;s build something{" "}
                        <span className="gradient-text">real</span>.
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Have a project in mind? Let&apos;s discuss how I can help build
                        your next production-grade system.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-mono text-text-muted mb-2"
                                    >
                                        NAME
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                        className="w-full px-4 py-3 rounded-xl glass border border-dark-border/50 bg-transparent text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyber-blue/40 focus:ring-1 focus:ring-cyber-blue/20 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-mono text-text-muted mb-2"
                                    >
                                        EMAIL
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                        className="w-full px-4 py-3 rounded-xl glass border border-dark-border/50 bg-transparent text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyber-blue/40 focus:ring-1 focus:ring-cyber-blue/20 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-mono text-text-muted mb-2"
                                >
                                    MESSAGE
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-3 rounded-xl glass border border-dark-border/50 bg-transparent text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyber-blue/40 focus:ring-1 focus:ring-cyber-blue/20 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Send message"
                                className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-cyber-blue/10 to-neon-violet/10 border border-cyber-blue/40 text-cyber-blue hover:border-cyber-blue/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] disabled:opacity-50 transition-all duration-300 shimmer"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send
                                    size={16}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </motion.button>
                            {submitStatus === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="text-sm text-cyber-green mt-4 text-center font-medium"
                                >
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </motion.p>
                            )}
                            {submitStatus === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="text-sm text-neon-pink mt-4 text-center font-medium"
                                >
                                    Something went wrong. Please try again or email me directly.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                    {/* Social Links + Resume */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {socials.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.div
                                    key={social.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08, ease: EASE_PREMIUM }}
                                >
                                    <TiltCard
                                        tiltIntensity={4}
                                        glowColor="rgba(0, 212, 255, 0.06)"
                                    >
                                        <a
                                            href={social.href}
                                            target={social.href.startsWith("http") ? "_blank" : undefined}
                                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="group flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-dark-border/50 group-hover:border-cyber-blue/30 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300">
                                                <Icon
                                                    size={18}
                                                    className="text-text-muted group-hover:text-cyber-blue transition-colors duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-text-primary">
                                                    {social.name}
                                                </p>
                                                <p className="text-xs text-text-muted truncate">
                                                    {social.label}
                                                </p>
                                            </div>
                                            <ArrowUpRight
                                                size={16}
                                                className="text-text-muted group-hover:text-cyber-blue shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </a>
                                    </TiltCard>
                                </motion.div>
                            );
                        })}

                        {/* Resume Download */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, ease: EASE_PREMIUM }}
                        >
                            <TiltCard
                                tiltIntensity={4}
                                glowColor="rgba(124, 58, 237, 0.08)"
                            >
                                <a
                                    href="/Yash_Bisht_Resume.pdf"
                                    download
                                    className="group flex items-center gap-4 glass-card rounded-xl p-4 border-dashed transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neon-violet/10 border border-neon-violet/20 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] transition-all duration-300">
                                        <Download size={18} className="text-neon-violet" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-text-primary">
                                            Download Resume
                                        </p>
                                        <p className="text-xs text-text-muted">PDF • Updated 2025</p>
                                    </div>
                                    <ArrowUpRight
                                        size={16}
                                        className="text-text-muted group-hover:text-neon-violet shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                            </TiltCard>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
