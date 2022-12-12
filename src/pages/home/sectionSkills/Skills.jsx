import "./skill.css";
import React from "react";

export default function Skills() {
  return (
    <section>
      <div className="div-skills" id="skills">
        <h1>My Skills</h1>
        <p>
          Through my studies, projects and work experience, I’ve gained a solid
          foundation of web development concepts, and have dedicated a lot of my
          time to apply these concepts to real-world scenario and applications.
        </p>
      </div>
      <div>
        <h2>FRONTEND</h2>
        <div>
          //TODO: Adicionar skill icons
          <div className="div-skills--grid"></div>
        </div>
      </div>
    </section>
  );
}
