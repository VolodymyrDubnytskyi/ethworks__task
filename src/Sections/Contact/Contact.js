import React from "react";
import Button from "../../Components/Button";
import Chekbox from "../../Components/Chekbox";
import Input from "../../Components/Input";

const Contact = () => {
  return (
    <section className="contact" id='contactSection'>
      <h3 className="contact__heading">contact us</h3>
      <p className="contact__description">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
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
        <Button 
        title='Send'
        nameOfClass='contact__submit'/>
      </form>
    </section>
  );
};
export default Contact;
