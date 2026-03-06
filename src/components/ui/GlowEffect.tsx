"use client";

interface GlowEffectProps {
    color?: string;
    size?: string;
    intensity?: number;
    className?: string;
    animate?: boolean;
}

export default function GlowEffect({
    color = "rgba(0, 212, 255, 0.15)",
    size = "400px",
    intensity = 1,
    className = "",
    animate = true,
}: GlowEffectProps) {
    return (
        <div
            className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${animate ? "animate-ambient-pulse" : ""} ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color}, transparent 70%)`,
                opacity: intensity,
            }}
            aria-hidden="true"
        />
    );
}
