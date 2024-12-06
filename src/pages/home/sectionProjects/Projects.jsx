import "./projects.css";
import React from "react";
import { Box, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
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
          {/* Attendance Control */}
          <div className="div-projects--details">
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1722596157/portofolio/Attendance%20Control/ak1yv2htzpfpaawrjreh.png"
              alt="project"
              className="project-border"
            />
            <h2>Attendance Control</h2>
            <Typography>
              Built with Vue3 and Vuetify the app is a web-based time and
              attendance tracking PWA that provides a detailed record of your
              employees' work hours. The app automatically records clock-in and
              clock-out times but also offers the flexibility to manually input
              hours for specific instances for management system.
            </Typography>
            <div
              onClick={() => navigate("/project-attendance")}
              className="btn__view--project"
            >
              <Typography sx={{ fontWeight: "600" }}>View project</Typography>
              <ChevronRightIcon />
            </div>
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
              onClick={() => navigate("/project-melody")}
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
          {/* Roomly */}
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
        </div>
      </section>
      <CurrentProject />
    </>
  );
}
