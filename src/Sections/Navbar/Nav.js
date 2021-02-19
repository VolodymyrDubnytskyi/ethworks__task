import React from "react";
import Logo from "../../Components/Logo";
import NavMenu from "./NavMenu";

const Nav = (props) => {
  const { navMenu } = props;
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <Logo nameOfClass="nav__logo" />
        <NavMenu navMenu={navMenu} />
      </div>
    </nav>
  );
};
export default Nav;
