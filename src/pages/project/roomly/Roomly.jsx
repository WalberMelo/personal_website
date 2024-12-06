import "../melody/melody.css";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaVuejs } from "react-icons/fa";
import { SiVuetify, SiJavascript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Footer from "../../../components/footer/Footer";

function Roomly({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Roomly</h1>
          <Typography>
            This mobile app, as part of Ubikos product which enhances hotel
            operations by enabling guests to book rooms, make payments, access
            reservations, complete online check-ins, and unlock doors with a
            keycode. Integrated OCR simplifies check-in by auto-filling forms,
            offering a seamless and modern guest experience.
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
                href="https://pms.ubikos.es/customerapp/index.html?querykey=x-3342-3345&hotelid=6001"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <video
                src="https://res.cloudinary.com/devwm/video/upload/v1733413128/portofolio/stayeasy/s4dxb04jahlu0gjjxe6c.mov"
                controls
                autoPlay
                loop
                muted
                height={500}
              >
                Your browser does not support the video tag.
              </video>
              <img
                src="https://res.cloudinary.com/devwm/image/upload/v1733418473/portofolio/stayeasy/zknqow13bselx31xxdjg.png"
                alt="stay easy home"
                height={500}
              />
            </Box>
          </Box>
          <Box className="site_features">
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Book a Room</li>
              <li>Make Payment</li>
              <li>Access Reservations</li>
              <li>Online Check-In</li>
              <li>OCR Integration</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>JavaScript</li>
              <li>Vue</li>
              <li>Vuetify</li>
            </ul>
          </Box>
        </div>
      </div>

      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The purpose of this project is to enhance hotel efficiency and
              guest convenience by integrating advanced features like online
              booking, reservation payment, check-ins, keyless access, and
              OCR-driven form completion into our PMS software, delivering a
              seamless and modern hospitality experience.
            </Typography>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1733416637/portofolio/stayeasy/rrxhkhtcc5fp3lol37fm.png"
            alt="stay easy home"
            height={500}
          />
          <video
            src="https://res.cloudinary.com/devwm/video/upload/v1733416629/portofolio/stayeasy/uvv6cjrq3tppzs8t6ptl.mov"
            controls
            autoPlay
            loop
            muted
            height={500}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The stack for this project includes Vue 2, Vuetify 2 and Javascript.
            Vue is a progressive JavaScript framework, is used for building
            dynamic and responsive user interfaces with its reactive,
            component-based architecture. Vuetify, a material design component
            library for Vue, ensures a consistent and visually appealing user
            interface with a wide range of pre-designed components.
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
            <SiJavascript color="#F0DB4F" fontSize={30} />
            <Typography
              sx={{ color: "#767676", ml: "1rem" }}
              component={"span"}
            >
              JavaScript
            </Typography>
          </div>
          <div className="stack-icon">
            <TbSql color="#0c0c0c" fontSize={30} />
            <Typography
              sx={{ color: "#d1cbcb", ml: "1rem" }}
              component={"span"}
            >
              SQL
            </Typography>
          </div>
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "6%",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1733413586/portofolio/stayeasy/jhyhxttltp2vtgsldi3j.png"
            alt="Available rooms"
            height={500}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1733413565/portofolio/stayeasy/t6wb2ju1f7qtqlqi2qey.png"
            alt="Reservation details"
            height={500}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1733413558/portofolio/stayeasy/vnfvht1f9bns8jsilnsw.png"
            alt="Reservation details"
            height={500}
          />
        </div>
      </Box>

      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            The development process addressed challenges such as ensuring secure
            payment integration, seamless room availability updates, accurate
            keycode generation with external provider, and reliable OCR
            implementation for form completion. The focus was on creating a
            user-friendly interface flow which guarantee the correct flow of the
            reservation while maintaining robust backend functionality to align
            with the hotel’s operational needs.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1733413574/portofolio/stayeasy/b8eqsyhnmuj6zizhquuq.png"
          alt="help section"
          height={500}
        />
      </Box>

      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          The project highlighted the importance of prioritizing user
          experience, balancing simplicity with functionality, and ensuring
          seamless integration with existing PMS software. It reinforced the
          need for thorough testing of payment systems, OCR accuracy, and
          keycode security to deliver a reliable and efficient solution for
          quick online room reservation.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default Roomly;
