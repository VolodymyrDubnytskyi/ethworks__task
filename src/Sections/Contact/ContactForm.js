import React from "react";
import Button from "Components/Button";
import Chekbox from "Components/Chekbox";
import Input from "Components/Input";

function ContactForm() {
  return (
    <form action="#" className="contact__form">
      <Input
        type="text"
        nameOfClass="contact__input"
        placeholderText="Your Name"
      />
      <Input
        type="text"
        nameOfClass="contact__input"
        placeholderText="Your Email"
      />
      <Chekbox />
      <Button title="Send" nameOfClass="contact__submit" />
    </form>
  );
}
export default ContactForm;
