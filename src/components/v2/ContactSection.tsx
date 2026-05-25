"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, Calendar } from "lucide-react";
import FadeIn from "./FadeIn";

const CALENDLY_URL = "https://calendly.com/bishtyash069/30min";

const SOCIALS = [
    { icon: Mail, label: "bishtyash069@gmail.com", href: "mailto:bishtyash069@gmail.com" },
    { icon: Github, label: "github.com/codekid69", href: "https://github.com/codekid69" },
    { icon: Linkedin, label: "linkedin.com/in/yashhbisht", href: "https://www.linkedin.com/in/yashhbisht/" },
];

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "d40fd95b-56eb-4aba-a9f4-5322006b063d",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputCls =
        "w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-[#111111] border border-[#D7E2EA]/15 text-[#D7E2EA] text-sm sm:text-base font-light placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors duration-200";

    return (
        <section
            id="contact"
            className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40"
        >
            {/* Heading + intro */}
            <div className="text-center">
                <FadeIn y={40} delay={0}>
                    <h2
                        className="hero-heading font-black uppercase leading-none tracking-tight"
                        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
                    >
                        Let&apos;s talk
                    </h2>
                </FadeIn>

                <FadeIn y={20} delay={0.2}>
                    <p
                        className="text-[#D7E2EA] font-light uppercase tracking-wide mt-6 sm:mt-8 max-w-xl mx-auto"
                        style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)" }}
                    >
                        Have a project in mind? Let&apos;s build something incredible together.
                    </p>
                </FadeIn>

                {/* Book a meeting — secondary CTA */}
                <FadeIn y={20} delay={0.25}>
                    <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] px-7 py-2.5 sm:px-9 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-300"
                        >
                            <Calendar size={14} />
                            Book a 30-min Call
                        </a>
                        <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest font-light">
                            — or send a message below —
                        </span>
                    </div>
                </FadeIn>
            </div>

            {/* Form */}
            <FadeIn y={30} delay={0.3}>
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 sm:mt-14 md:mt-16 max-w-2xl mx-auto flex flex-col gap-4 sm:gap-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                placeholder="Your name"
                                className={inputCls}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                placeholder="you@example.com"
                                className={inputCls}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                            placeholder="Tell me about your project..."
                            className={`${inputCls} resize-none`}
                        />
                    </div>

                    <div className="flex justify-center mt-4 sm:mt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{
                                background:
                                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                                boxShadow:
                                    "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                                outline: "2px solid white",
                                outlineOffset: "-3px",
                            }}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send size={14} />}
                        </button>
                    </div>

                    {status === "success" && (
                        <p className="text-center text-sm text-[#3ECF8E] font-light mt-2">
                            Message sent — I&apos;ll get back to you shortly.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-sm text-[#FF6B6B] font-light mt-2">
                            Something went wrong. Email me directly at bishtyash069@gmail.com
                        </p>
                    )}
                </form>
            </FadeIn>

            {/* Socials */}
            <FadeIn y={20} delay={0.4}>
                <div className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                    {SOCIALS.map((s) => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200 text-sm sm:text-base font-light"
                            >
                                <Icon size={18} />
                                {s.label}
                            </a>
                        );
                    })}
                </div>
            </FadeIn>

            <FadeIn y={10} delay={0.5}>
                <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-16 sm:mt-20 text-center">
                    © {new Date().getFullYear()} Yash Bisht
                </p>
            </FadeIn>
        </section>
    );
}
