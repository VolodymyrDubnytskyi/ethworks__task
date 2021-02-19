import React from "react";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";
import FooterContact from "./FooterContact";
import FooterMenu from "./FooterMenu";

const Footer = (props) => {
  return (
    <footer className="footer">
      <section className="footer__top_layer container">
        <Logo nameOfClass="footer__logo"/>
        <FooterContact email="have@nicecoding.io" title="Contact us:" />
        <Button title="Read Whitepaper" nameOfClass="footer__btn" />
      </section>
      <section className="footer__bottom_layer">
        <FooterMenu/>
      </section>
    </footer>
  );
};
export default Footer;
