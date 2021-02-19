import React from "react";
import { Link } from "react-scroll";

const NavMenu = (props) => {
  const { navMenu } = props;
  return (
    <ul className="nav__menu">
      {navMenu.map((item) => {
        const { id, name, target } = item;
        return (
          <li key={id} className="nav__item">
            <Link 
            className='nav__link'
            activeClass="nav__link--active"
            to={target} 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-300}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavMenu;
