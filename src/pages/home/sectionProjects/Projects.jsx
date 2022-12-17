import "./projects.css";
import React from "react";
import melodyPhoto from "../../../assets/projects/app.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";

export function Projects() {
  return (
    <section className="section-projects" id="projects">
      <div className="div-projects">
        <h1>What I've been working on</h1>
        <Typography>
          I like to stay busy and always have a project in the work. Take a look
          at some of the applications, articles, and companies I’ve dedicated my
          time to.
        </Typography>
      </div>
      <div className="grid-projects">
        <div className="div-projects--details">
          <img src={melodyPhoto} alt="project" />
          <h2>Melody Music</h2>
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
          <h2>Movie By Night</h2>
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
