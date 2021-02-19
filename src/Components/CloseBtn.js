import React from "react";

const CloseBtn = (props) => {
  const { setPerson } = props;
  return (
    <div className="close_btn" onClick={() => setPerson("")}>
      <span className="close_btn__vector"></span>
      <span className="close_btn__vector"></span>
    </div>
  );
};
export default CloseBtn;
