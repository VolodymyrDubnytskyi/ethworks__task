import React from "react";
import HeaderHeading from "organisms/Header/components/HeaderHeading";
import HeaderForm from "organisms/Header/components/HeaderForm";
import HeaderVideo from "organisms/Header/components/HeaderVideo";
import SocialMedia from "molecules/SocialMediaContainer";
import Arrow from "atoms/Arrow";

const Header = () => {
  return (
    <header className="header" id="headerSection">
      <div className="header__wrapper container">
        <section className="header__content">
          <HeaderHeading mainHeading={"The first fully-automatic social crypto trading platform with real crypto currency"} />
          <HeaderForm />
          <SocialMedia />
        </section>
        <section className="header__videoContainer">
          <HeaderVideo />
        </section>
        <Arrow />
      </div>
    </header>
  );
};

export default Header;
