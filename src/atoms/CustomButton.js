import React from "react";

const CustomButton = ({ title, nameOfClass }) => {
  return <button className={`btn ${nameOfClass}`}>{title}</button>;
};

export default CustomButton;
