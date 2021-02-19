import React from "react";
import { Link } from "react-scroll";

const Arrow = () => {
  return (
    <div className="circle">
      <Link
        to="teamSection"
        className="arrow__link"
        spy={true}
        smooth={true}
        duration={500}
        offset={-200}
      />
    </div>
  );
};
export default Arrow;
