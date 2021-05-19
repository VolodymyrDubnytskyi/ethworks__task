import React from "react";

const PersonDescription = ({ choosePerson, person }) => {
  const { description } = person;
  return (
    <p className="person__description" onClick={() => choosePerson(person)}>
      {description}
    </p>
  );
};

export default PersonDescription;
