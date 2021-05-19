import React from "react";
import PersonHeading from "../Sections/Team/Person/PersonHeading";
import CloseBtn from "./CloseBtn";

const ModalWindow = ({ setPersonModal, modal, personModal }) => {
  const { name, position, fullDescription } = personModal;
  return (
    <div className="modal">
      <div className="modal__container" ref={modal}>
        <PersonHeading name={name} position={position} />
        <p className="modal__description">{fullDescription}</p>
        <CloseBtn setPersonModal={setPersonModal} />
      </div>
    </div>
  );
};
export default ModalWindow;
