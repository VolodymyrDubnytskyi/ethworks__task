import React from "react";

const CloseButton = ({setActiveModal}) => {
  return (
    <div className="closeBtn" onClick={() => setActiveModal(false)}>
      <span className="closeBtn__vector"></span>
      <span className="closeBtn__vector"></span>
    </div>
  );
};

export default CloseButton;
