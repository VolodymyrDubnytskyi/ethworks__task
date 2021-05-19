import React from "react";
import mainHeading from "data/mainHeading";
import HeaderHeading from "Sections/Header/HeaderHeading";
import HeaderForm from "Sections/Header/HeaderForm";
import HeaderVideo from "Sections/Header/HeaderVideo";
import SocialMedia from "Components/SocialMedia";
import Arrow from "Components/Arrow";

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
