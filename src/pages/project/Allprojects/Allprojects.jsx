import React from "react";
import "../../home/sectionProjects/projects.css";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import CurrentProject from "../../home/sectionProjects/CurrentProject";

/* Material UI  */
import { Box, Grid } from "@mui/material";
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
            I like to stay busy and always have a project on hand implementing
            new technologies. I have completed several projects enhanced my
            knowledge and help me improve my skills. Take a look in some of
            projects that I've been working. on.
          </p>
        </div>
        <div className="grid-projects">
          {/* Attendance control */}
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1722596157/portofolio/Attendance%20Control/ak1yv2htzpfpaawrjreh.png"
              alt="project"
              className="project-border"
            />
            <h2>Attendance Control </h2>
            <Typography>
              Built with Vue3 and Vuetify the app is a web-based time and
              attendance tracking PWA that provides a detailed record of your
              employees' work hours. The app automatically records clock-in and
              clock-out times but also offers the flexibility to manually input
              hours for specific instances for management system.
            </Typography>
            <div
              className="btn__view--project"
              onClick={() => navigate("/project-attendance")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>

          {/* Ubikos booking */}
          <div className="div-projects--details">
            <Box>
              <Grid sx={{ mb: 2 }} container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ width: "100%", height: "100%", overflow: "hidden" }}
                  >
                    <img
                      src="https://res.cloudinary.com/devwm/image/upload/c_scale,h_1555,w_938/v1733418473/portofolio/stayeasy/zknqow13bselx31xxdjg.png"
                      alt="project"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ width: "100%", height: "100%", overflow: "hidden" }}
                  >
                    <img
                      src="https://res.cloudinary.com/devwm/image/upload/v1733445016/portofolio/Eneya/v3qmjee9o7txjplpoq1d.png"
                      alt="project"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <h2>Roomly</h2>
            <Typography>
              The mobile web app project aim to enhance hotel efficiency and
              guest convenience by integrating advanced features like online
              booking, reservation payment, check-ins, keyless access, and
              OCR-driven form completion into our PMS software, delivering a
              seamless and modern hospitality experience.
            </Typography>
            <div
              onClick={() => navigate("/project-roomly")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>

          {/* Eneya */}
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1733443989/portofolio/Eneya/glvdzdff3ml8hqrbzhdi.png"
              alt="project"
              className="project-border"
            />
            <h2>Eneya</h2>
            <Typography>
              I developed this company page using Next.js to deliver a fast,
              modern, and responsive experience. The site showcases the
              company’s services, including renovations, maintenance, sales and
              installation, and custom projects, providing a user-friendly
              interface for clients to explore their offerings.
            </Typography>
            <a
              href="https://www.eneya.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </a>
          </div>

          {/* Melody Music */}
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
              className="btn__view--project"
              onClick={() => navigate("/project-melody")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>

          {/* Quizz */}
          <div className="div-projects--details">
            <Box id="quizz-grid">
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

          {/* Cooker */}
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1673901205/portofolio/cooker/vh04bav9hqqkifo78yvc.png"
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

          {/* Quote Generator */}
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
              className="btn__view--project"
              onClick={() => navigate("/project-quotegenerator")}
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
          </div>

          {/* GetFood */}
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1673447922/portofolio/getfood/v1mi8mylgt6256wdodly.png"
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
