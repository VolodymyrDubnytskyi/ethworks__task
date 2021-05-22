import React from "react";
import PersonImg from "organisms/Team/Person/components/PersonImg";
import PersonHeading from "organisms/Team/Person/components/PersonHeading";
import PersonDescription from "organisms/Team/Person/components/PersonDescription";
import PersonSocialMedia from "organisms/Team/Person/components/PersonSocialMedia";

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
