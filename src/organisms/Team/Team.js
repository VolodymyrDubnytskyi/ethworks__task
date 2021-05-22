import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import team from "data/team";
import breakPoints from "data/carouselBreakPoints.json";
import Person from "organisms/Team/Person/Person";
import ModalWindow from "molecules/ModalWindow";

const Team = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [modalDescription, setModalDescription] = useState("");
  const modal = useRef(null);

  const choosePerson = (person) => {
    setActiveModal(true);
    setModalDescription(person);
  };

  const detectOutsideClick = (e) =>
    modal.current && !modal.current.contains(e.target) && setActiveModal(false);

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
      {activeModal && (
        <ModalWindow
          modal={modal}
          modalDescription={modalDescription}
          setActiveModal={setActiveModal}
        />
      )}
    </section>
  );
};

export default Team;
