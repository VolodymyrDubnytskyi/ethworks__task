import React from "react";
import CustomButton from "atoms/CustomButton";
import CustomCheckbox from "atoms/CustomCheckbox";
import CustomInput from "atoms/CustomInput";

const ContactForm = () => {
  return (
    <form action="#" className="contact__form">
      <CustomInput
        type="text"
        nameOfClass="contact__input"
        placeholderText="Your Name"
      />
      <CustomInput
        type="text"
        nameOfClass="contact__input"
        placeholderText="Your Email"
      />
      <CustomCheckbox />
      <CustomButton title="Send" nameOfClass="contact__submit" />
    </form>
  );
};

export default ContactForm;
