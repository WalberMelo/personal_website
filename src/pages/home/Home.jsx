import React, { Component } from "react";
import { Hero } from "./sectionHero/Hero";
import { Projects } from "./sectionProjects/Projects";

function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}

export default Home;
