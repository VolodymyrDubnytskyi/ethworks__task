import React from "react";
import SocialMedia from "../../Components/SocialMedia";
import Arrow from "../../Components/Arrow";
import HeaderForm from "./HeaderForm";
import HeaderVideo from "./HeaderVideo";

const Header = (props) => {
  const { mainHeading } = props;
  return (
    <header className="header" id="headerSection">
      <div className="header__wrapper container">
        <section className="header__content">
          <h1 className="header__main_heading">{mainHeading}</h1>
          <HeaderForm />
          <SocialMedia/>
          <Arrow />
        </section>
        <section className="header__video_container">
          <HeaderVideo />
        </section>
      </div>
    </header>
  );
};
export default Header;
