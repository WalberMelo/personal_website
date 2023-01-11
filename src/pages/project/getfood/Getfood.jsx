import "../melody/melody.css";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { SiVite, SiReactrouter, SiJavascript } from "react-icons/si";

function Getfood({ theme }) {
  // const { mode } = theme.palette;

  return (
    <main>
      <div className="introduction">
        <div className="summary">
          <h1>GetFood </h1>
          <Typography>
            GetFood is a beautiful landing page that guide customers to order
            healthy food offering a vast range of menu for all kinds of
            taste.The page was built using basic web development technologies,
            HTML, CSS and basic Javascript.
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
                href="https://getfood-wm.netlify.app"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673446017/portofolio/getfood/wcbypdwr1obs5sfuuxsg.png"
              alt="getfood page"
              className="project-img img--border"
            />
          </div>
          <Box sx={{ mt: 12 }}>
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Responsive design</li>
              <li>Fix nav bar</li>
              <li>Web accessibility</li>
              <li>Purchase customer orientated</li>
              <li>Subscribe form section</li>
            </ul>
          </Box>
          <Box sx={{ mt: 12 }}>
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>HTML</li>
              <li>CSS</li>
              <li>Java Script</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              This landing page provides the basic structure of sites, which
              might be enhanced and modified by other technologies. Basically,
              the stack used makes part of the front end of every web page and
              application.The responsive layout implement also consist in the
              standard Mobile-first pattern which have to be apply in every
              front end approach. In additional, accessibility has been
              considered increasing the user experience in the page.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                justifyItems: "center",
              }}
            >
              <img
                src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673454307/portofolio/getfood/ujfdjrjgbrtxcga95gst.png"
                alt="getfood mobile"
                className="getfood_design"
              />
              <img
                src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673454323/portofolio/getfood/vfmwenpdlwvv8rknsd90.png"
                alt="getfood mobile"
                className="getfood_design"
              />
            </Box>
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The page has been structured using semantic HTML elements based on
            the meaning of each element, not its appearance as it is considered
            in search engine optimization. I styled the page with pure CSS
            taking into account aspects of web design necessary to create an
            identity for the final product delivery. JavaScript was slightly
            used only to control some behavior of different elements such as
            smooth scrolling animation and sticky navigation.
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
            <FaCss3 color="#61DBFB" fontSize={30} />
            <Typography
              sx={{ color: "#61DBFB", ml: "1rem" }}
              component={"span"}
            >
              CSS
            </Typography>
          </div>
          <div className="stack-icon">
            <SiJavascript color="#F0DB4F" fontSize={30} />
            <Typography sx={{ ml: "1rem" }} component={"span"}>
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
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673458609/portofolio/getfood/n34qghnqpagtik07bumm.png"
            alt=""
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673458617/portofolio/getfood/fuothbzwdlyxufpvzwz3.png"
            alt=""
            className="project-img img--border"
          />
        </div>
      </Box>
      <Box className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            As most of vanilla JavaScript, which does not have any additional
            libraries, I ran into some problems that would easily be solved by
            using them. DOM manipulation was extremely necessary in order to
            create user interactions on the page, and CSS media queries for
            achieve the responsive mobile design without any extra dependencies.
          </Typography>
        </div>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673458624/portofolio/getfood/rfwnml8jgtov2n0uoeam.png"
          alt=""
          className="img--border Problems_and_thought_img"
        />
      </Box>
      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          The project contains the basic fundamentals of web development, which
          gave me the opportunity to refresh HTML, CSS and JavaScript. With the
          implementation of semantic HTML, I was able to read the page much more
          easily, also understanding the importance of the SEO. I take into
          account context involved. The development allowed me to deepen some
          design concepts involved for creating a business product.
        </Typography>
      </div>
    </main>
  );
}

export default Getfood;
