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
    "Full Stack Developer & GenAI Engineer specializing in scalable SaaS platforms, RAG architectures, and AI-powered product development.",
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
      sameAs: [
        "https://github.com/codekid69",
        "https://linkedin.com/in/yash-bisht-codekid69",
      ],
      description:
        "Full Stack Developer & GenAI Engineer specializing in scalable SaaS platforms, RAG architectures, and AI-powered product development.",
    },
    {
      "@type": "WebSite",
      "@id": "https://yashbisht.vercel.app/#website",
      url: "https://yashbisht.vercel.app",
      name: "Yash Bisht Portfolio",
      publisher: {
        "@id": "https://yashbisht.vercel.app/#person",
      },
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
      </body>
    </html>
  );
}
