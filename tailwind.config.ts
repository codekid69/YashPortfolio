import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-base": "#050816",
        "dark-card": "#0D1117",
        "dark-surface": "#111827",
        "dark-border": "#1E293B",
        "cyber-blue": "#00D4FF",
        "neon-violet": "#7C3AED",
        "cyber-green": "#00FF88",
        "neon-pink": "#FF006E",
        "text-primary": "#F1F5F9",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "grid-flow": "gridFlow 20s linear infinite",
        "trace-border": "traceBorder 3s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "ambient-pulse": "ambientPulse 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "tilt-in": "tiltIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        "grid-drift": "gridDrift 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 212, 255, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)" },
        },
        gridFlow: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        traceBorder: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ambientPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        tiltIn: {
          "0%": { opacity: "0", transform: "perspective(600px) rotateX(8deg) translateY(20px)" },
          "100%": { opacity: "1", transform: "perspective(600px) rotateX(0deg) translateY(0)" },
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "60px 60px, 60px 60px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-gradient": "linear-gradient(135deg, #00D4FF, #7C3AED)",
        "cyber-gradient-alt": "linear-gradient(135deg, #7C3AED, #FF006E)",
        "mesh-gradient": "radial-gradient(at 40% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%), radial-gradient(at 80% 80%, rgba(124, 58, 237, 0.06) 0%, transparent 50%)",
        "depth-gradient": "linear-gradient(180deg, transparent 0%, rgba(5, 8, 22, 0.8) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
