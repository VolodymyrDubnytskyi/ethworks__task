import React from "react";
import footerMenu from "data/footerMenu.json";
import FooterMenuItem from "organisms/Footer/components/FooterMenuItem";

const FooterMenu = () => {
  return (
    <ul className="footer__menu">
      {footerMenu.map((item) => {
        const { id, name } = item;
        return <FooterMenuItem key={id} name={name} />;
      })}
    </ul>
  );
};

export default FooterMenu;
