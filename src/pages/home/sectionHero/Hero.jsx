import "./hero.css";
import React from "react";

//Components
import foto from "../../../assets/hero/man.jpeg";
import Aspas from "../../../assets/hero/aspas.png";
import Greeting from "./Greeting";

//Material UI //
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export function Hero() {
  return (
    <section className="section-hero" id="hero">
      <div className="hero">
        <div className="hero-text--box">
          <div className="hero-text--greetings fadeIn">
            <img src={Aspas} className="hero-img--greetings" />
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
              <span>
                <strong> Developer</strong>
              </span>
            </p>
          </div>
          <span>
            <button className="btn-hero">View My Portfolio</button>
          </span>
        </div>

        <div className="hero-social--box">
          <GitHubIcon sx={{ fontSize: 40 }} className="github" />
          <LinkedInIcon
            sx={{ fontSize: 45, color: "#006ca9" }}
            className="linkedin"
          />
          <EmailIcon
            sx={{
              fontSize: 40,
              color: "#bbd6fb",
              border: "2px solid #9ec2f5;",
              borderRadius: "50%",
              p: "2px",
            }}
            className="email"
          />
        </div>

        <div className="hero-img--box">
          <span>
            <img src={foto} alt="Walber Melo" />
          </span>
        </div>
      </div>
    </section>
  );
}
