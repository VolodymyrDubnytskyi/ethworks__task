import React from "react";
import HeaderFomrHeading from "Sections/Header/HeaderFomrHeading";
import Button from "Components/Button";
import Input from "Components/Input";

function HeaderForm() {
  return (
    <form className="header__form_wrapper">
      <HeaderFomrHeading formHeading="Subscribe and get the lastes information" />
      <div className="header__input_wrapper">
        <Input
          nameOfClass="header__input input"
          type="email"
          placeholderText="Enter your email"
        />
        <Button title="Subscribe" nameOfClass="header__form_btn" />
      </div>
    </form>
  );
}
export default HeaderForm;
