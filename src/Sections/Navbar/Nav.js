import React from "react";
import Logo from "Components/Logo";
import NavMenu from "Sections/Navbar/NavMenu";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <Logo nameOfClass="nav__logo" />
        <NavMenu />
      </div>
    </nav>
  );
}
export default Nav;
