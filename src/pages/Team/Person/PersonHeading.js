import React from "react";

const PersonHeading = ({ name, position }) => {
  return (
    <>
      <h2 className="person__name">{name}</h2>
      <p className="person__position">{position}</p>
    </>
  );
};
export default PersonHeading;
