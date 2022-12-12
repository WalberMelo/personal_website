import "./header.css";
import React from "react";
import Logo from "../../assets/header/logo.svg";
import { smoothNavigation } from "./smoothNavigation.js";

function Header() {
  smoothNavigation();
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
              <a className="main-nav-link" href="#projects">
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
