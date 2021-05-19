import React from "react";
import FooterContact from "Sections/Footer/FooterContact";
import FooterMenu from "Sections/Footer/FooterMenu";
import Button from "Components/Button";
import Logo from "Components/Logo";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__top_layer container">
        <Logo nameOfClass="footer__logo" />
        <FooterContact email="have@nicecoding.io" title="Contact us:" />
        <Button title="Read Whitepaper" nameOfClass="footer__btn" />
      </section>
      <section className="footer__bottom_layer">
        <FooterMenu />
      </section>
    </footer>
  );
}
export default Footer;
