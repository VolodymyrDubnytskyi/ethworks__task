import React from "react";
import PersonHeading from "../Sections/Content/PersonHeading";
import CloseBtn from "./CloseBtn";

const ModalWindow = (props) => {
  const { setPerson, modal } = props;
  const { name, position, fullDescription } = props.person;
  return (
    <div className="modal" >
      <div className="modal__container" ref={modal}>
        <PersonHeading name={name} position={position} />
        <p className="modal__description">{fullDescription}</p>
        <CloseBtn setPerson={setPerson}/>
      </div>
    </div>
  );
};
export default ModalWindow;
