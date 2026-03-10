import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const ClientProjects = dynamic(() => import("@/components/sections/ClientProjects"));
const PersonalProjects = dynamic(() => import("@/components/sections/PersonalProjects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const About = dynamic(() => import("@/components/sections/About"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
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
