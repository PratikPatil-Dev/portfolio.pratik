"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Skills from "./components/Skills.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Header  */}

      <Header />

      {/* Hero  */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About  */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience  */}

      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}

      {/* Skills  */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects  */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me  */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
