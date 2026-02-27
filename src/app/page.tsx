import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import ClientProjects from "@/components/sections/ClientProjects";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

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
