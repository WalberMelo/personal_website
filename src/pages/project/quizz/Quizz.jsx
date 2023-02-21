import "../melody/melody.css";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiVite, SiReactrouter } from "react-icons/si";
import Footer from "../../../components/footer/Footer";

function Quizz({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Quizzical Trivial</h1>
          <Typography>
            Quizzical app is a funny game that was built with ReactJS which
            tests your knowledge about nature as a form of entertainment. The
            users can answer the questions as many times as they need until
            finding all the correct results in the game.
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
                href="https://walbermelo.github.io/quizzical/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1673394265/portofolio/fsa3q1jkzeyt3zg6m5vg.png"
              alt="quizz app"
              className="project-img img--border"
            />
          </Box>
          <Box className="site_features">
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Start and questions page</li>
              <li>10 questions from the OTDB API</li>
              <li>Record of correct answers after clicking "check answers"</li>
              <li>Feedback to the user after answer successfully</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>React</li>
              <li>ViteJs</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The project made it possible to reinforce React fundamentals
              necessary to build a modern app. In addition, put in practice some
              programming skills such as create pure functions to avoid any
              side-effects, use of the conditional rendering and retrieve and
              manipulate data from an API.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <Box sx={{ display: "flex" }}>
              <FaFigma />
              <Typography sx={{ ml: 1, mb: 2 }}>
                <b>Figma Design</b>
              </Typography>
            </Box>
            <img
              className="figma-img"
              src="https://res.cloudinary.com/devwm/image/upload/v1673386917/portofolio/dbzxqcavroywjyuwhgcm.png"
              alt="figma-design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The project was developed using ReactJS, CSS and Vite framework.
            React enables to create question components efficiently with
            significantly less code than vanilla JavaScript and structure the
            project more concise. I decided to style the application with CSS
            because the project size did not require many elements in the DOM,
            which made it easy to create an overall style for each component on
            the page. Vite was chosen because its start time is significantly
            faster than any other JavaScript-based bundler.
          </Typography>
        </div>
        <div className="stack-icons">
          <div className="stack-icon">
            <FaReact color="#61DBFB" fontSize={30} />
            <Typography
              sx={{ color: "#61DBFB", ml: "1rem" }}
              component={"span"}
            >
              React
            </Typography>
          </div>
          <div className="stack-icon">
            <SiVite color="#8120B1" fontSize={30} />
            <Typography
              sx={{ color: "#8120B1", ml: "1rem" }}
              component={"span"}
            >
              Vite JS
            </Typography>
          </div>
          <div className="stack-icon">
            <SiReactrouter color="#B61923" fontSize={30} />
            <Typography sx={{ ml: "1rem" }} component={"span"}>
              React Router
            </Typography>
          </div>
        </div>
      </div>

      <div className="web__stack--projects">
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1673394141/portofolio/x3wfk9eqbiuzqvachvl9.png"
            alt=""
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1673393963/portofolio/ys9bv2bdb8yusyfvb7lb.png"
            alt=""
            className="project-img img--border"
          />
        </div>
      </div>

      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            The data fetch from OTDB API comes with unreadable characters which
            requires modifying them using Regex before store as State. Once data
            is retrieved correctly, I had to shuffle the answers in order
            generate a random sequence of possibilities for the user in every
            new game. The conditional rending was crucial to restart the game
            and display a feedback for the user according to the results.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1673396111/portofolio/agiyrh6xcyksipyvzyx8.png"
          alt=""
          className="img--border Problems_and_thought_img"
        />
      </Box>

      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          The project involved essential React concepts which improved my
          knowledge about render props according conditional rendering, retrieve
          and manipulate API data. I also structured the code with functions
          following SOLID principles.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default Quizz;
