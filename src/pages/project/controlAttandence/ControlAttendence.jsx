import "../melody/melody.css";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript, SiVuetify } from "react-icons/si";
import Footer from "../../../components/footer/Footer";

function ControlAttendance({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Attendance Control</h1>
          <Typography>
            Built with Vue3 and Vuetify the app is a web-based time and
            attendance tracking PWA that provides a detailed record of your
            employees' work hours. The app automatically records clock-in and
            clock-out times but also offers the flexibility to manually input
            hours for specific instances for management system.
          </Typography>
        </div>
        <div className="list_of_features">
          <Box className="site_view">
            <Typography sx={{ mb: 2 }}>
              <b>Live</b>
            </Typography>
            <Box
              sx={{
                display: "flex",
                color: "orange",
                fontWeight: 700,
                flexDirection: "column",
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 2,
                },
                mb: 2,
              }}
            >
              <Link
                href="https://pms.ubikos.es/static/presence/index.html"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1722598732/portofolio/Attendance%20Control/exieckjfokbeehxw8tz3.png"
              alt="cooker app"
              className="project-img img--border"
            />
          </Box>
          <Box className="site_features">
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Time and Date Attendance Tracking</li>
              <li>Management System</li>
              <li>PWA Features</li>
              <li>Reporting and Analytics</li>
              <li>Notifications and Alerts</li>
              <li>Security and Access Control</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>Vue 3</li>
              <li>Vuetify</li>
              <li>Pinia</li>
              <li>Typescript</li>
              <li>Cypress</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The purpose of this project is to develop a comprehensive,
              web-based time and attendance tracking application. The goal is to
              provide businesses with a reliable and efficient tool for
              monitoring and managing employee work hours. By automating the
              register process, while allowing for manual adjustments, the
              application aims to enhance workforce management and improve
              overall operational efficiency. Built as a Progressive Web
              Application (PWA) with Vue3 and Vuetify, the project seeks to
              deliver a seamless user experience across various devices and
              platforms.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1722598582/portofolio/Attendance%20Control/lrehgsskycxcdnebs1sb.png"
              alt="tablet"
              className="cooker_design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The web stack for this project includes Vue 3, Vuetify, TypeScript,
            and Pinia. Vue 3, a progressive JavaScript framework, is used for
            building dynamic and responsive user interfaces with its reactive,
            component-based architecture. Vuetify, a material design component
            library for Vue, ensures a consistent and visually appealing user
            interface with a wide range of pre-designed components. TypeScript,
            a statically typed superset of JavaScript, enhances code quality and
            maintainability by adding type safety and catching errors early
            during development. Pinia, a state management library for Vue,
            simplifies the management of application state, ensuring data
            consistency and ease of debugging. Together, these technologies
            provide a robust foundation for developing a comprehensive and
            efficient time and attendance tracking application.
          </Typography>
        </div>
        <div className="stack-icons">
          <div className="stack-icon">
            <FaVuejs color="#458c16" fontSize={30} />
            <Typography
              sx={{ color: "#52b70f", ml: "1rem" }}
              component={"span"}
            >
              VueJs 3
            </Typography>
          </div>

          <div className="stack-icon">
            <SiVuetify color="#365ce6" fontSize={30} />
            <Typography
              sx={{ color: "#356898", ml: "1rem" }}
              component={"span"}
            >
              Vuetify
            </Typography>
          </div>

          <div className="stack-icon">
            <SiTypescript color="#43afe2" fontSize={30} />
            <Typography
              sx={{ color: "#43afe2", ml: "1rem" }}
              component={"span"}
            >
              TypeScript
            </Typography>
          </div>
        </div>
      </div>
      2854 1746
      <div className="web__stack--projects">
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/c_scale,h_1746,w_2854/v1722598577/portofolio/Attendance%20Control/rmklghmm68padbiueudg.png"
            alt="mobile view"
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1722600620/portofolio/Attendance%20Control/ffdhhharb6gd50ejwv0f.png"
            alt="register view"
            className="project-img img--border"
          />
        </div>
      </div>
      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            During the development application, several challenges were
            encountered, particularly in handling diverse employee scenarios for
            registering entry and exit times. One major issue was accommodating
            various work schedules.The thought process involved creating a
            flexible system that could automatically detect and adjust to
            different clock-in and clock-out patterns while allowing manual
            overrides for exceptional cases. Additionally, implementing robust
            error handling and notifications ensured that any discrepancies or
            missed entries could be promptly addressed by management,
            maintaining the integrity of the attendance records.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1722601564/portofolio/Attendance%20Control/gkeeaqqtaopy0pp1tdod.png"
          alt="register view"
          className="img--border Problems_and_thought_img"
        />
      </Box>
      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          Developing this application taught me several valuable lessons. I
          learned the importance of flexibility in handling diverse work
          schedules and scenarios, ensuring accurate time tracking for all
          employees. Working with Vue 3 and Pinia state management emphasized
          the need for a reactive and efficient architecture. Using TypeScript
          highlighted the benefits of type safety and early error detection.
          Additionally, leveraging the latest technologies like Vuetify for a
          modern UI underscored the significance of a user-friendly interface
          that supports both automated and manual time entries.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default ControlAttendance;
