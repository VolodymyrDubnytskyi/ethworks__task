import React from "react";

const PersonImg = ({ img, name }) => {
  return <img src={img} alt={name} className="person__img" />;
};

export default PersonImg;
