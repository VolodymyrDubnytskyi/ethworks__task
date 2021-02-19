import React from "react";
import footerMenu from "../../data/footerMenu";

const FooterMenu = (props) => {
  return (
    <ul className="footer__menu">
      {footerMenu.map((item) => {
        const { id, name } = item;
        return (
          <li key={id} className="footer__menu_item">
            <a href="#" className="footer__menu_link">
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default FooterMenu;
