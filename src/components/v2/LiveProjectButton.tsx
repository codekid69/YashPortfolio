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
            className="press group inline-flex items-center gap-2 sm:gap-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] px-7 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-[0.1em] sm:tracking-[0.16em] hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
        >
            {label}
            <span
                aria-hidden="true"
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
                ↗
            </span>
        </a>
    );
}
