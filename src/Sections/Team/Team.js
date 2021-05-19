import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import team from "data/team";
import { breakPoints } from "data/carouselBreakPoints";
import Person from "Sections/Team/Person/Person";
import ModalWindow from "Components/ModalWindow";

const Team = () => {
  const [personModal, setPersonModal] = useState("");
  const modal = useRef(null);
  const choosePerson = (person) => setPersonModal(person);
  const detectOutsideClick = (e) =>
    modal.current && !modal.current.contains(e.target) && setPersonModal("");

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
            const { id } = person;
            return (
              <Person key={id} person={person} choosePerson={choosePerson} />
            );
          })}
        </Carousel>
      </div>
      {personModal && (
        <ModalWindow
          modal={modal}
          personModal={personModal}
          setPersonModal={setPersonModal}
        />
      )}
    </section>
  );
};
export default Team;
