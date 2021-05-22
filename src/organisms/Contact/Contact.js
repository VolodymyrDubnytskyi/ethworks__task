import React from "react";
import ContactDescription from "organisms/Contact/components/ContactDescription";
import ContactForm from "organisms/Contact/components/ContactForm";
import ContactHeading from "organisms/Contact/components/ContactHeading";

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
