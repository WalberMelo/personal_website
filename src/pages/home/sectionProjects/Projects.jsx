import "./projects.css";
import React from "react";
import { Box } from "@mui/material";
import melodyPhoto from "../../../assets/projects/app.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const navigate = useNavigate();

  return (
    <section className="section-projects" id="projects">
      <div className="div-projects">
        <h1>What I've been working on</h1>
        <p>
          I like to stay busy and always have a project in the work. Take a look
          at some of the applications, articles, and companies I’ve dedicated my
          time to.
        </p>
      </div>
      <div className="grid-projects">
        <div className="div-projects--details">
          <img
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673290300/portofolio/ccc2eatx4ffqswbwnpvw.png"
            alt="project"
            className="melody-project-border"
          />
          <h2>Melody Music</h2>
          <Typography>
            Melody is a fullstack web application built using MERN technology.
            The app is a music stream platform that beside play songs or upload
            songs allows the users to create a personal playlist to share with
            all users allowing them to add those songs to their own personal
            playlist.
          </Typography>
          <div onClick={() => navigate("/project-melody")}>
            <Typography sx={{ fontWeight: "600" }}>View project</Typography>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="div-projects--details">
          <Box className="quizz-grid">
            <Box sx={{ mr: 2 }}>
              <img
                src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673345613/portofolio/bwi35cuvhsoq8ekta5oh.png"
                alt="projects"
                className="quizzical-img"
              />
            </Box>
            <Box>
              <img
                src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673394265/portofolio/fsa3q1jkzeyt3zg6m5vg.png"
                alt="project"
                className="quizzical-img"
              />
            </Box>
          </Box>

          <h2>Quizzical</h2>
          <Typography>
            Quizzical app is a funny game that was built with ReactJS which
            tests your knowledge about nature as a form of entertainment. The
            users can answer the questions as many times as they need until
            finding all the correct results in the game.
          </Typography>
          <div onClick={() => navigate("/project-quizz")}>
            <Typography sx={{ fontWeight: "600" }}>View project</Typography>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="div-projects--details">
          <img src={melodyPhoto} alt="projects" className="img-projects" />
          <h2>Weather Forecast</h2>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            autem nihil ipsa, distinctio commodi minima officia dolorem
            expedita, animi ad sapiente aspernatur, modi blanditiis quia
            nesciunt quo numquam accusantium
          </Typography>
          <div>
            <Typography sx={{ fontWeight: "600" }}>View project</Typography>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="div-projects--details">
          <img src={melodyPhoto} alt="projects" className="img-projects" />
          <h2>Quizz</h2>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            autem nihil ipsa, distinctio commodi minima officia dolorem
            expedita, animi ad sapiente aspernatur, modi blanditiis quia
            nesciunt quo numquam accusantium
          </Typography>
          <div>
            <Typography sx={{ fontWeight: "600" }}>View project</Typography>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
