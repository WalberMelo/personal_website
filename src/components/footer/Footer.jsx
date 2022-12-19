import React from "react";
import "./footer.css";
import logoDark from "../../assets/logo/logo_dark.png";
import logoLight from "../../assets/logo/logo_light.png";
//Material UI //
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer({ theme }) {
  const { mode } = theme.palette;
  console.log(mode);

  let year = new Date();
  let currentYear = year.getFullYear();

  const logoImage = () => {
    if (mode === "light") {
      return <img src={logoLight} className="logo_footer" />;
    }
    if (mode === "dark") {
      return <img src={logoDark} className="logo_footer" />;
    }
  };

  return (
    <section className="section-footer">
      <footer className="footer">
        <div className="footer-logo">
          {logoImage()}
          <p class="copyright">
            Copyright &copy; <span class="year">{currentYear}</span> by Walber
            Melo
          </p>
        </div>
        <div className="footer-social-links">
          <a
            className="footer-link"
            href="https://github.com/WalberMelo"
            target="_blank"
          >
            <p>GitHub</p>
            <GitHubIcon sx={{ fontSize: 30 }} className="github" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/walberdemelo/"
            target="_blank"
          >
            <p>Linkedin</p>
            <LinkedInIcon
              sx={{ fontSize: 30, color: "#006ca9" }}
              className="linkedin"
            />
          </a>
          <a className="footer-link" href="mailto:dev4wm@gmail.com">
            <p>Email</p>
            <EmailIcon
              sx={{
                fontSize: 30,
                color: "#bbd6fb",
                border: "2px solid #9ec2f5;",
                borderRadius: "50%",
                p: "2px",
              }}
              className="email"
            />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
