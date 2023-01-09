import React from "react";
import "./logo.css";
import LogoImg from "../../assets/header/logo.svg";
import { useNavigate } from "react-router-dom";

function Logo() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <img
        className="logoPages"
        alt="logo"
        src={LogoImg}
        onClick={routeChange}
      />
    </div>
  );
}

export default Logo;
