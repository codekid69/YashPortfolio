import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectMedia from "@/components/v2/ProjectMedia";
import LiveProjectButton from "@/components/v2/LiveProjectButton";
import { PROJECTS, getProject, hostOf } from "@/data/projects";

const SITE_URL = "https://yashbisht.vercel.app";

export const dynamicParams = false;

// Fits Google's ~155-char snippet without cutting a word in half.
function clip(text: string, max = 155) {
    if (text.length <= max) return text;
    return `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,.;:]$/, "")}…`;
}

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const project = getProject(params.slug);
    if (!project) return {};
    const title = `${project.name} — Case Study`;
    const description = clip(`${project.name} by Yash Bisht: ${project.description}`);
    const url = `/projects/${project.slug}`;
    const images = [{ url: project.poster, width: 1280, height: 800, alt: `${project.name} — ${project.tagline}` }];
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title: `${title} | Yash Bisht`, description, url, type: "article", images },
        twitter: { card: "summary_large_image", title: `${title} | Yash Bisht`, description, images },
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProject(params.slug);
    if (!project) notFound();

    const index = PROJECTS.indexOf(project);
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    const url = `${SITE_URL}/projects/${project.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CreativeWork",
                "@id": `${url}#work`,
                name: project.name,
                headline: `${project.name} — ${project.tagline}`,
                description: project.overview,
                url,
                sameAs: project.link,
                image: `${SITE_URL}${project.poster}`,
                keywords: (project.stack ?? project.tags).join(", "),
                author: { "@id": `${SITE_URL}/#person` },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Yash Bisht", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#projects` },
                    { "@type": "ListItem", position: 3, name: project.name, item: url },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-6 md:pt-8 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="hero-in text-xs sm:text-sm uppercase tracking-widest font-light text-[#D7E2EA]/55">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link href="/" className="hover:text-[#D7E2EA] transition-colors">
                                Yash Bisht
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li>
                            <Link href="/#projects" className="hover:text-[#D7E2EA] transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li aria-current="page" className="text-[#D7E2EA]">
                            {project.name}
                        </li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mt-12 sm:mt-16 flex flex-col gap-5 hero-in" style={{ ["--hero-delay" as string]: "0.1s" }}>
                    <span className="text-[11px] sm:text-sm uppercase tracking-[0.2em] font-light text-[#D7E2EA]/55">
                        {project.category}
                    </span>
                    <h1
                        className="hero-heading font-black uppercase leading-[0.9] tracking-tight"
                        style={{ fontSize: "clamp(3rem, 11vw, 150px)" }}
                    >
                        {project.name}
                    </h1>
                    <p className="text-lg sm:text-2xl font-light italic text-[#D7E2EA]/70">{project.tagline}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                        <LiveProjectButton href={project.link} label="Visit live site" />
                        <span className="text-sm text-[#D7E2EA]/50 font-light">{hostOf(project.link)}</span>
                    </div>
                </header>

                {/* Video */}
                <div
                    className="hero-in mt-12 sm:mt-16 rounded-[20px] sm:rounded-[32px] overflow-hidden border border-[#D7E2EA]/15 bg-[#151515]"
                    style={{ ["--hero-delay" as string]: "0.2s" }}
                >
                    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#D7E2EA]/10">
                        <span className="flex gap-1.5" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D7E2EA]/20" />
                        </span>
                        <span className="flex-1 truncate text-center text-xs text-[#D7E2EA]/45 font-light tracking-wide">
                            {hostOf(project.link)}
                        </span>
                        <span className="w-[42px]" aria-hidden="true" />
                    </div>
                    <div className="relative aspect-[16/10]">
                        <ProjectMedia
                            image={project.poster}
                            video={project.video}
                            alt={`${project.name} — ${project.tagline}, built by Yash Bisht`}
                            sizes="(max-width: 1200px) 100vw, 1150px"
                        />
                    </div>
                </div>

                {/* Body */}
                <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    <aside className="md:col-span-4 flex flex-col gap-8">
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/50 mb-3">Role</h2>
                            <p className="font-light leading-relaxed">{project.role}</p>
                        </div>
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/50 mb-3">
                                {project.stack ? "Stack" : "Scope"}
                            </h2>
                            <ul className="flex flex-wrap gap-2">
                                {(project.stack ?? project.tags).map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]/75 font-light"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <div className="md:col-span-8 flex flex-col gap-12">
                        <section>
                            <h2 className="text-2xl sm:text-3xl font-medium uppercase mb-5">Overview</h2>
                            <p className="font-light leading-relaxed text-[#D7E2EA]/80" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}>
                                {project.overview}
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl sm:text-3xl font-medium uppercase mb-5">What I built</h2>
                            <ul className="flex flex-col gap-4">
                                {project.highlights.map((h) => (
                                    <li
                                        key={h}
                                        className="font-light leading-relaxed text-[#D7E2EA]/80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#D7E2EA]/40"
                                        style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
                                    >
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Next project */}
                <nav aria-label="More projects" className="mt-24 sm:mt-32 border-t border-[#D7E2EA]/15 pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/50">Next project</span>
                        <span
                            className="hero-heading font-black uppercase leading-none tracking-tight transition-opacity group-hover:opacity-80"
                            style={{ fontSize: "clamp(2rem, 6vw, 72px)" }}
                        >
                            {next.name} →
                        </span>
                    </Link>
                    <Link
                        href="/#projects"
                        className="text-sm uppercase tracking-widest text-[#D7E2EA]/70 underline decoration-[#D7E2EA]/30 underline-offset-[6px] hover:text-[#D7E2EA] transition-colors"
                    >
                        All projects
                    </Link>
                </nav>
            </div>
        </main>
    );
}
