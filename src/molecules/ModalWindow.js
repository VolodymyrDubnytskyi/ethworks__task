import React from "react";
import PersonHeading from "organisms/Team/Person/components/PersonHeading";
import CloseButton from "atoms/CloseButton";

const ModalWindow = ({
  setActiveModal,
  modal,
  modalDescription: { name, position, fullDescription },
}) => {
  return (
    <div className="modal">
      <div className="modal__container" ref={modal}>
        <PersonHeading name={name} position={position} />
        <p className="modal__description">{fullDescription}</p>
        <CloseButton setActiveModal={setActiveModal} />
      </div>
    </div>
  );
};

export default ModalWindow;