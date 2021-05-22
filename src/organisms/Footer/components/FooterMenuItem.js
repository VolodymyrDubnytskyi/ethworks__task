import React from "react";

const FooterMenuItem = ({ name }) => {
  return (
    <li className="footer__menuItem">
      <a href="#" className="footer__menuLink">
        {name}
      </a>
    </li>
  );
};

export default FooterMenuItem;
