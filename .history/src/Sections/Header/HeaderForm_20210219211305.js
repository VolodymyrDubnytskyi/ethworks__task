import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const HeaderForm = (props) => {
  return (
    <form className="header__form_wrapper">
      <h2 className="header__form_heading">
        Subscribe and get the lastes information
      </h2>
      <div className="header__input_wrapper">
        <Input
          nameOfClass="header__input input"
          type="text"
          placeholderText="Enter your email"
        />
        <Button title="Subscribe" nameOfClass="header__form_btn" />
      </div>
    </form>
  );
};
export default HeaderForm;
