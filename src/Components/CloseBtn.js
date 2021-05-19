import React from "react";

const CloseBtn = ({setPersonModal}) => {
  return (
    <div className="close_btn" onClick={() => setPersonModal("")}>
      <span className="close_btn__vector"></span>
      <span className="close_btn__vector"></span>
    </div>
  );
};
export default CloseBtn;
