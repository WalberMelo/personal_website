import "./header.css";
import "../../pages/home/sectionHero/hero.css";
import React from "react";
import Logo from "../../assets/header/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className="header fadeIn">
      <div className="header-logo fadeIn ">
        <img className="logo" alt="logo" src={Logo} />
      </div>
      <div className="header-main-nav">
        <nav>
          <ul className="main-nav-list">
            <li className="main-nav-link">
              <Link activeClass="active" smooth spy to="hero">
                Home
              </Link>
            </li>
            <li className="main-nav-link">
              <Link activeClass="active" smooth spy to="about">
                About me
              </Link>
            </li>
            <li className="main-nav-link ">
              <Link activeClass="active" smooth spy to="skills">
                Skills
              </Link>
            </li>
            <li className="main-nav-link nav-skills">
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
