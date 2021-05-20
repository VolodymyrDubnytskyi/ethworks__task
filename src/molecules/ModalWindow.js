import React from "react";
import PersonHeading from "pages/Team/Person/PersonHeading";
import CloseBtn from "atoms/CloseBtn";

const ModalWindow = ({
  setPersonModal,
  modal,
  personModal: { name, position, fullDescription },
}) => {
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
