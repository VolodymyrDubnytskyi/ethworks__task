import React from "react";
import ContactDescription from "pages/Contact/ContactDescription";
import ContactForm from "pages/Contact/ContactForm";
import ContactHeading from "pages/Contact/ContactHeading";

const Contact = () => {
  return (
    <section className="contact" id="contactSection">
      <ContactHeading heading="contact us" />
      <ContactDescription description="Most calendars are designed for teams. Slate is designed for freelancers" />
      <ContactForm />
    </section>
  );
};
export default Contact;
