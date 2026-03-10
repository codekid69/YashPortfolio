import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://yashbisht.vercel.app"),
  title: {
    default: "Yash Bisht | Full Stack & GenAI Software Engineer",
    template: "%s | Yash Bisht",
  },
  description:
    "Yash Bisht — Full Stack Developer & GenAI Engineer specializing in scalable SaaS platforms, RAG architectures, and AI-powered product development. React Developer with production-grade portfolio.",
  keywords: [
    "Yash Bisht",
    "Full Stack Developer",
    "GenAI Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Expert",
    "SaaS Development",
    "AI Products",
    "RAG Systems",
    "System Architecture",
    "MERN Stack",
    "AI Developer Portfolio",
  ],
  authors: [{ name: "Yash Bisht", url: "https://github.com/codekid69" }],
  creator: "Yash Bisht",
  openGraph: {
    title: "Yash Bisht | Full Stack & GenAI Engineer",
    description:
      "Building premium, production-grade SaaS & GenAI systems. Explore my portfolio of client work and RAG architectures.",
    url: "https://yashbisht.vercel.app",
    siteName: "Yash Bisht Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Bisht - Full Stack & GenAI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bisht | Full Stack & GenAI Engineer",
    description:
      "Building premium, production-grade SaaS & GenAI systems. Explore my portfolio of client work and RAG architectures.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yashbisht.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://yashbisht.vercel.app/#person",
      name: "Yash Bisht",
      jobTitle: "Full Stack & GenAI Software Engineer",
      url: "https://yashbisht.vercel.app",
      image: "https://yashbisht.vercel.app/og-image.jpg",
      sameAs: [
        "https://github.com/codekid69",
        "https://linkedin.com/in/yash-bisht-codekid69",
      ],
      description:
        "Full Stack Developer & GenAI Engineer specializing in scalable SaaS platforms, RAG architectures, and AI-powered product development.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "GenAI",
        "RAG Pipelines",
        "MongoDB",
        "Full Stack Development",
        "SaaS Architecture",
        "AI Product Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://yashbisht.vercel.app/#website",
      url: "https://yashbisht.vercel.app",
      name: "Yash Bisht Portfolio",
      description:
        "Portfolio of Yash Bisht — Full Stack Developer & GenAI Engineer showcasing production-grade SaaS platforms, AI-powered products, and RAG architectures.",
      publisher: {
        "@id": "https://yashbisht.vercel.app/#person",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Dukiya Infra",
      description:
        "Full-scale luxury property listing platform engineered for performance, SEO, and scalability with sub-second load times.",
      url: "https://www.dukiyainfra.com/",
      author: { "@id": "https://yashbisht.vercel.app/#person" },
    },
    {
      "@type": "CreativeWork",
      name: "GetPopCom",
      description:
        "Creator-brand collaboration and commerce platform with smart tracking links, real-time analytics, and multi-tenant architecture.",
      url: "https://www.getpopcom.com/",
      author: { "@id": "https://yashbisht.vercel.app/#person" },
    },
    {
      "@type": "CreativeWork",
      name: "GenAI Video Intelligence System",
      description:
        "AI pipeline that extracts, transcribes, embeds, and clusters video segments for automated analysis using multimodal embeddings.",
      url: "https://video-ai-stitcher.vercel.app/",
      author: { "@id": "https://yashbisht.vercel.app/#person" },
    },
    {
      "@type": "CreativeWork",
      name: "AI Document Chat",
      description:
        "Real-time AI chat interface for documents with streaming reasoning and instant contextual answers.",
      url: "https://document-chat-frontend.vercel.app/",
      author: { "@id": "https://yashbisht.vercel.app/#person" },
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
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        {/* Wireframe Grid Background */}
        <div className="wireframe-grid" aria-hidden="true" />
        {children}
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#F1F5F9" }}>
            <h1>Yash Bisht — Full Stack &amp; GenAI Software Engineer</h1>
            <p>
              Full Stack Developer specializing in scalable SaaS platforms, RAG architectures, and AI-powered product development.
              View my portfolio at <a href="https://yashbisht.vercel.app" style={{ color: "#00D4FF" }}>yashbisht.vercel.app</a>.
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
