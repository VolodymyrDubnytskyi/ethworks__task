import React from "react";
import navMenu from "data/navMenu.json";
import NavMenuItem from "organisms/Navbar/components/NavMenuItem";

const NavMenu = () => {
  return (
    <ul className="nav__menu">
      {navMenu.map((item) => {
        const { id } = item;
        return <NavMenuItem key={id} item={item} />;
      })}
    </ul>
  );
};

export default NavMenu;
