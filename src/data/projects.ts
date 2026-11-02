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
    // Base path without extension; .mp4 and .webm are both served.
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
            "A multi-tenant clinic SaaS running live in clinics. Bookings, WhatsApp reminders with one-tap confirm, Razorpay payment links, Google Calendar sync and AI lab-report summaries.",
        tags: ["Laravel", "PostgreSQL", "React", "WhatsApp API", "Razorpay"],
        link: "https://clinicos.beyondchats.com/",
        poster: "/projects/clinicos.jpg",
        video: "/projects/clinicos",
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
        slug: "kuinn",
        category: "Client · Backend, dashboard and cloud",
        name: "Kuinn",
        tagline: "Marketplace listings, checked before they ship",
        description:
            "A listing agent for D2C brands selling on Amazon and Flipkart. It checks every field against each marketplace's rules and waits for a person on the team to approve before anything is published.",
        tags: ["FastAPI", "PostgreSQL", "React", "TanStack", "Google Cloud"],
        link: "https://www.kuinn.in/",
        poster: "/projects/kuinn.jpg",
        video: "/projects/kuinn",
        role: "Engineer across the backend, the dashboard and the Google Cloud setup",
        overview:
            "Amazon and Flipkart each have their own rulebook, and one wrong field can get a listing suppressed. With Kuinn a brand uploads its catalogue once. Every listing is checked against the marketplace's rules, any failure comes back with a plain fix, and nothing is sent until someone on the team approves it. AI drafting in the brand's voice is in development, and AI never publishes on its own.",
        highlights: [
            "Rules engine that checks every listing field against Amazon and Flipkart category rules and explains each failure with a fix",
            "Human approval on every listing: nothing reaches a marketplace without a person signing off",
            "Marketplace connections over OAuth, with adapters that publish through the Amazon and Flipkart APIs",
            "Bulk catalogue upload and review queues for the brand's team",
            "PostgreSQL job queue and background workers, with row-level security keeping each brand's data apart",
            "One typed API contract shared by backend and dashboard, from OpenAPI to generated TypeScript types",
            "Production on Google Cloud: Cloud Run, Cloud SQL PostgreSQL 17 and infrastructure as code with OpenTofu",
        ],
        stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "React", "TypeScript", "TanStack Router", "Tailwind CSS", "Cloud Run", "Cloud SQL", "OpenTofu", "Docker", "Playwright"],
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
        video: "/projects/popcom",
        role: "Full stack engineer, end-to-end product build",
        overview:
            "Influencer content drives traffic, but brands rarely know which creators actually drive sales. On PopCom, brands and creators work on one platform. Every sale is credited to the creator who drove it, and creators are paid on performance.",
        highlights: [
            "Smart tracking links that credit each sale to the creator who drove it",
            "Real-time, per-creator analytics and reporting for brands",
            "Performance-based creator payouts",
            "E-commerce platform integration",
            "Multi-tenant architecture with strict data isolation between brands",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Node.js"],
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
        video: "/projects/hariom",
        role: "Web developer",
        overview:
            "Hari Om Interior delivers turnkey hospitality, commercial and residential fit-outs, with in-house manufacturing and brands like Taj, Marriott and Hyatt among its partners. The site shows the firm's projects by sector and lets visitors book a consultation.",
        highlights: [
            "Project portfolio filterable by sector: hotels and resorts, malls and real estate",
            "Showcases for the firm's manufacturing units and turnkey services",
            "Company, journal, media and FAQ sections",
            "Consultation booking, WhatsApp and enquiry forms for lead capture",
        ],
    },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");
