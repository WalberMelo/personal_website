import React from "react";
import { Hero } from "./sectionHero/Hero";
import { Skills } from "./sectionSkills/Skills";
import { Projects } from "./sectionProjects/Projects";
import Contact from "./sectionContact/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
