import "./skills.css";
import React from "react";
import { DiScrum } from "react-icons/di";
import { IconContext } from "react-icons";
import Typography from "@mui/material/Typography";
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
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiAmazonaws,
  SiMongodb,
  SiFirebase,
  SiMiro,
  SiJest,
  SiPostman,
  SiExpress,
} from "react-icons/si";

export function Skills() {
  return (
    <section className="section-skills" id="skills">
      <div className="skills--title">
        <h1>My Skills</h1>
        <Typography component={"span"}>
          I have gained a wide range of skills through my studies, projects, and
          work experience. I have learned the fundamentals of web development,
          including HTML, CSS, JavaScript, Typescript and various frameworks
          such as React, NextJS, Redux. I have also gained experience with
          backend technologies such as Nodejs, Nestjs, Express, SQL, MongoDB and
          cloud serverless using AWS services as infrastructure.
        </Typography>
      </div>
      <div className="stacks__skills--container">
        <IconContext.Provider
          value={{ size: "2em", className: "global-class-name" }}
        >
          <div className="stacks-frontend">
            <div className="stacks">
              <h4>FRONTEND</h4>
              <div className="skills--grid">
                <div>
                  <FaHtml5 />
                  <Typography component={"span"}>HTML5</Typography>
                </div>
                <div>
                  <FaCss3 />
                  <Typography component={"span"}>CSS3</Typography>
                </div>
                <div>
                  <FaSass />
                  <Typography component={"span"}>SASS</Typography>
                </div>
                <div>
                  <FaBootstrap />
                  <Typography component={"span"}>Bootstrap</Typography>
                </div>
                <div>
                  <SiStyledcomponents />
                  <Typography sx={{ textAlign: "center" }} component={"span"}>
                    Styled Component
                  </Typography>
                </div>
                {/* <div>
                  <SiMaterialui />
                  <Typography component={"span"}>MaterialUI</Typography>
                </div> */}
                <div>
                  <SiJavascript />
                  <Typography component={"span"}>JavaScript</Typography>
                </div>
                <div>
                  <FaReact />
                  <Typography component={"span"}>React</Typography>
                </div>
                <div>
                  <SiNextdotjs />
                  <Typography component={"span"}>NextJS</Typography>
                </div>
                <div>
                  <SiRedux />
                  <Typography component={"span"}>Redux</Typography>
                </div>
                <div>
                  <SiTypescript />
                  <Typography component={"span"}>TypeScript</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="stacks-backend ">
            <div className="stacks">
              <h4>BACKEND</h4>
              <div className="skills--grid">
                <div>
                  <FaNodeJs />
                  <Typography component={"span"}>NodeJS</Typography>
                </div>
                <div>
                  <SiMongodb />
                  <Typography component={"span"}>MongoDB</Typography>
                </div>
                <div>
                  <SiExpress />
                  <Typography component={"span"}>Express</Typography>
                </div>
                <div>
                  <SiFirebase />
                  <Typography component={"span"}>Firebase</Typography>
                </div>
                <div>
                  <SiAmazonaws />
                  <Typography component={"span"}>Amazon</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="stacks-tools ">
            <div className="stacks">
              <h4>TOOLS</h4>
              <div className="skills--grid">
                <div>
                  <DiScrum />
                  <Typography component={"span"}>Scrum</Typography>
                </div>
                <div>
                  <FaFigma />
                  <Typography component={"span"}>Figma</Typography>
                </div>
                <div>
                  <SiMiro />
                  <Typography component={"span"}>Miro</Typography>
                </div>
                <div>
                  <SiJest />
                  <Typography component={"span"}>Jest</Typography>
                </div>
                <div>
                  <SiPostman />
                  <Typography component={"span"}>Postman</Typography>
                </div>
                <div>
                  <FaGitAlt />
                  <Typography component={"span"}>Git</Typography>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}
