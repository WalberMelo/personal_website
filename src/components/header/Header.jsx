import "./header.css";
import React from "react";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-logo fadeIn ">
        <img className="logo" alt="logo" src={Logo} />
      </div>
      <div className="header-main-nav">
        <nav>
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#portofolio">
                Projects
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-skills" href="#skills">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
