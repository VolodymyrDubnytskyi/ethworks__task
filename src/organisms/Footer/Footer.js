import React from "react";
import FooterContact from "organisms/Footer/components/FooterContact";
import FooterMenu from "organisms/Footer/components/FooterMenu";
import CustomButton from "atoms/CustomButton";
import Logo from "atoms/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__topLayer container">
        <Logo nameOfClass="footer__logo" />
        <FooterContact email="have@nicecoding.io" title="Contact us:" />
        <CustomButton title="Read Whitepaper" nameOfClass="footer__btn" />
      </section>
      <section className="footer__bottomLayer">
        <FooterMenu />
      </section>
    </footer>
  );
};

export default Footer;
