import React from "react";
import "../../home/sectionProjects/projects.css";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import CurrentProject from "../../home/sectionProjects/CurrentProject";

/* Material UI  */
import { Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";

export function Allprojects({ theme }) {
  const { mode } = theme.palette;

  const navigate = useNavigate();

  return (
    <main className="projects__page">
      <section className="section-projects" id="projects">
        <div className="div-projects">
          <h1>Projects that I've been working on</h1>
          <p>
            I like to stay busy and always have a project on hand. I have
            completed several projects that have allowed me to apply my
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
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673290300/portofolio/ccc2eatx4ffqswbwnpvw.png"
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
              className="btn__view--project"
              onClick={() => navigate("/project-melody")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="div-projects--details">
            <Box id="quizz-grid">
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
            <Box
              className="btn__view--project"
              onClick={() => navigate("/project-quizz")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </Box>
          </div>
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673901205/portofolio/cooker/vh04bav9hqqkifo78yvc.png"
              alt="projects"
              className="cooker-img"
            />
            <h2>Cooker</h2>
            <Typography>
              Cooker is a recipe app that will help you with your next meal. The
              app allows users to browse thousands of delicious recipes,
              bookmark their recipes favorites and also upload your own. It was
              built with HTML, SASS and advanced vanilla Javascript.
            </Typography>
            <div
              className="btn__view--project"
              onClick={() => navigate("/project-cooker")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673447922/portofolio/getfood/v1mi8mylgt6256wdodly.png"
              alt="projects"
              className="project-border"
            />
            <h2>GetFood</h2>
            <Typography>
              GetFood is a beautiful landing page that guide the customer to
              order healthy food offering a vast range of menus for all kinds of
              taste.The page was built using basic web development technologies,
              HTML, CSS and basic vanilla Javascript.
            </Typography>
            <div
              className="btn__view--project"
              onClick={() => navigate("/project-getfood")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </section>
      <CurrentProject />
      <Footer theme={mode} />
    </main>
  );
}