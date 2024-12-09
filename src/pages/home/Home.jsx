import React from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "./sectionHero/Hero";
import { Skills } from "./sectionSkills/Skills";
import { Projects } from "./sectionProjects/Projects";
import Contact from "./sectionContact/Contact";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/ChatBot/ChatBot";

export default function Home({ theme }) {
  const { mode } = theme.palette;

  return (
    <div>
      <Helmet>
        <title>Walber Melo - Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to Walber Melo's portfolio. Discover his Full Stack Developer expertise in modern web technologies, LLM optimization, and AI integration."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Frontend Developer, Backend Developer, JavaScript, TypeScript, Python, AI integration, portfolio"
        />
      </Helmet>
      <main className="home__page">
        <Hero theme={mode} />
        <Skills />
        <Projects />
        <Contact />
        <Footer theme={mode} />
        <Chatbot them={mode} />
      </main>
    </div>
  );
}
