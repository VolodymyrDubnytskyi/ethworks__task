import React from "react";
import PersonImg from "pages/Team/Person/PersonImg";
import PersonHeading from "pages/Team/Person/PersonHeading";
import PersonDescription from "pages/Team/Person/PersonDescription";
import PersonSocialMedia from "pages/Team/Person/PersonSocialMedia";

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
