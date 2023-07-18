import "./Galaxy.css";
import Footer from "../../../components/footer/Footer";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

function Galaxy({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Star Wars Galaxy Guide</h1>
          <Typography>
            The Star Wars Galaxy Guide is small full-stack project that utilizes
            the Star Wars API SWAPI. With a user-friendly interface, our
            application allows you to explore the Star Wars universe, accessing
            detailed information about films, characters, starships, and
            vehicles.
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
                href="https://star-wars-galaxy-guide-3ek2n8riq-walbermelo.vercel.app/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>
            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1689646861/portofolio/starwars/l9rrukypdxcsozzes53i.png"
              alt="melody"
              className="project-img img--border"
            />
          </Box>
          <Box className="site_features">
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>User registration and authentication</li>
              <li>Access to a screen home basic</li>
              <li>Menu category</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>NEXTJS</li>
              <li>Typescript</li>
              <li>Jest</li>
              <li>Typescript</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The purpose of our small full-stack project was to develop an
              application that provides a user interface to explore the Star
              Wars universe using the Star Wars API (SWAPI). Our goal was to
              create a functional and intuitive UI without relying on any CSS
              frameworks or preprocessors.
            </Typography>
            <Typography sx={{ paddingRight: 2 }}>
              Through this project, we aimed to showcase our ability to build a
              full-stack application from scratch, demonstrating proficiency in
              both front-end and back-end development. The project served as a
              testament to the power of simplicity, highlighting that a
              well-structured.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <Box sx={{ display: "flex" }}>
              <FaSass />
              <Typography sx={{ ml: 1, mb: 2 }}>
                <b>Sass</b>
              </Typography>
            </Box>
            <img
              className="figma-img"
              src="https://res.cloudinary.com/devwm/image/upload/v1689647096/portofolio/starwars/jwk5yctzqzgtpi1m31bl.png"
              alt="figma-design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            I chose to develop this small full-stack application using MongoDB,
            Express, Next.js, and Node.js. Firstly, MongoDB provides a flexible
            and scalable NoSQL database solution. Its document-oriented approach
            allows for easy storage and retrieval of data, making it an ideal
            choice for working with the Star Wars API.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Express.js, was chosen for its simplicity and ease of use. It
            allowed me to quickly set up routes, handle HTTP requests, and
            implement middleware, making it an efficient choice for build the
            back-end of our application following the MVC
            (Model-View-Controller) design pattern, which help me organize the
            codebase and promotes separation of concerns.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Next.js, a popular React framework, offers server-side rendering and
            efficient routing capabilities. It enables us to create dynamic and
            interactive front-end interfaces while providing excellent
            performance and SEO optimization out of the box. Next.js seamlessly
            integrates with Express.js, allowing for a smooth communication
            between the front-end and back-end components of our application.
          </Typography>
          <Typography>
            The API was built in Node.js from the ground with routes and model
            data in order to store and retrieve data from MongoDB database using
            authentication middleware with JWT. By combining MongoDB,
            Express.js, Next.js, and Node.js, we can leverage their respective
            strengths and create a robust and efficient full-stack application.
            The use of MVC design patterns ensures a clear separation of
            concerns, making our codebase more maintainable and scalable.
          </Typography>
        </div>
        <div className="stack-icons">
          <div className="stack-icon">
            <SiMongodb color="#4DB33D" fontSize={30} />
            <Typography
              sx={{ color: "#4DB33D", ml: "1rem" }}
              component={"span"}
            >
              MongoDB
            </Typography>
          </div>
          <div className="stack-icon">
            <SiExpress color="#716D7A" fontSize={30} />
            <Typography
              sx={{ color: "#716D7A", ml: "1rem" }}
              component={"span"}
            >
              Express
            </Typography>
          </div>
          <div className="stack-icon">
            <FaReact color="#000000" fontSize={30} />
            <Typography
              sx={{ color: "#000000", ml: "1rem" }}
              component={"span"}
            >
              NextJS
            </Typography>
          </div>
          <div className="stack-icon">
            <SiTypescript color="#2066b1" fontSize={30} />
            <Typography
              sx={{ color: "#2066b1", ml: "1rem" }}
              component={"span"}
            >
              Typescript
            </Typography>
          </div>
          <div className="stack-icon">
            <FaNodeJs color="inherit" fontSize={30} />
            <Typography
              sx={{ color: "inherit", ml: "1rem" }}
              component={"span"}
            >
              NodeJS
            </Typography>
          </div>
        </div>
      </div>

      <div className="web__stack--projects">
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1689647266/portofolio/starwars/hmlqa5tqvwara2anz53k.png"
            alt=""
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1689647308/portofolio/starwars/ewubjciqhb0tcwcuqkq0.png"
            alt=""
            className="project-img img--border"
          />
        </div>
      </div>

      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            The thought process behind building this small app with API
            consumption, user authentication, and login functionality was driven
            by several key considerations. One problem we aimed to address was
            the need to retrieve and display data from an external API, such as
            the Star Wars API (SWAPI). By consuming the API, we could access a
            vast amount of information about Star Wars films, characters,
            starships, and vehicles. This allowed us to create an engaging and
            informative user experience by providing detailed profiles and
            relevant data for each entity.
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Another crucial aspect we focused on was user authentication and
            login functionality. We recognized the importance of protecting user
            data and ensuring secure access to personalized features. By
            implementing token-based authentication, we could provide users with
            secure login capabilities, protecting their accounts and ensuring
            that only authorized individuals could access specific resources and
            features within the application.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1689647155/portofolio/starwars/rq5rpxxteqsskqk4jqto.png"
          alt=""
          className="img--border Problems_and_thought_img"
        />
      </Box>

      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography sx={{ mb: 1 }}>
          During the development of this small app, we learned valuable lessons.
          It's crucial to understand API data structures and handle them
          effectively. User security and feedback should be prioritized through
          token-based authentication and clear error handling. Organizing code
          using the MVC pattern enhances maintainability. Comprehensive testing
          ensures reliability. These lessons contribute to creating a robust and
          user-friendly application.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default Galaxy;
