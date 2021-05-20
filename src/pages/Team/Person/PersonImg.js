import React from "react";

const PersonImg = ({ img, name }) => {
  return <img src={img} alt={`foto ${name}`} className="person__img" />;
};
export default PersonImg;
