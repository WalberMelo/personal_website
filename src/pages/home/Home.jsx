import React from "react";
import { Hero } from "./sectionHero/Hero";
import { Skills } from "./sectionSkills/Skills";
import { Projects } from "./sectionProjects/Projects";
import Contact from "./sectionContact/Contact";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/ChatBot/ChatBot";

function Home({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="home__page">
      <Hero theme={mode} />
      <Skills />
      <Projects />
      <Contact />
      <Footer theme={mode} />
      <Chatbot them={mode} />
    </main>
  );
}

export default Home;
