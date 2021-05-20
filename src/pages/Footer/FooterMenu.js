import React from "react";
import footerMenu from "data/footerMenu";
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu() {
  return (
    <ul className="footer__menu">
      {footerMenu.map((item) => {
        const { id, name } = item;
        return <FooterMenuItem key={id} name={name} />;
      })}
    </ul>
  );
}
export default FooterMenu;
