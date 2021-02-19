import React from "react";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";
import FooterContact from "./FooterContact";
import footerMenu from "../../data/footerMenu";

const Footer = (props) => {
  return (
    <footer className="footer">
      <section className="footer__top_layer container">
        <Logo nameOfClass="footer__logo"/>
        <FooterContact email="have@nicecoding.io" title="Contact us:" />
        <Button title="Read Whitepaper" nameOfClass="footer__btn" />
      </section>
      <section className="footer__bottom_layer">
        <ul className="footer__menu">
          {footerMenu.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} className="footer__menu_item">
                <a href="#" className="footer__menu_link">{name}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
