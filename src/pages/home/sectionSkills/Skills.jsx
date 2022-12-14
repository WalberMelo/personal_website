import "./skills.css";
import React from "react";
import { DiScrum } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiMaterialui,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiMiro,
  SiJest,
  SiPostman,
  SiExpress,
  SiSwagger,
} from "react-icons/si";

export function Skills() {
  return (
    <section className="section-skills" id="skills">
      <div className="section-border--line"></div>
      <div className="div-skills--title">
        <h1>My Skills</h1>
        <p>
          Through my studies, projects and work experience, I’ve gained a solid
          foundation of web development concepts, and have dedicated a lot of my
          time to apply these concepts to real-world scenario and applications.
        </p>
      </div>
      <div className="div-skills--stacks">
        <IconContext.Provider
          value={{ size: "2em", className: "global-class-name" }}
        >
          <div className="stacks">
            <h4>FRONTEND</h4>
            <div className="div-skills--grid">
              <div>
                <FaHtml5 />
                <p>HTML5</p>
              </div>
              <div>
                <FaCss3 />
                <p>CSS3</p>
              </div>
              <div>
                <FaSass />
                <p>SASS</p>
              </div>
              <div>
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
              <div>
                <SiStyledcomponents />
                <p>Styled Component</p>
              </div>
              <div>
                <SiMaterialui />
                <p>Material UI</p>
              </div>
              <div>
                <SiJavascript />
                <p>JavaScript</p>
              </div>
              <div>
                <FaReact />
                <p>React</p>
              </div>
              <div>
                <SiRedux />
                <p>Redux</p>
              </div>
              <div>
                <SiTypescript />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
          <div className="stacks-backend">
            <div className="stacks">
              <h4>BACKEND</h4>
              <div className="div-skills--grid">
                <div>
                  <FaNodeJs />
                  <p>NodeJS</p>
                </div>
                <div>
                  <SiMongodb />
                  <p>MongoDB</p>
                </div>
                <div>
                  <SiExpress />
                  <p>Express</p>
                </div>
                <div>
                  <SiFirebase />
                  <p>Firebase</p>
                </div>
              </div>
            </div>
            <div className="stacks">
              <h4>TOOLS</h4>
              <div className="div-skills--grid">
                <div>
                  <DiScrum />
                  <p>SCRUM</p>
                </div>
                <div>
                  <FaFigma />
                  <p>Figma</p>
                </div>
                <div>
                  <SiMiro />
                  <p>Miro</p>
                </div>
                <div>
                  <SiJest />
                  <p>Jest</p>
                </div>
                <div>
                  <SiPostman />
                  <p>Postman</p>
                </div>
                <div>
                  <FaGitAlt />
                  <p>Git</p>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
        ;
      </div>
    </section>
  );
}
