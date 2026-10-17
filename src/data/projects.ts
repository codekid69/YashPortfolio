export type Project = {
    slug: string;
    category: string;
    name: string;
    tagline: string;
    // Card copy on the home page.
    description: string;
    tags: string[];
    link: string;
    // Still frame from the same recording; shown until the video is playing.
    poster: string;
    video: string;
    // Case-study page (/projects/[slug]).
    role: string;
    overview: string;
    highlights: string[];
    stack?: string[];
};

export const PROJECTS: Project[] = [
    {
        slug: "clinic-os",
        category: "BeyondChats · Built solo, end to end",
        name: "Clinic OS",
        tagline: "Your whole clinic, in one place",
        description:
            "A multi-tenant clinic SaaS running live in clinics. Bookings, WhatsApp reminders with one-tap confirm, Razorpay payment links, Google Calendar sync and AI lab-report summaries, all in one place.",
        tags: ["Laravel", "PostgreSQL", "React", "WhatsApp API", "Razorpay"],
        link: "https://clinicos.beyondchats.com/",
        poster: "/projects/clinicos.jpg",
        video: "/projects/clinicos.webm",
        role: "Solo engineer, end to end: backend, frontend, integrations, CI/CD and production",
        overview:
            "Clinic OS is BeyondChats' clinic management platform. Clinics run bookings, patient records, check-in, payments and follow-ups from one place, while patient communication runs itself on WhatsApp and email. I built it end to end as the sole engineer, from the data model to production operations, and it is used live by clinics.",
        highlights: [
            "Multi-tenant clinic platform: bookings, public booking links, patient records, check-in, prescriptions and reports",
            "Automated patient communication on WhatsApp and email: reminders with one-tap confirm, follow-up journeys, rating surveys and report delivery",
            "Razorpay payment links with pay-before-visit, and two-way Google Calendar sync that finds patients from calendar events",
            "BeyondChats chatbot inbox connected over OAuth, plus MediXcel EMR import",
            "AI lab-report summaries for patients and doctors, with the original reports kept alongside",
            "Role-based access (full staff access by default, admin-only settings, per-staff limits) and an operator console for onboarding clinics",
            "Analytics dashboards, usage tracking and CSV patient import with duplicate checks",
            "Dev-to-prod delivery: GitLab CI/CD, safe migrations, post-deploy smoke checks and Playwright E2E across devices",
        ],
        stack: ["Laravel", "PHP", "PostgreSQL", "React", "Vite", "Node.js", "WhatsApp Business API", "Razorpay", "Google Calendar API", "OAuth 2.0", "GitLab CI/CD", "Playwright", "Sentry"],
    },
    {
        slug: "popcom",
        category: "Client · End-to-End Product",
        name: "PopCom",
        tagline: "Turn creator traffic into trackable sales",
        description:
            "A creator-commerce platform that ties influencer traffic to real revenue, with smart tracking links, per-creator analytics and performance-based payouts on a multi-tenant backend.",
        tags: ["Next.js", "TypeScript", "Supabase", "Node.js"],
        link: "https://www.getpopcom.com/",
        poster: "/projects/popcom.jpg",
        video: "/projects/popcom.webm",
        role: "Full stack engineer, end-to-end product build",
        overview:
            "Influencer content drives traffic, but brands rarely know which creators actually drive sales. PopCom closes that gap: brands and creators collaborate on one platform where every sale is attributed to the creator who drove it, and payouts follow performance.",
        highlights: [
            "Smart tracking links that attribute sales, not just clicks, to individual creators",
            "Real-time, per-creator analytics and reporting for brands",
            "Performance-based creator payouts",
            "E-commerce platform integration",
            "Multi-tenant architecture with strict data isolation between brands",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Node.js"],
    },
    {
        slug: "dukiya-infra",
        category: "Client · Real Estate",
        name: "Dukiya Infra",
        tagline: "The art of elevation",
        description:
            "A luxury real-estate platform with cinematic property showcases, brochures on demand and built-in lead capture, engineered SEO-first for sub-second loads.",
        tags: ["React", "Vite", "Node.js", "MongoDB"],
        link: "https://www.dukiyainfra.com/",
        poster: "/projects/dukiya.jpg",
        video: "/projects/dukiya.webm",
        role: "Full stack developer",
        overview:
            "A luxury property platform for Dukiya Infra, built to feel as premium as the homes it sells while staying fast and search-friendly. Buyers browse properties, download brochures and reach the sales team in a couple of taps.",
        highlights: [
            "Cinematic property showcases with brochures on demand",
            "Lead capture built in: expression-of-interest forms, meeting scheduling and WhatsApp chat",
            "SEO-first architecture and an optimized image pipeline",
            "Sub-second load times on a production-ready backend serving dynamic property data",
        ],
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind"],
    },
    {
        slug: "hariom-interior",
        category: "Client · Interiors",
        name: "Hariom Interior",
        tagline: "Mumbai's premium interior execution firm",
        description:
            "The web home of a fit-out firm working with brands like Taj, Marriott and Hyatt, with a sector-wise project portfolio, factory showcases and consultation booking.",
        tags: ["Corporate Site", "Project Portfolio", "Lead Capture", "SEO"],
        link: "https://www.hariominterior.in/",
        poster: "/projects/hariom.jpg",
        video: "/projects/hariom.webm",
        role: "Web developer",
        overview:
            "Hari Om Interior delivers turnkey hospitality, commercial and residential fit-outs, with in-house manufacturing and brands like Taj, Marriott and Hyatt among its partners. The site presents that scale clearly and turns visitors into consultation requests.",
        highlights: [
            "Project portfolio filterable by sector: hotels and resorts, malls and real estate",
            "Showcases for the firm's manufacturing units and turnkey services",
            "Company, journal, media and FAQ sections",
            "Consultation booking, WhatsApp and enquiry forms for lead capture",
        ],
    },
    {
        slug: "thread-ai",
        category: "Personal · GenAI",
        name: "Thread AI",
        tagline: "AI that actually knows you",
        description:
            "A personal AI with long-term memory. It recalls past conversations, learns your patterns, nudges you to reconnect with people and scans the web for gigs that match your skills.",
        tags: ["LLM Memory", "RAG", "Google Auth", "Opportunity Scanning"],
        link: "https://thread-ai-phi.vercel.app/",
        poster: "/projects/threadai.jpg",
        video: "/projects/threadai.webm",
        role: "Solo builder: product, design and engineering",
        overview:
            "Every chatbot forgets you the moment you close the tab. Thread is a personal intelligence system that remembers: it learns from your conversations and turns scattered thoughts, relationships and opportunities into structured understanding.",
        highlights: [
            "Thread Mind: long-term memory, pattern detection and context recall across conversations",
            "Thread Bridge: maps meaningful relationships and gently suggests reconnecting",
            "Thread Signal: scans the web for gigs and opportunities that match your skills",
            "One-tap Google sign-in, private by design",
        ],
    },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");
