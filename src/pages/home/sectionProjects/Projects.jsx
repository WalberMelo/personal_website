import "./projects.css";
import React from "react";
import { Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CurrentProject from "./CurrentProject";

export function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section-projects" id="projects">
        <div className="div-projects">
          <h1>Projects that I've been working on</h1>
          <p>
            I have completed several projects that have allowed me to apply my
            knowledge and further develop my skills. For example, I have built a
            web application using React, Node.js and MongoDB, where I
            implemented features such as user authentication and real-time data
            management. Take a look in some of projects that I've been working
            on.
          </p>
        </div>
        <div className="grid-projects">
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1673290300/portofolio/ccc2eatx4ffqswbwnpvw.png"
              alt="project"
              className="project-border"
            />
            <h2>Melody Music</h2>
            <Typography>
              Melody is a fullstack web application built using MERN technology.
              The app is a music stream platform that beside play songs or
              upload songs allows the users to create a personal playlist to
              share with all users allowing them to add those songs to their own
              personal playlist.
            </Typography>
            <div
              onClick={() => navigate("/project-melody")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="div-projects--details">
            <Box sx={{ mb: 2 }} id="quizz-grid">
              <Box sx={{ mr: 2 }}>
                <img
                  src="https://res.cloudinary.com/devwm/image/upload/v1673345613/portofolio/bwi35cuvhsoq8ekta5oh.png"
                  alt="projects"
                  className="quizzical-img"
                />
              </Box>
              <Box>
                <img
                  src="https://res.cloudinary.com/devwm/image/upload/v1673394265/portofolio/fsa3q1jkzeyt3zg6m5vg.png"
                  alt="project"
                  className="quizzical-img"
                />
              </Box>
            </Box>

            <h2>Quizzical</h2>
            <Typography>
              Quizzical is a small and funny quiz game built with ReactJS. The
              app will tests your knowledge about nature as a form of
              entertainment. The users can answer 10 different single-choice
              questions as many times as they need until finding all the correct
              results in the game.
            </Typography>
            <Box
              onClick={() => navigate("/project-quizz")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </Box>
          </div>
          <div className="div-projects--details">
            <img
              src={
                "https://res.cloudinary.com/devwm/image/upload/v1673901205/portofolio/cooker/vh04bav9hqqkifo78yvc.png"
              }
              alt="projects"
              className="cooker-img"
            />

            <h2>Cooker</h2>
            <Typography>
              Cooker is a recipe app that will help you in your next meal. The
              app allows users to browse thousands of delicious recipes,
              bookmark their recipes favorites and also upload your own. It was
              built with HTML, SASS and advanced vanilla Javascript.
            </Typography>
            <div
              onClick={() => navigate("/project-cooker")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1685985900/portofolio/quotegenerator/ftly0q795ekqbwqm6vgz.png"
              alt="projects"
              className="project-border"
            />
            <h2>Inspiration Quote Generator</h2>
            <Typography>
              A full-stack app that generates quotes using ZenQuotes' API and
              allows the user to download them. Throughout the process, I delved
              into various aspects of development, such as state management,
              hooks, debugging, GraphQl modeling, the use of AWS Amplify which
              empowered my development, enabling seamless integration and
              scalable solutions.
            </Typography>
            <div
              onClick={() => navigate("/project-quotegenerator")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </section>
      <CurrentProject />
    </>
  );
}
