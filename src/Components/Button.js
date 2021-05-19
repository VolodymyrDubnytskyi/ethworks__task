import React from "react";

const Button = ({ title, nameOfClass }) => {
  return <button className={`btn ${nameOfClass}`}>{title}</button>;
};
export default Button;
