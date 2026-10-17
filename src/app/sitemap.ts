import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

const SITE_URL = "https://yashbisht.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        ...PROJECTS.map((p) => ({
            url: `${SITE_URL}/projects/${p.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
