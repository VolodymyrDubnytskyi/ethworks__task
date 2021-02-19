import React from "react";

const PersonHeading = (props) => {
  const { name, position } = props;
  return (
    <>
      <h2 className="person__name">{name}</h2>
      <p className="person__position">{position}</p>
    </>
  );
};
export default PersonHeading;
