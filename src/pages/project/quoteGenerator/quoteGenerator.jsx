import "../melody/melody.css";
import React from "react";
import Footer from "../../../components/footer/Footer";

// Material UI
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

// Icons
import {
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  // SiMaterialui,
  SiAmazonaws,
  SiGraphql,
} from "react-icons/si";

function QuoteGenerator({ theme }) {
  const { mode } = theme.palette;

  return (
    <main className="main__projects">
      <div className="introduction">
        <div className="summary">
          <h1>Quote Generator</h1>
          <Typography>
            A full-stack app that generates quotes using ZenQuotes' API and
            allows the user to download them. Throughout the process, I delved
            into various aspects of development, such as state management,
            hooks, debugging, GraphQl modeling, the use of AWS Amplify which
            empowered my development, enabling seamless integration and scalable
            solutions.
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
                href="https://prod.d1h5h8tgqg2cuq.amplifyapp.com/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <b>View site</b>
              </Link>
            </Box>

            <img
              src="https://res.cloudinary.com/devwm/image/upload/v1685985900/portofolio/quotegenerator/ftly0q795ekqbwqm6vgz.png"
              alt="quote generator app"
              className="project-img img--border"
            />
          </Box>
          <Box className="site_features">
            <Typography sx={{ mb: 4 }}>
              <b>Main features</b>
            </Typography>
            <ul className="ul-features">
              <li>Initialized the project with AWS Amplify CLI.</li>
              <li>Configured seamless communication with AWS Amplify.</li>
              <li>Built a powerful GraphQL API with AWS AppSync.</li>
              <li>Strengthened app security with Amazon Cognito and IAM.</li>
              <li>Integrated an AWS Lambda function for serverless.</li>
              <li>
                Leveraged Amazon DynamoDB for efficient NoSQL data storage.
              </li>
              <li>Enhanced performance by decoding Base64 image strings.</li>
              <li>Deployed the Node.js script to AWS Lambda.</li>
              <li>
                Added app hosting with CI/CD pipeline using AWS Amplify &amp;
                GitHub.
              </li>
              <li>Mastered debugging by modifying Amplify build settings.</li>
            </ul>
          </Box>
          <Box className="site_stacks">
            <Typography sx={{ mb: 4 }}>
              <b>Stack</b>
            </Typography>
            <ul className="ul-stack">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Styled Components</li>
              <li>Material UI</li>
              <li>Node JS</li>
              <li>GraphQL</li>
              <li>AWS amplify</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="project-grid">
        <div className="purpose_and_goal title">
          <h2 className="sub-title ">Project purpose and goal</h2>
          <div className="importance">
            <Typography sx={{ mb: 3, paddingRight: 2 }}>
              The purpose of the project was to develop a serverless quote
              generator that leverages AWS as the cloud backend and
              NextJS/TypeScript as the frontend technology stack. The main goal
              was to achieve the generation of images on a server without the
              need for costly software or hardware. This approach allowed for a
              more cost-effective and efficient solution, as the image
              generation process was handled entirely within the serverless
              architecture. By utilizing AWS services, the project aimed to
              provide a scalable and reliable platform for generating quotes,
              enhancing the overall user experience.
            </Typography>
          </div>
        </div>
        <div className="design-figma">
          <div>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ ml: 1, mb: 2, mr: 4 }}>
                <b>Material UI</b>
              </Typography>
              <SiStyledcomponents />
              <Typography sx={{ ml: 1, mb: 2 }}>
                <b> Styled-Components</b>
              </Typography>
            </Box>
            <img
              className="figma-img"
              src="https://res.cloudinary.com/devwm/image/upload/v1686001054/portofolio/quotegenerator/ycd1ip74ystkagscuoqt.png"
              alt="create quote design"
            />
          </div>
        </div>
        <div className="web_stack_technology">
          <h2 className="sub-title">Web Stack and Explanation</h2>
          <Typography sx={{ mb: 3 }}>
            The web stack used in this project includes Next.js, TypeScript,
            Styled Components, Material UI, Node.js, GraphQL, and AWS Amplify.
            It combines these technologies to create an efficient and scalable
            web application. Next.js simplifies development with server-side
            rendering, TypeScript enhances code quality with static typing,
            Styled Components provides modular and maintainable styling,
            Material UI offers visually appealing components, Node.js enables
            server-side application logic, GraphQL provides flexible data
            retrieval, and AWS Amplify simplifies backend infrastructure
            management. Together, these technologies form a powerful web stack
            for building modern and feature-rich applications.
          </Typography>
        </div>
        <div className="stack-icons">
          <div className="stack-icon">
            <SiNextdotjs color="#272c2d" fontSize={30} />
            <Typography
              sx={{ color: "#272c2d", ml: "1rem" }}
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
            <SiGraphql color="#b120ac" fontSize={30} />
            <Typography
              sx={{ color: "#b120ac", ml: "1rem" }}
              component={"span"}
            >
              GraphQL
            </Typography>
          </div>
          <div className="stack-icon">
            <SiAmazonaws color="#c68f18" fontSize={30} />
            <Typography
              sx={{ color: "#c68f18", ml: "1rem" }}
              component={"span"}
            >
              Amplify
            </Typography>
          </div>
        </div>
      </div>

      <div className="web__stack--projects">
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1686001064/portofolio/quotegenerator/hxmiw6fhubs0bvdh0eji.png"
            alt="Project quote generator"
            className="project-img img--border"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1686001075/portofolio/quotegenerator/f2bp7ygskfoqwfp5na5l.png"
            alt="project quote generator"
            className="project-img img--border"
          />
        </div>
      </div>

      <div className="process">
        <div className="Problems_and_thought">
          <h2 className="sub-title">Problems and thought process</h2>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            To enhance performance I had to decoding Base64 image strings. The
            thought process involved optimizing the decoding process,
            integrating efficient libraries, and leveraging AWS Amplify's
            serverless infrastructure. Testing the AWS Lambda function and using
            CloudWatch Logs help me to identify and resolve the errors and
            unexpected behavior.
          </Typography>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1686069438/portofolio/quotegenerator/vnsutbda0eohyvsk2yqp.png"
          alt="quote generated"
          className="img--border Problems_and_thought_img"
        />
      </Box>

      <div className="Lessons_Learned">
        <h2 className="sub-title">Lessons Learned</h2>
        <Typography>
          Lessons learned from this project include exploring various
          development aspects, leveraging AWS Amplify for seamless integration,
          building a cost-effective and efficient solution, understanding the
          power of the web stack, and enhancing performance through decoding
          Base64 image strings. These lessons highlight the importance of
          seamless integration, efficient development, cost-effectiveness, and
          performance optimization in creating a reliable and scalable
          full-stack application.
        </Typography>
      </div>
      <Footer theme={mode} />
    </main>
  );
}

export default QuoteGenerator;
