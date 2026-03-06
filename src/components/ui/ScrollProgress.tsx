"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
            <motion.div
                className="h-full origin-left"
                style={{
                    background: "linear-gradient(90deg, #00D4FF, #7C3AED, #FF006E)",
                    scaleX: progress,
                }}
                transition={{ duration: 0.05, ease: "linear" }}
            />
        </div>
    );
}
