import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const SITE_URL = "https://yashbisht.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yash Bisht, Full Stack & GenAI Engineer | SaaS & AI Products",
    template: "%s | Yash Bisht",
  },
  description:
    "Full stack & GenAI engineer with 3+ years shipping production SaaS and AI products. Built Clinic OS at BeyondChats. React, Next.js, Node.js, Laravel, RAG.",
  keywords: [
    "Yash Bisht",
    "Yash Bisht Portfolio",
    "Yash Bisht Developer",
    "Full Stack Developer India",
    "GenAI Engineer",
    "AI Engineer Portfolio",
    "RAG Pipeline Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Engineer",
    "MERN Stack Developer",
    "OpenAI Developer",
    "LangChain Developer",
    "Vector Database",
    "SaaS Engineer",
    "Freelance Full Stack Developer",
    "AI Chatbot Developer",
    "BeyondChats Engineer",
    "Turing Labs Engineer",
    "Hire Full Stack Developer",
    "Hire GenAI Engineer",
  ],
  authors: [{ name: "Yash Bisht", url: "https://github.com/codekid69" }],
  creator: "Yash Bisht",
  publisher: "Yash Bisht",
  category: "technology",
  applicationName: "Yash Bisht Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title:
      "Yash Bisht, Full Stack & GenAI Software Engineer",
    description:
      "I build SaaS and GenAI products that run live. React, Next.js, Node.js, RAG, OpenAI, Gemini. Currently shipping AI conversational products at BeyondChats.",
    url: SITE_URL,
    siteName: "Yash Bisht Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bisht, Full Stack & GenAI Software Engineer",
    description:
      "SaaS, RAG systems and AI-powered products. React · Next.js · Node.js · OpenAI · Gemini.",
    creator: "@iyash069",
    site: "@iyash069",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "googlebed620731671a89a",
  },
};

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Yash Bisht",
      alternateName: ["Yash", "codekid69"],
      jobTitle: "Full Stack & GenAI Software Engineer",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: "mailto:bishtyash069@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://yashbisht.carrd.co/",
        "https://github.com/codekid69",
        "https://www.linkedin.com/in/yashhbisht/",
        "https://twitter.com/iyash069",
      ],
      description:
        "Full Stack Developer and GenAI Engineer with 3+ years of experience designing and shipping SaaS platforms, RAG architectures, and AI-powered products.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "FastAPI",
        "NestJS",
        "Laravel",
        "PHP",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Redis",
        "Firebase",
        "Generative AI",
        "RAG Pipelines",
        "LangChain",
        "OpenAI",
        "Google Gemini",
        "Vector Databases",
        "Prompt Engineering",
        "SaaS Architecture",
        "Full Stack Development",
        "AI Product Development",
        "Docker",
        "Vercel",
        "GitHub Actions",
        "GitLab CI/CD",
        "Playwright",
        "WhatsApp Business API",
        "Razorpay",
        "OAuth 2.0",
        "Google Cloud Platform",
        "Azure",
        "REST APIs",
        "CI/CD",
        "SEO",
        "Performance Optimization",
      ],
      knowsLanguage: ["en", "hi"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "GGSIPU, TIAS",
        url: "http://www.tiaspg.tecnia.in/",
      },
      worksFor: {
        "@type": "Organization",
        name: "BeyondChats",
        url: "https://beyondchats.com/",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: { "@type": "City", name: "New Delhi" },
        skills:
          "React, Next.js, Node.js, Laravel, TypeScript, GenAI, RAG, OpenAI, Gemini, PostgreSQL, MongoDB",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Yash Bisht Portfolio",
      description:
        "Portfolio of Yash Bisht, a full stack developer and GenAI engineer who builds production SaaS platforms, RAG systems and AI-powered products.",
      inLanguage: "en-US",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfessionalService",
      name: "Yash Bisht, Freelance Full Stack & GenAI Engineering",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Freelance full stack and GenAI engineering: SaaS platforms, RAG systems, AI features, backend and API work, performance and SEO.",
      provider: { "@id": PERSON_ID },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Web Platforms",
              description:
                "End-to-end product builds, from landing pages to multi-tenant dashboards, using React, Next.js, Node.js, MongoDB and Supabase.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "GenAI & RAG Systems",
              description:
                "Production RAG pipelines, semantic search, AI chat, and multimodal workflows using OpenAI, Gemini, LangChain, and vector databases.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered Features",
              description:
                "AI added to existing apps: chat assistants, smart search, content generation, document Q&A and AI agents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backend & API Engineering",
              description:
                "Node.js, Express, NestJS and FastAPI services with REST and real-time APIs, data layers, auth, payments and integrations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance & SEO",
              description:
                "Sub-second load times, Core Web Vitals tuning, image and bundle optimization, and SEO-first architecture.",
            },
          },
        ],
      },
    },
    {
      "@type": "CreativeWork",
      name: "Clinic OS",
      description:
        "Multi-tenant clinic management SaaS by BeyondChats, built end to end by Yash Bisht: bookings, WhatsApp and email automation, Razorpay payments, Google Calendar sync, EMR import and AI lab-report summaries.",
      url: "https://clinicos.beyondchats.com/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "Kuinn",
      description:
        "Listing agent for D2C brands on Amazon and Flipkart. It checks every listing against each marketplace's rules and waits for a person to approve before publishing.",
      url: "https://www.kuinn.in/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "PopCom",
      description:
        "Creator-commerce SaaS that turns creator traffic into trackable sales, with smart tracking links, real-time analytics and a multi-tenant backend.",
      url: "https://www.getpopcom.com/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "Hariom Interior",
      description:
        "Website for a Mumbai interior fit-out firm, with a sector-wise project portfolio and consultation booking.",
      url: "https://www.hariominterior.in/",
      author: { "@id": PERSON_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#0C0C0C" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${kanit.variable} font-kanit antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>

        {children}

        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#D7E2EA" }}>
            <h2>Yash Bisht, Full Stack &amp; GenAI Software Engineer</h2>
            <p>
              Full Stack Developer specializing in scalable SaaS platforms, RAG
              architectures, and AI-powered product development. View my
              portfolio at{" "}
              <a href={SITE_URL} style={{ color: "#D7E2EA" }}>
                yashbisht.vercel.app
              </a>
              .
            </p>
            <p>
              Contact: <a href="mailto:bishtyash069@gmail.com" style={{ color: "#D7E2EA" }}>bishtyash069@gmail.com</a> ·{" "}
              <a href="https://www.linkedin.com/in/yashhbisht/" style={{ color: "#D7E2EA" }}>LinkedIn</a> ·{" "}
              <a href="https://github.com/codekid69" style={{ color: "#D7E2EA" }}>GitHub</a>
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
