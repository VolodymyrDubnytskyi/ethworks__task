import React from "react";

const FooterMenuItem = ({ name }) => {
  return (
    <li className="footer__menu_item">
      <a href="#" className="footer__menu_link">
        {name}
      </a>
    </li>
  );
};
export default FooterMenuItem;
