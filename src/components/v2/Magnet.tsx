"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface MagnetProps {
    children: ReactNode;
    padding?: number;
    strength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function Magnet({
    children,
    padding = 150,
    strength = 3,
    activeTransition = "transform 0.3s ease-out",
    inactiveTransition = "transform 0.6s ease-in-out",
    className,
    style,
}: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const inX = Math.abs(dx) < rect.width / 2 + padding;
            const inY = Math.abs(dy) < rect.height / 2 + padding;
            if (inX && inY) {
                setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0px)`);
                setIsActive(true);
            } else {
                setTransform("translate3d(0px, 0px, 0px)");
                setIsActive(false);
            }
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [padding, strength]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                transform,
                transition: isActive ? activeTransition : inactiveTransition,
                willChange: "transform",
            }}
        >
            {children}
        </div>
    );
}
