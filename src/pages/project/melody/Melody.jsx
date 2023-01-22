import "./melody.css";
import Footer from "../../../components/footer/Footer";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function Melody({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Melody Music Stream</h1>
          <Typography>
            Melody is a fullstack web application built using MERN technology.
            The app is based on Spotify/SoundCloud which allows the publication
            and reproduction of songs among a community of users. The users are
            able to access the application to play songs uploaded by themselves
            and songs uploaded by other users. They can also create a personal
            playlist to share songs with all users allowing them to add those
            songs to their own personal playlist. There is an advanced search
            page which makes it possible to browse the content by genre or
            artist. The app has a modern UI following standard Design Patterns
            Systems.
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
                href="https://melody-music-stream-front.vercel.app/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>
            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673292974/portofolio/f2bpxfwxomcvw4rvj1oz.png"
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
              <li>Account management</li>
              <li>Album/playlist publishing and management</li>
              <li>User/artist manager and viewer, with tracking options</li>
              <li>Publish, view, play and manage songs</li>
              <li>Like a song</li>
              <li>Song browser</li>
              <li>Advanced search page</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>React</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Cloudinary</li>
              <li>Material UI</li>
              <li>styled-components</li>
              <li>Redux</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              As developer, the requirements of this project represented a
              realistic product specification from a commercial point of view.
              The planning and challenges encountered throughout all stages
              enhanced the ability to develop a team project applying SCRUM
              methodology, one of the most used Agile frameworks in the market.
            </Typography>
            <Typography sx={{ paddingRight: 2 }}>
              Also, it improved my knowledge in back-end development with
              technologies such as Node, Express, MongoDB and in front-end
              development with React, Redux, Material UI, Styled Component,
              which consist of MERN Stack technology. The project was an
              opportunity to practice the usage of other developer tools, like
              Figma for UI design and Cloudinary for cloud-based image and video
              management service.
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
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1672840661/portofolio/k9eclllllrfnlgtugc86.png"
              alt="figma-design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The client-server system was developed using React JS, Redux,
            Material UI, Styled-Components to build the front-end and NodeJS,
            Express, MongoDB for the back-end implementation. Vercel was the
            choice for deployment for the front-end and railway for the
            back-end.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            React hooks and session storage were used through the project to
            maintain the user token generated by the server-side. Redux was
            implemented providing a global state management in the whole app
            avoiding any "prop drilling" issue due to the many components that
            require children props, such as the music player.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            When I created the database, the modeling was structured considering
            the balance between performance and the use of the application. All
            input data passes by schema validation rules, avoiding unwanted data
            types going into the data base. I used Git for version control to
            ensure I would not lose data, the ability to revert to previous
            versions, and allow the team to develop on their correspondent
            branch.
          </Typography>
          <Typography>
            The API was built in Node.js from the ground up and follows MVC
            design patterns with routes and model data. Then created CRUD
            operations from a MongoDB database with REST verb methods using
            Express framework routers and controllers. Finally, add
            authentication middleware with JWTs.
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
            <FaReact color="#61DBFB" fontSize={30} />
            <Typography
              sx={{ color: "#61DBFB", ml: "1rem" }}
              component={"span"}
            >
              React
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
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673296746/portofolio/l5qm7g0bx2unvyep7uif.png "
            alt=""
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673296813/portofolio/xmhfoysj2yyjebdiuujz.png"
            alt=""
            className="project-img img--border"
          />
        </div>
      </div>

      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            Because of the complexity of this project, one particularly
            difficult area was the organization and structure of the code. I
            realized the importance of this process in the code maintenance and
            implementation. I worked a lot to keep components as reusable as
            possible.
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Like most projects, there are many components linked to the database
            which require updates after the user interacts with it. In order to
            re-fetch only the correspondent state mutated instead of the whole
            component and also reduces the complexity, we decided to use Redux
            with RTK creating a single end-point with tag values.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673297148/portofolio/lxxerosnmpk43ccs8jtn.png"
          alt=""
          className="img--border Problems_and_thought_img"
        />
      </Box>

      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography sx={{ mb: 1 }}>
          I would certainly have a lot to write on this topic, but the most
          important ones involved co-working with all members along the
          development process. I also realized that it is crucial to define an
          initial plan before any code in order to optimize the outcome. Beside
          that, I reinforced my ability to search for solutions throughout the
          community and the official documentations.
        </Typography>
        <Typography>
          As my first larger project, I learned a lot of lessons regarding React
          Hooks, Git management, NodeJs/Express implementations, consequently
          designing and creating an API with integration between front-end and
          back-end, as well as the use of technologies like Cloudinary, Redux
          tool Kit, Figma, Postman.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default Melody;
