import React from "react";
import { Hero } from "./sectionHero/Hero";
import { Projects } from "./sectionProjects/Projects";
import { Skills } from "./sectionSkills/Skills";

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;
