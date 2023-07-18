import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

//Components
import foto from "../../../assets/hero/man.jpeg";
import Aspas from "../../../assets/hero/aspas.png";
import Greeting from "./Greeting";

//Material UI //
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export function Hero(theme) {
  const navigate = useNavigate();

  let mode = theme;
  const renderThemeColor = () => {
    if (mode?.theme === "light") {
      return <strong className="developer--light">Developer</strong>;
    }
    if (mode?.theme === "dark") {
      return <strong className="developer--dark">Developer</strong>;
    }
  };

  return (
    <section className="section-hero" id="scrollToTop">
      <div className="hero__container">
        <div className="hero__container--text box">
          <div className="hero-text--greetings fadeIn">
            <img src={Aspas} className="hero-img--greetings" alt="animation" />
            <div>
              <Greeting />
            </div>
          </div>

          <div className="hero-text">
            <p className="hero-text--name">
              <span>Hi there, I'm</span>
              <br />
              <span>
                <p className="hero-name-dev">Walber Melo</p>
              </span>
              <br />
            </p>
            <p className="hero-text--job">
              <span>Web</span> <span>Designer</span> <span>and</span>
              <br />
              <span>Full Stack </span>
              <span>{renderThemeColor()}</span>
            </p>
          </div>
          <span>
            <button onClick={() => navigate("/projects")} className="btn-hero">
              View My Portfolio
            </button>
          </span>
        </div>
        <div className="hero-img--box box">
          <span>
            <img src={foto} alt="Walber Melo" />
          </span>
        </div>
        <div className="hero-social--box box">
          <a href="https://github.com/WalberMelo" target="_blank">
            <GitHubIcon className="github" />
          </a>
          <a href="https://www.linkedin.com/in/walberdemelo/" target="_blank">
            <LinkedInIcon sx={{ color: "#006ca9" }} className="linkedin" />
          </a>
          <a
            href="mailto:dev4wm@gmail.com
    "
          >
            <EmailIcon
              sx={{
                color: "#bbd6fb",
                border: "2px solid #9ec2f5;",
                borderRadius: "50%",
                p: "2px",
              }}
              className="email"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
