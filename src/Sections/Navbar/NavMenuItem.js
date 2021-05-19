import React from "react";
import { Link } from "react-scroll";

const NavMenuItem = ({item}) => {
    const { name, target } = item;
  return (
    <li className="nav__item">
      <Link
        className="nav__link"
        activeClass="nav__link--active"
        to={target}
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavMenuItem;
