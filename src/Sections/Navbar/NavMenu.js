import React from "react";
import navMenu from "data/navMenu";
import NavMenuItem from "Sections/Navbar/NavMenuItem";

function NavMenu() {
  return (
    <ul className="nav__menu">
      {navMenu.map((item) => {
        const { id } = item;
        return <NavMenuItem key={id} item={item} />;
      })}
    </ul>
  );
}
export default NavMenu;
