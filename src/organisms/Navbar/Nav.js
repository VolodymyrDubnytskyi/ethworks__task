import React from "react";
import Logo from "atoms/Logo";
import NavMenu from "organisms/Navbar/components/NavMenu";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <Logo nameOfClass="nav__logo" />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Nav;
