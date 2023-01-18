import "./header.css";
import "../../pages/home/sectionHero/hero.css";
import React from "react";
import Logo from "../../assets/header/logo.svg";
import { NavLink } from "react-router-dom";

function HeaderPages({ theme }) {
  const { mode } = theme.palette;
  let borderRightColor;

  if (mode === "light") {
    borderRightColor = "#909090";
  }
  if (mode === "dark") {
    borderRightColor = "white";
  }

  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" alt="logo" src={Logo} />
      </div>
      <div className="header-main-nav">
        <nav>
          <ul className="main-nav-list">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#a7c8f7" : "inherit",
              })}
              className="main-nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#a7c8f7" : "inherit",
                borderRightColor: borderRightColor,
              })}
              className="main-nav-link"
            >
              About me
            </NavLink>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "#a7c8f7" : "inherit",
                border: "none",
              })}
              className="main-nav-link"
            >
              Projects
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPages;
