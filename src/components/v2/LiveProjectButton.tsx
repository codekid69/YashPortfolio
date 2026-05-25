"use client";

interface Props {
    href?: string;
    label?: string;
}

export default function LiveProjectButton({ href = "#", label = "Live Project" }: Props) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-300"
        >
            {label}
        </a>
    );
}
