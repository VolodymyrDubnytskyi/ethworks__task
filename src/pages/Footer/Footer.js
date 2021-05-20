import React from "react";
import FooterContact from "pages/Footer/FooterContact";
import FooterMenu from "pages/Footer/FooterMenu";
import CustomButton from "atoms/CustomButton";
import Logo from "atoms/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__top_layer container">
        <Logo nameOfClass="footer__logo" />
        <FooterContact email="have@nicecoding.io" title="Contact us:" />
        <CustomButton title="Read Whitepaper" nameOfClass="footer__btn" />
      </section>
      <section className="footer__bottom_layer">
        <FooterMenu />
      </section>
    </footer>
  );
};

export default Footer;
