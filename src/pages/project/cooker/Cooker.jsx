import "../melody/melody.css";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Cooker({ theme }) {
  // const { mode } = theme.palette;

  return (
    <main>
      <div className="introduction">
        <div className="summary">
          <h1>Cooker</h1>
          <Typography>
            Cooker is app recipe app that will help you with your next meal. The
            app allows users to browse thousands of delicious recipes, bookmark
            their recipes favorites and also upload your own. It was built with
            HTML, SASS and advanced vanilla Javascript.
          </Typography>
        </div>
        <div className="list_of_features">
          <div>
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
                href="https://cooker-v1.netlify.app/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673904876/portofolio/cooker/uz0edoi1nltep9kb2eiv.png"
              alt="cooker app"
              className="project-img img--border"
            />
          </div>
          <Box sx={{ mt: 12 }}>
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Search for recipes</li>
              <li>Recipes pagination</li>
              <li>Adjust number of servings</li>
              <li>Bookmark recipes</li>
              <li>Upload own recipes</li>
              <li>Local storage bookmark and recipes</li>
            </ul>
          </Box>
          <Box sx={{ mt: 12 }}>
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>HTML</li>
              <li>SASS</li>
              <li>JavaScript</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The purpose of this project was to create a dynamic app using
              HTML, SASS, and JavaScript. The main project goals were to create
              a visually appealing and user-friendly interface through HTML and
              SASS implementing interactive features and functionalities using
              advanced JavaScript concepts with MVC software architecture design
              pattern.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673912765/portofolio/cooker/mlh3zeysbcpspnpiztd8.png"
              alt="getfood mobile"
              className="cooker_design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            This small app contains all concepts in order to build a modern
            application. The use of SASS made it easier to write and organize
            CSS code. JavaScript was crucial for create interactive elements
            such upload recipe, buttons events, handler animations, and display
            recipes. The Model-View-Controller (MVC) was chosen for structure
            the application in a logical and scalable way.
          </Typography>
        </div>
        <div className="stack-icons">
          <div className="stack-icon">
            <FaHtml5 color="#F06529" fontSize={30} />
            <Typography
              sx={{ color: "#F06529", ml: "1rem" }}
              component={"span"}
            >
              HTML
            </Typography>
          </div>
          <div className="stack-icon">
            <FaSass color="#CD6799" fontSize={30} />
            <Typography
              sx={{ color: "#CD6799", ml: "1rem" }}
              component={"span"}
            >
              Sass
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
        </div>
      </div>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: 20,
          mb: 20,
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673920528/portofolio/cooker/z9bnar0iz8vuvodxtgiy.png"
            alt=""
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673920544/portofolio/cooker/ibaqaw4gcsq8wrvup3k2.png"
            alt=""
            className="project-img img--border"
          />
        </div>
      </Box>
      <Box className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            As most of vanilla JavaScript which does not have additional
            libraries or framework, I ran into some bumps along the way in order
            validate different input format data, to share data, and try to keep
            the code structure as reusable as possible. The implementation of
            Model-View-Controller (MVC) using publish/subscribe partner was
            crucial to structure the code separating the business logic of the
            application, the view responsible for displaying the data to the
            user, and the controller managing the flow of data between the model
            and the view.
          </Typography>
        </div>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673914169/portofolio/cooker/jipq3hgkiuotii2vsfcn.png"
          alt=""
          className="img--border Problems_and_thought_img"
        />
      </Box>
      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          The project introduced me to essential concepts in architecture design
          pattern. Also, a better understand in many JavaScript methods and
          techniques such as Async functions with Promisse in order to handle
          bad network requests, import/export modules to create MVC structure,
          generate "document fragment" <i>in memory</i> avoiding the complete
          reload of DOM. Finally, the importance of documentation mainly
          functions with JSDOC. Overall, built this small app with HTML, CSS,
          and JavaScript required a combination of problem-solving, planning,
          and technical skills.
        </Typography>
      </div>
    </main>
  );
}

export default Cooker;
