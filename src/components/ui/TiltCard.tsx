"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltIntensity?: number;
    glowColor?: string;
    disableOnMobile?: boolean;
}

export default function TiltCard({
    children,
    className = "",
    tiltIntensity = 8,
    glowColor = "rgba(0, 212, 255, 0.08)",
    disableOnMobile = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            setTilt({
                rotateX: (0.5 - y) * tiltIntensity,
                rotateY: (x - 0.5) * tiltIntensity,
            });
            setGlowPos({ x: x * 100, y: y * 100 });
        },
        [tiltIntensity]
    );

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovering(false);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsHovering(true);
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className={`relative ${disableOnMobile ? "md:[transform-style:preserve-3d]" : ""} ${className}`}
        >
            {children}
            {/* Shine / glow overlay */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 z-10"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
                }}
            />
        </motion.div>
    );
}
