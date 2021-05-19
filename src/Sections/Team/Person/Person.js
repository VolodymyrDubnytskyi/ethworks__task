import React from "react";
import PersonImg from "Sections/Team/Person/PersonImg";
import PersonHeading from "Sections/Team/Person/PersonHeading";
import PersonDescription from "Sections/Team/Person/PersonDescription";
import PersonSocialMedia from "Sections/Team/Person/PersonSocialMedia";

const Person = ({ person, choosePerson }) => {
  const { img, name, position, facebook, linkedin } = person;
  return (
    <div className="person">
      <PersonImg img={img} name={name} />
      <PersonHeading name={name} position={position} />
      <PersonDescription choosePerson={choosePerson} person={person} />
      <PersonSocialMedia facebook={facebook} linkedin={linkedin} />
    </div>
  );
};

export default Person;
