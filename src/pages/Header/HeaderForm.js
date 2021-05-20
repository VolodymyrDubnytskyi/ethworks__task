import React from "react";
import HeaderFomrHeading from "pages/Header/HeaderFomrHeading";
import CustomButton from "atoms/CustomButton";
import CustomInput from "atoms/CustomInput";

const HeaderForm = () => {
  return (
    <form className="header__form_wrapper">
      <HeaderFomrHeading formHeading="Subscribe and get the lastes information" />
      <div className="header__input_wrapper">
        <CustomInput
          nameOfClass="header__input input"
          type="email"
          placeholderText="Enter your email"
        />
        <CustomButton title="Subscribe" nameOfClass="header__form_btn" />
      </div>
    </form>
  );
};

export default HeaderForm;
