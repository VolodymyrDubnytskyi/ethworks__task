import React from "react";

const PersonDescription = ({ choosePerson, person, person: { description } }) => {
  return (
    <p className="person__description" onClick={() => choosePerson(person)}>
      {description}
    </p>
  );
};

export default PersonDescription;
