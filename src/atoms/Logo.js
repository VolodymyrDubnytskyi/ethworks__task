import React from "react";
import logo from "../assets/logo.svg";

const Logo = ({nameOfClass}) => {
  return <img src={logo} alt="logo" className={nameOfClass} />;
};
export default Logo;
