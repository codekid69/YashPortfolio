import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const ClientProjects = dynamic(() => import("@/components/sections/ClientProjects"), { ssr: false });
const PersonalProjects = dynamic(() => import("@/components/sections/PersonalProjects"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientProjects />
        <Skills />
        <PersonalProjects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
