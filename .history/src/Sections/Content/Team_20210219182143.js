import React, { useEffect, useRef, useState } from "react";
import ModalWindow from "../../Components/ModalWindow";
import team from "../../data/team";
import PersonHeading from "./PersonHeading";
import PersonSocialMedia from "./PersonSocialMedia";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../data/carouselBreakPoints";

const Team = () => {
  const [person, setPerson] = useState("");
  const modal = useRef(null);
  const choosePerson = (person) => setPerson(person);
  const detectOutsideClick = (e) =>
    modal.current && !modal.current.contains(e.target) && setPerson("");

  useEffect(() => {
    document.addEventListener("mousedown", detectOutsideClick);
    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
    };
  });

  return (
    <section className="team container" id="teamSection">
      <h3 className="team__heading">TEAM</h3>
      <div className="team__container ">
        <Carousel breakPoints={breakPoints}>
          {team.map((person) => {
            const {
              img,
              name,
              position,
              description,
              id,
              facebook,
              linkedin,
            } = person;
            return (
              <div key={id} className="person" tabindex={null}>
                <img src={img} alt={`foto ${name}`} className="person__img" />
                <PersonHeading name={name} position={position} />
                <p
                  className="person__description"
                  onClick={() => choosePerson(person)}
                >
                  {description}
                </p>
                <PersonSocialMedia facebook={facebook} linkedin={linkedin} />
              </div>
            );
          })}
        </Carousel>
      </div>
      {person && (
        <ModalWindow modal={modal} person={person} setPerson={setPerson} />
      )}
    </section>
  );
};
export default Team;
