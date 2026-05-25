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
    default:
      "Yash Bisht — Full Stack & GenAI Software Engineer | SaaS, RAG, AI Products",
    template: "%s | Yash Bisht",
  },
  description:
    "Yash Bisht is a Full Stack Developer and GenAI Engineer building production-grade SaaS platforms, RAG systems, and AI-powered products with React, Next.js, Node.js, TypeScript, OpenAI, and Gemini. Currently at BeyondChats. Available for freelance and full-time work.",
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
      "Yash Bisht — Full Stack & GenAI Software Engineer",
    description:
      "Building production-grade SaaS and GenAI systems. React, Next.js, Node.js, RAG, OpenAI, Gemini. Currently shipping AI conversational products at BeyondChats.",
    url: SITE_URL,
    siteName: "Yash Bisht Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Bisht — Full Stack & GenAI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bisht — Full Stack & GenAI Software Engineer",
    description:
      "Production-grade SaaS, RAG systems, and AI-powered products. React · Next.js · Node.js · OpenAI · Gemini.",
    creator: "@iyash069",
    site: "@iyash069",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
      image: `${SITE_URL}/og-image.png`,
      email: "mailto:bishtyash069@gmail.com",
      telephone: "+91-8860643975",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/codekid69",
        "https://www.linkedin.com/in/yashhbisht/",
        "https://twitter.com/iyash069",
      ],
      description:
        "Full Stack Developer and GenAI Engineer with 2+ years of experience designing and shipping production-grade SaaS platforms, RAG architectures, and AI-powered products.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "FastAPI",
        "NestJS",
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
        name: "GGSIPU – TIAS",
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
          "React, Next.js, Node.js, TypeScript, GenAI, RAG, OpenAI, Gemini, MongoDB, PostgreSQL",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Yash Bisht Portfolio",
      description:
        "Portfolio of Yash Bisht — Full Stack Developer & GenAI Engineer building production-grade SaaS platforms, RAG architectures, and AI-powered products.",
      inLanguage: "en-US",
      publisher: { "@id": PERSON_ID },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Yash Bisht — Freelance Full Stack & GenAI Engineering",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      description:
        "Freelance full stack and GenAI engineering services — SaaS platforms, RAG systems, AI-powered features, backend & API engineering, performance & SEO optimization.",
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
                "End-to-end product builds — landing pages to multi-tenant dashboards using React, Next.js, Node.js, MongoDB, Supabase.",
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
                "Embedding intelligence into existing apps — chat assistants, smart search, content generation, document Q&A, AI agents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backend & API Engineering",
              description:
                "Scalable Node.js, Express, NestJS, FastAPI services with REST, real-time, robust data layers, auth, payments, and integrations.",
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
      name: "PopCom",
      description:
        "End-to-end creator-commerce SaaS — turns creator traffic into trackable sales with smart tracking links, real-time analytics, and multi-tenant architecture.",
      url: "https://www.getpopcom.com/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "Dukiya Infra",
      description:
        "Luxury property listing platform engineered for performance, SEO, and scalability — React, Vite, Node.js, MongoDB, sub-second load times.",
      url: "https://www.dukiyainfra.com/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "Hariom Interior",
      description:
        "Mumbai's premium interior design firm website — modern, performant, conversion-focused.",
      url: "https://www.hariominterior.in/",
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "CreativeWork",
      name: "Thread AI",
      description:
        "AI That Knows You — personalized AI assistant. Featured personal project showcasing applied GenAI and product design.",
      url: "https://thread-ai-phi.vercel.app/",
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

        {/* Visually-hidden semantic supplement for SEO / screen readers.
            The visible hero h1 reads "Hi, I'm Yash" — this provides the
            full descriptive heading without disrupting the design. */}
        <h1 className="sr-only">
          Yash Bisht — Full Stack &amp; GenAI Software Engineer building
          production-grade SaaS platforms, RAG systems, and AI-powered products
          with React, Next.js, Node.js, OpenAI, and Gemini.
        </h1>

        {children}

        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#D7E2EA" }}>
            <h2>Yash Bisht — Full Stack &amp; GenAI Software Engineer</h2>
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
