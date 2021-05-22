import React from "react";
import HeaderFomrHeading from "organisms/Header/components/HeaderFomrHeading";
import CustomButton from "atoms/CustomButton";
import CustomInput from "atoms/CustomInput";

const HeaderForm = () => {
  return (
    <form className="header__formWrapper">
      <HeaderFomrHeading formHeading="Subscribe and get the lastes information" />
      <div className="header__inputWrapper">
        <CustomInput
          nameOfClass="header__input input"
          type="email"
          placeholderText="Enter your email"
        />
        <CustomButton title="Subscribe" nameOfClass="header__formBtn" />
      </div>
    </form>
  );
};

export default HeaderForm;
