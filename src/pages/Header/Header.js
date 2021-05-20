import React from "react";
import mainHeading from "data/mainHeading";
import HeaderHeading from "pages/Header/HeaderHeading";
import HeaderForm from "pages/Header/HeaderForm";
import HeaderVideo from "pages/Header/HeaderVideo";
import SocialMedia from "molecules/SocialMediaContainer";
import Arrow from "atoms/Arrow";

function Header() {
  return (
    <header className="header" id="headerSection">
      <div className="header__wrapper container">
        <section className="header__content">
          <HeaderHeading mainHeading={mainHeading} />
          <HeaderForm />
          <SocialMedia />
        </section>
        <section className="header__video_container">
          <HeaderVideo />
        </section>
        <Arrow />
      </div>
    </header>
  );
}
export default Header;
