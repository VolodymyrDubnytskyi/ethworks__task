import React from "react";
import logo from "../assets/logo.svg";

const Logo = (props) => {
  const { nameOfClass } = props;
  return <img src={logo} alt="logo" className={nameOfClass} />;
};
export default Logo;
