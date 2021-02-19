import React from "react";

const Button = (props) => {
  const { title, nameOfClass } = props;
  return <button className={`btn ${nameOfClass}`}>{title}</button>;
};
export default Button;
